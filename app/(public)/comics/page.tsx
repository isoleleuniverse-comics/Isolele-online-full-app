'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'

const comicsData = [
  {
    id: 'zaiire',
    titleKey: 'book_zaiire_title',
    titleFr: 'Zaiire: Prince du Kongo',
    descKey: 'book_zaiire_desc',
    descFr: 'Une aventure palpitante et édifiante qui fait écho à l\'esprit du Roi Lion et de Black Panther, tout en offrant aux jeunes lecteurs une célébration de l\'héritage, du courage et de la découverte de soi.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5413e9fc-976b-4c59-97bd-5858678b1f42.jpeg',
    date: 'September 6, 2025',
  },
  {
    id: 'how_isolele',
    title: 'How the Isolele Universe Reclaims African Memory',
    titleFr: 'Comment l\'univers Isolele réclame la mémoire africaine',
    desc: '"Le colonialisme n\'a pas effacé notre grandeur. Il l\'a enterrée sous son propre mythe." Un plan pour la restauration de l\'imagination africaine supprimée.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_screenshot_Mar%2031%2C%202026%202_16_31%20PM%20GMT%2B02_00-v3ueG61JhSCQHjK2LqR5FJbw9dJJao.png',
    date: 'July 18, 2025',
  },
  {
    id: 'makanda',
    titleKey: 'book_makanda_title',
    titleFr: 'De Mythe à Manuscrit: Cartographier l\'Empire Makanda',
    descKey: 'book_makanda_desc',
    descFr: 'Un voyage cartographique à travers une civilisation africaine effacée dont la mémoire a survécu dans les symboles et non dans les frontières.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop',
    date: 'July 17, 2025',
  },
  {
    id: 'sacred_flame',
    title: 'Inside the Sacred Flame Blueprints: What Technology Did They Leave Behind?',
    titleFr: 'À l\'intérieur des plans de la Flamme Sacrée: Quelle technologie ont-ils laissée?',
    desc: 'Au-delà du mythe et de la métaphore, décodage de la science spirituelle de l\'Afrique la plus supprimée.',
    image: 'https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=500&fit=crop',
    date: 'July 16, 2025',
  },
  {
    id: 'zaiire_necklace',
    title: 'The Hidden Message of the Cover of Zaiire: The Prince of Kongo, The Necklace of Destiny',
    titleFr: 'Le Message Caché de la Couverture de Zaiire: Le Collier de la Destinée',
    desc: 'La couverture de Zaiire: Le Prince du Kongo n\'est pas seulement de l\'art, c\'est une salle du trône de la mémoire, où les ancêtres, les révolutionnaires et les esprits se rassemblent pour couronner l\'élu.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_screenshot_Mar%2031%2C%202026%202_16_31%20PM%20GMT%2B02_00-v3ueG61JhSCQHjK2LqR5FJbw9dJJao.png',
    date: 'September 6, 2025',
  },
  {
    id: 'isolele_superhero',
    title: 'Isolele: The First Congolese Superhero Universe',
    titleFr: 'Isolele: Le Premier Univers de Super-héros Congolais',
    desc: 'Et si le nouvel univers global de super-héros ne venait pas de Hollywood, mais du cœur de l\'Afrique? Isolele est une révolution de la fiction africaine où la mythologie rencontre la prophétie.',
    image: 'https://images.unsplash.com/photo-1543269161-cbf427effbad?w=400&h=500&fit=crop',
    date: 'September 9, 2025',
  },
]

export default function ComicsPage() {
  const { t, currentLanguage } = useLanguage()
  const lang = currentLanguage.code

  return (
    <main className="min-h-screen pt-32 pb-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-accent-primary mb-4">
          {lang === 'fr' ? 'ISOLELE COMICS' : 'ISOLELE COMICS'}
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          {lang === 'fr' 
            ? 'Découvrez notre collection complète de bandes dessinées et d\'histoires' 
            : 'Discover our complete collection of comics and stories'}
        </p>
      </motion.div>

      {/* Comics Grid - 2 columns, 3 rows */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {comicsData.map((comic, index) => (
            <motion.div
              key={comic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Comic Card */}
              <div className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-accent-primary/50 transition-all hover:shadow-lg hover:shadow-accent-primary/20">
                {/* Image Container */}
                <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900">
                  <Image
                    src={comic.image}
                    alt={comic.titleKey ? t(comic.titleKey) : comic.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h2 className="text-xl font-bold text-foreground group-hover:text-accent-primary transition-colors line-clamp-2 leading-tight">
                    {comic.titleKey ? t(comic.titleKey) : (lang === 'fr' ? comic.titleFr : comic.title)}
                  </h2>

                  {/* Description */}
                  <p className="text-foreground/70 text-sm leading-relaxed line-clamp-3">
                    {comic.descKey ? t(comic.descKey) : (lang === 'fr' ? comic.descFr : comic.desc)}
                  </p>

                  {/* Footer - Date and Read More */}
                  <div className="flex items-center justify-between pt-2 border-t border-border/30">
                    <span className="text-xs text-foreground/50 font-medium">
                      {comic.date}
                    </span>
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="text-accent-primary font-bold hover:underline text-sm transition-colors"
                    >
                      {lang === 'fr' ? 'Lire Plus' : 'Read More'}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-20 px-6"
      >
        <p className="text-foreground/70 text-lg mb-6">
          {lang === 'fr'
            ? 'Célébrant le patrimoine africain à travers des histoires puissantes et des aventures héroïques.'
            : 'Celebrating African heritage through powerful stories and heroic adventures.'}
        </p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-8 py-3 bg-accent-primary text-black font-bold rounded-lg hover:bg-accent-primary/90 transition-colors"
        >
          {lang === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}
        </motion.a>
      </motion.div>
    </main>
  )
}

