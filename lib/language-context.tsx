"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { translations, type Language as LangCode, type TranslationKeys, languageNames, languageFlags } from "./translations"

export interface Language {
  code: LangCode
  name: string
  nativeName: string
  flag: string
}

export const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: languageFlags.en },
  { code: "fr", name: "French", nativeName: "Français", flag: languageFlags.fr },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: languageFlags.pt },
  { code: "es", name: "Spanish", nativeName: "Español", flag: languageFlags.es },
  { code: "zu", name: "Zulu", nativeName: "Zulu", flag: languageFlags.zu },
  { code: "sw", name: "Swahili", nativeName: "Kiswahili", flag: languageFlags.sw },
]

interface LanguageContextType {
  currentLanguage: Language
  setLanguage: (code: string) => void
  t: (key: keyof TranslationKeys | string) => string
  translateText: (text: string, targetLang?: string) => Promise<string>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("isolele-language")
      console.log("[v0] LanguageProvider: savedLang from localStorage:", savedLang)
      if (savedLang) {
        const lang = languages.find((l) => l.code === savedLang)
        console.log("[v0] LanguageProvider: found language object:", lang)
        if (lang) {
          setCurrentLanguage(lang)
          console.log("[v0] LanguageProvider: set currentLanguage to:", lang.name)
        }
      } else {
        setCurrentLanguage(languages[0])
        localStorage.setItem("isolele-language", "en")
        console.log("[v0] LanguageProvider: initialized with default English")
      }
    } catch (error) {
      console.error("[v0] Error loading language preference:", error)
    }
    setMounted(true)
  }, [])

  const setLanguage = useCallback((code: string) => {
    console.log("[v0] setLanguage called with code:", code)
    const lang = languages.find((l) => l.code === code)
    console.log("[v0] Found language:", lang)
    if (lang) {
      setCurrentLanguage(lang)
      localStorage.setItem("isolele-language", code)
      console.log("[v0] Language changed to:", lang.name)
    } else {
      console.log("[v0] Language not found for code:", code)
    }
  }, [])

  const t = (key: keyof TranslationKeys | string): string => {
    const langCode = currentLanguage.code as LangCode
    const langTranslations = translations[langCode] || translations.en
    const translationKey = key as keyof TranslationKeys
    const result = langTranslations[translationKey] || translations.en[translationKey] || String(key)
    console.log("[v0] t() called - key:", key, "lang:", langCode, "result:", result)
    return result
  }

  const translateText = async (text: string, targetLang?: string): Promise<string> => {
    try {
      const target = targetLang || currentLanguage.code
      if (target === "en") return text

      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text,
          targetLanguage: target,
          sourceLanguage: "en",
          action: "translate",
        }),
      })

      if (!response.ok) throw new Error("Translation failed")
      const data = await response.json()
      return data.result?.translatedText || text
    } catch (error) {
      console.error("[v0] Translation error:", error)
      return text
    }
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, translateText }}>
      {mounted ? children : <>{children}</>}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
