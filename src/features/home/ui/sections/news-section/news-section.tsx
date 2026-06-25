"use client";

import { useRef } from "react";
import { useLanguage } from "@/shared/i18n/language-context";
import { newsData } from "./data";
import { useInView } from "framer-motion";
import { useTheme } from "@/shared/contexts/theme-context";
import { NewsHeader } from "./news-header";
import { NewsCard } from "./news-card";
import { NewsCta } from "./news-cta";

interface NewsSectionProps {
  latestArticles?: any[];
}

// Nouvelle fonction d'estimation dynamique du temps de lecture
function estimateReadingTime(title: string, excerpt: string): string {
  const textCombined = `${title} ${excerpt}`;
  const wordCount = textCombined.trim().split(/\s+/).filter(Boolean).length;

  // Règle d'estimation : 
  // Un extrait plus long indique généralement un article de fond plus dense.
  // Vitesse moyenne de lecture humaine : ~200 mots par minute.
  if (wordCount < 15) return "3";
  if (wordCount < 30) return "4";
  if (wordCount < 50) return "5";
  return "7";
}

export function NewsSection({ latestArticles }: NewsSectionProps) {
  const { currentTheme } = useTheme();
  const { currentLanguage } = useLanguage();
  const news = newsData[currentLanguage.code] || newsData.en;
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  // 2. On adapte la structure des données reçues de Vercel Blob
  // pour correspondre parfaitement à ce qu'attend le composant "NewsCard"
  const articlesToDisplay = latestArticles.length > 0
    ? latestArticles.map((art, index) => ({
      id: art.id || art.slug || index,
      category: "EDITORIAL",
      categoryColor: currentTheme.colors.accentPrimary, // Utilise la couleur or/accent active
      title: art.title,
      excerpt: art.excerpt || "",
      readTime: estimateReadingTime(art.title, art.excerpt || ""),
      date: art.updatedAt
        ? new Date(art.updatedAt).toLocaleDateString(currentLanguage.code === "fr" ? "fr-FR" : "en-US", {
          month: "short",
          year: "numeric"
        })
        : "",
      image: art.coverImage || "/royal-palace-background.png", // Image de couverture ou repli
      slug: art.slug, // On garde le slug de l'article pour le lien
    }))
    : news.articles; // Si Vercel Blob est vide lors de vos tests, on garde les fausses news pour ne pas casser l'affichage
  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}
    >
      <div className="max-w-7xl mx-auto">
        <NewsHeader title={news.title} isInView={isInView} textColor={currentTheme.colors.textPrimary} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesToDisplay.map((article, index) => (
            <NewsCard
              key={article.id}
              article={article}
              index={index}
              isInView={isInView}
              theme={currentTheme}
              minutesReadLabel={news.minutesReadLabel}
              readArticleLabel={news.readArticleLabel}
            />
          ))}
        </div>

        <NewsCta isInView={isInView} accentColor={currentTheme.colors.accentPrimary} label={news.viewAllLabel} />
      </div>
    </section>
  );
}
