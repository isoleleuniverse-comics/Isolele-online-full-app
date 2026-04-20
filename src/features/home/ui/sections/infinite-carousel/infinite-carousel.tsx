"use client";

import { useRef } from "react";
import { InfiniteCarouselCard } from "./infinite-carousel-card";
import { useInfiniteCarouselTrack } from "./use-infinite-carousel-track";
import type { InfiniteCarouselProps } from "./types";

export function InfiniteCarousel({ characters, currentTheme }: InfiniteCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { handlePauseStart, handlePauseEnd } = useInfiniteCarouselTrack({
    trackRef,
    charactersLength: characters.length,
  });

  const triplicatedCards = [...characters, ...characters, ...characters];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-6"
        style={{
          willChange: "transform",
          transition: "none",
        }}
      >
        {triplicatedCards.map((character, index) => (
          <InfiniteCarouselCard
            key={`${character.id}-${index}`}
            character={character}
            theme={currentTheme}
            onPauseStart={handlePauseStart}
            onPauseEnd={handlePauseEnd}
          />
        ))}
      </div>
    </div>
  );
}
