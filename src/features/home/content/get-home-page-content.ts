import { resolveContentLocale, type SupportedLocale } from "@/shared/i18n/locales";
import type { HomePageContent } from "./types";

export function getHomePageContent(locale: SupportedLocale): HomePageContent {
  return {
    locale: resolveContentLocale(locale),
  };
}
