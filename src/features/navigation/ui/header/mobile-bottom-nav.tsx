"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { getNavigationContent } from "@/features/navigation/content/nav.content";
import { cn } from "@/shared/lib/utils";
import { useTheme } from "@/shared/contexts/theme-context";
import { resolveLocaleFromPathname, stripLocaleFromPathname, withLocale } from "@/shared/i18n/locales";
import { NAV_LINKS, isActive } from "../../config/nav.config";

export function MobileBottomNav() {
  const pathname = usePathname();
  const { currentTheme } = useTheme();

  const locale = resolveLocaleFromPathname(pathname);
  const pathnameNoLocale = stripLocaleFromPathname(pathname);
  const content = getNavigationContent(locale);

  function localizedHref(href: string) {
    return withLocale(locale, href);
  }

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-5 lg:hidden">
      <div
        className="flex items-center gap-2 rounded-3xl border px-3 py-2 backdrop-blur-xl"
        style={{
          backgroundColor: `${currentTheme.colors.background}e8`,
          borderColor: `${currentTheme.colors.accentPrimary}40`,
          boxShadow: `0 8px 30px ${currentTheme.colors.accentPrimary}20`,
        }}
      >
        {NAV_LINKS.map((item) => {
          const active = isActive(pathnameNoLocale, item.href);
          const Icon = item.icon;

          return (
            <Link key={item.href} href={localizedHref(item.href)} aria-label={content.labels[item.key]}>
              <motion.span
                whileTap={{ scale: 0.9 }}
                className={cn("inline-flex rounded-2xl p-3")}
                style={{
                  backgroundColor: active ? `${currentTheme.colors.accentPrimary}26` : `${currentTheme.colors.accentPrimary}10`,
                  color: active ? currentTheme.colors.accentPrimary : currentTheme.colors.textSecondary,
                }}
              >
                {Icon ? <Icon className="h-5 w-5" /> : null}
              </motion.span>
            </Link>
          );
        })}

      </div>
    </nav>
  );
}

