import type { HomeLocale, HomePageContent } from "./types";

export function getHomePageContent(locale: HomeLocale): HomePageContent {
  return {
    locale,
  };
}
