"use client"
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

import AuthForm from '@/components/authentication/AuthForm';
import { useUser } from '@/hooks/use-user';
import { getRandomNumber } from '@/lib/utils';

export const Content = () => {
  const [imageUrl, setImageUrl] = useState("")
  const [referrerId, setReferrerId] = useState("")

  const { user, isError, isLoading: isUserLoading } = useUser()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.href
      const url = new URL(pathname)
      const refId = url.searchParams.get("referrer") || ""
      if (refId) {
        localStorage.setItem("referrerId", refId)
      }
      setReferrerId(refId)
    }

    const imageId = getRandomNumber(1, 14)
    setImageUrl(`/img/image${imageId}.webp`)
  }, [])

  if (user) {
    return redirect("/explore")
  }

  return (
    <div className="grid grid-cols-2 bg-background dark max-lg:grid-cols-1">
      <div className="flex h-screen w-[50vw] items-center justify-center max-lg:w-full">
        <AuthForm />
      </div>
      {imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          className="hidden h-screen w-[50vw] object-cover lg:block"
          alt={"Background generated by AI"}
        />
      )}
    </div>
  )
}
