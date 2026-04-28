import type { HomeReviewsContent } from "@/features/home/content/types";

export const reviewsData: Record<string, HomeReviewsContent> = {
  en: {
  title: "A CULTURAL PHENOMENON IN THE MAKING",
  subtitle: "IN STORES NOW",
  description:
    "Zaiire: The Prince of Kongo is already on bestseller shelves in Kenya. Real readers. Real impact. Real Africa.",
  items: [
    {
      image: "/images/bookstore-display.jpg",
      imageAlt: "Nuria bookstore bestseller shelf in Nairobi, Kenya",
      text: "Zaiire reached the bestseller shelf at Nuria bookstore in Nairobi, Kenya without a distributor, without Hollywood, and without a marketing budget. Built in Kinshasa. Sold by the power of the story.",
      author: "ISOLELE",
      stars: 5,
      ctaLabel: "READ THE STORY THAT AFRICA IS BUYING — $36.99",
      ctaHref: process.env.NEXT_PUBLIC_ZAIIRE_BOOK_1_URL ?? "/comics",
    },
  ],
},
fr:{
  title: "UN PHÉNOMÈNE CULTUREL EN DEVENIR",
  subtitle: "DÉJÀ EN LIBRAIRIE",
  description:
    "Zaiire : Le Prince du Kongo est déjà en tête des ventes dans les librairies au Kenya. De vrais lecteurs. Un impact réel. Une Afrique réelle.",
  items: [
    {
      image: "/images/bookstore-display.jpg",
      imageAlt: "Rayon des bestsellers de la librairie Nuria à Nairobi, Kenya",
      text: "Zaiire a atteint le rayon des bestsellers de la librairie Nuria à Nairobi, Kenya sans distributeur, sans Hollywood et sans budget marketing. Construit à Kinshasa. Vendu par la puissance de l'histoire.",author: "ISOLELE",
      stars: 5,
      ctaLabel: "LISEZ L'HISTOIRE QUE L'AFRIQUE ACHÈTE — 36,99 $",
      ctaHref: process.env.NEXT_PUBLIC_ZAIIRE_BOOK_1_URL ?? "/comics",
    },
  ],
},
};

