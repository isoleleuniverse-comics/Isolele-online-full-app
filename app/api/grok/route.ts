import { streamText } from 'ai'
import { createXai } from '@ai-sdk/xai'
import type { NextRequest } from 'next/server'

const xai = createXai({
  apiKey: process.env.XAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { prompt, context } = await request.json()

    if (!prompt) {
      return new Response('Prompt is required', { status: 400 })
    }

    const result = streamText({
      model: xai('grok-beta'),
      prompt: prompt,
      system: context || 'You are Grok, a helpful and witty AI assistant. Provide engaging and useful responses.',
      temperature: 0.8,
      maxOutputTokens: 500,
    })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error('[v0] Grok API error:', error)
    return new Response('Failed to generate response from Grok', { status: 500 })
  }
}
