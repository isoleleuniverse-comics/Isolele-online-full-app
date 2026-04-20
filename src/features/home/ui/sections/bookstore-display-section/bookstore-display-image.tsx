import Image from "next/image";
import type { BookstoreDisplayContent } from "./types";

interface BookstoreDisplayImageProps {
  content: BookstoreDisplayContent;
  blurDataURL: string;
}

export function BookstoreDisplayImage({ content, blurDataURL }: BookstoreDisplayImageProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg">
      <Image
        src={content.imageSrc}
        alt={content.imageAlt}
        width={1200}
        height={800}
        sizes="100vw"
        className="w-full h-auto object-cover"
        priority
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    </div>
  );
}
