"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  id: string
  type: "book" | "game"
  tag: string
  title: string
  subtitle: string
  description: string
  image: string
  buttonText: string
  href: string
  accentColor: string
}

const slides: Slide[] = [
  {
    id: "zaiire",
    type: "book",
    tag: "ZAIÏRE: THE PRINCE OF KONGO",
    title: "THE PRINCE OF KONGO",
    subtitle: "Zaiïre — Book I",
    description:
      "In the heart of the ancient Kongo Kingdom, a young prince named Zaiïre discovers he carries the blood of the ancestors — and the power to reshape the destiny of an entire people. A cinematic epic blending African mythology, royal intrigue, and superhuman gifts.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0045-2K7U0yRJN26nTH5BRGiR6lTJAMNfqK.jpg",
    buttonText: "Discover Zaiïre",
    href: "/books/zaiire",
    accentColor: "#F6B800",
  },
  {
    id: "kimoya",
    type: "book",
    tag: "KIMOYA: KANDAKE OF THE SOUTH",
    title: "KANDAKE OF THE SOUTH",
    subtitle: "Kimoya — Book I",
    description:
      "Kimoya Kandake sits upon the golden throne of an ancient southern empire. A warrior queen whose wisdom is matched only by her ferocity — she must unite fractured kingdoms against a rising darkness threatening to erase Africa from memory.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0046-lZMOgoh1a5DhlEtWih4TxM2AVDVl3u.jpg",
    buttonText: "Discover Kimoya",
    href: "/books/kimoya",
    accentColor: "#D4AF37",
  },
  {
    id: "njoko",
    type: "book",
    tag: "NJOKO: SPIRIT OF THE FOREST",
    title: "SPIRIT OF THE FOREST",
    subtitle: "Njoko — Book I",
    description:
      "Deep in the primeval rainforests of Central Africa, Njoko — half-human, half-spirit — walks between two worlds. Guardian of forgotten sacred lands, she must face those who seek to exploit the earth's most ancient power.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0044-rm6HLzPaenXZgdpaDPyfmN97Aabcgu.jpg",
    buttonText: "Discover Njoko",
    href: "/books/njoko",
    accentColor: "#4CAF50",
  },
  {
    id: "zattar",
    type: "book",
    tag: "ZATTAR: THE DESERT FLAME",
    title: "THE DESERT FLAME",
    subtitle: "Zattar — Book I",
    description:
      "From the scorching sands of the Sahara emerges Zattar — a warrior forged in fire and silence. His journey across the continent will ignite a revolution that echoes from the ancient pyramids to the modern streets of Kinshasa.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0055-7oKwB0RaBefWj90AIaARep0VGAQxg6.jpg",
    buttonText: "Discover Zattar",
    href: "/books/zattar",
    accentColor: "#FF6B35",
  },
  {
    id: "imvula",
    type: "book",
    tag: "IMVULA: THE RAIN BRINGER",
    title: "THE RAIN BRINGER",
    subtitle: "Imvula — Book I",
    description:
      "When drought threatens to swallow the continent whole, Imvula — the last descendant of the rain gods — must undertake a sacred journey to restore the waters of life. A story of sacrifice, ancestral duty, and the power of nature reborn.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0059-7jQOcRicDvdQkPYsWwzJ5OvOU3FXX4.jpg",
    buttonText: "Discover Imvula",
    href: "/books/imvula",
    accentColor: "#00BCD4",
  },
  {
    id: "kufu",
    type: "game",
    tag: "HÉRITAGE · ROYALTY · NKUFU YA BAKULU",
    title: "KUFU — THE CROWN GAME",
    subtitle: "Zaiire Book III",
    description:
      "KUFU Ludo is the official board game of the ISOLELE universe — an immersive ludo-style strategy game rooted in African royal traditions. Navigate your warriors across a ceremonial board inspired by Kongo cosmology and claim the Crown of the Ancestors.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeux%20-des-cartes-ISOLELE%202026%20copie-1.png-ifvBiGyVajqX0jXvhJQOH1k83wp5KC.jpeg",
    buttonText: "Explore the Game",
    href: "/kufu-game",
    accentColor: "#F6B800",
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
}

export function BookHeroSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection)
      setCurrent((prev) => {
        const next = prev + newDirection
        if (next < 0) return slides.length - 1
        if (next >= slides.length) return 0
        return next
      })
    },
    []
  )

  // Auto-advance every 7 seconds
  useEffect(() => {
    if (!mounted) return
    const timer = setInterval(() => paginate(1), 7000)
    return () => clearInterval(timer)
  }, [mounted, paginate])

  if (!mounted) return null

  const slide = slides[current]

  return (
    <section className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: "#000" }}>
      {/* SLIDES */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={slide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          {/* BG IMAGE */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-top"
              priority={current === 0}
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.2) 100%)",
              }}
            />
          </div>

          {/* SLIDE CONTENT */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-[70px]">
            <div className="max-w-2xl">
              {/* TAG badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-block mb-5"
                style={{
                  backgroundColor: slide.accentColor,
                  color: "#000",
                  fontSize: "11px",
                  fontWeight: "700",
                  padding: "7px 14px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}
              >
                {slide.tag}
              </motion.div>

              {/* SUBTITLE */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-sm font-semibold tracking-widest uppercase mb-3"
                style={{ color: slide.accentColor, opacity: 0.85 }}
              >
                {slide.subtitle}
              </motion.p>

              {/* TITLE */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-balance"
                style={{
                  color: "#FFFFFF",
                  lineHeight: "1.05",
                  textShadow: "0 4px 20px rgba(0,0,0,0.6)",
                  textTransform: "uppercase",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {slide.title}
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
                style={{ color: "#E0E0E0" }}
              >
                {slide.description}
              </motion.p>

              {/* BUTTON */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                <Link href={slide.href}>
                  <button
                    className="px-8 py-4 font-bold text-base tracking-wider uppercase rounded-md transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      backgroundColor: slide.accentColor,
                      color: "#000",
                    }}
                  >
                    {slide.buttonText}
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* FIXED HEADER with ISOLELE Logo */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 h-[70px] flex items-center px-6 md:px-10"
        style={{
          backgroundColor: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(246, 184, 0, 0.12)",
        }}
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ei_1774029892268-removebg-preview-OGLwAWrJqgxIOFX6ES21zzBCcRpiHa.png"
            alt="ISOLELE — The Chosen Ones"
            width={180}
            height={50}
            className="object-contain"
            priority
          />
        </Link>
      </motion.header>

      {/* NAV ARROWS */}
      <button
        onClick={() => paginate(-1)}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full transition-all hover:scale-110"
        style={{
          background: "rgba(246,184,0,0.15)",
          border: "1.5px solid rgba(246,184,0,0.5)",
          color: "#F6B800",
        }}
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => paginate(1)}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full transition-all hover:scale-110"
        style={{
          background: "rgba(246,184,0,0.15)",
          border: "1.5px solid rgba(246,184,0,0.5)",
          color: "#F6B800",
        }}
      >
        <ChevronRight size={22} />
      </button>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              setDirection(i > current ? 1 : -1)
              setCurrent(i)
            }}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              backgroundColor: i === current ? "#F6B800" : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div
        className="absolute bottom-8 right-8 md:right-16 z-20 text-xs font-bold tracking-widest"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  )
}
