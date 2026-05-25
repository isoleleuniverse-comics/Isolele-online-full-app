"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { characterFilterMap, charactersPageData, getCharacters } from "@/features/characters/model/characters.data";
import type { Character } from "@/features/characters/model/characters.types";
import {
  CharacterModal,
  CharactersFilterBar,
  CharactersGrid,
  CharactersHeroSection,
} from "@/features/characters/ui/sections";
import { resolveContentLocale, type SupportedLocale } from "@/shared/i18n/locales";
import { useTheme } from "@/shared/contexts/theme-context";

interface CharactersPageProps {
  locale: SupportedLocale;
}

export function CharactersPage({ locale }: CharactersPageProps) {
  const { currentTheme } = useTheme();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [filter, setFilter] = useState("all");
  const characters = useMemo(() => getCharacters(locale), [locale]);
  const pageContent = charactersPageData[resolveContentLocale(locale)];

  const displayedCharacters = useMemo(() => {
    if (filter === "all") return characters;
    return characters.filter((character) => characterFilterMap[filter]?.includes(character.id));
  }, [characters, filter]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: currentTheme.colors.background }}>
      <CharactersHeroSection characterCount={characters.length} ui={pageContent.ui} />
      <CharactersFilterBar activeFilter={filter} filters={pageContent.filters} onChangeFilter={setFilter} />
      <CharactersGrid characters={displayedCharacters} ui={pageContent.ui} onSelectCharacter={setSelectedCharacter} />

      <AnimatePresence>
        {selectedCharacter ? (
          <CharacterModal
            character={selectedCharacter}
            locale={locale}
            ui={pageContent.ui}
            onClose={() => setSelectedCharacter(null)}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

