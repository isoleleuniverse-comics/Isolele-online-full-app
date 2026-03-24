"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { useTheme } from "@/lib/theme-context"
import { Play, Star, Users, Clock, GamepadIcon } from "lucide-react"
import { getGames } from "@/lib/actions/games"

export default function GamesPage() {
  const { currentLanguage } = useLanguage()
  const { currentTheme } = useTheme()
  const [isLoading, setIsLoading] = useState(true)
  const [games, setGames] = useState<any[]>([])
  const lang = currentLanguage.code

  const t = (obj: any) => {
    if (typeof obj === "string") return obj
    return obj[lang] || obj.en
  }

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await getGames()
        if (data) {
          setGames(data)
        } else {
          // Fallback to default games if Supabase not ready
          setGames([
            {
              id: "kufu-crown",
              title: "KUFU",
              slug: "kufu-the-crown-game",
              subtitle: { en: "The Crown Game", fr: "Le Jeu de la Couronne" },
              image_url: "/games/kufu-card.jpg",
              rating: 4.8,
              players: "2-6",
              category: { en: "Card Game", fr: "Jeu de Cartes" },
              description: {
                en: "KUFU Ludo - An immersive strategy game rooted in African royal traditions.",
                fr: "KUFU Ludo - Un jeu de stratégie immersif enraciné dans les traditions royales africaines."
              }
            },
            {
              id: "zaiire-conquest",
              title: "ZAIIRE CONQUEST",
              slug: "zaiire-conquest",
              subtitle: { en: "Empire Building", fr: "Construction d'Empire" },
              image_url: "/games/zaiire-conquest.jpg",
              rating: 4.6,
              players: "1-4",
              category: { en: "Strategy", fr: "Stratégie" },
              description: {
                en: "Build your African empire through strategy and diplomacy.",
                fr: "Construisez votre empire africain par la stratégie et la diplomatie."
              }
            },
            {
              id: "makanda-quest",
              title: "MAKANDA MYSTERIES",
              slug: "makanda-quest",
              subtitle: { en: "Cooperative Adventure", fr: "Aventure Coopérative" },
              image_url: "/games/makanda-mysteries.jpg",
              rating: 4.7,
              players: "2-5",
              category: { en: "Puzzle", fr: "Puzzle" },
              description: {
                en: "Uncover the secrets of the lost Makanda empire.",
                fr: "Découvrez les secrets de l'empire perdu de Makanda."
              }
            }
          ])
        }
      } catch (error) {
        console.error("Error loading games:", error)
      }
      
      const timer = setTimeout(() => setIsLoading(false), 3000)
      return () => clearTimeout(timer)
    }

    loadGames()
  }, [])

  return (
    <main className="min-h-screen" style={{ backgroundColor: currentTheme.colors.background }}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: currentTheme.colors.background }}
          >
            <div className="relative w-64 h-64 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <Image
                  src="/games/game-loading.jpg"
                  alt="Loading"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute text-center"
              >
                <p className="text-lg font-bold tracking-wider" style={{ color: currentTheme.colors.accentPrimary }}>
                  LOADING...
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-wider" style={{ color: currentTheme.colors.textPrimary }}>
              {lang === "fr" ? "JEUX ISOLELE" : "ISOLELE GAMES"}
            </h1>
            <p className="text-xl" style={{ color: currentTheme.colors.textSecondary }}>
              {lang === "fr" 
                ? "Explorez l'univers à travers les jeux stratégiques et immersifs d'Isolele"
                : "Experience the ISOLELE universe through strategic and immersive gameplay"}
            </p>
          </motion.div>

          {/* Games Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={game.id || game.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <Link href={`/games/${game.id}`}>
                  <div
                    className="rounded-2xl overflow-hidden cursor-pointer relative group"
                    style={{ border: `2px solid ${currentTheme.colors.accentPrimary}30` }}
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden bg-gray-900">
                      <Image
                        src={game.image_url || game.image}
                        alt={t(game.title)}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div
                      className="p-6 relative z-10"
                      style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-bold mb-1" style={{ color: currentTheme.colors.accentPrimary }}>
                            {t(game.title)}
                          </h3>
                          <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                            {t(game.subtitle)}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star size={16} fill={currentTheme.colors.accentPrimary} style={{ color: currentTheme.colors.accentPrimary }} />
                          <span className="text-sm font-bold" style={{ color: currentTheme.colors.accentPrimary }}>
                            {game.rating}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm mb-4 leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
                        {t(game.description)}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs mb-6">
                        <div className="flex items-center gap-1" style={{ color: currentTheme.colors.textSecondary }}>
                          <Users size={14} />
                          {game.players}
                        </div>
                        <span style={{ color: currentTheme.colors.accentPrimary }}>
                          {t(game.category)}
                        </span>
                      </div>

                      {/* CTA */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 rounded-lg font-bold tracking-wider flex items-center justify-center gap-2 transition-all"
                        style={{
                          backgroundColor: currentTheme.colors.accentPrimary,
                          color: currentTheme.colors.background
                        }}
                      >
                        <Play size={16} />
                        {lang === "fr" ? "DÉCOUVRIR" : "DISCOVER"}
                      </motion.button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div
              className="p-12 rounded-2xl"
              style={{ backgroundColor: `${currentTheme.colors.accentPrimary}15`, border: `2px solid ${currentTheme.colors.accentPrimary}30` }}
            >
              <GamepadIcon size={48} style={{ color: currentTheme.colors.accentPrimary }} className="mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4" style={{ color: currentTheme.colors.textPrimary }}>
                {lang === "fr" ? "Prêt à Jouer?" : "Ready to Play?"}
              </h2>
              <p className="mb-8 text-lg" style={{ color: currentTheme.colors.textSecondary }}>
                {lang === "fr"
                  ? "Chaque jeu Isolele est conçu pour immersion et stratégie. Choisissez votre aventure."
                  : "Every ISOLELE game is designed for immersion and strategy. Choose your adventure."}
              </p>
              <Link href="/shop" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg font-bold tracking-wider"
                  style={{
                    backgroundColor: currentTheme.colors.accentPrimary,
                    color: currentTheme.colors.background
                  }}
                >
                  {lang === "fr" ? "VISITER LA BOUTIQUE" : "VISIT SHOP"}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
