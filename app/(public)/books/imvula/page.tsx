import { BookPageClient } from "@/components/book-page-client"
import { BOOK_PRODUCTS } from "@/lib/book-products"
import type { Metadata } from "next"

const book = BOOK_PRODUCTS.find((b) => b.id === "imvula")!

export const metadata: Metadata = {
  title: "Queen Imvula: The Storm Maiden — ISOLELE",
  description: book.description,
  openGraph: {
    title: "Queen Imvula: The Storm Maiden — ISOLELE",
    description: book.description,
    images: [{ url: book.coverImage }],
  },
}

export default function ImvulaPage() {
  return <BookPageClient book={book} />
}
