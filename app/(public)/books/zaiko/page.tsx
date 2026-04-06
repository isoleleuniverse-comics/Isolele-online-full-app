import { BookPageClient } from "@/components/book-page-client"
import { BOOK_PRODUCTS } from "@/lib/book-products"
import type { Metadata } from "next"

const book = BOOK_PRODUCTS.find((b) => b.id === "zaiko")!

export const metadata: Metadata = {
  title: "Zaiko: Last King of the Streets — ISOLELE",
  description: book.description,
  openGraph: {
    title: "Zaiko: Last King of the Streets — ISOLELE",
    description: book.description,
    images: [{ url: book.coverImage }],
  },
}

export default function ZaikoPage() {
  return <BookPageClient book={book} />
}
