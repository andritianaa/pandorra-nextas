/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { MagicCard } from "@/components/animated/magic-ui/magic-card"
import { TextToFX } from "@/components/icons/TextToFX"
import { TextToSpeech } from "@/components/icons/TextToSpeech"
import { VoiceDubbing } from "@/components/icons/voice-dubbing"
import { VoiceChanger } from "@/components/icons/VoiceChanger"
import { cx, focusRing } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()
  const isActive = (itemHref: string) => {
    return pathname === itemHref
  }
  return (
    <MagicCard className="sticky top-20 h-fit max-h-[70vh] w-96 overflow-y-auto border-l bg-card p-4">
      <Link
        prefetch={true}
        href={"/audio/"}
        className={cx(
          isActive("/audio")
            ? "bg-gray-100 text-indigo-600 dark:bg-gray-900 dark:text-indigo-400"
            : "text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
          "text-md flex items-center gap-x-2.5 rounded-md px-2 py-1.5 font-medium transition hover:bg-gray-100 hover:dark:bg-gray-900/50",
          focusRing,
        )}
      >
        <TextToFX aria-hidden="true" />
        FX Generation
      </Link>

      <Link
        prefetch={true}
        href={"/audio/text-to-speech"}
        className={cx(
          isActive("/audio/text-to-speech")
            ? "bg-gray-100 text-indigo-600 dark:bg-gray-900 dark:text-indigo-400"
            : "text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
          "text-md flex items-center gap-x-2.5 rounded-md px-2 py-1.5 font-medium transition hover:bg-gray-100 hover:dark:bg-gray-900/50",
          focusRing,
        )}
      >
        <TextToSpeech aria-hidden="true" />
        Text to speech
      </Link>
      <Link
        prefetch={true}
        href={"/audio/voice-changer"}
        className={cx(
          isActive("/audio/voice-changer")
            ? "bg-gray-100 text-indigo-600 dark:bg-gray-900 dark:text-indigo-400"
            : "text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
          "text-md flex items-center gap-x-2.5 rounded-md px-2 py-1.5 font-medium transition hover:bg-gray-100 hover:dark:bg-gray-900/50",
          focusRing,
        )}
      >
        <VoiceChanger aria-hidden="true" />
        Voice changer
      </Link>
      <Link
        prefetch={true}
        href={"/audio/dubbing"}
        className={cx(
          isActive("/audio/dubbing")
            ? "bg-gray-100 text-indigo-600 dark:bg-gray-900 dark:text-indigo-400"
            : "text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
          "text-md flex items-center gap-x-2.5 rounded-md px-2 py-1.5 font-medium transition hover:bg-gray-100 hover:dark:bg-gray-900/50",
          focusRing,
        )}
      >
        <VoiceDubbing aria-hidden="true" />
        Dubbing
      </Link>
    </MagicCard>
  )
}
