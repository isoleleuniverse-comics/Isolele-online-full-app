"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme, themes } from "@/shared/contexts/theme-context";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, withLocale } from "@/shared/i18n/locales";
import { navContent } from "@/features/navigation/content/nav.content";
import { NAV_LINKS, HEADER_LOGO_SRC, isActive } from "../../config/nav.config";
import { HeaderBackButton } from "./header-back-button";

export function MobileTopBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { currentTheme, setTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const firstSegment = pathname.split("/")[1];
  const locale = (SUPPORTED_LOCALES as readonly string[]).includes(firstSegment)
    ? (firstSegment as (typeof SUPPORTED_LOCALES)[number])
    : DEFAULT_LOCALE;
  const pathnameNoLocale =
    (SUPPORTED_LOCALES as readonly string[]).includes(firstSegment)
      ? pathname.replace(new RegExp(`^/${firstSegment}`), "") || "/"
      : pathname;
  const isHomePage = pathnameNoLocale === "/";

  function localizedHref(href: string) {
    return withLocale(locale, href);
  }

  function switchLocale(nextLocale: (typeof SUPPORTED_LOCALES)[number]) {
    const nextPath = withLocale(nextLocale, pathnameNoLocale);
    router.push(nextPath);
  }

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-50 border-b lg:hidden"
        style={{
          backgroundColor: `${currentTheme.colors.background}ee`,
          borderColor: `${currentTheme.colors.accentPrimary}1f`,
        }}
      >
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4">
          <div className="flex min-w-0 items-center gap-3">
            {!isHomePage ? <HeaderBackButton color={currentTheme.colors.accentPrimary} /> : null}

            <Link href={localizedHref("/")} className="inline-flex min-w-0 items-center">
              <Image
                src={HEADER_LOGO_SRC}
                alt="ISOLELE"
                width={156}
                height={44}
                className="h-auto w-[132px] object-contain sm:w-[156px]"
                priority
              />
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="justify-self-end rounded-md border p-2"
            style={{ borderColor: `${currentTheme.colors.accentPrimary}35`, color: currentTheme.colors.textSecondary }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-16 z-40 border-b px-4 py-4 lg:hidden"
            style={{
              backgroundColor: `${currentTheme.colors.background}f5`,
              borderColor: `${currentTheme.colors.accentPrimary}30`,
            }}
          >
            <nav className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.key}
                  href={localizedHref(item.href)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-semibold"
                  style={{
                    backgroundColor: isActive(pathnameNoLocale, item.href)
                      ? `${currentTheme.colors.accentPrimary}20`
                      : `${currentTheme.colors.backgroundSecondary}99`,
                    color: isActive(pathnameNoLocale, item.href) ? currentTheme.colors.accentPrimary : currentTheme.colors.textSecondary,
                  }}
                >
                  {navContent[locale][item.key]}
                </Link>
              ))}
            </nav>

            <div className="mt-4 space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: currentTheme.colors.textSecondary }}>
                Language
              </p>
              <div className="flex flex-wrap gap-2">
                {SUPPORTED_LOCALES.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      switchLocale(lang);
                      setMobileMenuOpen(false);
                    }}
                    className="rounded-full border px-3 py-1 text-xs uppercase"
                    style={{
                      borderColor:
                        lang === locale
                          ? currentTheme.colors.accentPrimary
                          : `${currentTheme.colors.accentPrimary}30`,
                      color:
                        lang === locale
                          ? currentTheme.colors.accentPrimary
                          : currentTheme.colors.textSecondary,
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <p className="pt-1 text-[11px] font-bold uppercase tracking-wider" style={{ color: currentTheme.colors.textSecondary }}>
                Theme
              </p>
              <div className="flex flex-wrap gap-2">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setTheme(theme.id)}
                    className="h-7 w-7 rounded-full border"
                    style={{
                      backgroundColor: theme.colors.accentPrimary,
                      borderColor: theme.id === currentTheme.id ? "#FFFFFF" : "transparent",
                    }}
                    aria-label={`Theme ${theme.name}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
