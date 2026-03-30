"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, Crown } from "lucide-react"
import Link from "next/link"

export default function FounderPage() {
  const { currentTheme } = useTheme()
  const { t } = useLanguage()

  return (
    <main style={{ backgroundColor: currentTheme.colors.background }} className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="mb-6 flex justify-center">
              <Crown className="w-16 h-16" style={{ color: currentTheme.colors.accentPrimary }} />
            </div>
            <h1 
              className="text-5xl sm:text-6xl font-black tracking-wider mb-6"
              style={{ color: currentTheme.colors.textPrimary }}
            >
              King Kufulula
            </h1>
            <p 
              className="text-2xl font-bold tracking-wide mb-4"
              style={{ color: currentTheme.colors.accentPrimary }}
            >
              {t("universe_founder_title")}
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div 
                className="p-8 rounded-2xl"
                style={{ 
                  backgroundColor: `${currentTheme.colors.backgroundSecondary}90`,
                  border: `1px solid ${currentTheme.colors.accentPrimary}30`
                }}
              >
                <h2 
                  className="text-3xl font-bold tracking-wide mb-6"
                  style={{ color: currentTheme.colors.textPrimary }}
                >
                  The Vision Behind ISOLELE
                </h2>
                
                <div className="space-y-6">
                  <p 
                    className="text-lg leading-relaxed"
                    style={{ color: currentTheme.colors.textSecondary }}
                  >
                    King Kufulula is not merely a character—he is the visionary architect of the ISOLELE universe itself. Born from a mission to restore the soul of African storytelling, Kufulula conceived a mythological empire where African superheroes rise not from borrowed narratives, but from authentic history, ancestral wisdom, and the unfinished legacies of forgotten kingdoms.
                  </p>

                  <p 
                    className="text-lg leading-relaxed"
                    style={{ color: currentTheme.colors.textSecondary }}
                  >
                    His philosophy is revolutionary: "Colonialism did not erase our greatness. It buried it under its own myth." With these words, Kufulula embarked on a journey to unearth the buried narratives of Africa—the stories of mighty empires like Kongo, Kemet, Nubia, and countless others—and weave them into a living, breathing universe of superheroes, warriors, queens, and legends.
                  </p>

                  <p 
                    className="text-lg leading-relaxed"
                    style={{ color: currentTheme.colors.textSecondary }}
                  >
                    Every character in ISOLELE carries a fragment of Kufulula's vision. Zaiire wears the Necklace of Destiny. Kimoya commands as a Kandake. Bambula leads the rebellion. Each is a thread in Kufulula's grand tapestry—a universe where African children see themselves not as supporting characters in someone else's story, but as the protagonists of their own epic destiny.
                  </p>

                  <p 
                    className="text-lg leading-relaxed font-bold"
                    style={{ color: currentTheme.colors.accentPrimary }}
                  >
                    Kufulula's legacy is not just a comic universe. It is a cultural resurrection.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Stats Box */}
              <div 
                className="p-6 rounded-2xl text-center"
                style={{ 
                  backgroundColor: `${currentTheme.colors.accentPrimary}15`,
                  border: `2px solid ${currentTheme.colors.accentPrimary}`
                }}
              >
                <p 
                  className="text-sm font-bold tracking-wide mb-2"
                  style={{ color: currentTheme.colors.accentPrimary }}
                >
                  FOUNDER & VISIONARY
                </p>
                <h3 
                  className="text-2xl font-black tracking-wider"
                  style={{ color: currentTheme.colors.textPrimary }}
                >
                  H.R.M. King Kufulula
                </h3>
              </div>

              {/* Quote Box */}
              <div 
                className="p-6 rounded-2xl border-l-4"
                style={{ 
                  backgroundColor: `${currentTheme.colors.backgroundSecondary}90`,
                  borderLeftColor: currentTheme.colors.accentPrimary,
                  borderLeftWidth: "4px"
                }}
              >
                <p 
                  className="text-sm italic leading-relaxed"
                  style={{ color: currentTheme.colors.textSecondary }}
                >
                  "Colonialism did not erase our greatness. It buried it under its own myth. We must dig, remember, and resurrect the African stories that shape our destiny."
                </p>
                <p 
                  className="text-xs font-bold tracking-wide mt-4"
                  style={{ color: currentTheme.colors.accentPrimary }}
                >
                  — King Kufulula
                </p>
              </div>

              {/* Coming Soon Box */}
              <div 
                className="p-6 rounded-2xl text-center"
                style={{ 
                  backgroundColor: `${currentTheme.colors.backgroundSecondary}90`,
                  border: `1px solid ${currentTheme.colors.accentPrimary}30`
                }}
              >
                <p 
                  className="text-sm font-bold tracking-wide mb-2"
                  style={{ color: currentTheme.colors.accentPrimary }}
                >
                  COMING SOON
                </p>
                <p 
                  className="text-xs"
                  style={{ color: currentTheme.colors.textSecondary }}
                >
                  The Founder's memoir and original comic series
                </p>
              </div>
            </motion.div>
          </div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <Link href="/">
              <motion.button
                className="px-8 py-4 rounded-lg font-bold flex items-center gap-2 tracking-wider"
                style={{
                  backgroundColor: currentTheme.colors.accentPrimary,
                  color: currentTheme.colors.background,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("back_to_home")}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
