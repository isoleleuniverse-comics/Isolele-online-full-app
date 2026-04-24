import type { HomePageContent } from "../types";

export const reviewsFr: HomePageContent["reviews"] = {
  title: "UN PHENOMENE CULTUREL EN TRAIN DE NAITRE",
  subtitle: "DISPONIBLE EN LIBRAIRIE",
  description:
    "Zaiire: The Prince of Kongo est deja sur les rayons best-sellers au Kenya. De vrais lecteurs. Un vrai impact. Une vraie Afrique.",
  items: [
    {
      image: "/images/bookstore-display.jpg",
      imageAlt: "Rayon best-sellers de la librairie Nuria a Nairobi, Kenya",
      text: "Zaiire a atteint le rayon best-sellers de la librairie Nuria a Nairobi, Kenya, sans distributeur, sans Hollywood et sans budget marketing. Construit a Kinshasa. Vendu par la force de l'histoire.",
      author: "ISOLELE",
      stars: 5,
      ctaLabel: "LIRE L'HISTOIRE QUE L'AFRIQUE ACHETE — $36.99",
      ctaHref: process.env.NEXT_PUBLIC_ZAIIRE_BOOK_1_URL ?? "/comics",
    },
  ],
};
