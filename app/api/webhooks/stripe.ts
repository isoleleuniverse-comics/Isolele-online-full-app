import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: NextRequest) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')

  if (!sig) {
    return NextResponse.json(
      { error: 'Missing stripe signature' },
      { status: 400 }
    )
  }

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook error' },
      { status: 400 }
    )
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session
        
        // Update order status
        const { error } = await supabase
          .from('orders')
          .update({ status: 'completed', paid_at: new Date().toISOString() })
          .eq('stripe_session_id', session.id)

        if (error) {
          console.error('Update error:', error)
          throw error
        }

        // Create transaction record
        await supabase
          .from('transactions')
          .insert([
            {
              stripe_session_id: session.id,
              amount: session.amount_total ? session.amount_total / 100 : 0,
              currency: session.currency,
              customer_email: session.customer_email,
              status: 'completed',
              created_at: new Date().toISOString(),
            },
          ])

        break

      case 'charge.failed':
        const charge = event.data.object as Stripe.Charge
        
        // Log failed payment
        await supabase
          .from('transactions')
          .insert([
            {
              stripe_session_id: charge.id,
              amount: charge.amount / 100,
              currency: charge.currency,
              customer_email: charge.billing_details?.email,
              status: 'failed',
              error_message: charge.failure_message,
              created_at: new Date().toISOString(),
            },
          ])

        break
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook processing error:', error)
    return NextResponse.json(
      { error: 'Webhook processing error' },
      { status: 500 }
    )
  }
}
