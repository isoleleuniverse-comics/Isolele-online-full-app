"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"
import { Sparkles, Crown, Flame, ArrowRight } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const pillars = [
  {
    key: "destiny",
    icon: Sparkles,
    titleKey: "universe_destiny_title",
    descriptionKey: "universe_destiny_desc",
    href: "/the-founder",
    characterName: "Zaiire",
  },
  {
    key: "heritage",
    icon: Crown,
    titleKey: "universe_heritage_title",
    descriptionKey: "universe_heritage_desc",
    href: "/the-founder",
    characterName: "Kimoya",
  },
  {
    key: "resurrection",
    icon: Flame,
    titleKey: "universe_resurrection_title",
    descriptionKey: "universe_resurrection_desc",
    href: "/the-founder",
    characterName: "Bambula",
  },
  {
    key: "founder",
    icon: Crown,
    titleKey: "universe_founder_title",
    descriptionKey: "universe_founder_desc",
    href: "/the-founder",
    characterName: "King Kufulula",
  },
]

const backgroundImages = [
  '/lion-leopard-warrior.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a1486131-34f6-4e8f-941d-1f1185ed8af7.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/577207f9-ac97-4745-a175-9815c6c39313.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c1e14e48-7ad7-4311-8f7e-73b69263fd5f.jpeg',
]

export function UniverseSection() {
  const { currentTheme } = useTheme()
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, ${currentTheme.colors.accentPrimary} 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, ${currentTheme.colors.accentSecondary} 0%, transparent 50%)`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-black tracking-wider mb-4 whitespace-nowrap"
            style={{ color: currentTheme.colors.textPrimary }}
          >
            {t("universe_title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl font-medium tracking-wide mb-6"
            style={{ color: currentTheme.colors.accentPrimary }}
          >
            {t("universe_subtitle")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            {t("universe_description")}
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.key}
              initial={{ opacity: 0, rotateY: 90 }}
              animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className="group relative h-full flex flex-col"
            >
              <div
                className="relative p-8 rounded-2xl transition-all duration-500 h-full flex flex-col"
                style={{
                  backgroundColor: `${currentTheme.colors.background}80`,
                  border: `1px solid ${currentTheme.colors.accentPrimary}30`,
                  boxShadow: `0 0 0 rgba(0,0,0,0)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 40px ${currentTheme.colors.accentPrimary}30, inset 0 0 30px ${currentTheme.colors.accentPrimary}15`
                  e.currentTarget.style.borderColor = currentTheme.colors.accentPrimary
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`
                  e.currentTarget.style.borderColor = `${currentTheme.colors.accentPrimary}30`
                }}
              >
                {/* Background image */}
                <div 
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${index === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-20'}`}
                  style={{
                    backgroundImage: `url('${backgroundImages[index]}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                
                {/* Icon */}
                <div className="relative mb-6 z-10">
                  <motion.div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <pillar.icon 
                      className="w-8 h-8"
                      style={{ color: currentTheme.colors.accentPrimary }}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <div 
                    className="bg-[#F5F0E8]/90 rounded-lg p-4 flex-1"
                  >
                    <h3 
                      className="text-xl font-bold tracking-wide mb-4"
                      style={{ color: '#000000' }}
                    >
                      {t(pillar.titleKey)}
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: '#000000' }}
                    >
                      {t(pillar.descriptionKey)}
                    </p>
                  </div>
                </div>

                {/* Discover Button */}
                <Link href={pillar.href} className="relative z-10 mt-6 w-full">
                  <motion.button
                    className="w-full px-4 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
                    style={{
                      backgroundColor: currentTheme.colors.accentPrimary,
                      color: currentTheme.colors.background,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('discover_more')}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: currentTheme.colors.accentPrimary }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
