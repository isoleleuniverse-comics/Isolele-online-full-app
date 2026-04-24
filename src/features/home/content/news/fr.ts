import type { HomePageContent } from "../types";

export const newsFr: HomePageContent["news"] = {
  title: "Dernieres Nouvelles",
  minutesReadLabel: "min de lecture",
  readArticleLabel: "LIRE L'ARTICLE",
  viewAllLabel: "VOIR TOUTES LES ACTUALITES",
  articles: [
    {
      id: 1,
      category: "HISTOIRE",
      categoryColor: "#D4AF37",
      title: "Comment Makanda recompose un empire africain perdu dans le comic moderne",
      excerpt: "Un regard sur la mythologie royale, les symboles et les resonances historiques qui structurent l'un des mondes les plus ambitieux d'ISOLELE.",
      readTime: "5",
      date: "Mars 2026",
      image: "/events/wakanda-makanda-royal.jpg",
    },
    {
      id: 2,
      category: "CULTURE",
      categoryColor: "#B3541E",
      title: "Pourquoi ISOLELE devient autant un projet de memoire qu'un univers de comics",
      excerpt: "De l'identite diasporique a la restauration culturelle, le projet depasse largement le simple divertissement.",
      readTime: "8",
      date: "Fevrier 2026",
      image: "/events/african-empire-luxury.jpg",
    },
    {
      id: 3,
      category: "RECHERCHE",
      categoryColor: "#4169E1",
      title: "Dans les references qui ont inspire le manuscrit Makanda",
      excerpt: "Langage visuel des cours, feu sacre et archives royales: les sources d'une nouvelle mythologie.",
      readTime: "6",
      date: "Janvier 2026",
      image: "/events/courtroom-makanda.jpg",
    },
  ],
};
