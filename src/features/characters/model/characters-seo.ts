import type { Metadata } from "next";
import { characterProfiles, type CharacterSlug } from "./characters.data";

export function getCharacterBySlug(slug: string) {
  return characterProfiles[slug as CharacterSlug];
}

export function getCharacterStaticParams() {
  return Object.keys(characterProfiles).map((character) => ({ character }));
}

export function getCharacterMetadata(slug: string): Metadata {
  const profile = getCharacterBySlug(slug);

  if (!profile) {
    return {
      title: "Character Not Found | ISOLELE",
      description: "The character you are looking for does not exist in the ISOLELE universe.",
    };
  }

  const pageTitle = `ISOLELE | ${profile.name}`;
  const pageDescription = `Discover ${profile.name} - ${profile.title} in the ISOLELE universe.`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `/characters/${slug}`,
    },
    openGraph: {
      type: "article",
      url: `/characters/${slug}`,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: profile.image,
          width: 1200,
          height: 1600,
          alt: `${profile.name} character portrait`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [profile.image],
    },
  };
}

