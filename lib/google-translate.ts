import { Translate } from "@google-cloud/translate/build/src/v2"

let translateClient: Translate | null = null

// Initialize Google Translate client
export function initializeTranslate() {
  if (!translateClient && process.env.GOOGLE_CLOUD_PROJECT_ID) {
    const { Translate } = require("@google-cloud/translate/build/src/v2")
    translateClient = new Translate({
      projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
      key: process.env.GOOGLE_TRANSLATE_API_KEY,
    })
  }
  return translateClient
}

export interface TranslationResult {
  translatedText: string
  detectedSourceLanguage?: string
}

/**
 * Translate text using Google Translate API
 */
export async function translateText(
  text: string,
  targetLanguage: string,
  sourceLanguage: string = "en"
): Promise<TranslationResult> {
  try {
    const client = initializeTranslate()

    if (!client) {
      console.warn("[v0] Google Translate not initialized. Returning original text.")
      return { translatedText: text }
    }

    const [translations] = await client.translate(text, {
      from: sourceLanguage,
      to: targetLanguage,
    })

    const result = Array.isArray(translations) ? translations[0] : translations

    return {
      translatedText: result,
      detectedSourceLanguage: sourceLanguage,
    }
  } catch (error) {
    console.error("[v0] Translation error:", error)
    return { translatedText: text }
  }
}

/**
 * Detect language of text
 */
export async function detectLanguage(text: string): Promise<string> {
  try {
    const client = initializeTranslate()

    if (!client) {
      return "en"
    }

    const [detections] = await client.detect(text)
    const detection = Array.isArray(detections) ? detections[0] : detections

    return detection.language || "en"
  } catch (error) {
    console.error("[v0] Language detection error:", error)
    return "en"
  }
}

/**
 * Batch translate multiple texts
 */
export async function translateBatch(
  texts: string[],
  targetLanguage: string,
  sourceLanguage: string = "en"
): Promise<TranslationResult[]> {
  try {
    const results = await Promise.all(
      texts.map((text) => translateText(text, targetLanguage, sourceLanguage))
    )
    return results
  } catch (error) {
    console.error("[v0] Batch translation error:", error)
    return texts.map((text) => ({ translatedText: text }))
  }
}

/**
 * Get supported languages
 */
export const SUPPORTED_LANGUAGES = {
  en: "English",
  fr: "Français",
  es: "Español",
  pt: "Português",
  sw: "Kiswahili",
  yo: "Yorùbá",
  ha: "Hausa",
  zu: "Zulu",
  am: "Amharic",
  ig: "Igbo",
}

export type LanguageCode = keyof typeof SUPPORTED_LANGUAGES
