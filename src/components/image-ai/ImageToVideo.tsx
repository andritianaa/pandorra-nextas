/* eslint-disable @next/next/no-img-element */
"use client"

import { Loader, Loader2, Sparkles } from 'lucide-react';
import { useOnborda } from 'onborda';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useSWR, { mutate } from 'swr';

import { verifyCredit } from '@/actions/credits.actions';
import { createImageToVideoGeneration } from '@/actions/kling.actions';
import { enhanceVideoPrompt } from '@/actions/openai.actions';
import PromptGuide from '@/app/(main)/video/prompt-guide';
import { MagicCard } from '@/components/animated/magic-ui/magic-card';
import Bounce from '@/components/animated/uibeats/bounce';
import ImageSmooth from '@/components/ImageSmooth';
import { Tooltip } from '@/components/tremor/ui/tooltip';
import { Button } from '@/components/ui/button';
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useUser } from '@/hooks/use-user';
import { fetcher } from '@/lib/utils';
import { Plan, Video } from '@prisma/client';

import type React from "react"
const SkeletonLoader = () => (
  <div className="flex animate-pulse space-x-4">
    <div className="h-64 w-full rounded-lg bg-gray-300"></div>
  </div>
)

export function ImageToVideo({ imageUrl }: { imageUrl: string }) {
  const { t } = useTranslation()
  const { data: histories } = useSWR<Video[]>("/api/video", fetcher)
  const [image, setImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [promptText, setPromptText] = useState("")
  const [duration, setDuration] = useState("5")
  const [ratio, setRatio] = useState("16:9")
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const { toast } = useToast()
  const { user, mutate: mutateUser } = useUser()
  const { startOnborda } = useOnborda()
  const [isEnhancing, setIsEnhancing] = useState(false)

  const handleSubmit = async () => {
    setIsLoading(true)
    if (!image && !promptText) {
      toast({
        title: t(`Error`),
        description: t(`Please select an image or add text for the prompt`),
        variant: "error",
      })
      setIsLoading(false)
      return
    }

    setLoading(true)
    if (
      (user?.plan == Plan.Free || user?.plan == Plan.FreePaid) &&
      !user.permissions.includes("admin")
    ) {
      toast({
        title: t(`Error`),
        description: t(
          `Free plan user cannot generate videos. Please subscribe to use this feature`,
        ),
        variant: "error",
      })
      setIsLoading(false)
      setLoading(false)
      return
    }

    const isEnoughtToken = await verifyCredit(duration == "5" ? 40 : 80)
    if (!isEnoughtToken) {
      toast({
        title: t(`Error`),
        description: t(`You do not have enought token for this generation`),
        variant: "error",
      })
      setIsLoading(false)
      setLoading(false)
      return
    }

    const base64Image = imageUrl

    try {
      const videoDuration = duration === "5" ? 5 : 10
      const videoRatio = ratio === "16:9" ? "16:9" : "9:16"

      const formData = new FormData()
      formData.append("prompt", promptText)
      formData.append("imageUrl", imageUrl)
      formData.append("duration", videoDuration.toString())
      formData.append("aspectRatio", videoRatio)
      formData.append("negativePrompt", "")
      formData.append("cfgScale", "0.5")
      await createImageToVideoGeneration(formData)
      mutate("/api/video")
      window.location.href = "/video"
    } catch (error) {
      toast({
        title: t(`Error`),
        description: t(`Failed to generate video`),
        variant: "error",
      })
    } finally {
      setIsLoading(false)
      setLoading(false)
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPromptText(e.target.value)
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [promptText])

  useEffect(() => {
    if (user) {
      const tourOnboarding = user.tourOnboarding
      if (
        !tourOnboarding.includes("eighthtour") &&
        !tourOnboarding.includes("stop")
      ) {
        startOnborda("eighthtour")
      }
    }
  }, [user, startOnborda])

  const enhancePrompt = async () => {
    setIsEnhancing(true)
    try {
      const promptEnhanced = await enhanceVideoPrompt(promptText)
      mutateUser()
      setPromptText(promptEnhanced)
    } catch (error) {
      toast({
        title: t(`Error`),
        description: t(`Prompt enhancement failed`),
        variant: "error",
        duration: 3000,
      })
    } finally {
      setIsEnhancing(false)
    }
  }

  return (
    <div className="flex w-full flex-col p-4">
      <MagicCard className="overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-50 p-4 shadow-lg">
        <Textarea
          ref={textareaRef}
          value={promptText}
          onChange={handleInput}
          className="mb-4 w-full resize-none overflow-hidden border-0 bg-transparent text-xl shadow-none focus-visible:ring-0"
          id="tour8-step1"
          placeholder={t(`Describe the video you want...`)}
        />
        <Bounce className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger className="w-[100px]" id="tour8-step2">
                <SelectValue placeholder={t(`Duration`)} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 {t(`seconds`)}</SelectItem>
                <SelectItem value="10">10 {t(`seconds`)}</SelectItem>
              </SelectContent>
            </Select>
            <Select value={ratio} onValueChange={setRatio}>
              <SelectTrigger className="w-[140px]" id="tour8-step3">
                <SelectValue placeholder="Aspect Ratio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9:16">{t(`Landscape`)}</SelectItem>
                <SelectItem value="16:9">{t(`Portrait`)}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-end gap-1 p-4 max-lg:w-full max-lg:justify-between max-lg:p-0 max-lg:pr-4">
            <PromptGuide />

            <Tooltip content={t(`Enhance prompt`)}>
              <div
                id="tour6-step2"
                onClick={enhancePrompt}
                className="cursor-pointer rounded p-2 hover:bg-accent hover:text-accent-foreground"
              >
                {isEnhancing ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Sparkles size={20} />
                )}
              </div>
            </Tooltip>
            <Button
              id="tour8-step5"
              className="gap-0 px-6 py-2 text-white transition-all max-lg:w-full"
              onClick={handleSubmit}
              disabled={loading}
            >
              {isLoading && <Loader className="animate-spin" />}
              {t(`Generate Video`)}
              <span className="ml-1 flex items-center justify-center">
                {duration == "5" ? "40" : "80"}
                <img src="/coin.png" className="ml-0.5 h-5 w-auto" />
              </span>
            </Button>
          </div>
        </Bounce>
      </MagicCard>
      <Bounce className="relative mt-6 rounded-lg bg-muted p-4">
        <ImageSmooth
          loading="lazy"
          alt=""
          className="max-h-[50vh] w-auto overflow-hidden rounded-lg object-contain shadow"
          src={imageUrl}
          width="600"
          height="800"
        />
      </Bounce>
    </div>
  )
}

const GenerationSkeleton = () => {
  return (
    <MagicCard gradientSize={700} className="group relative cursor-pointer">
      <Skeleton className="h-[450px] w-full" />
    </MagicCard>
  )
}
