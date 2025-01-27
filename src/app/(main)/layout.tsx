import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

import { Sidebar } from '@/components/(main)/navigation/sidebar';
import { currentUser } from '@/lib/current-user';

export default async function RouteLayout({
  children,
}: {
  children: ReactNode
}) {
  const user = await currentUser()
  if (!user) return redirect("/auth")

  return (
    <>
      <Sidebar />
      <main className="min-h-screen p-8 pt-4 lg:pl-64">{children}</main>
    </>
  )
}
