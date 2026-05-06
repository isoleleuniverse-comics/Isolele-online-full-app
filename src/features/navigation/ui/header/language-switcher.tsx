"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Globe } from "lucide-react";
import { useTheme } from "@/shared/contexts/theme-context";
import { getNavigationContent } from "@/features/navigation/content/nav.content";
import {
  LOCALE_LABELS,
  SUPPORTED_LOCALES,
  resolveLocaleFromPathname,
  stripLocaleFromPathname,
  withLocale,
} from "@/shared/i18n/locales";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const { currentTheme } = useTheme();

  const locale = resolveLocaleFromPathname(pathname);
  const pathnameNoLocale = stripLocaleFromPathname(pathname);
  const content = getNavigationContent(locale);

  function switchLocale(nextLocale: (typeof SUPPORTED_LOCALES)[number]) {
    const nextPath = withLocale(nextLocale, pathnameNoLocale);
    router.push(nextPath);
  }

  return (
    <div className="relative group/language">
      <button
        className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase"
        style={{
          color: currentTheme.colors.textSecondary,
          borderColor: `${currentTheme.colors.accentPrimary}30`,
        }}
        aria-label={content.languageSwitcher.buttonLabel}
      >
        <Globe className="h-3.5 w-3.5" />
        {LOCALE_LABELS[locale]}
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
      <div
        className="invisible absolute right-0 top-full z-20 mt-2 min-w-36 rounded-lg border opacity-0 shadow-xl transition-all group-hover/language:visible group-hover/language:opacity-100"
        style={{
          backgroundColor: currentTheme.colors.background,
          borderColor: `${currentTheme.colors.accentPrimary}35`,
        }}
      >
        {SUPPORTED_LOCALES.map((lang) => (
          <button
            key={lang}
            onClick={() => {
              switchLocale(lang);
            }}
            className="block w-full px-3 py-2 text-left text-xs uppercase tracking-wider transition-colors hover:bg-black/5"
            style={{
              color:
                lang === locale
                  ? currentTheme.colors.accentPrimary
                  : currentTheme.colors.textSecondary,
            }}
          >
            {LOCALE_LABELS[lang]}
          </button>
        ))}
      </div>
    </div>
  );
}
