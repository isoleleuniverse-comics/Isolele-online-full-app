"use client";

import { useRef } from "react";
import { useLanguage } from "@/shared/i18n/language-context";
import { newsData } from "./data";
import { useInView } from "framer-motion";
import { useTheme } from "@/shared/contexts/theme-context";
import { NewsHeader } from "./news-header";
import { NewsCard } from "./news-card";
import { NewsCta } from "./news-cta";

export function NewsSection() {
  const { currentTheme } = useTheme();
  const { currentLanguage } = useLanguage();
  const news = newsData[currentLanguage.code] || newsData.en;
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}
    >
      <div className="max-w-7xl mx-auto">
        <NewsHeader title={news.title} isInView={isInView} textColor={currentTheme.colors.textPrimary} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.articles.map((article, index) => (
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
