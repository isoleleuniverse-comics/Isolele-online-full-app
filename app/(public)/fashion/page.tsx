'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, MessageCircle, Share2, Home, Play } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { useTheme } from '@/lib/theme-context'

const fashionContent = [
  {
    id: 1,
    type: 'image',
    media: '/fashion/img-1.jpg',
    title: { en: 'Fire Performance Ritual', fr: 'Rituel de Performance du Feu' },
    description: { en: 'Ancient traditions meet contemporary expression', fr: 'Les traditions anciennes rencontrent l\'expression contemporaine' },
  },
  {
    id: 2,
    type: 'image',
    media: '/fashion/img-2.jpg',
    title: { en: 'Monument of Power', fr: 'Monument du Pouvoir' },
    description: { en: 'Golden armor and ancestral pride', fr: 'Armure dorée et fierté ancestrale' },
  },
  {
    id: 3,
    type: 'image',
    media: '/fashion/img-3.jpg',
    title: { en: 'Sacred Geometry', fr: 'Géométrie Sacrée' },
    description: { en: 'Woven patterns of spiritual power', fr: 'Motifs tissés de puissance spirituelle' },
  },
  {
    id: 4,
    type: 'image',
    media: '/fashion/img-4.jpg',
    title: { en: 'Runway Essence', fr: 'Essence de la Piste' },
    description: { en: 'Modern grace with traditional roots', fr: 'Grâce moderne avec des racines traditionnelles' },
  },
  {
    id: 5,
    type: 'image',
    media: '/fashion/img-5.jpg',
    title: { en: 'Sculptural Fashion', fr: 'Mode Sculpturale' },
    description: { en: 'Architectural beauty in every thread', fr: 'Beauté architecturale dans chaque fil' },
  },
  {
    id: 6,
    type: 'video',
    media: '/fashion/video-1.mp4',
    title: { en: 'Fashion Show Spectacle', fr: 'Spectacle du Défilé de Mode' },
    description: { en: 'Live celebration of African couture', fr: 'Célébration vivante de la couture africaine' },
  },
  {
    id: 7,
    type: 'image',
    media: '/fashion/img-6.jpg',
    title: { en: 'Runway Presence', fr: 'Présence sur la Piste' },
    description: { en: 'Bold statement in black and gold', fr: 'Déclaration audacieuse en noir et or' },
  },
  {
    id: 8,
    type: 'image',
    media: '/fashion/img-7.jpg',
    title: { en: 'Regal Procession', fr: 'Procession Royale' },
    description: { en: 'Heritage displayed with confidence', fr: 'Patrimoine affiché avec confiance' },
  },
  {
    id: 9,
    type: 'image',
    media: '/fashion/img-8.jpg',
    title: { en: 'Contemporary Kingship', fr: 'Royauté Contemporaine' },
    description: { en: 'Modern interpretation of ancient power', fr: 'Interprétation moderne du pouvoir ancien' },
  },
  {
    id: 10,
    type: 'image',
    media: '/fashion/img-9.jpg',
    title: { en: 'Ancestral Illumination', fr: 'Illumination Ancestrale' },
    description: { en: 'Light guides the way forward', fr: 'La lumière guide le chemin à suivre' },
  },
  {
    id: 11,
    type: 'video',
    media: '/fashion/video-2.mp4',
    title: { en: 'Night Showcase', fr: 'Spectacle Nocturne' },
    description: { en: 'Glamour under the stars', fr: 'Glamour sous les étoiles' },
  },
  {
    id: 12,
    type: 'image',
    media: '/fashion/img-10.jpg',
    title: { en: 'Sacred Adornment', fr: 'Parure Sacrée' },
    description: { en: 'Every detail tells a sacred story', fr: 'Chaque détail raconte une histoire sacrée' },
  },
  {
    id: 13,
    type: 'image',
    media: '/fashion/img-12.jpg',
    title: { en: 'Heritage Bearer', fr: 'Porteur du Patrimoine' },
    description: { en: 'Carrying tradition into the future', fr: 'Porter la tradition dans l\'avenir' },
  },
  {
    id: 14,
    type: 'video',
    media: '/fashion/video-3.mp4',
    title: { en: 'Lantern of Dreams', fr: 'Lanterne des Rêves' },
    description: { en: 'Illuminating possibilities ahead', fr: 'Illuminer les possibilités à venir' },
  },
  {
    id: 15,
    type: 'image',
    media: '/fashion/img-13.jpg',
    title: { en: 'Street Royalty', fr: 'Royauté de Rue' },
    description: { en: 'Urban elegance with tribal soul', fr: 'Élégance urbaine avec une âme tribale' },
  },
  {
    id: 16,
    type: 'image',
    media: '/fashion/img-14.jpg',
    title: { en: 'Monument of Grace', fr: 'Monument de Grâce' },
    description: { en: 'Standing tall in architectural beauty', fr: 'Tenant haut dans la beauté architecturale' },
  },
]

function MediaCard({ item, index }: { item: typeof fashionContent[0], index: number }) {
  const { currentLanguage } = useLanguage()
  const { currentTheme } = useTheme()
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 5000) + 1000)
  const [showVideo, setShowVideo] = useState(false)

  const t = (obj: any) => obj[currentLanguage.code] || obj.en

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
  }

  const handleShare = () => {
    const text = `${t(item.title)} - ISOLELE Fashion`
    if (navigator.share) {
      navigator.share({ title: 'ISOLELE Fashion', text })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative rounded-xl overflow-hidden group"
      style={{ border: `1px solid ${currentTheme.colors.accentPrimary}40` }}
    >
      {/* Media Container */}
      <div className="relative aspect-square overflow-hidden bg-black">
        {item.type === 'image' ? (
          <Image
            src={item.media}
            alt={t(item.title)}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <>
            <video
              src={item.media}
              className="w-full h-full object-cover"
              onMouseEnter={(e) => (e.currentTarget).play()}
              onMouseLeave={(e) => {
                (e.currentTarget).pause()
                ;(e.currentTarget).currentTime = 0
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all">
              <Play className="w-12 h-12 text-white fill-white" />
            </div>
          </>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Overlay - Hidden initially, shown on hover */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/90 via-transparent to-transparent"
      >
        <h3 className="text-lg font-bold text-white mb-1">{t(item.title)}</h3>
        <p className="text-xs mb-3" style={{ color: currentTheme.colors.accentPrimary }}>
          {t(item.description)}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLike}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg backdrop-blur-sm transition-all text-sm"
            style={{
              backgroundColor: liked ? `${currentTheme.colors.accentPrimary}80` : 'rgba(255,255,255,0.1)',
              color: liked ? '#000' : '#fff'
            }}
          >
            <Heart className="w-4 h-4" fill={liked ? 'currentColor' : 'none'} />
            <span>{likeCount}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg backdrop-blur-sm text-sm"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
          >
            <MessageCircle className="w-4 h-4" />
            <span>{Math.floor(Math.random() * 500)}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg backdrop-blur-sm text-sm"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
          >
            <Share2 className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FashionPage() {
  const { currentLanguage } = useLanguage()
  const { currentTheme } = useTheme()
  const lang = currentLanguage.code

  return (
    <main style={{ backgroundColor: currentTheme.colors.background, minHeight: '100vh' }}>
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
      <section className="py-16 text-center px-4 border-b" style={{
        borderBottomColor: `${currentTheme.colors.accentPrimary}20`
      }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: currentTheme.colors.accentPrimary }}>
            {lang === 'fr' ? 'Couronne de Style' : 'Crown of Style'}
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-6" style={{ color: currentTheme.colors.textSecondary }}>
            {lang === 'fr'
              ? 'Où l\'héritage africain rencontre l\'expression contemporaine. Chaque création raconte une histoire de pouvoir, de grâce et de transformation.'
              : 'Where African heritage meets contemporary expression. Every creation tells a story of power, grace, and transformation.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              className="px-4 py-2 rounded-lg text-sm font-semibold"
              style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary }}
            >
              {lang === 'fr' ? '16 Collections' : '16 Collections'}
            </motion.div>
            <motion.div
              className="px-4 py-2 rounded-lg text-sm font-semibold"
              style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary }}
            >
              {lang === 'fr' ? '3 Vidéos Exclusives' : '3 Exclusive Videos'}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Fashion Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {fashionContent.map((item, index) => (
            <MediaCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 text-center border-t" style={{
        backgroundColor: `${currentTheme.colors.accentPrimary}05`,
        borderTopColor: `${currentTheme.colors.accentPrimary}20`
      }}>
        <h3 className="text-3xl font-bold mb-4" style={{ color: currentTheme.colors.textPrimary }}>
          {lang === 'fr' ? 'Rejoignez le Mouvement' : 'Join the Movement'}
        </h3>
        <p className="max-w-2xl mx-auto mb-8" style={{ color: currentTheme.colors.textSecondary }}>
          {lang === 'fr'
            ? 'Explorez la collection complète et devenez parte de la révolution de la mode africaine.'
            : 'Explore the complete collection and become part of the African fashion revolution.'}
        </p>
        <Link href="/shop">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg font-bold text-white"
            style={{ backgroundColor: currentTheme.colors.accentPrimary }}
          >
            {lang === 'fr' ? 'Voir la Collection' : 'View Collection'}
          </motion.button>
        </Link>
      </section>
    </main>
  )
}
