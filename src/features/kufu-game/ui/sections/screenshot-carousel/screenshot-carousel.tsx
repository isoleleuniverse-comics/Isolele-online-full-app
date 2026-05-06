"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { KufuScreenshot } from "@/features/kufu-game/model/kufu-game.types";

interface ScreenshotCarouselProps {
  screenshots: KufuScreenshot[];
}

export function ScreenshotCarousel({ screenshots }: ScreenshotCarouselProps) {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "16/9" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -28 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image src={screenshots[index].url} alt={screenshots[index].label} fill className="rounded-xl object-cover" />
            <div className="absolute bottom-0 left-0 right-0 py-2 text-center text-xs font-semibold uppercase tracking-widest" style={{ background: "rgba(0,0,0,0.65)", color: "#F6B800" }}>
              {screenshots[index].label}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-3 flex justify-center gap-2">
        {screenshots.map((_, dotIndex) => (
          <button
            key={`dot-${dotIndex}`}
            onClick={() => setIndex(dotIndex)}
            aria-label={`Screenshot ${dotIndex + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: dotIndex === index ? 28 : 8,
              height: 8,
              backgroundColor: dotIndex === index ? "#F6B800" : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>

      <button
        onClick={() => setIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))}
        aria-label="Previous screenshot"
        className="absolute left-2 top-[calc(50%-20px)] inline-flex h-9 w-9 items-center justify-center rounded-full opacity-70 transition-opacity hover:opacity-100"
        style={{ background: "rgba(0,0,0,0.6)", color: "#F6B800" }}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => setIndex((prev) => (prev + 1) % screenshots.length)}
        aria-label="Next screenshot"
        className="absolute right-2 top-[calc(50%-20px)] inline-flex h-9 w-9 items-center justify-center rounded-full opacity-70 transition-opacity hover:opacity-100"
        style={{ background: "rgba(0,0,0,0.6)", color: "#F6B800" }}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
