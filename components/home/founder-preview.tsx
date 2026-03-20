"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import Image from "next/image"
import { Sparkles } from "lucide-react"

export function FounderPreview() {
  const { currentTheme } = useTheme()
  const { currentLanguage } = useLanguage()

  const content = {
    en: {
      title: "H.R.M KING KUFULULA",
      subtitle: "The Visionary Behind ISOLELE",
      location: "King Kufulula — New York",
      description:
        "A cultural architect and storyteller, King Kufulula founded ISOLELE to restore the soul of African storytelling. His vision is to create a mythological empire where African superheroes rise from authentic history, not borrowed myths.",
      quote: "We don't just create characters. We create a lineage. We create a legacy.",
      cta: "Meet the Founder",
    },
    fr: {
      title: "H.R.M ROI KUFULULA",
      subtitle: "Le Visionnaire Derrière ISOLELE",
      location: "Roi Kufulula — New York",
      description:
        "Architecte culturel et conteur, le Roi Kufulula a fondé ISOLELE pour restaurer l'âme du storytelling africain. Sa vision est de créer un empire mythologique où les super-héros africains émergent de l'histoire authentique.",
      quote:
        "Nous ne créons pas seulement des personnages. Nous créons une lignée. Nous créons un héritage.",
      cta: "Rencontrer le Fondateur",
    },
  }

  const c = content[currentLanguage.code as keyof typeof content] || content.en

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
              <p className="text-xs font-black tracking-widest uppercase">{c.location}</p>
              <p className="text-[10px] opacity-75 tracking-wider">Creator & Author</p>
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
                className="text-4xl sm:text-5xl font-black mb-2"
                style={{ color: currentTheme.colors.accentPrimary }}
              >
                {c.title}
              </h2>
              <p className="text-xl" style={{ color: currentTheme.colors.textSecondary }}>
                {c.subtitle}
              </p>
            </div>

            <p
              className="text-lg leading-relaxed"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              {c.description}
            </p>

            <motion.blockquote
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative py-6 px-8 rounded-2xl"
              style={{
                backgroundColor: currentTheme.colors.backgroundSecondary,
                border: `1px solid ${currentTheme.colors.accentPrimary}30`,
              }}
            >
              <Sparkles
                className="absolute top-4 left-4 h-5 w-5"
                style={{ color: currentTheme.colors.accentPrimary }}
              />
              <Sparkles
                className="absolute bottom-4 right-4 h-5 w-5"
                style={{ color: currentTheme.colors.accentPrimary }}
              />
              <p
                className="text-xl sm:text-2xl font-semibold italic text-center"
                style={{ color: currentTheme.colors.textPrimary }}
              >
                &ldquo;{c.quote}&rdquo;
              </p>
            </motion.blockquote>

            <Link href="/founder">
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold w-fit"
                style={{
                  backgroundColor: currentTheme.colors.accentPrimary,
                  color: currentTheme.colors.background,
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: `0 0 30px ${currentTheme.colors.accentPrimary}50`,
                }}
                whileTap={{ scale: 0.96 }}
              >
                {c.cta} →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
