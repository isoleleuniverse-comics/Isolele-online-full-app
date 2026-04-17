"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HERO_BLUR_DATA_URL, HERO_SLIDE_VARIANTS } from "./data";
import type { HeroSlide, LocalizedHeroSlide } from "./types";

interface BookHeroSlideProps {
  slide: HeroSlide;
  localizedSlide: LocalizedHeroSlide;
  current: number;
  direction: number;
}

export function BookHeroSlide({ slide, localizedSlide, current, direction }: BookHeroSlideProps) {
  return (
    <AnimatePresence custom={direction} mode="wait">
      <motion.div
        key={slide.id}
        custom={direction}
        variants={HERO_SLIDE_VARIANTS}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src={slide.image}
            alt={localizedSlide.title}
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority={current === 0}
            placeholder="blur"
            blurDataURL={HERO_BLUR_DATA_URL}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.2) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-[70px]">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block mb-5"
              style={{
                backgroundColor: slide.accentColor,
                color: "#000",
                fontSize: "11px",
                fontWeight: "700",
                padding: "7px 14px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              {localizedSlide.tag}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: slide.accentColor, opacity: 0.85 }}
            >
              {localizedSlide.subtitle}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-balance"
              style={{
                color: "#FFFFFF",
                lineHeight: "1.05",
                textShadow: "0 4px 20px rgba(0,0,0,0.6)",
                textTransform: "uppercase",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {localizedSlide.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: "#E0E0E0" }}
            >
              {localizedSlide.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <Link href={slide.href}>
                <button
                  className="px-8 py-4 font-bold text-base tracking-wider uppercase rounded-md transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ backgroundColor: slide.accentColor, color: "#000" }}
                >
                  {localizedSlide.buttonText}
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

