import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextRequest, NextResponse } from "next/server"

const apiKey = process.env.GOOGLE_GEMINI_API_KEY
if (!apiKey) {
  console.error("[v0] GOOGLE_GEMINI_API_KEY environment variable is not set")
}

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null

export async function POST(request: NextRequest) {
  try {
    if (!genAI || !apiKey) {
      return NextResponse.json(
        { error: 'AI service is not configured. Please set GOOGLE_GEMINI_API_KEY environment variable.' },
        { status: 503 }
      )
    }

    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      )
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

    // Convert message format from OpenAI-like to Gemini format
    const conversationHistory = messages.map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }))

    const chat = model.startChat({
      history: conversationHistory.slice(0, -1), // All except last message
    })

    const lastMessage = conversationHistory[conversationHistory.length - 1]
    const result = await chat.sendMessage(lastMessage.parts[0].text)
    const responseText = result.response.text()

    return NextResponse.json({
      role: "assistant",
      content: responseText,
    })
  } catch (error) {
    console.error("[v0] Gemini API Error:", error)
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    )
  }
}
