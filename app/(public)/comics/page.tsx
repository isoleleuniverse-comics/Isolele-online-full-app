'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from '@/lib/theme-context'
import { useLanguage } from '@/lib/language-context'
import { logOperation } from '@/lib/database-operations'
import { Home, Book, ShoppingCart, Package, Bell } from 'lucide-react'

// Mock data for comics
const comicBooks = [
  {
    id: 1,
    title: 'ZAIIRE: The Prince of Kongo',
    cover: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260106-WA0013-uGz1WsLuJsQwaeoa9FGYTgKiIf9rZA.jpg',
    price: 9.99,
    rating: 4.8,
  },
  {
    id: 2,
    title: 'KIMOYA: The Reborn Kandake',
    cover: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260106-WA0010-XZRyXzQwD9znnsx8mxHbTBRNzjmtHm.jpg',
    price: 9.99,
    rating: 4.7,
  },
  {
    id: 3,
    title: 'ZATTAR: The Blood Architect',
    cover: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260106-WA0011-UqXFP6gWl4Khrn6sXFwj5ZtTTbvkiP.jpg',
    price: 12.99,
    rating: 4.9,
  },
  {
    id: 4,
    title: 'NJOKO TWINS: Orphan Prophets',
    cover: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260106-WA0012-HZAFyQIAHjVxMaTAyLn0TKRpvB9DPc.jpg',
    price: 10.99,
    rating: 4.6,
  },
]

type TabType = 'home' | 'new' | 'view' | 'bill' | 'notification'

export default function ComicsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('home')
  const { currentTheme } = useTheme()
  const { currentLanguage } = useLanguage()
  const lang = currentLanguage.code

  // Log page visit to database
  useEffect(() => {
    logOperation({
      operation_type: 'page_visit',
      page_name: 'comics',
      description: 'User visited Comics & E-book Store page',
      action_details: {
        timestamp: new Date().toISOString(),
        language: lang,
      },
    })
  }, [lang])

  // Log tab changes to database
  const handleTabChange = (tabId: TabType) => {
    setActiveTab(tabId)
    logOperation({
      operation_type: 'tab_navigation',
      page_name: 'comics',
      description: `User navigated to ${tabId} tab`,
      action_details: {
        tab_id: tabId,
        timestamp: new Date().toISOString(),
      },
    })
  }

  const tabs: { id: TabType; label: string; icon: typeof Home }[] = [
    { id: 'home', label: lang === 'fr' ? 'Accueil' : 'Home-Book', icon: Home },
    { id: 'new', label: lang === 'fr' ? 'Nouveau' : 'New-Book', icon: Book },
    { id: 'view', label: lang === 'fr' ? 'Lire' : 'View-Book', icon: ShoppingCart },
    { id: 'bill', label: lang === 'fr' ? 'Facturation' : 'Bill', icon: Package },
    { id: 'notification', label: lang === 'fr' ? 'Notifications' : 'Notification', icon: Bell },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0a0e27', color: '#e0e0e0' }}>
      {/* Header */}
      <div className="sticky top-0 z-40 border-b" style={{ borderColor: 'rgba(212,175,55,0.2)', backgroundColor: '#0a0e27' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8 overflow-x-auto py-4">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap"
                  style={{
                    backgroundColor: activeTab === tab.id ? '#D4AF37' : 'transparent',
                    color: activeTab === tab.id ? '#000' : '#e0e0e0',
                    borderBottom: activeTab === tab.id ? '2px solid #D4AF37' : 'none',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                  {tab.label}
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#D4AF37' }}>
                {lang === 'fr' ? 'Collections Tendances' : 'Trending Collections'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {comicBooks.map((book) => (
                  <motion.div
                    key={book.id}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer rounded-lg overflow-hidden"
                  >
                    <div className="relative aspect-[3/4] mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={book.cover}
                        alt={book.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-sm font-bold" style={{ color: '#D4AF37' }}>⭐ {book.rating}</p>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{book.title}</h3>
                    <p className="text-sm" style={{ color: '#D4AF37' }}>${book.price}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'new' && (
            <motion.div
              key="new"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#D4AF37' }}>
                {lang === 'fr' ? 'Dernières Sorties' : 'Latest Releases'}
              </h2>
              <div className="space-y-4">
                {comicBooks.map((book) => (
                  <motion.div
                    key={book.id}
                    className="flex gap-4 p-4 rounded-lg"
                    style={{ backgroundColor: 'rgba(212,175,55,0.1)' }}
                    whileHover={{ backgroundColor: 'rgba(212,175,55,0.2)' }}
                  >
                    <div className="relative w-24 h-32 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={book.cover}
                        alt={book.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2" style={{ backgroundColor: '#D4AF37', color: '#000' }}>
                        {lang === 'fr' ? 'NOUVEAU' : 'NEW'}
                      </span>
                      <h3 className="font-bold text-lg">{book.title}</h3>
                      <p className="text-sm mt-2" style={{ color: '#999' }}>
                        {lang === 'fr' ? 'Disponible maintenant' : 'Available now'}
                      </p>
                      <p className="text-lg font-bold mt-3" style={{ color: '#D4AF37' }}>${book.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'view' && (
            <motion.div
              key="view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#D4AF37' }}>
                {lang === 'fr' ? 'Lecteur Immersif' : 'Immersive Reader'}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={comicBooks[0].cover}
                      alt="Comic page"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{comicBooks[0].title}</h3>
                  <p className="text-sm leading-relaxed">
                    {lang === 'fr'
                      ? 'Plongez dans l\'univers épique d\'ISOLELE. Suivez les aventures du Prince Zaiire à travers des royaumes mystiques et des batailles légendaires.'
                      : 'Dive into the epic ISOLELE universe. Follow the adventures of Prince Zaiire through mystical kingdoms and legendary battles.'}
                  </p>
                  <button
                    className="w-full py-3 rounded-lg font-bold"
                    style={{ backgroundColor: '#D4AF37', color: '#000' }}
                  >
                    {lang === 'fr' ? 'LIRE LA SUITE' : 'READ MORE'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'bill' && (
            <motion.div
              key="bill"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#D4AF37' }}>
                {lang === 'fr' ? 'Mon Portefeuille' : 'My Wallet'}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(212,175,55,0.1)', border: '2px solid rgba(212,175,55,0.3)' }}>
                  <h3 className="text-xl font-bold mb-4">{lang === 'fr' ? 'Panier' : 'Cart'}</h3>
                  <div className="space-y-3">
                    {comicBooks.slice(0, 2).map((book) => (
                      <div key={book.id} className="flex justify-between">
                        <span>{book.title}</span>
                        <span style={{ color: '#D4AF37' }}>${book.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-600 mt-4 pt-4 font-bold text-lg">
                    <span>{lang === 'fr' ? 'Total' : 'Total'}: </span>
                    <span style={{ color: '#D4AF37' }}>${(comicBooks[0].price + comicBooks[1].price).toFixed(2)}</span>
                  </div>
                </div>
                <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(212,175,55,0.1)' }}>
                  <h3 className="text-xl font-bold mb-4">{lang === 'fr' ? 'Historique des Achats' : 'Purchase History'}</h3>
                  <p className="text-sm" style={{ color: '#999' }}>
                    {lang === 'fr' ? 'Aucun achat précédent' : 'No previous purchases'}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'notification' && (
            <motion.div
              key="notification"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#D4AF37' }}>
                {lang === 'fr' ? 'Notifications' : 'Notifications'}
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: 'rgba(212,175,55,0.1)', borderLeft: '4px solid #D4AF37' }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="font-bold">
                      {lang === 'fr' ? `Nouveau chapitre disponible: ZATTAR #${i}` : `New chapter available: ZATTAR #${i}`}
                    </p>
                    <p className="text-sm mt-2" style={{ color: '#999' }}>
                      {lang === 'fr' ? 'Il y a 2 heures' : '2 hours ago'}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
