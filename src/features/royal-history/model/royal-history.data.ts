import { resolveContentLocale, type ContentLocale, type SupportedLocale } from "@/shared/i18n/locales";

export interface RoyalHistoryBlock {
  id: string;
  title: string;
  body: string;
}

export interface RoyalHistoryPageContent {
  locale: SupportedLocale;
  hero: {
    badge: string;
    title: string;
    lead: string[];
  };
  intro: {
    items: Array<{ id: string; label: string }>;
  };
  history: {
    sections: RoyalHistoryBlock[];
  };
  cta: {
    text: string;
    label: string;
    href: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

const historyEn: RoyalHistoryBlock[] = [
  { id: "kongo", title: "The Kongo empire", body: "One of the most sophisticated states in the world, the Kongo kingdom carried legal, artistic, and political systems long before Europe framed itself as the center of civilization." },
  { id: "rome", title: "Rome and Black origins", body: "The early story of Europe is deeply entangled with Africa, from ancestry and migration to the Moorish centuries that transformed mathematics, medicine, architecture, and philosophy." },
  { id: "europa", title: "Europe named after an African princess", body: "The name Europa points back to an African and Asian crossroads, reminding us that the symbolic foundations of modern power are not as separate from Africa as schoolbooks suggest." },
  { id: "egypt", title: "Ancient Egypt built by Africans", body: "The Nile Valley produced one of the longest-lasting civilizations in history, shaping writing, medicine, architecture, mathematics, and spirituality at world scale." },
  { id: "why", title: "Why ISOLELE exists", body: "This page exists to restore what was erased: African children deserve to inherit a truthful vision of royal history, civilizational power, and ancestral continuity." },
];

const historyFr: RoyalHistoryBlock[] = [
  { id: "kongo", title: "L'empire Kongo", body: "L'un des Etats les plus sophistiques du monde, le royaume Kongo portait des systemes juridiques, artistiques et politiques bien avant que l'Europe ne se pose en centre de la civilisation." },
  { id: "rome", title: "Rome et les origines noires", body: "Les debuts de l'Europe sont profondement lies a l'Afrique, de l'ascendance aux siecles maures qui ont transforme mathematiques, medecine, architecture et philosophie." },
  { id: "europa", title: "L'Europe nommee d'apres une princesse africaine", body: "Le nom Europa renvoie a un carrefour afro-asiatique et rappelle que les fondations symboliques du pouvoir moderne ne sont pas separees de l'Afrique." },
  { id: "egypt", title: "L'Egypte ancienne batie par des Africains", body: "La vallee du Nil a produit l'une des civilisations les plus durables de l'histoire et a marque l'ecriture, la medecine, l'architecture, les mathematiques et la spiritualite." },
  { id: "why", title: "Pourquoi ISOLELE existe", body: "Cette page restaure ce qui a ete efface : les enfants africains meritent un regard vrai sur leur histoire royale, leur puissance civilisationnelle et leur continuite ancestrale." },
];

const contentByLocale: Record<ContentLocale, Omit<RoyalHistoryPageContent, "locale">> = {
  en: {
    hero: {
      badge: "Royal history",
      title: "You have always been royal: the African history they never taught you",
      lead: [
        "The first kings of Rome were Black. Europe was named after an African princess. The Moors ruled Europe for centuries.",
        "The Kongo empire was one of the greatest civilizations in human history. This is the truth ISOLELE was born to restore.",
      ],
    },
    intro: {
      items: historyEn.map((section) => ({ id: section.id, label: section.title })),
    },
    history: {
      sections: historyEn,
    },
    cta: {
      text: "You have always been royal. Explore the universe built to restore that truth.",
      label: "Explore the ISOLELE universe",
      href: "/#hero",
    },
    seo: {
      title: "You Have Always Been Royal: The African History They Never Taught You",
      description: "A restorative history page connecting Kongo civilization, African antiquity, and ISOLELE's mission.",
    },
  },
  fr: {
    hero: {
      badge: "Histoire royale",
      title: "Vous avez toujours ete royal : l'histoire africaine qu'on ne vous a jamais enseignee",
      lead: [
        "Les premiers rois de Rome etaient noirs. L'Europe porte le nom d'une princesse africaine. Les Maures ont transforme l'Europe pendant des siecles.",
        "L'empire Kongo fut l'une des plus grandes civilisations de l'histoire humaine. C'est cette verite qu'ISOLELE veut restaurer.",
      ],
    },
    intro: {
      items: historyFr.map((section) => ({ id: section.id, label: section.title })),
    },
    history: {
      sections: historyFr,
    },
    cta: {
      text: "Vous avez toujours ete royal. Explorez l'univers construit pour restaurer cette verite.",
      label: "Explorer l'univers ISOLELE",
      href: "/#hero",
    },
    seo: {
      title: "Vous avez toujours ete royal : l'histoire africaine qu'on ne vous a jamais enseignee",
      description: "Une page de restauration historique reliant civilisation Kongo, antiquite africaine et mission d'ISOLELE.",
    },
  },
};

export function getRoyalHistoryPageContent(locale: SupportedLocale): RoyalHistoryPageContent {
  const content = contentByLocale[resolveContentLocale(locale)];
  return { locale, ...content };
}
