"use client"

import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"

export function BackButton() {
  const router = useRouter()
  const { currentTheme } = useTheme()

  const handleBack = () => {
    router.back()
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1, x: -4 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleBack}
      className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:opacity-80 active:opacity-70"
      style={{
        backgroundColor: `${currentTheme.colors.accentPrimary}20`,
        color: currentTheme.colors.accentPrimary,
        border: `2px solid ${currentTheme.colors.accentPrimary}50`,
        minWidth: "44px",
        minHeight: "44px",
      }}
      title="Go back to previous page"
      aria-label="Go back"
    >
      <ChevronLeft size={24} strokeWidth={2.5} />
      <span className="text-sm font-semibold hidden sm:inline">Back</span>
    </motion.button>
  )
}
