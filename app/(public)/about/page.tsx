"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { BreadcrumbJsonLd } from "@/components/json-ld"
import { useState } from "react"

const pillars = [
  {
    id: "mythology",
    title: { en: "A Mythological Universe", fr: "Un Univers Mythologique" },
    description: {
      en: "A vast interconnected world inspired by real African kingdoms - from the thrones of Kongo, Kush and Axum to hidden empires guided by gods, warrior queens and oracles.",
      fr: "Un vaste monde interconnecté inspiré des vrais royaumes africains - des trônes du Kongo, de Kush et d'Axum aux empires cachés guidés par des dieux, des reines guerrières et des oracles."
    },
    color: "#D4AF37"
  },
  {
    id: "media",
    title: { en: "A Publishing & Media Movement", fr: "Un Mouvement d'Édition et de Média" },
    description: {
      en: "From comics to novels, animations, games and cinematic worlds - Isolele builds a platform for African creatives to tell their own legends with excellence.",
      fr: "Des bandes dessinées aux romans, animations, jeux et mondes cinématographiques - Isolele construit une plateforme pour les créatifs africains de raconter leurs propres légendes."
    },
    color: "#E8C547"
  },
  {
    id: "cultural",
    title: { en: "A Cultural Renaissance", fr: "Une Renaissance Culturelle" },
    description: {
      en: "A movement to reclaim, celebrate and reimagine Africa's royal, mythical and divine identity. These are not just stories, they are acts of remembrance.",
      fr: "Un mouvement pour récupérer, célébrer et réimaginer l'identité royale, mythique et divine de l'Afrique. Ce ne sont pas seulement des histoires, ce sont des actes de souvenir."
    },
    color: "#F4D03F"
  },
  {
    id: "legacy",
    title: { en: "A Legacy Engine", fr: "Un Moteur d'Héritage" },
    description: {
      en: "Every child who reads Isolele will discover superheroes who look like them, speak their language, protect their land and honor their ancestors.",
      fr: "Chaque enfant qui lit Isolele découvrira des superhéros qui leur ressemblent, parlent leur langue, protègent leur terre et honorent leurs ancêtres."
    },
    color: "#FFD700"
  }
]

const principles = [
  { en: "Destiny is not a Choice, it's a Calling", fr: "La Destinée n'est pas un Choix, c'est un Appel" },
  { en: "Royal Bloodlines Carry Ancient Power", fr: "Les Lignées Royales Transportent un Pouvoir Ancien" },
  { en: "Ancestral Spirits Never Die", fr: "Les Esprits Ancestraux ne Meurent Jamais" },
  { en: "Africa Was Never Powerless", fr: "L'Afrique n'a Jamais été Impuissante" },
  { en: "The Prophecy Has Returned", fr: "La Prophétie est Revenue" }
]

export default function AboutPage() {
  const { currentLanguage } = useLanguage()
  const lang = currentLanguage.code
  const t = (obj: { en: string; fr: string }) => obj[lang as 'en' | 'fr'] || obj.en
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null)

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://isolele.com" },
        { name: "About", url: "https://isolele.com/about" }
      ]} />
      
      <main className="min-h-screen bg-black">
        {/* HERO SECTION WITH LOGO AND KING IMAGE */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
          
          {/* Background King Image */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute right-0 top-0 w-full h-full lg:w-3/5"
          >
            <Image
              src="/king-kufulula-1.jpg"
              alt="King Kufulula - ISOLELE Royal Founder"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          {/* Official Logo - Top Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute top-8 right-8 z-20"
          >
            <Image
              src="/isolele-logo-official.png"
              alt="ISOLELE Official Logo"
              width={100}
              height={100}
              className="w-20 h-20 lg:w-28 lg:h-28 object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Hero Content - Left Side */}
          <div className="relative z-20 max-w-6xl mx-auto px-4 py-16">
            <div className="max-w-2xl">
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <p className="text-lg md:text-xl tracking-widest font-bold text-yellow-400 mb-2">
                  {lang === 'fr' ? "EXPLOREZ LES MYTHES" : "EXPLORE THE MYTHS"}
                </p>
                <p className="text-sm md:text-base text-gray-300">
                  {lang === 'fr' 
                    ? "Légendes et Bandes Dessinées Africains" 
                    : "Legends and African Comics"}
                </p>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl md:text-7xl font-black mb-6 leading-tight"
                style={{
                  background: "linear-gradient(135deg, #FFD700 0%, #FFC700 50%, #D4AF37 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                {lang === 'fr' ? "Qu'est-ce qu'ISOLELE ?" : "What is ISOLELE?"}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-2xl text-gray-200 leading-relaxed mb-8 font-light"
              >
                {lang === 'fr'
                  ? "Un univers visionnaire né pour restaurer l'âme du récit africain — un empire mythologique où les héros sont choisis par le destin, où les royaumes ne sont jamais oubliés, et où le pouvoir ancestral vit dans chaque page."
                  : "A visionary universe born to restore the soul of African storytelling — a mythological empire where heroes are chosen by destiny, where kingdoms are never forgotten, and where ancestral power lives in every page."}
              </p>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg text-lg hover:bg-yellow-400 transition-colors"
              >
                {lang === 'fr' ? "Découvrir L'Univers" : "Discover the Universe"}
              </motion.button>
            </div>
          </div>
        </section>

        {/* THE NAME & POWER SECTION */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left - Logo Highlight */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-800 p-8 flex items-center justify-center">
                  <Image
                    src="/isolele-logo-official.png"
                    alt="ISOLELE Shield Logo"
                    width={300}
                    height={300}
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-yellow-500" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-yellow-500" />
              </motion.div>

              {/* Right - Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-black mb-4 text-yellow-400">
                    ✦ {lang === 'fr' ? "Le Nom & Son Pouvoir" : "The Name & Its Power"}
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-transparent mb-6" />
                </div>

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                  {lang === 'fr'
                    ? '"Isolele" signifie "Les Élus" — un nom ancré dans une destinée divine. Chaque personnage de cet univers ne naît pas seulement puissant — il est convoqué par des lignées de sang, des esprits anciens, et les récits inachevés de ses ancêtres.'
                    : '"Isolele" means "The Chosen Ones" — a name rooted in divine destiny. Every character in this universe is not just born powerful — they are summoned by bloodlines, ancient spirits, and unfinished stories of their ancestors.'}
                </p>

                <p className="text-lg text-gray-400 leading-relaxed italic font-light">
                  {lang === 'fr'
                    ? "Ce n'est pas seulement de la fiction. C'est un héritage spirituel réincarné sous une forme moderne."
                    : "This is not just fiction. It is a spiritual heritage reborn in modern form."}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FOUR PILLARS INTERACTIVE SECTION */}
        <section className="py-24 px-4 md:px-8 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-yellow-400">
                {lang === 'fr' ? "Ce Qu'EST ISOLELE" : "WHAT IS ISOLELE"}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-transparent mx-auto mb-8" />
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {lang === 'fr'
                  ? "ISOLELE existe sur quatre piliers interconnectés qui redéfinissent la narration africaine pour le monde."
                  : "ISOLELE exists on four interconnected pillars that redefine African storytelling for the world."}
              </p>
            </motion.div>

            {/* Pillars Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setExpandedPillar(expandedPillar === pillar.id ? null : pillar.id)}
                  className="relative group cursor-pointer"
                >
                  <div
                    className="h-full p-8 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300"
                    style={{
                      borderColor: pillar.color,
                      backgroundColor: `${pillar.color}08`,
                      boxShadow: expandedPillar === pillar.id ? `0 0 30px ${pillar.color}40` : 'none'
                    }}
                  >
                    {/* Number */}
                    <div
                      className="text-6xl font-black mb-4 opacity-20"
                      style={{ color: pillar.color }}
                    >
                      {idx + 1}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ color: pillar.color }}>
                      {t(pillar.title)}
                    </h3>

                    {/* Description */}
                    <AnimatePresence>
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-300 leading-relaxed text-lg"
                      >
                        {t(pillar.description)}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  {/* Hover Border Animation */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: `inset 0 0 20px ${pillar.color}20`,
                      borderRadius: '16px'
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRINCIPLES SECTION - VISUAL SHOWCASE */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-yellow-400">
                ✦ {lang === 'fr' ? "Les Piliers Fondamentaux" : "The Fundamental Pillars"}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-transparent mx-auto" />
            </motion.div>

            {/* Principles Cards */}
            <div className="grid md:grid-cols-5 gap-4">
              {principles.map((principle, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="relative h-56 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-xl border-2 border-yellow-500/50 p-6 flex items-center justify-center overflow-hidden group-hover:border-yellow-400 transition-all duration-300">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-transparent to-yellow-600" />
                    </div>

                    {/* Content */}
                    <p className="relative text-center font-bold text-lg md:text-base lg:text-lg leading-tight text-white group-hover:text-yellow-200 transition-colors duration-300">
                      {t(principle)}
                    </p>

                    {/* Glow on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" style={{ boxShadow: 'inset 0 0 20px rgba(212, 175, 55, 0.3)' }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* KING KUFULULA SHOWCASE SECTION */}
        <section className="py-24 px-4 md:px-8 bg-black relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left - King Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-4 border-yellow-500">
                  <Image
                    src="/king-kufulula-2.jpg"
                    alt="HRM King Kufulula - Royal Founder"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-yellow-400" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-yellow-400" />
              </motion.div>

              {/* Right - Royal Bio */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <p className="text-sm font-bold tracking-widest text-yellow-400 mb-2">
                    {lang === 'fr' ? "FONDATEUR ROYAL" : "ROYAL FOUNDER"}
                  </p>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
                    HRM King Kufulula
                  </h2>
                  <p className="text-xl font-bold text-yellow-300">
                    {lang === 'fr'
                      ? "Architecte Culturel Africain | Fondateur d'ISOLELE"
                      : "African Cultural Architect | Founder of ISOLELE"}
                  </p>
                </div>

                <div className="space-y-4 text-lg leading-relaxed text-gray-300">
                  <p className="font-light">
                    {lang === 'fr'
                      ? "HRM King Kufulula est une figure royale congolaise, architecte culturel et fondateur d'Isolele, une institution africaine créée pour restaurer l'identité, la mémoire et la souveraineté narrative des communautés africaines et afro-descendantes du monde entier."
                      : "HRM King Kufulula is a Congolese royal figure, cultural architect, and founder of Isolele, an African institution created to restore identity, memory, and narrative sovereignty to African and Afro-descendant communities worldwide."}
                  </p>
                  <p className="font-light">
                    {lang === 'fr'
                      ? "Enraciné dans une lignée royale du Congo et guidé par une responsabilité ancestrale, son travail reflète une compréhension traditionnelle africaine de la royauté : non pas comme spectacle ou domination, mais comme gardiennage du peuple, de la terre, de la culture et des générations futures."
                      : "Rooted in royal lineage from Congo and guided by ancestral responsibility, his work reflects a traditional African understanding of kingship: not as spectacle or domination, but as custodianship of people, land, culture, and future generations."}
                  </p>
                </div>

                {/* Quote Box */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-8 rounded-xl border-2 border-yellow-500/50 bg-yellow-500/5 backdrop-blur-sm"
                >
                  <p className="text-2xl font-black italic text-yellow-300 leading-relaxed">
                    {lang === 'fr'
                      ? '"Isolele n\'a pas été créé pour divertir le monde. Il a été créé pour restaurer la mémoire."'
                      : '"Isolele was not created to entertain the world. It was created to restore memory."'}
                  </p>
                  <p className="text-sm text-gray-400 mt-4">
                    — HRM King Kufulula
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* VISION SECTION */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-yellow-400">
                ⚡ {lang === 'fr' ? "LA VISION" : "THE VISION"}
              </h2>
              
              <div className="space-y-6 text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-yellow-400"
                >
                  {lang === 'fr'
                    ? "Restaurer l'Afrique en tant que centre du mythe, de la magie et de la puissance."
                    : "Restore Africa as the center of myth, magic, and power."}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg font-light"
                >
                  {lang === 'fr'
                    ? "Créer une tapisserie vivante de légendes qui éveillent la fierté, la mission et la prophétie dans chaque âme qu'elles touchent — au-delà des frontières, des générations et des plateformes."
                    : "Create a living tapestry of legends that awaken pride, mission, and prophecy in every soul they touch — beyond borders, generations, and platforms."}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-24 px-4 md:px-8 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/isolele-logo-official.png"
              alt=""
              width={500}
              height={500}
              className="absolute bottom-0 right-0 w-96 h-96 opacity-20"
            />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-black">
                <span className="text-yellow-400">
                  {lang === 'fr' ? "Le monde a eu ses" : "The world has had its"}
                </span>
                <br />
                <span className="text-white">
                  {lang === 'fr' ? "super-héros." : "superheroes."}
                </span>
                <br />
                <span className="text-yellow-400">
                  {lang === 'fr'
                    ? "Il est temps que les élus de l'Afrique se lèvent."
                    : "It is time for the chosen ones of Africa to rise."}
                </span>
              </h2>

              <motion.button
                whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-yellow-500 text-black font-black text-xl rounded-lg hover:bg-yellow-400 transition-colors mx-auto block"
              >
                {lang === 'fr' ? "Rejoignez le Mouvement" : "Join the Movement"}
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
