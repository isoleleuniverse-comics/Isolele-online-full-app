"use client"

import { useRouter, usePathname } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"

export function BackButton() {
  const router = useRouter()
  const pathname = usePathname()
  const { currentTheme } = useTheme()

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
