"use client"
// ISOLELE Hero Section - THE CHOSEN ONES - March 2026
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface Slide {
  id: string
  type: "book" | "game"
  tagKey: string
  titleKey: string
  subtitleKey: string
  descriptionKey: string
  image: string
  buttonTextKey: string
  href: string
  accentColor: string
}

const slides: Slide[] = [
  {
    id: "zaiire",
    type: "book",
    tagKey: "hero_welcome",
    titleKey: "hero_chosen_ones_title",
    subtitleKey: "hero_chosen_ones_subtitle",
    descriptionKey: "hero_chosen_ones_desc",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Book%202%20Isolele-QCEiRH2KJp3oFt4O31Qocqap3nLgiJ.jpg",
    buttonTextKey: "btn_explore_universe",
    href: "/characters",
    accentColor: "#F6B800",
  },
  {
    id: "makanda",
    type: "book",
    tagKey: "hero_makanda_tag",
    titleKey: "hero_makanda_title",
    subtitleKey: "hero_makanda_subtitle",
    descriptionKey: "hero_makanda_desc",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
    buttonTextKey: "btn_discover_makanda",
    href: "/books/makanda",
    accentColor: "#C0392B",
  },
  {
    id: "bambula",
    type: "book",
    tagKey: "hero_bambula_tag",
    titleKey: "hero_bambula_title",
    subtitleKey: "hero_bambula_subtitle",
    descriptionKey: "hero_bambula_desc",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
    buttonTextKey: "btn_discover_bambula",
    href: "/books/bambula",
    accentColor: "#B3541E",
  },
  {
    id: "mokele",
    type: "book",
    tagKey: "hero_mokele_tag",
    titleKey: "hero_mokele_title",
    subtitleKey: "hero_mokele_subtitle",
    descriptionKey: "hero_mokele_desc",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg",
    buttonTextKey: "btn_discover_mokele",
    href: "/books/mokele",
    accentColor: "#4169E1",
  },
  {
    id: "zaiire-universe",
    type: "book",
    tagKey: "hero_zaiire_tag",
    titleKey: "hero_zaiire_title",
    subtitleKey: "hero_zaiire_subtitle",
    descriptionKey: "hero_zaiire_desc",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0059-75yxyGjuDt9hhqXF6obymfG8BpNLz4.jpg",
    buttonTextKey: "btn_discover_zaiire",
    href: "/books/zaiire",
    accentColor: "#F6B800",
  },
  {
    id: "kufu",
    type: "game",
    tagKey: "hero_kufu_tag",
    titleKey: "hero_kufu_title",
    subtitleKey: "hero_kufu_subtitle",
    descriptionKey: "hero_kufu_desc",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260321_113436-ktAJOL2e0SS0pkTY6aPnn7aBKxr3pq.jpg",
    buttonTextKey: "btn_explore_game",
    href: "/kufu-game",
    accentColor: "#F6B800",
  },
  {
    id: "amara",
    type: "book",
    tagKey: "hero_amara_tag",
    titleKey: "hero_amara_title",
    subtitleKey: "hero_amara_subtitle",
    descriptionKey: "hero_amara_desc",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1173-wrVJYiZhuW6ZvCM0Xronsu544ccrqV.jpeg",
    buttonTextKey: "btn_discover_amara",
    href: "/books/amara",
    accentColor: "#1E90B3",
  },
  {
    id: "zattar",
    type: "book",
    tagKey: "hero_zattar_tag",
    titleKey: "hero_zattar_title",
    subtitleKey: "hero_zattar_subtitle",
    descriptionKey: "hero_zattar_desc",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e9c64c65-3717-4fe3-a391-885767df3303-LbjnMwCViF43pwErKmoFv7iGxQdCeQ.jpeg",
    buttonTextKey: "btn_discover_zattar",
    href: "/books/zattar",
    accentColor: "#2E8B57",
  },
  {
    id: "zaiko",
    type: "book",
    tagKey: "hero_zaiko_tag",
    titleKey: "hero_zaiko_title",
    subtitleKey: "hero_zaiko_subtitle",
    descriptionKey: "hero_zaiko_desc",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1175-njlosetUOsqZszKylrOXsIRLw0l3s7.jpeg",
    buttonTextKey: "btn_discover_zaiko",
    href: "/books/zaiko",
    accentColor: "#8B7355",
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
  const { t } = useLanguage()
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
                {t(slide.tagKey as any)}
              </motion.div>

              {/* SUBTITLE */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-sm font-semibold tracking-widest uppercase mb-3"
                style={{ color: slide.accentColor, opacity: 0.85 }}
              >
                {t(slide.subtitleKey as any)}
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
                {t(slide.titleKey as any)}
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
                style={{ color: "#E0E0E0" }}
              >
                {t(slide.descriptionKey as any)}
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
                    {t(slide.buttonTextKey as any)}
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
