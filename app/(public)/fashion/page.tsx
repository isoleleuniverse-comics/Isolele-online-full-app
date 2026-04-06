'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Home } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { useTheme } from '@/lib/theme-context'
import { FashionFeed } from '@/components/fashion-feed'
import { GrokChat } from '@/components/grok-chat'



export default function FashionPage() {
  const { currentLanguage } = useLanguage()
  const { currentTheme } = useTheme()
  const lang = currentLanguage.code

  return (
    <main style={{ backgroundColor: currentTheme.colors.background, minHeight: '100vh' }}>
      {/* Navigation Bar */}
      <div className="sticky top-0 z-30 backdrop-blur-lg" style={{
        backgroundColor: `${currentTheme.colors.background}cc`,
        borderBottom: `1px solid ${currentTheme.colors.accentPrimary}20`
      }}>
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" style={{ color: currentTheme.colors.accentPrimary }}>
            <Home className="w-5 h-5" />
            <span className="text-sm font-medium">{lang === 'fr' ? 'Accueil' : 'Home'}</span>
          </Link>
          <h1 className="text-xl font-bold" style={{ color: currentTheme.colors.textPrimary }}>
            {lang === 'fr' ? 'Mode ISOLELE' : 'ISOLELE Fashion'}
          </h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Instagram-like Feed */}
      <FashionFeed />

      {/* Grok AI Chat */}
      <GrokChat />
    </main>
  )
}
