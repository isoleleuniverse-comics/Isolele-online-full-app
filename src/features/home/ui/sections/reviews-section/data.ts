import type { ReviewItem, ReviewsContentByLanguage } from "./types";

export const REVIEWS: ReviewItem[] = [
  {
    text: {
      en: "A new benchmark for superhero literature. This is the future of the genre.",
      fr: "Une nouvelle reference pour la litterature de super-heros. C'est l'avenir du genre.",
    },
    author: "Literary Review",
    stars: 5,
  },
  {
    text: {
      en: "An emotional rollercoaster that celebrates heritage while delivering action-packed adventure.",
      fr: "Des montagnes russes emotionnelles qui celebrent l'heritage tout en offrant une aventure pleine d'action.",
    },
    author: "Comics Weekly",
    stars: 5,
  },
  {
    text: {
      en: "Zaiire is already generating buzz as the next big thing in African storytelling.",
      fr: "Zaiire fait deja parler de lui comme la prochaine grande chose du storytelling africain.",
    },
    author: "Culture Magazine",
    stars: 5,
  },
  {
    text: {
      en: "A story that not only entertains but transforms lives. Its themes resonate with readers of all ages.",
      fr: "Une histoire qui non seulement divertit mais transforme les vies. Ses themes resonnent avec les lecteurs de tous ages.",
    },
    author: "Youth Media",
    stars: 5,
  },
];

export const REVIEWS_CONTENT: ReviewsContentByLanguage = {
  en: {
    title: "A CULTURAL PHENOMENON IN THE MAKING",
    subtitle: "Early Reviews",
    description: "Critics and readers alike are calling Zaiire 'the future of African superhero storytelling'",
  },
  fr: {
    title: "UN PHENOMENE CULTUREL EN DEVENIR",
    subtitle: "Premieres Critiques",
    description: "Critiques et lecteurs qualifient Zaiire de 'futur du storytelling africain de super-heros'",
  },
};
