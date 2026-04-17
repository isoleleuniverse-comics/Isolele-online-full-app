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

        {/* Animated Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
          {showcaseCharacters.map((character, index) => (
            <motion.div
              key={character.name}
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.07, type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ scale: 1.04, zIndex: 10 }}
              className="relative group rounded-2xl overflow-hidden cursor-pointer"
              style={{
                aspectRatio: index < 4 ? "3/4" : "1/1",
                border: `1px solid ${character.color}20`,
              }}
            >
              <Image
                src={character.image}
                alt={character.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAICAgIChsICQkJChAODwoQFwwTGB8WFBcUFRYaFxwpHhcYGRgaGBgSHBwcHhcYGhj/2wBDAQcHBwoIChMICQsMCggKGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wAARCABkAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWm5ybnJ2eoqOkpaanqKmqsrO0tba2uLm6wsPExcbHyMnK0tPU1dbW2Nna4uPk5ebn6Onq8vP09fb2+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba2uLm6wsPExcbHyMnK0tPU1dbW2Nna4uPk5ebn6Onq8vP09fb2+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z"
                loading="lazy"
              />

              {/* Always-visible gradient at bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 50%, ${character.color}80 85%, rgba(0,0,0,0.9) 100%)`,
                }}
              />

              {/* Animated glow on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ boxShadow: `inset 0 0 40px ${character.color}40, 0 0 30px ${character.color}20` }}
              />

              {/* Pulse ring animation */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ border: `2px solid ${character.color}60` }}
              />

              {/* Name tag */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p
                  className="text-xs font-black tracking-widest leading-tight text-balance"
                  style={{ color: "#fff", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
                >
                  {character.name}
                </p>
              </div>
            </motion.div>
          ))}
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
