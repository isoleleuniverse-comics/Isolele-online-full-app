import { absoluteUrl } from "@/lib/seo/site-url";
import { GAME, SCREENSHOTS } from "./kufu-game.data";

export function getKufuProductJsonLd() {
  const siteUrl = absoluteUrl("/");

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "KUFU Ludo - African Games by ISOLELE",
    description:
      "KUFU is a premium African games board experience from ISOLELE, blending strategy, royal symbolism, and cultural storytelling.",
    category: "Board Game",
    image: SCREENSHOTS.map((item) => item.url),
    brand: {
      "@type": "Brand",
      name: "ISOLELE",
    },
    url: absoluteUrl("/kufu-game"),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: GAME.rating,
      reviewCount: GAME.reviewCount,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: GAME.price,
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/kufu-game"),
      seller: {
        "@type": "Organization",
        name: "ISOLELE",
        url: siteUrl,
      },
    },
  };
}

