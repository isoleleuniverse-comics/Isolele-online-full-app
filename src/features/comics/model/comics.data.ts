import { resolveContentLocale, type ContentLocale, type SupportedLocale } from "@/shared/i18n/locales";
import type { ComicBook, ComicCategory, ComicsPageContent } from "./comics.types";

const comicsByLocale: Record<ContentLocale, Record<ComicCategory, ComicBook[]>> = {
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

const comicsPageContent: Record<ContentLocale, Omit<ComicsPageContent, "locale">> = {
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

export function getComicsPageContent(locale: SupportedLocale): ComicsPageContent {
  const content = comicsPageContent[resolveContentLocale(locale)];
  return { locale, ...content };
}
