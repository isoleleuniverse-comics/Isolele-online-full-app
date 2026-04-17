import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextRequest, NextResponse } from "next/server"
import { saveGeneratedNews, getGeneratedNews } from "@/lib/database-operations"

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || "")

export async function POST(request: NextRequest) {
  try {
    const { category, language = "en", count = 5 } = await request.json()

    if (!category) {
      return NextResponse.json(
        { error: "Missing category" },
        { status: 400 }
      )
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

    const categoryPrompts: Record<string, string> = {
      viral: `Generate 3 viral ISOLELE news headlines about African superheroes, fashion trends, and cultural events. Format as JSON array with fields: title, content, category. Make them exciting and engaging for the ISOLELE universe.`,
      fashion: `Generate 3 fashion news updates for ISOLELE brand featuring African-inspired designs, runway shows, and designer collaborations. Format as JSON array with fields: title, content, category="fashion".`,
      store: `Generate 3 store announcements for ISOLELE including new product launches, exclusive offers, and store events. Format as JSON array with fields: title, content, category="store".`,
      channels: `Generate 3 news items about ISOLELE entertainment channels, new series, and exclusive content releases. Format as JSON array with fields: title, content, category="channels".`,
      shows: `Generate 3 updates about ISOLELE entertainment shows, special events, and performances. Format as JSON array with fields: title, content, category="shows".`,
    }

    const prompt = categoryPrompts[category] || categoryPrompts.viral

    const result = await model.generateContent(prompt)
    const responseText = result.response.text()

    // Extract JSON from response
    const jsonMatch = responseText.match(/\[[\s\S]*\]/)
    if (!jsonMatch) {
      return NextResponse.json(
        { error: "Failed to parse generated news" },
        { status: 500 }
      )
    }

    const newsItems = JSON.parse(jsonMatch[0])

    // Save to database
    const savedItems = await Promise.all(
      newsItems.map((item: any) =>
        saveGeneratedNews({
          title: item.title,
          content: item.content,
          category: item.category || category,
          language,
          generated_by: "gemini",
        })
      )
    )

    return NextResponse.json({
      success: true,
      newsItems,
      saved: savedItems.length,
    })
  } catch (error) {
    console.error("[v0] News generation error:", error)
    return NextResponse.json(
      { error: "Failed to generate news", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const language = searchParams.get("language") || "en"
    const limit = parseInt(searchParams.get("limit") || "10")

    const news = await getGeneratedNews(language, limit)

    return NextResponse.json({
      success: true,
      news,
      count: news.length,
    })
  } catch (error) {
    console.error("[v0] News fetch error:", error)
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    )
  }
}
