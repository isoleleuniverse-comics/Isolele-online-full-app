import type { SupportedLocale } from "@/shared/i18n/locales";
import { BOOKS_CTA_LINKS } from "@/features/books/model/books-cta-links";
import type {
  ComicBook,
  ComicCategory,
  ComicDetailPageData,
  ComicsPageContent,
} from "./comics.types";

const comicsByLocale: Record<SupportedLocale, Record<ComicCategory, ComicBook[]>> = {
  en: {
    featured: [
      {
        id: "zaiire",
        title: "ZAIIRE",
        description: "The prince of Kongo awakens the Necklace of Destiny and restores erased royal memory.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5413e9fc-976b-4c59-97bd-5858678b1f42.jpeg",
        price: 25.99,
      },
      {
        id: "bambula",
        title: "BAMBULA",
        description: "A sacred drum hero carrying rhythm, memory, and spiritual power across worlds.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
        price: 24.99,
      },
      {
        id: "mokele",
        title: "MOKELE",
        description: "Kinshasa forges a street survivor into a ruler no empire can contain.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg",
        price: 26.99,
      },
    ],
    bestseller: [
      {
        id: "makanda",
        title: "MAKANDA",
        description: "A hidden empire protected by the Sacred Flame waits to rise again.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
        price: 23.99,
      },
      {
        id: "sacred-flame",
        title: "Inside the Sacred Flame Blueprints",
        description: "A deep dive into the spiritual science hidden in ancestral archives.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Book%202%20Isolele-QCEiRH2KJp3oFt4O31Qocqap3nLgiJ.jpg",
        price: 27.99,
      },
      {
        id: "kufulula",
        title: "King Kufulula: The Founder",
        description: "The royal origin story behind the ISOLELE narrative empire.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1173-wrVJYiZhuW6ZvCM0Xronsu544ccrqV.jpeg",
        price: 29.99,
      },
    ],
    new: [
      {
        id: "how-isolele",
        title: "How ISOLELE Reclaims African Memory",
        description: "A cultural manifesto on memory, identity, and narrative sovereignty.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_screenshot_Mar%2031%2C%202026%202_16_31%20PM%20GMT%2B02_00-v3ueG61JhSCQHjK2LqR5FJbw9dJJao.png",
        price: 21.99,
      },
      {
        id: "zattar",
        title: "ZATTAR",
        description: "A denied prince decides every throne in the universe should be his.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e9c64c65-3717-4fe3-a391-885767df3303-LbjnMwCViF43pwErKmoFv7iGxQdCeQ.jpeg",
        price: 22.99,
      },
      {
        id: "zaiko",
        title: "ZAIKO",
        description: "North Kivu and Kinshasa shape the rise of a king built from survival.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1175-njlosetUOsqZszKylrOXsIRLw0l3s7.jpeg",
        price: 24.99,
      },
    ],
  },
  fr: {
    featured: [
      {
        id: "zaiire",
        title: "ZAIIRE",
        description: "Le prince du Kongo eveille le Collier du Destin et restaure une memoire royale effacee.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5413e9fc-976b-4c59-97bd-5858678b1f42.jpeg",
        price: 25.99,
      },
      {
        id: "bambula",
        title: "BAMBULA",
        description: "Un heros du tambour sacre qui porte rythme, memoire et puissance spirituelle.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
        price: 24.99,
      },
      {
        id: "mokele",
        title: "MOKELE",
        description: "Kinshasa forge un survivant de la rue en souverain qu'aucun empire ne peut contenir.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg",
        price: 26.99,
      },
    ],
    bestseller: [
      {
        id: "makanda",
        title: "MAKANDA",
        description: "Un empire cache protege par la Flamme Sacree attend de se relever.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
        price: 23.99,
      },
      {
        id: "sacred-flame",
        title: "Au coeur des plans de la Flamme Sacree",
        description: "Une exploration de la science spirituelle cachee dans les archives ancestrales.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Book%202%20Isolele-QCEiRH2KJp3oFt4O31Qocqap3nLgiJ.jpg",
        price: 27.99,
      },
      {
        id: "kufulula",
        title: "King Kufulula : Le fondateur",
        description: "L'origine royale derriere l'empire narratif ISOLELE.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1173-wrVJYiZhuW6ZvCM0Xronsu544ccrqV.jpeg",
        price: 29.99,
      },
    ],
    new: [
      {
        id: "how-isolele",
        title: "Comment ISOLELE restaure la memoire africaine",
        description: "Un manifeste culturel sur la memoire, l'identite et la souverainete narrative.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_screenshot_Mar%2031%2C%202026%202_16_31%20PM%20GMT%2B02_00-v3ueG61JhSCQHjK2LqR5FJbw9dJJao.png",
        price: 21.99,
      },
      {
        id: "zattar",
        title: "ZATTAR",
        description: "Un prince refuse par le destin decide de prendre tous les trones de l'univers.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e9c64c65-3717-4fe3-a391-885767df3303-LbjnMwCViF43pwErKmoFv7iGxQdCeQ.jpeg",
        price: 22.99,
      },
      {
        id: "zaiko",
        title: "ZAIKO",
        description: "Le Nord-Kivu et Kinshasa faconnent l'ascension d'un roi ne de la survie.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1175-njlosetUOsqZszKylrOXsIRLw0l3s7.jpeg",
        price: 24.99,
      },
    ],
  },
};

const comicsPageContent: Record<SupportedLocale, Omit<ComicsPageContent, "locale">> = {
  fr: {
    hero: {
      title: "ISOLELE Comics",
      description: "Decouvrez des recits premium, des heros souverains et des aventures ancrees dans la memoire africaine.",
    },
    sections: [
      { id: "featured", title: "Collections vedettes", ctaLabel: "Voir tout", ctaHref: "/books", books: comicsByLocale.fr.featured },
      { id: "bestseller", title: "Meilleures ventes", ctaLabel: "Voir tout", ctaHref: "/books", books: comicsByLocale.fr.bestseller },
      { id: "new", title: "Nouvelles sorties", ctaLabel: "Voir tout", ctaHref: "/books", books: comicsByLocale.fr.new },
    ],
    footer: {
      description: "Des histoires puissantes pour celebrer l'heritage africain a travers des icones, des royaumes et des destins.",
      primaryCtaLabel: "Retour a l'accueil",
      primaryCtaHref: "/",
      secondaryCtaLabel: "Explorer le jeu Kufu",
      secondaryCtaHref: "/kufu-game",
    },
    ui: {
      readLabel: "Lire",
      scrollLeftLabel: "Defiler vers la gauche",
      scrollRightLabel: "Defiler vers la droite",
    },
  },
  en: {
    hero: {
      title: "ISOLELE Comics",
      description: "Explore premium stories, sovereign heroes, and adventures rooted in African memory.",
    },
    sections: [
      { id: "featured", title: "Featured collections", ctaLabel: "See all", ctaHref: "/books", books: comicsByLocale.en.featured },
      { id: "bestseller", title: "Best sellers", ctaLabel: "See all", ctaHref: "/books", books: comicsByLocale.en.bestseller },
      { id: "new", title: "New releases", ctaLabel: "See all", ctaHref: "/books", books: comicsByLocale.en.new },
    ],
    footer: {
      description: "Powerful stories celebrating African heritage through icons, kingdoms, and destiny.",
      primaryCtaLabel: "Back to home",
      primaryCtaHref: "/",
      secondaryCtaLabel: "Explore Kufu Game",
      secondaryCtaHref: "/kufu-game",
    },
    ui: {
      readLabel: "Read",
      scrollLeftLabel: "Scroll left",
      scrollRightLabel: "Scroll right",
    },
  },
};

const zaiireDetailByLocale: Record<SupportedLocale, ComicDetailPageData> = {
  en: {
    slug: "zaiire",
    title: "ZAIIRE",
    eyebrow: "The Prince of Kongo",
    subtitle: "The Necklace of Destiny",
    description:
      "A royal odyssey where memory, thunder, and destiny collide. Zaiire inherits more than a kingdom when the Necklace of Destiny awakens.",
    heroImage: "/images/zaiire-prince-cover.jpg",
    heroImageAlt: "Zaiire Prince of Kongo cover art",
    price: 25.99,
    purchaseHref: BOOKS_CTA_LINKS.zaiireBookI,
    characters: [
      {
        name: "Zaiire",
        role: "Chosen prince",
        description: "Son of Shango and Kimoya, he carries royal blood, divine force, and the burden of restoring erased memory.",
        image: "/characters/zaiire-kongo-throne.jpg",
      },
      {
        name: "Kimoya",
        role: "Warrior queen",
        description: "A sovereign mother whose strength, sacrifice, and royal lineage set Zaiire's destiny in motion.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0013-6Xt165l5rPK1nNYEUoAqZBFN42ioH4.jpg",
      },
      {
        name: "Shango",
        role: "Divine thunder lord",
        description: "The celestial force behind Zaiire's power, linking him to a world larger than kings and empires.",
        image: "/images/cosmic-whirlwind-scene.jpg",
      },
      {
        name: "The Necklace of Destiny",
        role: "Living relic",
        description: "Forged to choose, not to adorn. It awakens ancestral memory and returns royal power to its rightful heir.",
        image: "/images/necklace-transformation.jpg",
      },
    ],
    synopsisTitle: "Synopsis",
    synopsis: [
      "Raised between privilege and silence, Zaiire thinks he understands the world that made him. Everything changes when he reunites with his mother in Kinshasa and receives the Necklace of Destiny.",
      "The relic does not simply reveal power. It reveals history, bloodlines, and a war against memory itself. What begins as a search for family becomes a larger fight for the soul of the Kongo kingdom.",
      "As thunder, prophecy, and royal memory awaken inside him, Zaiire must decide whether he will remain a prince or become the chosen force his ancestors have waited for.",
    ],
    galleryTitle: "Selected Pages",
    gallery: [
      { image: "/images/zaiire-cast-ensemble.jpg", alt: "Zaiire cast ensemble" },
      { image: "/images/necklace-transformation.jpg", alt: "The Necklace of Destiny transformation" },
      { image: "/images/royal-bloodlines.jpg", alt: "Royal bloodlines visual" },
      { image: "/images/body-transformation.jpg", alt: "Zaiire power awakening" },
    ],
    authorTitle: "Author",
    authorName: "HRM King Kufulula",
    authorDescription:
      "Traditional king, cultural architect, and founder of ISOLELE. He builds stories that restore African memory through royalty, mythology, and sovereign imagination.",
    authorImage: "/king-kufulula-portrait.jpg",
    backLabel: "Back to all comics",
    comingSoon: false,
  },
  fr: {
    slug: "zaiire",
    title: "ZAIIRE",
    eyebrow: "Le Prince du Kongo",
    subtitle: "Le Collier du Destin",
    description:
      "Une odyssee royale ou memoire, tonnerre et destin se rencontrent. Zaiire n'herite pas seulement d'un royaume quand le Collier du Destin s'eveille.",
    heroImage: "/images/zaiire-prince-cover.jpg",
    heroImageAlt: "Couverture Zaiire Prince du Kongo",
    price: 25.99,
    purchaseHref: BOOKS_CTA_LINKS.zaiireBookI,
    characters: [
      {
        name: "Zaiire",
        role: "Prince elu",
        description: "Fils de Shango et de Kimoya, il porte un sang royal, une force divine et la mission de restaurer une memoire effacee.",
        image: "/characters/zaiire-kongo-throne.jpg",
      },
      {
        name: "Kimoya",
        role: "Reine guerriere",
        description: "Mere souveraine dont la force, le sacrifice et la lignee royale mettent en marche le destin de Zaiire.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0013-6Xt165l5rPK1nNYEUoAqZBFN42ioH4.jpg",
      },
      {
        name: "Shango",
        role: "Seigneur divin du tonnerre",
        description: "La force celeste qui nourrit le pouvoir de Zaiire et l'ouvre a un monde plus vaste que les royaumes.",
        image: "/images/cosmic-whirlwind-scene.jpg",
      },
      {
        name: "Le Collier du Destin",
        role: "Relique vivante",
        description: "Forge pour choisir et non pour decorer. Il eveille la memoire ancestrale et rend le pouvoir royal a son veritable heritier.",
        image: "/images/necklace-transformation.jpg",
      },
    ],
    synopsisTitle: "Synopsis",
    synopsis: [
      "Eleve entre privilege et silences, Zaiire croit comprendre le monde qui l'a forme. Tout change lorsqu'il retrouve sa mere a Kinshasa et recoit le Collier du Destin.",
      "La relique ne revele pas seulement une puissance. Elle revele une histoire, des lignees et une guerre menee contre la memoire elle-meme. La quete familiale devient alors un combat pour l'ame du royaume Kongo.",
      "Alors que le tonnerre, la prophetie et la memoire royale s'eveillent en lui, Zaiire doit choisir s'il restera un prince ou deviendra la force attendue par ses ancetres.",
    ],
    galleryTitle: "Quelques planches",
    gallery: [
      { image: "/images/zaiire-cast-ensemble.jpg", alt: "Ensemble des personnages de Zaiire" },
      { image: "/images/necklace-transformation.jpg", alt: "Transformation du Collier du Destin" },
      { image: "/images/royal-bloodlines.jpg", alt: "Lignees royales du Kongo" },
      { image: "/images/body-transformation.jpg", alt: "Eveil du pouvoir de Zaiire" },
    ],
    authorTitle: "Auteur",
    authorName: "HRM King Kufulula",
    authorDescription:
      "Roi traditionnel, architecte culturel et fondateur d'ISOLELE. Il construit des histoires qui restaurent la memoire africaine a travers la royaute, la mythologie et l'imaginaire souverain.",
    authorImage: "/king-kufulula-portrait.jpg",
    backLabel: "Retour aux comics",
    comingSoon: false,
  },
};

const detailUi = {
  en: {
    comingSoonEyebrow: "New chapter loading",
    comingSoonSubtitle: "A full comic page is on the way.",
    comingSoonBody:
      "This title is already part of the ISOLELE universe, but its dedicated reading page is still being prepared. Return soon to discover the full cast, synopsis, and selected pages.",
    authorTitle: "Author",
    authorName: "ISOLELE Studio",
    authorDescription:
      "ISOLELE develops stories from the DRC for a global audience, blending mythology, royalty, and contemporary African imagination.",
    backLabel: "Back to all comics",
  },
  fr: {
    comingSoonEyebrow: "Nouveau chapitre en preparation",
    comingSoonSubtitle: "La page complete arrive bientot.",
    comingSoonBody:
      "Ce titre fait deja partie de l'univers ISOLELE, mais sa page de lecture detaillee est encore en preparation. Revenez bientot pour decouvrir les personnages, le synopsis et quelques planches.",
    authorTitle: "Auteur",
    authorName: "Studio ISOLELE",
    authorDescription:
      "ISOLELE developpe depuis la RDC des histoires pour le monde, entre mythologie, royaute et imagination africaine contemporaine.",
    backLabel: "Retour aux comics",
  },
} satisfies Record<
  SupportedLocale,
  {
    comingSoonEyebrow: string;
    comingSoonSubtitle: string;
    comingSoonBody: string;
    authorTitle: string;
    authorName: string;
    authorDescription: string;
    backLabel: string;
  }
>;

export function getComicsPageContent(locale: SupportedLocale): ComicsPageContent {
  const content = comicsPageContent[locale] ?? comicsPageContent.en;
  return { locale, ...content };
}

export function getAllComicBooks(locale: SupportedLocale): ComicBook[] {
  const sections = comicsByLocale[locale] ?? comicsByLocale.en;
  return Object.values(sections).flat();
}

export function getComicBookBySlug(slug: string, locale: SupportedLocale): ComicBook | null {
  return getAllComicBooks(locale).find((book) => book.id === slug) ?? null;
}

export function getComicStaticParams() {
  const slugs = new Set(getAllComicBooks("en").map((book) => book.id));
  return Array.from(slugs).map((slug) => ({ slug }));
}

export function getComicDetailPageData(slug: string, locale: SupportedLocale): ComicDetailPageData | null {
  if (slug === "zaiire") {
    return zaiireDetailByLocale[locale] ?? zaiireDetailByLocale.en;
  }

  const book = getComicBookBySlug(slug, locale);
  if (!book) {
    return null;
  }

  const ui = detailUi[locale] ?? detailUi.en;

  return {
    slug: book.id,
    title: book.title,
    eyebrow: ui.comingSoonEyebrow,
    subtitle: ui.comingSoonSubtitle,
    description: book.description,
    heroImage: book.image,
    heroImageAlt: book.title,
    price: book.price,
    characters: [],
    synopsisTitle: ui.comingSoonSubtitle,
    synopsis: [ui.comingSoonBody],
    galleryTitle: "",
    gallery: [],
    authorTitle: ui.authorTitle,
    authorName: ui.authorName,
    authorDescription: ui.authorDescription,
    authorImage: "/king-kufulula-portrait.jpg",
    backLabel: ui.backLabel,
    comingSoon: true,
    comingSoonLabel: locale === "fr" ? "Coming soon" : "Coming soon",
    comingSoonBody: ui.comingSoonBody,
  };
}
