import type { Metadata } from "next"
import "./globals.css"
import "./outsideStyles.css"

import NextTopLoader from "nextjs-toploader"

import { Providers } from "@/context/providers"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Pandorra ai",
  description: "Unlock the Power of Creativity",
}

// eslint-disable-next-line @next/next/no-async-client-component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`min-h-screen overflow-y-scroll scroll-auto antialiased selection:bg-indigo-100 selection:text-primary dark:bg-background`}
      >
        <SpeedInsights />
        <Analytics />
        <NextTopLoader showSpinner={false} color="#2ccfff" />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
