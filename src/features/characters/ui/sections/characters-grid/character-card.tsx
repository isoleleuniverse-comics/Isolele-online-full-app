"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Character, CharactersUIStrings } from "@/features/characters/model/characters.types";
import { useTheme } from "@/shared/contexts/theme-context";

interface CharacterCardProps {
  character: Character;
  ui: CharactersUIStrings;
  onSelect: (character: Character) => void;
}

export function CharacterCard({ character, ui, onSelect }: CharacterCardProps) {
  const { currentTheme } = useTheme();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      whileHover={{ y: -6 }}
      className="group cursor-pointer"
      onClick={() => onSelect(character)}
    >
      <div
        className="overflow-hidden rounded-2xl border"
        style={{
          borderColor: `${character.color}40`,
          backgroundColor: currentTheme.colors.backgroundSecondary,
        }}
      >
        <div className="relative h-80 overflow-hidden">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, transparent 42%, ${character.color}50 76%, ${currentTheme.colors.backgroundSecondary} 100%)`,
            }}
          />
        </div>

        <div className="p-5">
          <p className="mb-1 text-xs font-bold tracking-widest" style={{ color: character.color }}>
            {character.origin}
          </p>
          <h3 className="mb-1 text-xl font-black tracking-wide" style={{ color: currentTheme.colors.textPrimary }}>
            {character.name}
          </h3>
          <p className="mb-4 line-clamp-1 text-sm" style={{ color: currentTheme.colors.textSecondary }}>
            {character.title}
          </p>

          <div className="mb-4 flex gap-2">
            {character.powerIcons.slice(0, 3).map((Icon, index) => (
              <span
                key={`${character.id}-${index}`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor: `${character.color}20`, color: character.color }}
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>

          <motion.button
            className="w-full rounded-xl border px-4 py-2.5 text-sm font-bold tracking-widest"
            style={{
              backgroundColor: `${character.color}18`,
              color: character.color,
              borderColor: `${character.color}45`,
            }}
            whileHover={{ backgroundColor: character.color, color: "#000000" }}
          >
            {ui.viewProfile}
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

