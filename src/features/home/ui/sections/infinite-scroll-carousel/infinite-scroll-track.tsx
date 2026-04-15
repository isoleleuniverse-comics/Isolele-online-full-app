import Image from "next/image";
import type { RefObject } from "react";
import { SCROLL_IMAGE_BLUR_DATA_URL, type ScrollImageItem } from "./types";

interface InfiniteScrollTrackProps {
  trackRef: RefObject<HTMLDivElement | null>;
  images: ScrollImageItem[];
}

export function InfiniteScrollTrack({ trackRef, images }: InfiniteScrollTrackProps) {
  return (
    <div ref={trackRef} className="flex gap-4" style={{ width: "fit-content", willChange: "transform" }}>
      {images.map((img, i) => (
        <div key={`set1-${i}`} className="flex-shrink-0" style={{ width: "280px", height: "400px" }}>
          <Image
            src={img.src}
            alt={img.alt}
            width={280}
            height={400}
            className="w-full h-full object-cover rounded-lg"
            priority={i < 2}
            quality={80}
            placeholder="blur"
            blurDataURL={SCROLL_IMAGE_BLUR_DATA_URL}
          />
        </div>
      ))}

      {images.map((img, i) => (
        <div key={`set2-${i}`} className="flex-shrink-0" style={{ width: "280px", height: "400px" }}>
          <Image
            src={img.src}
            alt={img.alt}
            width={280}
            height={400}
            className="w-full h-full object-cover rounded-lg"
            quality={80}
            placeholder="blur"
            blurDataURL={SCROLL_IMAGE_BLUR_DATA_URL}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
