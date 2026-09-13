"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { DEFAULT_LOCALE, LOCALE_LABELS, SUPPORTED_LOCALES, type SupportedLocale } from "./locales";
import { languageFlags, translations } from "./translations";

export interface Language {
  code: SupportedLocale;
  name: string;
  nativeName: string;
  flag: string;
}

export const publicLanguages: Language[] = SUPPORTED_LOCALES.map((code) => ({
  code,
  name: LOCALE_LABELS[code],
  nativeName: LOCALE_LABELS[code],
  flag: languageFlags[code],
}));

interface LanguageContextValue {
  currentLanguage: Language;
  locale: SupportedLocale;
  setLanguage: (code: string) => void;
  t: (key: string) => string;
  translateText: (text: string) => Promise<string>;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getLanguage(code: SupportedLocale) {
  return publicLanguages.find((language) => language.code === code) ?? publicLanguages[0];
}

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: SupportedLocale;
}

export function LanguageProvider({ children, initialLanguage = DEFAULT_LOCALE }: LanguageProviderProps) {
  const currentLanguage = useMemo(() => getLanguage(initialLanguage), [initialLanguage]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      currentLanguage,
      locale: currentLanguage.code,
      setLanguage: () => {
        // Locale changes are handled by route navigation.
      },
      t: (key: string) => {
        const localeTranslations = translations[currentLanguage.code] ?? translations.en;
        const fallbackTranslations = translations.en;
        return localeTranslations[key] ?? fallbackTranslations[key] ?? key;
      },
      translateText: async (text: string) => text,
    }),
    [currentLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
