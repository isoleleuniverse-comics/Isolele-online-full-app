"use client"
// ISOLELE Hero Section - THE CHOSEN ONES - March 2026
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
    tag: "WELCOME TO ISOLELE",
    title: "THE CHOSEN ONES",
    subtitle: "An entire universe born from the roots of Kongo...",
    description:
      "Isolele is a visionary universe born to restore the soul of African storytelling, a mythological empire where superheroes are chosen by destiny, kingdoms never forgotten, and ancestral power is alive in every page, every prophecy, every battle. Every child who reads Isolele will discover superheroes who look like them, speak their language, protect their land, and honor their ancestors. This is for the next generation of kings, queens, warriors, inventors, and storytellers.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Book%202%20Isolele-QCEiRH2KJp3oFt4O31Qocqap3nLgiJ.jpg",
    buttonText: "EXPLORE THE UNIVERSE",
    href: "/characters",
    accentColor: "#F6B800",
  },
  {
    id: "kimoya",
    type: "book",
    tag: "KIMOYA: THE RISING KANDAKE",
    title: "THE RISING KANDAKE",
    subtitle: "Kimoya — Book I",
    description:
      "A warrior emperor of unmatched power strides forward from the royal halls of an ancient empire. KIMOYA — The Rising Kandake — unites the fractured kingdoms of Africa against a darkness that seeks to erase their memory from history.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
    buttonText: "Discover Kimoya",
    href: "/books/kimoya",
    accentColor: "#C0392B",
  },
  {
    id: "bambula",
    type: "book",
    tag: "BAMBULA: CHILD OF RHYTHM",
    title: "BAMBULA",
    subtitle: "CHAPTER I · THE SACRED DRUM",
    description:
      "Before words, there was rhythm. Bambula was the child who heard everything. When the drums were taken and the land went silent, he kept the rhythm alive inside him. Armed with the sacred drum, he walks between the spirit world and the living. He does not fight to destroy. He protects to remember.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
    buttonText: "DISCOVER BAMBULA",
    href: "/books/bambula",
    accentColor: "#B3541E",
  },
  {
    id: "mokele",
    type: "book",
    tag: "MOKELE: BORN INTO STRUGGLE",
    title: "MOKELE",
    subtitle: "From Child to Lord of Kinshasa",
    description:
      "Mokele is not born a king. He is born into struggle. The streets of Kinshasa teach him before school ever could, where loyalty is fragile, violence is normal, and survival is everything. From child to hustler to lord. He builds power, money, and respect. In Kinshasa, you either get eaten... or you become the predator.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg",
    buttonText: "DISCOVER MOKELE",
    href: "/books/mokele",
    accentColor: "#4169E1",
  },
  {
    id: "zaiire-universe",
    type: "book",
    tag: "ZAIIRE: THE PRINCE OF KONGO",
    title: "THE PRINCE OF KONGO",
    subtitle: "The Necklace of Destiny",
    description:
      "Forged in the heart of the Kongo Kingdom, the Necklace of Destiny was never made to be worn. It was made to choose. Passed through centuries of fire, war, and silence, it carries the soul of every king who bled for their people and every queen who held the world together with bare hands. When it finds Zaiire, it does not shine. It awakens.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0059-75yxyGjuDt9hhqXF6obymfG8BpNLz4.jpg",
    buttonText: "DISCOVER ZAIIRE",
    href: "/books/zaiire",
    accentColor: "#F6B800",
  },
  {
    id: "kufu",
    type: "game",
    tag: "KUFU: THE CROWN GAME",
    title: "KUFU",
    subtitle: "THE OFFICIAL GAME OF THE ISOLELE UNIVERSE",
    description:
      "This is not just a card game. It is a ceremony. Gather your warriors. Build your kingdom. Outplay every opponent at the table. But to claim the crown there is only one way to win. You must raise your voice and speak the name of the king out loud. Then someone places the necklace over your head. Not by your own hand. By another. Because a true king is not crowned alone. KUFU is where African royalty becomes something you feel in your hands, hear in your voice, and carry around your neck. Every game is a coronation. Every winner is a king.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260321_113436-ktAJOL2e0SS0pkTY6aPnn7aBKxr3pq.jpg",
    buttonText: "EXPLORE THE GAME",
    href: "/kufu-game",
    accentColor: "#F6B800",
  },
  {
    id: "amara",
    type: "book",
    tag: "AMARA: QUEEN OF THE SEAS",
    title: "AMARA",
    subtitle: "CHAPTER I · QUEEN OF THE PIRATES OF AMAZON",
    description:
      "Every pirate fears the ocean. Amara owns it. She is the Queen of the Seas. The most feared captain on every water in the world. No ship has outrun her. No king has outsmarted her. No army has stopped her fleet. But Amara does not sail alone. Beside her stand four women bound by blood, loyalty and destiny. Five queens of the sea who together carry a power that will shake every throne on the continent. From their union the Agojie dynasty is born. And from that dynasty rise the five women kings who will change the course of African history forever. This is not just a pirate story. This is where the greatest female dynasty in the ISOLELE universe begins.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1173-wrVJYiZhuW6ZvCM0Xronsu544ccrqV.jpeg",
    buttonText: "DISCOVER AMARA",
    href: "/books/amara",
    accentColor: "#1E90B3",
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
