import type { SupportedLocale } from "@/shared/i18n/locales";

export type NavContent = {
  nav_home: string;
  nav_comics: string;
  nav_characters: string;
  nav_games: string;
  nav_all_characters: string;
};

export const navContent = {
  fr: {
    nav_home: "Accueil",
    nav_comics: "Comics",
    nav_characters: "Personnages",
    nav_games: "Jeu",
    nav_all_characters: "TOUS LES PERSONNAGES",
  },
  en: {
    nav_home: "Home",
    nav_comics: "Comics",
    nav_characters: "Characters",
    nav_games: "Game",
    nav_all_characters: "ALL CHARACTERS",
  },
} satisfies Record<SupportedLocale, NavContent>;
