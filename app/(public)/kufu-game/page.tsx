"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Star, Download, Share2, Heart, ChevronRight } from "lucide-react"

const gameDetails = {
  title: "KUFU – The Crown Game",
  subtitle: "ZAIIRE BOOK III",
  rating: 4.8,
  reviews: 2543,
  downloads: "100K+",
  version: "1.0",
  developer: "ISOLELE Studios",
  released: "March 2026",
  size: "145 MB",
  price: "Free",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeux%20-des-cartes-ISOLELE%202026%20copie-1.png-RqaWGnjgEshe1jwMnMTWRFJoVkAA53.jpeg",
  description: `KUFU is rendered in bold, gold 3D lettering with a textured, almost stone-carved quality — evoking ancient African script and royal monuments. Beneath it, "The Crown Game" is written in an elegant gold cursive, signaling both nobility and strategy.

At the bottom, ZAIIRE BOOK III anchors the card game within the broader ISOLELE comic universe, making it a collector's crossover piece.

The three pillars:
• HÉRITAGE — the French word for Heritage, honoring the Pan-African and Kongo roots
• ROYALTY — the central theme of power, lineage, and the crown
• NKUFU YA BAKULU — in Kikongo, meaning "Crown of the Ancestors" — the spiritual soul of the game`,
  features: [
    {
      title: "The ISOLELE Crest",
      description: "The leopard-print shield with the gold ISOLELE crown-shield logo is the visual heart of the card. Surrounded by golden geometric kente-style ring.",
    },
    {
      title: "The Eight Guardians",
      description: "Eight African masks orbit the central crest in a ceremonial circle. Each one represents different ethnic traditions and spiritual archetypes.",
    },
    {
      title: "Ancient African Instruments",
      description: "The background features ghosted, layered compositions of instruments like the Kora, Balafon, Ngoma, and Sanza.",
    },
    {
      title: "Pan-African Frame",
      description: "Bold, repeating triangle and diamond pattern in Red, Black, Gold/Yellow, and Green colors.",
    },
  ],
  whatsNew: [
    "Initial release with 100 collectible cards",
    "Full multiplayer support",
    "Integration with ISOLELE universe",
    "Trading and crafting systems",
  ],
}

export default function KufuGamePage() {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#FFFFFF" }}>
      {/* Header with back button */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center px-6 md:px-8"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(246, 184, 0, 0.2)",
        }}
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/">
          <button className="text-sm font-bold tracking-wider flex items-center gap-2 hover:text-yellow-400 transition-colors">
            ← BACK
          </button>
        </Link>
        <div className="ml-auto">
          <h2 className="text-lg font-bold" style={{ color: "#F6B800" }}>
            KUFU
          </h2>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className="relative pt-[70px] pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 h-96"
          style={{
            background: "linear-gradient(135deg, rgba(246, 184, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Game Image */}
            <motion.div
              className="md:col-span-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-64 h-80 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={gameDetails.image}
                  alt={gameDetails.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                />
              </div>
            </motion.div>

            {/* Game Info */}
            <motion.div
              className="md:col-span-2 flex flex-col justify-center gap-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <span
                  className="inline-block text-xs tracking-widest font-bold mb-2 px-3 py-1 rounded"
                  style={{ backgroundColor: "rgba(246, 184, 0, 0.2)", color: "#FFD000" }}
                >
                  {gameDetails.subtitle}
                </span>
                <h1
                  className="text-5xl md:text-6xl font-bold mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "#F6B800" }}
                >
                  {gameDetails.title}
                </h1>
                <p className="text-gray-400 text-lg">{gameDetails.developer}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill={i < 4 ? "#F6B800" : "currentColor"}
                      color={i < 4 ? "#F6B800" : "rgba(255, 255, 255, 0.3)"}
                    />
                  ))}
                </div>
                <span className="text-sm" style={{ color: "#F6B800" }}>
                  {gameDetails.rating}
                </span>
                <span className="text-gray-500">({gameDetails.reviews.toLocaleString()} reviews)</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-gray-900/50 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Downloads</p>
                  <p className="font-bold">{gameDetails.downloads}</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Size</p>
                  <p className="font-bold">{gameDetails.size}</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Version</p>
                  <p className="font-bold">{gameDetails.version}</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Price</p>
                  <p className="font-bold" style={{ color: "#FFD000" }}>
                    {gameDetails.price}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 flex-wrap">
                <motion.button
                  className="flex-1 py-4 rounded-lg font-bold flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#F6B800", color: "#000" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Download Now
                </motion.button>
                <motion.button
                  className="p-4 rounded-lg border-2"
                  style={{ borderColor: "#F6B800", color: "#F6B800" }}
                  onClick={() => setIsFavorite(!isFavorite)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart size={20} fill={isFavorite ? "#F6B800" : "none"} />
                </motion.button>
                <motion.button
                  className="p-4 rounded-lg border-2"
                  style={{ borderColor: "#F6B800", color: "#F6B800" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 size={20} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Description Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-12 border-t border-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#F6B800" }}>
            About This Game
          </h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            {gameDetails.description}
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-12 border-t border-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#F6B800" }}>
            Game Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gameDetails.features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl"
                style={{ backgroundColor: "rgba(246, 184, 0, 0.05)" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <ChevronRight size={20} style={{ color: "#F6B800" }} />
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What's New */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-12 border-t border-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#F6B800" }}>
            What's New
          </h2>
          <ul className="space-y-3">
            {gameDetails.whatsNew.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#F6B800" }}
                />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* More Info */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-12 border-t border-gray-800 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#F6B800" }}>
            More Information
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Developer", value: gameDetails.developer },
              { label: "Released", value: gameDetails.released },
              { label: "Version", value: gameDetails.version },
              { label: "Size", value: gameDetails.size },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-4 rounded-lg"
              >
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
