import {
  Crown, Droplets, Eye, Flame, Shield, Star, Sword, Zap,
} from "lucide-react";
import type {
  Character, CharacterProfile, CharactersPageContent,
} from "./characters.types";
import type { SupportedLocale } from "@/shared/i18n/locales";

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

const enCharacterText: Record<string, CharacterLocale> = {
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
};

const frCharacterText: Record<string, CharacterLocale> = {
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
};

const ptCharacterOverrides: Record<string, CharacterLocale> = {
    "zaiire-kongo": { origin: "Kongo / África Central", title: "O Príncipe do Kongo", description: "O príncipe leão-leopardo forjado pelo trovão, pelo tempo e pela herança dos impérios caídos.", powers: ["Transformação em Lionpard Real", "Controle do Trovão e Relâmpago", "Caminhar no Tempo (Colar do Destino)", "Regeneração Solar & Impulso Cósmico", "Memória Tática Ancestral", "Voo & Força Divina"] },
    "kimoya-kandake": { origin: "África Central/Ocidental", title: "Herdeira do Reino de Kouch", description: "Uma rainha nascida do tempo, manejando o poder divino dos ancestrais kouchitas.", powers: ["Transformação Real", "Leoa de Kouch", "Soberania Temporal", "Poderes de Amanirenas", "Outros Poderes Divinos"] },
    "madiba-mandela": { origin: "Nação Xhosa / África do Sul", title: "O Ancestral Sábio das Raízes Profundas", description: "O ancestral portador da chama que acende a memória, dignidade e soberania interior nos herdeiros esquecidos.", powers: ["Chama da Memória", "A Longa Marcha", "Chama dos Esquecidos", "A Coroa Interior", "Sussurro de Mandela", "Desencadeador de Chama de Zaiire"] },
    "zaira-mbube": { origin: "Lyran / Reinos Celestiais", title: "A Leoa do Céu, Rainha Mãe do Leão Negro", description: "A leoa que preservou a Chama Sagrada e assegurou a herança da linhagem celestial através da força, graça e proteção.", powers: ["Transformação em Leoa", "Rugido da Eternidade", "Escudo de Chama", "Vínculo do Orgulho", "Chama da Continuidade"] },
    "mask-of-bapindi": { origin: "Kongo / África (Relíquia Ancestral Pan-Africana)", title: "Senhor de Todas as Máscaras Africanas, Coroa da Chama Ancestral", description: "A máscara dourada que canaliza cada espírito ancestral e máscara da África.", powers: ["Dominação da Máscara", "Visão Ancestral", "Invocação Espiritual", "Transformação Totêmica", "Chama Unida"] },
    "likaku": { origin: "Bacias do Congo / África Central", title: "Likaku Kongolo dos Grandes Macacos, O Macaco de Ferro do Kongo, Guardião da Floresta Sagrada", description: "O guardião inquebrável da floresta, leal, majestoso e inflamado pelo poder ancestral.", powers: ["Força Real Primal", "Pele de Ferro", "Rugido do Tambor", "Dominação da Floresta", "Chama da Coroa Ancestral"] },
    "ganga-zumba": { origin: "Palmares / Brasil", title: "O Rei Que Escapou do Tempo", description: "Fundador do Quilombo Eterno, Jaguar do Caminho da Chama e Porta-Escudo da Rebelião da Diáspora.", powers: ["Metamorfose em Jaguar", "Forma Negus Capitão África", "Marcha Temporal", "Marca de Chama de Palmares", "Onda de Liberdade", "Memória de Batalha"] },
    "zaiko-fashion": { origin: "Cidade de Kongo • Distritos da Harmonia e do Caos", title: "O Rebelde do Ritmo • Senhor da Vibração Urbana", description: "Zaiko Tabuli é a personificação do espírito urbano e da liberdade criativa — um rebelde cujo coração bate na frequência das ruas e das tradições ancestrais. Ele inspira movimento, revolução e música em cada passo.", powers: ["Batida Ancestral", "Dança da Libertação", "Ritmo da Resistência", "Eco Urbano"] },
    "queen-jameela-califia": { origin: "Califórnia / México / Caribe", title: "A Chama das Rainhas Esquecidas", description: "O receptáculo vivo de quatro rainhas ancestrais — Califia, Anacaona, Carlota e Jameela — que se levanta para recuperar terras roubadas e soberanias esquecidas.", powers: ["Invocação Quad-Espírito", "Invocação de Fogo da Coroa", "Poesia Que Dobra a Realidade", "Metamorfose", "Tempestades da Memória", "Ecos do Tempo"] },
    "sankuru": { origin: "Rio Sankuru • Coração da Floresta do Congo", title: "A Chama Sem Limites de Katiopa", description: "Nascido do sagrado Rio Sankuru, este corajoso garoto guerreiro encarna o potencial ilimitado da juventude africana — um espírito que nunca para de crescer, lutar e se erguer novamente. O riso de Sankuru carrega o ritmo dos ancestrais, e seu fogo flui como o rio que lhe deu nome.", powers: ["Energia do Rio", "Crescimento Sem Limites", "Instinto Marcial", "Explosão Ancestral", "Potencial Futuro"] },
};

const esCharacterOverrides: Record<string, CharacterLocale> = {
    "zaiire-kongo": { origin: "Kongo / África Central", title: "El Príncipe del Kongo", description: "El príncipe león-leopardo forjado por el trueno, el tiempo y la herencia de imperios caídos.", powers: ["Transformación en León-Leopardo Real", "Control del Rayo y del Trueno", "Marcha en el Tiempo (Collar del Destino)", "Regeneración Solar & Impulso Cósmico", "Memoria Táctica Ancestral", "Vuelo & Fuerza Divina"] },
    "kimoya-kandake": { origin: "África Central/Occidental", title: "Heredera del Reino de Kush", description: "Una reina nacida del tiempo que maneja el poder divino de los ancestros kushitas.", powers: ["Transformación Real", "Leona de Kush", "Soberanía Temporal", "Poderes de Amanirenas", "Otros Poderes Divinos"] },
    "madiba-mandela": { origin: "Nación Xhosa / Sudáfrica", title: "El Ancestro Sabio de las Raíces Profundas", description: "El ancestro portador de la llama que enciende la memoria, la dignidad y la soberanía interior en los herederos olvidados.", powers: ["Llama de Memoria", "La Larga Marcha", "Llama de los Olvidados", "La Corona Interior", "Susurro de Mandela", "Desencadenador de la Llama de Zaiire"] },
    "zaira-mbube": { origin: "Lyran / Reinos Celestiales", title: "La Leona del Cielo, Reina Madre del León Negro", description: "La leona que preservó la Llama Sagrada y aseguró la herencia de la línea celestial por la fuerza, la gracia y la protección.", powers: ["Transformación en Leona", "Rugido de la Eternidad", "Escudo de Llama", "Vínculo del Orgullo", "Llama de Continuidad"] },
    "mask-of-bapindi": { origin: "Kongo / África (Reliquia Ancestral Pan-Africana)", title: "Señor de Todas las Máscaras Africanas, Corona de la Llama Ancestral", description: "La máscara dorada que canaliza cada espíritu ancestral y máscara de África.", powers: ["Dominio de la Máscara", "Visión Ancestral", "Invocación Espiritual", "Transformación Totémica", "Llama Unida"] },
    "likaku": { origin: "Cuencas del Congo / África Central", title: "Likaku Kongolo de los Grandes Simios, El Mono de Hierro del Kongo, Guardián del Bosque Sagrado", description: "El guardián inquebrantable del bosque, leal, majestuoso y encendido por el poder ancestral.", powers: ["Fuerza Real Primal", "Piel de Hierro", "Rugido del Tambor", "Dominio del Bosque", "Llama de la Corona Ancestral"] },
    "ganga-zumba": { origin: "Palmares / Brasil", title: "El Rey Que Escapó al Tiempo", description: "Fundador del Quilombo Eterno, Jaguar del Camino de la Llama y Portaescudo de la Rebelión de la Diáspora.", powers: ["Metamorfosis en Jaguar", "Forma Negus Capitán Afrika", "Marcha Temporal", "Marca de Llama de Palmares", "Onda de Libertad", "Memoria de Batalla"] },
    "queen-jameela-califia": { origin: "California / México / Caribe", title: "La Llama de las Reinas Olvidadas", description: "El receptáculo viviente de cuatro reinas ancestrales — Califia, Anacaona, Carlota y Jameela — que se levanta para reclamar las tierras robadas y las soberanías olvidadas.", powers: ["Invocación Cuatro-Espíritus", "Invocación de Fuego Corona", "Poesía que Dobla la Realidad", "Metamorfosis", "Tormentas de Memoria", "Ecos del Tiempo"] },
};

const zuCharacterOverrides: Record<string, CharacterLocale> = {
    "zaiire-kongo": { origin: "Kongo / Central Africa", title: "Inkosi yaseKongo", description: "Inkosi ye-lion-leopard eyakhiwe yisivunguvungu, isikhathi kanye nefa lezikoloni ezilahlekile.", powers: ["Ukuguqulwa kube yiLionpard Yenkosi", "Ukulawula Ugesi Nesivunguvungu", "Ukuhamba Ngesikhathi (Ikhola Lezomlando)", "Ukuzivuselela Ngelanga & Ukusheshisa Kwamazulu", "Inkumbulo Yezimpi YamaDlozi", "Ukundiza & Amandla Angcwele"] },
    "kimoya-kandake": { origin: "Central / West Africa", title: "Ifa Lombuso waseKouch", description: "Inkosikazi ezelwe ngesikhathi elawula amandla angcwele ezizukulwaneni zaseKouch.", powers: ["Ukuguqulwa KweNkosikazi", "I-Lionne yaseKouch", "Ubukhosi Besikhathi", "Amandla kaAmanirenas", "Amanye Amandla Angcwele"] },
    "madiba-mandela": { origin: "Isizwe samaXhosa / eNingizimu Afrika", title: "Umkhokhi Wabokhokho Bezimpande Ezijulile", description: "Umkhokhi wemlilo ophakamisa inkumbulo, isithunzi kanye nobukhosi bangaphakathi kubazalwane abakhohlakele.", powers: ["Umlilo Wenkumbulo", "Uhamba Olude", "Umlilo Wabakholwayo", "Ikhwaba Langaphakathi", "Ukuzwakala kukaMandela", "Isiqalisi Somlilo KaZaiire"] },
    "zaira-mbube": { origin: "Lyran / Amazwe Ezinkanyezi", title: "Ingonyama Yasezulwini, Umama WeNgonyama Emnyama", description: "Ingonyama eyagcina Umlilo Ongcwele futhi yaqinisekisa ifa lohlanga lwasezulwini ngamandla, ubuhle nokuvikela.", powers: ["Ukuguqulwa Kube Ingonyama", "Ukukhwaza Kokuphakade", "Isihlangu Somlilo", "Ubudlelwano Bokuzigqaja", "Umlilo Wokuqhubeka"] },
    "mask-of-bapindi": { origin: "Kongo / Afrika (Inhlawulo Yodabuka Yomhlaba Wonke)", title: "Nkosi Yazo Zonke Izifihla-buso zase-Afrika, Ikhoro Lomlilo Wodabuka", description: "Isifihla-buso segolide esihambisa umoya wodabuka kanye nezifihla-buso zase-Afrika.", powers: ["Ukulawula Izifihla-buso", "Umbono Wodabuka", "Ukubiza Imimoya", "Ukuguqulwa Kwesithombe", "Umlilo Owuhlanganisiwe"] },
    "likaku": { origin: "Izifula zaseKongo / i-Afrika Ephakathi", title: "Likaku Kongolo Wamabhubesi Amakhulu, Inkawu Yensimbi yaseKongo, Umlindi Wehlathi Elingcwele", description: "Umlindi ongenakuphulwa wehlathi, othembekile, ohloniphekile futhi oshiswa amandla wokhokho.", powers: ["Amandla Okwesibili Obasebukhosini", "Isikhumba Sensimbi", "Ukukhala Kwedrum", "Ubukhosi Behlathi", "Umlilo Womqhele Wokhokho"] },
    "ganga-zumba": { origin: "Palmares / Brazil", title: "Inkosi Ebaleke Esikhathini", description: "Umsunguli weQuilombo Engapheli, IJaguar YeFlame Way, Nomvikeli Wephiko LeMpi Yobandlululo.", powers: ["Ukuguqulwa kuJaguar", "Ifomu leNegus Capitaine Afrika", "Ukuhamba Kwesikhathi", "Umarke weFlame yasePalmares", "I-Wave Yokukhululeka", "Inkumbulo Yempi"] },
    "zaiko-fashion": { origin: "Amabhange AseNguni / Izintaba Zobukhosi", title: "Umsindisi WamaNguni • Ibhubesi Elilondolozayo", description: "Zaiko Tabuli uyisivikelo samaNguni — ibhubesi elinolwazi nolukhulu. Uvikela abantu bakhe futhi ubalungiselela ukuphumelela empini nasempilweni yansuku zonke.", powers: ["Ukunqoba Kwebhubesi", "Ukuhola Ngokuhlakanipha", "Isivikelo Sabangane", "Isifundo SamaNguni"] },
    "queen-jameela-califia": { origin: "California / Mexico / Caribbean", title: "Umlilo Wamakhosikazi Angakhohlwanga", description: "Isiqu esiphilayo samaKhosikazi amane angokhokho — Califia, Anacaona, Carlota noJameela — esivuka ukubuyisa izwe elibiwe kanye nobukhosi obukhohlakele.", powers: ["Ukubiza Okwe-Quad-Spirit", "Ukubiza Umlilo WeKhwaba", "Inkondlo Eguqula Iqiniso", "Ukuguqulwa", "Izivunguvungu Zenkumbulo", "Izwi Lesikhathi"] },
    "sankuru": { origin: "Umfula iSankuru • Inhliziyo Yehlathi LaseKongo", title: "Umlilo Ongapheli WeKatiopa", description: "Ozalwe emfuleni ongcwele iSankuru, lo mntwana weqhawe uyisibonakaliso samandla angenamkhawulo entsha yase-Afrika — umoya ongakhathali, oshisa futhi ovuka njalo. Ukuhleka kwakhe kuthwala isigqi sokhokho, futhi umlilo wakhe ugobhoza njengomfula owamqambayo.", powers: ["Amandla Omfula", "Ukukhula Okungenamkhawulo", "Ukwazi Ukuhlasela Ngokwemvelo", "Ukuqhuma Kwamandla", "Amandla Esikhathi Esizayo"] },
};

const xhCharacterOverrides: Record<string, CharacterLocale> = {
    "zaiire-kongo": { origin: "Kongo / Afrika Embindini", title: "Inkosana yaseKongo", description: "Inkosana ingonyama-ingwe eyenziwe ngombane, ixesha nelifa leembuso eziwile.", powers: ["Uguquko lube yiLionpard yobukhosi", "Ulawulo lombane nesaqhwithi", "Ukuhamba ngexesha (I-Chain yeSithsaba)", "Ukubuyiselwa kwelanga & iCosmic dash", "Inkumbulo yomkhosi woKhohlo", "Ukubhabha & Amandla obuThixo"] },
    "kimoya-kandake": { origin: "Afrika Embindini/ntshona", title: "Ilifa leKumkanikazi yaseKush", description: "IKumkanikazi ezelwe ngexesha ephethe amandla angcwele ookhokho baseKushite.", powers: ["Uguquko lobukhosi", "Ingwe yaseKush", "Ulawulo lwexesha", "Amandla kaAmanirenas", "Amanye Amandla obuThixo"] },
    "madiba-mandela": { origin: "Isizwe samaXhosa / eMzantsi Afrika", title: "Umkhulu oNgumeluleki weMithi eBanzi", description: "Umkhulu ophathela umlilo ovuselela inkumbulo, isidima kunye nobukumkani bangaphakathi kubafowunelwa abalibalekileyo.", powers: ["Umlilo weNkumbulo", "Uhambo olude", "Umlilo wabangabalekileyo", "Isitulo sangaphakathi", "Ukuthetha kukaMandela", "Umsasazi woMlilo kaZaiire"] },
    "zaira-mbube": { origin: "Lyran / Ubukumkani bezulu", title: "Ingonyama yaseZulwini, Umama weNgonyama emnyama", description: "Ingonyama eyagcina Umlilo oNgcwele kwaye yaqinisekisa ilifa loludwe lwasezulwini ngamandla, ubuhle kunye nokukhusela.", powers: ["Uguquko lube yIngonyama", "Ukukhwaza kweNgunaphakade", "Isihlangu soMlilo", "Uxhulumaniso lwezibonda", "Umlilo woLandelelwano"] },
    "ganga-zumba": { origin: "Palmares / Brazil", title: "Kumkani oWaphuma kwiXesha", description: "Umseki weQuilombo eNgunaphakade, iJaguar yeNdlela yoMlilo, kunye noPhatha-Sithsaba woMvukeli weDiaspora.", powers: ["Ukuguquka kube yiJaguar", "Ifomu yeNegus Capitaine Afrika", "Ukuhamba ngexesha", "Umqondiso woMlilo wasePalmares", "Iwave yoKhuseleko", "Inkumbulo yemfazwe"] },
    "queen-jameela-califia": { origin: "California / Mexico / Caribbean", title: "Umlilo wabaKumkanikazi abalibalekileyo", description: "Isitya esiphilayo samaKumkanikazi amane angumzali — Califia, Anacaona, Carlota kunye noJameela — esima ukuzithatha kwakhona imihlaba eyebiwe kunye nobukumkani obulibalekileyo.", powers: ["Ukubiza imimoya emine", "Ukubiza umlilo wesitulo", "Imibongo ephambanisa inyani", "Ukuguquka", "Iitempu zomkhumbulo"] },
};

const swCharacterOverrides: Record<string, CharacterLocale> = {
    "zaiire-kongo": { origin: "Kongo / Afrika ya Kati", title: "Kijana wa Kongo", description: "Kijana simba-chui aliyetengenezwa na radi, wakati na urithi wa falme zilizoporomoka.", powers: ["Mabadiliko ya Kifalme ya Simba-Chui", "Udhibiti wa Radi na Radi", "Mtembea wa Wakati (Mkufu wa Hatima)", "Urejeshaji wa Jua na Mwelekeo wa Kimaumbile", "Kumbukumbu ya Mbinu za Kale", "Kuruka na Nguvu za Kiungu"] },
};

const lnCharacterOverrides: Record<string, CharacterLocale> = {
    "zaiire-kongo": { origin: "Kongo / Afrika ya Centre", title: "Mwana Nkolo ya Kongo", description: "Mwana nkolo ya nkosi-leopard oyo etungisamaki na lokumu, ntango mpe libula ya bokonzi oyo ebebisamaki.", powers: ["Mbongwana na Nkosi-Leopard ya Bokonzi", "Kontrole ya Lokumu mpe Lokonga", "Kotambola na Ntango (Mondele ya Destiny)", "Kobongwana na Moyi & Elan ya Likolo", "Bosembo ya Mindule ya Bankoko", "Kofanda likolo mpe Nguya ya Nzambe"] },
    "kimoya-kandake": { origin: "Afrika ya Centre / Ouest", title: "Mwana Nkolo ya Bokonzi ya Kouch", description: "Mwasi nkolo abotamaki na ntango, azali kobatela nguya ya Nzambe ya bankoko ya Kouch.", powers: ["Mbongwana ya Bokonzi", "Nkosi-moke ya Kouch", "Bokonzi ya Ntango", "Nguya ya Amanirenas", "Nguya mosusu ya Nzambe"] },
};

const characterLocalizedText: Partial<Record<SupportedLocale, Record<string, CharacterLocale>>> & {
  en: Record<string, CharacterLocale>;
} = {
  en: enCharacterText,
  fr: frCharacterText,
  pt: { ...enCharacterText, ...ptCharacterOverrides },
  es: { ...enCharacterText, ...esCharacterOverrides },
  zu: { ...enCharacterText, ...zuCharacterOverrides },
  xh: { ...enCharacterText, ...xhCharacterOverrides },
  sw: { ...enCharacterText, ...swCharacterOverrides },
  ln: { ...enCharacterText, ...lnCharacterOverrides },
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3 — public helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Returns the full characters array for a given locale. */
export function getCharacters(locale: SupportedLocale): Character[] {
  const localizedText = characterLocalizedText[locale] ?? characterLocalizedText.en;
  return characterBaseList.map((base) => ({
    ...base,
    ...localizedText[base.id],
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
export const charactersPageData: Partial<Record<SupportedLocale, CharactersPageContent>> & {
  en: CharactersPageContent;
} = {
  en: {
    ui: {
      heroTagline: "ISOLELE UNIVERSE",
      heroTitleLine1: "LEGENDARY",
      heroTitleLine2: "CHARACTERS",
      heroDescription: "Meet the superheroes, gods, and mythic figures born from the rich tapestry of African folklore.",
      statCharacters: "Characters",
      statKingdoms: "Kingdoms",
      statUniverses: "Universes",
      statKingdomsValue: "12+",
      statUniversesValue: "3",
      viewProfile: "VIEW PROFILE",
      powersTitle: "POWERS AND ABILITIES",
      biography: "Biography",
      backToCharacters: "Back to Characters",
      exploreComics: "Explore Comics",
      discoverPrefix: "DISCOVER",
      closeModalLabel: "Close character modal",
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
      statKingdomsValue: "12+",
      statUniversesValue: "3",
      viewProfile: "VOIR LE PROFIL",
      powersTitle: "POUVOIRS ET CAPACITÉS",
      biography: "Biographie",
      backToCharacters: "Retour aux Personnages",
      exploreComics: "Explorer les Comics",
      closeModalLabel: "Fermer la fenetre personnage",
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

export const characterProfilesData: Partial<Record<SupportedLocale, ProfilesMap>> & { en: ProfilesMap } = {
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
