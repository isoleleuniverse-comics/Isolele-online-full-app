import {
  Crown,
  Droplets,
  Eye,
  Flame,
  Shield,
  Star,
  Sword,
  Zap,
} from "lucide-react";
import type { Character, CharacterFilter, CharacterProfile } from "./characters.types";

export const characters: Character[] = [
  {
    id: "zaiire-kongo",
    name: "ZAIIRE KONGO",
    title: "The Prince of Kongo and the Necklace of Destiny",
    origin: "Kingdom of Kongo / Central Africa",
    color: "#F6B800",
    alt:"Zaiire Prince of Kongo Black African Demi-God Superhero ISOLELE Comics",
    image: "/public/characters/zaiire-kongo-throne.jpg",
    description:
      "Forged in the heart of Kongo, Zaiire carries ancestral memory and royal force. Chosen by the Necklace of Destiny, he walks between spirit and present to restore what history tried to erase.",
    powers: ["Royal Transformation", "Lightning Control", "Time Walking", "Ancestral Sight"],
    powerIcons: [Crown, Zap, Eye, Shield],
  },
  {
    id: "kimoya-kandake",
    name: "KIMOYA KANDAKE",
    title: "The Rising Kandake",
    origin: "Kingdom of Makanda / Central Africa",
    color: "#C0392B",
    alt:"Kimoya Kandake Warrior Queen Black African Superhero ISOLELE Comics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0046-7WKAbuvZv3sSAPHzxduIM9oV8vbLfn.jpg",
    description:
      "Kimoya is heir to a hidden empire awakened by the Sacred Flame. She does not ask for power. She reclaims it as warrior, strategist, and sovereign.",
    powers: ["Sacred Flame Mastery", "Divine Combat", "Royal Authority", "Empire Shielding"],
    powerIcons: [Flame, Sword, Crown, Shield],
  },
  {
    id: "madiba-mandela",
    name: "MADIBA MANDELA",
    title: "Wise Ancestor of Deep Roots",
    origin: "Kongo / Bantu Civilization",
    color: "#2E8B57",
    alt:"Madiba Mandela Wise Ancestor of Deep Roots Black African Superhero ISOLELE Comics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0060-fjvA6s0PWIrFYpgRmSxqtJtCg2z0PZ.jpg",
    description:
      "A living symbol of resilience and justice, Madiba channels generational wisdom and unbreakable spirit for his people.",
    powers: ["Ancestral Wisdom", "Spirit Shield", "Truth Sight", "People's Voice"],
    powerIcons: [Eye, Shield, Star, Crown],
  },
  {
    id: "zaira-mbube",
    name: "ZAIRA MBUBE",
    title: "Queen Mother of the Black Lion",
    origin: "Katiopa / Sky Realm",
    color: "#D4A017",
    alt:"Zaira Mbube Queen Mother of the Black Lion Black African Superhero ISOLELE Comics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0044-rWntBpXYHtd3w6EwtDv3MbkUwWwxol.jpg",
    description:
      "Half lioness, half queen, fully divine. Zaira protects royal bloodlines and guards the ancient lion lineage.",
    powers: ["Lion Shift", "Sky Command", "Royal Bond", "Predator Senses"],
    powerIcons: [Star, Eye, Crown, Shield],
  },
  {
    id: "mask-of-bapindi",
    name: "THE MASK OF BAPINDI",
    title: "Lord of All African Masks",
    origin: "Bapindi / Kongo Spirit World",
    color: "#8B4513",
    alt:"The Mask of Bapindi Lord of All African Masks Black African Superhero ISOLELE Comics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0015-KCR64wfCzZ0TDqdIlus8JsB6fPp4mq.jpg",
    description:
      "An ancient spirit warrior carrying the sacred masks of civilizations. Guardian of boundaries between living and ancestral realms.",
    powers: ["Dimensional Walking", "Spirit Mastery", "Mask Shift", "Ancestor Channel"],
    powerIcons: [Eye, Zap, Shield, Star],
  },
  {
    id: "kimpa-vita",
    name: "KIMPA VITA",
    title: "Flame of Forgotten Queens",
    origin: "Kingdom of Kongo",
    color: "#228B22",
    alt:"Kimpa Vita Flame of Forgotten Queens Black African Superhero ISOLELE Comics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0059-O7aKmrKHSnpfJfkoG3fKLT2bmdspZi.jpg",
    description:
      "Prophetess, strategist, and spiritual force. Her fire reveals truth and powers every generation that refuses silence.",
    powers: ["Sacred Flame", "Prophetic Vision", "Root Bond", "Eternal Light"],
    powerIcons: [Flame, Eye, Droplets, Star],
  },
  {
    id: "kina-kin",
    name: "KINA (KIN)",
    title: "Street Queen of Kinshasa",
    origin: "Kinshasa / Congo",
    color: "#1E90FF",
    alt:"Kina Kin Street Queen of Kinshasa Black African Superhero ISOLELE Comics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0012-oFW5VKECIKunXnoACjSPODhAohUeRr.jpg",
    description:
      "Urban tactician and cultural icon. Kina represents the new generation of African power: sharp, free, and unstoppable.",
    powers: ["Urban Mastery", "Street Intelligence", "Combat Agility", "Culture Force"],
    powerIcons: [Zap, Eye, Sword, Star],
  },
  {
    id: "likaku",
    name: "LIKAKU KONGOLO",
    title: "Iron Ape of Kongo",
    origin: "Sacred Forest of Kongo",
    color: "#CD7F32",
    alt:"Likaku Kongolo Iron Ape of Kongo Black African Superhero ISOLELE Comics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0058-WFXl6BNH7353hEoa8dZfqd2Hoek4os.jpg",
    description:
      "Guardian of sacred forests and living memory. Likaku channels ancient wisdom and brutal strength in defense of balance.",
    powers: ["Forest Command", "Ancient Wisdom", "Iron Strength", "Nature Bond"],
    powerIcons: [Shield, Star, Flame, Droplets],
  },
  {
    id: "kongo-spirit",
    name: "THE KONGO SPIRIT",
    title: "Keeper of Primordial Flame",
    origin: "Ancient Kongo / Spirit Realm",
    color: "#4B0082",
    alt:"The Kongo Spirit Keeper of Primordial Flame Black African Superhero ISOLELE Comics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260307-WA0076-ywtdNJDmpYOSuHZFbchOdTBA7YPuF7.jpg",
    description:
      "A primordial entity draped in memory and ritual power. The Kongo Spirit keeps the first flame and commands ancestral legions.",
    powers: ["Primordial Flame", "Memory Keeper", "Spirit Legion", "Void Walk"],
    powerIcons: [Flame, Eye, Shield, Star],
  },
  {
    id: "ganga-zumba",
    name: "KING GANGA ZUMBA",
    title: "The King Who Escaped Time",
    origin: "Quilombo / Brazil-Kongo Diaspora",
    color: "#DAA520",
    alt:"King Ganga Zumba The King Who Escaped Time Black African Superhero ISOLELE Comics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0042-U3FGzRErAsmW237T4DTDS4mTjDqFPV.jpg",
    description:
      "A symbol of freedom claimed, never given. Ganga Zumba turns cultural memory into armor and strategy into liberation.",
    powers: ["Freedom Force", "Quilombo Shield", "Cultural Power", "Gold Alchemy"],
    powerIcons: [Zap, Shield, Star, Crown],
  },
  {
    id: "mokele",
    name: "MOKELE",
    title: "Lord of Kinshasa",
    origin: "Kinshasa / Kingdom of Kongo",
    color: "#4169E1",
      alt:"Mokele Lord of Kinshasa Black African Superhero ISOLELE Comics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260114-WA0025-nygOfWmCGHXEcn115WhgUrjIo3gXUC.jpg",
    description:
      "From street survival to total authority, Mokele rises as a force with tactical intelligence and relentless will.",
    powers: ["Street Authority", "Urban Control", "Tactical Mind", "Force of Will"],
    powerIcons: [Crown, Eye, Sword, Shield],
  },
  {
    id: "simbira-la-tigressa",
    name: "SIMBIRA LA TIGRESSA",
    title: "Tiger Warrior of Africa",
    origin: "Katiopa / African Savanna",
    color: "#FF4500",
    alt:"Simbira La Tigressa Tiger Warrior of Africa Black African Superhero ISOLELE Comics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0055-UpNoGP6IGeScn3KNfyvTWl9GPELVZa.jpg",
    description:
      "Ferocious and precise, Simbira turns ancestral pain into disciplined force and battlefield dominance.",
    powers: ["Tiger Speed", "Ancestral Fire", "Combat Mastery", "Jungle Sense"],
    powerIcons: [Zap, Flame, Sword, Eye],
  },
  {
    id: "kimoya-warrior",
    name: "KIMOYA",
    title: "The Lion Warrior Queen",
    origin: "Makanda Dynasty",
    color: "#FFD700",
    alt:"Kimoya The Lion Warrior Queen Black African Superhero ISOLELE Comics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0013-6Xt165l5rPK1nNYEUoAqZBFN42ioH4.jpg",
    description:
      "Golden armored and battle-tested, Kimoya commands lion force and dynasty-level strategy.",
    powers: ["Lion Command", "Sacred Blade", "Dynasty Shield", "War Strategy"],
    powerIcons: [Crown, Sword, Shield, Star],
  },
  {
    id: "zaiko-fashion",
    name: "ZAIKO",
    title: "Leopard Phantom King",
    origin: "Kivu / Kinshasa",
    color: "#DAA520",
    alt:"Zaiko Leopard Phantom King Black African Superhero ISOLELE Comics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260311-WA0026-jI2mhzc6ZvpNUAzVeFPsfvlfls2Au3.jpg",
    description:
      "Style as power, presence as dominance. Zaiko redefines urban sovereignty through cultural force and precision.",
    powers: ["Shadow Walk", "Leopard Force", "Cultural Dominance", "Street Legend"],
    powerIcons: [Eye, Zap, Star, Crown],
  },
  {
    id: "queen-jameela-califia",
    name: "QUEEN JAMEELA CALIFIA",
    title: "Diaspora Sovereign",
    origin: "California / Afrikan Diaspora",
    color: "#FF8C00",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0056-Dc5BF73BICVQfqVz0aOCEmGuL6Ktyy.jpg",
    description:
      "A royal voice across oceans. Jameela unites diaspora memory, ceremonial authority, and elemental power.",
    powers: ["Spear of Truth", "Diaspora Bond", "Queen Authority", "Ocean Force"],
    powerIcons: [Sword, Star, Crown, Droplets],
  },
  {
    id: "zaiire-armor",
    name: "ZAIIRE (ARMORED)",
    title: "Chosen One - Golden Armor Form",
    origin: "Kingdom of Kongo",
    color: "#FFD700",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0014-vtjBANcCrAt0kQrzcuu6MuRgzqCeps.jpg",
    description:
      "In full activation mode, Zaiire's armor channels ancestral memory and divine current through the Destiny Core.",
    powers: ["Divine Armor", "Destiny Core", "Kongo Lightning", "Royal Ascension"],
    powerIcons: [Zap, Flame, Crown, Shield],
  },
  {
    id: "sankuru",
    name: "SANKURU",
    title: "Boundless Flame of Katiopa",
    origin: "Sankuru / Congo",
    color: "#FF6600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0057-dGONUMMwkXtkpdbMv16h7UlsWP8MIZ.jpg",
    description:
      "Fast, fearless, and joyful in battle. Sankuru embodies a new generation of African heroic energy.",
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
      "Luxury, symbolism, and control. In Style Form, Zaiko turns aesthetics into strategic dominance.",
    powers: ["Cultural Power", "Leopard Presence", "Gold Mastery", "Style Command"],
    powerIcons: [Crown, Star, Zap, Eye],
  },
];

export const profileRouteByCharacterId: Partial<Record<string, string>> = {
  mokele: "/characters/mokele",
  "zaiko-style": "/characters/kufulula",
  "zaiko-fashion": "/characters/kufulula",
  "zaiire-kongo": "/characters/zaiire",
  "zaiire-armor": "/characters/zaiire",
  "kimoya-kandake": "/characters/bambula",
  "kimoya-warrior": "/characters/bambula",
};

export const characterFilters: CharacterFilter[] = [
  { id: "all", label: "ALL CHARACTERS" },
  { id: "warrior", label: "WARRIORS" },
  { id: "queen", label: "QUEENS" },
  { id: "king", label: "KINGS" },
  { id: "spirit", label: "SPIRITS" },
];

export const characterFilterMap: Record<string, string[]> = {
  all: characters.map((character) => character.id),
  warrior: ["mask-of-bapindi", "kimoya-warrior", "simbira-la-tigressa", "sankuru", "kina-kin", "zaiire-kongo", "zaiire-armor"],
  queen: ["kimoya-kandake", "kimpa-vita", "queen-jameela-califia", "zaira-mbube"],
  king: ["madiba-mandela", "ganga-zumba", "mokele", "zaiko-fashion", "zaiko-style"],
  spirit: ["kongo-spirit", "kimpa-vita", "likaku", "zaiire-kongo"],
};

export const characterProfiles = {
  zaiire: {
    name: "ZAIIRE",
    title: "The Prince of Kongo",
    origin: "Kingdom of Kongo / Central Africa",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260321_113436-ktAJOL2e0SS0pkTY6aPnn7aBKxr3pq.jpg",
    description:
      "Forged in the heart of Kongo, Zaiire carries the fire of erased kingdoms and the memory of royal bloodlines. Chosen by the Necklace of Destiny, he channels ancestral force to restore what history tried to silence.",
    powers: ["Necklace of Destiny", "Kongo Lightning", "Ancestral Sight", "Royal Transformation"],
  },
  bambula: {
    name: "BAMBULA",
    title: "Child of Rhythm",
    origin: "Kongo Spirit Routes",
    alt:"Bambula Child of Rhythm Black African Superhero ISOLELE Comics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
    description:
      "Before words, there was rhythm. Bambula keeps the sacred pulse alive between spirit and human worlds. He fights not for destruction, but for memory, dignity, and cultural continuity.",
    powers: ["Sacred Drum Resonance", "Spirit Channeling", "Memory Shield", "Rhythm Force"],
  },
  kufulula: {
    name: "KING KUFULULA",
    title: "Visionary Founder",
    origin: "Royal Court of ISOLELE",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0042-U3FGzRErAsmW237T4DTDS4mTjDqFPV.jpg",
    description:
      "Architect of the ISOLELE universe, King Kufulula is the sovereign mind behind a new African mythological empire. He restores narrative sovereignty and transforms memory into legacy.",
    powers: ["Legacy Vision", "Dynasty Command", "Cultural Architecture", "Sovereign Strategy"],
  },
  mokele: {
    name: "MOKELE",
    title: "Crowned by the Streets",
    origin: "Kinshasa / Kingdom of Kongo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260114-WA0025-nygOfWmCGHXEcn115WhgUrjIo3gXUC.jpg",
    description:
      "Born in struggle, sharpened in Kinshasa, Mokele rose from survival to total authority. He embodies tactical intelligence, urban dominance, and the relentless will to redefine power.",
    powers: ["Street Authority", "Urban Control", "Tactical Mind", "Force of Will"],
  },
} as const satisfies Record<string, CharacterProfile>;

export const CHARACTER_SLUGS = ["zaiire", "bambula", "kufulula", "mokele"] as const;
export type CharacterSlug = typeof CHARACTER_SLUGS[number];
