"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { characterFilterMap, characters } from "@/features/characters/model/characters.data";
import type { Character } from "@/features/characters/model/characters.types";
import {
  CharacterModal,
  CharactersFilterBar,
  CharactersGrid,
  CharactersHeroSection,
} from "@/features/characters/ui/sections";
import { useTheme } from "@/lib/theme-context";

export function CharactersPage() {
  const { currentTheme } = useTheme();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [filter, setFilter] = useState("all");

  const displayedCharacters = useMemo(() => {
    if (filter === "all") return characters;
    return characters.filter((character) => characterFilterMap[filter]?.includes(character.id));
  }, [filter]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: currentTheme.colors.background }}>
      <CharactersHeroSection />
      <CharactersFilterBar activeFilter={filter} onChangeFilter={setFilter} />
      <CharactersGrid characters={displayedCharacters} onSelectCharacter={setSelectedCharacter} />

      <AnimatePresence>
        {selectedCharacter ? <CharacterModal character={selectedCharacter} onClose={() => setSelectedCharacter(null)} /> : null}
      </AnimatePresence>
    </div>
  );
}

