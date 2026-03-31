'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { Bell, ShoppingCart, Book, Star, ArrowRight, Download, Volume2, Home, BookOpen, FileText, Wallet } from 'lucide-react'

type TabType = 'home' | 'new' | 'view' | 'bill' | 'notification'

interface ComicBook {
  id: string
  title: string
  author: string
  cover: string
  rating: number
  price: number
  description: string
  status: 'available' | 'coming' | 'recommended'
  pages: number
}

const mockBooks: ComicBook[] = [
  {
    id: '1',
    title: 'Zaiire: The Prince of Kongo',
    author: 'ISOLELE Universe',
    cover: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5413e9fc-976b-4c59-97bd-5858678b1f42.jpeg',
    rating: 4.8,
    price: 9.99,
    description: 'An epic journey of destiny and power in ancient kingdoms.',
    status: 'available',
    pages: 120
  },
  {
    id: '2',
    title: 'Kimoya: The Heritage Bearer',
    author: 'ISOLELE Universe',
    cover: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop',
    rating: 4.6,
    price: 10.99,
    description: 'A tale of female empowerment and ancient wisdom.',
    status: 'coming',
    pages: 140
  },
  {
    id: '3',
    title: 'Bambula: The Guardian',
    author: 'ISOLELE Universe',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3af4abd8?w=300&h=400&fit=crop',
    rating: 4.7,
    price: 9.99,
    description: 'Protecting the balance between worlds.',
    status: 'available',
    pages: 130
  },
  {
    id: '4',
    title: 'Mokele: Prince of the Depths',
    author: 'ISOLELE Universe',
    cover: 'https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=300&h=400&fit=crop',
    rating: 4.5,
    price: 10.99,
    description: 'Mysteries of the ancient water kingdoms.',
    status: 'recommended',
    pages: 125
  },
]

export default function ComicsStorePage() {
  const { currentLanguage } = useLanguage()
  const lang = currentLanguage.code
  const [activeTab, setActiveTab] = useState<TabType>('home')
  const [cart, setCart] = useState<ComicBook[]>([])
  const [notifications, setNotifications] = useState([
    { id: '1', title: 'New chapter available', message: 'Zaiire Chapter 5 is now available', time: '2 hours ago' },
    { id: '2', title: 'Special offer', message: '20% off all comics this week', time: '1 day ago' },
  ])
  const [cartTotal, setCartTotal] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(true)

  useEffect(() => {
    setCartTotal(cart.reduce((sum, book) => sum + book.price, 0))
  }, [cart])

  const addToCart = (book: ComicBook) => {
    if (soundEnabled) {
      // Play notification sound
      const audio = new Audio('/notification-sound.mp3')
      audio.play().catch(() => {})
    }
    setCart([...cart, book])
  }

  const removeFromCart = (id: string) => {
    setCart(cart.filter(book => book.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const tabVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  const translations = {
    en: {
      title: 'ISOLELE Comics Store',
      homeBook: 'Home',
      newBook: 'New Releases',
      viewBook: 'Reader',
      bill: 'Cart',
      notifications: 'Alerts',
      trending: 'Trending Now',
      recommended: 'Recommended For You',
      price: 'Price',
      pages: 'Pages',
      addCart: 'Add to Cart',
      comingSoon: 'Coming Soon',
      readNow: 'Read Now',
      checkout: 'Checkout',
      total: 'Total',
      cartEmpty: 'Your cart is empty',
      viewMore: 'View More',
      newChapter: 'New Chapter',
      darkMode: 'Dark Mode',
      soundOn: 'Sound On',
      history: 'Purchase History',
      noNotifications: 'No new notifications',
    },
    fr: {
      title: 'Boutique ISOLELE Comics',
      homeBook: 'Accueil',
      newBook: 'Nouveautés',
      viewBook: 'Lecteur',
      bill: 'Panier',
      notifications: 'Alertes',
      trending: 'Tendances',
      recommended: 'Recommandé pour vous',
      price: 'Prix',
      pages: 'Pages',
      addCart: 'Ajouter au panier',
      comingSoon: 'À Venir',
      readNow: 'Lire Maintenant',
      checkout: 'Passer la commande',
      total: 'Total',
      cartEmpty: 'Votre panier est vide',
      viewMore: 'Voir Plus',
      newChapter: 'Nouveau Chapitre',
      darkMode: 'Mode Sombre',
      soundOn: 'Son Activé',
      history: 'Historique des Achats',
      noNotifications: 'Aucune nouvelle notification',
    },
  }

  const t = translations[lang as keyof typeof translations] || translations.en

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {t.title}
            </h1>
          </Link>
          <div className="flex gap-4">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 hover:bg-slate-800 rounded-lg transition"
              title={t.soundOn}
            >
              <Volume2 size={20} />
            </button>
            <button
              onClick={() => setActiveTab('notification')}
              className="relative p-2 hover:bg-slate-800 rounded-lg transition"
            >
              <Bell size={20} />
              {notifications.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('bill')}
              className="relative p-2 hover:bg-slate-800 rounded-lg transition"
            >
              <ShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="absolute top-1 right-1 bg-cyan-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-t border-slate-800 overflow-x-auto">
          {[
            { id: 'home', label: t.homeBook, icon: Home },
            { id: 'new', label: t.newBook, icon: BookOpen },
            { id: 'view', label: t.viewBook, icon: FileText },
            { id: 'bill', label: t.bill, icon: ShoppingCart },
            { id: 'notification', label: t.notifications, icon: Bell },
          ].map(tab => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`px-6 py-3 font-semibold flex items-center gap-2 border-b-2 transition ${
                activeTab === tab.id
                  ? 'border-cyan-500 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.icon && <tab.icon size={18} />}
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait" custom={activeTab === 'home' ? 1 : -1}>
          {/* Home Tab */}
          {activeTab === 'home' && (
            <motion.div
              key="home"
              variants={tabVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">{t.trending}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {mockBooks.slice(0, 4).map(book => (
                    <motion.div
                      key={book.id}
                      whileHover={{ y: -10 }}
                      className="bg-slate-900 rounded-lg overflow-hidden border border-slate-800 hover:border-cyan-500 transition group cursor-pointer"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image
                          src={book.cover}
                          alt={book.title}
                          fill
                          className="object-cover group-hover:scale-110 transition duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                          <Star className="text-yellow-400" size={32} />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-sm mb-1 line-clamp-2">{book.title}</h3>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-cyan-400 font-bold">${book.price}</span>
                          <div className="flex items-center gap-1 text-yellow-400 text-xs">
                            <Star size={12} fill="currentColor" />
                            {book.rating}
                          </div>
                        </div>
                        <motion.button
                          onClick={() => addToCart(book)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-sm font-semibold transition"
                        >
                          {t.addCart}
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-purple-400">{t.recommended}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {mockBooks.slice(2, 6).map(book => (
                    <motion.div
                      key={book.id}
                      whileHover={{ y: -10 }}
                      className="bg-slate-900 rounded-lg overflow-hidden border border-slate-800 hover:border-purple-500 transition group"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image
                          src={book.cover}
                          alt={book.title}
                          fill
                          className="object-cover group-hover:scale-110 transition duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-sm mb-1">{book.title}</h3>
                        <p className="text-xs text-slate-400 mb-3">{book.pages} pages</p>
                        <motion.button
                          onClick={() => addToCart(book)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full py-2 bg-purple-600 hover:bg-purple-500 rounded text-sm font-semibold transition"
                        >
                          {t.addCart}
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {/* New Releases Tab */}
          {activeTab === 'new' && (
            <motion.div
              key="new"
              variants={tabVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">{t.newBook}</h2>
              <div className="space-y-4">
                {mockBooks.filter(b => b.status === 'coming' || b.status === 'available').map(book => (
                  <motion.div
                    key={book.id}
                    whileHover={{ x: 10 }}
                    className="bg-slate-900 border border-slate-800 hover:border-cyan-500 rounded-lg p-4 flex gap-4"
                  >
                    <div className="relative w-24 h-32 flex-shrink-0">
                      <Image
                        src={book.cover}
                        alt={book.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold mb-2">{book.title}</h3>
                        <p className="text-sm text-slate-400 mb-3">{book.description}</p>
                        <div className="flex gap-4 text-xs text-slate-400">
                          <span>📄 {book.pages} {t.pages}</span>
                          <span>⭐ {book.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-cyan-400">${book.price}</span>
                        <motion.button
                          onClick={() => addToCart(book)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded font-semibold text-sm transition"
                        >
                          {book.status === 'coming' ? t.comingSoon : t.addCart}
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Reader Tab */}
          {activeTab === 'view' && (
            <motion.div
              key="view"
              variants={tabVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 text-center">
                <BookOpen size={64} className="mx-auto mb-4 text-cyan-400" />
                <h2 className="text-2xl font-bold mb-2">{t.viewBook}</h2>
                <p className="text-slate-400 mb-6">Select a comic from your library to read</p>
                <motion.button
                  onClick={() => setActiveTab('home')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 rounded font-semibold transition inline-flex items-center gap-2"
                >
                  Browse Comics
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Cart/Bill Tab */}
          {activeTab === 'bill' && (
            <motion.div
              key="bill"
              variants={tabVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {cart.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-4">
                    {cart.map((book, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="bg-slate-900 border border-slate-800 rounded-lg p-4 flex gap-4"
                      >
                        <div className="relative w-16 h-24 flex-shrink-0">
                          <Image
                            src={book.cover}
                            alt={book.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="flex-1 flex justify-between items-start">
                          <div>
                            <h3 className="font-bold">{book.title}</h3>
                            <p className="text-sm text-slate-400">{book.author}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-cyan-400">${book.price}</p>
                            <motion.button
                              onClick={() => removeFromCart(book.id)}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="text-xs text-red-400 hover:text-red-300 mt-2"
                            >
                              Remove
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 h-fit sticky top-24">
                    <h3 className="text-xl font-bold mb-4">{t.total}</h3>
                    <div className="space-y-2 mb-4 pb-4 border-b border-slate-700">
                      <div className="flex justify-between text-sm">
                        <span>{cart.length} items</span>
                        <span>${cartTotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg text-cyan-400">
                        <span>Total</span>
                        <span>${cartTotal.toFixed(2)}</span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-lg font-bold transition"
                    >
                      {t.checkout}
                    </motion.button>
                    <motion.button
                      onClick={clearCart}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-3 py-2 border border-slate-600 hover:border-slate-500 rounded-lg font-semibold transition text-sm"
                    >
                      Clear Cart
                    </motion.button>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-12 text-center">
                  <ShoppingCart size={64} className="mx-auto mb-4 text-slate-600" />
                  <p className="text-xl text-slate-400">{t.cartEmpty}</p>
                </div>
              )}
            </motion.div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notification' && (
            <motion.div
              key="notification"
              variants={tabVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {notifications.length > 0 ? (
                <div className="space-y-4">
                  {notifications.map(notif => (
                    <motion.div
                      key={notif.id}
                      whileHover={{ x: 10 }}
                      className="bg-slate-900 border border-slate-800 hover:border-cyan-500 rounded-lg p-4 flex items-start gap-4"
                    >
                      <Bell className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                      <div className="flex-1">
                        <h3 className="font-bold mb-1">{notif.title}</h3>
                        <p className="text-sm text-slate-400 mb-2">{notif.message}</p>
                        <p className="text-xs text-slate-500">{notif.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-12 text-center">
                  <Bell size={64} className="mx-auto mb-4 text-slate-600" />
                  <p className="text-xl text-slate-400">{t.noNotifications}</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
