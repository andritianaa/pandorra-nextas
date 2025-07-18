"use client"

import { motion, useMotionTemplate, useMotionValue } from "motion/react"
import React, { useCallback, useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientSize?: number
  gradientColor?: string
  gradientOpacity?: number
  gradientFrom?: string
  gradientTo?: string
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#3b82f6",
  gradientOpacity = 0.8,
  gradientFrom = "#6366f1",
  gradientTo = "#06b6d4",
  onClick,
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(-gradientSize)
  const mouseY = useMotionValue(-gradientSize)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect()
        const clientX = e.clientX
        const clientY = e.clientY
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
      }
    },
    [mouseX, mouseY],
  )

  const handleMouseOut = useCallback(
    (e: MouseEvent) => {
      if (!e.relatedTarget) {
        document.removeEventListener("mousemove", handleMouseMove)
        mouseX.set(-gradientSize)
        mouseY.set(-gradientSize)
      }
    },
    [handleMouseMove, mouseX, gradientSize, mouseY],
  )

  const handleMouseEnter = useCallback(() => {
    document.addEventListener("mousemove", handleMouseMove)
    mouseX.set(-gradientSize)
    mouseY.set(-gradientSize)
  }, [handleMouseMove, mouseX, gradientSize, mouseY])

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseout", handleMouseOut)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseout", handleMouseOut)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [handleMouseEnter, handleMouseMove, handleMouseOut])

  useEffect(() => {
    mouseX.set(-gradientSize)
    mouseY.set(-gradientSize)
  }, [gradientSize, mouseX, mouseY])

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={cn(
        "group relative flex h-fit w-full overflow-hidden rounded-xl border-1 border-gray-200 shadow-lg dark:border-none dark:shadow-none",
        className,
      )}
    >
      <div className="absolute inset-px z-10 rounded-xl bg-background" />
      <div className="relative z-30 h-full w-full">{children}</div>
      <motion.div
        className="pointer-events-none absolute inset-px z-10 hidden rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
          opacity: 0.1,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 hidden rounded-xl bg-border duration-300 group-hover:opacity-100 dark:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientFrom}, 
              ${gradientTo}, 
              hsl(var(--border)) 100%
            )
          `,
        }}
      />
    </div>
  )
}
