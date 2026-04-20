"use client";

import { useRef } from "react";
import { SCROLL_IMAGES } from "./data";
import { useInfiniteScrollTrack } from "./use-infinite-scroll-track";
import { InfiniteScrollTrack } from "./infinite-scroll-track";

export function InfiniteScrollCarousel() {
  const innerRef = useRef<HTMLDivElement>(null);
  useInfiniteScrollTrack(innerRef);

  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Immersive Story</h2>
          <p className="text-lg text-foreground/70">Experience the worlds of ISOLELE</p>
        </div>

        <div className="w-full overflow-hidden rounded-2xl bg-gradient-to-r from-background via-background to-background">
          <InfiniteScrollTrack trackRef={innerRef} images={SCROLL_IMAGES} />
        </div>
      </div>
    </section>
  );
}
