"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Language as LangCode, type TranslationKeys, languageNames, languageFlags } from "./translations"

export interface Language {
  code: LangCode
  name: string
  nativeName: string
  flag: string
}

export const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: languageFlags.en },
  { code: "ln", name: "Lingala", nativeName: "Lingála", flag: languageFlags.ln },
  { code: "sw", name: "Swahili", nativeName: "Kiswahili", flag: languageFlags.sw },
  { code: "zu", name: "Zulu", nativeName: "isiZulu", flag: languageFlags.zu },
  { code: "fr", name: "French", nativeName: "Français", flag: languageFlags.fr },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: languageFlags.pt },
  { code: "es", name: "Spanish", nativeName: "Español", flag: languageFlags.es },
  { code: "xh", name: "Xhosa", nativeName: "isiXhosa", flag: languageFlags.zu },
]

interface LanguageContextType {
  currentLanguage: Language
  setLanguage: (code: string) => void
  t: (key: keyof TranslationKeys | string) => string
  translateText: (text: string, targetLang?: string) => Promise<string>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function mapBrowserLocaleToSupportedLanguage(): LangCode {
  if (typeof navigator === "undefined") return "en"

  const supported = new Set<LangCode>(["en", "fr", "pt", "es", "zu", "xh", "sw", "ln"])

  const browserLocales = [navigator.language, ...(navigator.languages || [])]
    .filter(Boolean)
    .map((value) => value.toLowerCase())

  for (const locale of browserLocales) {
    const code = locale.split("-")[0] as LangCode
    if (supported.has(code)) return code
  }

  // Region fallback by timezone when language is not explicitly supported
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone.toLowerCase()
  if (tz.includes("johannesburg")) return "zu"
  if (tz.includes("kinshasa")) return "ln"
  if (tz.includes("dar_es_salaam")) return "sw"

  return "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("isolele-language")
      if (savedLang) {
        const lang = languages.find((l) => l.code === savedLang)
        if (lang) {
          setCurrentLanguage(lang)
        }
      } else {
        const autoLangCode = mapBrowserLocaleToSupportedLanguage()
        const autoLang = languages.find((l) => l.code === autoLangCode) || languages[0]
        setCurrentLanguage(autoLang)
        localStorage.setItem("isolele-language", autoLang.code)
      }
    } catch (error) {
      console.error("[v0] Error loading language preference:", error)
    }
    setMounted(true)
  }, [])

  const setLanguage = (code: string) => {
    const lang = languages.find((l) => l.code === code)
    if (lang) {
      setCurrentLanguage(lang)
      localStorage.setItem("isolele-language", code)
    }
  }

  const t = (key: keyof TranslationKeys | string): string => {
    const langCode = currentLanguage.code as LangCode
    const langTranslations = (translations[langCode] || translations.en) as Record<string, string>
    const fallbackTranslations = translations.en as Record<string, string>
    const translationKey = String(key)
    return langTranslations[translationKey] || fallbackTranslations[translationKey] || translationKey
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
