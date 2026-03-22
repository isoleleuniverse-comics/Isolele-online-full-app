"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { SUPPORTED_LANGUAGES, type LanguageCode } from "@/lib/google-translate"
import { Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function LanguageSwitcher() {
  const { currentLanguage, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (lang: LanguageCode) => {
    console.log("[v0] Changing language to:", lang)
    setLanguage(lang)
    setIsOpen(false)

    // Optional: Call Google Translate API to cache translations
    if (lang !== "en") {
      console.log("[v0] Preparing translations for language:", lang)
      // This will be used for real-time translation fallback
    }
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe size={18} />
        <span className="text-sm font-medium uppercase">
          {currentLanguage}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg z-50 min-w-[200px] border border-gray-200 dark:border-gray-700"
          >
            <div className="py-2">
              {Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => (
                <motion.button
                  key={code}
                  onClick={() => handleLanguageChange(code as LanguageCode)}
                  className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                    currentLanguage === code
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  whileHover={{ paddingLeft: "20px" }}
                >
                  <span className="inline-block mr-2 text-xs font-bold uppercase">
                    {code}
                  </span>
                  {name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
