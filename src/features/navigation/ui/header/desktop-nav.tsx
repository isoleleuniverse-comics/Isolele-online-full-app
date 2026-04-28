"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/shared/contexts/theme-context";
import { navContent } from "@/features/navigation/content/nav.content";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, withLocale } from "@/shared/i18n/locales";
import { NAV_LINKS, CHARACTER_NAV_LINKS, isActive } from "../../config/nav.config";

export function DesktopNav() {
  const pathname = usePathname();
  const { currentTheme } = useTheme();
  
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const firstSegment = pathname.split("/")[1];
  const locale = (SUPPORTED_LOCALES as readonly string[]).includes(firstSegment)
    ? (firstSegment as (typeof SUPPORTED_LOCALES)[number])
    : DEFAULT_LOCALE;
  const pathnameNoLocale =
    (SUPPORTED_LOCALES as readonly string[]).includes(firstSegment)
      ? pathname.replace(new RegExp(`^/${firstSegment}`), "") || "/"
      : pathname;

  function localizedHref(href: string) {
    return withLocale(locale, href);
  }

  return (
    <nav className="mx-auto flex items-center gap-7">
      {NAV_LINKS.map((item) => {
        const active = isActive(pathnameNoLocale, item.href);

        return (
          <div
            key={item.key}
            className="relative"
            onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.key)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href={localizedHref(item.href)}
              className="inline-flex items-center text-sm font-semibold tracking-wide"
              style={{ color: active ? currentTheme.colors.accentPrimary : currentTheme.colors.textSecondary }}
            >
              {navContent[locale][item.key]}
              {item.hasDropdown ? <ChevronDown className="ml-1 h-4 w-4" /> : null}
            </Link>
            {active ? (
              <span
                className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full"
                style={{ backgroundColor: currentTheme.colors.accentPrimary }}
              />
            ) : null}

            {item.key === "nav_characters" && activeDropdown === "nav_characters" ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-0 top-full mt-3 w-72 overflow-hidden rounded-xl border shadow-2xl"
                style={{
                  backgroundColor: `${currentTheme.colors.backgroundSecondary}f6`,
                  borderColor: `${currentTheme.colors.accentPrimary}35`,
                }}
              >
                <Link
                  href={localizedHref("/characters")}
                  className="block border-b px-4 py-3 text-sm font-semibold"
                  style={{
                    color: currentTheme.colors.accentPrimary,
                    borderColor: `${currentTheme.colors.accentPrimary}22`,
                  }}
                >
                  {navContent[locale].nav_all_characters}
                </Link>
                {CHARACTER_NAV_LINKS.map((character) => (
                  <Link
                    key={character.href}
                    href={localizedHref(character.href)}
                    className="block px-4 py-2 text-sm transition-colors hover:bg-black/10"
                    style={{ color: currentTheme.colors.textSecondary }}
                  >
                    {character.name}
                  </Link>
                ))}
              </motion.div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
