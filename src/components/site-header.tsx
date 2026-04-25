"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  ChevronDown,
  Gamepad2,
  Globe,
  Home,
  Menu,
  Palette,
  ShoppingBag,
  Users,
  X,
} from "lucide-react";
import { useTheme, themes } from "@/lib/theme-context";
import { publicLanguages, useLanguage } from "@/lib/language-context";
import { useCart } from "@/lib/cart-context";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, withLocale } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  key: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { key: "nav_home", href: "/" },
  { key: "nav_comics", href: "/comics" },
  { key: "nav_characters", href: "/characters", hasDropdown: true },
  { key: "nav_games", href: "/kufu-game" },
];

const characterLinks = [
  { name: "ZAIIRE - PRINCE DU KONGO", href: "/characters/zaiire" },
  { name: "BAMBULA - LA GARDIENNE", href: "/characters/bambula" },
  { name: "KING KUFULULA - LE ROI", href: "/characters/kufulula" },
  { name: "MOKELE - LE PRINCE", href: "/characters/mokele" },
];

const mobileNav = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/comics", icon: BookOpen, label: "Comics" },
  { href: "/characters", icon: Users, label: "Characters" },
  { href: "/kufu-game", icon: Gamepad2, label: "Game" },
] as const;

const HEADER_LOGO_SRC = "/LOGO%20HORIZONTAL.png";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function HeaderBackButton({ color }: { color: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.back();
      }}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-white/5"
      style={{ color, borderColor: `${color}45` }}
      aria-label="Go back"
    >
      <ArrowLeft className="h-5 w-5" />
    </button>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { currentTheme, setTheme } = useTheme();
  const { setLanguage, t } = useLanguage();
  const { totalItems, setIsCartOpen } = useCart();

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
    // Keep the same page when possible, but switch locale prefix.
    const nextPath = withLocale(nextLocale, pathnameNoLocale);
    router.push(nextPath);
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

          <nav className="mx-auto flex items-center gap-7">
            {navItems.map((item) => {
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
                    {t(item.key)}
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
                        {t("nav_all_characters")}
                      </Link>
                      {characterLinks.map((character) => (
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

          <div className="flex items-center gap-2">
            <div className="relative group/language">
              <button
                className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase"
                style={{
                  color: currentTheme.colors.textSecondary,
                  borderColor: `${currentTheme.colors.accentPrimary}30`,
                }}
              >
                <Globe className="h-3.5 w-3.5" />
                {locale}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div
                className="invisible absolute right-0 top-full z-20 mt-2 min-w-36 rounded-lg border opacity-0 shadow-xl transition-all group-hover/language:visible group-hover/language:opacity-100"
                style={{
                  backgroundColor: currentTheme.colors.background,
                  borderColor: `${currentTheme.colors.accentPrimary}35`,
                }}
              >
                {publicLanguages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      const nextLocale = language.code as (typeof SUPPORTED_LOCALES)[number];
                      // Keep existing app-level translations in sync (if present),
                      // but URL is the source of truth for SEO.
                      setLanguage(nextLocale);
                      switchLocale(nextLocale);
                    }}
                    className="block w-full px-3 py-2 text-left text-xs uppercase tracking-wider transition-colors hover:bg-black/5"
                    style={{
                      color:
                        language.code === locale
                          ? currentTheme.colors.accentPrimary
                          : currentTheme.colors.textSecondary,
                    }}
                  >
                    {language.code} - {language.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative group/theme">
              <button
                className="rounded-full border p-2"
                style={{
                  color: currentTheme.colors.textSecondary,
                  borderColor: `${currentTheme.colors.accentPrimary}30`,
                }}
                aria-label="Theme switcher"
              >
                <Palette className="h-4 w-4" />
              </button>
              <div
                className="invisible absolute right-0 top-full z-20 mt-2 flex gap-2 rounded-lg border p-2 opacity-0 shadow-xl transition-all group-hover/theme:visible group-hover/theme:opacity-100"
                style={{
                  backgroundColor: currentTheme.colors.background,
                  borderColor: `${currentTheme.colors.accentPrimary}35`,
                }}
              >
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setTheme(theme.id)}
                    className="h-6 w-6 rounded-full border"
                    style={{
                      backgroundColor: theme.colors.accentPrimary,
                      borderColor: theme.id === currentTheme.id ? "#FFFFFF" : "transparent",
                    }}
                    title={theme.name}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative rounded-full border p-2"
              style={{
                color: currentTheme.colors.accentPrimary,
                borderColor: `${currentTheme.colors.accentPrimary}30`,
              }}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              {totalItems > 0 ? (
                <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </header>

      <header className="fixed left-0 right-0 top-0 z-50 border-b lg:hidden" style={{ backgroundColor: "#0A0A0AEE", borderColor: "#FFFFFF1F" }}>
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4">
          <div className="flex min-w-0 items-center gap-3">
            {!isHomePage ? <HeaderBackButton color="#F6B800" /> : null}

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
            className="justify-self-end rounded-md border p-2 text-white"
            style={{ borderColor: "#FFFFFF35" }}
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
              {navItems.map((item) => (
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
                  {t(item.key)}
                </Link>
              ))}
            </nav>

            <div className="mt-4 space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: currentTheme.colors.textSecondary }}>
                Language
              </p>
              <div className="flex flex-wrap gap-2">
                {publicLanguages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      const nextLocale = language.code as (typeof SUPPORTED_LOCALES)[number];
                      setLanguage(nextLocale);
                      switchLocale(nextLocale);
                      setMobileMenuOpen(false);
                    }}
                    className="rounded-full border px-3 py-1 text-xs uppercase"
                    style={{
                      borderColor:
                        language.code === locale
                          ? currentTheme.colors.accentPrimary
                          : `${currentTheme.colors.accentPrimary}30`,
                      color:
                        language.code === locale
                          ? currentTheme.colors.accentPrimary
                          : currentTheme.colors.textSecondary,
                    }}
                  >
                    {language.code}
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

      <nav className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-5 lg:hidden">
        <div
          className="flex items-center gap-2 rounded-3xl border px-3 py-2 backdrop-blur-xl"
          style={{
            backgroundColor: `${currentTheme.colors.background}e8`,
            borderColor: `${currentTheme.colors.accentPrimary}40`,
            boxShadow: `0 8px 30px ${currentTheme.colors.accentPrimary}20`,
          }}
        >
          {mobileNav.map((item) => {
            const active = isActive(pathnameNoLocale, item.href);
            const Icon = item.icon;

            return (
              <Link key={item.href} href={localizedHref(item.href)} aria-label={item.label}>
                <motion.span
                  whileTap={{ scale: 0.9 }}
                  className={cn("inline-flex rounded-2xl p-3")}
                  style={{
                    backgroundColor: active ? `${currentTheme.colors.accentPrimary}26` : `${currentTheme.colors.accentPrimary}10`,
                    color: active ? currentTheme.colors.accentPrimary : currentTheme.colors.textSecondary,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </motion.span>
              </Link>
            );
          })}

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative inline-flex rounded-2xl p-3"
            style={{
              backgroundColor: `${currentTheme.colors.accentPrimary}10`,
              color: currentTheme.colors.textSecondary,
            }}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 ? (
              <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
                {totalItems}
              </span>
            ) : null}
          </button>
        </div>
      </nav>
    </>
  );
}
