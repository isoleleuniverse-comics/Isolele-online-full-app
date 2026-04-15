"use client";

import { BOOKSTORE_DISPLAY_CONTENT, BOOKSTORE_IMAGE_BLUR_DATA_URL } from "./data";
import { BookstoreDisplayHeader } from "./bookstore-display-header";
import { BookstoreDisplayImage } from "./bookstore-display-image";
import { BookstoreDisplayCaption } from "./bookstore-display-caption";

export function BookstoreDisplaySection() {
  return (
    <section className="w-full bg-background py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <BookstoreDisplayHeader content={BOOKSTORE_DISPLAY_CONTENT} />
        <BookstoreDisplayImage content={BOOKSTORE_DISPLAY_CONTENT} blurDataURL={BOOKSTORE_IMAGE_BLUR_DATA_URL} />
        <BookstoreDisplayCaption caption={BOOKSTORE_DISPLAY_CONTENT.caption} />
      </div>
    </section>
  );
}
