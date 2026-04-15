import type { NewsArticle } from "./types";

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 1,
    categoryKey: "news_category_history",
    categoryColor: "#D4AF37",
    titleKey: "news_title_makanda",
    excerptKey: "news_excerpt_makanda",
    readTime: "5 min",
    dateKey: "news_date_march",
    image: "/events/wakanda-makanda-royal.jpg",
  },
  {
    id: 2,
    categoryKey: "news_category_cultural",
    categoryColor: "#B3541E",
    titleKey: "news_title_isolele_memory",
    excerptKey: "news_excerpt_isolele_memory",
    readTime: "8 min",
    dateKey: "news_date_february",
    image: "/events/african-empire-luxury.jpg",
  },
  {
    id: 3,
    categoryKey: "news_category_research",
    categoryColor: "#4169E1",
    titleKey: "news_title_makanda_manuscript",
    excerptKey: "news_excerpt_makanda_manuscript",
    readTime: "6 min",
    dateKey: "news_date_january",
    image: "/events/courtroom-makanda.jpg",
  },
];
