'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { ShoppingBag, ChevronLeft, ChevronRight, Heart, Star, Bell, ShoppingCart, Menu, X } from 'lucide-react'
import { useState, useRef, useCallback, useMemo } from 'react'
import { useCart } from '@/lib/cart-context'
import React from 'react'

// Real book data from ISOLELE with actual images and prices - COMPLETE DESCRIPTIONS
const booksDatabase = [
  {
    id: 'zaiire-prince',
    titleFr: 'Zaiire: The Prince of Kongo',
    titleEn: 'Zaiire: The Prince of Kongo',
    subtitleFr: 'Le Collier du Destin',
    subtitleEn: 'The Necklace of Destiny',
    descFr: 'Forgé au cœur du Royaume du Kongo, le Collier du Destin n\'a jamais été fait pour être porté. Il a été fait pour choisir. Passé à travers des siècles de feu, de guerre et de silence, il porte l\'âme de chaque roi qui a saigné pour son peuple et de chaque reine qui a tenu le monde ensemble avec les mains nues. Quand il trouve Zaiire, il n\'éclaire pas. Il s\'éveille.',
    descEn: 'Forged in the heart of the Kongo Kingdom, the Necklace of Destiny was never made to be worn. It was made to choose. Passed through centuries of fire, war, and silence, it carries the soul of every king who bled for their people and every queen who held the world together with bare hands. When it finds Zaiire, it does not shine. It awakens.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0059-75yxyGjuDt9hhqXF6obymfG8BpNLz4.jpg',
    price: 26.99,
    category: 'featured',
    rating: 4.9,
    stripePriceId: 'price_zaiire_prince',
  },
  {
    id: 'makanda-dynasty',
    titleFr: 'La Dynastie Makanda - Livre I',
    titleEn: 'The Makanda Dynasty - Book I',
    subtitleFr: 'L\'empire le plus puissant de l\'histoire',
    subtitleEn: 'The Most Powerful Empire in History',
    descFr: 'Au cœur de l\'Afrique centrale existait une civilisation que le monde n\'était jamais censé connaître. Spirituellement éveillée. Technologiquement avancée. Protégée par la Flamme Sacrée. Quand des forces extérieures sont venues pour ce qui leur appartenait, les Makanda n\'ont pas tombé. Ils ont disparu. Leur ville n\'a jamais été perdue. Elle attendait celui né pour porter de nouveau la flamme.',
    descEn: 'Deep within Central Africa existed a civilization the world was never meant to know about. Spiritually awakened. Technologically advanced. Protected by the Sacred Flame. When outside forces came for what was theirs, the Makanda did not fall. They disappeared. Their city was never lost. It was waiting for the one born to carry the flame again.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Book%202%20Isolele-QCEiRH2KJp3oFt4O31Qocqap3nLgiJ.jpg',
    price: 32.99,
    category: 'bestseller',
    rating: 4.8,
    stripePriceId: 'price_makanda_dynasty',
  },
  {
    id: 'zattar-universe',
    titleFr: 'Zattar: Le Prince de l\'Univers',
    titleEn: 'Zattar: The Prince of the Universe',
    subtitleFr: 'Le Conquérant des Trônes',
    subtitleEn: 'The Conqueror of Thrones',
    descFr: 'Quand le Destin lui refusa un Royaume, il décida de les tous prendre. Le Prince Zattar était né pour hériter du trône de Bapindi. Mais quand les Ancêtres en ont choisi un autre, quelque chose en lui n\'a pas rompu. Ça s\'est embrasé. Il a étudié les Première et Deuxième Guerres de Vegas, des légendes de dévastation qui ont secoué le monde avant sa naissance. Où d\'autres voyaient un avertissement, Zattar voyait une carte. Il a commencé la Troisième Guerre de Vegas. Pas par folie. Pas par douleur. Mais parce qu\'il a regardé l\'univers entier et a atteint une seule conclusion : Il appartient à quelqu\'un. Et ce quelqu\'un est Zattar. Il n\'a pas été choisi. Donc il a choisi l\'univers à la place.',
    descEn: 'When Destiny Refused Him One Kingdom, He Decided to Take Them All. Prince Zattar was born to inherit the throne of Bapindi. But when the Ancestors chose another, something inside him did not break. It ignited. He studied the First and Second Wars of Vegas, legends of devastation that shook the world before he was even born. Where others saw warning, Zattar saw a map. He started the Third War of Vegas. Not out of madness. Not out of pain. But because he looked at the entire universe and reached one conclusion: It belongs to someone. And that someone is Zattar. He was not chosen. So he chose the universe instead.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZATTAR-GREEN.png-wU9MFy8qKpL0nZ3hX7sY4mA5bP6cQ9dR.jpeg',
    price: 28.99,
    category: 'featured',
    rating: 4.8,
    stripePriceId: 'price_zattar_universe',
  },
  {
    id: 'bambula-rhythm',
    titleFr: 'Bambula: L\'Enfant du Rythme',
    titleEn: 'Bambula: Child of Rhythm',
    subtitleFr: 'Chapitre I - Le Rythme Sacré',
    subtitleEn: 'Chapter I - The Sacred Drum',
    descFr: 'Avant les paroles, il y avait le rythme. Bambula était l\'enfant qui entendait tout. Quand les tambours ont été enlevés et la terre est devenue silencieuse, il a gardé le rythme vivant en lui. Armé du tambour sacré, il marche entre le monde des esprits et le vivant. Il ne combat pas pour détruire. Il protège pour se souvenir.',
    descEn: 'Before words, there was rhythm. Bambula was the child who heard everything. When the drums were taken and the land went silent, he kept the rhythm alive inside him. Armed with the sacred drum, he walks between the spirit world and the living. He does not fight to destroy. He protects to remember.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg',
    price: 34.99,
    category: 'featured',
    rating: 4.7,
    stripePriceId: 'price_bambula_rhythm',
  },
  {
    id: 'mokele-kinshasa',
    titleFr: 'Mokele: Né pour la Lutte',
    titleEn: 'Mokele: Born Into Struggle',
    subtitleFr: 'Du Enfant au Seigneur de Kinshasa',
    subtitleEn: 'From Child to Lord of Kinshasa',
    descFr: 'Mokele n\'est pas né roi. Il est né dans la lutte. Les rues de Kinshasa l\'enseignent avant que l\'école jamais ne puisse, où la loyauté est fragile, la violence est normale, et la survie est tout. De l\'enfant au hustler au seigneur. Il construit le pouvoir, l\'argent, et le respect. À Kinshasa, tu te fais manger... Ou tu deviens le prédateur.',
    descEn: 'Mokele is not born a king. He is born into struggle. The streets of Kinshasa teach him before school ever could, where loyalty is fragile, violence is normal, and survival is everything. From child to hustler to lord. He builds power, money, and respect. In Kinshasa, you either get eaten... Or you become the predator.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg',
    price: 28.99,
    category: 'new',
    rating: 4.6,
    stripePriceId: 'price_mokele_kinshasa',
  },
  {
    id: 'kufu-crown-game',
    titleFr: 'KUFU: Le Jeu de la Couronne',
    titleEn: 'KUFU: The Crown Game',
    subtitleFr: 'Le Jeu Officiel de l\'Univers ISOLELE',
    subtitleEn: 'The Official Game of the ISOLELE Universe',
    descFr: 'Ce n\'est pas juste un jeu de cartes. C\'est une cérémonie. Rassemblez vos guerriers. Construisez votre royaume. Surpassez chaque adversaire à la table. Mais pour réclamer la couronne, il y a un seul moyen de gagner. Vous devez lever la voix et prononcer le nom du roi à haute voix. Alors quelqu\'un pose le collier sur votre tête. Pas de votre propre main. Par une autre. Parce qu\'un vrai roi n\'est pas couronné seul. KUFU est l\'endroit où la royauté africaine devient quelque chose que vous sentez dans vos mains, entendu dans votre voix, et porté autour de votre cou. Chaque jeu est un couronnement. Chaque gagnant est un roi.',
    descEn: 'This is not just a card game. It is a ceremony. Gather your warriors. Build your kingdom. Outplay every opponent at the table. But to claim the crown there is only one way to win. You must raise your voice and speak the name of the king out loud. Then someone places the necklace over your head. Not by your own hand. By another. Because a true king is not crowned alone. KUFU is where African royalty becomes something you feel in your hands, hear in your voice, and carry around your neck. Every game is a coronation. Every winner is a king.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KUFU-GAME-ISOLELE-jN8kL0mP9xR2qT5wY7bU3cV6dZ9eF1gH.jpg',
    price: 49.99,
    category: 'bestseller',
    rating: 4.9,
    stripePriceId: 'price_kufu_crown_game',
  },
  {
    id: 'zaiko-streets-kivus',
    titleFr: 'Zaïko: Le Dernier Roi des Rues de Kivus',
    titleEn: 'Zaïko: Last King of the Streets of Kivus',
    subtitleFr: 'Il n\'a pas émergé de la rue. Il les a conquises.',
    subtitleEn: 'He Did Not Rise From the Streets. He Conquered Them.',
    descFr: 'Né à North Kivu. Forgé à Kinshasa. Zaïko n\'était jamais censé survivre. Mais la survie n\'a jamais suffi. Dans un monde gouverné par le pouvoir, l\'argent et la peur, il s\'élève de rien. Pas comme un héros. Mais comme une force. Avec son frère, il construit l\'empire le plus craint que les Kivus aient jamais connu. Aucune couronne n\'a été donnée. Aucun destin n\'a été écrit. Tout a été pris.',
    descEn: 'Born in North Kivu. Forged in Kinshasa. Zaïko was never meant to survive. But survival was never enough. In a world ruled by power, money, and fear, he rises from nothing. Not as a hero. But as a force. With his brother, he builds the most feared empire the Kivus have ever known. No crown was given. No destiny was written. Everything was taken.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIKO-STREETS-KIVUS-mN2kL5pQ7sT9wX1yZ3bC6dE8fG0hI2jK.jpg',
    price: 26.99,
    category: 'new',
    rating: 4.7,
    stripePriceId: 'price_zaiko_streets',
  },
  {
    id: 'isolele-official',
    titleFr: 'L\'Univers ISOLELE - Édition Officielle',
    titleEn: 'The ISOLELE Universe - Official Edition',
    subtitleFr: 'Les Élus',
    subtitleEn: 'The Chosen Ones',
    descFr: 'Isolele est un univers visionnaire né pour restaurer l\'âme de la narration africaine, un empire mythologique où les super-héros sont choisis par le destin, les royaumes jamais oubliés, et le pouvoir ancestral est vivant dans chaque page, chaque prophétie, chaque bataille. Chaque enfant qui lit Isolele découvrira des super-héros qui leur ressemblent, parlent leur langue, protègent leur terre, et honorent leurs ancêtres. Ceci est pour la prochaine génération de rois, reines, guerriers, inventeurs, et conteurs.',
    descEn: 'Isolele is a visionary universe born to restore the soul of African storytelling, a mythological empire where superheroes are chosen by destiny, kingdoms never forgotten, and ancestral power is alive in every page, every prophecy, every battle. Every child who reads Isolele will discover superheroes who look like them, speak their language, protect their land, and honor their ancestors. This is for the next generation of kings, queens, warriors, inventors, and storytellers.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISOLELE-OFFICIAL-COLLECTION-pQ3rT6uV9wX2yZ4cE7fG0hI1jK2lM3nO.jpg',
    price: 39.99,
    category: 'bestseller',
    rating: 5.0,
    stripePriceId: 'price_isolele_official',
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
