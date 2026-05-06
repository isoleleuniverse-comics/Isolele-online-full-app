"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Character, CharactersUIStrings } from "@/features/characters/model/characters.types";
import { CharacterCard } from "./character-card";

interface CharactersGridProps {
  characters: Character[];
  ui: CharactersUIStrings;
  onSelectCharacter: (character: Character) => void;
}

export function CharactersGrid({ characters, ui, onSelectCharacter }: CharactersGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} ui={ui} onSelect={onSelectCharacter} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

