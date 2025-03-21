"use client"

import { useState } from 'react';

import { LikePublication } from '@/components/(main)/explore/LikePublication';
import Bounce from '@/components/animated/uibeats/bounce';
import ImageSmooth from '@/components/ImageSmooth';

import PubComment from './PubComment';

interface PubCardProps {
  imageUrl: string
  index: number
  publicationId: string
  likeCount: number
  commentCount: number
  isLiked: boolean
  pubOwner: string
  pubOwnerId: string
  pubOwnerImage: string
  pubDescription: {
    prompt: string
    model: string
    preset: string
  }
  createdAt: Date
}

export default function PubCard(props: PubCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Bounce
      id="tour4-step1"
      once={true}
      className="relative mb-4 flex h-fit flex-col overflow-hidden rounded-lg bg-primary/10 shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute right-2 top-2 z-10 flex items-center gap-3 transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
      >
        <LikePublication
          pubIsLiked={props.isLiked}
          pubLikeCount={props.likeCount}
          publicationId={props.publicationId}
        />
      </div>
      <PubComment
        publication={{
          owner: props.pubOwner,
          ownerId: props.pubOwnerId,
          ownerImage: props.pubOwnerImage,
          id: props.publicationId,
          description: props.pubDescription,
          image: props.imageUrl,
          date: props.createdAt,
        }}
      >
        <ImageSmooth
          width={400}
          height={700}
          className="w-full transform bg-accent object-contain transition-transform duration-500 hover:scale-105 hover:cursor-pointer"
          src={props.imageUrl}
          loading="lazy"
          alt={`Random stock image ${props.index + 1}`}
        />
      </PubComment>

      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
      >
        <p className="text-md font-semibold text-white">{props.pubOwner}</p>
        <p className="truncate-2-lines line-clamp-2 text-xs text-white/80">
          {props.pubDescription.prompt}
        </p>
      </div>
    </Bounce>
  )
}
