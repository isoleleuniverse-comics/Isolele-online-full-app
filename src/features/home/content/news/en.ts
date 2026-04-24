import type { HomePageContent } from "../types";

export const newsEn: HomePageContent["news"] = {
  title: "Latest News",
  minutesReadLabel: "min read",
  readArticleLabel: "READ ARTICLE",
  viewAllLabel: "VIEW ALL NEWS",
  articles: [
    {
      id: 1,
      category: "HISTORY",
      categoryColor: "#D4AF37",
      title: "How Makanda reclaims a lost African empire in modern comics",
      excerpt: "A closer look at the royal mythology, symbols, and historical echoes shaping one of ISOLELE's boldest worlds.",
      readTime: "5",
      date: "March 2026",
      image: "/events/wakanda-makanda-royal.jpg",
    },
    {
      id: 2,
      category: "CULTURE",
      categoryColor: "#B3541E",
      title: "Why ISOLELE is becoming a memory project as much as a comic universe",
      excerpt: "From diaspora identity to cultural restoration, the project is resonating far beyond entertainment.",
      readTime: "8",
      date: "February 2026",
      image: "/events/african-empire-luxury.jpg",
    },
    {
      id: 3,
      category: "RESEARCH",
      categoryColor: "#4169E1",
      title: "Inside the references behind the Makanda manuscript",
      excerpt: "The design language of courts, sacred fire, and royal archives that shaped this new mythology.",
      readTime: "6",
      date: "January 2026",
      image: "/events/courtroom-makanda.jpg",
    },
  ],
};
