"use server"

import { trackUserActivity } from "@/actions/user.ations"
import { currentUser } from "@/lib/current-user"
import { prisma } from "@/prisma"

export const createPublication = async (
  imageUrl: string,
  prompt: string,
  model: string,
  preset: string,
  generationType: string,
) => {
  const user = await currentUser()
  await trackUserActivity("createPublication")

  const publication = await prisma.publication.findFirst({
    where: {
      imageUrl: imageUrl,
    },
  })
  if (publication) throw new Error("An image cannot be published twice")
  if (user) {
    await prisma.publication.create({
      data: {
        userId: user.id,
        imageUrl: imageUrl,
        prompt: prompt,
        model: model,
        preset: preset,
        generationType: generationType,
      },
    })
  } else throw new Error("You are not authenticated")
}

export const createComment = async (text: string, publicationId: string) => {
  await trackUserActivity("createComment")

  const user = await currentUser()

  if (user) {
    await prisma.comment.create({
      data: {
        text: text,
        userId: user.id,
        publicationId: publicationId,
      },
    })
  } else throw new Error("You are not authenticated")
}

export const createPubReaction = async (publicationId: string) => {
  await trackUserActivity("createPubReaction")

  const user = await currentUser()

  if (user) {
    const isExist = await prisma.reaction.findFirst({
      where: {
        userId: user.id,
        publicationId: publicationId,
      },
    })
    if (!isExist) {
      await prisma.reaction.create({
        data: {
          userId: user.id,
          publicationId: publicationId,
        },
      })
    }
  } else throw new Error("You are not authenticated")
}

export const deletePubReaction = async (publicationId: string) => {
  const user = await currentUser()
  await trackUserActivity("deletePubReaction")

  if (user) {
    const isExist = await prisma.reaction.findFirst({
      where: {
        userId: user.id,
        publicationId: publicationId,
      },
    })
    if (isExist) {
      await prisma.reaction.delete({
        where: {
          id: isExist.id,
        },
      })
    }
  }
}

export const createCommentReaction = async (commentId: string) => {
  const user = await currentUser()
  await trackUserActivity("createCommentReaction")

  if (user) {
    const isExist = await prisma.commentReaction.findFirst({
      where: {
        userId: user.id,
        commentId: commentId,
      },
    })
    if (!isExist) {
      await prisma.commentReaction.create({
        data: {
          userId: user.id,
          commentId: commentId,
        },
      })
    }
  } else throw new Error("You are not authenticated")
}

export const deleteCommentReaction = async (commentId: string) => {
  const user = await currentUser()
  await trackUserActivity("deleteCommentReaction")

  if (user) {
    const isExist = await prisma.commentReaction.findFirst({
      where: {
        userId: user.id,
        commentId: commentId,
      },
    })
    if (isExist) {
      await prisma.commentReaction.delete({
        where: {
          id: isExist.id,
        },
      })
    }
  }
}
