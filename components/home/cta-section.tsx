"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"

export function CtaSection() {
  const { currentTheme } = useTheme()
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      ref={ref}
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full"
            style={{
              top: `${i * 5}%`,
              background: `linear-gradient(90deg, transparent, ${currentTheme.colors.accentPrimary}10, transparent)`,
              transform: `rotate(${15}deg) translateX(${i % 2 === 0 ? '-10%' : '10%'})`,
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 20,
              delay: i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Glowing orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{ 
            backgroundColor: currentTheme.colors.accentPrimary,
            opacity: 0.1,
            top: "20%",
            left: "10%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-3xl"
          style={{ 
            backgroundColor: currentTheme.colors.accentSecondary,
            opacity: 0.1,
            bottom: "10%",
            right: "15%",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Decorative top element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-2 mb-8 items-center"
        >
          <div className="h-px w-12" style={{ backgroundColor: currentTheme.colors.accentPrimary }} />
          <span style={{ color: currentTheme.colors.accentPrimary }}>◆</span>
          <span style={{ color: currentTheme.colors.accentPrimary }}>•</span>
          <span style={{ color: currentTheme.colors.accentPrimary }}>◆</span>
          <div className="h-px w-12" style={{ backgroundColor: currentTheme.colors.accentPrimary }} />
        </motion.div>

        {/* Heading: JOIN THE LEGEND - With Luxury Fireworks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 relative"
        >
          {/* Fireworks particles */}
          {Array.from({ length: 60 }).map((_, i) => {
            const angle = (i / 60) * Math.PI * 2;
            const velocity = 2 + Math.random() * 3;
            const delay = (i % 20) * 0.15;
            
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full pointer-events-none"
                style={{
                  left: "50%",
                  top: "50%",
                  backgroundColor: i % 2 === 0 ? "#FFD700" : "#00D4FF",
                  boxShadow: i % 2 === 0 
                    ? "0 0 8px #FFD700, 0 0 15px rgba(255, 215, 0, 0.5)"
                    : "0 0 8px #00D4FF, 0 0 15px rgba(0, 212, 255, 0.5)"
                }}
                animate={{
                  x: [0, Math.cos(angle) * velocity * 100],
                  y: [0, Math.sin(angle) * velocity * 100],
                  opacity: [1, 0],
                  scale: [1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: delay,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeOut",
                }}
              />
            );
          })}

          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl whitespace-nowrap relative z-10"
            style={{ 
              fontFamily: 'Impact, Arial Black, sans-serif',
              fontWeight: 900,
              width: '100%',
              position: 'relative',
            }}
            animate={{
              color: [
                "#FFD700",
                "#00D4FF",
                "#FFD700",
                "#00D4FF",
                "#FFD700",
              ],
              textShadow: [
                "0 0 20px #FFD700, 0 0 40px #FFD700, 2px 2px 0px #0088CC",
                "0 0 20px #00D4FF, 0 0 40px #00D4FF, 2px 2px 0px #0066FF",
                "0 0 20px #FFD700, 0 0 40px #FFD700, 2px 2px 0px #0088CC",
                "0 0 20px #00D4FF, 0 0 40px #00D4FF, 2px 2px 0px #0066FF",
                "0 0 20px #FFD700, 0 0 40px #FFD700, 2px 2px 0px #0088CC",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {t("cta_join_legend")}
          </motion.h2>
        </motion.div>

        {/* Heroes image square */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 relative w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden shadow-2xl"
          style={{ border: `5px solid ${currentTheme.colors.accentPrimary}` }}
        >
          <Image
            src="/heroes/legends-crew.jpg"
            alt="The Legends Crew"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
          style={{ color: currentTheme.colors.textSecondary }}
        >
          {t("cta_description")}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Link href="/about">
            <motion.button
              className="relative px-12 py-5 rounded-full text-lg font-bold tracking-wider overflow-hidden whitespace-nowrap"
              style={{
                backgroundColor: currentTheme.colors.accentPrimary,
                color: currentTheme.colors.background,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0"
                style={{
                  boxShadow: `0 0 30px ${currentTheme.colors.accentPrimary}80`,
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <span className="relative z-10">{t('cta_explore')}</span>
            </motion.button>
          </Link>
          
          <motion.button
            className="px-12 py-5 rounded-full text-lg font-bold tracking-wider transition-all border-2 whitespace-nowrap"
            style={{
              borderColor: currentTheme.colors.accentPrimary,
              color: currentTheme.colors.accentPrimary,
              backgroundColor: "transparent",
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: `${currentTheme.colors.accentPrimary}20`
            }}
            whileTap={{ scale: 0.95 }}
          >
            {t('cta_newsletter')}
          </motion.button>
        </motion.div>

        {/* Decorative dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center gap-3 mt-8"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: currentTheme.colors.accentPrimary }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
