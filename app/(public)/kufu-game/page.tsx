"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Star,
  ShieldCheck,
  Crown,
  Dices,
  Users,
  Clock,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Globe,
  Award,
} from "lucide-react"

/* ───────────── DATA ───────────── */
const GAME = {
  title: "KUFU Ludo",
  subtitle: "The Crown Game",
  tagline: "HÉRITAGE · ROYALTY · NKUFU YA BAKULU",
  rating: 4.8,
  reviewCount: 2543,
  price: 34.99,
  players: "2–4 Players",
  age: "Ages 8+",
  duration: "30–60 min",
  category: "Strategy Board Game",
  description:
    "KUFU Ludo is the official board game of the ISOLELE universe — an immersive ludo-style strategy game rooted in African royal traditions. The board is a sacred battlefield divided into four kingdoms: Red, Green, Blue, and Gold — each representing a clan of the Kongo realm.",
  longDescription: [
    "Roll the dice, deploy your warriors, and claim the center crown. Each player controls a clan of four pawns and must navigate the sacred paths home.",
    "Be the first to bring all four pawns home through your kingdom's sacred corridor to win the Crown of the Ancestors — NKUFU YA BAKULU.",
    "Inspired by the Kongo Four Directions cosmogram (Yowa), every element of the board carries deep cultural symbolism: the leopard-skin zones, the masked guardian pieces, and the golden center throne.",
  ],
  developer: "ISOLELE Studios",
  publisher: "ISOLELE — The Chosen Ones",
  languages: ["Français", "English", "Lingala", "Kikongo", "Swahili"],
}

const SCREENSHOTS = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260304-WA0012-XSCUSyYtBnqRoFkU9Ubd5qRihh3IXm.jpg",
    label: "KUFU Ludo — Game Board",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeux%20-des-cartes-ISOLELE%202026%20copie-1.png-ifvBiGyVajqX0jXvhJQOH1k83wp5KC.jpeg",
    label: "KUFU Card Game Set",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0058-gD7wFf8li9ITXSvC57xza5JO8jIl7z.jpg",
    label: "ISOLELE Crown Symbol",
  },
]

const FEATURES = [
  {
    icon: Crown,
    title: "4 Kingdoms",
    desc: "Red, Green, Blue & Gold clans each with unique carved pawn designs inspired by Kongo masks.",
  },
  {
    icon: ShieldCheck,
    title: "Crown of Ancestors",
    desc: "Reach the sacred center NKUFU YA BAKULU to claim victory and reign supreme.",
  },
  {
    icon: Globe,
    title: "African Cosmology",
    desc: "Board layout inspired by the Kongo Four Directions cosmogram (Yowa) — a sacred symbol of life.",
  },
  {
    icon: Award,
    title: "ISOLELE Universe",
    desc: "Pawns feature characters from the ZAIIRE Book III storyline. Collect all editions.",
  },
  {
    icon: Dices,
    title: "Strategy + Luck",
    desc: "Classic ludo mechanics deepened with royal clan powers — each clan has a unique advantage.",
  },
  {
    icon: Users,
    title: "2–4 Players",
    desc: "Perfect for family game nights, competitive play, or educational cultural exploration.",
  },
]

const CHARACTERS = [
  {
    name: "LIKAKU",
    role: "4 of Trees",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0058-gD7wFf8li9ITXSvC57xza5JO8jIl7z.jpg",
  },
  {
    name: "ZAÏRA MBUBE",
    role: "D of Spots",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0031-049OjN1f25uQV6CYqHaFcawtnmViJA.jpg",
  },
  {
    name: "QUEEN JAMEELA",
    role: "Q of Spears",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0056-aVhyk1EGYDNRcA7K8hCRo1ZJulcHP9.jpg",
  },
  {
    name: "SANKURU",
    role: "4 of Diamonds",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0057-Ag7qpdNL9kdFUyL5SKSNvGFGUtEwLS.jpg",
  },
  {
    name: "GANGA ZUMBA",
    role: "G of Hearts",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0042-lwuIWgCIPdK7GOmWkORkPPXJpFQKfm.jpg",
  },
  {
    name: "MADIBA MANDELA",
    role: "B of Shields",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0060-VaXYrgONw6g7KvMuclx1P9nFhjT68R.jpg",
  },
]

const REVIEWS = [
  {
    name: "Makamba K.",
    country: "Congo-Kinshasa",
    rating: 5,
    text: "Un jeu extraordinaire qui célèbre notre héritage. Mes enfants adorent et apprennent l'histoire africaine en jouant.",
  },
  {
    name: "Amara D.",
    country: "Senegal",
    rating: 5,
    text: "This game is a masterpiece of design. The board, the pawns, the whole aesthetic — absolutely beautiful Pan-African artistry.",
  },
  {
    name: "Zinhle M.",
    country: "South Africa",
    rating: 5,
    text: "Finally a board game that tells OUR story. The KUFU Ludo board is stunning — every detail is intentional and culturally meaningful.",
  },
]

/* ───────────── COMPONENTS ───────────── */
function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          fill={i <= Math.round(rating) ? "#F6B800" : "none"}
          stroke={i <= Math.round(rating) ? "#F6B800" : "#555"}
        />
      ))}
    </div>
  )
}

function ScreenshotCarousel() {
  const [idx, setIdx] = useState(0)
  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "16/9" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={SCREENSHOTS[idx].url}
              alt={SCREENSHOTS[idx].label}
              fill
              className="object-cover rounded-xl"
            />
            <div
              className="absolute bottom-0 left-0 right-0 py-2 text-center text-xs font-semibold tracking-widest uppercase"
              style={{ background: "rgba(0,0,0,0.65)", color: "#F6B800" }}
            >
              {SCREENSHOTS[idx].label}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {SCREENSHOTS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Screenshot ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === idx ? 28 : 8,
              height: 8,
              backgroundColor: i === idx ? "#F6B800" : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => setIdx((p) => (p === 0 ? SCREENSHOTS.length - 1 : p - 1))}
        aria-label="Previous screenshot"
        className="absolute left-2 top-[calc(50%-20px)] w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-100 opacity-70"
        style={{ background: "rgba(0,0,0,0.6)", color: "#F6B800" }}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => setIdx((p) => (p + 1) % SCREENSHOTS.length)}
        aria-label="Next screenshot"
        className="absolute right-2 top-[calc(50%-20px)] w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-100 opacity-70"
        style={{ background: "rgba(0,0,0,0.6)", color: "#F6B800" }}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  )
}

/* ───────────── MAIN PAGE ───────────── */
export default function KufuGamePage() {
  const [tab, setTab] = useState<"overview" | "characters" | "reviews">("overview")

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#0A0A0A", color: "#F0F0F0" }}>

      {/* HERO BANNER */}
      <section className="relative w-full" style={{ minHeight: 420 }}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260304-WA0012-XSCUSyYtBnqRoFkU9Ubd5qRihh3IXm.jpg"
          alt="KUFU Ludo Game Board"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(10,10,10,1) 100%)" }}
        />
        {/* Back nav with ISOLELE logo */}
        <div className="absolute top-6 left-6 z-10 flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260311-WA0030-kydmLlQEI33of4mfyTaGi2r6TNvZWz.jpg"
            alt="ISOLELE Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-semibold tracking-wide hover:opacity-80 transition-opacity"
            style={{ color: "#F6B800" }}
          >
            <ChevronLeft size={17} />
            ISOLELE
          </Link>
        </div>
      </section>

      {/* GAME HEADER CARD — overlaps hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 -mt-20 pb-8">
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, #161616 0%, #1c180a 100%)",
            border: "1px solid rgba(246,184,0,0.2)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.7)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Cover with ISOLELE branding */}
            <div
              className="relative shrink-0 rounded-xl overflow-hidden group"
              style={{ width: 140, height: 140, border: "3px solid rgba(246,184,0,0.4)" }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260304-WA0012-XSCUSyYtBnqRoFkU9Ubd5qRihh3IXm.jpg"
                alt="KUFU Ludo cover"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 flex items-end justify-center p-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260311-WA0030-kydmLlQEI33of4mfyTaGi2r6TNvZWz.jpg"
                  alt="ISOLELE"
                  width={24}
                  height={24}
                  className="object-contain opacity-80"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div
                className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded mb-3"
                style={{
                  backgroundColor: "rgba(246,184,0,0.12)",
                  color: "#F6B800",
                  border: "1px solid rgba(246,184,0,0.3)",
                }}
              >
                {GAME.category}
              </div>
              <h1
                className="text-3xl md:text-4xl font-black tracking-tight text-balance leading-tight"
                style={{ color: "#FFFFFF", fontFamily: "Montserrat, sans-serif" }}
              >
                {GAME.title}
              </h1>
              <p className="text-base font-semibold mt-1 mb-1" style={{ color: "#F6B800" }}>
                {GAME.subtitle}
              </p>
              <p className="text-[11px] tracking-widest uppercase mb-4" style={{ color: "#666" }}>
                {GAME.tagline}
              </p>

              {/* Rating */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <StarRating rating={GAME.rating} />
                <span className="font-bold text-sm" style={{ color: "#F6B800" }}>
                  {GAME.rating}
                </span>
                <span className="text-xs" style={{ color: "#666" }}>
                  ({GAME.reviewCount.toLocaleString()} ratings)
                </span>
              </div>

              {/* Stats pills */}
              <div className="flex flex-wrap gap-2 mb-5">
                {[
                  { icon: Users, label: GAME.players },
                  { icon: Clock, label: GAME.duration },
                  { icon: Dices, label: GAME.age },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(246,184,0,0.1)",
                      color: "#F6B800",
                      border: "1px solid rgba(246,184,0,0.2)",
                    }}
                  >
                    <Icon size={12} />
                    {label}
                  </div>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <span className="text-3xl font-black" style={{ color: "#F6B800" }}>
                    ${GAME.price}
                  </span>
                  <span className="text-xs ml-1" style={{ color: "#555" }}>
                    USD
                  </span>
                </div>
                <Link href="/shop">
                  <button
                    className="flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm tracking-wide transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.97]"
                    style={{ backgroundColor: "#F6B800", color: "#000" }}
                  >
                    <ShoppingCart size={16} />
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 mb-6">
        <div
          className="flex gap-1 p-1 rounded-xl w-fit"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(246,184,0,0.1)" }}
        >
          {(["overview", "characters", "reviews"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-all"
              style={{
                backgroundColor: tab === t ? "#F6B800" : "transparent",
                color: tab === t ? "#000" : "#777",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* TAB CONTENT */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-28">
        <AnimatePresence mode="wait">

          {/* OVERVIEW */}
          {tab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Left — main content */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                <ScreenshotCarousel />

                {/* About */}
                <div
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(246,184,0,0.1)",
                  }}
                >
                  <h2 className="text-xl font-bold mb-4" style={{ color: "#F6B800" }}>
                    About KUFU Ludo
                  </h2>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#C8C8C8" }}>
                    {GAME.description}
                  </p>
                  {GAME.longDescription.map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed mb-2" style={{ color: "#A0A0A0" }}>
                      {para}
                    </p>
                  ))}
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-xl font-bold mb-4" style={{ color: "#F6B800" }}>
                    Features
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {FEATURES.map(({ icon: Icon, title, desc }) => (
                      <div
                        key={title}
                        className="flex gap-4 p-4 rounded-xl"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(246,184,0,0.08)",
                        }}
                      >
                        <div
                          className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ background: "rgba(246,184,0,0.12)" }}
                        >
                          <Icon size={20} color="#F6B800" />
                        </div>
                        <div>
                          <p className="font-bold text-sm mb-1" style={{ color: "#FFF" }}>
                            {title}
                          </p>
                          <p className="text-xs leading-relaxed" style={{ color: "#777" }}>
                            {desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — sidebar with ISOLELE branding */}
              <div className="flex flex-col gap-5">
                {/* ISOLELE Badge */}
                <div
                  className="rounded-xl p-4 flex flex-col items-center justify-center text-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(246,184,0,0.15) 0%, rgba(246,184,0,0.05) 100%)",
                    border: "2px solid rgba(246,184,0,0.3)",
                  }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260311-WA0030-kydmLlQEI33of4mfyTaGi2r6TNvZWz.jpg"
                    alt="ISOLELE Logo"
                    width={60}
                    height={60}
                    className="object-contain mb-2"
                  />
                  <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#F6B800" }}>
                    Part of the ISOLELE Universe
                  </p>
                </div>

                {/* Game info */}
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(246,184,0,0.1)",
                  }}
                >
                  <h3
                    className="text-xs font-bold tracking-widest uppercase mb-4"
                    style={{ color: "#F6B800" }}
                  >
                    Game Info
                  </h3>
                  {[
                    { label: "Developer", value: GAME.developer },
                    { label: "Publisher", value: GAME.publisher },
                    { label: "Players", value: GAME.players },
                    { label: "Duration", value: GAME.duration },
                    { label: "Age", value: GAME.age },
                    { label: "Category", value: GAME.category },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex justify-between py-2 text-sm"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      <span style={{ color: "#555" }}>{label}</span>
                      <span className="font-medium text-right ml-4" style={{ color: "#DDD" }}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Languages */}
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(246,184,0,0.1)",
                  }}
                >
                  <h3
                    className="text-xs font-bold tracking-widest uppercase mb-3"
                    style={{ color: "#F6B800" }}
                  >
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {GAME.languages.map((lang) => (
                      <span
                        key={lang}
                        className="text-xs px-2.5 py-1 rounded"
                        style={{ background: "rgba(246,184,0,0.1)", color: "#F6B800" }}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card game upsell */}
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(246,184,0,0.1)",
                  }}
                >
                  <h3
                    className="text-xs font-bold tracking-widest uppercase mb-4"
                    style={{ color: "#F6B800" }}
                  >
                    Also Available
                  </h3>
                  <div className="flex gap-3 items-center">
                    <div className="relative w-14 h-18 rounded-lg overflow-hidden shrink-0" style={{ height: 70 }}>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeux%20-des-cartes-ISOLELE%202026%20copie-1.png-ifvBiGyVajqX0jXvhJQOH1k83wp5KC.jpeg"
                        alt="KUFU Card Game"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: "#FFF" }}>
                        KUFU Card Game
                      </p>
                      <p className="text-xs mb-1" style={{ color: "#666" }}>
                        54 premium cards
                      </p>
                      <span className="text-sm font-bold" style={{ color: "#F6B800" }}>
                        $19.99
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* CHARACTERS */}
          {tab === "characters" && (
            <motion.div
              key="characters"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260311-WA0030-kydmLlQEI33of4mfyTaGi2r6TNvZWz.jpg"
                  alt="ISOLELE"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <p className="text-sm" style={{ color: "#777" }}>
                  Meet the guardians featured on the KUFU card game — characters drawn directly from the
                  <span style={{ color: "#F6B800" }} className="font-semibold ml-1">ISOLELE comic universe</span>, each with a unique card designation and power within the game.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {CHARACTERS.map((char) => (
                  <div key={char.name} className="flex flex-col items-center gap-3">
                    <div
                      className="relative w-full rounded-xl overflow-hidden"
                      style={{
                        aspectRatio: "3/4",
                        border: "2px solid rgba(246,184,0,0.2)",
                      }}
                    >
                      <Image src={char.image} alt={char.name} fill className="object-cover" />
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-bold leading-tight" style={{ color: "#FFF" }}>
                        {char.name}
                      </p>
                      <p className="text-[10px] mt-0.5" style={{ color: "#F6B800" }}>
                        {char.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* REVIEWS */}
          {tab === "reviews" && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Summary */}
                <div
                  className="lg:w-56 shrink-0 rounded-xl p-6 flex flex-col items-center justify-center text-center"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(246,184,0,0.1)",
                  }}
                >
                  <span className="text-6xl font-black" style={{ color: "#F6B800" }}>
                    {GAME.rating}
                  </span>
                  <div className="mt-2 mb-1">
                    <StarRating rating={GAME.rating} size={18} />
                  </div>
                  <p className="text-xs" style={{ color: "#555" }}>
                    {GAME.reviewCount.toLocaleString()} ratings
                  </p>
                </div>

                {/* Reviews list */}
                <div className="flex-1 flex flex-col gap-4">
                  {REVIEWS.map((rev) => (
                    <div
                      key={rev.name}
                      className="rounded-xl p-5"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(246,184,0,0.08)",
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-bold text-sm" style={{ color: "#FFF" }}>
                            {rev.name}
                          </span>
                          <span className="text-xs ml-2" style={{ color: "#555" }}>
                            — {rev.country}
                          </span>
                        </div>
                        <StarRating rating={rev.rating} size={14} />
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
                        {rev.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ISOLELE Footer Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center items-center gap-3 mt-12 pt-8 border-t"
          style={{ borderColor: "rgba(246,184,0,0.1)" }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260311-WA0030-kydmLlQEI33of4mfyTaGi2r6TNvZWz.jpg"
            alt="ISOLELE"
            width={40}
            height={40}
            className="object-contain"
          />
          <div>
            <p className="font-bold text-sm" style={{ color: "#F6B800" }}>
              ISOLELE STUDIOS
            </p>
            <p className="text-xs" style={{ color: "#666" }}>
              The Chosen Ones
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
