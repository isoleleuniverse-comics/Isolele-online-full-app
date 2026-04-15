"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { useLanguage } from "@/lib/language-context";
import { NEWS_ARTICLES } from "./data";
import { NewsHeader } from "./news-header";
import { NewsCard } from "./news-card";
import { NewsCta } from "./news-cta";

export function NewsSection() {
  const { currentTheme } = useTheme();
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}
    >
      <div className="max-w-7xl mx-auto">
        <NewsHeader title={t("latestNews")} isInView={isInView} textColor={currentTheme.colors.textPrimary} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ARTICLES.map((article, index) => (
            <NewsCard
              key={article.id}
              article={article}
              index={index}
              isInView={isInView}
              theme={currentTheme}
              t={t}
            />
          ))}
        </div>

        <NewsCta isInView={isInView} accentColor={currentTheme.colors.accentPrimary} />
      </div>
    </section>
  );
}
