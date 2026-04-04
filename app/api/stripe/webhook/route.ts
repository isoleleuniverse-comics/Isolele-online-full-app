import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { BOOK_PRODUCTS } from '@/lib/book-products'

export async function POST(request: Request) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')!
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  let event

  if (webhookSecret) {
    try {
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
    } catch (err: any) {
      return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 })
    }
  } else {
    event = JSON.parse(body)
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any
    const bookId = session.payment_intent?.metadata?.bookId
    const book = BOOK_PRODUCTS.find((b) => b.id === bookId)
    const customerEmail = session.customer_details?.email
    const customEmail = session.custom_fields?.find((f: any) => f.key === 'email_for_receipt')?.text?.value

    const recipientEmail = customEmail || customerEmail

    if (recipientEmail && book) {
      // Send invoice via EmailJS REST API
      const emailData = {
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: {
          to_email: recipientEmail,
          to_name: session.customer_details?.name || 'Valued Customer',
          book_name: book.name,
          book_subtitle: book.subtitle,
          book_description: book.description,
          book_format: book.format,
          book_price: `$${(book.priceInCents / 100).toFixed(2)}`,
          order_id: session.id.slice(-8).toUpperCase(),
          order_date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
          order_time: new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
          }),
          tax_amount: '$0.00',
          total_amount: `$${(book.priceInCents / 100).toFixed(2)}`,
        },
      }

      try {
        await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(emailData),
        })
      } catch (emailError) {
        console.error('[v0] EmailJS send failed:', emailError)
      }
    }
  }

  return NextResponse.json({ received: true })
}
