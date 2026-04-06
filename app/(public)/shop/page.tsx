'use client'

import { useState, useEffect, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, MessageCircle, Share2, Home, ShoppingBag, Search, Filter, X } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { useTheme } from '@/lib/theme-context'
import dynamic from 'next/dynamic'
import { ProductNegotiationWidget } from '@/components/product-negotiation-widget'

// Product Type Definition
interface Product {
  id: number
  name: { en: string; fr: string }
  price: number | null
  category: string
  image: string
  description: { en: string; fr: string }
  stripeLink?: string
}

// Product data
const products = [
  {
    id: 1,
    name: { en: 'Black Pantera – Animal King Hat', fr: 'Black Pantera – Chapeau du Roi Animal' },
    price: 253,
    category: 'headwear',
    image: '/shop/product-1.jpg',
    description: { en: 'Dark crown inspired by Animal King Black Pantera', fr: 'Couronne sombre inspirée du Roi Animal Black Pantera' },
  },
  {
    id: 2,
    name: { en: 'Prince Zaiïre – Crown Hat', fr: 'Prince Zaiïre – Chapeau Couronne' },
    price: 289,
    category: 'headwear',
    image: '/shop/product-2.jpg',
    description: { en: 'Royal crown inspired by the Prince of Kongo, heir of the Sacred Flame', fr: 'Couronne royale inspirée du Prince de Kongo, héritier de la Flamme Sacrée' },
  },
  {
    id: 3,
    name: { en: 'Kimoya – White Queen Kandake Amanirenas Hat', fr: 'Kimoya – Chapeau Reine Blanche Kandake Amanirenas' },
    price: null,
    category: 'headwear',
    image: '/shop/product-3.jpg',
    description: { en: 'White crown inspired by Queen-Mother Kimoya, heiress of Kush and Nubia', fr: 'Couronne blanche inspirée de la Reine-Mère Kimoya, héritière de Kush et Nubia' },
  },
]

interface ProductInteraction {
  id: number
  liked: boolean
  likes: number
  comments: number
}

export default function ShopPage() {
  const { currentLanguage } = useLanguage()
  const { currentTheme } = useTheme()
  const [interactions, setInteractions] = useState<Map<number, ProductInteraction>>(new Map())
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cart, setCart] = useState<number[]>([])
  
  const lang = currentLanguage.code
  const t = (obj: any) => obj[lang] || obj.en

  // Initialize from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('shop_interactions')
    if (stored) setInteractions(new Map(JSON.parse(stored)))
    const cartStored = localStorage.getItem('shop_cart')
    if (cartStored) setCart(JSON.parse(cartStored))
  }, [])

  const updateInteraction = (productId: number, action: 'like' | 'comment') => {
    const current = interactions.get(productId) || {
      id: productId,
      liked: false,
      likes: Math.floor(Math.random() * 5000) + 500,
      comments: Math.floor(Math.random() * 200) + 20,
    }

    if (action === 'like') {
      current.liked = !current.liked
      current.likes = current.liked ? current.likes + 1 : current.likes - 1
    }

    const newMap = new Map(interactions)
    newMap.set(productId, current)
    setInteractions(newMap)
    localStorage.setItem('shop_interactions', JSON.stringify(Array.from(newMap.entries())))
  }

  const addToCart = (productId: number) => {
    const newCart = [...cart, productId]
    setCart(newCart)
    localStorage.setItem('shop_cart', JSON.stringify(newCart))
  }

  const handleCheckout = async () => {
    try {
      const { loadStripe: stripe } = await import('@stripe/stripe-js')
      const stripeInstance = await stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
      const cartProducts = cart.map(id => products.find(p => p.id === id)).filter(Boolean)
      
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products: cartProducts }),
      })

      const session = await response.json()
      await stripeInstance?.redirectToCheckout({ sessionId: session.id })
    } catch (error) {
      console.error('Checkout error:', error)
    }
  }

  const filteredProducts = products.filter(p => {
    const matchesSearch = t(p.name).toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || p.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = ['accessories', 'footwear', 'fragrance', 'headwear', 'collectibles']

  return (
    <main style={{ backgroundColor: currentTheme.colors.background, minHeight: '100vh' }}>
      {/* Header */}
      <div className="sticky top-0 z-40 backdrop-blur-lg" style={{
        backgroundColor: `${currentTheme.colors.background}cc`,
        borderBottom: `1px solid ${currentTheme.colors.accentPrimary}20`
      }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" style={{ color: currentTheme.colors.accentPrimary }}>
            <Home className="w-5 h-5" />
            <span className="text-sm font-medium">{lang === 'fr' ? 'Accueil' : 'Home'}</span>
          </Link>
          <h1 className="text-3xl font-bold" style={{ color: currentTheme.colors.textPrimary }}>
            {lang === 'fr' ? 'Boutique ISOLELE' : 'ISOLELE Shop'}
          </h1>
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative p-2 rounded-lg transition-all"
            style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20` }}
          >
            <ShoppingBag className="w-6 h-6" style={{ color: currentTheme.colors.accentPrimary }} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center border-b" style={{
        borderColor: `${currentTheme.colors.accentPrimary}20`
      }}>
        <h2 className="text-5xl font-bold mb-4" style={{ color: currentTheme.colors.accentPrimary }}>
          {lang === 'fr' ? 'Révolution du Style Africain' : 'African Style Revolution'}
        </h2>
        <p style={{ color: currentTheme.colors.textSecondary }}>
          {lang === 'fr' 
            ? 'Découvrez notre collection de luxe ISOLELE' 
            : 'Discover our exclusive ISOLELE collection'}
        </p>
      </section>

      {/* Search & Filter */}
      <section className="max-w-7xl mx-auto px-4 py-8 border-b" style={{ borderColor: `${currentTheme.colors.accentPrimary}20` }}>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5" style={{ color: currentTheme.colors.textSecondary }} />
            <input
              type="text"
              placeholder={lang === 'fr' ? 'Rechercher...' : 'Search...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border transition-all"
              style={{
                backgroundColor: `${currentTheme.colors.accentPrimary}05`,
                borderColor: `${currentTheme.colors.accentPrimary}30`,
                color: currentTheme.colors.textPrimary,
              }}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className="px-4 py-2 rounded-full font-medium whitespace-nowrap"
            style={{
              backgroundColor: !selectedCategory ? currentTheme.colors.accentPrimary : `${currentTheme.colors.accentPrimary}30`,
              color: !selectedCategory ? currentTheme.colors.background : currentTheme.colors.textPrimary,
            }}
          >
            {lang === 'fr' ? 'Tous' : 'All'}
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="px-4 py-2 rounded-full font-medium whitespace-nowrap"
              style={{
                backgroundColor: selectedCategory === cat ? currentTheme.colors.accentPrimary : `${currentTheme.colors.accentPrimary}30`,
                color: selectedCategory === cat ? currentTheme.colors.background : currentTheme.colors.textPrimary,
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p style={{ color: currentTheme.colors.textSecondary }}>
                {lang === 'fr' ? 'Aucun produit trouvé' : 'No products found'}
              </p>
            </div>
          ) : (
          filteredProducts.map((product, idx) => {
            const interaction = interactions.get(product.id) || {
              id: product.id,
              liked: false,
              likes: Math.floor(Math.random() * 5000) + 500,
              comments: Math.floor(Math.random() * 200) + 20,
            }

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-xl overflow-hidden group cursor-pointer"
                style={{
                  backgroundColor: `${currentTheme.colors.accentPrimary}05`,
                  border: `1px solid ${currentTheme.colors.accentPrimary}30`,
                }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-black">
                  <Image
                    src={product.image}
                    alt={t(product.name)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1 line-clamp-2" style={{ color: currentTheme.colors.textPrimary }}>
                    {t(product.name)}
                  </h3>
                  <p className="text-xs mb-3 line-clamp-1" style={{ color: currentTheme.colors.textSecondary }}>
                    {t(product.description)}
                  </p>

                  <p className="text-lg font-bold mb-3" style={{ color: currentTheme.colors.accentPrimary }}>
                    {product.price !== null ? `$${product.price}` : (lang === 'fr' ? 'Bientôt Disponible' : 'Coming Soon')}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-2 mb-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => updateInteraction(product.id, 'like')}
                      className="flex items-center gap-1 px-2 py-1.5 rounded text-xs font-medium flex-1"
                      style={{
                        backgroundColor: interaction.liked ? `${currentTheme.colors.accentPrimary}80` : `${currentTheme.colors.accentPrimary}20`,
                        color: interaction.liked ? currentTheme.colors.background : currentTheme.colors.textPrimary,
                      }}
                    >
                      <Heart className="w-3 h-3" fill={interaction.liked ? 'currentColor' : 'none'} />
                      <span>{interaction.likes}</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1 px-2 py-1.5 rounded text-xs font-medium flex-1"
                      style={{
                        backgroundColor: `${currentTheme.colors.accentPrimary}20`,
                        color: currentTheme.colors.textPrimary,
                      }}
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>{interaction.comments}</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center justify-center px-2 py-1.5 rounded flex-1"
                      style={{
                        backgroundColor: `${currentTheme.colors.accentPrimary}20`,
                        color: currentTheme.colors.textPrimary,
                      }}
                    >
                      <Share2 className="w-3 h-3" />
                    </motion.button>
                  </div>

                  {/* Buy */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const prod = product as Product
                      if (prod.price === null) return
                      if (prod.stripeLink) {
                        window.open(prod.stripeLink, '_blank')
                      } else {
                        addToCart(product.id)
                      }
                    }}
                    disabled={product.price === null}
                    className="w-full py-2 rounded font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: currentTheme.colors.accentPrimary }}
                  >
                    {product.price === null
                      ? (lang === 'fr' ? 'Bientôt Disponible' : 'Coming Soon')
                      : (product as Product).stripeLink 
                      ? (lang === 'fr' ? 'Acheter Maintenant' : 'Buy Now')
                      : (lang === 'fr' ? 'Acheter' : 'Buy')}
                  </motion.button>
                </div>
              </motion.div>
            )
          })
          )}
        </motion.div>
      </section>

      {/* Product Negotiation Widget */}
      {filteredProducts.length > 0 && filteredProducts[0] && (
        <ProductNegotiationWidget
          productName={t(filteredProducts[0].name)}
          productId={String(filteredProducts[0].id)}
          originalPrice={filteredProducts[0].price}
        />
      )}

      {/* Cart Modal */}
      {isCartOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="rounded-xl p-6 max-w-md w-full"
            style={{ backgroundColor: currentTheme.colors.background }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold" style={{ color: currentTheme.colors.textPrimary }}>
                {lang === 'fr' ? 'Panier' : 'Cart'} ({cart.length})
              </h2>
              <button onClick={() => setIsCartOpen(false)}>
                <X className="w-6 h-6" style={{ color: currentTheme.colors.textPrimary }} />
              </button>
            </div>

            {cart.length === 0 ? (
              <p style={{ color: currentTheme.colors.textSecondary }}>
                {lang === 'fr' ? 'Panier vide' : 'Empty cart'}
              </p>
            ) : (
              <>
                <div className="space-y-2 mb-6 max-h-64 overflow-y-auto">
                  {cart.map((id, idx) => {
                    const product = products.find(p => p.id === id)
                    return (
                      <div key={idx} className="flex justify-between text-sm">
                        <span style={{ color: currentTheme.colors.textPrimary }}>{t(product?.name)}</span>
                        <span style={{ color: currentTheme.colors.accentPrimary }} className="font-bold">${product?.price}</span>
                      </div>
                    )
                  })}
                </div>

                <div className="border-t pt-4 mb-6" style={{ borderColor: `${currentTheme.colors.accentPrimary}30` }}>
                  <div className="flex justify-between text-lg font-bold mb-4">
                    <span style={{ color: currentTheme.colors.textPrimary }}>{lang === 'fr' ? 'Total:' : 'Total:'}</span>
                    <span style={{ color: currentTheme.colors.accentPrimary }}>
                      ${cart.reduce((sum, id) => sum + (products.find(p => p.id === id)?.price || 0), 0).toFixed(2)}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCheckout}
                    className="w-full py-3 rounded-lg font-bold text-white"
                    style={{ backgroundColor: currentTheme.colors.accentPrimary }}
                  >
                    {lang === 'fr' ? 'Payer' : 'Checkout'}
                  </motion.button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </main>
  )
}
