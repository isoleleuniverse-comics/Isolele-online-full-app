'use server'

import { stripe } from '@/lib/stripe'
import { BOOK_PRODUCTS } from '@/lib/book-products'

export async function startBookCheckoutSession(bookId: string, customerEmail: string): Promise<string> {
  const book = BOOK_PRODUCTS.find((b) => b.id === bookId)
  if (!book) {
    throw new Error(`Book with id "${bookId}" not found`)
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    customer_email: customerEmail,
    metadata: {
      bookId: book.id,
      bookName: book.name,
      bookSubtitle: book.subtitle,
      bookPrice: String(book.priceInCents),
      bookFormat: book.format,
      bookPages: String(book.pages),
      bookDescription: book.description,
      customerEmail,
    },
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: book.name,
            description: `${book.subtitle} — ${book.format}`,
          },
          unit_amount: book.priceInCents,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${baseUrl}/books/${bookId}/success?session_id={CHECKOUT_SESSION_ID}&email=${encodeURIComponent(customerEmail)}`,
    cancel_url: `${baseUrl}/books/${bookId}`,
  })

  return session.url!
}
