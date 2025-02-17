"use client"
import { Loader2, Sparkles } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getUserGeneration } from '@/actions/generation.action';
import { enhanceImagePrompt } from '@/actions/openai.actions';
import { MagicCard } from '@/components/animated/magic-ui/magic-card';
import Bounce from '@/components/animated/uibeats/bounce';
import { GenerationResult } from '@/components/image-ai/GenerationResult';
import { NothingYet } from '@/components/NothingYet';
import { Skeleton } from '@/components/nyxb/skeleton';
import { Button } from '@/components/tremor/ui/button';
import { Tooltip } from '@/components/tremor/ui/tooltip';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { fetchGenerationResult, generationInsert } from '@/lib/leonardo/fetch';
import { GeneratedImage, Prisma } from '@prisma/client';

export type MainProps = {
  prompt: string
  id: string | undefined
  count: number
  onGenerate: () => void
  onPromptChange: (prompt: string) => void
}

export type GenerationWithImages = Omit<
  Prisma.GenerationGetPayload<{
    include: { generated_images: true }
  }>,
  "generated_images"
> & {
  generated_images: Array<
    Pick<GeneratedImage, "id" | "url" | "nsfw" | "motionMP4URL">
  >
}

export const Main = (props: MainProps) => {
  const { t } = useTranslation()
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const searchParams = useSearchParams()
  const queryPrompt = searchParams?.get("prompt")

  const [isEnhancing, setIsEnhancing] = useState(false)
  const [prompt, setPrompt] = useState(props.prompt)
  const [isLoading, setIsLoading] = useState(false)
  const [generated, setGenerated] = useState<GenerationWithImages>()
  const [history, setHistory] = useState<GenerationWithImages[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (queryPrompt) {
      setPrompt(queryPrompt)
      props.onPromptChange(queryPrompt)
    }
  }, [queryPrompt])

  const handlePromptChange = (p: string) => {
    setPrompt(p)
    props.onPromptChange(p)
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto" // Réinitialiser pour recalculer
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [prompt])

  const generate = () => {
    setIsLoading(true)
    props.onGenerate()
  }
  useEffect(() => {
    if (props.id) {
      const fetch = async () => {
        new Promise((resolve, reject) => {
          const interval = setInterval(async () => {
            try {
              setIsLoading(true)
              const result = await fetchGenerationResult(props.id!)
              if (result && result.generations_by_pk.generated_images.length) {
                const generation = await generationInsert(result)
                setHistory((prev) => [...prev, generation])
                setIsLoading(false)

                clearInterval(interval) // Nettoyer l'intervalle ici
                resolve(result)
                // window.location.reload()
              }
            } catch (error) {
              clearInterval(interval)
              console.error(error)
              reject(error)
            }
          }, 2000)
        })
      }
      fetch().then(() => {})
    }
  }, [props.id, generated])

  useEffect(() => {
    const req = async () => {
      const res = await getUserGeneration()
      setHistory(res)
      setIsLoaded(true)
    }
    req().then(() => {})
  }, [])

  const enhancePrompt = async () => {
    setIsEnhancing(true)
    try {
      const promptEnhanced = await enhanceImagePrompt(prompt)
      handlePromptChange(promptEnhanced)
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
    <Bounce className="flex flex-col justify-center">
      <MagicCard className="mb-4 w-full">
        <Textarea
          id="tour6-step1"
          ref={textareaRef}
          value={prompt}
          onChange={(e) => handlePromptChange(e.target.value)}
          placeholder={t(`Type a prompt...`)}
          className="w-full resize-none overflow-hidden border-0 pt-4 text-xl shadow-none focus-visible:ring-0"
        />
        <div className="flex items-center justify-end gap-2 p-4">
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
            onClick={generate}
            isLoading={isLoading}
            className="text-md"
            id="tour6-step3"
          >
            {t(`Generate`)}
            <p>( {props.count * 5} credits)</p>
          </Button>
        </div>
      </MagicCard>

      {history.length == 0 && isLoaded == true && isLoading == false && (
        <NothingYet
          subtitle={t(`Your image generation will be displayed here`)}
          title={t(`There is no image yet`)}
        />
      )}
      <div className="flex w-full flex-col-reverse gap-4">
        {history.map((h) => (
          <Bounce key={h.id} once className="h-fit w-full">
            <GenerationResult generated={h} key={h.id} />
          </Bounce>
        ))}
        {isLoading && <GenerationSkeleton />}
      </div>
      {!isLoaded && (
        <>
          <Bounce className="flex w-full flex-col-reverse gap-4">
            <GenerationSkeleton />
            <GenerationSkeleton />
            <GenerationSkeleton />
          </Bounce>
        </>
      )}
    </Bounce>
  )
}

const GenerationSkeleton = () => {
  return (
    <MagicCard gradientSize={700} className="group relative cursor-pointer">
      <Skeleton className="h-[450px] w-full" />
    </MagicCard>
  )
}
