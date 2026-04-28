import type { Metadata } from "next";
import { characterProfilesData, CHARACTER_SLUGS } from "./characters.data";
import { isSupportedLocale, type SupportedLocale, DEFAULT_LOCALE } from "@/shared/i18n/locales";

export type CharacterSlug = typeof CHARACTER_SLUGS[number];

export function getCharacterBySlug(slug: string, locale: SupportedLocale) {
  const profiles = characterProfilesData[locale] ?? characterProfilesData.en;
  return profiles[slug] ?? null;
}

export function getCharacterStaticParams() {
  return CHARACTER_SLUGS.map((character) => ({ character }));
}

export function getCharacterMetadata(locale: string, slug: string): Metadata {
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const profile = getCharacterBySlug(slug, safeLocale);

  if (!profile) {
    return {
      title: "Character Not Found | ISOLELE",
      description: "The character you are looking for does not exist in the ISOLELE universe.",
    };
  }

  const pageTitle = `ISOLELE | ${profile.name}`;
  const pageDescription = `Discover ${profile.name} - ${profile.title} in the ISOLELE universe.`;
  const path = `/${safeLocale}/characters/${slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: path,
      languages: { fr: `/fr/characters/${slug}`, en: `/en/characters/${slug}` },
    },
    openGraph: {
      type: "article",
      url: path,
      title: pageTitle,
      description: pageDescription,
      images: [{ url: profile.image, width: 1200, height: 1600, alt: `${profile.name} character portrait` }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [profile.image],
    },
  };
}