'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/lib/theme-context'
import { useLanguage } from '@/lib/language-context'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function FashionPreview() {
  const lang = currentLanguage.code
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const fashionImages = [
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24b920d7-edfa-4aaf-aca5-b6954082c4f8.jpeg', key: 'fashion_fire_performance' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b9cc3aca-9a1d-432a-8b14-85494aee7a0d.jpeg', key: 'fashion_monument_power' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/258a56b3-8a74-47ff-967c-61ff803cc20f.jpeg', key: 'fashion_sacred_geometry' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/189adee8-e7b7-45ee-ba67-5c9b6ef5ab67.jpeg', key: 'fashion_runway_essence' },
  ]

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: currentTheme.colors.textPrimary }}
            >
              {t('fashion_collection_title')}
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              {t('fashion_collection_subtitle')}
            </p>
          </div>

          {/* Fashion Grid Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {fashionImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={t(image.key as any)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-start p-3">
                  <p
                    className="text-white text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {t(image.key as any)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link href="/fashion">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-bold text-white transition-all duration-300"
                style={{
                  backgroundColor: currentTheme.colors.accentPrimary,
                  boxShadow: `0 0 30px ${currentTheme.colors.accentPrimary}40`
                }}
              >
                {t('fashion_view_full')}
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
