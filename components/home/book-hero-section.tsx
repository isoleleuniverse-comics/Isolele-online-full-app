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
  descKey: string
  buttonKey: string
  image: string
  href: string
  accentColor: string
}

const slides: Slide[] = [
  {
    id: "zaiire",
    type: "book",
    tagKey: "book_welcome_tag",
    titleKey: "book_welcome_title",
    subtitleKey: "book_welcome_subtitle",
    descKey: "book_welcome_desc",
    buttonKey: "book_welcome_button",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Book%202%20Isolele-QCEiRH2KJp3oFt4O31Qocqap3nLgiJ.jpg",
    href: "/characters",
    accentColor: "#F6B800",
  },
  {
    id: "makanda",
    type: "book",
    tagKey: "book_makanda_tag",
    titleKey: "book_makanda_title",
    subtitleKey: "book_makanda_subtitle",
    descKey: "book_makanda_desc",
    buttonKey: "book_makanda_button",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
    href: "/books/makanda",
    accentColor: "#C0392B",
  },
  {
    id: "bambula",
    type: "book",
    tagKey: "book_bambula_tag",
    titleKey: "book_bambula_title",
    subtitleKey: "book_bambula_subtitle",
    descKey: "book_bambula_desc",
    buttonKey: "book_bambula_button",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
    href: "/books/bambula",
    accentColor: "#B3541E",
  },
  {
    id: "mokele",
    type: "book",
    tagKey: "book_mokele_tag",
    titleKey: "book_mokele_title",
    subtitleKey: "book_mokele_subtitle",
    descKey: "book_mokele_desc",
    buttonKey: "book_mokele_button",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg",
    href: "/books/mokele",
    accentColor: "#4169E1",
  },
  {
    id: "zaiire-universe",
    type: "book",
    tagKey: "book_zaiire_tag",
    titleKey: "book_zaiire_title",
    subtitleKey: "book_zaiire_subtitle",
    descKey: "book_zaiire_desc",
    buttonKey: "book_zaiire_button",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0059-75yxyGjuDt9hhqXF6obymfG8BpNLz4.jpg",
    href: "/books/zaiire",
    accentColor: "#F6B800",
  },
  {
    id: "kufu",
    type: "game",
    tagKey: "book_kufu_tag",
    titleKey: "book_kufu_title",
    subtitleKey: "book_kufu_subtitle",
    descKey: "book_kufu_desc",
    buttonKey: "book_kufu_button",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260321_113436-ktAJOL2e0SS0pkTY6aPnn7aBKxr3pq.jpg",
    href: "/kufu-game",
    accentColor: "#F6B800",
  },
  {
    id: "amara",
    type: "book",
    tagKey: "book_amara_tag",
    titleKey: "book_amara_title",
    subtitleKey: "book_amara_subtitle",
    descKey: "book_amara_desc",
    buttonKey: "book_amara_button",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1173-wrVJYiZhuW6ZvCM0Xronsu544ccrqV.jpeg",
    href: "/books/amara",
    accentColor: "#1E90B3",
  },
  {
    id: "zattar",
    type: "book",
    tagKey: "book_zattar_tag",
    titleKey: "book_zattar_title",
    subtitleKey: "book_zattar_subtitle",
    descKey: "book_zattar_desc",
    buttonKey: "book_zattar_button",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e9c64c65-3717-4fe3-a391-885767df3303-LbjnMwCViF43pwErKmoFv7iGxQdCeQ.jpeg",
    href: "/books/zattar",
    accentColor: "#2E8B57",
  },
  {
    id: "zaiko",
    type: "book",
    tagKey: "book_zaiko_tag",
    titleKey: "book_zaiko_title",
    subtitleKey: "book_zaiko_subtitle",
    descKey: "book_zaiko_desc",
    buttonKey: "book_zaiko_button",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1175-njlosetUOsqZszKylrOXsIRLw0l3s7.jpeg",
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
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const { t } = useLanguage()

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
    const timer = setInterval(() => paginate(1), 7000)
    return () => clearInterval(timer)
  }, [paginate])

  // Create translated slides based on current language
  const translatedSlides = slides.map((slide) => {
    return {
      ...slide,
      tag: t(slide.tagKey),
      title: t(slide.titleKey),
      subtitle: t(slide.subtitleKey),
      description: t(slide.descKey),
      buttonText: t(slide.buttonKey),
    }
  })

  const slide = translatedSlides[current]

  if (!slide) return null

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

      {/* NAVIGATION */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-6">
        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1)
                setCurrent(index)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current ? "bg-white w-8" : "bg-white/40 w-2"
              }`}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
