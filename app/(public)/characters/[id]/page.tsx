"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"
import { ArrowLeft, Share2, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const charactersData: Record<string, any> = {
  zaire: {
    name: "ZAIÏRE",
    title: "Prince of Kongo",
    color: "#F6B800",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg",
    fullDescription:
      "Zaiïre is the rightful heir to the ancient Kongo Kingdom, chosen by the legendary Collier du Destin (Necklace of Destiny). Born into royal blood and awakened by ancestral spirits, he carries the sacred power of thunder and the weight of a lost empire on his shoulders.",
    powers: ["Thunder Control", "Ancestral Connection", "Royal Authority", "Prophetic Visions"],
    backstory:
      "The son of a forgotten kingdom, Zaiïre never knew his true birthright until the spirits of his ancestors revealed his destiny. With the Collier du Destin, he became a bridge between the mortal world and the realm of the ancestors, tasked with restoring the glory of the Kongo people.",
    relationships: ["Bambula - Warrior Ally", "Kimoya - Ancient Council", "King Kufulula - Distant Ancestor"],
    appearanceFirst: "Book 1: The Prince of Kongo",
  },
  bambula: {
    name: "BAMBULA",
    title: "Guardian of the Savanna",
    color: "#B3541E",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
    fullDescription:
      "Bambula is a fearless warrior of the savanna, mastering the sacred fire and the wild nature of Africa. She is the protector of the land and its people, wielding both ancestral magic and combat prowess.",
    powers: ["Fire Mastery", "Nature Control", "Combat Excellence", "Spirit Animal Bond"],
    backstory:
      "Born in the heart of the African savanna, Bambula was chosen by the spirits of the wild to be their champion. She can commune with lions, leopards, and all creatures of the land, and commands flames that burn with the fury of a thousand suns.",
    relationships: ["Zaiïre - Fellow Chosen", "Mokele - Urban Warrior", "The Spirit Council"],
    appearanceFirst: "Book 1: The Prince of Kongo",
  },
  kimoya: {
    name: "KIMOYA",
    title: "The Rising Kandake",
    color: "#C0392B",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
    fullDescription:
      "Kimoya is a Kandake (ancient Nubian queen-warrior) whose royal court holds the destiny of an entire continent. With wisdom beyond her years and power beyond measure, she rules with both justice and strength.",
    powers: ["Royal Authority", "Strategic Mastery", "Healing Magic", "Empire Control"],
    backstory:
      "From her throne in the ancient kingdom of Meroe, Kimoya emerged as the most powerful Kandake in history. She commands armies of warriors and wields the collective power of generations of queens before her.",
    relationships: ["Zaiïre - The New Prince", "The Ancient Councils", "Continental Leaders"],
    appearanceFirst: "Book 2: The Kandake's Court",
  },
  mokele: {
    name: "MOKELE",
    title: "Crowned by the Streets",
    color: "#4169E1",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mokele-lZToplq4eNUuy08B5V6faXETr5YnKg.jpg",
    fullDescription:
      "Mokele is the heir of urban chaos and ancestral power. Born in the concrete jungles where tradition meets modernity, he bridges the gap between ancient heritage and contemporary struggle.",
    powers: ["Urban Mastery", "Ancestral Heritage", "Street Wisdom", "Dimensional Sight"],
    backstory:
      "Growing up in the streets, Mokele discovered that his bloodline traced back to forgotten kings. He learned to channel the power of his ancestors through the modern world, becoming a guardian for the youth of his people.",
    relationships: ["Zaiïre - Royal Connection", "King Kufulula - Ancestor", "The Street Community"],
    appearanceFirst: "Book 3: Crowned by the Streets",
  },
  kufulula: {
    name: "KING KUFULULA",
    title: "The Ancestral King",
    color: "#8B6914",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/King%20kufulula-1pEeYE9t1QYruZhNooZuPw7Nkd1A8l.jpg",
    fullDescription:
      "King Kufulula is a legendary ancestor who rules over New York and protects the royal lineage of ISOLELE. Neither fully alive nor fully departed, he exists between worlds to guide his chosen ones.",
    powers: ["Ancestral Authority", "Spirit Travel", "Historical Knowledge", "Bloodline Protection"],
    backstory:
      "Once a great king of Africa, Kufulula refused to fade into oblivion. His spirit anchored itself in New York, where a new generation of his descendants discovered their power. Now he guides them from beyond the veil.",
    relationships: ["All the Chosen Ones", "The Ancestor Realm", "Future Generations"],
    appearanceFirst: "Book 1: The Prince of Kongo (Spirit Form)",
  },
  ensemble: {
    name: "THE ISOLELE ASSEMBLY",
    title: "The Chosen Ones United",
    color: "#9932CC",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg",
    fullDescription:
      "When all the heroes stand together, their combined power becomes unstoppable. The ISOLELE Assembly represents the ultimate destiny of the chosen ones, united by blood, duty, and heritage.",
    powers: ["Combined Strength", "Perfect Harmony", "Destiny Fulfillment", "Collective Wisdom"],
    backstory:
      "Destiny has woven these heroes together. Whether by blood, choice, or fate, they form an unbreakable bond. When united, they become something greater than themselves, a force that can reshape worlds.",
    relationships: ["All Characters", "The Spirit Council", "The People of Africa"],
    appearanceFirst: "Every Book",
  },
}

export default function CharacterPage({ params }: { params: { id: string } }) {
  const character = charactersData[params.id as keyof typeof charactersData]
  const { currentTheme } = useTheme()
  const { t } = useLanguage()
  const [isLiked, setIsLiked] = useState(false)

  if (!character) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: currentTheme.colors.background }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: currentTheme.colors.textPrimary }}>
            Character Not Found
          </h1>
          <Link href="/characters">
            <button className="px-6 py-3 rounded-lg" style={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}>
              Back to Characters
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: currentTheme.colors.background, minHeight: "100vh" }}>
      {/* Header with back button */}
      <div className="sticky top-0 z-40 px-4 sm:px-6 lg:px-8 py-4" style={{ backgroundColor: `${currentTheme.colors.background}95`, backdropFilter: "blur(10px)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/characters">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
              style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary }}
              whileHover={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}
            >
              <ArrowLeft size={20} />
              Back
            </motion.button>
          </Link>
          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => setIsLiked(!isLiked)}
              className="p-3 rounded-lg transition-all"
              style={{ backgroundColor: `${character.color}20`, color: character.color }}
              whileHover={{ scale: 1.1 }}
            >
              <Heart size={20} fill={isLiked ? character.color : "none"} />
            </motion.button>
            <motion.button
              className="p-3 rounded-lg transition-all"
              style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary }}
              whileHover={{ scale: 1.1 }}
            >
              <Share2 size={20} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div
              className="relative w-full max-w-md h-96 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: currentTheme.colors.backgroundSecondary,
                border: `2px solid ${character.color}40`,
                boxShadow: `0 0 40px ${character.color}20`,
              }}
            >
              <Image
                src={character.image}
                alt={character.name}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Info section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <motion.span
                className="inline-block px-4 py-2 rounded-full text-sm font-bold tracking-wider mb-4"
                style={{ backgroundColor: `${character.color}20`, color: character.color }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {character.title}
              </motion.span>
              <h1 className="text-5xl font-black tracking-wider mb-4" style={{ color: currentTheme.colors.textPrimary }}>
                {character.name}
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
                {character.fullDescription}
              </p>
            </div>

            {/* Quick info boxes */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: `${character.color}10`,
                  border: `1px solid ${character.color}30`,
                }}
              >
                <p className="text-xs font-semibold tracking-wider mb-2" style={{ color: character.color }}>
                  FIRST APPEARANCE
                </p>
                <p className="font-bold" style={{ color: currentTheme.colors.textPrimary }}>
                  {character.appearanceFirst}
                </p>
              </div>
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: `${currentTheme.colors.accentPrimary}10`,
                  border: `1px solid ${currentTheme.colors.accentPrimary}30`,
                }}
              >
                <p className="text-xs font-semibold tracking-wider mb-2" style={{ color: currentTheme.colors.accentPrimary }}>
                  STATUS
                </p>
                <p className="font-bold" style={{ color: currentTheme.colors.textPrimary }}>
                  Active
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Powers section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-black tracking-wider mb-8" style={{ color: currentTheme.colors.textPrimary }}>
            Powers & Abilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {character.powers.map((power: string, index: number) => (
              <motion.div
                key={power}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="p-4 rounded-lg text-center"
                style={{
                  backgroundColor: `${character.color}10`,
                  border: `1px solid ${character.color}30`,
                }}
              >
                <p className="font-bold" style={{ color: currentTheme.colors.textPrimary }}>
                  {power}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Backstory section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-black tracking-wider mb-6" style={{ color: currentTheme.colors.textPrimary }}>
            Backstory
          </h2>
          <div
            className="p-8 rounded-2xl"
            style={{
              backgroundColor: currentTheme.colors.backgroundSecondary,
              border: `1px solid ${character.color}30`,
            }}
          >
            <p className="text-lg leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
              {character.backstory}
            </p>
          </div>
        </motion.div>

        {/* Relationships section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-black tracking-wider mb-8" style={{ color: currentTheme.colors.textPrimary }}>
            Relationships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {character.relationships.map((relationship: string, index: number) => (
              <motion.div
                key={relationship}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: currentTheme.colors.backgroundSecondary,
                  border: `1px solid ${currentTheme.colors.accentPrimary}30`,
                }}
              >
                <p className="text-lg font-semibold" style={{ color: currentTheme.colors.textPrimary }}>
                  {relationship}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link href="/books">
            <motion.button
              className="px-8 py-4 rounded-lg font-bold tracking-wider text-lg"
              style={{ backgroundColor: character.color, color: currentTheme.colors.background }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read Their Story
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
