"use client"

import { useRouter, usePathname } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { useEffect } from "react"

export function BackButton() {
  const router = useRouter()
  const pathname = usePathname()
  const { currentTheme } = useTheme()

  // Save scroll position before leaving current page
  useEffect(() => {
    const saveScrollPosition = () => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem(
          `scroll-pos-${pathname}`,
          JSON.stringify({
            y: window.scrollY,
            x: window.scrollX,
          })
        )
      }
    }

    // Save on scroll
    window.addEventListener("scroll", saveScrollPosition)
    // Save before page unload
    window.addEventListener("beforeunload", saveScrollPosition)

    return () => {
      window.removeEventListener("scroll", saveScrollPosition)
      window.removeEventListener("beforeunload", saveScrollPosition)
    }
  }, [pathname])

  // Restore scroll position when returning to this page
  useEffect(() => {
    const restoreScrollPosition = () => {
      if (typeof window !== "undefined") {
        const savedPosition = sessionStorage.getItem(`scroll-pos-${pathname}`)
        if (savedPosition) {
          try {
            const { y } = JSON.parse(savedPosition)
            // Use requestAnimationFrame for smooth restoration
            requestAnimationFrame(() => {
              window.scrollTo(0, y)
            })
          } catch (e) {
            console.error("[v0] Failed to restore scroll:", e)
          }
        }
      }
    }

    // Small delay to ensure page is rendered
    const timeout = setTimeout(restoreScrollPosition, 100)
    return () => clearTimeout(timeout)
  }, [pathname])

  // Hide back button on main page
  if (pathname === "/") {
    return null
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, x: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleBack}
      className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200"
      style={{
        backgroundColor: `${currentTheme.colors.accentPrimary}15`,
        color: currentTheme.colors.accentPrimary,
        border: `1px solid ${currentTheme.colors.accentPrimary}30`,
      }}
      title="Go back to previous page"
    >
      <ChevronLeft size={20} />
      <span className="text-sm font-medium hidden sm:inline">Back</span>
    </motion.button>
  )
}
