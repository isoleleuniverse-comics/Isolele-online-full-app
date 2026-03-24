"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { useTheme } from "@/lib/theme-context"
import { ArrowLeft, Star, Users, Clock, Download, ShoppingCart } from "lucide-react"

const GAME_DETAILS: Record<string, any> = {
  "official-game": {
    title: "The Official Game of the Isolele Universe",
    subtitle: "Strategic Card Game",
    rating: 4.9,
    reviews: 2543,
    price: 24.99,
    players: "2-4 Players",
    age: "Ages 8+",
    duration: "45-90 min",
    category: "Card Game",
    description: `The official strategic card game of the ISOLELE universe brings characters from all books together. Deploy your champions, master ancient powers, and claim victory through strategy and destiny.`,
    features: [
      { en: "100+ Unique Cards", fr: "100+ Cartes Uniques" },
      { en: "4 Character Decks", fr: "4 Decks de Personnages" },
      { en: "Expandable Universe", fr: "Univers Extensible" },
      { en: "Multi-language Support", fr: "Support Multilingue" },
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260304-WA0012-XSCUSyYtBnqRoFkU9Ubd5qRihh3IXm.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeux%20-des-cartes-ISOLELE%202026%20copie-1.png-ifvBiGyVajqX0jXvhJQOH1k83wp5KC.jpeg",
    ],
    developer: "ISOLELE Studios",
    platform: ["Physical", "Digital"],
  },
  "kufu-crown": {
    title: "KUFU – The Crown Game",
    subtitle: "Ludo Strategy Board Game",
    rating: 4.8,
    reviews: 1876,
    price: 34.99,
    players: "2-4 Players",
    age: "Ages 8+",
    duration: "30-60 min",
    category: "Board Game",
    description: `KUFU Ludo is an immersive strategy game rooted in African royal traditions. Navigate the sacred paths of four kingdoms, deploy your warriors, and claim the Crown of the Ancestors. Every element carries deep cultural symbolism inspired by Kongo cosmology.`,
    features: [
      { en: "4 Clan Kingdoms", fr: "4 Royaumes de Clans" },
      { en: "Sacred Board Design", fr: "Design de Plateau Sacré" },
      { en: "Clan Powers", fr: "Pouvoirs de Clan" },
      { en: "Collectible Pawns", fr: "Pions Collectionnables" },
    ],
    images: [
      "/games/kufu-card.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260321-WA0109-9s94qq7rKsoOA821sZPTln8pZCy4vi.jpg",
    ],
    developer: "ISOLELE Studios",
    platform: ["Physical", "Digital"],
  },
  "makanda-quest": {
    title: "Makanda Quest",
    subtitle: "Adventure RPG",
    rating: 4.7,
    reviews: 1543,
    price: 19.99,
    players: "1+ Players",
    age: "Ages 10+",
    duration: "Ongoing",
    category: "RPG",
    description: `Explore the lost Makanda kingdom in this immersive role-playing adventure. Uncover ancient secrets, master ancestral powers, and restore the glory of a forgotten realm.`,
    features: [
      { en: "Rich Story Campaign", fr: "Campagne d'Histoire Riche" },
      { en: "Ancestral Powers", fr: "Pouvoirs Ancestraux" },
      { en: "Kingdom Exploration", fr: "Exploration du Royaume" },
      { en: "Multiplayer Mode", fr: "Mode Multijoueur" },
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CERCLE-ISOLELE%202026%20copie.png-63QN4pp7BsSYA3UxbGCI8Ymq6QlgiM.jpeg",
    ],
    developer: "ISOLELE Creative Labs",
    platform: ["Digital"],
  },
}

export default function GameDetailPage({ params }: { params: { id: string } }) {
  const { currentLanguage } = useLanguage()
  const { currentTheme } = useTheme()
  const lang = currentLanguage.code

  const game = GAME_DETAILS[params.id]

  if (!game) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: currentTheme.colors.background }}>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ color: currentTheme.colors.textPrimary }}>
            {lang === "fr" ? "Jeu Non Trouvé" : "Game Not Found"}
          </h1>
          <Link href="/games">
            <button className="px-6 py-3 rounded-lg font-bold" style={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}>
              {lang === "fr" ? "Retour aux Jeux" : "Back to Games"}
            </button>
          </Link>
        </div>
      </main>
    )
  }

  const t = (obj: any) => {
    if (typeof obj === "string") return obj
    return obj[lang] || obj.en
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: currentTheme.colors.background }}>
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <Link href="/games" className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} style={{ color: currentTheme.colors.accentPrimary }} />
          <span style={{ color: currentTheme.colors.textSecondary }}>
            {lang === "fr" ? "Retour aux Jeux" : "Back to Games"}
          </span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-96 rounded-2xl overflow-hidden" style={{ border: `2px solid ${currentTheme.colors.accentPrimary}30` }}>
              <Image
                src={game.images[0]}
                alt={game.title}
                fill
                className="object-cover"
              />
            </div>
            {game.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {game.images.slice(1).map((img: string, idx: number) => (
                  <div key={idx} className="relative h-24 rounded-lg overflow-hidden" style={{ border: `1px solid ${currentTheme.colors.accentPrimary}20` }}>
                    <Image
                      src={img}
                      alt={`${game.title} ${idx + 2}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-sm font-bold tracking-wider" style={{ color: currentTheme.colors.accentPrimary }}>
              {game.category}
            </span>
            <h1 className="text-5xl font-black mt-2 mb-2" style={{ color: currentTheme.colors.textPrimary }}>
              {game.title}
            </h1>
            <p className="text-lg mb-6" style={{ color: currentTheme.colors.textSecondary }}>
              {game.subtitle}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Star size={20} fill={currentTheme.colors.accentPrimary} style={{ color: currentTheme.colors.accentPrimary }} />
                <span className="text-2xl font-bold" style={{ color: currentTheme.colors.textPrimary }}>
                  {game.rating}
                </span>
              </div>
              <span style={{ color: currentTheme.colors.textSecondary }}>
                {game.reviews.toLocaleString()} {lang === "fr" ? "avis" : "reviews"}
              </span>
            </div>

            {/* Game Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Users, label: game.players },
                { icon: Clock, label: game.duration },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <item.icon size={20} style={{ color: currentTheme.colors.accentPrimary }} />
                  <span style={{ color: currentTheme.colors.textSecondary }}>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Price & CTA */}
            <div className="space-y-4">
              <div className="text-4xl font-bold" style={{ color: currentTheme.colors.accentPrimary }}>
                ${game.price}
              </div>
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
                  <ShoppingCart size={20} />
                  {lang === "fr" ? "ACHETER" : "GET GAME"}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Description & Features */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6" style={{ color: currentTheme.colors.textPrimary }}>
              {lang === "fr" ? "À Propos du Jeu" : "About the Game"}
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: currentTheme.colors.textSecondary }}>
              {game.description}
            </p>
            <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
              {lang === "fr" ? "Développeur:" : "Developer:"} <strong>{game.developer}</strong>
            </p>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8"
            style={{ backgroundColor: currentTheme.colors.backgroundSecondary, border: `2px solid ${currentTheme.colors.accentPrimary}20` }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: currentTheme.colors.textPrimary }}>
              {lang === "fr" ? "Caractéristiques" : "Features"}
            </h3>
            <div className="space-y-4">
              {game.features.map((feature: any, idx: number) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: currentTheme.colors.accentPrimary }} />
                  <span style={{ color: currentTheme.colors.textSecondary }}>{t(feature)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
