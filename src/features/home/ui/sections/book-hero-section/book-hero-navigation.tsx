"use client";

import { motion } from "framer-motion";

interface BookHeroNavigationProps {
  count: number;
  current: number;
  onSelect: (index: number) => void;
}

export function BookHeroNavigation({ count, current, onSelect }: BookHeroNavigationProps) {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-6">
      <div className="flex gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => onSelect(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "bg-white w-8" : "bg-white/40 w-2"
            }`}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.6)" }}
          />
        ))}
      </div>
    </div>
  );
}

