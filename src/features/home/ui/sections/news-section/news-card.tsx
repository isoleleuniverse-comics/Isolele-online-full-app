import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import type { Theme } from "@/lib/theme-context";
import type { NewsArticle } from "./types";
import { NEWS_IMAGE_BLUR_DATA_URL } from "./types";

interface NewsCardProps {
  article: NewsArticle;
  index: number;
  isInView: boolean;
  theme: Theme;
  minutesReadLabel: string;
  readArticleLabel: string;
}

export function NewsCard({ article, index, isInView, theme, minutesReadLabel, readArticleLabel }: NewsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.5, delay: 0.6 + index * 0.14 }}
      className="group"
    >
      <Link href="/#hero">
        <div
          className="rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
          style={{
            backgroundColor: theme.colors.background,
            border: `1px solid ${theme.colors.accentPrimary}20`,
          }}
        >
          <div className="relative h-48 overflow-hidden bg-gray-300">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              placeholder="blur"
              blurDataURL={NEWS_IMAGE_BLUR_DATA_URL}
              loading="lazy"
            />
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
              style={{
                background: `linear-gradient(135deg, ${article.categoryColor}40 0%, transparent 100%)`,
              }}
            />
            <span
              className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-wider z-10"
              style={{
                backgroundColor: article.categoryColor,
                color: theme.colors.background,
              }}
            >
              {article.category}
            </span>
          </div>

          <div className="p-6">
            <h3
              className="text-lg font-bold tracking-wide mb-3 line-clamp-2 transition-colors duration-300"
              style={{ color: theme.colors.textPrimary }}
            >
              {article.title}
            </h3>
            <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: theme.colors.textSecondary }}>
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs" style={{ color: theme.colors.textSecondary }}>
                <Clock className="w-4 h-4" />
                <span>
                  {article.readTime} {minutesReadLabel}
                </span>
                <span>-</span>
                <span>{article.date}</span>
              </div>
            </div>

            <motion.div
              className="flex items-center gap-2 mt-4 text-sm font-bold tracking-wider"
              style={{ color: theme.colors.accentPrimary }}
            >
              <span>{readArticleLabel}</span>
              <motion.div className="group-hover:translate-x-2 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
