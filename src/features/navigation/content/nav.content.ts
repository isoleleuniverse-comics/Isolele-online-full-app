import { resolveContentLocale, type ContentLocale, type SupportedLocale } from "@/shared/i18n/locales";

export type NavLinkLabelKey =
  | "nav_home"
  | "nav_comics"
  | "nav_characters"
  | "nav_games"
  | "nav_all_characters";

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

export const navigationContent: Record<ContentLocale, NavigationContent> = {
  fr: {
    labels: {
      nav_home: "Accueil",
      nav_comics: "Comics",
      nav_characters: "Personnages",
      nav_games: "Jeu",
      nav_all_characters: "Tous les personnages",
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
        { label: "Plan du site", href: "/#hero" },
        { label: "Accessibilite", href: "/#hero" },
        { label: "Gestion des cookies", href: "/#hero" },
      ],
    },
  },
  en: {
    labels: {
      nav_home: "Home",
      nav_comics: "Comics",
      nav_characters: "Characters",
      nav_games: "Game",
      nav_all_characters: "All characters",
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
        { label: "Site map", href: "/#hero" },
        { label: "Accessibility", href: "/#hero" },
        { label: "Cookie settings", href: "/#hero" },
      ],
    },
  },
};

export function getNavigationContent(locale: SupportedLocale) {
  return navigationContent[resolveContentLocale(locale)];
}
