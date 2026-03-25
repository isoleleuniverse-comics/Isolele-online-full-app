'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from '@/lib/theme-context'
import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function FashionGridSection() {
  const { currentTheme } = useTheme()
  const { currentLanguage } = useLanguage()
  const lang = currentLanguage.code

  const fashionItems = [
    {
      id: 1,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8103afa9-8b52-4006-b80b-96b242258d49.jpeg',
      title: { en: 'Sacred Geometry', fr: 'Géométrie Sacrée' },
      description: { en: 'African couture heritage', fr: 'Patrimoine de la couture africaine' }
    },
    {
      id: 2,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8103afa9-8b52-4006-b80b-96b242258d49.jpeg',
      title: { en: 'Modern Elegance', fr: 'Élégance Moderne' },
      description: { en: 'Contemporary African style', fr: 'Style africain contemporain' }
    },
    {
      id: 3,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8103afa9-8b52-4006-b80b-96b242258d49.jpeg',
      title: { en: 'Royal Expression', fr: 'Expression Royale' },
      description: { en: 'Tradition reimagined', fr: 'Tradition réimaginée' }
    },
    {
      id: 4,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8103afa9-8b52-4006-b80b-96b242258d49.jpeg',
      title: { en: 'Runway Culture', fr: 'Culture Runway' },
      description: { en: 'Fashion revolution', fr: 'Révolution mode' }
    }
  ]

  const t = (obj: any) => obj[lang] || obj.en

  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl font-black tracking-wider mb-4"
            style={{ color: currentTheme.colors.accentPrimary }}
          >
            {lang === 'fr' ? 'MODE' : 'FASHION'}
          </h2>
          <p
            className="text-lg font-medium"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            {lang === 'fr' ? 'Où la tradition rencontre l\'innovation' : 'Where tradition meets innovation'}
          </p>
        </motion.div>

        {/* Fashion Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {fashionItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden h-64 sm:h-80 cursor-pointer"
              style={{
                border: `2px solid ${currentTheme.colors.accentPrimary}30`,
              }}
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={t(item.title)}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.colors.accentPrimary}80 0%, ${currentTheme.colors.accentSecondary}80 100%)`
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3
                  className="text-xl sm:text-2xl font-bold mb-2"
                  style={{ color: currentTheme.colors.background }}
                >
                  {t(item.title)}
                </h3>
                <p
                  className="text-sm sm:text-base"
                  style={{ color: `${currentTheme.colors.background}dd` }}
                >
                  {t(item.description)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link href="/fashion">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all"
              style={{
                backgroundColor: currentTheme.colors.accentPrimary,
                color: currentTheme.colors.background
              }}
            >
              {lang === 'fr' ? 'Explorer la Collection' : 'Explore Collection'}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
