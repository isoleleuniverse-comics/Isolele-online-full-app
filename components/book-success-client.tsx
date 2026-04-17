"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { InvoiceOverlay } from "@/components/book-page-client"
import type { BookProduct } from "@/lib/book-products"

interface BookSuccessClientProps {
  book: BookProduct
  customerEmail: string
}

export function BookSuccessClient({ book, customerEmail }: BookSuccessClientProps) {
  const router = useRouter()

  useEffect(() => {
    // Send invoice email via server API route (no client-side emailjs needed)
    if (customerEmail) {
      fetch("/api/send-invoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ book, customerEmail }),
      }).catch(() => {
        // Silent fail — invoice is shown on screen regardless
      })
    }
  }, [book, customerEmail])

  return (
    <InvoiceOverlay
      book={book}
      customerEmail={customerEmail}
      onClose={() => router.push(`/books/${book.id}`)}
    />
  )
}
