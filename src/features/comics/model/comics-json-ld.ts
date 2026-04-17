import { absoluteUrl } from "@/shared/seo/site-url";

export function getComicsCollectionJsonLd() {
  const siteUrl = absoluteUrl("/");

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ISOLELE Comics - African Comic Collection",
    description: "Explore African comic stories, mythological heroes, and kingdom narratives in the ISOLELE comics collection.",
    url: absoluteUrl("/comics"),
    isPartOf: siteUrl,
    about: "African comic universe and Kongo mythology storytelling",
    publisher: {
      "@type": "Organization",
      name: "ISOLELE",
      url: siteUrl,
    },
  };
}

