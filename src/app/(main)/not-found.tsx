import Link from "next/link"

import { Logo } from "@/components/logo"
import { Button } from "@/components/tremor/ui/button"
import { RiArrowRightLine } from "@remixicon/react"

import { siteConfig } from "../siteConfig"

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Link href={siteConfig.baseLinks.home}>
        <Logo />
      </Link>
      <p className="mt-6 text-4xl font-semibold text-primary sm:text-5xl dark:text-primary">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Button asChild className="group mt-8" variant="light">
        <Link href={siteConfig.baseLinks.home}>
          Go to the home page
          <RiArrowRightLine
            className="ml-1.5 size-5 text-gray-900 dark:text-gray-50"
            aria-hidden="true"
          />
        </Link>
      </Button>
    </div>
  )
}
