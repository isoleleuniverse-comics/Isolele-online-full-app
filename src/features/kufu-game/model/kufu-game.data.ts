import {
  Award,
  Crown,
  Dice5,
  Globe,
  ShieldCheck,
  Users,
} from "lucide-react";
import type {
  KufuCharacter,
  KufuFeature,
  KufuGameConfig,
  KufuReview,
  KufuScreenshot,
} from "./kufu-game.types";

export const KUFU_ASSETS = {
  logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260311-WA0030-kydmLlQEI33of4mfyTaGi2r6TNvZWz.jpg",
  board:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260304-WA0012-XSCUSyYtBnqRoFkU9Ubd5qRihh3IXm.jpg",
} as const;

export const GAME: KufuGameConfig = {
  title: "KUFU Ludo",
  subtitle: "The Crown Game",
  tagline: "HERITAGE - ROYALTY - NKUFU YA BAKULU",
  rating: 4.8,
  reviewCount: 2543,
  price: 34.99,
  players: "2-4 Players",
  age: "Ages 8+",
  duration: "30-60 min",
  category: "Strategy Board Game",
  description:
    "KUFU Ludo is one of the flagship African games from the ISOLELE universe. It is a ludo-style strategy game rooted in African royal traditions.",
  longDescription: [
    "Deploy your warriors, roll with precision, and race to the sacred center crown.",
    "Bring all four pawns home through your kingdom corridor to claim NKUFU YA BAKULU.",
    "The board takes inspiration from the Kongo Four Directions cosmogram and royal clan symbolism.",
  ],
  developer: "ISOLELE Studios",
  publisher: "ISOLELE - The Chosen Ones",
  languages: ["Francais", "English", "Lingala", "Kikongo", "Swahili"],
};

export const SCREENSHOTS: KufuScreenshot[] = [
  {
    url: KUFU_ASSETS.board,
    label: "KUFU Ludo - Game Board",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeux%20-des-cartes-ISOLELE%202026%20copie-1.png-ifvBiGyVajqX0jXvhJQOH1k83wp5KC.jpeg",
    label: "KUFU Card Game Set",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0058-gD7wFf8li9ITXSvC57xza5JO8jIl7z.jpg",
    label: "ISOLELE Crown Symbol",
  },
];

export const FEATURES: KufuFeature[] = [
  {
    icon: Crown,
    title: "4 Kingdoms",
    desc: "Red, Green, Blue and Gold clans with unique pawn designs inspired by Kongo masks.",
  },
  {
    icon: ShieldCheck,
    title: "Crown of Ancestors",
    desc: "Reach the sacred center to claim victory and reign as the chosen king.",
  },
  {
    icon: Globe,
    title: "African Cosmology",
    desc: "Board architecture inspired by Kongo cosmogram principles and sacred directions.",
  },
  {
    icon: Award,
    title: "ISOLELE Universe",
    desc: "Characters and symbols drawn from the ZAIIRE storyline and wider ISOLELE canon.",
  },
  {
    icon: Dice5,
    title: "Strategy + Luck",
    desc: "Classic ludo mechanics with deeper tactical tension for advanced play styles.",
  },
  {
    icon: Users,
    title: "2-4 Players",
    desc: "Built for family nights, tournament sessions, and cultural storytelling moments.",
  },
];

export const CHARACTERS: KufuCharacter[] = [
  {
    name: "LIKAKU",
    role: "4 of Trees",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0058-gD7wFf8li9ITXSvC57xza5JO8jIl7z.jpg",
  },
  {
    name: "ZAIRA MBUBE",
    role: "D of Spots",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0031-049OjN1f25uQV6CYqHaFcawtnmViJA.jpg",
  },
  {
    name: "QUEEN JAMEELA",
    role: "Q of Spears",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0056-aVhyk1EGYDNRcA7K8hCRo1ZJulcHP9.jpg",
  },
  {
    name: "SANKURU",
    role: "4 of Diamonds",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0057-Ag7qpdNL9kdFUyL5SKSNvGFGUtEwLS.jpg",
  },
  {
    name: "GANGA ZUMBA",
    role: "G of Hearts",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0042-lwuIWgCIPdK7GOmWkORkPPXJpFQKfm.jpg",
  },
  {
    name: "MADIBA MANDELA",
    role: "B of Shields",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0060-VaXYrgONw6g7KvMuclx1P9nFhjT68R.jpg",
  },
];

export const REVIEWS: KufuReview[] = [
  {
    name: "Makamba K.",
    country: "Congo-Kinshasa",
    rating: 5,
    text: "An extraordinary game that celebrates heritage and strategy. Family favorite.",
  },
  {
    name: "Amara D.",
    country: "Senegal",
    rating: 5,
    text: "A masterpiece of visual identity and cultural direction. Every detail feels intentional.",
  },
  {
    name: "Zinhle M.",
    country: "South Africa",
    rating: 5,
    text: "Finally a board game that tells our story with clarity, pride, and beautiful craft.",
  },
];

