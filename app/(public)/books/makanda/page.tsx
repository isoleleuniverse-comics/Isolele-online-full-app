import { BookPageClient } from "@/components/book-page-client"
import { BOOK_PRODUCTS } from "@/lib/book-products"
import type { Metadata } from "next"

const book = BOOK_PRODUCTS.find((b) => b.id === "makanda")!

export const metadata: Metadata = {
  title: "Makanda: The Rising Kandake — ISOLELE",
  description: book.description,
  openGraph: {
    title: "Makanda: The Rising Kandake — ISOLELE",
    description: book.description,
    images: [{ url: book.coverImage }],
  },
}

export default function MakandaPage() {
  return <BookPageClient book={book} />
}
