import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/shared/seo/site-url";

const CHARACTER_SLUGS = ["zaiire", "bambula", "kufulula", "mokele"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/comics"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/kufu-game"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/characters"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  const dynamicCharacterRoutes: MetadataRoute.Sitemap = CHARACTER_SLUGS.map((slug) => ({
    url: absoluteUrl(`/characters/${slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...dynamicCharacterRoutes];
}
