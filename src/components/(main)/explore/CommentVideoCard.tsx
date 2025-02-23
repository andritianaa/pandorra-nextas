"use client"

import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

import { createCommentVideoReaction, deleteCommentVideoReaction } from '@/actions/pubVideo.actions';
import { Card, CardContent } from '@/components/tremor/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDate } from '@/lib/formatDate';
import { CommentVideoWithAuthor } from '@/types/publicationType';

interface CommentCardProps {
  comment: CommentVideoWithAuthor
}

export default function CommentVideoCard(props: CommentCardProps) {
  const [isLiked, setIsLiked] = useState<boolean>(props.comment.isLiked)
  const [likeCount, setLikeCount] = useState<number>(
    props.comment.reactionVideoCount,
  )

  const handleReaction = async () => {
    if (isLiked) {
      setIsLiked(false)
      setLikeCount(likeCount - 1)
      await deleteCommentVideoReaction(props.comment.id)
    } else {
      setIsLiked(true)
      setLikeCount(likeCount + 1)
      await createCommentVideoReaction(props.comment.id)
    }
  }

  useEffect(() => {}, [likeCount, isLiked])

  return (
    <Card className="p-0">
      <CardContent className="p-3">
        <div className="flex flex-col gap-3">
          <div className="relative flex items-start gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={props.comment.user.image} alt="User" />
              <AvatarFallback>{props.comment.user.username[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold">
                {props.comment.user.username}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatDate(props.comment.date)}
              </p>
            </div>
            <div className="absolute right-2 flex items-center gap-1">
              {isLiked ? (
                <Heart
                  className="cursor-pointer md:size-4 2xl:size-5"
                  fill="red"
                  color="red"
                  onClick={() => handleReaction()}
                />
              ) : (
                <Heart
                  className="cursor-pointer md:size-4 2xl:size-5"
                  color="gray"
                  onClick={() => handleReaction()}
                />
              )}
              {likeCount !== 0 ? (
                <p className="text-gray-500">{likeCount}</p>
              ) : (
                <p className="text-gray-500">0</p>
              )}
            </div>
          </div>
          <p className="px-2">{props.comment.text}</p>
        </div>
      </CardContent>
    </Card>
  )
}
