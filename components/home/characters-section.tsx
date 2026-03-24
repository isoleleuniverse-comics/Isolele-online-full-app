"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { InfiniteCarousel } from "./infinite-carousel"

const characters = [
  {
    id: "zaire",
    name: "ZAIIRE",
    title: "The Prince of Kongo and the Necklace of Destiny",
    description: "Son of thunder and royalty, chosen by the Necklace of Destiny.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg",
    color: "#F6B800",
  },
  {
    id: "bambula",
    name: "BAMBULA",
    title: "Child of Rhythm",
    description: "Warrior of the savannas, master of sacred fire and wild nature.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
    color: "#B3541E",
  },
  {
    id: "kimoya",
    name: "MAKANDA",
    title: "THE MOST POWERFUL Empire in History",
    description: "Warrior empress whose royal court holds the destiny of the continent in her hands.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fdca3f09-323e-4823-a0a4-0967d5e1b5f6.jpeg",
    color: "#C0392B",
  },
  {
    id: "mokele",
    name: "MOKELE",
    title: "Crowned by the Streets",
    description: "Heir of urban chaos and ancestral power — Crowned by the Streets.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5bdc2ecc-913b-412b-a840-2a5197cd801a.jpeg",
    color: "#4169E1",
  },
  {
    id: "kufulula",
    name: "HRM KING KUFULULA",
    title: "Visionary• Cultural Architect • African Royalty",
    description: "Legendary monarch, protector of the ISOLELE royal lineage.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/King%20kufulula-1pEeYE9t1QYruZhNooZuPw7Nkd1A8l.jpg",
    color: "#8B6914",
  },
  {
    id: "ensemble",
    name: "THE ISOLELE ASSEMBLY",
    title: "The Chosen Ones United",
    description: "All warriors and queens of the ZAIIRE kingdom united in their splendor.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c389067b-e5b3-4664-8c15-26b59810c68b.jpeg",
    color: "#9932CC",
  },
]

export function CharactersSection() {
  const { currentTheme } = useTheme()
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 350
      const newScrollLeft = carouselRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      carouselRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" })
    }
    
    if (direction === "left" && activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    } else if (direction === "right" && activeIndex < characters.length - 1) {
      setActiveIndex(activeIndex + 1)
    }
  }

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
              THE CHOSEN ONES
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              Meet the heroes, legends and guardians of the ISOLELE Universe.
            </motion.p>
          </div>
        </div>

        {/* Infinite Auto-Scrolling Carousel */}
        <InfiniteCarousel characters={characters} currentTheme={currentTheme} />
      </div>
    </section>
  )
}
