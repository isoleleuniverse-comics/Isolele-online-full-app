"use client";

import { usePathname, useRouter } from "next/navigation";
import { getNavigationContent } from "@/features/navigation/content/nav.content";
import {
  LOCALE_LABELS,
  SUPPORTED_LOCALES,
  resolveLocaleFromPathname,
  stripLocaleFromPathname,
  withLocale,
} from "@/shared/i18n/locales";
import type { FooterSectionContext } from "./footer.types";

export function FooterLocaleSwitcher({ currentTheme }: Pick<FooterSectionContext, "currentTheme">) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = resolveLocaleFromPathname(pathname);
  const pathnameNoLocale = stripLocaleFromPathname(pathname);
  const content = getNavigationContent(locale);

  return (
    <div className="flex flex-col items-center gap-2 md:items-end">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: currentTheme.colors.textSecondary }}>
        {content.mobileMenu.languageLabel}
      </p>
      <div className="flex flex-wrap justify-center gap-2 md:justify-end">
        {SUPPORTED_LOCALES.map((lang) => (
          <button
            key={lang}
            type="button"
            onClick={() => router.push(withLocale(lang, pathnameNoLocale))}
            className="rounded-full border px-3 py-1 text-[11px] font-semibold uppercase transition-colors"
            style={{
              borderColor: lang === locale ? currentTheme.colors.accentPrimary : `${currentTheme.colors.accentPrimary}30`,
              backgroundColor: lang === locale ? `${currentTheme.colors.accentPrimary}18` : "transparent",
              color: lang === locale ? currentTheme.colors.accentPrimary : currentTheme.colors.textSecondary,
            }}
          >
            {LOCALE_LABELS[lang]}
          </button>
        ))}
      </div>
    </div>
  );
}
