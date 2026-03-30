"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import Image from "next/image"
import { Sparkles } from "lucide-react"

export function FounderPreview() {
  const { currentTheme } = useTheme()
  const { t } = useLanguage()

  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                width: 380,
                maxWidth: "100%",
                aspectRatio: "4/5",
                border: `2px solid ${currentTheme.colors.accentPrimary}40`,
                boxShadow: `0 32px 80px rgba(0,0,0,0.5), 0 0 40px ${currentTheme.colors.accentPrimary}20`,
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/King%20kufulula-1pEeYE9t1QYruZhNooZuPw7Nkd1A8l.jpg"
                alt="H.R.M King Kufulula — Creator of ISOLELE"
                fill
                className="object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 55%, ${currentTheme.colors.background}cc 100%)`,
                }}
              />
            </div>
            {/* Floating label */}
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-xl text-center whitespace-nowrap"
              style={{
                backgroundColor: currentTheme.colors.accentPrimary,
                color: "#000",
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-xs font-black tracking-widest uppercase">{t('founder_location')}</p>
              <p className="text-[10px] opacity-75 tracking-wider">{t('founder_creator_author')}</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2"
                style={{ color: currentTheme.colors.textPrimary }}
              >
                {t('founder_title')}
              </h2>
              <p
                className="text-lg sm:text-xl font-semibold mb-4"
                style={{ color: currentTheme.colors.accentPrimary }}
              >
                {t('founder_subtitle')}
              </p>
            </div>

            <p 
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              {t('founder_description')}
            </p>

            {/* Quote */}
            <div 
              className="my-8 px-6 py-6 rounded-2xl text-center"
              style={{ 
                backgroundColor: currentTheme.colors.backgroundSecondary,
                border: `1px solid ${currentTheme.colors.accentPrimary}30`
              }}
            >
              <Sparkles 
                size={24} 
                style={{ color: currentTheme.colors.accentPrimary }}
                className="mx-auto mb-3 opacity-60"
              />
              <p 
                className="text-lg sm:text-2xl italic font-semibold leading-relaxed"
                style={{ color: currentTheme.colors.textPrimary }}
              >
                "{t('founder_quote')}"
              </p>
              <Sparkles 
                size={24} 
                style={{ color: currentTheme.colors.accentPrimary }}
                className="mx-auto mt-3 opacity-60"
              />
            </div>

            {/* CTA */}
            <Link href="/founder">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 inline-block"
                style={{
                  backgroundColor: currentTheme.colors.accentPrimary,
                  boxShadow: `0 0 30px ${currentTheme.colors.accentPrimary}40`
                }}
              >
                {t('founder_cta')} →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
