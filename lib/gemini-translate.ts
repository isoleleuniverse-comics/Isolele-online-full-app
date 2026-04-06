import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

export async function translateText(
  text: string,
  targetLanguage: "en" | "fr" | "pt" | "es" | "sw" | "ln"
): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const prompt = `Translate the following text to ${getLanguageName(targetLanguage)}. Only provide the translation, nothing else:\n\n${text}`

    const result = await model.generateContent(prompt)
    const response = result.response
    return response.text()
  } catch (error) {
    console.error("[Gemini Translation Error]", error)
    return text
  }
}

export async function translateBatch(
  texts: string[],
  targetLanguage: "en" | "fr" | "pt" | "es" | "sw" | "ln"
): Promise<string[]> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const prompt = `Translate the following texts to ${getLanguageName(targetLanguage)}. Return only the translations, one per line, without numbering or extra text:\n\n${texts.join("\n")}`

    const result = await model.generateContent(prompt)
    const response = result.response
    const translations = response.text().split("\n").filter((t) => t.trim())
    
    return translations.length === texts.length
      ? translations
      : texts
  } catch (error) {
    console.error("[Gemini Batch Translation Error]", error)
    return texts
  }
}

function getLanguageName(code: string): string {
  const languages: Record<string, string> = {
    en: "English",
    fr: "French",
    pt: "Portuguese",
    es: "Spanish",
    sw: "Swahili",
    ln: "Lingala",
  }
  return languages[code] || "English"
}
