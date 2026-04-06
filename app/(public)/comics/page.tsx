'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react'
import { useState } from 'react'

const comicsData = [
  {
    id: 'zaiire',
    titleKey: 'book_zaiire_title',
    titleFr: 'Zaiire: Prince du Kongo',
    descKey: 'book_zaiire_desc',
    descFr: 'Une aventure palpitante et édifiante qui fait écho à l\'esprit du Roi Lion et de Black Panther.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5413e9fc-976b-4c59-97bd-5858678b1f42.jpeg',
    price: 25.99,
    category: 'featured',
  },
  {
    id: 'how_isolele',
    title: 'How the Isolele Universe Reclaims African Memory',
    titleFr: 'Comment l\'univers Isolele réclame la mémoire africaine',
    desc: '"Le colonialisme n\'a pas effacé notre grandeur. Il l\'a enterrée sous son propre mythe."',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_screenshot_Mar%2031%2C%202026%202_16_31%20PM%20GMT%2B02_00-v3ueG61JhSCQHjK2LqR5FJbw9dJJao.png',
    price: 21.99,
    category: 'new',
  },
  {
    id: 'makanda',
    titleKey: 'book_makanda_title',
    titleFr: 'De Mythe à Manuscrit: Cartographier l\'Empire Makanda',
    descKey: 'book_makanda_desc',
    descFr: 'Un voyage cartographique à travers une civilisation africaine effacée.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop',
    price: 23.99,
    category: 'bestseller',
  },
  {
    id: 'sacred_flame',
    title: 'Inside the Sacred Flame Blueprints',
    titleFr: 'À l\'intérieur des plans de la Flamme Sacrée',
    desc: 'Décodage de la science spirituelle de l\'Afrique la plus supprimée.',
    image: 'https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=500&fit=crop',
    price: 27.99,
    category: 'bestseller',
  },
  {
    id: 'zaiire_necklace',
    title: 'The Hidden Message of the Cover of Zaiire',
    titleFr: 'Le Message Caché de la Couverture de Zaiire',
    desc: 'La couverture de Zaiire est une salle du trône de la mémoire.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_screenshot_Mar%2031%2C%202026%202_16_31%20PM%20GMT%2B02_00-v3ueG61JhSCQHjK2LqR5FJbw9dJJao.png',
    price: 18.99,
    category: 'featured',
  },
  {
    id: 'isolele_superhero',
    title: 'Isolele: The First Congolese Superhero Universe',
    titleFr: 'Isolele: Le Premier Univers de Super-héros Congolais',
    desc: 'Et si le nouvel univers global de super-héros ne venait pas de Hollywood?',
    image: 'https://images.unsplash.com/photo-1543269161-cbf427effbad?w=400&h=500&fit=crop',
    price: 24.99,
    category: 'new',
  },
  // Nouveaux livres de ISOLELE NEWS
  {
    id: 'lost_tribe_wakanda',
    title: 'The Lost Tribe Behind Wakanda Was Real',
    titleFr: 'La Tribu Perdue Derrière Wakanda Était Réelle',
    desc: 'Une nouvelle vague d\'historiens et de leaders culturels jette la lumière sur Makanda.',
    image: 'https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=500&fit=crop',
    price: 19.99,
    category: 'new',
  },
  {
    id: 'myth_manuscript',
    title: 'From Myth to Manuscript: Mapping the Makanda Empire',
    titleFr: 'Du Mythe au Manuscrit: Cartographier l\'Empire Makanda',
    desc: 'Un voyage cartographique à travers une civilisation africaine effacée.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop',
    price: 23.99,
    category: 'bestseller',
  },
  {
    id: 'bambula',
    title: 'Bambula: La Gardienne',
    titleFr: 'Bambula: La Gardienne',
    desc: 'Une aventure palpitante qui célèbre le courage et la découverte de soi.',
    image: 'https://images.unsplash.com/photo-1543269161-cbf427effbad?w=400&h=500&fit=crop',
    price: 24.99,
    category: 'featured',
  },
  {
    id: 'mokele',
    title: 'Mokele: Le Prince des Eaux',
    titleFr: 'Mokele: Le Prince des Eaux',
    desc: 'Une quête légendaire à travers les royaumes du Congo.',
    image: 'https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=500&fit=crop',
    price: 26.99,
    category: 'featured',
  },
  {
    id: 'kufulula',
    title: 'King Kufulula: The Founder',
    titleFr: 'King Kufulula: Le Fondateur',
    desc: 'L\'histoire du grand roi qui a établi la légende ISOLELE.',
    image: 'https://images.unsplash.com/photo-1543269161-cbf427effbad?w=400&h=500&fit=crop',
    price: 29.99,
    category: 'bestseller',
  },
  {
    id: 'sacred_blueprints',
    title: 'Sacred Blueprints: Technology of the Ancients',
    titleFr: 'Plans Sacrés: La Technologie des Anciens',
    desc: 'Découvrez la technologie avancée que les ancêtres ont laissée derrière eux.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop',
    price: 27.99,
    category: 'new',
  },
]

interface ComicSectionProps {
  title: string
  titleFr: string
  books: typeof comicsData
  lang: string
}

function ComicSection({ title, titleFr, books, lang }: ComicSectionProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 320
      const newPosition = scrollPosition + (direction === 'left' ? -scrollAmount : scrollAmount)
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      })
      setScrollPosition(newPosition)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          {lang === 'fr' ? titleFr : title}
        </h2>
        <a href="#" className="text-accent-primary hover:underline text-sm font-semibold">
          {lang === 'fr' ? 'Voir tout' : 'See all'}
        </a>
      </div>

      {/* Scrollable Container */}
      <div className="relative group">
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 px-6 scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex-shrink-0 w-72 sm:w-80"
            >
              <ComicCard book={book} lang={lang} />
            </motion.div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transform -translate-x-4 sm:-translate-x-2"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transform translate-x-4 sm:translate-x-2"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </motion.div>
  )
}

interface ComicCardProps {
  book: typeof comicsData[0]
  lang: string
}

function ComicCard({ book, lang }: ComicCardProps) {
  return (
    <div className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/20 transition-all group h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900">
        <Image
          src={book.image}
          alt={book.titleKey ? book.titleFr : book.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-accent-primary text-black px-3 py-1 rounded-full font-bold text-sm">
          ${book.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Category Badge */}
        <span className="text-xs text-accent-primary font-bold uppercase mb-2">
          {book.category}
        </span>

        {/* Title */}
        <h3 className="text-sm font-bold text-foreground group-hover:text-accent-primary transition-colors line-clamp-2 leading-tight mb-2">
          {lang === 'fr' ? book.titleFr : (book.titleKey ? book.titleFr : book.title)}
        </h3>

        {/* Description */}
        <p className="text-xs text-foreground/60 line-clamp-2 mb-4 flex-1">
          {lang === 'fr' ? book.descFr : book.desc}
        </p>

        {/* Button */}
        <button className="w-full bg-accent-primary hover:bg-accent-primary/90 text-black font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm">
          <ShoppingBag size={16} />
          {lang === 'fr' ? 'Lire' : 'Read'}
        </button>
      </div>
    </div>
  )
}

import React from 'react'

export default function ComicsPage() {
  const { t, currentLanguage } = useLanguage()
  const lang = currentLanguage.code

  // Grouper les livres par catégorie
  const featured = comicsData.filter(b => b.category === 'featured')
  const bestsellers = comicsData.filter(b => b.category === 'bestseller')
  const newReleases = comicsData.filter(b => b.category === 'new')

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-accent-primary mb-4">
          {lang === 'fr' ? 'ISOLELE COMICS' : 'ISOLELE COMICS'}
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          {lang === 'fr' 
            ? 'Découvrez notre univers complet de bandes dessinées, d\'histoires et d\'aventures épiques' 
            : 'Discover our complete universe of comics, stories and epic adventures'}
        </p>
      </motion.div>

      {/* Featured Section */}
      <ComicSection
        title="Featured Collections"
        titleFr="Collections Vedettes"
        books={featured}
        lang={lang}
      />

      {/* Bestsellers Section */}
      <ComicSection
        title="Best Sellers"
        titleFr="Meilleures Ventes"
        books={bestsellers}
        lang={lang}
      />

      {/* New Releases Section */}
      <ComicSection
        title="New Releases"
        titleFr="Nouvelles Sorties"
        books={newReleases}
        lang={lang}
      />

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-20 px-6"
      >
        <p className="text-foreground/70 text-lg mb-6">
          {lang === 'fr'
            ? 'Célébrant le patrimoine africain à travers des histoires puissantes et des aventures héroïques.'
            : 'Celebrating African heritage through powerful stories and heroic adventures.'}
        </p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-8 py-3 bg-accent-primary text-black font-bold rounded-lg hover:bg-accent-primary/90 transition-colors"
        >
          {lang === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}
        </motion.a>
      </motion.div>
    </main>
  )
}


