import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl!, supabaseKey!)

export interface OperationLog {
  user_id?: string
  operation_type: string
  description?: string
  page_name?: string
  action_details?: Record<string, any>
}

export async function logOperation(operation: OperationLog) {
  try {
    const { data, error } = await supabase.from('operations_log').insert([
      {
        user_id: operation.user_id,
        operation_type: operation.operation_type,
        description: operation.description,
        page_name: operation.page_name,
        action_details: operation.action_details,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error('[v0] Operation logging error:', error)
      return null
    }

    return data
  } catch (err) {
    console.error('[v0] Exception in logOperation:', err)
    return null
  }
}

export interface AITranslation {
  original_text: string
  source_language?: string
  target_language: string
  translated_text: string
  context?: string
}

export async function saveTranslation(translation: AITranslation) {
  try {
    const { data, error } = await supabase.from('ai_translations').insert([
      {
        original_text: translation.original_text,
        source_language: translation.source_language || 'en',
        target_language: translation.target_language,
        translated_text: translation.translated_text,
        context: translation.context,
      },
    ])

    if (error) {
      console.error('[v0] Translation save error:', error)
      return null
    }

    return data
  } catch (err) {
    console.error('[v0] Exception in saveTranslation:', err)
    return null
  }
}

export async function getTranslation(
  text: string,
  targetLanguage: string,
  sourceLanguage = 'en'
) {
  try {
    const { data, error } = await supabase
      .from('ai_translations')
      .select('translated_text')
      .eq('original_text', text)
      .eq('target_language', targetLanguage)
      .eq('source_language', sourceLanguage)
      .limit(1)
      .single()

    if (error || !data) return null
    return data.translated_text
  } catch (err) {
    console.error('[v0] Exception in getTranslation:', err)
    return null
  }
}

export interface AIGeneratedNews {
  title: string
  content: string
  category?: string
  language?: string
  featured_image_url?: string
  generated_by?: string
}

export async function saveGeneratedNews(news: AIGeneratedNews) {
  try {
    const { data, error } = await supabase.from('ai_generated_news').insert([
      {
        title: news.title,
        content: news.content,
        category: news.category,
        language: news.language || 'en',
        featured_image_url: news.featured_image_url,
        generated_by: news.generated_by || 'gemini',
        published_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error('[v0] News save error:', error)
      return null
    }

    return data
  } catch (err) {
    console.error('[v0] Exception in saveGeneratedNews:', err)
    return null
  }
}

export async function getGeneratedNews(language = 'en', limit = 10) {
  try {
    const { data, error } = await supabase
      .from('ai_generated_news')
      .select('*')
      .eq('language', language)
      .order('published_at', { ascending: false })
      .limit(limit)

    if (error) {
      console.error('[v0] News fetch error:', error)
      return []
    }

    return data || []
  } catch (err) {
    console.error('[v0] Exception in getGeneratedNews:', err)
    return []
  }
}

export interface ProductNegotiation {
  user_id?: string
  product_id: string
  product_name: string
  original_price: number
  negotiated_price?: number
  custom_requests?: string
  status?: string
}

export async function saveProductNegotiation(negotiation: ProductNegotiation) {
  try {
    const { data, error } = await supabase.from('product_negotiations').insert([
      {
        user_id: negotiation.user_id,
        product_id: negotiation.product_id,
        product_name: negotiation.product_name,
        original_price: negotiation.original_price,
        negotiated_price: negotiation.negotiated_price,
        custom_requests: negotiation.custom_requests,
        status: negotiation.status || 'active',
      },
    ])

    if (error) {
      console.error('[v0] Negotiation save error:', error)
      return null
    }

    return data
  } catch (err) {
    console.error('[v0] Exception in saveProductNegotiation:', err)
    return null
  }
}
