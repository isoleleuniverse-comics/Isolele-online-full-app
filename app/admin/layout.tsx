import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Admin Dashboard | ISOLELE",
  description: "Manage content, translations, and media for ISOLELE",
  robots: {
    index: false,
    follow: false,
  },
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
