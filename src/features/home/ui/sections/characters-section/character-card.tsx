"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Character } from "./types";

interface CharacterCardProps {
  character: Character;
  index: number;
  totalCharacters: number;
  isInView: boolean;
  discoverLabel: string;
  colors: {
    background: string;
    backgroundSecondary: string;
    accentPrimary: string;
    textPrimary: string;
  };
}



export function CharacterCard({
  character,
  index,
  totalCharacters,
  isInView,
  discoverLabel,
  colors,
}: CharacterCardProps) {
  return (
    <motion.div
      key={`${character.id}-${Math.floor(index / totalCharacters)}`}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 0.62, delay: 0.14 + (index % totalCharacters) * 0.1 }}
      className="flex-shrink-0 w-72 group"
    >
      <Link href={`/characters/${character.id}`}>
        <div
          className="relative h-96 rounded-2xl overflow-hidden mb-4 transition-all duration-500 cursor-pointer"
          style={{
            backgroundColor: colors.backgroundSecondary,
            border: `1px solid ${colors.accentPrimary}30`,
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
              background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, ${character.color}40 100%, ${colors.background} 100%)`,
            }}
          />

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
          
          />
              
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ boxShadow: `inset 0 0 30px ${character.color}40, 0 0 30px ${character.color}30` }}
          />
        </div>

        <h3 className="text-2xl font-black tracking-wider mb-1" style={{ color: colors.textPrimary }}>
          {character.name} 
        </h3>
        <p className="text- font-medium mb-3 line-clamp-2" style={{ color: character.color }}>
          {character.title}
        </p>

        <motion.span
          className="inline-flex items-center gap-2 text-sm font-bold tracking-wider"
          style={{ color: colors.accentPrimary }}
          whileHover={{ x: 5 }}
        >
          {character.discover ?? discoverLabel}
          
          <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}>
            →
          </motion.span>
        </motion.span>
      </Link>
    </motion.div>
  );
}

