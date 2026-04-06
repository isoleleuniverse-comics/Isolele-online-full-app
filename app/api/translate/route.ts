import { NextRequest, NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { getTranslation, saveTranslation } from "@/lib/database-operations"

const apiKey = process.env.GOOGLE_GEMINI_API_KEY
if (!apiKey) {
  console.error("[v0] GOOGLE_GEMINI_API_KEY environment variable is not set")
}

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null

const languageMap: Record<string, string> = {
  en: "English",
  fr: "French",
  pt: "Portuguese",
  es: "Spanish",
  zu: "Zulu",
  xh: "Xhosa",
  sw: "Swahili",
  ln: "Lingala",
}

function getCacheKey(text: string, sourceLanguage: string, targetLanguage: string): string {
  return `${sourceLanguage}:${targetLanguage}:${text}`
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { text, texts, targetLanguage, sourceLanguage = "en", action = "translate" } = body

    if (!targetLanguage) {
      return NextResponse.json(
        { error: "Missing required field: targetLanguage" },
        { status: 400 }
      )
    }

    // If target is English or same as source, return original text
    if (targetLanguage === "en" || targetLanguage === sourceLanguage) {
      return NextResponse.json({
        success: true,
        result: { translatedText: text },
      })
    }

    if (action === "batch" && texts && Array.isArray(texts)) {
      const results = await Promise.all(
        texts.map(async (t) => {
          // Check database cache first
          const cached = await getTranslation(t, targetLanguage, sourceLanguage)
          if (cached) return cached

          const translated = await performTranslation(t, sourceLanguage, targetLanguage)
          // Save to database
          await saveTranslation({
            original_text: t,
            source_language: sourceLanguage,
            target_language: targetLanguage,
            translated_text: translated,
          })
          return translated
        })
      )
      return NextResponse.json({
        success: true,
        results,
      })
    }

    if (text) {
      // Check database cache first
      const cached = await getTranslation(text, targetLanguage, sourceLanguage)
      if (cached) {
        return NextResponse.json({
          success: true,
          result: { translatedText: cached },
        })
      }

      const translatedText = await performTranslation(text, sourceLanguage, targetLanguage)
      
      // Save to database
      await saveTranslation({
        original_text: text,
        source_language: sourceLanguage,
        target_language: targetLanguage,
        translated_text: translatedText,
      })

      return NextResponse.json({
        success: true,
        result: { translatedText },
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

async function performTranslation(text: string, sourceLanguage: string, targetLanguage: string): Promise<string> {
  try {
    const sourceLangName = languageMap[sourceLanguage] || "English"
    const targetLangName = languageMap[targetLanguage] || "English"

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

    const result = await model.generateContent(`Translate the following text from ${sourceLangName} to ${targetLangName}. Return ONLY the translated text, nothing else.

Text: "${text}"`)

    const responseText = result.response.text().trim()
    return responseText
  } catch (error) {
    console.error("[v0] Gemini translation error:", error)
    return text // Fallback to original text
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

