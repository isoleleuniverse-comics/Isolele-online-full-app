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
    title: "Everything Begins in Kongo",
    description: "Music. Dance. Royalty. Fashion. Culture. History. Before the world had names for these things, the Kongo had mastered them all. Africa is not a continent. It is a source. And the Congo is not just part of that source. The Congo IS the source. The trigger of all human culture. The heartbeat that started everything. ISOLELE was born there. Not by accident. By destiny.",
  },
  {
    key: "resurrection",
    icon: Flame,
    title: "You Have Always Been Royal",
    description: "Before anyone told you who you were, the ancestors already knew. Every child born on African soil, every member of the diaspora who crossed oceans and survived, every person who carries African blood in their veins has always carried a crown they were never told about. ISOLELE exists to give it back. Not as a gift. As a reminder. You were never lost. You were never less. You were never without power. You were just waiting for someone to tell you the truth. Welcome home.",
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
              {/* Background image for first pillar (Lion) */}
              {index === 0 && (
                <div 
                  className="absolute inset-0 rounded-2xl opacity-100 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c1e14e48-7ad7-4311-8f7e-73b69263fd5f.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              )}
              
              {/* Background image for second pillar (Kongo) */}
              {index === 1 && (
                <div 
                  className="absolute inset-0 rounded-2xl opacity-100 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a1486131-34f6-4e8f-941d-1f1185ed8af7.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              )}
              
              {/* Background image for third pillar (Royal) */}
              {index === 2 && (
                <div 
                  className="absolute inset-0 rounded-2xl opacity-100 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/577207f9-ac97-4745-a175-9815c6c39313.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              )}
              
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
                  className={`w-16 h-16 rounded-xl flex items-center justify-center relative overflow-hidden ${index === 2 ? '' : ''}`}
                  style={{ 
                    backgroundColor: index === 2 
                      ? 'transparent' 
                      : `${currentTheme.colors.accentPrimary}20`,
                    background: index === 2 
                      ? 'linear-gradient(135deg, #1E9B8A 0%, #0D7377 30%, #F6B800 60%, #FF6B35 80%, #4A4A4A 100%)' 
                      : undefined
                  }}
                  whileHover={{ rotate: index === 2 ? 0 : 360 }}
                  transition={{ duration: 0.8 }}
                  animate={index === 2 ? {
                    boxShadow: [
                      '0 0 20px #1E9B8A, 0 0 40px #F6B800, inset 0 0 15px #FF6B35',
                      '0 0 30px #0D7377, 0 0 50px #FF6B35, inset 0 0 20px #F6B800',
                      '0 0 20px #1E9B8A, 0 0 40px #F6B800, inset 0 0 15px #FF6B35',
                    ]
                  } : {}}
                >
                  {/* Ash particles for fire effect */}
                  {index === 2 && (
                    <>
                      <motion.div
                        className="absolute w-1 h-1 rounded-full bg-gray-400"
                        animate={{
                          y: [-5, -20],
                          x: [0, 5, -3],
                          opacity: [0.8, 0],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                        style={{ top: '30%', left: '20%' }}
                      />
                      <motion.div
                        className="absolute w-1.5 h-1.5 rounded-full bg-gray-500"
                        animate={{
                          y: [-3, -25],
                          x: [0, -4, 2],
                          opacity: [0.7, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.3 }}
                        style={{ top: '40%', right: '25%' }}
                      />
                      <motion.div
                        className="absolute w-0.5 h-0.5 rounded-full bg-gray-300"
                        animate={{
                          y: [-2, -18],
                          x: [0, 3, -2],
                          opacity: [0.6, 0],
                        }}
                        transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.7 }}
                        style={{ top: '35%', left: '50%' }}
                      />
                    </>
                  )}
                  <pillar.icon 
                    className="w-8 h-8 relative z-10"
                    style={{ 
                      color: index === 2 ? '#FFFFFF' : currentTheme.colors.accentPrimary,
                      filter: index === 2 ? 'drop-shadow(0 0 8px #1E9B8A) drop-shadow(0 0 12px #F6B800)' : undefined
                    }}
                  />
                </motion.div>
                {/* Animated sparkles for first pillar (Lion) with golden magical glow */}
                {index === 0 && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    style={{
                      filter: 'drop-shadow(0 0 8px #F6B800) drop-shadow(0 0 16px #F6B800) drop-shadow(0 0 24px #FFD700)',
                    }}
                  >
                    <Sparkles 
                      className="w-6 h-6"
                      style={{ color: '#F6B800' }}
                    />
                  </motion.div>
                )}
                {/* Animated crown for second pillar (Kongo) with golden magical glow */}
                {index === 1 && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    style={{
                      filter: 'drop-shadow(0 0 8px #F6B800) drop-shadow(0 0 16px #F6B800) drop-shadow(0 0 24px #FFD700)',
                    }}
                  >
                    <Crown 
                      className="w-6 h-6"
                      style={{ color: '#F6B800' }}
                    />
                  </motion.div>
                )}
                {/* Animated flame for third pillar (Royal) with golden magical glow */}
                {index === 2 && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    style={{
                      filter: 'drop-shadow(0 0 8px #F6B800) drop-shadow(0 0 16px #F6B800) drop-shadow(0 0 24px #FFD700)',
                    }}
                  >
                    <Flame 
                      className="w-6 h-6"
                      style={{ color: '#F6B800' }}
                    />
                  </motion.div>
                )}
              </div>

              {/* Content */}
              <div 
                className="relative bg-[#F5F0E8]/90 rounded-lg p-4 -mx-2"
              >
                <h3 
                  className="text-xl font-bold tracking-wide mb-4 relative"
                  style={{ 
                    color: '#000000',
                    fontWeight: 700
                  }}
                >
                  {pillar.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed relative"
                  style={{ 
                    color: '#000000',
                    fontWeight: 600
                  }}
                >
                  {pillar.description}
                </p>
              </div>

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
