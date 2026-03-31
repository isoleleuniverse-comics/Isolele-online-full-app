'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { ArrowLeft, BookOpen, Sparkles, Users } from 'lucide-react'

export default function AssembleePage() {
  const { currentLanguage } = useLanguage()
  const lang = currentLanguage.code

  const content = {
    en: {
      title: 'ASSEMBLÉE ISOLELE',
      subtitle: 'The Council of Kings',
      introduction: 'A unified force where all chosen ones gather. The Assembly that shapes destiny and protects the ISOLELE universe.',
      story: 'Assemblée Isolele: The Council of Kings brings together all the champions of the ISOLELE universe. United by destiny and bound by sacred oaths, they form an unstoppable force that defends the balance of worlds and protects the prophecies of old.',
      themes: ['Unity', 'Leadership', 'Prophecy', 'Collective Power', 'Governance'],
      bookTitle: 'Assemblée Isolele: The United Kingdoms',
      bookDesc: 'The epic saga of how different kingdoms unite for a common purpose.',
      status: 'Coming Soon',
      relatedBooks: [
        { title: 'Zaiire: The Prince of Kongo', status: 'Available' },
        { title: 'Kimoya: The Heritage Bearer', status: 'Coming Soon' },
        { title: 'Bambula: The Guardian', status: 'Coming Soon' },
      ]
    },
    fr: {
      title: 'ASSEMBLÉE ISOLELE',
      subtitle: 'Le Conseil des Rois',
      introduction: 'Une force unifiée où tous les élus se rassemblent. L\'Assemblée qui façonne la destinée et protège l\'univers ISOLELE.',
      story: 'Assemblée Isolele: Le Conseil des Rois réunit tous les champions de l\'univers ISOLELE. Unis par la destinée et liés par des serments sacrés, ils forment une force irrésistible qui défend l\'équilibre des mondes et protège les prophéties d\'antan.',
      themes: ['Unité', 'Leadership', 'Prophétie', 'Pouvoir Collectif', 'Gouvernance'],
      bookTitle: 'Assemblée Isolele: Les Royaumes Unis',
      bookDesc: 'La saga épique de la façon dont différents royaumes s\'unissent pour un objectif commun.',
      status: 'À Venir',
      relatedBooks: [
        { title: 'Zaiire: Prince du Kongo', status: 'Disponible' },
        { title: 'Kimoya: La Porteuse d\'Héritage', status: 'À Venir' },
        { title: 'Bambula: La Gardienne', status: 'À Venir' },
      ]
    }
  }

  const data = content[lang as keyof typeof content] || content.en

  return (
    <main className="min-h-screen bg-background">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[70vh] flex items-center pt-32 pb-16 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&fit=crop"
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
                  src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=500&fit=crop"
                  alt="Assemblée Isolele"
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
                  className="text-5xl md:text-6xl font-black mb-2 text-accent-primary"
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
              <Users className="w-8 h-8 text-accent-primary flex-shrink-0 mt-1" />
              <h2 className="text-3xl font-black text-foreground">
                {lang === 'fr' ? 'L\'Assemblée' : 'The Assembly'}
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
