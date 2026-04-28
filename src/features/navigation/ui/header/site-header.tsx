"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "@/shared/contexts/theme-context";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, withLocale } from "@/shared/i18n/locales";

import { DesktopNav } from "./desktop-nav";
import { MobileTopBar } from "./mobile-top-bar";
import { HEADER_LOGO_SRC } from "../../config/nav.config";
import { MobileBottomNav } from "./mobile-bottom-nav";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeSwitcher } from "./theme-switcher";
import { CartButton } from "./cart-button";
import { HeaderBackButton } from "./header-back-button";

export function SiteHeader() {
  const pathname = usePathname();
  const { currentTheme } = useTheme();

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

  const headerBg = `${currentTheme.colors.background}ee`;
  const borderTone = `${currentTheme.colors.accentPrimary}28`;

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-50 hidden border-b lg:block"
        style={{ backgroundColor: headerBg, backdropFilter: "blur(12px)", borderColor: borderTone }}
      >
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6">
          <div className="flex items-center gap-4">
            {!isHomePage ? <HeaderBackButton color={currentTheme.colors.accentPrimary} /> : <div className="h-10 w-10" />}
            <Link href={localizedHref("/")} className="inline-flex items-center">
              <motion.div
                whileHover={{ scale: 1.04 }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src={HEADER_LOGO_SRC}
                  alt="ISOLELE"
                  width={188}
                  height={54}
                  className="h-auto w-[158px] object-contain xl:w-[188px]"
                  priority
                />
              </motion.div>
            </Link>
          </div>

          <DesktopNav />

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <CartButton />
          </div>
        </div>
      </header>

      <MobileTopBar />
      <MobileBottomNav />
    </>
  );
}
