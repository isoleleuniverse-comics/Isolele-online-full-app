'use server'

import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'
import { BOOK_PRODUCTS } from '@/lib/book-products'

export async function startBookCheckoutSession(bookId: string): Promise<string> {
  const book = BOOK_PRODUCTS.find((b) => b.id === bookId)
  if (!book) {
    throw new Error(`Book with id "${bookId}" not found`)
  }

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    redirect_on_completion: 'never',
    payment_intent_data: {
      metadata: {
        bookId: book.id,
        bookName: book.name,
      },
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
    custom_fields: [
      {
        key: 'email_for_receipt',
        label: { type: 'custom', custom: 'Email for order confirmation' },
        type: 'text',
        optional: false,
      },
    ],
  })

  return session.client_secret!
}
