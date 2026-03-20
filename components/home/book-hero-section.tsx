"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface Book {
  id: string
  title: string
  description: string
  image: string
  tag: string
  buttonText: string
  href: string
}

const books: Book[] = [
  {
    id: "zaiire",
    title: "THE GOLDEN AGE OF BLACK AFRICAN COMICS",
    description: "Follow Zaiire, a young boy from Kinshasa, and discover legendary superheroes born from ancestral African wisdom and mystical powers.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zaiire%20The%20Prince%20of%20Kongo%20-%20Necklace%20of%20Destiny.png-SBP7EKt5MlGVIe83Q3sI9wCYYYZfHG.jpeg",
    tag: "ZAIÏRE: THE PRINCE OF KONGO",
    buttonText: "Learn more",
    href: "/books/zaiire",
  },
  {
    id: "kimoya",
    title: "THE KANDAKE REBORN",
    description: "Queen Kimoya Amanirenas returns as the Shadow Huntress, protector of ancient kingdoms and wielder of temporal magic.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeux%20-des-cartes-ISOLELE%202026%20copie-1.png-RqaWGnjgEshe1jwMnMTWRFJoVkAA53.jpeg",
    tag: "KIMOYA: KANDAKE OF FIRE AND STONE",
    buttonText: "Discover",
    href: "/books/kimoya",
  },
  {
    id: "kufu",
    title: "KUFU – THE CROWN GAME",
    description: "Enter the realm of African royalty through an immersive card game experience. HÉRITAGE • ROYALTY • NKUFU YA BAKULU.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeux%20-des-cartes-ISOLELE%202026%20copie-1.png-RqaWGnjgEshe1jwMnMTWRFJoVkAA53.jpeg",
    tag: "ZAIIRE BOOK III",
    buttonText: "Get started Game",
    href: "/kufu-game",
  },
  {
    id: "zattar",
    title: "THE BLOOD ARCHITECT",
    description: "A cursed genius of forbidden technology rises from the shadows to reshape the destiny of kingdoms.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zaiire%20The%20Prince%20of%20Kongo%20-%20Necklace%20of%20Destiny.png-SBP7EKt5MlGVIe83Q3sI9wCYYYZfHG.jpeg",
    tag: "ZATTAR: THE BLOOD ARCHITECT",
    buttonText: "Explore",
    href: "/books/zattar",
  },
]

export function BookHeroSection() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.section
      className="relative w-full"
      style={{
        "--theme-accent": "#FFD000",
      } as React.CSSProperties}
    >
      {/* Global styles for theme */}
      <style>{`
        :root {
          --theme-accent: #FFD000;
        }
        body {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* HEADER */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 h-[70px] flex items-center"
        style={{
          backgroundColor: "#000000",
          paddingLeft: "20px",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(246, 184, 0, 0.1)",
        }}
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-0">
          <h2
            className="text-[28px] font-bold tracking-[2px]"
            style={{ color: "#F6B800", fontFamily: "Montserrat, sans-serif" }}
          >
            ISOLELE
          </h2>
          <p
            className="text-[10px] tracking-[3px] uppercase ml-3"
            style={{ color: "#d0d0d0" }}
          >
            THE CHOSEN ONES
          </p>
        </div>
      </motion.header>

      {/* BOOK HERO CONTAINER */}
      <div
        className="pt-[70px] flex flex-col gap-[60px] px-6 md:px-[24px] py-[40px]"
        style={{ backgroundColor: "#000000" }}
      >
        {books.map((book, index) => (
          <BookCard key={book.id} book={book} index={index} />
        ))}
      </div>
    </motion.section>
  )
}

interface BookCardProps {
  book: Book
  index: number
}

function BookCard({ book, index }: BookCardProps) {
  return (
    <motion.div
      className="relative w-full h-screen flex items-center overflow-hidden rounded-2xl"
      style={{
        backgroundImage: `url(${book.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
    >
      {/* DARK OVERLAY */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6))",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* CONTENT - positioned on left/center */}
      <motion.div
        className="relative z-10 max-w-2xl px-8 md:px-16 py-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* BOOK TAG */}
        <motion.div
          className="inline-block mb-6"
          style={{
            backgroundColor: "var(--theme-accent)",
            color: "#000",
            fontSize: "13px",
            fontWeight: "700",
            padding: "8px 14px",
            borderRadius: "3px",
            letterSpacing: "1px",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {book.tag}
        </motion.div>

        {/* MAIN TITLE */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "800",
            lineHeight: "1.1",
            color: "#FFFFFF",
            textShadow: "0 3px 10px rgba(0,0,0,0.7)",
            textTransform: "uppercase",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {book.title}
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          className="text-base md:text-lg max-w-xl mb-8 leading-relaxed"
          style={{
            color: "#E6E6E6",
            lineHeight: "1.6",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {book.description}
        </motion.p>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href={book.href}>
            <button
              className="px-8 md:px-10 py-4 md:py-5 rounded-lg border-none font-semibold text-base md:text-lg transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: "var(--theme-accent)",
                color: "#000",
                fontSize: "16px",
                fontWeight: "600",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ffdb33"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--theme-accent)"
              }}
            >
              {book.buttonText}
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Optional: Floating elements for visual interest */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 opacity-10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plug%20hover%20load%20image%20isolele-9yXBgFpQgCY8EQC9Pp0QnSUkE3zNps.jpg"
          alt="background accent"
          fill
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  )
}
