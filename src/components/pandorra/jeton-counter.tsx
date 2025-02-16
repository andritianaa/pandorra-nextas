/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link"
import { useTranslation } from "react-i18next"

import { Tooltip } from "@/components/tremor/ui/tooltip"
import { useUser } from "@/hooks/use-user"
import { Plan } from "@prisma/client"

export default function JetonCounter() {
  const { t } = useTranslation()
  const { user } = useUser()

  const formatJeton = (jeton: number) => {
    return jeton.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  return (
    <div className="flex items-center justify-center gap-3">
      <Tooltip
        content={`${t("You have")} ${formatJeton(user?.jeton || 0)} ${t(`tokens. Click to get more`)}`}
      >
        <Link
          href={"/pricing"}
          prefetch
          type="button"
          id="radix-:Rmf7mfnmmn4q:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <div
            id="tour3-step2"
            className="flex h-10 items-center justify-center gap-2 rounded-xl bg-accent px-4 font-bold hover:bg-muted"
          >
            <span>{formatJeton(user?.jeton || 0)}</span>
            <img src="/assets/token.png" className="h-6 w-auto" />
          </div>
        </Link>
      </Tooltip>
      {user && user?.plan === Plan.Free && (
        <Tooltip content={t(`You are in free plan. Click to upgrade`)}>
          <Link prefetch={true} href={"/pricing"} id="tour3-step3">
            <img src="/assets/upgrade.png" className="h-10 w-auto" />
          </Link>
        </Tooltip>
      )}
    </div>
  )
}
