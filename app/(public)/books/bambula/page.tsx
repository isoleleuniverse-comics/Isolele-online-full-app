import { BookPageClient } from "@/components/book-page-client"
import { BOOK_PRODUCTS } from "@/lib/book-products"
import type { Metadata } from "next"

const book = BOOK_PRODUCTS.find((b) => b.id === "bambula")!

export const metadata: Metadata = {
  title: "Bambula: Spirit of the Ancestors — ISOLELE",
  description: book.description,
  openGraph: {
    title: "Bambula: Spirit of the Ancestors — ISOLELE",
    description: book.description,
    images: [{ url: book.coverImage }],
  },
}

export default function BambulaPage() {
  return <BookPageClient book={book} />
}
