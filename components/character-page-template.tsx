'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from '@/lib/theme-context'
import { useLanguage } from '@/lib/language-context'
import { characterData, CharacterKey } from '@/lib/character-data'
import { ArrowLeft, Sparkles } from 'lucide-react'

interface CharacterPageProps {
  characterKey: CharacterKey
}

export function CharacterPageTemplate({ characterKey }: CharacterPageProps) {
  const { currentTheme } = useTheme()
  const { t } = useLanguage()
  const character = characterData[characterKey]
  const [activeTab, setActiveTab] = useState<'story' | 'book'>('story')

  // Handle character not found
  if (!character) {
    return (
      <main style={{ backgroundColor: currentTheme.colors.background }} className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl font-black mb-4" style={{ color: currentTheme.colors.textPrimary }}>
            Character Not Found
          </h1>
          <p className="text-lg mb-8" style={{ color: currentTheme.colors.textSecondary }}>
            The character you're looking for doesn't exist.
          </p>
          <Link 
            href="/"
            className="px-6 py-3 rounded-lg font-bold inline-block"
            style={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}
          >
            Back to Characters
          </Link>
        </div>
      </main>
    )
  }

  const relatedCharacters = Object.entries(characterData).filter(
    ([key]) => key !== characterKey
  ).slice(0, 3)

  return (
    <main style={{ backgroundColor: currentTheme.colors.background }}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${character.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            {/* Image */}
            <div className="flex-1">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={character.image}
                  alt={t(character.nameKey)}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p 
                  className="text-sm font-bold uppercase tracking-widest mb-2"
                  style={{ color: character.color }}
                >
                  {character.status}
                </p>
                <h1 
                  className="text-5xl md:text-6xl font-black mb-3"
                  style={{ color: currentTheme.colors.textPrimary }}
                >
                  {t(character.nameKey)}
                </h1>
                <p 
                  className="text-2xl font-bold mb-6"
                  style={{ color: character.color }}
                >
                  {t(character.titleKey)}
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg leading-relaxed"
                style={{ color: currentTheme.colors.textSecondary }}
              >
                {t(character.shortDescKey)}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4 pt-4"
              >
                <Link href="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold"
                    style={{
                      backgroundColor: character.color,
                      color: currentTheme.colors.background,
                    }}
                  >
                    <ArrowLeft className="h-5 w-5" />
                    {t('back_to_home')}
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex gap-8 border-b mb-12" style={{ borderColor: `${currentTheme.colors.accentPrimary}30` }}>
            {(['story', 'book'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-3 font-bold transition-all relative"
                style={{
                  color: activeTab === tab ? character.color : currentTheme.colors.textSecondary,
                }}
              >
                {tab === 'story' ? 'Character Story' : 'Related Book'}
                {activeTab === tab && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: character.color }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Story Tab */}
          {activeTab === 'story' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h2 
                className="text-3xl font-bold mb-6"
                style={{ color: currentTheme.colors.textPrimary }}
              >
                {t(character.titleKey)}
              </h2>
              <p 
                className="text-lg leading-relaxed"
                style={{ color: currentTheme.colors.textSecondary }}
              >
                {t(character.longDescKey)}
              </p>
            </motion.div>
          )}

          {/* Book Tab */}
          {activeTab === 'book' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h2 
                className="text-3xl font-bold mb-6"
                style={{ color: currentTheme.colors.textPrimary }}
              >
                {t(character.bookNameKey)}
              </h2>
              <p 
                className="text-lg leading-relaxed mb-8"
                style={{ color: currentTheme.colors.textSecondary }}
              >
                {t(character.bookDescKey)}
              </p>
              <div 
                className="p-6 rounded-lg border-2 text-center"
                style={{
                  backgroundColor: `${character.color}10`,
                  borderColor: character.color,
                }}
              >
                <p 
                  className="text-2xl font-bold"
                  style={{ color: character.color }}
                >
                  {t('page_coming_soon')}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Related Characters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl font-bold mb-12 text-center"
            style={{ color: currentTheme.colors.textPrimary }}
          >
            {t('related_characters')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedCharacters.map(([key, char]) => (
              <motion.div
                key={key}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4 shadow-lg">
                  <Image
                    src={char.image}
                    alt={t(char.nameKey)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${char.color}88 0%, ${char.color}33 100%)`,
                    }}
                  >
                    <Sparkles className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 
                  className="text-lg font-bold"
                  style={{ color: currentTheme.colors.textPrimary }}
                >
                  {t(char.nameKey)}
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: char.color }}
                >
                  {t(char.titleKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
