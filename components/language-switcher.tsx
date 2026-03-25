"use client"

import { useState } from "react"
import { useLanguage, languages } from "@/lib/language-context"
import { Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function LanguageSwitcher() {
  const { currentLanguage, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (lang: string) => {
    console.log("[v0] Language switcher: attempting to change to:", lang)
    console.log("[v0] Current language before change:", currentLanguage)
    setLanguage(lang)
    console.log("[v0] setLanguage called, isOpen will be set to false")
    setIsOpen(false)
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
          {currentLanguage.code}
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
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                    currentLanguage.code === lang.code
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  whileHover={{ paddingLeft: "20px" }}
                >
                  <span className="inline-block mr-2 text-xs font-bold uppercase">
                    {lang.code}
                  </span>
                  {lang.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
