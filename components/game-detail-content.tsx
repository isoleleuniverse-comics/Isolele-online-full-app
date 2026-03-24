'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, Users, Download, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { useTheme } from '@/lib/theme-context'

interface GameDetailContentProps {
  game: any
}

export function GameDetailContent({ game }: GameDetailContentProps) {
  const { currentLanguage } = useLanguage()
  const { currentTheme } = useTheme()
  const lang = currentLanguage.code

  const t = (obj: any) => {
    if (typeof obj === 'string') return obj
    return obj?.[lang] || obj?.en || obj
  }

  return (
    <main style={{ backgroundColor: currentTheme.colors.background }}>
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link href="/games" className="inline-flex items-center gap-2 mb-8">
          <motion.button
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 font-semibold"
            style={{ color: currentTheme.colors.accentPrimary }}
          >
            <ArrowLeft size={20} />
            {lang === 'fr' ? 'Retour aux Jeux' : 'Back to Games'}
          </motion.button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Game Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden" style={{ border: `3px solid ${currentTheme.colors.accentPrimary}` }}>
              <Image
                src={game.image_url || game.image}
                alt={t(game.title)}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>

          {/* Game Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <h1 className="text-5xl font-bold mb-3" style={{ color: currentTheme.colors.accentPrimary }}>
                {t(game.title)}
              </h1>
              <p className="text-2xl mb-6" style={{ color: currentTheme.colors.textSecondary }}>
                {t(game.subtitle)}
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: currentTheme.colors.textPrimary }}>
                {t(game.description)}
              </p>
            </div>

            {/* Rating & Meta */}
            <div className="flex items-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <Star size={24} fill={currentTheme.colors.accentPrimary} style={{ color: currentTheme.colors.accentPrimary }} />
                <span className="text-2xl font-bold" style={{ color: currentTheme.colors.accentPrimary }}>
                  {game.rating}
                </span>
              </div>
              <div className="flex items-center gap-2" style={{ color: currentTheme.colors.textSecondary }}>
                <Users size={20} />
                <span>{game.players}</span>
              </div>
              <span className="px-4 py-2 rounded-lg" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary }}>
                {t(game.category)}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 py-4 rounded-lg font-bold tracking-wider flex items-center justify-center gap-2"
                style={{
                  backgroundColor: currentTheme.colors.accentPrimary,
                  color: currentTheme.colors.background
                }}
              >
                <Download size={20} />
                {lang === 'fr' ? 'OBTENIR LE JEU' : 'GET GAME'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 py-4 rounded-lg font-bold tracking-wider flex items-center justify-center gap-2"
                style={{
                  backgroundColor: `${currentTheme.colors.accentPrimary}20`,
                  color: currentTheme.colors.accentPrimary,
                  border: `2px solid ${currentTheme.colors.accentPrimary}`
                }}
              >
                <ExternalLink size={20} />
                {lang === 'fr' ? 'EN SAVOIR PLUS' : 'LEARN MORE'}
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        {game.features && game.features.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8" style={{ color: currentTheme.colors.textPrimary }}>
              {lang === 'fr' ? 'Fonctionnalités' : 'Features'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {game.features.map((feature: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: `${currentTheme.colors.accentPrimary}15` }}
                >
                  <h3 className="font-bold mb-2" style={{ color: currentTheme.colors.accentPrimary }}>
                    {t(feature.title)}
                  </h3>
                  <p style={{ color: currentTheme.colors.textSecondary }}>
                    {t(feature.description)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Gallery */}
        {game.images && game.images.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8" style={{ color: currentTheme.colors.textPrimary }}>
              {lang === 'fr' ? 'Galerie' : 'Gallery'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {game.images.map((image: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative h-64 rounded-xl overflow-hidden"
                >
                  <Image
                    src={image.image_url}
                    alt={t(image.title)}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </section>
    </main>
  )
}
