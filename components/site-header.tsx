"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X, Bell, Zap, ShoppingBag } from "lucide-react"
import { useTheme, themes } from "@/lib/theme-context"
import { useLanguage, languages } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import { useNotifications } from "@/lib/notifications-context"
import { cn } from "@/lib/utils"
import { HomeIcon, ComicsIcon, ShopIcon, StoryNewsIcon, SettingsIcon } from "@/components/icons/elegant-icons"

const characterLinks = [
  { name: "ZAIRE - PRINCE DU KONGO", href: "/characters/zaire" },
  { name: "BAMBULA - LA GARDIENNE", href: "/characters/bambula" },
  { name: "KING KUFULULA - LE ROI", href: "/characters/kufulula" },
  { name: "MOKELE - LE PRINCE", href: "/characters/mokele" },
]

// Animated Game Icon that cycles through different game-related icons
const AnimatedGameIcon = () => {
  const [currentIcon, setCurrentIcon] = useState(0)
  
  const gameIcons = [
    <svg key="controller" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9c0-1 1-2 2-2h8c1 0 2 1 2 2v6c0 1-1 2-2 2H8c-1 0-2-1-2-2V9z" /><circle cx="9" cy="12" r="0.5" fill="currentColor" /><circle cx="15" cy="12" r="0.5" fill="currentColor" /></svg>,
    <svg key="ball" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 2v20M2 12h20" /></svg>,
    <svg key="map" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6l9-3 9 3v12l-9 3-9-3V6z" /></svg>,
    <svg key="dice" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2" /><circle cx="8" cy="8" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="16" cy="16" r="1" fill="currentColor" /></svg>,
  ]

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      onAnimationComplete={() => setCurrentIcon((i) => (i + 1) % gameIcons.length)}
    >
      {gameIcons[currentIcon]}
    </motion.div>
  )
}

export function SiteHeader() {
  const { currentTheme, setTheme } = useTheme()
  const { currentLanguage, setLanguage, t } = useLanguage()
  const { totalItems, setIsCartOpen } = useCart()
  const { unreadCount } = useNotifications()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navItems = [
    { key: "nav_home", href: "/" },
    { key: "nav_about", href: "/about" },
    { key: "nav_founder", href: "/founder" },
    { key: "nav_characters", href: "/characters", hasDropdown: true },
    { key: "nav_shop", href: "/shop" },
    { key: "nav_fashion", href: "/fashion" },
    { key: "nav_games", href: "/kufu-game" },
    { key: "nav_settings", href: "/settings" },
  ]

  return (
    <>
      {/* DESKTOP HEADER - HIDDEN on mobile, VISIBLE on lg+ */}
      <header 
        className="hidden lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-50 lg:block transition-colors duration-300"
        style={{ 
          backgroundColor: `${currentTheme.colors.background}ee`,
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${currentTheme.colors.accentPrimary}20`
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/IMG-20260311-WA0030.jpg"
                  alt="ISOLELE — The Chosen Ones"
                  width={120}
                  height={120}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <div 
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition-colors"
                    style={{ color: currentTheme.colors.textSecondary }}
                  >
                    {t(item.key)} {item.hasDropdown && <ChevronDown className="inline h-4 w-4 ml-1" />}
                  </Link>

                  {item.key === "nav_characters" && activeDropdown === "nav_characters" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 mt-2 w-64 rounded-lg"
                      style={{
                        backgroundColor: `${currentTheme.colors.backgroundSecondary}f0`,
                        border: `1px solid ${currentTheme.colors.accentPrimary}30`
                      }}
                    >
                      <Link href="/characters" className="block px-4 py-3 text-sm font-medium border-b"
                        style={{ color: currentTheme.colors.accentPrimary, borderColor: `${currentTheme.colors.accentPrimary}20` }}>
                        {t("nav_all_characters")}
                      </Link>
                      {characterLinks.map((char) => (
                        <Link key={char.href} href={char.href} className="block px-4 py-2 text-sm hover:bg-white/5"
                          style={{ color: currentTheme.colors.textSecondary }}>
                          {char.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Right Icons */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                  {currentLanguage.code.toUpperCase()} <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute right-0 top-full mt-2 bg-white dark:bg-gray-800 rounded shadow-lg hidden group-hover:block">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notifications */}
              <Link href="/settings" className="relative p-2">
                <div style={{ color: currentTheme.colors.accentPrimary }}>
                  <Bell size={24} />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {unreadCount}
                    </span>
                  )}
                </div>
              </Link>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2"
                style={{ color: currentTheme.colors.accentPrimary }}
              >
                <ShoppingBag size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Theme Switcher */}
              <div className="relative group">
                <button className="p-2" style={{ color: currentTheme.colors.textSecondary }}>
                  <Zap size={20} />
                </button>
                <div className="absolute right-0 top-full mt-2 flex gap-2 bg-white dark:bg-gray-800 p-2 rounded shadow-lg hidden group-hover:flex">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => setTheme(theme.id)}
                      className="w-8 h-8 rounded"
                      style={{ backgroundColor: theme.colors.accentPrimary }}
                      title={theme.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE BOTTOM NAV - VISIBLE on mobile, HIDDEN on lg+ */}
      {/* New elegant navigation with: Home, Comics, Shop, Games, Story/News, Settings */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 lg:hidden z-40 flex justify-center pb-6 px-4"
      >
        <div
          className="flex gap-3 px-6 py-4 rounded-3xl backdrop-blur-xl"
          style={{
            backgroundColor: `${currentTheme.colors.background}dd`,
            border: `1.5px solid ${currentTheme.colors.accentPrimary}40`,
            boxShadow: `0 8px 32px ${currentTheme.colors.accentPrimary}20`
          }}
        >
          {/* Home */}
          <Link href="/" title="Home">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-2xl transition-all"
              style={{
                backgroundColor: `${currentTheme.colors.accentPrimary}15`,
                color: currentTheme.colors.accentPrimary,
              }}
            >
              <HomeIcon className="w-6 h-6" />
            </motion.button>
          </Link>

          {/* Comics/Characters */}
          <Link href="/characters" title="Comics">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-2xl transition-all"
              style={{
                backgroundColor: `${currentTheme.colors.accentPrimary}15`,
                color: currentTheme.colors.accentPrimary,
              }}
            >
              <ComicsIcon className="w-6 h-6" />
            </motion.button>
          </Link>

          {/* Shop */}
          <Link href="/shop" title="Shop">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-2xl transition-all"
              style={{
                backgroundColor: `${currentTheme.colors.accentPrimary}15`,
                color: currentTheme.colors.accentPrimary,
              }}
            >
              <ShopIcon className="w-6 h-6" />
            </motion.button>
          </Link>

          {/* Games */}
          <Link href="/kufu-game" title="Games">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-2xl transition-all"
              style={{
                backgroundColor: `${currentTheme.colors.accentPrimary}15`,
                color: currentTheme.colors.accentPrimary,
              }}
            >
              <AnimatedGameIcon />
            </motion.button>
          </Link>

          {/* Story/News */}
          <Link href="/news" title="News">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-2xl transition-all"
              style={{
                backgroundColor: `${currentTheme.colors.accentPrimary}15`,
                color: currentTheme.colors.accentPrimary,
              }}
            >
              <StoryNewsIcon className="w-6 h-6" />
            </motion.button>
          </Link>

          {/* Settings */}
          <Link href="/settings" className="relative" title="Settings">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-2xl transition-all"
              style={{
                backgroundColor: `${currentTheme.colors.accentPrimary}15`,
                color: currentTheme.colors.accentPrimary,
              }}
            >
              <SettingsIcon className="w-6 h-6" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {unreadCount}
                </span>
              )}
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </>
  )
}
