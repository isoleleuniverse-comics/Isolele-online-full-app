'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { ShoppingBag, ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react'
import { useState, useRef, useCallback, useMemo } from 'react'
import { useCart } from '@/lib/cart-context'
import React from 'react'

// Featured book for hero section
const featuredBook = {
  id: 'zaiire-hero',
  titleFr: 'Zaiire: The Prince of Kongo',
  titleEn: 'Zaiire: The Prince of Kongo',
  authorFr: 'La saga épique du Kongo',
  authorEn: 'The epic saga of Kongo',
  descFr: 'Une aventure palpitante qui nous ramène aux origines de l\'univers ISOLELE, où le destin d\'un prince choisi détermine le sort d\'un empire.',
  descEn: 'A thrilling adventure that takes us back to the origins of the ISOLELE universe, where the fate of a chosen prince determines the destiny of an empire.',
  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5413e9fc-976b-4c59-97bd-5858678b1f42.jpeg',
  price: 14.99,
  badge: 'Featured',
}

// All books from ISOLELE NEWS and project
const allBooks = [
  {
    id: 'zaiire',
    titleFr: 'Zaiire: The Prince of Kongo',
    titleEn: 'Zaiire: The Prince of Kongo',
    authorFr: 'Isolele Universe',
    authorEn: 'Isolele Universe',
    descFr: 'Une aventure épique enracinée dans l\'héritage congolais',
    descEn: 'An epic adventure grounded in Congolese heritage',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5413e9fc-976b-4c59-97bd-5858678b1f42.jpeg',
    price: 14.99,
    category: 'featured',
    rating: 4.8,
  },
  {
    id: 'makanda',
    titleFr: 'De Mythe à Manuscrit: Cartographier l\'Empire Makanda',
    titleEn: 'From Myth to Manuscript: Mapping the Makanda Empire',
    authorFr: 'Historians Collective',
    authorEn: 'Historians Collective',
    descFr: 'Un voyage cartographique à travers une civilisation africaine effacée',
    descEn: 'A cartographic journey through a forgotten African civilization',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    price: 16.99,
    category: 'bestseller',
    rating: 4.6,
  },
  {
    id: 'sacred-flame',
    titleFr: 'À l\'intérieur des plans de la Flamme Sacrée',
    titleEn: 'Inside the Sacred Flame Blueprints',
    descFr: 'Décodage de la science spirituelle de l\'Afrique la plus supprimée',
    descEn: 'Decoding the spiritual science of Africa\'s most suppressed imagination',
    image: 'https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=600&fit=crop',
    price: 18.99,
    category: 'new',
    rating: 4.7,
  },
  {
    id: 'bambula',
    titleFr: 'Bambula: La Gardienne',
    titleEn: 'Bambula: The Guardian',
    authorFr: 'Isolele Universe',
    authorEn: 'Isolele Universe',
    descFr: 'Une tale of courage, power, and self-discovery',
    descEn: 'A tale of courage, power, and self-discovery',
    image: 'https://images.unsplash.com/photo-1543269161-cbf427effbad?w=400&h=600&fit=crop',
    price: 13.99,
    category: 'featured',
    rating: 4.9,
  },
  {
    id: 'wakanda-tribe',
    titleFr: 'La Tribu Perdue Derrière Wakanda Était Réelle',
    titleEn: 'The Lost Tribe Behind Wakanda Was Real',
    descFr: 'Une nouvelle vague d\'historiens et de leaders culturels jette la lumière sur Makanda',
    descEn: 'A new wave of historians and cultural leaders is shedding light on Makanda',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=600&fit=crop',
    price: 15.99,
    category: 'new',
    rating: 4.5,
  },
  {
    id: 'mokele',
    titleFr: 'Mokele: Le Prince des Eaux',
    titleEn: 'Mokele: Prince of the Waters',
    authorFr: 'Isolele Universe',
    authorEn: 'Isolele Universe',
    descFr: 'Une quête légendaire à travers les royaumes du Congo',
    descEn: 'A legendary quest through the kingdoms of Congo',
    image: 'https://images.unsplash.com/photo-1511320768486-a01980e01a18?w=400&h=600&fit=crop',
    price: 17.99,
    category: 'bestseller',
    rating: 4.8,
  },
]

interface BookSectionProps {
  titleFr: string
  titleEn: string
  books: typeof allBooks
  lang: string
}

function BookSection({ titleFr, titleEn, books, lang }: BookSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollPos, setScrollPos] = useState(0)
  const { addToCart } = useCart()

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 360
      const newPos = scrollPos + (direction === 'left' ? -scrollAmount : scrollAmount)
      containerRef.current.scrollTo({ left: newPos, behavior: 'smooth' })
      setScrollPos(newPos)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          {lang === 'fr' ? titleFr : titleEn}
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="text-accent-primary font-bold text-sm hover:underline"
        >
          {lang === 'fr' ? 'Voir tout' : 'See all'}
        </motion.button>
      </div>

      {/* Scrollable Container */}
      <div className="relative group">
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-6 scrollbar-hide"
        >
          {books.map((book, idx) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex-shrink-0 w-72 group/card"
            >
              {/* Book Card */}
              <div className="bg-card border border-border/50 rounded-lg overflow-hidden hover:border-accent-primary/50 transition-all hover:shadow-lg hover:shadow-accent-primary/20 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-800">
                  <Image
                    src={book.image}
                    alt={lang === 'fr' ? book.titleFr : book.titleEn}
                    fill
                    className="object-cover group-hover/card:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-3 right-3 bg-accent-primary text-black px-3 py-1 rounded-full font-bold text-sm">
                    ${book.price}
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur px-2 py-1 rounded-full">
                    <Star size={14} className="text-accent-primary fill-accent-primary" />
                    <span className="text-xs text-white font-bold">{book.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <span className="text-xs text-accent-primary font-bold uppercase mb-2">
                    {book.category}
                  </span>
                  <h3 className="font-bold text-foreground line-clamp-2 mb-2 text-sm leading-tight group-hover/card:text-accent-primary transition-colors">
                    {lang === 'fr' ? book.titleFr : book.titleEn}
                  </h3>
                  <p className="text-xs text-foreground/60 line-clamp-2 mb-4 flex-1">
                    {lang === 'fr' ? book.descFr : book.descEn}
                  </p>

                  {/* Actions */}
                  <button
                    onClick={() => addToCart({ id: book.id, title: lang === 'fr' ? book.titleFr : book.titleEn, price: book.price })}
                    className="w-full bg-accent-primary hover:bg-accent-primary/90 text-black font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <ShoppingBag size={16} />
                    {lang === 'fr' ? 'Ajouter' : 'Add'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transform -translate-x-4"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transform translate-x-4"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </motion.section>
  )
}

export default function EComicsBookPage() {
  const { t, currentLanguage } = useLanguage()
  const lang = currentLanguage.code

  const featuredBooks = useMemo(() => allBooks.filter(b => b.category === 'featured'), [])
  const newBooks = useMemo(() => allBooks.filter(b => b.category === 'new'), [])
  const bestsellerBooks = useMemo(() => allBooks.filter(b => b.category === 'bestseller'), [])

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-24 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-accent-primary/10 to-transparent rounded-2xl border border-accent-primary/20 overflow-hidden">
          {/* Left: Info */}
          <div className="p-8 space-y-6">
            <div>
              <span className="text-accent-primary font-bold text-sm uppercase">Featured</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
                {lang === 'fr' ? featuredBook.titleFr : featuredBook.titleEn}
              </h1>
            </div>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {lang === 'fr' ? featuredBook.descFr : featuredBook.descEn}
            </p>
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-accent-primary text-black px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-accent-primary/90 transition-colors"
              >
                <ShoppingBag size={20} />
                {lang === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-lg border border-accent-primary/50 text-accent-primary hover:bg-accent-primary/10 transition-colors"
              >
                <Heart size={24} />
              </motion.button>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-foreground/60">
                {lang === 'fr' ? 'Prix spécial' : 'Special Price'}: <span className="text-2xl font-bold text-accent-primary">${featuredBook.price}</span>
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-96 md:h-full"
          >
            <Image
              src={featuredBook.image}
              alt={lang === 'fr' ? featuredBook.titleFr : featuredBook.titleEn}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Book Sections */}
      <div className="max-w-7xl mx-auto">
        <BookSection titleFr="Collections Vedettes" titleEn="Featured Collections" books={featuredBooks} lang={lang} />
        <BookSection titleFr="Nouvelles Sorties" titleEn="New Releases" books={newBooks} lang={lang} />
        <BookSection titleFr="Meilleures Ventes" titleEn="Best Sellers" books={bestsellerBooks} lang={lang} />
      </div>

      {/* Bottom CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-24 px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {lang === 'fr' ? 'Rejoignez l\'univers ISOLELE' : 'Join the ISOLELE Universe'}
        </h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          {lang === 'fr'
            ? 'Explorez des histoires épiques, des aventures héroïques et redécouvrez le patrimoine africain'
            : 'Explore epic stories, heroic adventures, and rediscover African heritage'}
        </p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-8 py-3 bg-accent-primary text-black font-bold rounded-lg hover:bg-accent-primary/90 transition-colors"
        >
          {lang === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}
        </motion.a>
      </motion.section>
    </main>
  )
}
