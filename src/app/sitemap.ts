import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/shared/seo/site-url";
import { CHARACTER_SLUGS } from "@/features/characters/model/characters.data";
import { BOOK_SLUGS } from "@/features/books/model/books.types";

const LOCALES = ["fr", "en"] as const;

function localized(path: string, locale: (typeof LOCALES)[number]) {
  return absoluteUrl(`/${locale}${path}`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return LOCALES.flatMap((locale) => [
    {
      url: localized("", locale),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: localized("/comics", locale),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: localized("/kufu-game", locale),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: localized("/characters", locale),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    ...CHARACTER_SLUGS.map((slug) => ({
      url: localized(`/characters/${slug}`, locale),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...BOOK_SLUGS.map((slug) => ({
      url: localized(`/books/${slug}`, locale),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.88,
    })),
  ]);
}
