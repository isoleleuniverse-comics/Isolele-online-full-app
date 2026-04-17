"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { X, Zap, Shield, Flame, Crown, Eye, Sword, Music, Star, Droplets } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

// ─── Character Data ───────────────────────────────────────────────────────────
const characters = [
  {
    id: "zaiire-kongo",
    name: "ZAIIRE KONGO",
    title: "The Prince of Kongo",
    origin: "Kingdom of Kongo / Central Africa",
    color: "#F6B800",
    image: "/characters/zaiire-kongo-throne.jpg",
    description:
      "He carries the fire of those who were erased, and the crown of those yet to rise. Forged in the heart of the Kongo Kingdom, the Necklace of Destiny chose Zaiire not because he sought power — but because he was willing to carry its weight. He walks between the spirit world and the present, armed with the electric force of royal lineage and the memory of a kingdom the world tried to erase.",
    powers: ["Royal Lionpard Transformation", "Lightning & Thunder Control", "Time-Walking", "Ancestral Sight"],
    powerIcons: [Crown, Zap, Eye, Shield],
  },
  {
    id: "kimoya-kandake",
    name: "KIMOYA KANDAKE",
    title: "The Rising Kandake",
    origin: "Kingdom of Makanda / Central Africa",
    color: "#C0392B",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0046-7WKAbuvZv3sSAPHzxduIM9oV8vbLfn.jpg",
    description:
      "Deep within Central Africa existed a civilization the world was never meant to know about — spiritually awakened, technologically advanced, protected by the Sacred Flame. Kimoya is its heir. The Rising Kandake does not beg for the throne. She reclaims what was always hers. Warrior, strategist, and queen in waiting, she carries the weight of a hidden empire on her shoulders.",
    powers: ["Sacred Flame Mastery", "Divine Combat", "Royal Authority", "Empire Shielding"],
    powerIcons: [Flame, Sword, Crown, Shield],
  },
  {
    id: "madiba-mandela",
    name: "MADIBA MANDELA",
    title: "The Wise Ancestor of the Deep Roots",
    origin: "Kongo / Bantu Civilization",
    color: "#2E8B57",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0060-fjvA6s0PWIrFYpgRmSxqtJtCg2z0PZ.jpg",
    description:
      "They tried to cage the sun, but the sun learned to shine through bars. No prison can hold light. No fear can silence truth. Madiba Mandela is the living embodiment of African resilience — a warrior sage who carries the wisdom of generations and the unbreakable spirit of a people who refused to disappear. He wields justice like a weapon and peace like armor.",
    powers: ["Ancestral Wisdom", "Spirit Shield", "Truth Sight", "People's Voice"],
    powerIcons: [Eye, Shield, Star, Crown],
    image2: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0015-KCR64wfCzZ0TDqdIlus8JsB6fPp4mq.jpg",
  },
  {
    id: "zaira-mbube",
    name: "ZAIRA MBUBE",
    title: "Queen Mother of the Black Lion / Lioness of the Sky",
    origin: "Katiopa / Sky Realm",
    color: "#D4A017",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0044-rWntBpXYHtd3w6EwtDv3MbkUwWwxol.jpg",
    description:
      "Half lioness, half queen — fully divine. Zaira Mbube is the celestial mother of the Black Lion dynasty, a being of both savage grace and regal authority. Her spotted body is armored in gold. Her eyes hold the memory of every jungle and every sky. She is the protector of royal bloodlines and the last guardian of the ancient lionpard lineage.",
    powers: ["Lionpard Shift", "Sky Command", "Royal Bond", "Predator Senses"],
    powerIcons: [Star, Eye, Crown, Shield],
  },
  {
    id: "mask-of-bapindi",
    name: "THE MASK OF BAPINDI",
    title: "Lord of All African Masks",
    origin: "Bapindi / Kongo Spirit World",
    color: "#8B4513",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0015-KCR64wfCzZ0TDqdIlus8JsB6fPp4mq.jpg",
    description:
      "He does not have a face. He has all faces. The Mask of Bapindi is the oldest living spirit in the ISOLELE universe — a warrior entity who wears the sacred masks of every African civilization. He moves between dimensions, guarding the boundaries between the living and the ancestral. His dreadlocks carry the weight of forgotten kingdoms. His mask is both weapon and identity.",
    powers: ["Dimensional Walking", "Spirit Mastery", "Mask Shift", "Ancestor Channel"],
    powerIcons: [Eye, Zap, Shield, Star],
  },
  {
    id: "kimpa-vita",
    name: "KIMPA VITA",
    title: "The Flame of the Forgotten Queens",
    origin: "Kingdom of Kongo",
    color: "#228B22",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0059-O7aKmrKHSnpfJfkoG3fKLT2bmdspZi.jpg",
    description:
      "You can burn my body — but not the fire that sent me. Kimpa Vita is the eternal prophetess, the woman who stood before empires and refused to kneel. Her golden lantern does not simply illuminate — it exposes. She is rooted in African soil, fed by the ancestors, impossible to extinguish. In the ISOLELE universe, she is the spiritual mother of every warrior who fights not with weapons, but with truth.",
    powers: ["Sacred Flame", "Prophetic Vision", "Root Bond", "Eternal Light"],
    powerIcons: [Flame, Eye, Droplets, Star],
  },
  {
    id: "kina-kin",
    name: "KINA (KIN)",
    title: "Street Queen of Kinshasa",
    origin: "Kinshasa / Congo",
    color: "#1E90FF",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0012-oFW5VKECIKunXnoACjSPODhAohUeRr.jpg",
    description:
      "She didn't wait for a kingdom to crown her. She built her own. Born and raised in Kinshasa, Kina moves through the streets like she owns them — because she does. Her blue locs are her crown, her style is her armor, and her mind is her greatest weapon. She represents the new generation of African power: young, free, and absolutely unstoppable.",
    powers: ["Urban Mastery", "Street Intelligence", "Combat Agility", "Culture Force"],
    powerIcons: [Zap, Eye, Sword, Star],
  },
  {
    id: "likaku",
    name: "LIKAKU KONGOLO",
    title: "Iron Ape of Kongo / Guardian of the Sacred Forest",
    origin: "Sacred Forest of Kongo",
    color: "#CD7F32",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0058-WFXl6BNH7353hEoa8dZfqd2Hoek4os.jpg",
    description:
      "The trees taught me what men forgot. Likaku Kongolo is the guardian of the ancient forest — a royal ape warrior dressed in the colors of ceremony. Bright-eyed, golden-crowned, and draped in red and gold robes, he carries the sacred wisdom of nature that humanity abandoned. In Kongo mythology, the ape is not below man. He is his ancestor. And Likaku is the proof.",
    powers: ["Forest Command", "Ancient Wisdom", "Iron Strength", "Nature Bond"],
    powerIcons: [Shield, Star, Flame, Droplets],
  },
  {
    id: "kongo-spirit",
    name: "THE KONGO SPIRIT",
    title: "Keeper of the Primordial Flame",
    origin: "Ancient Kongo / Spirit Realm",
    color: "#4B0082",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260307-WA0076-ywtdNJDmpYOSuHZFbchOdTBA7YPuF7.jpg",
    description:
      "Before the first kingdom was named, the Kongo Spirit was already watching. A towering entity draped in black dreadlocks — each one a century of memory — the Kongo Spirit is the primordial keeper of ancestral flame. His white mask carries no expression because expression is for those who still need to prove themselves. He has already won every war that ever mattered.",
    powers: ["Primordial Flame", "Memory Keeper", "Spirit Legion", "Void Walk"],
    powerIcons: [Flame, Eye, Shield, Star],
  },
  {
    id: "ganga-zumba",
    name: "KING GANGA ZUMBA",
    title: "The King Who Escaped Time",
    origin: "Quilombo / Brazil-Kongo Diaspora",
    color: "#DAA520",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0042-U3FGzRErAsmW237T4DTDS4mTjDqFPV.jpg",
    description:
      "He was never meant to be free. And yet no chain was ever strong enough to hold him. Ganga Zumba — the first great king of Quilombo dos Palmares — stands as the living symbol of freedom claimed, not given. In the ISOLELE universe, he is reimagined as a modern cultural king: gold chains, money in hand, ancestral scepter, and a grin that says he already knows how this ends.",
    powers: ["Freedom Force", "Quilombo Shield", "Cultural Power", "Gold Alchemy"],
    powerIcons: [Zap, Shield, Star, Crown],
  },
  {
    id: "mokele",
    name: "MOKELE",
    title: "Lord of Kinshasa",
    origin: "Kinshasa / Kingdom of Kongo",
    color: "#4169E1",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260114-WA0025-nygOfWmCGHXEcn115WhgUrjIo3gXUC.jpg",
    description:
      "Mokele is not born a king. He is born into struggle. The streets of Kinshasa teach him before school ever could — where loyalty is fragile, violence is normal, and survival is everything. He rises from nothing. Not as a hero. But as a force. In his sharp blue suit and designer shades, he has rewritten every rule about who deserves power in modern Africa.",
    powers: ["Street Authority", "Urban Control", "Tactical Mind", "Force of Will"],
    powerIcons: [Crown, Eye, Sword, Shield],
  },
  {
    id: "simbira-la-tigressa",
    name: "SIMBIRA LA TIGRESSA",
    title: "The Tiger Warrior of Africa",
    origin: "Katiopa / African Savanna",
    color: "#FF4500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0055-UpNoGP6IGeScn3KNfyvTWl9GPELVZa.jpg",
    description:
      "My stripes are the scars of Africa, the fire of my ancestors transformed into force — flames of memory that no empire can erase. Simbira La Tigressa is Africa's most ferocious female warrior. Her tiger-striped suit is not a costume — it is armor forged from ancestral pain. She fights with the speed of the wild and the precision of a queen who has studied every defeat her people have ever suffered.",
    powers: ["Tiger Speed", "Ancestral Fire", "Combat Mastery", "Jungle Sense"],
    powerIcons: [Zap, Flame, Sword, Eye],
  },
  {
    id: "kimoya-warrior",
    name: "KIMOYA",
    title: "The Lion Warrior Queen",
    origin: "Makanda Dynasty",
    color: "#FFD700",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0013-6Xt165l5rPK1nNYEUoAqZBFN42ioH4.jpg",
    description:
      "She does not wear the lion as a symbol. She commands it as an ally. Kimoya is the ultimate warrior queen of the Makanda Dynasty — golden-armored, lion-shouldered, crescent blade in hand and lion shield at her side. Where Makanda power is inherited, Kimoya's power is earned. Every scar on her body is a battle the empire needed her to win.",
    powers: ["Lion Command", "Sacred Blade", "Dynasty Shield", "War Strategy"],
    powerIcons: [Crown, Sword, Shield, Star],
  },
  {
    id: "zaiko-fashion",
    name: "ZAIKO",
    title: "The Leopard Phantom King of the Streets",
    origin: "Kivu / Kinshasa",
    color: "#DAA520",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260311-WA0026-jI2mhzc6ZvpNUAzVeFPsfvlfls2Au3.jpg",
    description:
      "Born in North Kivu. Forged in Kinshasa. Zaiko was never meant to survive. But survival was never enough. In a world ruled by power, money, and fear, he rises from nothing — leopard print coat, rose-tinted glasses, and the unshakeable calm of a man who knows he cannot be beaten. He is style as power. Presence as dominance. Culture as conquest.",
    powers: ["Shadow Walk", "Leopard Force", "Cultural Dominance", "Street Legend"],
    powerIcons: [Eye, Zap, Star, Crown],
  },
  {
    id: "queen-jameela-califia",
    name: "QUEEN JAMEELA CALIFIA",
    title: "Reina Jameela Califia",
    origin: "California / Afrikan Diaspora",
    color: "#FF8C00",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0056-Dc5BF73BICVQfqVz0aOCEmGuL6Ktyy.jpg",
    description:
      "Before California had a name, it had a queen. Jameela Califia is the original Black queen of the Americas — the woman history tried to erase but legend refused to forget. She carries a spear of pure crystal and wears the Pan-African colors of the continent she carries in her blood. She is the diaspora made divine, the proof that African royalty crossed every ocean and survived every storm.",
    powers: ["Spear of Truth", "Diaspora Bond", "Queen's Authority", "Ocean Force"],
    powerIcons: [Sword, Star, Crown, Droplets],
  },
  {
    id: "zaiire-armor",
    name: "ZAIIRE (ARMORED)",
    title: "The Chosen One — Golden Armor Form",
    origin: "Kingdom of Kongo",
    color: "#FFD700",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0014-vtjBANcCrAt0kQrzcuu6MuRgzqCeps.jpg",
    description:
      "When Zaiire activates the Necklace of Destiny at full power, his form transforms into the Golden Armor — a suit forged from ancestral memory and divine light. The circular chest core glows with the energy of the Congo. His dreadlocks carry the blue markings of chosen ones. This is not just a superhero. This is an entire civilization compressed into one person.",
    powers: ["Divine Armor", "Destiny Core", "Kongo Lightning", "Royal Ascension"],
    powerIcons: [Zap, Flame, Crown, Shield],
  },
  {
    id: "sankuru",
    name: "SANKURU",
    title: "The Boundless Flame of Katiopa",
    origin: "Sankuru / Congo",
    color: "#FF6600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0057-dGONUMMwkXtkpdbMv16h7UlsWP8MIZ.jpg",
    description:
      "Sankuru does not walk into battle. He runs into it — full speed, orange robes flying, sneakers hitting the ground like thunder. A young warrior from the heart of Congo with a warrior's heart and a child's joy, he carries the sacred symbol of his people on his back and the future of the continent in his hands. He is the next generation — unstoppable, fearless, free.",
    powers: ["Boundless Speed", "Sacred Symbol", "Fire Sprint", "Youth Power"],
    powerIcons: [Zap, Flame, Star, Shield],
  },
  {
    id: "zaiko-style",
    name: "ZAIKO (STYLE FORM)",
    title: "The Cultural Emperor",
    origin: "Kivu / Kinshasa",
    color: "#8B6914",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260311-WA0025-T7q4AZobyd3VoeCeLtiSY90QYQF7KW.jpg",
    description:
      "Zaiko in his Style Form is not just dressed — he is armored. The leopard print suit is a declaration. The gold rings are a statement. The sunglasses are a shield. In the ISOLELE universe, Zaiko represents the African man who reclaimed luxury, style, and presence as forms of power. He is not wearing wealth. He is wearing sovereignty.",
    powers: ["Cultural Power", "Leopard Presence", "Gold Mastery", "Style Command"],
    powerIcons: [Crown, Star, Zap, Eye],
  },
  {
    id: "queen-kimpa-archer",
    name: "QUEEN KIMPA VITA",
    title: "La Reine Kimpa — Archer Form",
    origin: "Kingdom of Kongo",
    color: "#B8860B",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260127-WA0006-uY5zh045SdNXZF1wEWPPh1Ikwc6xON.jpg",
    description:
      "In her Archer Form, Kimpa Vita channels the precision of prophecy into every arrow she fires. Her red crown is not decoration — it is a beacon. Her bow is not a weapon — it is a statement that truth always finds its target. She stands as the bridge between the spiritual and the physical, between the queens who came before and the warriors who will come after.",
    powers: ["Prophetic Archery", "Sacred Crown", "Truth Arrow", "Spirit Sight"],
    powerIcons: [Eye, Sword, Star, Flame],
  },
]

// ─── Character Card ────────────────────────────────────────────────────────────
function CharacterCard({ character, onSelect }: { character: typeof characters[0]; onSelect: (c: typeof characters[0]) => void }) {
  const { currentTheme } = useTheme()

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="group cursor-pointer"
      onClick={() => onSelect(character)}
    >
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          border: `1px solid ${character.color}30`,
          backgroundColor: currentTheme.colors.backgroundSecondary,
        }}
      >
        {/* Image */}
        <div className="relative h-80 overflow-hidden">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, transparent 40%, ${character.color}60 80%, ${currentTheme.colors.backgroundSecondary} 100%)`,
            }}
          />
          {/* Hover glow */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ boxShadow: `inset 0 0 60px ${character.color}30` }}
          />
        </div>

        {/* Info */}
        <div className="p-5">
          <p className="text-xs font-bold tracking-widest mb-1" style={{ color: character.color }}>
            {character.origin}
          </p>
          <h3
            className="text-xl font-black tracking-wide mb-1 leading-tight"
            style={{ color: currentTheme.colors.textPrimary }}
          >
            {character.name}
          </h3>
          <p className="text-sm mb-4 line-clamp-1" style={{ color: currentTheme.colors.textSecondary }}>
            {character.title}
          </p>

          {/* Power icons */}
          <div className="flex gap-2 mb-4">
            {character.powerIcons.slice(0, 3).map((Icon, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${character.color}20`, color: character.color }}
              >
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            className="w-full py-2.5 rounded-xl text-sm font-bold tracking-widest transition-colors"
            style={{
              backgroundColor: `${character.color}15`,
              color: character.color,
              border: `1px solid ${character.color}40`,
            }}
            whileHover={{ backgroundColor: character.color, color: "#000" }}
          >
            VIEW PROFILE
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Character Modal ───────────────────────────────────────────────────────────
function CharacterModal({ character, onClose }: { character: typeof characters[0]; onClose: () => void }) {
  const { currentTheme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-3xl rounded-3xl overflow-hidden"
        style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          style={{ backgroundColor: `${character.color}30`, color: character.color }}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <Image
              src={character.image}
              alt={character.name}
              fill
              className="object-cover object-top"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, transparent 60%, ${currentTheme.colors.backgroundSecondary} 100%)`,
              }}
            />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <p className="text-xs font-bold tracking-widest mb-2 uppercase" style={{ color: character.color }}>
              {character.origin}
            </p>
            <h2
              className="text-3xl font-black tracking-wider mb-1 text-balance"
              style={{ color: currentTheme.colors.textPrimary }}
            >
              {character.name}
            </h2>
            <p className="text-sm font-medium mb-4 italic" style={{ color: character.color }}>
              {character.title}
            </p>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              {character.description}
            </p>

            {/* Powers */}
            <div className="mb-6">
              <p className="text-xs font-bold tracking-widest mb-3" style={{ color: character.color }}>
                POWERS & ABILITIES
              </p>
              <div className="grid grid-cols-2 gap-2">
                {character.powers.map((power, i) => {
                  const Icon = character.powerIcons[i]
                  return (
                    <div
                      key={power}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium"
                      style={{ backgroundColor: `${character.color}15`, color: currentTheme.colors.textPrimary }}
                    >
                      {Icon && <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: character.color }} />}
                      {power}
                    </div>
                  )
                })}
              </div>
            </div>

            <Link
              href="/characters"
              className="inline-flex items-center justify-center py-3 px-6 rounded-xl text-sm font-black tracking-widest transition-all"
              style={{ backgroundColor: character.color, color: "#000" }}
            >
              DISCOVER MORE
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function CharactersPage() {
  const { currentTheme } = useTheme()
  const [selectedCharacter, setSelectedCharacter] = useState<typeof characters[0] | null>(null)
  const [filter, setFilter] = useState("all")

  const filters = [
    { id: "all", label: "ALL CHARACTERS" },
    { id: "warrior", label: "WARRIORS" },
    { id: "queen", label: "QUEENS" },
    { id: "king", label: "KINGS" },
    { id: "spirit", label: "SPIRITS" },
  ]

  const filterMap: Record<string, string[]> = {
    all: characters.map((c) => c.id),
    warrior: ["mask-of-bapindi", "kimoya-warrior", "simbira-la-tigressa", "sankuru", "kina-kin", "zaiire-kongo", "zaiire-armor"],
    queen: ["kimoya-kandake", "kimpa-vita", "queen-jameela-califia", "zaira-mbube", "queen-kimpa-archer"],
    king: ["madiba-mandela", "ganga-zumba", "mokele", "zaiko-fashion", "zaiko-style"],
    spirit: ["kongo-spirit", "kimpa-vita", "likaku", "zaiire-kongo"],
  }

  const displayed = filter === "all" ? characters : characters.filter((c) => filterMap[filter]?.includes(c.id))

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      {/* Hero Header */}
      <div
        className="relative py-24 px-4 text-center overflow-hidden"
        style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${200 + i * 80}px`,
                height: `${200 + i * 80}px`,
                border: `1px solid ${currentTheme.colors.accentPrimary}`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-bold tracking-[0.4em] mb-4"
          style={{ color: currentTheme.colors.accentPrimary }}
        >
          ISOLELE UNIVERSE
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-7xl font-black tracking-wider mb-4 text-balance"
          style={{ color: currentTheme.colors.textPrimary }}
        >
          LEGENDARY
          <br />
          <span style={{ color: currentTheme.colors.accentPrimary }}>CHARACTERS</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg max-w-2xl mx-auto text-balance"
          style={{ color: currentTheme.colors.textSecondary }}
        >
          Meet the superheroes, gods, and legendary figures born from the rich tapestry of African folklore and mythology.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-12 mt-10"
        >
          {[
            { label: "Characters", value: `${characters.length}+` },
            { label: "Kingdoms", value: "12+" },
            { label: "Universes", value: "3" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black" style={{ color: currentTheme.colors.accentPrimary }}>
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-0 z-30 py-4 px-4 border-b" style={{
        backgroundColor: currentTheme.colors.background,
        borderColor: `${currentTheme.colors.accentPrimary}20`,
      }}>
        <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className="flex-shrink-0 px-5 py-2 rounded-full text-xs font-bold tracking-widest transition-all"
              style={{
                backgroundColor: filter === f.id ? currentTheme.colors.accentPrimary : `${currentTheme.colors.accentPrimary}10`,
                color: filter === f.id ? "#000" : currentTheme.colors.textSecondary,
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Characters Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayed.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                onSelect={setSelectedCharacter}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCharacter && (
          <CharacterModal
            character={selectedCharacter}
            onClose={() => setSelectedCharacter(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
