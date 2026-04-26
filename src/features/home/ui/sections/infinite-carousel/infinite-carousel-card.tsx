import Link from "next/link";
import { motion } from "framer-motion";
import type { Theme } from "@/shared/contexts/theme-context";
import type { CarouselCharacter } from "./types";

interface InfiniteCarouselCardProps {
  character: CarouselCharacter;
  theme: Theme;
  onPauseStart: () => void;
  onPauseEnd: () => void;
}

export function InfiniteCarouselCard({
  character,
  theme,
  onPauseStart,
  onPauseEnd,
}: InfiniteCarouselCardProps) {
  return (
    <div
      className="flex-shrink-0 w-72 group"
      onMouseDown={onPauseStart}
      onMouseUp={onPauseEnd}
      onMouseLeave={onPauseEnd}
      onTouchStart={onPauseStart}
      onTouchEnd={onPauseEnd}
    >
      <Link href={`/characters/${character.id}`}>
        <div
          className="relative h-96 rounded-2xl overflow-hidden mb-4 transition-all duration-500 cursor-pointer"
          style={{
            backgroundColor: theme.colors.backgroundSecondary,
            border: `1px solid ${theme.colors.accentPrimary}30`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${character.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${character.color}40 50%, ${theme.colors.background} 100%)`,
            }}
          />

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{
              background: `linear-gradient(to top, ${theme.colors.background} 0%, transparent 50%)`,
            }}
          />
        </div>

        <h3 className="text-2xl font-black tracking-wider mb-1" style={{ color: theme.colors.textPrimary }}>
          {character.name}
        </h3>
        <p className="text-xs font-medium mb-3 whitespace-nowrap overflow-hidden text-ellipsis" style={{ color: character.color }}>
          {character.title}
        </p>

        <motion.span
          className="inline-flex items-center gap-2 text-sm font-bold tracking-wider"
          style={{ color: theme.colors.accentPrimary }}
          whileHover={{ x: 5 }}
        >
          discover
          <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            -&gt;
          </motion.span>
        </motion.span>
      </Link>
    </div>
  );
}
