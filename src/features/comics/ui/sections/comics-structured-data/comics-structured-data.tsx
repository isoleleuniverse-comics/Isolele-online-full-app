"use client";

import { getComicsCollectionJsonLd } from "@/features/comics/model/comics-json-ld";

export function ComicsStructuredData() {
  const collectionJsonLd = getComicsCollectionJsonLd();

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />;
}

