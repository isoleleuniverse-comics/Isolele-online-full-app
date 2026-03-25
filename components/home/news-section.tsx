"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"

const articles = [
  {
    id: 1,
    category: "HISTORY UNVEILED",
    categoryColor: "#D4AF37",
    title: "The Lost Tribe Behind Wakanda Was Real: Meet the Makanda of Congo",
    excerpt: "A new wave of historians and cultural leaders sheds light on Makanda, a once-hidden Congolese empire that may hold the true heritage behind the myth of Wakanda.",
    readTime: "5 min",
    date: "March 2025",
    image: "/events/event-showcase-1.jpg",
  },
  {
    id: 2,
    category: "CULTURAL COMMENTARY",
    categoryColor: "#B3541E",
    title: "How the Isolele Universe Recovers African Memory",
    excerpt: "\"Colonialism did not erase our greatness. It buried it under its own myth.\" A plan for the restoration of Africa's suppressed imagination.",
    readTime: "8 min",
    date: "February 2025",
    image: "/events/event-showcase-2.jpg",
  },
  {
    id: 3,
    category: "RESEARCH",
    categoryColor: "#4169E1",
    title: "From Myth to Manuscript: Mapping the Makanda Empire",
    excerpt: "A cartographic journey through an erased African civilization whose memory survived in symbols, not borders.",
    readTime: "6 min",
    date: "January 2025",
    image: "/events/courtroom-makanda.jpg",
  },
]

export function NewsSection() {
  const { currentTheme } = useTheme()
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-black tracking-wider mb-12 text-center"
          style={{ color: currentTheme.colors.textPrimary }}
        >
          {t("latestNews")}
        </motion.h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <Link href={`/news/${article.id}`}>
                <div 
                  className="rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                  style={{
                    backgroundColor: currentTheme.colors.background,
                    border: `1px solid ${currentTheme.colors.accentPrimary}20`,
                  }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${article.categoryColor}40 0%, ${currentTheme.colors.backgroundSecondary} 100%)`
                      }}
                    />
                    {/* Category badge */}
                    <span 
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-wider"
                      style={{
                        backgroundColor: article.categoryColor,
                        color: currentTheme.colors.background,
                      }}
                    >
                      {article.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 
                      className="text-lg font-bold tracking-wide mb-3 line-clamp-2 transition-colors duration-300"
                      style={{ color: currentTheme.colors.textPrimary }}
                    >
                      {article.title}
                    </h3>
                    <p 
                      className="text-sm leading-relaxed mb-4 line-clamp-3"
                      style={{ color: currentTheme.colors.textSecondary }}
                    >
                      {article.excerpt}
                    </p>
                    
                    {/* Meta */}
                    <div className="flex items-center justify-between">
                      <div 
                        className="flex items-center gap-2 text-xs"
                        style={{ color: currentTheme.colors.textSecondary }}
                      >
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} de lecture</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>
                    </div>

                    {/* Read more */}
                    <motion.div
                      className="flex items-center gap-2 mt-4 text-sm font-bold tracking-wider"
                      style={{ color: currentTheme.colors.accentPrimary }}
                    >
                      <span>READ ARTICLE</span>
                      <motion.div
                        className="group-hover:translate-x-2 transition-transform duration-300"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/news">
            <motion.button
              className="px-8 py-4 rounded-lg text-sm font-bold tracking-wider transition-all border-2"
              style={{
                borderColor: currentTheme.colors.accentPrimary,
                color: currentTheme.colors.accentPrimary,
                backgroundColor: "transparent",
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: `${currentTheme.colors.accentPrimary}20`
              }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW ALL NEWS
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
