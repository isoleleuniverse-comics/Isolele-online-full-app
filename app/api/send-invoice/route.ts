import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { book, customerEmail } = await req.json()

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      return NextResponse.json({ ok: false, error: "EmailJS not configured" }, { status: 200 })
    }

    const now = new Date()
    const invoiceNumber = `ISO-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}-${Math.floor(1000 + Math.random() * 9000)}`
    const price = (book.priceInCents / 100).toFixed(2)

    const templateParams = {
      to_email: customerEmail,
      to_name: customerEmail.split("@")[0],
      book_title: book.name,
      book_subtitle: book.subtitle,
      book_format: book.format,
      book_pages: String(book.pages),
      book_price: `$${price}`,
      book_description: book.description,
      invoice_number: invoiceNumber,
      invoice_date: now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      invoice_time: now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }),
      tax: "$0.00",
      total: `$${price}`,
      from_name: "ISOLELE Universe",
    }

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams,
      }),
    })

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: "EmailJS send failed" }, { status: 200 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 200 })
  }
}
