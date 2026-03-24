'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, MessageCircle, Share2, Home, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { useTheme } from '@/lib/theme-context'

const fashionLooks = [
  {
    id: 1,
    image: '/fashion/look-1.jpg',
    title: { en: 'Urban Royal Elegance', fr: 'Élégance Royale Urbaine' },
    designer: 'ISOLELE Collections',
    likes: 2847,
    comments: 156,
    likes_user: false,
  },
  {
    id: 2,
    image: '/fashion/look-2.jpg',
    title: { en: 'Heritage Fusion', fr: 'Fusion Patrimoniale' },
    designer: 'ISOLELE Collections',
    likes: 3421,
    comments: 234,
    likes_user: false,
  },
  {
    id: 3,
    image: '/fashion/look-3.jpg',
    title: { en: 'Contemporary Crown', fr: 'Couronne Contemporaine' },
    designer: 'ISOLELE Collections',
    likes: 4156,
    comments: 312,
    likes_user: false,
  },
]

function FashionCard({ look, index }: { look: typeof fashionLooks[0], index: number }) {
  const { currentLanguage } = useLanguage()
  const { currentTheme } = useTheme()
  const [liked, setLiked] = useState(look.likes_user)
  const [likeCount, setLikeCount] = useState(look.likes)

  const t = (obj: any) => obj[currentLanguage.code] || obj.en

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="relative rounded-2xl overflow-hidden group"
      style={{ border: `2px solid ${currentTheme.colors.accentPrimary}40` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={look.image}
          alt={t(look.title)}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-transparent to-transparent">
        <h3 className="text-2xl font-bold text-white mb-2">{t(look.title)}</h3>
        <p className="text-sm" style={{ color: currentTheme.colors.accentPrimary }}>
          {look.designer}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLike}
            className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm transition-all"
            style={{
              backgroundColor: liked ? `${currentTheme.colors.accentPrimary}80` : 'rgba(255,255,255,0.1)',
              color: liked ? '#000' : '#fff'
            }}
          >
            <Heart className="w-5 h-5" fill={liked ? 'currentColor' : 'none'} />
            <span className="text-sm">{likeCount}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">{look.comments}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
          >
            <Share2 className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function FashionPage() {
  const { currentLanguage } = useLanguage()
  const { currentTheme } = useTheme()
  const lang = currentLanguage.code

  return (
    <main style={{ backgroundColor: currentTheme.colors.background }}>
      {/* Navigation Bar */}
      <div className="sticky top-0 z-40 backdrop-blur-lg" style={{ 
        backgroundColor: `${currentTheme.colors.background}cc`,
        borderBottom: `1px solid ${currentTheme.colors.accentPrimary}20`
      }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" style={{ color: currentTheme.colors.accentPrimary }}>
            <Home className="w-5 h-5" />
            <span className="text-sm font-medium">{lang === 'fr' ? 'Accueil' : 'Home'}</span>
          </Link>
          <h1 className="text-2xl font-bold" style={{ color: currentTheme.colors.textPrimary }}>
            {lang === 'fr' ? 'Mode ISOLELE' : 'ISOLELE Fashion'}
          </h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: currentTheme.colors.accentPrimary }}>
            {lang === 'fr' ? 'Couronne de Style' : 'Crown of Style'}
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: currentTheme.colors.textSecondary }}>
            {lang === 'fr'
              ? 'Découvrez la fusion entre l\'héritage africain et la mode contemporaine. Chaque pièce raconte une histoire.'
              : 'Discover the fusion of African heritage and contemporary fashion. Every piece tells a story.'}
          </p>
        </motion.div>
      </section>

      {/* Fashion Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fashionLooks.map((look, index) => (
            <FashionCard key={look.id} look={look} index={index} />
          ))}
        </div>
      </section>
    </main>
  )
}
