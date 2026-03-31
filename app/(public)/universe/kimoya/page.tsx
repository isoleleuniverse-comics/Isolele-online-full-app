'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { ArrowLeft, BookOpen, Sparkles } from 'lucide-react'

export default function KimoyaPage() {
  const { currentLanguage } = useLanguage()
  const lang = currentLanguage.code

  const content = {
    en: {
      title: 'KIMOYA',
      subtitle: 'The Heritage Bearer',
      introduction: 'A powerful saga that reveals the hidden legacy of ancestral kingdoms and the strength of women who protect it.',
      story: 'Kimoya: The Heritage Bearer tells the extraordinary story of a young woman chosen to safeguard the sacred traditions of her ancestors. Through mystical trials and fierce battles, she discovers that true power lies in connection to heritage and purpose.',
      themes: ['Heritage', 'Female Empowerment', 'Legacy', 'Wisdom', 'Tradition'],
      bookTitle: 'Kimoya: Keeper of the Ancient Fires',
      bookDesc: 'A transformative journey through African wisdom, female heroism, and the restoration of lost legacies.',
      status: 'Coming Soon',
      relatedBooks: [
        { title: 'Zaiire: The Prince of Kongo', status: 'Available' },
        { title: 'Bambula: The Guardian', status: 'Coming Soon' },
        { title: 'Mokele: The Water Prince', status: 'Coming Soon' },
      ]
    },
    fr: {
      title: 'KIMOYA',
      subtitle: 'La Porteuse d\'Héritage',
      introduction: 'Une saga puissante qui révèle l\'héritage caché des royaumes ancestraux et la force des femmes qui le protègent.',
      story: 'Kimoya: La Porteuse d\'Héritage raconte l\'histoire extraordinaire d\'une jeune femme choisie pour préserver les traditions sacrées de ses ancêtres. À travers des épreuves mystiques et des batailles féroces, elle découvre que le vrai pouvoir réside dans la connexion à l\'héritage et à la destinée.',
      themes: ['Héritage', 'Autonomisation Féminine', 'Héritage', 'Sagesse', 'Tradition'],
      bookTitle: 'Kimoya: Gardienne des Feux Anciens',
      bookDesc: 'Un voyage transformateur à travers la sagesse africaine, l\'héroïsme féminin et la restauration des héritages perdus.',
      status: 'À Venir',
      relatedBooks: [
        { title: 'Zaiire: Prince du Kongo', status: 'Disponible' },
        { title: 'Bambula: La Gardienne', status: 'À Venir' },
        { title: 'Mokele: Le Prince des Eaux', status: 'À Venir' },
      ]
    }
  }

  const data = content[lang as keyof typeof content] || content.en

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[70vh] flex items-center pt-32 pb-16 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a1486131-34f6-4e8f-941d-1f1185ed8af7.jpeg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop"
                  alt="Kimoya"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 space-y-8"
            >
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-6xl md:text-7xl font-black mb-2 text-accent-primary"
                >
                  {data.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-2xl font-bold text-foreground/80 mb-6"
                >
                  {data.subtitle}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg text-foreground/70 leading-relaxed"
                >
                  {data.introduction}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <p className="text-sm font-bold text-accent-primary mb-3 uppercase">Themes</p>
                <div className="flex flex-wrap gap-2">
                  {data.themes.map((theme, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-accent-primary/10 border border-accent-primary/30 rounded-full text-sm font-semibold text-foreground"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex gap-4 pt-4"
              >
                <Link href="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-accent-primary text-black font-bold rounded-lg flex items-center gap-2"
                  >
                    <ArrowLeft size={20} />
                    {lang === 'fr' ? 'Retour' : 'Back'}
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-4 bg-background/50 backdrop-blur"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-accent-primary mb-8">
              {lang === 'fr' ? 'L\'Histoire' : 'The Story'}
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80 mb-8">
              {data.story}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Book Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <BookOpen className="w-8 h-8 text-accent-primary flex-shrink-0 mt-1" />
              <h2 className="text-3xl font-black text-foreground">
                {lang === 'fr' ? 'Le Livre' : 'The Book'}
              </h2>
            </div>
            <h3 className="text-2xl font-bold text-accent-primary mb-4">
              {data.bookTitle}
            </h3>
            <p className="text-lg text-foreground/80 mb-8">
              {data.bookDesc}
            </p>
            <div className="p-6 bg-accent-primary/10 border-2 border-accent-primary/30 rounded-xl text-center">
              <Sparkles className="w-8 h-8 text-accent-primary mx-auto mb-3" />
              <p className="text-2xl font-bold text-accent-primary">
                {data.status}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Related Books Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-4 bg-background/50"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-accent-primary mb-12 text-center">
            {lang === 'fr' ? 'Livres Connexes' : 'Related Books'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.relatedBooks.map((book, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-xl p-6 text-center hover:border-accent-primary/50 transition-all"
              >
                <h3 className="font-bold text-foreground mb-3">{book.title}</h3>
                <div className="inline-block px-4 py-2 bg-accent-primary/10 rounded-lg">
                  <p className="text-accent-primary font-semibold text-sm">{book.status}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Bottom CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4 text-center"
      >
        <p className="text-foreground/70 mb-6">
          {lang === 'fr' ? 'Explorez l\'univers ISOLELE complet' : 'Explore the full ISOLELE universe'}
        </p>
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-accent-primary text-black font-bold rounded-lg"
          >
            {lang === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}
          </motion.button>
        </Link>
      </motion.section>
    </main>
  )
}
