// api/user/[email]/route.ts

import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/prisma"

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url)

  const email = searchParams.get("email")
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: email as string,
      },
    })
    if (user) {
      return NextResponse.json(false, { status: 200 })
    } else {
      return NextResponse.json(true, { status: 200 })
    }
  } catch (error) {
    return NextResponse.json({ status: 500 })
  } finally {
    console.info("") // Ferme la connexion après chaque requête
  }
}
