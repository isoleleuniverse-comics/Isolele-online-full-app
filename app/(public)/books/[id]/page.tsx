"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"
import { ArrowLeft, ShoppingCart, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

interface BookData {
  titleEn: string
  subtitleEn: string
  descriptionEn: string
  summaryEn: string
  color: string
  coverImage: string
  year: number
  pages: number
  rating: number
  chapters: number
  mainCharactersEn: string[]
  themesEn: string[]
  price: string
  availability: string
  // Translated versions
  title?: string
  subtitle?: string
  description?: string
  summary?: string
  mainCharacters?: string[]
  themes?: string[]
}

const booksData: Record<string, BookData> = {
  zaiire: {
    titleEn: "The Prince of Kongo",
    subtitleEn: "Book 1: The Chosen Ones Awakening",
    color: "#F6B800",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Book%202%20Isolele-QCEiRH2KJp3oFt4O31Qocqap3nLgiJ.jpg",
    year: 2026,
    pages: 340,
    rating: 4.8,
    descriptionEn:
      "In the heart of the ancient Kongo Kingdom, a young prince awakens to his true destiny. Zaiïre discovers the legendary Collier du Destin and learns that he is not alone in his power. With destiny calling and ancestral spirits guiding him, he must unite the chosen ones to save both worlds.",
    summaryEn:
      "The first book in the ISOLELE series follows Zaiïre as he discovers his royal birthright and becomes the bridge between the mortal and spiritual realms. As danger threatens both worlds, he must find the other chosen ones and fulfill an ancient prophecy.",
    chapters: 18,
    mainCharactersEn: ["Zaiïre", "Bambula", "King Kufulula", "The Spirit Council"],
    themesEn: ["Destiny", "Heritage", "Power", "Unity", "Awakening"],
    price: "$14.99",
    availability: "In Stock",
  },
  kandake: {
    titleEn: "The Kandake's Court",
    subtitleEn: "Book 2: Empire of Ancient Queens",
    color: "#C0392B",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
    year: 2026,
    pages: 380,
    rating: 4.9,
    descriptionEn:
      "Kimoya, the rising Kandake of ancient Nubia, commands the most powerful court in Africa. When the chosen ones arrive seeking her counsel, ancient rivalries resurface and the balance of power shifts. She must decide whether to join the fight or protect her realm.",
    summaryEn:
      "The second installment expands the ISOLELE universe with the story of Kimoya and the ancient kingdoms of Nubia and Egypt. Political intrigue, ancient magic, and epic battles shape the fate of a continent.",
    chapters: 20,
    mainCharactersEn: ["Kimoya", "Zaiïre", "Ancient Councils", "The Kandake Guard"],
    themesEn: ["Leadership", "Tradition", "Power Dynamics", "Ancient Wisdom"],
    price: "$14.99",
    availability: "In Stock",
  },
  streets: {
    titleEn: "Crowned by the Streets",
    subtitleEn: "Book 3: Urban Legends Rise",
    color: "#4169E1",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mokele-lZToplq4eNUuy08B5V6faXETr5YnKg.jpg",
    year: 2026,
    pages: 360,
    rating: 4.7,
    descriptionEn:
      "Mokele grows up in the concrete jungles where tradition meets modernity. When he discovers his royal bloodline, his life changes forever. He becomes a bridge between the old world and the new, proving that ancestral power lives anywhere.",
    summaryEn:
      "The third book brings the ISOLELE story to the modern urban landscape. Mokele's journey shows that the chosen ones are everywhere, and heritage transcends geography and class.",
    chapters: 19,
    mainCharactersEn: ["Mokele", "Urban Warriors", "Street Community", "Ancestral Guardians"],
    themesEn: ["Identity", "Modernity vs Tradition", "Community", "Hidden Power"],
    price: "$14.99",
    availability: "Coming Soon",
  },
}

export default function BookPage({ params }: { params: { id: string } }) {
  const bookBase = booksData[params.id as keyof typeof booksData]
  const { currentTheme } = useTheme()
  const { currentLanguage, translateText } = useLanguage()
  const [book, setBook] = useState<BookData | null>(null)

  useEffect(() => {
    async function translateBook() {
      if (!bookBase) return
      
      const translated = { ...bookBase }
      
      // Only translate if not English
      if (currentLanguage.code !== "en") {
        console.log("[v0] Translating book to", currentLanguage.code)
        try {
          translated.title = await translateText(bookBase.titleEn, currentLanguage.code)
          translated.subtitle = await translateText(bookBase.subtitleEn, currentLanguage.code)
          translated.description = await translateText(bookBase.descriptionEn, currentLanguage.code)
          translated.summary = await translateText(bookBase.summaryEn, currentLanguage.code)
          translated.mainCharacters = await Promise.all(
            bookBase.mainCharactersEn.map(char => translateText(char, currentLanguage.code))
          )
          translated.themes = await Promise.all(
            bookBase.themesEn.map(theme => translateText(theme, currentLanguage.code))
          )
        } catch (error) {
          console.error("[v0] Translation failed:", error)
          // Fallback to English
          translated.title = bookBase.titleEn
          translated.subtitle = bookBase.subtitleEn
          translated.description = bookBase.descriptionEn
          translated.summary = bookBase.summaryEn
          translated.mainCharacters = bookBase.mainCharactersEn
          translated.themes = bookBase.themesEn
        }
      } else {
        // Use English versions
        translated.title = bookBase.titleEn
        translated.subtitle = bookBase.subtitleEn
        translated.description = bookBase.descriptionEn
        translated.summary = bookBase.summaryEn
        translated.mainCharacters = bookBase.mainCharactersEn
        translated.themes = bookBase.themesEn
      }
      
      setBook(translated)
    }
    
    translateBook()
  }, [currentLanguage.code, bookBase, translateText])

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: currentTheme.colors.background }}>
        <div className="text-center">
          <p style={{ color: currentTheme.colors.textSecondary }}>Loading...</p>
        </div>
      </div>
    )
  }

  if (!bookBase) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: currentTheme.colors.background }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: currentTheme.colors.textPrimary }}>
            Book Not Found
          </h1>
          <Link href="/books">
            <button className="px-6 py-3 rounded-lg" style={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}>
              Back to Books
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: currentTheme.colors.background, minHeight: "100vh" }}>
      {/* Header */}
      <div className="sticky top-0 z-40 px-4 sm:px-6 lg:px-8 py-4" style={{ backgroundColor: `${currentTheme.colors.background}95`, backdropFilter: "blur(10px)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/books">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
              style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary }}
              whileHover={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}
            >
              <ArrowLeft size={20} />
              Back
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Book cover */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="relative w-full h-96 rounded-2xl overflow-hidden sticky top-24"
              style={{
                backgroundColor: currentTheme.colors.backgroundSecondary,
                border: `2px solid ${book.color}40`,
                boxShadow: `0 0 40px ${book.color}20`,
              }}
            >
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-6 space-y-3">
              <motion.button
                className="w-full py-3 rounded-lg font-bold tracking-wider flex items-center justify-center gap-2"
                style={{ backgroundColor: book.color, color: currentTheme.colors.background }}
                whileHover={{ scale: 1.05 }}
              >
                <ShoppingCart size={20} />
                Buy Now
              </motion.button>
              <motion.button
                className="w-full py-3 rounded-lg font-bold tracking-wider flex items-center justify-center gap-2"
                style={{ backgroundColor: `${book.color}20`, color: book.color, border: `1px solid ${book.color}40` }}
                whileHover={{ scale: 1.05 }}
              >
                <BookOpen size={20} />
                Read Sample
              </motion.button>
            </div>
          </motion.div>

          {/* Book info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <motion.span
                className="inline-block px-4 py-2 rounded-full text-sm font-bold tracking-wider mb-4"
                style={{ backgroundColor: `${book.color}20`, color: book.color }}
              >
                {book.year}
              </motion.span>
              <h1 className="text-5xl font-black tracking-wider mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                {book.title}
              </h1>
              <p className="text-2xl mb-6" style={{ color: book.color }}>
                {book.subtitle}
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: currentTheme.colors.textSecondary }}>
                {book.description}
              </p>

              {/* Book stats */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div
                  className="p-4 rounded-lg text-center"
                  style={{
                    backgroundColor: `${book.color}10`,
                    border: `1px solid ${book.color}30`,
                  }}
                >
                  <p className="text-xs font-semibold tracking-wider mb-1" style={{ color: book.color }}>
                    PAGES
                  </p>
                  <p className="text-2xl font-black" style={{ color: currentTheme.colors.textPrimary }}>
                    {book.pages}
                  </p>
                </div>
                <div
                  className="p-4 rounded-lg text-center"
                  style={{
                    backgroundColor: `${book.color}10`,
                    border: `1px solid ${book.color}30`,
                  }}
                >
                  <p className="text-xs font-semibold tracking-wider mb-1" style={{ color: book.color }}>
                    CHAPTERS
                  </p>
                  <p className="text-2xl font-black" style={{ color: currentTheme.colors.textPrimary }}>
                    {book.chapters}
                  </p>
                </div>
                <div
                  className="p-4 rounded-lg text-center"
                  style={{
                    backgroundColor: `${book.color}10`,
                    border: `1px solid ${book.color}30`,
                  }}
                >
                  <p className="text-xs font-semibold tracking-wider mb-1" style={{ color: book.color }}>
                    RATING
                  </p>
                  <p className="text-2xl font-black" style={{ color: currentTheme.colors.textPrimary }}>
                    {book.rating}⭐
                  </p>
                </div>
                <div
                  className="p-4 rounded-lg text-center"
                  style={{
                    backgroundColor: `${currentTheme.colors.accentPrimary}10`,
                    border: `1px solid ${currentTheme.colors.accentPrimary}30`,
                  }}
                >
                  <p className="text-xs font-semibold tracking-wider mb-1" style={{ color: currentTheme.colors.accentPrimary }}>
                    PRICE
                  </p>
                  <p className="text-2xl font-black" style={{ color: currentTheme.colors.textPrimary }}>
                    {book.price}
                  </p>
                </div>
              </div>

              {/* Summary */}
              <div
                className="p-6 rounded-lg mb-8"
                style={{
                  backgroundColor: currentTheme.colors.backgroundSecondary,
                  border: `1px solid ${book.color}30`,
                }}
              >
                <h3 className="text-xl font-black mb-4" style={{ color: currentTheme.colors.textPrimary }}>
                  Summary
                </h3>
                <p style={{ color: currentTheme.colors.textSecondary }}>
                  {book.summary}
                </p>
              </div>

              {/* Main characters */}
              <div>
                <h3 className="text-xl font-black mb-4" style={{ color: currentTheme.colors.textPrimary }}>
                  Main Characters
                </h3>
                <div className="flex flex-wrap gap-3">
                  {book.mainCharacters.map((character: string) => (
                    <span
                      key={character}
                      className="px-4 py-2 rounded-lg text-sm font-bold"
                      style={{
                        backgroundColor: `${book.color}20`,
                        color: book.color,
                        border: `1px solid ${book.color}30`,
                      }}
                    >
                      {character}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Themes section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-black tracking-wider mb-8" style={{ color: currentTheme.colors.textPrimary }}>
            Themes & Concepts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {book.themes.map((theme: string, index: number) => (
              <motion.div
                key={theme}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="p-4 rounded-lg text-center"
                style={{
                  backgroundColor: `${book.color}10`,
                  border: `1px solid ${book.color}30`,
                }}
              >
                <p className="font-bold" style={{ color: currentTheme.colors.textPrimary }}>
                  {theme}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
