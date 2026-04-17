import { BookPageClient } from "@/components/book-page-client"
import { BOOK_PRODUCTS } from "@/lib/book-products"
import type { Metadata } from "next"

const book = BOOK_PRODUCTS.find((b) => b.id === "mokele")!

export const metadata: Metadata = {
  title: "Mokele: Prince of the Waters — ISOLELE",
  description: book.description,
  openGraph: {
    title: "Mokele: Prince of the Waters — ISOLELE",
    description: book.description,
    images: [{ url: book.coverImage }],
  },
}

export default function MokelePage() {
  return <BookPageClient book={book} />
}
