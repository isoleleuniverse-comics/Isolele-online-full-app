import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export async function POST(request: NextRequest) {
  try {
    const { products } = await request.json()

    if (!products || products.length === 0) {
      return NextResponse.json(
        { error: 'No products in cart' },
        { status: 400 }
      )
    }

    const lineItems = products.map((product: any) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: product.name,
          description: product.description,
          images: [product.image],
        },
        unit_amount: Math.round(product.price * 100),
      },
      quantity: 1,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/shop?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/shop?canceled=true`,
      customer_email: 'customer@isolele.com',
    })

    return NextResponse.json({ id: session.id })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
