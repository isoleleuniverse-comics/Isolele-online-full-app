import { BOOK_PRODUCTS } from "@/lib/book-products"
import { BookSuccessClient } from "@/components/book-success-client"
import type { Metadata } from "next"
import { use } from "react"

interface SuccessPageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ session_id?: string; email?: string }>
}

export const metadata: Metadata = {
  title: "Order Confirmed — ISOLELE",
}

export default function BookSuccessPage({ params, searchParams }: SuccessPageProps) {
  const { id } = use(params)
  const { email = "" } = use(searchParams)
  const book = BOOK_PRODUCTS.find((b) => b.id === id)

  if (!book) return null

  return <BookSuccessClient book={book} customerEmail={decodeURIComponent(email)} />
}
