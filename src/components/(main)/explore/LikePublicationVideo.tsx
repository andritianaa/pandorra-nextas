"use client"

import { Heart } from "lucide-react"
import { useEffect, useState } from "react"
import { useSWRConfig } from "swr"

import {
  createPubVideoReaction,
  deletePubVideoReaction,
} from "@/actions/pubVideo.actions"

interface LikePubProps {
  pubIsLiked: boolean
  pubLikeCount: number
  publicationId: string
}

export const LikePublicationVideo = (props: LikePubProps) => {
  const [isLiked, setIsLiked] = useState(props.pubIsLiked)
  const [likeCount, setLikeCount] = useState<number>(props.pubLikeCount)
  const { mutate } = useSWRConfig()

  const handleReaction = async () => {
    if (isLiked) {
      setIsLiked(false)
      setLikeCount(likeCount - 1)
      await deletePubVideoReaction(props.publicationId)
      mutate("/api/publication/video")
    } else {
      setIsLiked(true)
      setLikeCount(likeCount + 1)
      await createPubVideoReaction(props.publicationId)
      mutate("/api/publication/video")
    }
  }

  useEffect(() => {}, [likeCount, isLiked])

  return (
    <div
      onClick={handleReaction}
      className={`flex cursor-pointer items-center justify-center gap-1 rounded-full bg-slate-400/40 px-2.5 py-1 text-sm transition-all duration-300 hover:bg-slate-400/60`}
    >
      <p className={`${isLiked ? "text-primary" : "text-white"}`}>
        {likeCount}
      </p>
      <Heart
        strokeWidth={2}
        className={`size-4 transition-colors ${isLiked ? "fill-primary text-primary" : "text-white"}`}
      />
    </div>
  )
}
