"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"

const characters = [
  {
    id: "zaire",
    name: "ZAIIRE",
    title: {
      en: "The Prince of Kongo and the Necklace of Destiny",
      fr: "Le Prince du Kongo et le Collier de la Destinée",
      pt: "O Príncipe do Kongo e o Colar do Destino",
      es: "El Príncipe del Kongo y el Collar del Destino",
      zu: "INkosana weKongo neneKhanga leNkomo",
      xh: "Inkosana yeKongo neKhanga leNkomo",
      sw: "Mkuu wa Kongo na Mkufu wa Hatimaye",
      ln: "Mwana wa Kongo mpe Mbele ya Suka"
    },
    description: "Son of thunder and royalty, chosen by the Necklace of Destiny.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg",
    color: "#F6B800",
  },
  {
    id: "bambula",
    name: "BAMBULA",
    title: {
      en: "Child of Rhythm",
      fr: "Enfant du Rythme",
      pt: "Filha do Ritmo",
      es: "Hija del Ritmo",
      zu: "Umntwana weRhythm",
      xh: "Umntwana weRhythm",
      sw: "Mtoto wa Ritmu",
      ln: "Mwana wa Ndakisa"
    },
    description: "Warrior of the savannas, master of sacred fire and wild nature.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
    color: "#B3541E",
  },
  {
    id: "kimoya",
    name: "MAKANDA",
    title: {
      en: "THE MOST POWERFUL Empire in History",
      fr: "L'EMPIRE LE PLUS PUISSANT de l'Histoire",
      pt: "O IMPÉRIO MAIS PODEROSO da História",
      es: "EL IMPERIO MÁS PODEROSO de la Historia",
      zu: "UMBUSO ONAMANDLA KAKHULU Emlandweni",
      xh: "UMBUSO ONAMANDLA KAKHULU Emlandweni",
      sw: "NCHI YENYE NGUVU ZAIDI ya Historia",
      ln: "BOKONZI OYO OYA NGUVU KAKHULU ya Biso"
    },
    description: "Warrior empress whose royal court holds the destiny of the continent in her hands.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260323-WA0012-2zfYaTNiUmh8XgNPMwbkLcKExGX65Q.jpg",
    color: "#C0392B",
  },
  {
    id: "mokele",
    name: "MOKELE",
    title: {
      en: "Crowned by the Streets",
      fr: "Couronné par les Rues",
      pt: "Coroado pelas Ruas",
      es: "Coronado por las Calles",
      zu: "Ukhethiwe NgeSitolo",
      xh: "Ukhethiwe NgeSitolo",
      sw: "Akamata Taji kutoka Mitaani",
      ln: "Komonzi na Malela"
    },
    description: "Heir of urban chaos and ancestral power — Crowned by the Streets.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5bdc2ecc-913b-412b-a840-2a5197cd801a.jpeg",
    color: "#4169E1",
  },
  {
    id: "kufulula",
    name: "HRM KING KUFULULA",
    title: {
      en: "Visionary• Cultural Architect • African Royalty",
      fr: "Visionnaire• Architecte Culturel • Royauté Africaine",
      pt: "Visionário• Arquiteto Cultural • Realeza Africana",
      es: "Visionario• Arquitecto Cultural • Realeza Africana",
      zu: "Ongabonisele• Umkhi weNtu • Umbuso weAfrika",
      xh: "Ongabonisele• Umkhi weNtu • Umbuso weAfrika",
      sw: "Mwenye Mawazo• Mwalimu wa Kitamaduni • Ukurusi wa Afrika",
      ln: "Mwenye Longi• Mokambi wa Boyokoli• Mokonzi wa Bafriki"
    },
    description: "Legendary monarch, protector of the ISOLELE royal lineage.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/King%20kufulula-1pEeYE9t1QYruZhNooZuPw7Nkd1A8l.jpg",
    color: "#8B6914",
  },
  {
    id: "ensemble",
    name: "THE ISOLELE ASSEMBLY",
    title: {
      en: "The Chosen Ones United",
      fr: "Les Élus Unis",
      pt: "Os Escolhidos Unidos",
      es: "Los Elegidos Unidos",
      zu: "Abasakhethiwe Ahlangene",
      xh: "Abasakhethiwe Ahlangene",
      sw: "Wachaguzi Waameunganisha",
      ln: "Baya Likonde Bayambilakela"
    },
    description: "All warriors and queens of the ZAIIRE kingdom united in their splendor.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c389067b-e5b3-4664-8c15-26b59810c68b.jpeg",
    color: "#9932CC",
  },
]

export function CharactersSection() {
  const { currentTheme } = useTheme()
  const { currentLanguage } = useLanguage()
  const lang = currentLanguage.code
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Translation object for section header
  const translations = {
    title: {
      en: "THE CHOSEN ONES",
      fr: "LES ÉLUS",
      pt: "OS ESCOLHIDOS",
      es: "LOS ELEGIDOS",
      zu: "ABASAKHETHIWE",
      xh: "ABASAKHETHIWE",
      sw: "WACHAGUZI",
      ln: "BAYA LIKONDE"
    },
    subtitle: {
      en: "Meet the heroes, legends and guardians of the ISOLELE Universe.",
      fr: "Rencontrez les héros, légendes et gardiens de l'univers ISOLELE.",
      pt: "Conheça os heróis, lendas e guardiões do Universo ISOLELE.",
      es: "Conoce a los héroes, leyendas y guardianes del Universo ISOLELE.",
      zu: "Hlangana nengalo, inganekwane nezikhulu sezwe se-ISOLELE.",
      xh: "Hlangana nengalo, inganekwane nezikhulu sezwe se-ISOLELE.",
      sw: "Kamatia wabunga, hadithi na walinzi wa Ulimwengu wa ISOLELE.",
      ln: "Longa baninga, bambo mpe basolani ya Bambwe ya ISOLELE."
    },
    discover: {
      en: "DISCOVER",
      fr: "DÉCOUVRIR",
      pt: "DESCOBRIR",
      es: "DESCUBRIR",
      zu: "THOLA",
      xh: "THOLA",
      sw: "GUNDUA",
      ln: "TALA"
    }
  }

  const t = (key: string) => {
    return translations[key as keyof typeof translations]?.[lang as keyof typeof translations[keyof typeof translations]] || 
           translations[key as keyof typeof translations]?.en || ""
  }

  useEffect(() => {
    if (!carouselRef.current || isHovered) return

    const carousel = carouselRef.current
    let animationId: NodeJS.Timeout

    const scroll = () => {
      carousel.scrollLeft += 2
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0
      }
    }

    animationId = setInterval(scroll, 30)
    return () => clearInterval(animationId)
  }, [isHovered])

  return (
    <section 
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-black tracking-wider mb-2"
              style={{ color: currentTheme.colors.textPrimary }}
            >
              {t("title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              {t("subtitle")}
            </motion.p>
          </div>
        </div>

        {/* Infinite Auto-Scrolling Carousel */}
        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollBehavior: "auto" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Duplicate characters 3 times for infinite loop */}
          {[...characters, ...characters, ...characters].map((character, index) => (
            <motion.div
              key={`${character.id}-${Math.floor(index / characters.length)}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + (index % characters.length) * 0.1 }}
              className="flex-shrink-0 w-72 group"
            >
              <Link href={`/characters/${character.id}`}>
                <div 
                  className="relative h-96 rounded-2xl overflow-hidden mb-4 transition-all duration-500 cursor-pointer"
                  style={{
                    backgroundColor: currentTheme.colors.backgroundSecondary,
                    border: `1px solid ${currentTheme.colors.accentPrimary}30`,
                  }}
                >
                  {/* Character image with gradient overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url('${character.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'top center'
                    }}
                  />
                  
                  {/* Gradient overlay - transparent top to color bottom */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${character.color}40 50%, ${currentTheme.colors.background} 100%)`
                    }}
                  />
                  
                  {/* Hover overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{
                      background: `linear-gradient(to top, ${currentTheme.colors.background} 0%, transparent 50%)`
                    }}
                  />
                  
                  {/* Glowing border on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: `inset 0 0 30px ${character.color}40, 0 0 30px ${character.color}30`
                    }}
                  />
                </div>
                
                {/* Character info */}
                <h3 
                  className="text-2xl font-black tracking-wider mb-1"
                  style={{ color: currentTheme.colors.textPrimary }}
                >
                  {character.name}
                </h3>
                <p 
                  className="text-xs font-medium mb-3 line-clamp-2"
                  style={{ color: character.color }}
                >
                  {typeof character.title === 'string' ? character.title : (character.title as any)[lang] || (character.title as any).en}
                </p>
                
                {/* Discover button */}
                <motion.span
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-wider"
                  style={{ color: currentTheme.colors.accentPrimary }}
                  whileHover={{ x: 5 }}
                >
                  {t("discover")}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    →
                  </motion.span>
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
