import { NextRequest, NextResponse } from "next/server"
import { translateText, translateBatch, detectLanguage } from "@/lib/google-translate"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { text, texts, targetLanguage, sourceLanguage = "en", action = "translate" } = body

    console.log("[v0] Translation request:", { action, targetLanguage })

    if (!targetLanguage) {
      return NextResponse.json(
        { error: "Missing required field: targetLanguage" },
        { status: 400 }
      )
    }

    if (action === "detect" && text) {
      const detectedLanguage = await detectLanguage(text)
      return NextResponse.json({
        success: true,
        detectedLanguage,
      })
    }

    if (action === "batch" && texts && Array.isArray(texts)) {
      const results = await translateBatch(texts, targetLanguage, sourceLanguage)
      return NextResponse.json({
        success: true,
        results,
      })
    }

    if (text) {
      const result = await translateText(text, targetLanguage, sourceLanguage)
      return NextResponse.json({
        success: true,
        result,
      })
    }

    return NextResponse.json(
      { success: false, error: "No text provided" },
      { status: 400 }
    )
  } catch (error) {
    console.error("[v0] Translation API error:", error)
    return NextResponse.json(
      { success: false, error: "Translation failed", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: "Google Translate API endpoint",
    methods: ["POST"],
    actions: ["translate", "detect", "batch"],
    examples: {
      translate: {
        method: "POST",
        body: {
          text: "Hello world",
          targetLanguage: "fr",
          sourceLanguage: "en",
          action: "translate",
        },
      },
      detect: {
        method: "POST",
        body: {
          text: "Bonjour le monde",
          action: "detect",
        },
      },
      batch: {
        method: "POST",
        body: {
          texts: ["Hello", "World"],
          targetLanguage: "fr",
          sourceLanguage: "en",
          action: "batch",
        },
      },
    },
  })
}

