import { Crown, Flame, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SupportedLocale } from "@/shared/i18n/locales";

export interface KingKufululaSection {
  id: string;
  title: string;
  body: string;
  icon: LucideIcon;
}

export interface KingKufululaPageContent {
  locale: SupportedLocale;
  hero: {
    founderBadge: string;
    title: string;
    description: string;
  };
  navigation: {
    items: Array<{ id: string; label: string }>;
  };
  editorial: {
    sections: KingKufululaSection[];
  };
  cta: {
    eyebrow: string;
    links: Array<{ label: string; href: string }>;
  };
  seo: {
    title: string;
    description: string;
  };
}

const sectionsEn: KingKufululaSection[] = [
  {
    id: "king",
    title: "The king behind the universe",
    body: "HRM King Kufulula Bapindi Manikongo did not borrow Africa as inspiration. He built ISOLELE from royal identity, responsibility, and lived sovereignty rooted in the Bapindi and Kongo lineages.",
    icon: Crown,
  },
  {
    id: "zaiire",
    title: "Zaiire mirrors his truth",
    body: "The exile, the search, the burden of a crown, and the need to reclaim what was separated from you all flow directly into Zaiire's journey across the cosmos.",
    icon: Shield,
  },
  {
    id: "war",
    title: "Built in the middle of war",
    body: "ISOLELE was shaped while conflict continued in the DRC. The work carries grief, sacrifice, and the determination to keep creating beauty for African children despite violence.",
    icon: Flame,
  },
  {
    id: "made-in-congo",
    title: "Made in Congo. On purpose.",
    body: "From art to products, the project is a statement of economic independence: build in Congo, create with African hands, and ship value back out into the world.",
    icon: Crown,
  },
  {
    id: "children",
    title: "Investing in children of war",
    body: "Part of the mission is dedicated to youth in North and South Kivu through free art education, because storytelling and drawing can become armor in the face of war.",
    icon: Shield,
  },
  {
    id: "goal",
    title: "One goal",
    body: "Build the creative empire the world said Africa could not build: comics, games, fashion, and fragrance produced on African soil as a competitor, not a curiosity.",
    icon: Crown,
  },
];

const sectionsFr: KingKufululaSection[] = [
  {
    id: "king",
    title: "Le roi derriere l'univers",
    body: "HRM King Kufulula Bapindi Manikongo n'utilise pas l'Afrique comme simple inspiration. Il a bati ISOLELE depuis une identite royale, une responsabilite vivante et une souverainete issue des lignees Bapindi et Kongo.",
    icon: Crown,
  },
  {
    id: "zaiire",
    title: "Zaiire refl ete sa verite",
    body: "L'exil, la quete, le poids de la couronne et la reconquete de ce qui a ete separe de soi traversent directement le voyage cosmique de Zaiire.",
    icon: Shield,
  },
  {
    id: "war",
    title: "Construit au milieu de la guerre",
    body: "ISOLELE s'est forme alors que le conflit continuait en RDC. Le projet porte le deuil, le sacrifice et la determination a creer de la beaute pour les enfants africains malgre la violence.",
    icon: Flame,
  },
  {
    id: "made-in-congo",
    title: "Fabrique au Congo. Deliberement.",
    body: "De l'art aux produits, le projet affirme une independance economique claire : construire au Congo, creer avec des mains africaines et redistribuer la valeur vers le monde.",
    icon: Crown,
  },
  {
    id: "children",
    title: "Investir dans les enfants de la guerre",
    body: "Une partie de la mission est dediee aux jeunes du Nord et du Sud-Kivu par l'education artistique gratuite, parce que raconter et dessiner peut devenir une armure face a la guerre.",
    icon: Shield,
  },
  {
    id: "goal",
    title: "Un seul objectif",
    body: "Construire l'empire creatif que le monde disait impossible pour l'Afrique : comics, jeux, mode et parfum produits sur le sol africain comme un concurrent, pas comme une curiosite.",
    icon: Crown,
  },
];

const contentByLocale: Record<SupportedLocale, Omit<KingKufululaPageContent, "locale">> = {
  en: {
    hero: {
      founderBadge: "Founder of ISOLELE",
      title: "HRM King Kufulula Bapindi Manikongo: the African king who built a universe from nothing",
      description: "Traditional king of the Bapindi people and Manikongo of the Kongo royal lineage, founder of ISOLELE, built from Kinshasa for the world.",
    },
    navigation: {
      items: sectionsEn.map((section) => ({ id: section.id, label: section.title })),
    },
    editorial: {
      sections: sectionsEn,
    },
    cta: {
      eyebrow: "Three paths. One universe. One crown.",
      links: [
        { label: "Explore the ISOLELE universe", href: "/#hero" },
        { label: "Read ZAIIRE", href: "/books/zaiire" },
        { label: "Discover your royal history", href: "/royal-history" },
      ],
    },
    seo: {
      title: "HRM King Kufulula Bapindi Manikongo: The African King Who Built a Universe From Nothing",
      description: "Founder of ISOLELE, traditional king of the Bapindi people, and Manikongo of the Kongo royal lineage.",
    },
  },
  fr: {
    hero: {
      founderBadge: "Fondateur d'ISOLELE",
      title: "HRM King Kufulula Bapindi Manikongo : le roi africain qui a bati un univers a partir de rien",
      description: "Roi traditionnel du peuple Bapindi et Manikongo de la lignee royale Kongo, fondateur d'ISOLELE, construit depuis Kinshasa pour le monde.",
    },
    navigation: {
      items: sectionsFr.map((section) => ({ id: section.id, label: section.title })),
    },
    editorial: {
      sections: sectionsFr,
    },
    cta: {
      eyebrow: "Trois chemins. Un univers. Une couronne.",
      links: [
        { label: "Explorer l'univers ISOLELE", href: "/#hero" },
        { label: "Lire ZAIIRE", href: "/books/zaiire" },
        { label: "Decouvrir votre histoire royale", href: "/royal-history" },
      ],
    },
    seo: {
      title: "HRM King Kufulula Bapindi Manikongo : le roi africain qui a bati un univers a partir de rien",
      description: "Fondateur d'ISOLELE, roi traditionnel du peuple Bapindi et Manikongo de la lignee royale Kongo.",
    },
  },
};

export const KING_KUFULULA_PHOTO = {
  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/King%20kufulula-1pEeYE9t1QYruZhNooZuPw7Nkd1A8l.jpg",
  alt: "HRM King Kufulula",
} as const;

export function getKingKufululaPageContent(locale: SupportedLocale): KingKufululaPageContent {
  const content = contentByLocale[locale] ?? contentByLocale.en;
  return { locale, ...content };
}
