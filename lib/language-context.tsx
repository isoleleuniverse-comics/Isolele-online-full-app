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
  { code: "ln", name: "Lingala", nativeName: "Lingála", flag: languageFlags.ln },
  { code: "sw", name: "Swahili", nativeName: "Kiswahili", flag: languageFlags.sw },
  { code: "zu", name: "Zulu", nativeName: "isiZulu", flag: languageFlags.zu },
  { code: "en", name: "English", nativeName: "English", flag: languageFlags.en },
  { code: "am", name: "Amharic", nativeName: "አማርኛ", flag: languageFlags.am },
  { code: "yo", name: "Yoruba", nativeName: "Yorùbá", flag: languageFlags.yo },
  { code: "ha", name: "Hausa", nativeName: "Hausa", flag: languageFlags.ha },
  { code: "ig", name: "Igbo", nativeName: "Igbo", flag: languageFlags.ig },
  { code: "sn", name: "Shona", nativeName: "Shona", flag: languageFlags.sn },
  { code: "om", name: "Oromo", nativeName: "Afan Oromo", flag: languageFlags.om },
  { code: "fr", name: "French", nativeName: "Français", flag: languageFlags.fr },
  { code: "es", name: "Spanish", nativeName: "Español", flag: languageFlags.es },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: languageFlags.pt },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: languageFlags.ru },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: languageFlags.ar },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: languageFlags.hi },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", flag: languageFlags.bn },
  { code: "ur", name: "Urdu", nativeName: "اردو", flag: languageFlags.ur },
  { code: "zh", name: "Chinese", nativeName: "中文", flag: languageFlags.zh },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: languageFlags.ja },
  { code: "xh", name: "Xhosa", nativeName: "isiXhosa", flag: languageFlags.xh },
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
      if (savedLang) {
        const lang = languages.find((l) => l.code === savedLang)
        if (lang) {
          setCurrentLanguage(lang)
        }
      } else {
        setCurrentLanguage(languages[0])
        localStorage.setItem("isolele-language", "en")
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
    const langTranslations = translations[langCode] || translations.en
    const translationKey = key as keyof TranslationKeys
    return langTranslations[translationKey] || translations.en[translationKey] || String(key)
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
