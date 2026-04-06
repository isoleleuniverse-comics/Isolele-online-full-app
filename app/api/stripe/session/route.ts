import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const sessionId = searchParams.get('session_id')

  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session_id' }, { status: 400 })
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return NextResponse.json({
      email: session.customer_details?.email ?? '',
      bookId: session.payment_intent
        ? (await stripe.paymentIntents.retrieve(session.payment_intent as string)).metadata?.bookId
        : '',
    })
  } catch {
    return NextResponse.json({ error: 'Session not found' }, { status: 404 })
  }
}
