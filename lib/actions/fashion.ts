'use server'

import { createClient } from '@/lib/supabase/server'

// Like a fashion post
export async function likePost(postId: string, userId: string) {
  const supabase = await createClient()
  
  // Check if already liked
  const { data: existing } = await supabase
    .from('fashion_likes')
    .select('id')
    .eq('post_id', postId)
    .eq('user_id', userId)
    .single()

  if (existing) {
    // Unlike
    const { error } = await supabase
      .from('fashion_likes')
      .delete()
      .eq('id', existing.id)
    
    if (error) throw error
    return { liked: false }
  }

  // Like
  const { error } = await supabase
    .from('fashion_likes')
    .insert({ post_id: postId, user_id: userId })

  if (error) throw error
  return { liked: true }
}

// Get likes count
export async function getPostLikes(postId: string) {
  const supabase = await createClient()
  
  const { count, error } = await supabase
    .from('fashion_likes')
    .select('*', { count: 'exact', head: true })
    .eq('post_id', postId)

  if (error) throw error
  return count || 0
}

// Add comment
export async function addComment(postId: string, userId: string, text: string, userName: string) {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('fashion_comments')
    .insert({
      post_id: postId,
      user_id: userId,
      user_name: userName,
      text: text,
    })
    .select()

  if (error) throw error
  return data?.[0]
}

// Get comments
export async function getPostComments(postId: string) {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('fashion_comments')
    .select('*')
    .eq('post_id', postId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data || []
}

// Get comments count
export async function getPostCommentsCount(postId: string) {
  const supabase = await createClient()
  
  const { count, error } = await supabase
    .from('fashion_comments')
    .select('*', { count: 'exact', head: true })
    .eq('post_id', postId)

  if (error) throw error
  return count || 0
}

// Add share
export async function addShare(postId: string, userId: string) {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('fashion_shares')
    .insert({
      post_id: postId,
      user_id: userId,
    })

  if (error) throw error
  return true
}

// Get shares count
export async function getPostShares(postId: string) {
  const supabase = await createClient()
  
  const { count, error } = await supabase
    .from('fashion_shares')
    .select('*', { count: 'exact', head: true })
    .eq('post_id', postId)

  if (error) throw error
  return count || 0
}
