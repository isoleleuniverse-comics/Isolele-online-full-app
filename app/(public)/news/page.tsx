"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Clock, ArrowRight, Tag } from "lucide-react"
import Link from "next/link"
import { BreadcrumbJsonLd } from "@/components/json-ld"

const articles = [
  {
    id: "makanda-wakanda",
    category: {
      en: "HISTORY UNVEILED",
      fr: "HISTOIRE DÉVOILÉE",
      pt: "HISTÓRIA REVELADA",
      es: "HISTORIA REVELADA",
      zu: "UMLANDO OKHANGELWE",
      xh: "UMLANDO OKHANGELWE",
      sw: "HISTORIA ILIYOFUNULIWA",
      ln: "MOTANGO EYOBONDI"
    },
    categoryColor: "#D4AF37",
    title: {
      en: "The Lost Tribe Behind Wakanda Was Real: Meet the Makanda of Congo",
      fr: "La tribu perdue derrière Wakanda était réelle : Rencontrez les Makanda du Congo",
      pt: "A tribo perdida por trás de Wakanda era real: Conheça os Makanda do Congo",
      es: "La tribu perdida detrás de Wakanda era real: Conoce a los Makanda del Congo",
      zu: "Isikhulu esasalahlekile sisemva kwe-Wakanda Kwakuzinjalo: Hlangana neeMakanda zeKongo",
      xh: "Isikhulu esasalahlekile sisemva kwe-Wakanda Kwakuzinjalo: Hlangana neeMakanda zeKongo",
      sw: "Kabila lililoliyopoteza nyuma ya Wakanda lilikuwa halisi: Kamatia Makanda wa Congo",
      ln: "Lia lililoliyopoteza nyuma ya Wakanda lilikuwa halisi: Kamatia Makanda wa Congo"
    },
    excerpt: {
      en: "A new wave of historians and cultural leaders are shining a light on Makanda — a once-hidden Congolese empire believed to hold the true heritage behind the Wakanda myth.",
      fr: "Une nouvelle vague d'historiens et de leaders culturels met en lumière Makanda — un empire congolais autrefois caché qui détiendrait le véritable héritage derrière le mythe de Wakanda.",
      pt: "Uma nova onda de historiadores e líderes culturais está iluminando Makanda — um império congolês outrora oculto que se acredita ser o verdadeiro patrimônio por trás do mito de Wakanda.",
      es: "Una nueva ola de historiadores y líderes culturales está iluminando Makanda — un imperio congoleño otrora oculto que se cree que tiene el verdadero patrimonio detrás del mito de Wakanda.",
      zu: "Isikhulu esisha seengcali zesimungulu nabalumbi benkuleko besikhanyisiwe iMakanda — ubukhosi beKongo obawo bayeyonakele okokuqala okukholelwa ukuba isinabeso sangempela sesintsomi seWakanda.",
      xh: "Isikhulu esisha seengcali zesimungulu nabalumbi benkuleko besikhanyisiwe iMakanda — ubukhosi beKongo obawo bayeyonakele okokuqala okukholelwa ukuba isinabeso sangempela sesintsomi seWakanda.",
      sw: "Wimbi jipya la wahistoria na viongozi wa kitamaduni wanang'aza iMakanda — falme ya Kongo iliyosifiwa hapo awali inachukuliwa kuwa na urithi wa kweli nyuma ya hadithi ya Wakanda.",
      ln: "Wimbi jipya la wahistoria na viongozi wa kitamaduni wanang'aza iMakanda — falme ya Kongo iliyosifiwa hapo awali inachukuliwa kuwa na urithi wa kweli nyuma ya hadithi ya Wakanda."
    },
    readTime: "5 min",
    date: "March 2025",
    featured: true
  },
  {
    id: "reclaiming-memory",
    category: {
      en: "CULTURAL COMMENTARY",
      fr: "COMMENTAIRE CULTUREL",
      pt: "COMENTÁRIO CULTURAL",
      es: "COMENTARIO CULTURAL",
      zu: "UMCEBISO WENKULEKO",
      xh: "UMCEBISO WENKULEKO",
      sw: "MAONI YA KITAMADUNI",
      ln: "MALOBA MA BOYOKOLI"
    },
    categoryColor: "#B3541E",
    title: {
      en: "How the Isolele Universe Reclaims African Memory",
      fr: "Comment l'Univers Isolele Récupère la Mémoire Africaine",
      pt: "Como o Universo Isolele Recupera a Memória Africana",
      es: "Cómo el Universo Isolele Recupera la Memoria Africana",
      zu: "Indlela I-Isolele Universe Ibuylbulula I-African Memory",
      xh: "Indlela I-Isolele Universe Ibuylbulula I-African Memory",
      sw: "Jinsi Ulimwengu wa Isolele Unavyorejeza Kumbukumbu ya Afrika",
      ln: "Ndenge Bambwe ya Isolele Ibuylbulula Mopeseli ya Afrika"
    },
    excerpt: {
      en: '"Colonialism didn\'t erase our greatness. It buried it under its own myth." A blueprint for the restoration of Africa\'s suppressed imagination.',
      fr: '"Le colonialisme n\'a pas effacé notre grandeur. Il l\'a enterrée sous son propre mythe." Un plan pour la restauration de l\'imagination supprimée de l\'Afrique.',
      pt: '"O colonialismo não apagou nossa grandeza. Enterrou sob seu próprio mito." Um plano para a restauração da imaginação suprimida da África.',
      es: '"El colonialismo no borró nuestra grandeza. La enterró bajo su propio mito." Un plan para la restauración de la imaginación suprimida de África.',
      zu: '"IKolonialibhmu ayikhasulizanga ubukhulu bethu. Yayibulala ngaphansi kwengcutshelo yayo." Isikebesi sokubuyelisela izikhulu ezicindezelwe zase-Afrika.',
      xh: '"IKolonialibhmu ayikhasulizanga ubukhulu bethu. Yayibulala ngaphansi kwengcutshelo yayo." Isikebesi sokubuyelisela izikhulu ezicindezelwe zase-Afrika.',
      sw: '"Utokamatiani haukusambaza ukubwa wetu. Ulizikia chini ya hadithi yake yenyewe." Mpango wa kurejeza akili iliyozuia ya Afrika.',
      ln: '"Utokamatiani haukusambaza ukubwa wetu. Ulizikia chini ya hadithi yake yenyewe." Mpango wa kurejeza akili iliyozuia ya Afrika.'
    },
    readTime: "8 min",
    date: "February 2025",
    featured: true
  }
]

export default function NewsPage() {
  const { currentLanguage } = useLanguage()
  const lang = currentLanguage.code
  const t = (obj: any) => obj[lang as any] || obj.en
  const language = currentLanguage.code; // Declare the language variable

  const featuredArticles = articles.filter(a => a.featured)
  const regularArticles = articles.filter(a => !a.featured)

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://isolele.com" },
        { name: "News", url: "https://isolele.com/news" }
      ]} />
      
      <main className="min-h-screen py-20" style={{ backgroundColor: 'var(--isolele-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: 'var(--isolele-accent)' }}>
              {lang === 'fr' ? "ACTUALITES BD" : "COMICS NEWS"}
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--isolele-text-secondary)' }}>
              {lang === 'fr'
                ? "Decouvrez les dernieres nouvelles, histoires et perspectives de l'univers Isolele."
                : "Discover the latest news, stories and insights from the Isolele universe."}
            </p>
          </motion.div>

          {/* Featured Articles */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--isolele-text)' }}>
              {lang === 'fr' ? "A LA UNE" : "FEATURED"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl overflow-hidden"
                  style={{ 
                    backgroundColor: 'var(--isolele-bg-secondary)',
                    border: '1px solid rgba(212, 175, 55, 0.2)'
                  }}
                >
                  {/* Article Image */}
                  <div 
                    className="h-64 relative"
                    style={{ backgroundColor: 'var(--isolele-bg)' }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                      <span className="text-6xl font-bold" style={{ color: article.categoryColor }}>
                        {article.id.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{ 
                        background: `linear-gradient(135deg, ${article.categoryColor} 0%, transparent 60%)`
                      }}
                    />
                  </div>

                  {/* Article Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-bold"
                        style={{ backgroundColor: `${article.categoryColor}30`, color: article.categoryColor }}
                      >
                        {t(article.category)}
                      </span>
                      <span className="flex items-center gap-1 text-sm" style={{ color: 'var(--isolele-text-secondary)' }}>
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--isolele-accent)] transition-colors" style={{ color: 'var(--isolele-text)' }}>
                      {t(article.title)}
                    </h3>

                    <p className="mb-6 leading-relaxed" style={{ color: 'var(--isolele-text-secondary)' }}>
                      {t(article.excerpt)}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm" style={{ color: 'var(--isolele-text-secondary)' }}>
                        {article.date}
                      </span>
                      <Link
                        href={`/news/${article.id}`}
                        className="flex items-center gap-2 font-bold transition-colors"
                        style={{ color: 'var(--isolele-accent)' }}
                      >
                        {lang === 'fr' ? "LIRE L'ARTICLE" : "READ ARTICLE"}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* All Articles */}
          <section>
            <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--isolele-text)' }}>
              {lang === 'fr' ? "TOUS LES ARTICLES" : "ALL ARTICLES"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {regularArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group rounded-xl overflow-hidden"
                  style={{ 
                    backgroundColor: 'var(--isolele-bg-secondary)',
                    border: '1px solid rgba(212, 175, 55, 0.1)'
                  }}
                >
                  {/* Article Image */}
                  <div 
                    className="h-40 relative"
                    style={{ backgroundColor: 'var(--isolele-bg)' }}
                  >
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{ 
                        background: `linear-gradient(135deg, ${article.categoryColor} 0%, transparent 60%)`
                      }}
                    />
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span 
                        className="px-2 py-0.5 rounded text-xs font-medium"
                        style={{ backgroundColor: `${article.categoryColor}20`, color: article.categoryColor }}
                      >
                        {t(article.category)}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--isolele-text-secondary)' }}>
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-[var(--isolele-accent)] transition-colors" style={{ color: 'var(--isolele-text)' }}>
                      {t(article.title)}
                    </h3>

                    <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--isolele-text-secondary)' }}>
                      {t(article.excerpt)}
                    </p>

                    <Link
                      href={`/news/${article.id}`}
                      className="flex items-center gap-1 text-sm font-bold transition-colors"
                      style={{ color: 'var(--isolele-accent)' }}
                    >
                      {lang === 'fr' ? "LIRE" : "READ"}
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button
              className="px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: 'var(--isolele-bg-secondary)',
                border: '2px solid var(--isolele-accent)',
                color: 'var(--isolele-accent)'
              }}
            >
              {lang === 'fr' ? "CHARGER PLUS D'ARTICLES" : "LOAD MORE ARTICLES"}
            </button>
          </motion.div>
        </div>
      </main>
    </>
  )
}
