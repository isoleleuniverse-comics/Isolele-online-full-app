"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"
import { Sparkles, Crown, Flame } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"

const pillars = [
  {
    key: "destiny",
    icon: Sparkles,
    title: "The Lion Has Learned to Write",
    description: "An African proverb says: 'Until the lion learns to write, every story will glorify the hunter.' ISOLELE is the lion's pen. Africa is writing its own heroes, its own kingdoms, its own legends. The hunter's version of history is over.",
  },
  {
    key: "heritage",
    icon: Crown,
    title: "Les Lignées Royales Portent un Pouvoir Ancien",
    description: "Le sang royal transporte la mémoire et la puissance des royaumes oubliés, attendant d'être réveillés par les élus.",
  },
  {
    key: "resurrection",
    icon: Flame,
    title: "Les Esprits Ancestraux ne Meurent Jamais",
    description: "L'Afrique n'a jamais été impuissante. La prophétie est revenue, et avec elle, la résurrection des mythes enterrés.",
  },
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
      style={{ 
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b6dcbb8a-131e-4f9e-ba9e-a5d778f07dd4.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for text readability */}
      <div className="absolute inset-0 bg-[#F5F0E8]/70" />

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
            THE ISOLELE UNIVERSE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl font-medium tracking-wide mb-6"
            style={{ color: currentTheme.colors.accentPrimary }}
          >
            Africa has always had heroes. ISOLELE gives them a universe.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            Born from the roots of Kongo. Built for every African child who never saw themselves as a hero. ISOLELE is the universe that was always meant to exist. The kingdom was never lost. It was waiting for its storytellers. ISOLELE FOREVER.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.key}
              initial={{ opacity: 0, rotateY: 90 }}
              animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className="group relative p-8 rounded-2xl transition-all duration-500"
              style={{
                backgroundColor: `${currentTheme.colors.background}80`,
                border: `1px solid ${currentTheme.colors.accentPrimary}30`,
              }}
            >
              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `inset 0 0 30px ${currentTheme.colors.accentPrimary}20, 0 0 30px ${currentTheme.colors.accentPrimary}20`
                }}
              />
              
              {/* Icon */}
              <div className="relative mb-6">
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
                {/* Animated particles around icon */}
                {index === 0 && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Sparkles 
                      className="w-4 h-4"
                      style={{ color: currentTheme.colors.accentPrimary }}
                    />
                  </motion.div>
                )}
              </div>

              {/* Content */}
              <h3 
                className="text-xl font-bold tracking-wide mb-4 relative"
                style={{ color: currentTheme.colors.textPrimary }}
              >
                {pillar.title}
              </h3>
              <p 
                className="text-sm leading-relaxed relative"
                style={{ color: currentTheme.colors.textSecondary }}
              >
                {pillar.description}
              </p>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-8 right-8 h-0.5"
                style={{ backgroundColor: currentTheme.colors.accentPrimary }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
