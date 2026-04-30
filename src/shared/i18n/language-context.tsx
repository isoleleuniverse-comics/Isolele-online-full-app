"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Language as LangCode, type TranslationKeys, languageFlags } from "./translations"
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type SupportedLocale } from "./locales"

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

export const publicLanguages: Language[] = languages.filter((language) =>
  (SUPPORTED_LOCALES as readonly string[]).includes(language.code),
)

interface LanguageContextType {
  currentLanguage: Language
  setLanguage: (code: string) => void
  t: (key: keyof TranslationKeys | string) => string
  translateText: (text: string, targetLang?: string) => Promise<string>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function getLanguageByCode(code: string, allowedLanguages: readonly Language[]) {
  return allowedLanguages.find((language) => language.code === code)
}

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

function resolveInitialLanguage(
  initialLanguage: SupportedLocale | undefined,
  allowedLanguages: readonly Language[],
  fallbackLanguage: Language,
) {
  if (typeof window === "undefined") {
    return fallbackLanguage
  }

  if (initialLanguage) {
    return getLanguageByCode(initialLanguage, allowedLanguages) ?? fallbackLanguage
  }

  try {
    const savedLang = localStorage.getItem("isolele-language")
    const savedLanguage = savedLang ? getLanguageByCode(savedLang, allowedLanguages) : undefined
    if (savedLanguage) {
      return savedLanguage
    }
  } catch (error) {
    console.error("[v0] Error loading language preference:", error)
  }

  const autoLangCode = mapBrowserLocaleToSupportedLanguage()
  return getLanguageByCode(autoLangCode, allowedLanguages) ?? fallbackLanguage
}

interface LanguageProviderProps {
  children: ReactNode
  initialLanguage?: SupportedLocale
}

export function LanguageProvider({ children, initialLanguage }: LanguageProviderProps) {
  const allowedLanguages = initialLanguage ? publicLanguages : languages
  const fallbackCode = initialLanguage ?? DEFAULT_LOCALE
  const fallbackLanguage = getLanguageByCode(fallbackCode, allowedLanguages) ?? allowedLanguages[0]
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() =>
    resolveInitialLanguage(initialLanguage, allowedLanguages, fallbackLanguage),
  )

  useEffect(() => {
    try {
      localStorage.setItem("isolele-language", currentLanguage.code)
    } catch (error) {
      console.error("[v0] Error saving language preference:", error)
    }
  }, [currentLanguage.code])

  const setLanguage = (code: string) => {
    const lang = getLanguageByCode(code, allowedLanguages)
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
      {children}
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
