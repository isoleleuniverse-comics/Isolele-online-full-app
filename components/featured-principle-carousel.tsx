'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import { useTheme } from '@/lib/theme-context'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const principles = [
  {
    title: { en: "Destiny is not a Choice, it's a Calling", fr: "La Destinee n'est pas un Choix, c'est un Appel" },
    description: { en: "Every hero's path is written in the stars, guided by ancient forces beyond mortal understanding.", fr: "Le chemin de chaque heros est ecrit dans les etoiles, guide par des forces anciennes au-dela de la comprehension mortelle." },
    image: "/images/destiny.jpg"
  },
  {
    title: { en: "Royal Bloodlines Carry Ancient Power", fr: "Les Lignees Royales Transportent un Pouvoir Ancien" },
    description: { en: "Royal blood carries the memory and might of forgotten kingdoms, waiting to be awakened by the chosen ones.", fr: "Le sang royal transporte la memoire et la puissance des royaumes oublies, attendant d'etre reveilles par les elus." },
    image: "/images/royal-bloodlines.jpg"
  },
  {
    title: { en: "Ancestral Spirits Never Die", fr: "Les Esprits Ancestraux ne Meurent Jamais" },
    description: { en: "The wisdom of ancestors lives on in every generation, guiding and protecting those who honor their memory.", fr: "La sagesse des ancetres vit dans chaque generation, guidant et protégeant ceux qui honorent leur memoire." },
    image: "/images/ancestral-spirits.jpg"
  },
  {
    title: { en: "Africa Was Never Powerless", fr: "L'Afrique n'a Jamais ete Impuissante" },
    description: { en: "From ancient empires to modern times, Africa's strength has always been undeniable and sovereign.", fr: "Des empires anciens aux temps modernes, la force de l'Afrique a toujours ete indeniable et souveraine." },
    image: "/images/africa-power.jpg"
  },
  {
    title: { en: "The Prophecy Has Returned", fr: "La Prophetie est Revenue" },
    description: { en: "The ancient prophecies are awakening, calling forth a new generation of chosen ones to reshape destiny.", fr: "Les anciennes propheties se reveillent, appelant une nouvelle generation d'elus pour remodeler le destin." },
    image: "/images/prophecy.jpg"
  }
]

export function FeaturedPrincipleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1) // Start with "Royal Bloodlines"
  const { currentLanguage } = useLanguage()
  const { currentTheme } = useTheme()
  const lang = currentLanguage.code as 'en' | 'fr'

  const current = principles[currentIndex]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? principles.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === principles.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
        className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden group"
        style={{ border: `2px solid ${currentTheme.colors.accentPrimary}` }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${current.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.colors.background}99 0%, ${currentTheme.colors.background}66 50%, transparent 100%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3
              className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ color: currentTheme.colors.accentPrimary }}
            >
              {current.title[lang]}
            </h3>
            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ color: currentTheme.colors.textPrimary }}
            >
              {current.description[lang]}
            </p>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          onClick={goToPrevious}
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, border: `2px solid ${currentTheme.colors.accentPrimary}` }}
        >
          <ChevronLeft className="w-6 h-6" style={{ color: currentTheme.colors.accentPrimary }} />
        </motion.button>

        <motion.button
          onClick={goToNext}
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, border: `2px solid ${currentTheme.colors.accentPrimary}` }}
        >
          <ChevronRight className="w-6 h-6" style={{ color: currentTheme.colors.accentPrimary }} />
        </motion.button>
      </motion.div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {principles.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-3 h-3 rounded-full transition-all"
            style={{
              backgroundColor: index === currentIndex 
                ? currentTheme.colors.accentPrimary 
                : `${currentTheme.colors.accentPrimary}40`,
            }}
            aria-label={`Go to principle ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
