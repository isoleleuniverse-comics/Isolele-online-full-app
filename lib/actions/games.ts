'use server'

import { createClient } from '@/lib/supabase/server'

// Get all games
export async function getGames() {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('games')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching games:', error)
    return null
  }

  return data
}

// Get single game by slug
export async function getGameBySlug(slug: string) {
  const supabase = await createClient()
  
  const { data: game, error: gameError } = await supabase
    .from('games')
    .select('*')
    .eq('slug', slug)
    .single()

  if (gameError) {
    console.error('Error fetching game:', gameError)
    return null
  }

  // Get game images
  const { data: images } = await supabase
    .from('game_images')
    .select('*')
    .eq('game_id', game.id)
    .order('display_order')

  // Get game features
  const { data: features } = await supabase
    .from('game_features')
    .select('*')
    .eq('game_id', game.id)
    .order('display_order')

  return {
    ...game,
    images: images || [],
    features: features || []
  }
}

// Subscribe to newsletter
export async function subscribeNewsletter(email: string, language: string = 'en') {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('newsletter_subscriptions')
    .upsert(
      {
        email,
        language,
        is_active: true,
        subscribed_at: new Date().toISOString()
      },
      { onConflict: 'email' }
    )

  if (error) {
    console.error('Error subscribing:', error)
    return { error: error.message }
  }

  return { success: true, data }
}

// Get newsletter subscription
export async function getNewsletterSubscription(email: string) {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('newsletter_subscriptions')
    .select('*')
    .eq('email', email)
    .single()

  if (error) {
    return null
  }

  return data
}
