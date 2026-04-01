"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"

const showcaseCharacters = [
  {
    name: "ZAIIRE KONGO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0060-fjvA6s0PWIrFYpgRmSxqtJtCg2z0PZ.jpg",
    color: "#F6B800",
  },
  {
    name: "KIMOYA KANDAKE",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0046-7WKAbuvZv3sSAPHzxduIM9oV8vbLfn.jpg",
    color: "#C0392B",
  },
  {
    name: "SIMBIRA LA TIGRESSA",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0055-UpNoGP6IGeScn3KNfyvTWl9GPELVZa.jpg",
    color: "#FF4500",
  },
  {
    name: "KIMPA VITA",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0059-O7aKmrKHSnpfJfkoG3fKLT2bmdspZi.jpg",
    color: "#228B22",
  },
  {
    name: "GANGA ZUMBA",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0042-U3FGzRErAsmW237T4DTDS4mTjDqFPV.jpg",
    color: "#DAA520",
  },
  {
    name: "ZAIRA MBUBE",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0044-rWntBpXYHtd3w6EwtDv3MbkUwWwxol.jpg",
    color: "#D4A017",
  },
  {
    name: "QUEEN JAMEELA CALIFIA",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0056-Dc5BF73BICVQfqVz0aOCEmGuL6Ktyy.jpg",
    color: "#FF8C00",
  },
  {
    name: "MADIBA MANDELA",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0015-KCR64wfCzZ0TDqdIlus8JsB6fPp4mq.jpg",
    color: "#2E8B57",
  },
]

export function CharactersShowcase() {
  const { currentTheme } = useTheme()
  const { currentLanguage } = useLanguage()
  const lang = currentLanguage.code
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const labels: Record<string, { title: string; subtitle: string; btn: string }> = {
    en: { title: "THE CHOSEN ONES", subtitle: "19+ legendary characters born from African mythology, history and cosmic destiny.", btn: "VIEW ALL CHARACTERS" },
    fr: { title: "LES ÉLUS", subtitle: "19+ personnages légendaires nés de la mythologie, de l'histoire et du destin cosmique africain.", btn: "VOIR TOUS LES PERSONNAGES" },
    pt: { title: "OS ESCOLHIDOS", subtitle: "19+ personagens lendários nascidos da mitologia africana, história e destino cósmico.", btn: "VER TODOS OS PERSONAGENS" },
    es: { title: "LOS ELEGIDOS", subtitle: "19+ personajes legendarios nacidos de la mitología africana, historia y destino cósmico.", btn: "VER TODOS LOS PERSONAJES" },
    zu: { title: "ABASAKHETHIWE", subtitle: "19+ abantu abadumile abazalelwe emlandweni wase-Afrika.", btn: "BONA BONKE ABANTU" },
    xh: { title: "ABASAKHETHIWE", subtitle: "19+ abantu abadumileyo abazalelwe embalini wase-Afrika.", btn: "BONA BONKE ABANTU" },
    sw: { title: "WACHAGUZI", subtitle: "Wahusika 19+ wa kishujaa waliozaliwa kutoka kwa hadithi za Afrika.", btn: "TAZAMA WAHUSIKA WOTE" },
    ln: { title: "BAYA LIKONDE", subtitle: "19+ bato ya lokumu ya kongo ya Afrika.", btn: "TALA BATO NYONSO" },
  }
  const l = labels[lang] || labels.en

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}
    >
      {/* Decorative top border */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: `linear-gradient(90deg, transparent, ${currentTheme.colors.accentPrimary}, transparent)`,
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.4em] mb-3"
            style={{ color: currentTheme.colors.accentPrimary }}
          >
            ISOLELE UNIVERSE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-black tracking-wider mb-4 text-balance"
            style={{ color: currentTheme.colors.textPrimary }}
          >
            {l.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base max-w-xl mx-auto text-balance"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            {l.subtitle}
          </motion.p>
        </div>

        {/* Animated Carousel with Looping Path */}
        <div className="relative w-full h-[600px] mb-14 rounded-3xl overflow-hidden bg-gradient-to-br from-black/40 to-black/20 border border-white/10">
          {showcaseCharacters.map((character, index) => {
            // Calculate staggered animation timeline for each character
            // Path: left→right, center→top, top→bottom-right, bottom-right→bottom-left, bottom-left→top-left, top-left→right-bottom
            const totalDuration = 12 + index * 0.5 // Stagger start times
            const delay = index * 1 // Stagger so they don't overlap
            
            return (
              <motion.div
                key={character.name}
                className="absolute group"
                animate={{
                  x: [
                    "-80px",      // Start left
                    "200px",      // Move right
                    "calc(50vw - 60px)", // Center
                    "calc(100vw - 140px)", // Move to right edge
                    "calc(100vw - 140px)", // Stay right bottom
                    "-80px",      // Move to left bottom
                    "-80px",      // Left top
                    "200px",      // Move right again
                  ],
                  y: [
                    "150px",      // Start center
                    "150px",      // Stay center during right movement
                    "-80px",      // Move to top center
                    "400px",      // Move to bottom right
                    "400px",      // Stay bottom right
                    "400px",      // Stay bottom left
                    "-80px",      // Move up left
                    "-80px",      // Move down while going right
                  ],
                  rotate: [0, 5, 0, -5, 0, 5, 0, 0],
                  scale: [0.9, 1, 1.05, 1, 0.95, 1, 1.05, 1],
                }}
                transition={{
                  duration: totalDuration,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.15, 0.3, 0.5, 0.6, 0.75, 0.9, 1],
                }}
                style={{
                  width: "120px",
                  height: "160px",
                  zIndex: 50 - index,
                }}
              >
                <div
                  className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    border: `2px solid ${character.color}60`,
                    boxShadow: `0 0 20px ${character.color}30`,
                  }}
                >
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, transparent 40%, ${character.color}70 80%, rgba(0,0,0,0.95) 100%)`,
                    }}
                  />

                  {/* Animated glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-40"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      boxShadow: `inset 0 0 30px ${character.color}40, 0 0 20px ${character.color}20`,
                    }}
                  />

                  {/* Name tag */}
                  <div className="absolute bottom-1 left-1 right-1 p-2">
                    <p
                      className="text-[9px] font-black tracking-wide leading-tight text-balance line-clamp-2"
                      style={{ color: "#fff", textShadow: "0 1px 3px rgba(0,0,0,0.9)" }}
                    >
                      {character.name.split(" ")[0]}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link href="/characters">
              <motion.button
                className="relative inline-flex items-center gap-3 px-12 py-5 rounded-2xl text-sm font-black tracking-[0.2em] overflow-hidden"
                style={{
                  backgroundColor: currentTheme.colors.accentPrimary,
                  color: "#000",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                    width: "50%",
                  }}
                />
                <span>{l.btn}</span>
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
