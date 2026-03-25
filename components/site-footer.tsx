"use client"

import React from "react"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"
import { useState } from "react"

export function SiteFooter() {
  const { currentTheme } = useTheme()
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here we would submit to Supabase
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const quickLinks = [
    { key: "nav_home", href: "/" },
    { key: "nav_about", href: "/about" },
    { key: "nav_founder", href: "/founder" },
    { key: "nav_news", href: "/news" },
    { key: "nav_characters", href: "/characters" },
    { key: "nav_shop", href: "/shop" },
  ]

  const resourceLinks = [
    { key: "footer_press", href: "/press" },
    { key: "footer_careers", href: "/careers" },
    { key: "footer_contact", href: "/contact" },
    { key: "footer_faq", href: "/faq" },
    { key: "footer_terms", href: "/terms" },
    { key: "footer_privacy", href: "/privacy" },
  ]

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/isolele", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/isolele", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/isolele", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/isolele", label: "YouTube" },
  ]

  return (
    <footer 
      className="relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}
    >
      {/* Decorative top border */}
      <div 
        className="h-1"
        style={{ 
          background: `linear-gradient(90deg, transparent, ${currentTheme.colors.accentPrimary}, transparent)`
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Column 1: Identity */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/IMG-20260311-WA0030.jpg"
                alt="ISOLELE"
                width={50}
                height={50}
                className="object-contain"
              />
              <span 
                className="text-xl font-bold tracking-wider"
                style={{ color: currentTheme.colors.textPrimary }}
              >
                ISOLELE
              </span>
            </Link>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              {t("footer_description")}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-colors"
                  style={{ 
                    backgroundColor: `${currentTheme.colors.accentPrimary}20`,
                    color: currentTheme.colors.textSecondary
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: currentTheme.colors.accentPrimary,
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 
              className="text-lg font-bold tracking-wider mb-6"
              style={{ color: currentTheme.colors.accentPrimary }}
            >
              {t("footer_explore")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:translate-x-1 inline-block"
                    style={{ color: currentTheme.colors.textSecondary }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = currentTheme.colors.accentPrimary
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = currentTheme.colors.textSecondary
                    }}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 
              className="text-lg font-bold tracking-wider mb-6"
              style={{ color: currentTheme.colors.accentPrimary }}
            >
              {t("footer_resources")}
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: currentTheme.colors.textSecondary }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = currentTheme.colors.accentPrimary
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = currentTheme.colors.textSecondary
                    }}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Fashion */}
          <div>
            <h3 
              className="text-lg font-bold tracking-wider mb-4"
              style={{ color: currentTheme.colors.accentPrimary }}
            >
              {t("nav_fashion")}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={`/fashion/fashion-${i}.jpg`}
                    alt={`Fashion ${i}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div>
            <h3 
              className="text-lg font-bold tracking-wider mb-6"
              style={{ color: currentTheme.colors.accentPrimary }}
            >
              {t("footer_newsletter_title")}
            </h3>
            <p 
              className="text-sm mb-4"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              {t("footer_newsletter_desc")}
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("footer_email_placeholder")}
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                style={{ 
                  backgroundColor: currentTheme.colors.background,
                  color: currentTheme.colors.textPrimary,
                  border: `1px solid ${currentTheme.colors.accentPrimary}30`
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = currentTheme.colors.accentPrimary
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = `${currentTheme.colors.accentPrimary}30`
                }}
              />
              <motion.button
                type="submit"
                className="w-full px-4 py-3 rounded-lg text-sm font-bold tracking-wider transition-all"
                style={{ 
                  backgroundColor: currentTheme.colors.accentPrimary,
                  color: currentTheme.colors.background
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {subscribed ? t("footer_thank_you") : t("footer_subscribe")}
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div 
          className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: `${currentTheme.colors.accentPrimary}20` }}
        >
          <p 
            className="text-sm text-center md:text-left flex items-center gap-2"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            <span>©</span>
            <span>{new Date().getFullYear()} ISOLELE. All rights reserved. A Congolese Heritage Initiative</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/sitemap"
              className="transition-colors"
              style={{ color: currentTheme.colors.textSecondary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = currentTheme.colors.accentPrimary
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = currentTheme.colors.textSecondary
              }}
            >
              {t("site_map")}
            </Link>
            <span style={{ color: currentTheme.colors.textSecondary }}>|</span>
            <Link
              href="/accessibility"
              className="transition-colors"
              style={{ color: currentTheme.colors.textSecondary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = currentTheme.colors.accentPrimary
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = currentTheme.colors.textSecondary
              }}
            >
              {t("accessibility")}
            </Link>
            <span style={{ color: currentTheme.colors.textSecondary }}>|</span>
            <button
              className="transition-colors"
              style={{ color: currentTheme.colors.textSecondary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = currentTheme.colors.accentPrimary
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = currentTheme.colors.textSecondary
              }}
            >
              {t("cookie_settings")}
            </button>
          </div>
        </div>
      </div>

      {/* Decorative background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <div 
          className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] rounded-full"
          style={{ 
            background: `radial-gradient(circle, ${currentTheme.colors.accentPrimary} 0%, transparent 70%)`
          }}
        />
      </div>
    </footer>
  )
}
