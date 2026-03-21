"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { LogOut, Settings } from "lucide-react"
import { createClient } from "@supabase/supabase-js"
import ContentEditor from "@/components/admin/content-editor"
import MediaManager from "@/components/admin/media-manager"
import TranslationManager from "@/components/admin/translation-manager"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

const supabase = createClient(supabaseUrl, supabaseKey)

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/admin/check-auth")
      const data = await response.json()

      if (!data.success || !data.isAdmin) {
        router.push("/admin/login")
        return
      }

      setUser(data.user)
      setAuthenticated(true)
    } catch (error) {
      console.error("[v0] Auth check failed:", error)
      router.push("/admin/login")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-950 via-black to-amber-900 flex items-center justify-center">
        <div className="text-amber-400">Loading...</div>
      </div>
    )
  }

  if (!authenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-black to-amber-900 text-white">
      {/* Header */}
      <div className="border-b border-amber-900/50 bg-black/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-amber-400">ISOLELE ADMIN</h1>
            <p className="text-amber-200/70 text-sm mt-1">Content Management System</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-amber-200">{user?.email}</p>
              <p className="text-xs text-amber-200/50">Administrator</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="gap-2 border-amber-600 text-amber-400 hover:bg-amber-900/50"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="bg-black/50 border border-amber-900/50">
            <TabsTrigger value="content" className="data-[state=active]:bg-amber-600">
              Content
            </TabsTrigger>
            <TabsTrigger value="media" className="data-[state=active]:bg-amber-600">
              Media
            </TabsTrigger>
            <TabsTrigger value="translations" className="data-[state=active]:bg-amber-600">
              Translations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="mt-8">
            <ContentEditor />
          </TabsContent>

          <TabsContent value="media" className="mt-8">
            <MediaManager />
          </TabsContent>

          <TabsContent value="translations" className="mt-8">
            <TranslationManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
