"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { profileRouteByCharacterId } from "@/features/characters/model/characters.data";
import type { Character, CharactersUIStrings } from "@/features/characters/model/characters.types";
import type { SupportedLocale } from "@/shared/i18n/locales";
import { withLocale } from "@/shared/i18n/locales";
import { useTheme } from "@/shared/contexts/theme-context";

interface CharacterModalProps {
  character: Character;
  locale: SupportedLocale;
  ui: CharactersUIStrings;
  onClose: () => void;
}

export function CharacterModal({ character, locale, ui, onClose }: CharacterModalProps) {
  const { currentTheme } = useTheme();
  const profileHref = withLocale(locale, profileRouteByCharacterId[character.id] ?? "/characters");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 24 }}
        transition={{ type: "spring", damping: 24, stiffness: 280 }}
        className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-3xl"
        style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: `${character.color}30`, color: character.color }}
          aria-label="Close character modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-80 md:h-[620px]">
            <Image src={character.image} alt={character.name} fill className="object-cover object-top" />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, transparent 58%, ${currentTheme.colors.backgroundSecondary} 100%)`,
              }}
            />
          </div>

          <div className="max-h-[620px] overflow-y-auto p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: character.color }}>
              {character.origin}
            </p>
            <h2 className="mb-1 text-3xl font-black tracking-wide" style={{ color: currentTheme.colors.textPrimary }}>
              {character.name}
            </h2>
            <p className="mb-4 text-sm italic" style={{ color: character.color }}>
              {character.title}
            </p>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
              {character.description}
            </p>

            <div className="mb-6">
              <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: character.color }}>
                {ui.powersTitle}
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {character.powers.map((power, index) => {
                  const Icon = character.powerIcons[index];

                  return (
                    <div
                      key={`${character.id}-${power}`}
                      className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium"
                      style={{
                        backgroundColor: `${character.color}15`,
                        color: currentTheme.colors.textPrimary,
                      }}
                    >
                      {Icon ? <Icon className="h-3.5 w-3.5" style={{ color: character.color }} /> : null}
                      <span>{power}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <Link
              href={profileHref}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-black tracking-widest"
              style={{ backgroundColor: character.color, color: "#000000" }}
            >
              {ui.discoverPrefix} {character.name.toUpperCase()}
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

