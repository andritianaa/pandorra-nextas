import { redirect } from "next/navigation"
import { ReactNode } from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { currentUser } from "@/lib/current-user"

import { Sidebar, SidebarDialog } from "./sidebar"

export default async function RouteLayout({
  children,
}: {
  children: ReactNode
}) {
  const user = await currentUser()
  if (!user) return redirect("/auth")

  return (
    <div className="flex pt-4">
      <SidebarDialog />
      <div className="z-40 hidden lg:block">
        <Sidebar />
      </div>
      <ScrollArea className="w-full p-4 pt-0">{children}</ScrollArea>
    </div>
  )
}
