/* eslint-disable @next/next/no-img-element */
"use client"
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Tooltip } from '@/components/tremor/ui/tooltip';
import { useUser } from '@/hooks/use-user';
import { Plan } from '@prisma/client';

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
        <Link href={"/add-token"}>
          <div
            id="tour3-step2"
            className="relative flex h-8 items-center justify-center gap-2 rounded-md bg-accent px-4 font-bold hover:bg-muted"
          >
            <span>{formatJeton(user?.jeton || 0)}</span>
            <img src="/coin.png" className="h-6 w-auto" />
          </div>
        </Link>
      </Tooltip>
      {user && (user?.plan === Plan.Free || user?.plan === Plan.FreePaid) && (
        <Tooltip
          content={t(`You are in free plan. Click to upgrade`)}
          id="tour3-step3"
          className=""
        >
          <Link href={"/upgrade"}>
            <img
              src="/assets/upgrade.png"
              className="-mb-2 h-8 w-auto rounded-md"
            />
          </Link>
        </Tooltip>
      )}
    </div>
  )
}
