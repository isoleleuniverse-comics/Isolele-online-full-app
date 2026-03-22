import { streamText } from 'ai'
import { xai } from '@ai-sdk/xai'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { prompt, context } = await request.json()

    if (!prompt) {
      return new Response('Prompt is required', { status: 400 })
    }

    const systemPrompt = `You are Grok, an intelligent AI assistant integrated into the ISOLELE Admin Dashboard. 
Your role is to help administrators with:
- Content suggestions and improvements
- Analytics insights and recommendations
- Book and game descriptions
- SEO optimization
- Marketing copy

${context ? `Current Context: ${context}` : ''}

Provide helpful, creative, and professional responses tailored to the ISOLELE universe and brand.`

    const result = streamText({
      model: xai('grok-4', {
        apiKey: process.env.XAI_API_KEY,
      }),
      prompt,
      system: systemPrompt,
      temperature: 0.7,
      maxTokens: 1024,
    })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error('[v0] Grok error:', error)
    return new Response('Failed to generate response', { status: 500 })
  }
}
