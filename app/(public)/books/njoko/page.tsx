import { BookPageClient } from "@/components/book-page-client"
import { BOOK_PRODUCTS } from "@/lib/book-products"
import type { Metadata } from "next"

const book = BOOK_PRODUCTS.find((b) => b.id === "njoko")!

export const metadata: Metadata = {
  title: "The Njoko Twins: Bound by Destiny — ISOLELE",
  description: book.description,
  openGraph: {
    title: "The Njoko Twins: Bound by Destiny — ISOLELE",
    description: book.description,
    images: [{ url: book.coverImage }],
  },
}

export default function NjokoPage() {
  return <BookPageClient book={book} />
}
