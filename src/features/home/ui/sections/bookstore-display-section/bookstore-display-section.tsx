"use client";

import { useHomePageContent } from "@/features/home/model";
import { BOOKSTORE_IMAGE_BLUR_DATA_URL } from "./data";
import { BookstoreDisplayHeader } from "./bookstore-display-header";
import { BookstoreDisplayImage } from "./bookstore-display-image";
import { BookstoreDisplayCaption } from "./bookstore-display-caption";

export function BookstoreDisplaySection() {
  const { bookstoreDisplay } = useHomePageContent();

  return (
    <section className="w-full bg-background py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <BookstoreDisplayHeader content={bookstoreDisplay} />
        <BookstoreDisplayImage content={bookstoreDisplay} blurDataURL={BOOKSTORE_IMAGE_BLUR_DATA_URL} />
        <BookstoreDisplayCaption caption={bookstoreDisplay.caption} />
      </div>
    </section>
  );
}
