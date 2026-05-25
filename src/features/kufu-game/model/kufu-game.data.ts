import { Award, Crown, Dice5, Globe, ShieldCheck, Users } from "lucide-react";
import { resolveContentLocale, type ContentLocale, type SupportedLocale } from "@/shared/i18n/locales";
import type {
  KufuCharacter,
  KufuFeature,
  KufuGameConfig,
  KufuGamePageContent,
  KufuReview,
  KufuScreenshot,
} from "./kufu-game.types";

export const KUFU_ASSETS = {
  logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260311-WA0030-kydmLlQEI33of4mfyTaGi2r6TNvZWz.jpg",
  board: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260304-WA0012-XSCUSyYtBnqRoFkU9Ubd5qRihh3IXm.jpg",
} as const;

const gameByLocale: Record<ContentLocale, KufuGameConfig> = {
  en: {
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
    description: "KUFU Ludo is one of the flagship African games from the ISOLELE universe. It turns a classic board-game format into a coronation ritual rooted in African royalty.",
    longDescription: [
      "Deploy your warriors, roll with precision, and race to the sacred center crown.",
      "Bring all four pawns home through your kingdom corridor to claim NKUFU YA BAKULU.",
      "The board draws from the Kongo Four Directions cosmogram and royal clan symbolism.",
    ],
    developer: "ISOLELE Studios",
    publisher: "ISOLELE - The Chosen Ones",
    languages: ["French", "English", "Lingala", "Kikongo", "Swahili"],
  },
  fr: {
    title: "KUFU Ludo",
    subtitle: "Le jeu de la couronne",
    tagline: "HERITAGE - ROYALTY - NKUFU YA BAKULU",
    rating: 4.8,
    reviewCount: 2543,
    price: 34.99,
    players: "2-4 joueurs",
    age: "8 ans et plus",
    duration: "30-60 min",
    category: "Jeu de strategie",
    description: "KUFU Ludo fait partie des jeux phares de l'univers ISOLELE. Il transforme un format classique en ceremonie de couronnement ancree dans la royaute africaine.",
    longDescription: [
      "Deployez vos guerriers, avancez avec precision et atteignez la couronne sacree au centre du plateau.",
      "Ramenez vos quatre pions dans votre couloir royal pour revendiquer NKUFU YA BAKULU.",
      "Le plateau s'inspire du cosmogramme Kongo des quatre directions et des symboles de clans royaux.",
    ],
    developer: "ISOLELE Studios",
    publisher: "ISOLELE - The Chosen Ones",
    languages: ["Francais", "English", "Lingala", "Kikongo", "Swahili"],
  },
};

const screenshotsByLocale: Record<ContentLocale, KufuScreenshot[]> = {
  en: [
    { url: KUFU_ASSETS.board, label: "KUFU Ludo board" },
    { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeux%20-des-cartes-ISOLELE%202026%20copie-1.png-ifvBiGyVajqX0jXvhJQOH1k83wp5KC.jpeg", label: "KUFU card set" },
    { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0058-gD7wFf8li9ITXSvC57xza5JO8jIl7z.jpg", label: "ISOLELE crown symbol" },
  ],
  fr: [
    { url: KUFU_ASSETS.board, label: "Plateau KUFU Ludo" },
    { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeux%20-des-cartes-ISOLELE%202026%20copie-1.png-ifvBiGyVajqX0jXvhJQOH1k83wp5KC.jpeg", label: "Jeu de cartes KUFU" },
    { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0058-gD7wFf8li9ITXSvC57xza5JO8jIl7z.jpg", label: "Symbole de couronne ISOLELE" },
  ],
};

export const GAME = gameByLocale.en;
export const SCREENSHOTS = screenshotsByLocale.en;

const featuresByLocale: Record<ContentLocale, KufuFeature[]> = {
  en: [
    { icon: Crown, title: "4 Kingdoms", desc: "Red, green, blue, and gold clans with distinct pawn identities." },
    { icon: ShieldCheck, title: "Crown of Ancestors", desc: "Reach the sacred center to claim victory and reign as the chosen king." },
    { icon: Globe, title: "African Cosmology", desc: "Board architecture inspired by Kongo cosmogram principles and sacred directions." },
    { icon: Award, title: "ISOLELE Universe", desc: "Characters and symbols drawn from ZAIIRE and the wider ISOLELE canon." },
    { icon: Dice5, title: "Strategy and Luck", desc: "Classic ludo rules enhanced with stronger tactical tension." },
    { icon: Users, title: "2-4 Players", desc: "Built for family nights, tournament sessions, and cultural storytelling." },
  ],
  fr: [
    { icon: Crown, title: "4 royaumes", desc: "Clans rouge, vert, bleu et or avec des identites de pions distinctes." },
    { icon: ShieldCheck, title: "Couronne des ancetres", desc: "Atteignez le centre sacre pour revendiquer la victoire et regner comme roi choisi." },
    { icon: Globe, title: "Cosmologie africaine", desc: "Une architecture de plateau inspiree du cosmogramme Kongo et des directions sacrees." },
    { icon: Award, title: "Univers ISOLELE", desc: "Des personnages et symboles issus de ZAIIRE et du canon ISOLELE." },
    { icon: Dice5, title: "Strategie et hasard", desc: "Les regles du ludo enrichies par une tension tactique plus forte." },
    { icon: Users, title: "2-4 joueurs", desc: "Concu pour les familles, les tournois et les moments de transmission culturelle." },
  ],
};

const charactersByLocale: Record<ContentLocale, KufuCharacter[]> = {
  en: [
    { name: "LIKAKU", role: "4 of Trees", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0058-gD7wFf8li9ITXSvC57xza5JO8jIl7z.jpg" },
    { name: "ZAIRA MBUBE", role: "D of Spots", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0031-049OjN1f25uQV6CYqHaFcawtnmViJA.jpg" },
    { name: "QUEEN JAMEELA", role: "Q of Spears", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0056-aVhyk1EGYDNRcA7K8hCRo1ZJulcHP9.jpg" },
    { name: "SANKURU", role: "4 of Diamonds", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0057-Ag7qpdNL9kdFUyL5SKSNvGFGUtEwLS.jpg" },
    { name: "GANGA ZUMBA", role: "G of Hearts", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0042-lwuIWgCIPdK7GOmWkORkPPXJpFQKfm.jpg" },
    { name: "MADIBA MANDELA", role: "B of Shields", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0060-VaXYrgONw6g7KvMuclx1P9nFhjT68R.jpg" },
  ],
  fr: [
    { name: "LIKAKU", role: "4 des arbres", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0058-gD7wFf8li9ITXSvC57xza5JO8jIl7z.jpg" },
    { name: "ZAIRA MBUBE", role: "D des taches", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0031-049OjN1f25uQV6CYqHaFcawtnmViJA.jpg" },
    { name: "QUEEN JAMEELA", role: "Q des lances", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0056-aVhyk1EGYDNRcA7K8hCRo1ZJulcHP9.jpg" },
    { name: "SANKURU", role: "4 des diamants", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0057-Ag7qpdNL9kdFUyL5SKSNvGFGUtEwLS.jpg" },
    { name: "GANGA ZUMBA", role: "G des coeurs", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0042-lwuIWgCIPdK7GOmWkORkPPXJpFQKfm.jpg" },
    { name: "MADIBA MANDELA", role: "B des boucliers", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0060-VaXYrgONw6g7KvMuclx1P9nFhjT68R.jpg" },
  ],
};

const reviewsByLocale: Record<ContentLocale, KufuReview[]> = {
  en: [
    { name: "Makamba K.", country: "Congo-Kinshasa", rating: 5, text: "An extraordinary game that celebrates heritage and strategy. Family favorite." },
    { name: "Amara D.", country: "Senegal", rating: 5, text: "A masterpiece of visual identity and cultural direction. Every detail feels intentional." },
    { name: "Zinhle M.", country: "South Africa", rating: 5, text: "Finally a board game that tells our story with clarity, pride, and beautiful craft." },
  ],
  fr: [
    { name: "Makamba K.", country: "Congo-Kinshasa", rating: 5, text: "Un jeu extraordinaire qui celebre heritage et strategie. Un favori de la famille." },
    { name: "Amara D.", country: "Senegal", rating: 5, text: "Un chef-d'oeuvre de direction visuelle et culturelle. Chaque detail semble intentionnel." },
    { name: "Zinhle M.", country: "Afrique du Sud", rating: 5, text: "Enfin un jeu de plateau qui raconte notre histoire avec clarte, fierte et elegance." },
  ],
};

const pageContent: Record<ContentLocale, Omit<KufuGamePageContent, "locale">> = {
  en: {
    hero: {
      backLabel: "ISOLELE",
      coverAlt: "KUFU Ludo cover",
      logoAlt: "ISOLELE logo",
      boardAlt: "KUFU Ludo board",
      shortDescription: "Premium African games experience from ISOLELE.",
      orderLabel: "Order now",
      comicsLabel: "Explore African Comics",
      ratingLabel: "ratings",
      currencyLabel: "USD",
      infoChips: [
        { id: "players", label: gameByLocale.en.players },
        { id: "duration", label: gameByLocale.en.duration },
        { id: "age", label: gameByLocale.en.age },
      ],
    },
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "characters", label: "Characters" },
      { id: "reviews", label: "Reviews" },
    ],
    overview: {
      aboutTitle: "About KUFU Ludo",
      featuresTitle: "Features",
      universeBadge: "Part of the ISOLELE Universe",
      infoTitle: "Game Info",
      infoRows: [
        { label: "Developer", value: gameByLocale.en.developer },
        { label: "Publisher", value: gameByLocale.en.publisher },
        { label: "Players", value: gameByLocale.en.players },
        { label: "Duration", value: gameByLocale.en.duration },
        { label: "Age", value: gameByLocale.en.age },
        { label: "Category", value: gameByLocale.en.category },
      ],
      languagesTitle: "Languages",
    },
    characters: {
      intro: "Meet the guardians featured on KUFU cards, each pulled directly from the ISOLELE comic universe.",
    },
    reviews: {
      ratingCountLabel: "ratings",
    },
    footer: {
      studioLabel: "ISOLELE STUDIOS",
      studioSubtitle: "The Chosen Ones",
    },
  },
  fr: {
    hero: {
      backLabel: "ISOLELE",
      coverAlt: "Couverture KUFU Ludo",
      logoAlt: "Logo ISOLELE",
      boardAlt: "Plateau KUFU Ludo",
      shortDescription: "Une experience premium de jeu africain signee ISOLELE.",
      orderLabel: "Commander",
      comicsLabel: "Explorer les comics",
      ratingLabel: "avis",
      currencyLabel: "USD",
      infoChips: [
        { id: "players", label: gameByLocale.fr.players },
        { id: "duration", label: gameByLocale.fr.duration },
        { id: "age", label: gameByLocale.fr.age },
      ],
    },
    tabs: [
      { id: "overview", label: "Vue d'ensemble" },
      { id: "characters", label: "Personnages" },
      { id: "reviews", label: "Avis" },
    ],
    overview: {
      aboutTitle: "A propos de KUFU Ludo",
      featuresTitle: "Points forts",
      universeBadge: "Fait partie de l'univers ISOLELE",
      infoTitle: "Infos jeu",
      infoRows: [
        { label: "Developpeur", value: gameByLocale.fr.developer },
        { label: "Editeur", value: gameByLocale.fr.publisher },
        { label: "Joueurs", value: gameByLocale.fr.players },
        { label: "Duree", value: gameByLocale.fr.duration },
        { label: "Age", value: gameByLocale.fr.age },
        { label: "Categorie", value: gameByLocale.fr.category },
      ],
      languagesTitle: "Langues",
    },
    characters: {
      intro: "Decouvrez les gardiens presents sur les cartes KUFU, tous issus directement de l'univers comics ISOLELE.",
    },
    reviews: {
      ratingCountLabel: "avis",
    },
    footer: {
      studioLabel: "ISOLELE STUDIOS",
      studioSubtitle: "The Chosen Ones",
    },
  },
};

export function getKufuGameContent(locale: SupportedLocale) {
  const contentLocale = resolveContentLocale(locale);
  return {
    locale,
    game: gameByLocale[contentLocale],
    screenshots: screenshotsByLocale[contentLocale],
    features: featuresByLocale[contentLocale],
    characters: charactersByLocale[contentLocale],
    reviews: reviewsByLocale[contentLocale],
    page: { locale, ...pageContent[contentLocale] },
  };
}
