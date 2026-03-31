'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { ShoppingBag, ChevronLeft, ChevronRight, Heart, Star, Bell, ShoppingCart, Menu, X } from 'lucide-react'
import { useState, useRef, useCallback, useMemo } from 'react'
import { useCart } from '@/lib/cart-context'
import React from 'react'

// Real book data from ISOLELE with actual images and prices
const booksDatabase = [
  {
    id: 'zaiire-prince',
    titleFr: 'Zaiire: The Prince of Kongo',
    titleEn: 'Zaiire: The Prince of Kongo',
    descFr: 'Une aventure épique enracinée dans l\'héritage congolais',
    descEn: 'An epic adventure grounded in Congolese heritage',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0059-75yxyGjuDt9hhqXF6obymfG8BpNLz4.jpg',
    price: 26.99,
    category: 'featured',
    rating: 4.9,
    stripePriceId: 'price_zaiire_prince',
  },
  {
    id: 'kimoya-kandake',
    titleFr: 'Kimoya: The Rising Kandake',
    titleEn: 'Kimoya: The Rising Kandake',
    descFr: 'L\'histoire d\'une reine guerrière',
    descEn: 'The story of a warrior queen',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg',
    price: 49.99,
    category: 'bestseller',
    rating: 4.8,
    stripePriceId: 'price_kimoya_kandake',
  },
  {
    id: 'bambula-guardian',
    titleFr: 'Bambula: The Guardian',
    titleEn: 'Bambula: The Guardian',
    descFr: 'Un conte de courage et de découverte de soi',
    descEn: 'A tale of courage and self-discovery',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg',
    price: 34.99,
    category: 'featured',
    rating: 4.7,
    stripePriceId: 'price_bambula_guardian',
  },
  {
    id: 'mokele-waters',
    titleFr: 'Mokele: Prince of the Waters',
    titleEn: 'Mokele: Prince of the Waters',
    descFr: 'Une quête légendaire à travers les royaumes du Congo',
    descEn: 'A legendary quest through the kingdoms of Congo',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg',
    price: 28.99,
    category: 'new',
    rating: 4.6,
    stripePriceId: 'price_mokele_waters',
  },
  {
    id: 'makanda-manuscript',
    titleFr: 'From Myth to Manuscript: Mapping the Makanda Empire',
    titleEn: 'From Myth to Manuscript: Mapping the Makanda Empire',
    descFr: 'Un voyage cartographique à travers une civilisation africaine effacée',
    descEn: 'A cartographic journey through a forgotten African civilization',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    price: 32.99,
    category: 'bestseller',
    rating: 4.8,
    stripePriceId: 'price_makanda_manuscript',
  },
  {
    id: 'sacred-flame',
    titleFr: 'Inside the Sacred Flame Blueprints',
    titleEn: 'Inside the Sacred Flame Blueprints',
    descFr: 'Décodage de la science spirituelle',
    descEn: 'Decoding the spiritual science',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Book%202%20Isolele-QCEiRH2KJp3oFt4O31Qocqap3nLgiJ.jpg',
    price: 27.99,
    category: 'new',
    rating: 4.7,
    stripePriceId: 'price_sacred_flame',
  },
  {
    id: 'zaiire-comic',
    titleFr: 'ZAIIRE - PRINCE OF KONGO (Comic)',
    titleEn: 'ZAIIRE - PRINCE OF KONGO (Comic)',
    descFr: 'Édition de bande dessinée',
    descEn: 'Comic book edition',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg',
    price: 26.99,
    category: 'featured',
    rating: 4.9,
    stripePriceId: 'price_zaiire_comic',
  },
  {
    id: 'isolele-artbook',
    titleFr: 'Isolele Art Collection',
    titleEn: 'Isolele Art Collection',
    descFr: 'Collection d\'art officielle ISOLELE',
    descEn: 'Official ISOLELE art collection',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg',
    price: 34.99,
    category: 'bestseller',
    rating: 4.8,
    stripePriceId: 'price_isolele_artbook',
  },
]

// Header Component
function EComicsHeader() {
  const { currentLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [notificationCount, setNotificationCount] = useState(3)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-accent-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-accent-primary rounded-lg flex items-center justify-center font-bold text-black">
            ISO
          </div>
          <span className="font-bold text-white hidden sm:inline">ISOLELE</span>
        </Link>

        {/* Title */}
        <h1 className="text-lg md:text-xl font-bold text-white hidden md:block">
          {currentLanguage.code === 'fr' ? 'Boutique E-Comics' : 'E-Comics Store'}
        </h1>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-lg border border-accent-primary/30 hover:border-accent-primary/60 transition-colors"
          >
            <Bell size={20} className="text-accent-primary" />
            {notificationCount > 0 && (
              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {notificationCount}
              </span>
            )}
          </motion.button>

          {/* Cart Button */}
          <Link href="/cart" className="relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg border border-accent-primary/30 hover:border-accent-primary/60 transition-colors"
            >
              <ShoppingCart size={20} className="text-accent-primary" />
              <span className="absolute -top-2 -right-2 bg-accent-primary text-black text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </motion.button>
          </Link>

          {/* Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-accent-primary/30"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-accent-primary/20 bg-background/95 px-6 py-4 space-y-4"
        >
          <Link href="/" className="block text-white hover:text-accent-primary transition-colors">
            {currentLanguage.code === 'fr' ? 'Accueil' : 'Home'}
          </Link>
          <Link href="/e-comics-book" className="block text-accent-primary font-bold">
            {currentLanguage.code === 'fr' ? 'Boutique' : 'Shop'}
          </Link>
        </motion.div>
      )}
    </header>
  )
}

// Book Section Component
interface BookSectionProps {
  titleFr: string
  titleEn: string
  books: typeof booksDatabase
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

  const handleAddToCart = (book: typeof booksDatabase[0]) => {
    addToCart({ 
      id: book.id, 
      title: lang === 'fr' ? book.titleFr : book.titleEn, 
      price: book.price 
    })
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
        <motion.a
          href="/e-comics-book"
          whileHover={{ scale: 1.05 }}
          className="text-accent-primary font-bold text-sm hover:underline cursor-pointer"
        >
          {lang === 'fr' ? 'Voir tout' : 'See all'}
        </motion.a>
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
                <div className="relative h-80 overflow-hidden bg-gray-800">
                  <Image
                    src={book.image}
                    alt={lang === 'fr' ? book.titleFr : book.titleEn}
                    fill
                    className="object-cover group-hover/card:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-3 right-3 bg-accent-primary text-black px-4 py-2 rounded-full font-bold text-lg">
                    ${book.price.toFixed(2)}
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/70 backdrop-blur px-3 py-1.5 rounded-full">
                    <Star size={16} className="text-accent-primary fill-accent-primary" />
                    <span className="text-sm text-white font-bold">{book.rating}</span>
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
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handleAddToCart(book)}
                      className="flex-1 bg-accent-primary hover:bg-accent-primary/90 text-black font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <ShoppingBag size={16} />
                      {lang === 'fr' ? 'Ajouter' : 'Add'}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-lg border border-accent-primary/50 text-accent-primary hover:bg-accent-primary/10 transition-colors"
                    >
                      <Heart size={18} />
                    </motion.button>
                  </div>
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

  const featuredBooks = useMemo(() => booksDatabase.filter(b => b.category === 'featured'), [])
  const newBooks = useMemo(() => booksDatabase.filter(b => b.category === 'new'), [])
  const bestsellerBooks = useMemo(() => booksDatabase.filter(b => b.category === 'bestseller'), [])

  return (
    <>
      <EComicsHeader />
      
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
                <span className="text-accent-primary font-bold text-sm uppercase">{lang === 'fr' ? 'Vedette' : 'Featured'}</span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
                  {lang === 'fr' ? 'Zaiire: Prince of Kongo' : 'Zaiire: Prince of Kongo'}
                </h1>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {lang === 'fr' 
                  ? 'Une aventure épique enracinée dans l\'héritage congolais, où le destin d\'un prince choisi détermine le sort d\'un empire.'
                  : 'An epic adventure grounded in Congolese heritage, where the destiny of a chosen prince determines the fate of an empire.'}
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
                  {lang === 'fr' ? 'Prix spécial' : 'Special Price'}: <span className="text-2xl font-bold text-accent-primary">$26.99</span>
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative h-96 md:h-full rounded-lg overflow-hidden"
            >
              <Image
                src={booksDatabase[0].image}
                alt="Zaiire"
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
    </>
  )
}
