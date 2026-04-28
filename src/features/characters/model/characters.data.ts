import {
  Crown, Droplets, Eye, Flame, Shield, Star, Sword, Zap,
} from "lucide-react";
import type {
  Character, CharacterFilter, CharacterProfile, CharactersPageContent,
} from "./characters.types";

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1 — locale-independent base (ids, images, colors, powerIcons)
// ─────────────────────────────────────────────────────────────────────────────
interface CharacterBase {
  id: string;
  name: string;
  image: string;
  alt?: string;
  color: string;
  powerIcons: typeof Crown[];
}

const characterBaseList: CharacterBase[] = [
  { id: "zaiire-kongo", name: "ZAIIRE KONGO", color: "#F6B800", powerIcons: [Crown, Zap, Eye, Shield], image: "/public/characters/zaiire-kongo-throne.jpg", alt: "Zaiire Prince of Kongo Black African Demi-God Superhero ISOLELE Comics" },
  { id: "kimoya-kandake", name: "KIMOYA KANDAKE", color: "#C0392B", powerIcons: [Flame, Sword, Crown, Shield], image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0046-7WKAbuvZv3sSAPHzxduIM9oV8vbLfn.jpg", alt: "Kimoya Kandake Warrior Queen Black African Superhero ISOLELE Comics" },
  { id: "madiba-mandela", name: "MADIBA MANDELA", color: "#2E8B57", powerIcons: [Eye, Shield, Star, Crown], image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0060-fjvA6s0PWIrFYpgRmSxqtJtCg2z0PZ.jpg", alt: "Madiba Mandela Wise Ancestor of Deep Roots Black African Superhero ISOLELE Comics" },
  { id: "zaira-mbube", name: "ZAIRA MBUBE", color: "#D4A017", powerIcons: [Star, Eye, Crown, Shield], image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0044-rWntBpXYHtd3w6EwtDv3MbkUwWwxol.jpg", alt: "Zaira Mbube Queen Mother of the Black Lion Black African Superhero ISOLELE Comics" },
  { id: "mask-of-bapindi", name: "THE MASK OF BAPINDI", color: "#8B4513", powerIcons: [Eye, Zap, Shield, Star], image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0015-KCR64wfCzZ0TDqdIlus8JsB6fPp4mq.jpg", alt: "The Mask of Bapindi Lord of All African Masks Black African Superhero ISOLELE Comics" },
  { id: "kimpa-vita", name: "KIMPA VITA", color: "#228B22", powerIcons: [Flame, Eye, Droplets, Star], image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0059-O7aKmrKHSnpfJfkoG3fKLT2bmdspZi.jpg", alt: "Kimpa Vita Flame of Forgotten Queens Black African Superhero ISOLELE Comics" },
  { id: "kina-kin", name: "KINA (KIN)", color: "#1E90FF", powerIcons: [Zap, Eye, Sword, Star], image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0012-oFW5VKECIKunXnoACjSPODhAohUeRr.jpg", alt: "Kina Kin Street Queen of Kinshasa Black African Superhero ISOLELE Comics" },
  { id: "likaku", name: "LIKAKU KONGOLO", color: "#CD7F32", powerIcons: [Shield, Star, Flame, Droplets], image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0058-WFXl6BNH7353hEoa8dZfqd2Hoek4os.jpg", alt: "Likaku Kongolo Iron Ape of Kongo Black African Superhero ISOLELE Comics" },
  { id: "kongo-spirit", name: "THE KONGO SPIRIT", color: "#4B0082", powerIcons: [Flame, Eye, Shield, Star], image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260307-WA0076-ywtdNJDmpYOSuHZFbchOdTBA7YPuF7.jpg", alt: "The Kongo Spirit Keeper of Primordial Flame Black African Superhero ISOLELE Comics" },
  { id: "ganga-zumba", name: "KING GANGA ZUMBA", color: "#DAA520", powerIcons: [Zap, Shield, Star, Crown], image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0042-U3FGzRErAsmW237T4DTDS4mTjDqFPV.jpg", alt: "King Ganga Zumba The King Who Escaped Time Black African Superhero ISOLELE Comics" },
  { id: "mokele", name: "MOKELE", color: "#4169E1", powerIcons: [Crown, Eye, Sword, Shield], image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260114-WA0025-nygOfWmCGHXEcn115WhgUrjIo3gXUC.jpg", alt: "Mokele Lord of Kinshasa Black African Superhero ISOLELE Comics" },
  { id: "simbira-la-tigressa", name: "SIMBIRA LA TIGRESSA", color: "#FF4500", powerIcons: [Zap, Flame, Sword, Eye], image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0055-UpNoGP6IGeScn3KNfyvTWl9GPELVZa.jpg", alt: "Simbira La Tigressa Tiger Warrior of Africa Black African Superhero ISOLELE Comics" },
  { id: "kimoya-warrior", name: "KIMOYA", color: "#FFD700", powerIcons: [Crown, Sword, Shield, Star], image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0013-6Xt165l5rPK1nNYEUoAqZBFN42ioH4.jpg", alt: "Kimoya The Lion Warrior Queen Black African Superhero ISOLELE Comics" },
  { id: "zaiko-fashion", name: "ZAIKO", color: "#DAA520", powerIcons: [Eye, Zap, Star, Crown], image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260311-WA0026-jI2mhzc6ZvpNUAzVeFPsfvlfls2Au3.jpg", alt: "Zaiko Leopard Phantom King Black African Superhero ISOLELE Comics" },
  { id: "queen-jameela-califia", name: "QUEEN JAMEELA CALIFIA", color: "#FF8C00", powerIcons: [Sword, Star, Crown, Droplets], image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0056-Dc5BF73BICVQfqVz0aOCEmGuL6Ktyy.jpg" },
  { id: "zaiire-armor", name: "ZAIIRE (ARMORED)", color: "#FFD700", powerIcons: [Zap, Flame, Crown, Shield], image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0014-vtjBANcCrAt0kQrzcuu6MuRgzqCeps.jpg" },
  { id: "sankuru", name: "SANKURU", color: "#FF6600", powerIcons: [Zap, Flame, Star, Shield], image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0057-dGONUMMwkXtkpdbMv16h7UlsWP8MIZ.jpg" },
  { id: "zaiko-style", name: "ZAIKO (STYLE FORM)", color: "#8B6914", powerIcons: [Crown, Star, Zap, Eye], image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260311-WA0025-T7q4AZobyd3VoeCeLtiSY90QYQF7KW.jpg" },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2 — locale-dependent character text
// ─────────────────────────────────────────────────────────────────────────────
type CharacterLocale = { origin: string; title: string; description: string; powers: string[] };

const characterLocalizedText: Record<"en" | "fr", Record<string, CharacterLocale>> = {
  en: {
    "zaiire-kongo": { origin: "Kingdom of Kongo / Central Africa", title: "The Prince of Kongo and the Necklace of Destiny", description: "Forged in the heart of Kongo, Zaiire carries ancestral memory and royal force. Chosen by the Necklace of Destiny, he walks between spirit and present to restore what history tried to erase.", powers: ["Royal Transformation", "Lightning Control", "Time Walking", "Ancestral Sight"] },
    "kimoya-kandake": { origin: "Kingdom of Makanda / Central Africa", title: "The Rising Kandake", description: "Kimoya is heir to a hidden empire awakened by the Sacred Flame. She does not ask for power. She reclaims it as warrior, strategist, and sovereign.", powers: ["Sacred Flame Mastery", "Divine Combat", "Royal Authority", "Empire Shielding"] },
    "madiba-mandela": { origin: "Kongo / Bantu Civilization", title: "Wise Ancestor of Deep Roots", description: "A living symbol of resilience and justice, Madiba channels generational wisdom and unbreakable spirit for his people.", powers: ["Ancestral Wisdom", "Spirit Shield", "Truth Sight", "People's Voice"] },
    "zaira-mbube": { origin: "Katiopa / Sky Realm", title: "Queen Mother of the Black Lion", description: "Half lioness, half queen, fully divine. Zaira protects royal bloodlines and guards the ancient lion lineage.", powers: ["Lion Shift", "Sky Command", "Royal Bond", "Predator Senses"] },
    "mask-of-bapindi": { origin: "Bapindi / Kongo Spirit World", title: "Lord of All African Masks", description: "An ancient spirit warrior carrying the sacred masks of civilizations. Guardian of boundaries between living and ancestral realms.", powers: ["Dimensional Walking", "Spirit Mastery", "Mask Shift", "Ancestor Channel"] },
    "kimpa-vita": { origin: "Kingdom of Kongo", title: "Flame of Forgotten Queens", description: "Prophetess, strategist, and spiritual force. Her fire reveals truth and powers every generation that refuses silence.", powers: ["Sacred Flame", "Prophetic Vision", "Root Bond", "Eternal Light"] },
    "kina-kin": { origin: "Kinshasa / Congo", title: "Street Queen of Kinshasa", description: "Urban tactician and cultural icon. Kina represents the new generation of African power: sharp, free, and unstoppable.", powers: ["Urban Mastery", "Street Intelligence", "Combat Agility", "Culture Force"] },
    "likaku": { origin: "Sacred Forest of Kongo", title: "Iron Ape of Kongo", description: "Guardian of sacred forests and living memory. Likaku channels ancient wisdom and brutal strength in defense of balance.", powers: ["Forest Command", "Ancient Wisdom", "Iron Strength", "Nature Bond"] },
    "kongo-spirit": { origin: "Ancient Kongo / Spirit Realm", title: "Keeper of Primordial Flame", description: "A primordial entity draped in memory and ritual power. The Kongo Spirit keeps the first flame and commands ancestral legions.", powers: ["Primordial Flame", "Memory Keeper", "Spirit Legion", "Void Walk"] },
    "ganga-zumba": { origin: "Quilombo / Brazil-Kongo Diaspora", title: "The King Who Escaped Time", description: "A symbol of freedom claimed, never given. Ganga Zumba turns cultural memory into armor and strategy into liberation.", powers: ["Freedom Force", "Quilombo Shield", "Cultural Power", "Gold Alchemy"] },
    "mokele": { origin: "Kinshasa / Kingdom of Kongo", title: "Lord of Kinshasa", description: "From street survival to total authority, Mokele rises as a force with tactical intelligence and relentless will.", powers: ["Street Authority", "Urban Control", "Tactical Mind", "Force of Will"] },
    "simbira-la-tigressa": { origin: "Katiopa / African Savanna", title: "Tiger Warrior of Africa", description: "Ferocious and precise, Simbira turns ancestral pain into disciplined force and battlefield dominance.", powers: ["Tiger Speed", "Ancestral Fire", "Combat Mastery", "Jungle Sense"] },
    "kimoya-warrior": { origin: "Makanda Dynasty", title: "The Lion Warrior Queen", description: "Golden armored and battle-tested, Kimoya commands lion force and dynasty-level strategy.", powers: ["Lion Command", "Sacred Blade", "Dynasty Shield", "War Strategy"] },
    "zaiko-fashion": { origin: "Kivu / Kinshasa", title: "Leopard Phantom King", description: "Style as power, presence as dominance. Zaiko redefines urban sovereignty through cultural force and precision.", powers: ["Shadow Walk", "Leopard Force", "Cultural Dominance", "Street Legend"] },
    "queen-jameela-califia": { origin: "California / Afrikan Diaspora", title: "Diaspora Sovereign", description: "A royal voice across oceans. Jameela unites diaspora memory, ceremonial authority, and elemental power.", powers: ["Spear of Truth", "Diaspora Bond", "Queen Authority", "Ocean Force"] },
    "zaiire-armor": { origin: "Kingdom of Kongo", title: "Chosen One - Golden Armor Form", description: "In full activation mode, Zaiire's armor channels ancestral memory and divine current through the Destiny Core.", powers: ["Divine Armor", "Destiny Core", "Kongo Lightning", "Royal Ascension"] },
    "sankuru": { origin: "Sankuru / Congo", title: "Boundless Flame of Katiopa", description: "Fast, fearless, and joyful in battle. Sankuru embodies a new generation of African heroic energy.", powers: ["Boundless Speed", "Sacred Symbol", "Fire Sprint", "Youth Power"] },
    "zaiko-style": { origin: "Kivu / Kinshasa", title: "The Cultural Emperor", description: "Luxury, symbolism, and control. In Style Form, Zaiko turns aesthetics into strategic dominance.", powers: ["Cultural Power", "Leopard Presence", "Gold Mastery", "Style Command"] },
  },
  fr: {
    "zaiire-kongo": { origin: "Royaume de Kongo / Afrique Centrale", title: "Le Prince de Kongo et le Collier du Destin", description: "Forgé au cœur du Kongo, Zaiire porte la mémoire ancestrale et la force royale. Choisi par le Collier du Destin, il marche entre l'esprit et le présent pour restaurer ce que l'histoire a tenté d'effacer.", powers: ["Transformation Royale", "Contrôle de la Foudre", "Marche Temporelle", "Vision Ancestrale"] },
    "kimoya-kandake": { origin: "Royaume de Makanda / Afrique Centrale", title: "La Kandake Ascendante", description: "Kimoya est l'héritière d'un empire caché éveillé par la Flamme Sacrée. Elle ne demande pas le pouvoir. Elle le réclame en tant que guerrière, stratège et souveraine.", powers: ["Maîtrise de la Flamme Sacrée", "Combat Divin", "Autorité Royale", "Bouclier de l'Empire"] },
    "madiba-mandela": { origin: "Kongo / Civilisation Bantou", title: "Sage Ancêtre aux Racines Profondes", description: "Symbole vivant de résilience et de justice, Madiba canalise la sagesse générationnelle et un esprit indestructible pour son peuple.", powers: ["Sagesse Ancestrale", "Bouclier de l'Esprit", "Vision de la Vérité", "Voix du Peuple"] },
    "zaira-mbube": { origin: "Katiopa / Royaume Céleste", title: "Reine Mère du Lion Noir", description: "Moitié lionne, moitié reine, pleinement divine. Zaira protège les lignées royales et garde l'antique lignée du lion.", powers: ["Métamorphose Lionesque", "Commandement Céleste", "Lien Royal", "Sens du Prédateur"] },
    "mask-of-bapindi": { origin: "Bapindi / Monde Spirituel Kongo", title: "Seigneur de Tous les Masques Africains", description: "Un ancien guerrier-esprit portant les masques sacrés des civilisations. Gardien des frontières entre le monde des vivants et celui des ancêtres.", powers: ["Marche Dimensionnelle", "Maîtrise des Esprits", "Changement de Masque", "Canal Ancestral"] },
    "kimpa-vita": { origin: "Royaume de Kongo", title: "Flamme des Reines Oubliées", description: "Prophétesse, stratège et force spirituelle. Son feu révèle la vérité et alimente chaque génération qui refuse le silence.", powers: ["Flamme Sacrée", "Vision Prophétique", "Lien des Racines", "Lumière Éternelle"] },
    "kina-kin": { origin: "Kinshasa / Congo", title: "Reine des Rues de Kinshasa", description: "Tacticienne urbaine et icône culturelle. Kina incarne la nouvelle génération du pouvoir africain : acérée, libre et inarrêtable.", powers: ["Maîtrise Urbaine", "Intelligence de la Rue", "Agilité au Combat", "Force Culturelle"] },
    "likaku": { origin: "Forêt Sacrée de Kongo", title: "Le Singe de Fer du Kongo", description: "Gardien des forêts sacrées et de la mémoire vivante. Likaku canalise la sagesse ancienne et une force brutale au service de l'équilibre.", powers: ["Commandement de la Forêt", "Sagesse Ancienne", "Force de Fer", "Lien avec la Nature"] },
    "kongo-spirit": { origin: "Ancien Kongo / Monde des Esprits", title: "Gardien de la Flamme Primordiale", description: "Une entité primordiale enveloppée de mémoire et de pouvoir rituel. L'Esprit Kongo garde la première flamme et commande les légions ancestrales.", powers: ["Flamme Primordiale", "Gardien de la Mémoire", "Légion des Esprits", "Marche dans le Vide"] },
    "ganga-zumba": { origin: "Quilombo / Diaspora Brésil-Kongo", title: "Le Roi Qui a Échappé au Temps", description: "Symbole de liberté conquise, jamais octroyée. Ganga Zumba transforme la mémoire culturelle en armure et la stratégie en libération.", powers: ["Force de la Liberté", "Bouclier du Quilombo", "Puissance Culturelle", "Alchimie de l'Or"] },
    "mokele": { origin: "Kinshasa / Royaume de Kongo", title: "Seigneur de Kinshasa", description: "De la survie dans les rues à l'autorité absolue, Mokele s'élève comme une force dotée d'intelligence tactique et d'une volonté sans failles.", powers: ["Autorité de la Rue", "Contrôle Urbain", "Esprit Tactique", "Force de Volonté"] },
    "simbira-la-tigressa": { origin: "Katiopa / Savane Africaine", title: "Guerrière Tigresse d'Afrique", description: "Féroce et précise, Simbira transforme la douleur ancestrale en force disciplinée et en domination sur le champ de bataille.", powers: ["Vitesse du Tigre", "Feu Ancestral", "Maîtrise du Combat", "Sens de la Jungle"] },
    "kimoya-warrior": { origin: "Dynastie Makanda", title: "La Reine Guerrière Lion", description: "Blindée d'or et éprouvée au combat, Kimoya commande la force du lion et une stratégie digne des plus grandes dynasties.", powers: ["Commandement du Lion", "Lame Sacrée", "Bouclier Dynastique", "Stratégie de Guerre"] },
    "zaiko-fashion": { origin: "Kivu / Kinshasa", title: "Roi Fantôme Léopard", description: "Le style comme pouvoir, la présence comme domination. Zaiko redéfinit la souveraineté urbaine par la force culturelle et la précision.", powers: ["Marche dans l'Ombre", "Force du Léopard", "Domination Culturelle", "Légende de la Rue"] },
    "queen-jameela-califia": { origin: "Californie / Diaspora Africaine", title: "Souveraine de la Diaspora", description: "Une voix royale à travers les océans. Jameela unit la mémoire diasporique, l'autorité cérémonielle et la puissance élémentaire.", powers: ["Lance de la Vérité", "Lien Diasporique", "Autorité Royale", "Force de l'Océan"] },
    "zaiire-armor": { origin: "Royaume de Kongo", title: "L'Élu — Forme Armure Dorée", description: "En mode activation total, l'armure de Zaiire canalise la mémoire ancestrale et le courant divin à travers le Noyau du Destin.", powers: ["Armure Divine", "Noyau du Destin", "Foudre Kongo", "Ascension Royale"] },
    "sankuru": { origin: "Sankuru / Congo", title: "Flamme Sans Limites de Katiopa", description: "Rapide, intrépide et joyeux au combat. Sankuru incarne une nouvelle génération d'énergie héroïque africaine.", powers: ["Vitesse Sans Limites", "Symbole Sacré", "Sprint de Feu", "Puissance de la Jeunesse"] },
    "zaiko-style": { origin: "Kivu / Kinshasa", title: "L'Empereur Culturel", description: "Luxe, symbolisme et contrôle. Dans sa Forme Style, Zaiko transforme l'esthétique en domination stratégique.", powers: ["Pouvoir Culturel", "Présence du Léopard", "Maîtrise de l'Or", "Commandement du Style"] },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3 — public helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Returns the full characters array for a given locale. */
export function getCharacters(locale: "en" | "fr"): Character[] {
  return characterBaseList.map((base) => ({
    ...base,
    ...characterLocalizedText[locale][base.id],
  })) as Character[];
}

export const characterFilterMap: Record<string, string[]> = {
  all: characterBaseList.map((c) => c.id),
  warrior: ["mask-of-bapindi", "kimoya-warrior", "simbira-la-tigressa", "sankuru", "kina-kin", "zaiire-kongo", "zaiire-armor"],
  queen: ["kimoya-kandake", "kimpa-vita", "queen-jameela-califia", "zaira-mbube"],
  king: ["madiba-mandela", "ganga-zumba", "mokele", "zaiko-fashion", "zaiko-style"],
  spirit: ["kongo-spirit", "kimpa-vita", "likaku", "zaiire-kongo"],
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 4 — bilingual page content (UI strings + filter labels)
// ─────────────────────────────────────────────────────────────────────────────
export const charactersPageData: Record<"en" | "fr", CharactersPageContent> = {
  en: {
    ui: {
      heroTagline: "ISOLELE UNIVERSE",
      heroTitleLine1: "LEGENDARY",
      heroTitleLine2: "CHARACTERS",
      heroDescription: "Meet the superheroes, gods, and mythic figures born from the rich tapestry of African folklore.",
      statCharacters: "Characters",
      statKingdoms: "Kingdoms",
      statUniverses: "Universes",
      viewProfile: "VIEW PROFILE",
      powersTitle: "POWERS AND ABILITIES",
      biography: "Biography",
      backToCharacters: "Back to Characters",
      exploreComics: "Explore Comics",
      discoverPrefix: "DISCOVER",
    },
    filters: [
      { id: "all", label: "ALL CHARACTERS" },
      { id: "warrior", label: "WARRIORS" },
      { id: "queen", label: "QUEENS" },
      { id: "king", label: "KINGS" },
      { id: "spirit", label: "SPIRITS" },
    ],
  },
  fr: {
    ui: {
      heroTagline: "UNIVERS ISOLELE",
      heroTitleLine1: "PERSONNAGES",
      heroTitleLine2: "LÉGENDAIRES",
      heroDescription: "Découvrez les super-héros, dieux et figures mythiques nés de la riche tapisserie du folklore africain.",
      statCharacters: "Personnages",
      statKingdoms: "Royaumes",
      statUniverses: "Univers",
      viewProfile: "VOIR LE PROFIL",
      powersTitle: "POUVOIRS ET CAPACITÉS",
      biography: "Biographie",
      backToCharacters: "Retour aux Personnages",
      exploreComics: "Explorer les Comics",
      discoverPrefix: "DÉCOUVRIR",
    },
    filters: [
      { id: "all", label: "TOUS LES PERSONNAGES" },
      { id: "warrior", label: "GUERRIERS" },
      { id: "queen", label: "REINES" },
      { id: "king", label: "ROIS" },
      { id: "spirit", label: "ESPRITS" },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 5 — bilingual character profiles (detail pages)
// ─────────────────────────────────────────────────────────────────────────────
type ProfilesMap = Record<string, CharacterProfile>;

export const characterProfilesData: Record<"en" | "fr", ProfilesMap> = {
  en: {
    zaiire: {
      name: "ZAIIRE",
      title: "The Prince of Kongo",
      origin: "Kingdom of Kongo / Central Africa",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260321_113436-ktAJOL2e0SS0pkTY6aPnn7aBKxr3pq.jpg",
      description: "Forged in the heart of Kongo, Zaiire carries the fire of erased kingdoms and the memory of royal bloodlines. Chosen by the Necklace of Destiny, he channels ancestral force to restore what history tried to silence.",
      powers: ["Necklace of Destiny", "Kongo Lightning", "Ancestral Sight", "Royal Transformation"],
    },
    bambula: {
      name: "BAMBULA",
      title: "Child of Rhythm",
      origin: "Kongo Spirit Routes",
      alt: "Bambula Child of Rhythm Black African Superhero ISOLELE Comics",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
      description: "Before words, there was rhythm. Bambula keeps the sacred pulse alive between spirit and human worlds. He fights not for destruction, but for memory, dignity, and cultural continuity.",
      powers: ["Sacred Drum Resonance", "Spirit Channeling", "Memory Shield", "Rhythm Force"],
    },
    kufulula: {
      name: "KING KUFULULA",
      title: "Visionary Founder",
      origin: "Royal Court of ISOLELE",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0042-U3FGzRErAsmW237T4DTDS4mTjDqFPV.jpg",
      description: "Architect of the ISOLELE universe, King Kufulula is the sovereign mind behind a new African mythological empire. He restores narrative sovereignty and transforms memory into legacy.",
      powers: ["Legacy Vision", "Dynasty Command", "Cultural Architecture", "Sovereign Strategy"],
    },
    mokele: {
      name: "MOKELE",
      title: "Crowned by the Streets",
      origin: "Kinshasa / Kingdom of Kongo",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260114-WA0025-nygOfWmCGHXEcn115WhgUrjIo3gXUC.jpg",
      description: "Born in struggle, sharpened in Kinshasa, Mokele rose from survival to total authority. He embodies tactical intelligence, urban dominance, and the relentless will to redefine power.",
      powers: ["Street Authority", "Urban Control", "Tactical Mind", "Force of Will"],
    },
  },
  fr: {
    zaiire: {
      name: "ZAIIRE",
      title: "Le Prince de Kongo",
      origin: "Royaume de Kongo / Afrique Centrale",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260321_113436-ktAJOL2e0SS0pkTY6aPnn7aBKxr3pq.jpg",
      description: "Forgé au cœur du Kongo, Zaiire porte le feu des royaumes effacés et la mémoire des lignées royales. Choisi par le Collier du Destin, il canalise la force ancestrale pour restaurer ce que l'histoire a tenté de taire.",
      powers: ["Collier du Destin", "Foudre Kongo", "Vision Ancestrale", "Transformation Royale"],
    },
    bambula: {
      name: "BAMBULA",
      title: "Enfant du Rythme",
      origin: "Routes Spirituelles du Kongo",
      alt: "Bambula Enfant du Rythme Super-Héros Africain ISOLELE Comics",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
      description: "Avant les mots, il y avait le rythme. Bambula maintient le pouls sacré vivant entre le monde des esprits et celui des humains. Il combat non pour la destruction, mais pour la mémoire, la dignité et la continuité culturelle.",
      powers: ["Résonance du Tambour Sacré", "Canalisation des Esprits", "Bouclier de la Mémoire", "Force du Rythme"],
    },
    kufulula: {
      name: "KING KUFULULA",
      title: "Fondateur Visionnaire",
      origin: "Cour Royale d'ISOLELE",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0042-U3FGzRErAsmW237T4DTDS4mTjDqFPV.jpg",
      description: "Architecte de l'univers ISOLELE, King Kufulula est l'esprit souverain derrière un nouvel empire mythologique africain. Il restaure la souveraineté narrative et transforme la mémoire en héritage.",
      powers: ["Vision du Legs", "Commandement Dynastique", "Architecture Culturelle", "Stratégie Souveraine"],
    },
    mokele: {
      name: "MOKELE",
      title: "Couronné par les Rues",
      origin: "Kinshasa / Royaume de Kongo",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260114-WA0025-nygOfWmCGHXEcn115WhgUrjIo3gXUC.jpg",
      description: "Né dans la lutte, forgé à Kinshasa, Mokele est passé de la survie à l'autorité totale. Il incarne l'intelligence tactique, la domination urbaine et la volonté implacable de redéfinir le pouvoir.",
      powers: ["Autorité de la Rue", "Contrôle Urbain", "Esprit Tactique", "Force de Volonté"],
    },
  },
};

export const profileRouteByCharacterId: Partial<Record<string, string>> = {
  mokele: "/characters/mokele",
  "zaiko-style": "/characters/kufulula",
  "zaiko-fashion": "/characters/kufulula",
  "zaiire-kongo": "/characters/zaiire",
  "zaiire-armor": "/characters/zaiire",
  "kimoya-kandake": "/characters/bambula",
  "kimoya-warrior": "/characters/bambula",
};

export const CHARACTER_SLUGS = ["zaiire", "bambula", "kufulula", "mokele"] as const;
export type CharacterSlug = typeof CHARACTER_SLUGS[number];