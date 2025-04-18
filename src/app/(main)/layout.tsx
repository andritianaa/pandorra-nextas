"use client"

import { redirect } from "next/navigation"
import { Onborda, OnbordaProvider } from "onborda"
import { ReactNode } from "react"

import { RegisterAffiliate } from "@/app/(main)/register-affiliate"
import { Sidebar } from "@/components/(main)/navigation/sidebar"
import UserTracker from "@/components/admin/user-tracker"
import { OnboardaCard } from "@/components/onboarda/OnboardaCard"
import { useIsSidebar } from "@/hooks/use-is-sidebar"
import { useUser } from "@/hooks/use-user"
import { tours } from "@/lib/onboarda/steps"

interface RouteLayoutProps {
  children: ReactNode
}

export default function RouteLayout({ children }: RouteLayoutProps) {
  const { user, isLoading, isError } = useUser()
  const { isSidebar } = useIsSidebar()

  if (isLoading) {
    return null // Or a loading state
  }

  if (!user || isError) {
    return redirect("/auth")
  }

  return (
    <OnbordaProvider>
      <Onborda
        steps={tours}
        showOnborda={true}
        shadowRgb="55,48,163"
        shadowOpacity="0.8"
        cardComponent={OnboardaCard}
        cardTransition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.25,
          damping: 10,
          mass: 0.7,
          stiffness: 75,
        }}
      >
        <RegisterAffiliate />
        <UserTracker />

        <Sidebar />
        <main
          className={`px-2 pt-0 lg:pr-4 ${isSidebar ? "lg:pl-64" : "lg:pl-[4.5rem]"}`}
        >
          {children}
        </main>
      </Onborda>
    </OnbordaProvider>
  )
}
