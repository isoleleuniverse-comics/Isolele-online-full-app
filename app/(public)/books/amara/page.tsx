import { BookPageClient } from "@/components/book-page-client"
import { BOOK_PRODUCTS } from "@/lib/book-products"
import type { Metadata } from "next"

const book = BOOK_PRODUCTS.find((b) => b.id === "amara")!

export const metadata: Metadata = {
  title: "Amara: Queen of the Seas — ISOLELE",
  description: book.description,
  openGraph: {
    title: "Amara: Queen of the Seas — ISOLELE",
    description: book.description,
    images: [{ url: book.coverImage }],
  },
}

export default function AmaraPage() {
  return <BookPageClient book={book} />
}
