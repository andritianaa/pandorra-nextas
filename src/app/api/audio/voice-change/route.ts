import { NextResponse } from "next/server"

import { currentUser } from "@/lib/current-user"
import { prisma } from "@/prisma"

export async function GET() {
  try {
    const user = await currentUser()

    if (!user)
      return NextResponse.json(
        { error: "You are not authentified" },
        { status: 403 },
      )

    const audios = await prisma.voiceChange.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(audios)
  } catch (error) {
    console.error("Error generating sound:", error)
    return NextResponse.json(
      { error: "Failed to generate sound" },
      { status: 500 },
    )
  } finally {
    await prisma.$disconnect() // Ferme la connexion après chaque requête
  }
}
