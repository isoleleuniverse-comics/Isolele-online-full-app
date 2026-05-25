import { absoluteUrl } from "@/shared/seo/site-url";
import { resolveContentLocale, type ContentLocale, type SupportedLocale } from "@/shared/i18n/locales";
import type { HomeSeoConfig } from "@/features/home/content";

const metadataByLocale: Record<ContentLocale, HomeSeoConfig["metadata"]> = {
  en: {
    title: "Black African Superhero Comics | Kongo Universe | ISOLELE",
    description:
      "ISOLELE is the first Black African superhero universe rooted in authentic Kongo heritage. Discover Zaiire, Kufu, Black African heroes, and a world where Africa has always had heroes.",
    keywords: [
      "Black African superhero comics",
      "African superhero universe",
      "Kongo mythology comics",
      "Pan-African comics",
      "Black superhero comics",
      "African fantasy comics",
      "Zaiire comics",
      "Kufu card game",
      "Congolese comics",
      "ISOLELE",
    ],
    openGraph: {
      title: "Black African Superhero Comics | Kongo Universe | ISOLELE",
      description: "The first Black African superhero universe rooted in Kongo heritage. Africa has always had heroes.",
      url: "/en",
      images: [
        {
          url: absoluteUrl("/LOGO.png"),
          width: 512,
          height: 512,
          alt: "ISOLELE icon",
        },
      ],
    },
    alternates: {
      canonical: "/en",
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
  },
  fr: {
    title: "Comics de super-heros africains noirs | Univers Kongo | ISOLELE",
    description:
      "ISOLELE est le premier univers de super-heros africains noirs ancre dans l'heritage authentique du Kongo. Decouvrez Zaiire, Kufu, des heros africains noirs et un monde ou l'Afrique a toujours eu des heros.",
    keywords: [
      "comics super-heros africains noirs",
      "univers super-heros africain",
      "comics mythologie kongo",
      "comics panafricains",
      "fantasy africaine",
      "comics congolais",
      "jeu de cartes Kufu",
      "Zaiire",
      "heritage kongo",
      "ISOLELE",
    ],
    openGraph: {
      title: "Comics de super-heros africains noirs | Univers Kongo | ISOLELE",
      description: "Le premier univers de super-heros africains noirs enracine dans l'heritage Kongo.",
      url: "/fr",
      images: [
        {
          url: absoluteUrl("/LOGO.png"),
          width: 512,
          height: 512,
          alt: "ISOLELE icon",
        },
      ],
    },
    alternates: {
      canonical: "/fr",
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
  },
};

const jsonLdByLocale: Record<ContentLocale, HomeSeoConfig["jsonLd"]> = {
  en: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "ISOLELE COMICS",
      alternateName: ["Isolele", "African Superheroes"],
      url: "https://isolele.com",
      description:
        "ISOLELE is a visionary universe built to restore the soul of African storytelling through heroic mythologies rooted in Kongo heritage.",
      foundingDate: "2024",
      founders: [
        {
          "@type": "Person",
          name: "HRM King Kufulula",
          jobTitle: "Royal Founder & Cultural Architect",
        },
      ],
      sameAs: [
        "https://www.instagram.com/isolelecomics",
        "https://www.facebook.com/isolelecomics",
        "https://twitter.com/isolelecomics",
        "https://www.youtube.com/@isolelecomics",
      ],
    },
    comicSeries: {
      "@context": "https://schema.org",
      "@type": "ComicSeries",
      name: "Zaiire: The Prince of Kongo",
      alternateName: "The Prince of Kongo: The Necklace of Destiny",
      description:
        "An uplifting action-packed African superhero saga celebrating heritage, courage, and self-discovery.",
      publisher: {
        "@type": "Organization",
        name: "ISOLELE COMICS",
      },
      inLanguage: ["en", "fr"],
      genre: ["Superhero", "African Mythology", "Fantasy", "Adventure"],
    },
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "ISOLELE COMICS",
      alternateName: "Isolele - Home of African Superheroes",
      url: "https://isolele.com/en",
      inLanguage: ["en", "fr"],
      description: "Discover the mythological universe of African superheroes rooted in Kongo heritage.",
    },
  },
  fr: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "ISOLELE COMICS",
      alternateName: ["Isolele", "Super-heros africains"],
      url: "https://isolele.com",
      description:
        "ISOLELE est un univers visionnaire cree pour restaurer l'ame du storytelling africain a travers des mythologies heroiques ancrees dans l'heritage du Kongo.",
      foundingDate: "2024",
      founders: [
        {
          "@type": "Person",
          name: "HRM King Kufulula",
          jobTitle: "Fondateur royal et architecte culturel",
        },
      ],
      sameAs: [
        "https://www.instagram.com/isolelecomics",
        "https://www.facebook.com/isolelecomics",
        "https://twitter.com/isolelecomics",
        "https://www.youtube.com/@isolelecomics",
      ],
    },
    comicSeries: {
      "@context": "https://schema.org",
      "@type": "ComicSeries",
      name: "Zaiire : Le Prince du Kongo",
      alternateName: "Le Prince du Kongo : Le Collier de la Destinee",
      description:
        "Une saga africaine de super-heros, intense et lumineuse, qui celebre l'heritage, le courage et la decouverte de soi.",
      publisher: {
        "@type": "Organization",
        name: "ISOLELE COMICS",
      },
      inLanguage: ["fr", "en"],
      genre: ["Super-heros", "Mythologie africaine", "Fantasy", "Aventure"],
    },
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "ISOLELE COMICS",
      alternateName: "Isolele - Maison des super-heros africains",
      url: "https://isolele.com/fr",
      inLanguage: ["fr", "en"],
      description: "Decouvrez l'univers mythologique de super-heros africains ancre dans l'heritage du Kongo.",
    },
  },
};

export function getHomeSeo(locale: SupportedLocale): HomeSeoConfig {
  const contentLocale = resolveContentLocale(locale);
  return {
    metadata: metadataByLocale[contentLocale],
    jsonLd: jsonLdByLocale[contentLocale],
  };
}
