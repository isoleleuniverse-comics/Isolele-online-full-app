import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextRequest, NextResponse } from "next/server"
import { saveProductNegotiation } from "@/lib/database-operations"

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || "")

export async function POST(request: NextRequest) {
  try {
    const {
      productId,
      productName,
      originalPrice,
      userQuery,
      customRequests,
      userId,
    } = await request.json()

    if (!productName || !originalPrice || !userQuery) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

    const negotiationPrompt = `You are an ISOLELE product specialist helping a customer with negotiations and product inquiries.

Product: ${productName}
Original Price: $${originalPrice}
Customer Question/Request: "${userQuery}"
Custom Requests: ${customRequests || "None"}

Provide a helpful, professional response that:
1. Addresses their specific question or concern
2. Offers relevant information about the product
3. If they're asking about discounts, suggest a reasonable negotiated price (typically 10-20% off depending on quantity/loyalty)
4. Maintains the ISOLELE brand voice - authentic, empowering, celebrating African heritage

Keep response concise and actionable.`

    const result = await model.generateContent(negotiationPrompt)
    const response = result.response.text()

    // Extract potential negotiated price from response
    const priceMatch = response.match(/\$[\d,]+\.?\d{0,2}/)
    const negotiatedPrice = priceMatch
      ? parseFloat(priceMatch[0].replace(/[$,]/g, ""))
      : originalPrice * 0.85 // Default 15% discount

    // Save to database
    await saveProductNegotiation({
      user_id: userId,
      product_id: productId || "unknown",
      product_name: productName,
      original_price: originalPrice,
      negotiated_price: negotiatedPrice,
      custom_requests: customRequests,
      status: "active",
    })

    return NextResponse.json({
      success: true,
      response,
      negotiatedPrice,
      suggestedDiscount: Math.round(((originalPrice - negotiatedPrice) / originalPrice) * 100),
    })
  } catch (error) {
    console.error("[v0] Product negotiation error:", error)
    return NextResponse.json(
      { error: "Negotiation failed", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Product Negotiation API for ISOLELE Shop",
    method: "POST",
    fields: {
      productId: "string (optional)",
      productName: "string (required)",
      originalPrice: "number (required)",
      userQuery: "string (required)",
      customRequests: "string (optional)",
      userId: "string (optional)",
    },
  })
}
