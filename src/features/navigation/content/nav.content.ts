import type { SupportedLocale } from "@/shared/i18n/locales";

export type NavLinkLabelKey =
  | "nav_home"
  | "nav_comics"
  | "nav_characters"
  | "nav_games"
  | "nav_all_characters"
  | "nav_shop"
  | "nav_restaurant";

export interface NavigationContent {
  labels: Record<NavLinkLabelKey, string>;
  mobileMenu: {
    openLabel: string;
    closeLabel: string;
    languageLabel: string;
    themeLabel: string;
    themeButtonLabel: string;
  };
  languageSwitcher: {
    buttonLabel: string;
  };
  footer: {
    brandAlt: string;
    description: string;
    exploreTitle: string;
    resourcesTitle: string;
    newsletterTitle: string;
    newsletterDescription: string;
    emailPlaceholder: string;
    subscribeLabel: string;
    thankYouLabel: string;
    copyright: string;
    bottomLinks: Array<{ label: string; href: string }>;
  };
}

export const navigationContent: Record<SupportedLocale, NavigationContent> = {
  fr: {
    labels: {
      nav_home: "Accueil",
      nav_comics: "Comics",
      nav_characters: "Personnages",
      nav_games: "Jeux",
      nav_all_characters: "Tous les personnages",
      nav_shop: "Boutique",
      nav_restaurant: "Restaurant",
    },
    mobileMenu: {
      openLabel: "Ouvrir le menu",
      closeLabel: "Fermer le menu",
      languageLabel: "Langue",
      themeLabel: "Theme",
      themeButtonLabel: "Theme",
    },
    languageSwitcher: {
      buttonLabel: "Changer de langue",
    },
    footer: {
      brandAlt: "ISOLELE - The Chosen Ones",
      description:
        "Isolele est un univers visionnaire ne pour restaurer l'ame du recit africain et faire rayonner royaute, memoire et puissance culturelle.",
      exploreTitle: "Explorer",
      resourcesTitle: "Ressources",
      newsletterTitle: "Rester informe",
      newsletterDescription:
        "Recevez les sorties, les evenements et les nouvelles importantes de l'univers ISOLELE.",
      emailPlaceholder: "Votre adresse email",
      subscribeLabel: "S'abonner",
      thankYouLabel: "Merci",
      copyright: "Copyright 2026 ISOLELE. Tous droits reserves.",
      bottomLinks: [
        { label: "Plan du site", href: "/sitemap.xml" },
        { label: "Accessibilite", href: "/privacy" },
        { label: "Gestion des cookies", href: "/privacy" },
      ],
    },
  },
  en: {
    labels: {
      nav_home: "Home",
      nav_comics: "Comics",
      nav_characters: "Characters",
      nav_games: "Games",
      nav_all_characters: "All characters",
      nav_shop: "Shop",
      nav_restaurant: "Restaurant",
    },
    mobileMenu: {
      openLabel: "Open menu",
      closeLabel: "Close menu",
      languageLabel: "Language",
      themeLabel: "Theme",
      themeButtonLabel: "Theme",
    },
    languageSwitcher: {
      buttonLabel: "Switch language",
    },
    footer: {
      brandAlt: "ISOLELE - The Chosen Ones",
      description:
        "Isolele is a visionary universe built to restore African storytelling through royalty, memory, and cultural power.",
      exploreTitle: "Explore",
      resourcesTitle: "Resources",
      newsletterTitle: "Stay informed",
      newsletterDescription:
        "Receive new releases, events, and important updates from the ISOLELE universe.",
      emailPlaceholder: "Your email address",
      subscribeLabel: "Subscribe",
      thankYouLabel: "Thank you",
      copyright: "Copyright 2026 ISOLELE. All rights reserved.",
      bottomLinks: [
        { label: "Site map", href: "/sitemap.xml" },
        { label: "Accessibility", href: "/privacy" },
        { label: "Cookie settings", href: "/privacy" },
      ],
    },
  },
  pt: {
    labels: {
      nav_home: "Início",
      nav_comics: "Comics",
      nav_characters: "Personagens",
      nav_games: "Jogos",
      nav_all_characters: "Todos os personagens",
      nav_shop: "Loja",
      nav_restaurant: "Restaurante",
    },
    mobileMenu: {
      openLabel: "Abrir menu",
      closeLabel: "Fechar menu",
      languageLabel: "Idioma",
      themeLabel: "Tema",
      themeButtonLabel: "Tema",
    },
    languageSwitcher: {
      buttonLabel: "Mudar idioma",
    },
    footer: {
      brandAlt: "ISOLELE - The Chosen Ones",
      description: "Celebrando o património africano através de histórias poderosas e aventuras heróicas.",
      exploreTitle: "Explorar",
      resourcesTitle: "Recursos",
      newsletterTitle: "Mantenha-se Atualizado",
      newsletterDescription: "Receba as últimas notícias da ISOLELE na sua caixa de entrada.",
      emailPlaceholder: "Digite o seu e-mail",
      subscribeLabel: "Subscrever",
      thankYouLabel: "Obrigado",
      copyright: "Copyright 2026 ISOLELE. Todos os direitos reservados.",
      bottomLinks: [
        { label: "Mapa do site", href: "/sitemap.xml" },
        { label: "Acessibilidade", href: "/privacy" },
        { label: "Definições de cookies", href: "/privacy" },
      ],
    },
  },
  es: {
    labels: {
      nav_home: "Inicio",
      nav_comics: "Comics",
      nav_characters: "Personajes",
      nav_games: "Juegos",
      nav_all_characters: "Todos los personajes",
      nav_shop: "Tienda",
      nav_restaurant: "Restaurante",
    },
    mobileMenu: {
      openLabel: "Abrir menú",
      closeLabel: "Cerrar menú",
      languageLabel: "Idioma",
      themeLabel: "Tema",
      themeButtonLabel: "Tema",
    },
    languageSwitcher: {
      buttonLabel: "Cambiar idioma",
    },
    footer: {
      brandAlt: "ISOLELE - The Chosen Ones",
      description: "Celebrando la herencia africana a través de historias poderosas y aventuras heroicas.",
      exploreTitle: "Explorar",
      resourcesTitle: "Recursos",
      newsletterTitle: "Mantente informado",
      newsletterDescription: "Recibe las últimas noticias de ISOLELE en tu bandeja de entrada.",
      emailPlaceholder: "Introduce tu correo electrónico",
      subscribeLabel: "Suscribirse",
      thankYouLabel: "Gracias",
      copyright: "Copyright 2026 ISOLELE. Todos los derechos reservados.",
      bottomLinks: [
        { label: "Mapa del sitio", href: "/sitemap.xml" },
        { label: "Accesibilidad", href: "/privacy" },
        { label: "Configuración de cookies", href: "/privacy" },
      ],
    },
  },
  zu: {
    labels: {
      nav_home: "Ekhaya",
      nav_comics: "Comics",
      nav_characters: "Abalingisi",
      nav_games: "Imidlalo",
      nav_all_characters: "Bonke abalingisi",
      nav_shop: "Isitolo",
      nav_restaurant: "Irestorenti",
    },
    mobileMenu: {
      openLabel: "Vula imenyu",
      closeLabel: "Vala imenyu",
      languageLabel: "Ulimi",
      themeLabel: "Theme",
      themeButtonLabel: "Theme",
    },
    languageSwitcher: {
      buttonLabel: "Shintsha ulimi",
    },
    footer: {
      brandAlt: "ISOLELE - The Chosen Ones",
      description: "Sigubha ifa lama-Afrika ngezindaba ezinamandla kanye nezigigaba zobuqhawe.",
      exploreTitle: "Hlola",
      resourcesTitle: "Izinsiza",
      newsletterTitle: "Hlala Unolwazi",
      newsletterDescription: "Thola izindaba zakamuva ze-ISOLELE ebhokisini yakho ye-imeyili.",
      emailPlaceholder: "Faka ikheli lakho le-imeyili",
      subscribeLabel: "Bhalisela",
      thankYouLabel: "Ngiyabonga",
      copyright: "Copyright 2026 ISOLELE. Wonke amalungelo agodliwe.",
      bottomLinks: [
        { label: "Imephu yesayithi", href: "/sitemap.xml" },
        { label: "Ukufinyeleleka", href: "/privacy" },
        { label: "Amasethingi we-cookie", href: "/privacy" },
      ],
    },
  },
  xh: {
    labels: {
      nav_home: "Ekhaya",
      nav_comics: "Comics",
      nav_characters: "Abalinganwa",
      nav_games: "Imidlalo",
      nav_all_characters: "Bonke abalinganwa",
      nav_shop: "Ivenkile",
      nav_restaurant: "Indawo Yokutya",
    },
    mobileMenu: {
      openLabel: "Vula imenyu",
      closeLabel: "Vala imenyu",
      languageLabel: "Ulwimi",
      themeLabel: "Theme",
      themeButtonLabel: "Theme",
    },
    languageSwitcher: {
      buttonLabel: "Tshintsha ulwimi",
    },
    footer: {
      brandAlt: "ISOLELE - The Chosen Ones",
      description: "Sibungaza ilifa le-Afrika ngamabali anamandla kunye neenkqubo zobuqhawe.",
      exploreTitle: "Hlola",
      resourcesTitle: "Izixhobo",
      newsletterTitle: "Hlala Unolwazi",
      newsletterDescription: "Fumana iindaba zakutsha zeISOLELE kwibhokisi yakho yemeyile.",
      emailPlaceholder: "Ngenisa idilesi yakho ye-imeyile",
      subscribeLabel: "Bhalisela",
      thankYouLabel: "Enkosi",
      copyright: "Copyright 2026 ISOLELE. Onke amalungelo agciniwe.",
      bottomLinks: [
        { label: "Imephu yesayithi", href: "/sitemap.xml" },
        { label: "Ukufikeleleka", href: "/privacy" },
        { label: "Useto lwe-cookie", href: "/privacy" },
      ],
    },
  },
  sw: {
    labels: {
      nav_home: "Nyumbani",
      nav_comics: "Comics",
      nav_characters: "Wahusika",
      nav_games: "Michezo",
      nav_all_characters: "Wahusika wote",
      nav_shop: "Duka",
      nav_restaurant: "Mkahawa",
    },
    mobileMenu: {
      openLabel: "Fungua menyu",
      closeLabel: "Funga menyu",
      languageLabel: "Lugha",
      themeLabel: "Mandhari",
      themeButtonLabel: "Mandhari",
    },
    languageSwitcher: {
      buttonLabel: "Badilisha lugha",
    },
    footer: {
      brandAlt: "ISOLELE - The Chosen Ones",
      description: "Kusherehekea urithi wa Kiafrika kupitia hadithi zenye nguvu na matukio ya kishujaa.",
      exploreTitle: "Gundua",
      resourcesTitle: "Rasilimali",
      newsletterTitle: "Kaa Umesasishwa",
      newsletterDescription: "Pata habari za hivi punde kuhusu ISOLELE kwenye barua pepe yako.",
      emailPlaceholder: "Ingiza barua pepe yako",
      subscribeLabel: "Jiandikishe",
      thankYouLabel: "Asante",
      copyright: "Copyright 2026 ISOLELE. Haki zote zimehifadhiwa.",
      bottomLinks: [
        { label: "Ramani ya tovuti", href: "/sitemap.xml" },
        { label: "Ufikivu", href: "/privacy" },
        { label: "Mipangilio ya vidakuzi", href: "/privacy" },
      ],
    },
  },
  ln: {
    labels: {
      nav_home: "Ndako",
      nav_comics: "Comics",
      nav_characters: "Bato",
      nav_games: "Masano",
      nav_all_characters: "Bato nyonso",
      nav_shop: "Butiki",
      nav_restaurant: "Lestolá",
    },
    mobileMenu: {
      openLabel: "Fungola menu",
      closeLabel: "Kanga menu",
      languageLabel: "Monoko",
      themeLabel: "Theme",
      themeButtonLabel: "Theme",
    },
    languageSwitcher: {
      buttonLabel: "Bongola monoko",
    },
    footer: {
      brandAlt: "ISOLELE - The Chosen Ones",
      description: "Kosepelisa libula ya Afrika na nzela ya masapo makasi mpe maye ya bokonzi.",
      exploreTitle: "Luka",
      resourcesTitle: "Biloko",
      newsletterTitle: "Zala na nsango",
      newsletterDescription: "Zwá nsango ya sika ya ISOLELE na email na yo.",
      emailPlaceholder: "Tía email na yo",
      subscribeLabel: "Kokóma",
      thankYouLabel: "Melesi",
      copyright: "Copyright 2026 ISOLELE. Makoki nyonso ezali kobatama.",
      bottomLinks: [
        { label: "Karte ya site", href: "/sitemap.xml" },
        { label: "Bokoki ya kokoma", href: "/privacy" },
        { label: "Ba paramètre ya cookie", href: "/privacy" },
      ],
    },
  },
};

export function getNavigationContent(locale: SupportedLocale) {
  return navigationContent[locale] ?? navigationContent.en;
}
