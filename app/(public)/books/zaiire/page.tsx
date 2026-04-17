import { BookPageClient } from "@/components/book-page-client"
import { BOOK_PRODUCTS } from "@/lib/book-products"
import type { Metadata } from "next"

const book = BOOK_PRODUCTS.find((b) => b.id === "zaiire")!

export const metadata: Metadata = {
  title: "Zaiire: The Prince of Kongo — ISOLELE",
  description: book.description,
  openGraph: {
    title: "Zaiire: The Prince of Kongo — ISOLELE",
    description: book.description,
    images: [{ url: book.coverImage }],
  },
}

export default function ZaiirePage() {
  return <BookPageClient book={book} />
}
