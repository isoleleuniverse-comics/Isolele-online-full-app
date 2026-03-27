import { NextRequest, NextResponse } from "next/server"
import { xai } from "@ai-sdk/xai"
import { generateText } from "ai"

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

// Simple in-memory cache for translations
const translationCache = new Map<string, string>()

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
          const cacheKey = getCacheKey(t, sourceLanguage, targetLanguage)
          if (translationCache.has(cacheKey)) {
            return translationCache.get(cacheKey)
          }

          const translated = await performTranslation(t, sourceLanguage, targetLanguage)
          translationCache.set(cacheKey, translated)
          return translated
        })
      )
      return NextResponse.json({
        success: true,
        results,
      })
    }

    if (text) {
      const cacheKey = getCacheKey(text, sourceLanguage, targetLanguage)
      
      // Check cache first
      if (translationCache.has(cacheKey)) {
        return NextResponse.json({
          success: true,
          result: { translatedText: translationCache.get(cacheKey) },
        })
      }

      const translatedText = await performTranslation(text, sourceLanguage, targetLanguage)
      translationCache.set(cacheKey, translatedText)

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

    const result = await generateText({
      model: xai("grok-4", {
        apiKey: process.env.XAI_API_KEY,
      }),
      prompt: `Translate the following text from ${sourceLangName} to ${targetLangName}. Return ONLY the translated text, nothing else.

Text: "${text}"`,
      temperature: 0.3,
      maxTokens: 500,
    })

    return result.text.trim()
  } catch (error) {
    console.error("[v0] Grok translation error:", error)
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

