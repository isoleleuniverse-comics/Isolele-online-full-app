import { BookPageClient } from "@/components/book-page-client"
import { BOOK_PRODUCTS } from "@/lib/book-products"
import type { Metadata } from "next"

const book = BOOK_PRODUCTS.find((b) => b.id === "kimoya")!

export const metadata: Metadata = {
  title: "Kimoya: The Rising Kandake — ISOLELE",
  description: book.description,
  openGraph: {
    title: "Kimoya: The Rising Kandake — ISOLELE",
    description: book.description,
    images: [{ url: book.coverImage }],
  },
}

export default function KimoyaPage() {
  return <BookPageClient book={book} />
}
