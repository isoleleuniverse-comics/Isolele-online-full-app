import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function setupTables() {
  console.log('Setting up fashion tables...')

  // Create fashion_likes table
  const { error: likesError } = await supabase.rpc('create_fashion_likes_table', {}, { head: true }).catch(() => ({}))
  if (likesError && !likesError.message?.includes('already exists')) {
    console.error('Error creating likes table:', likesError)
  }

  // Create fashion_comments table
  const { error: commentsError } = await supabase.rpc('create_fashion_comments_table', {}, { head: true }).catch(() => ({}))
  if (commentsError && !commentsError.message?.includes('already exists')) {
    console.error('Error creating comments table:', commentsError)
  }

  // Create fashion_shares table
  const { error: sharesError } = await supabase.rpc('create_fashion_shares_table', {}, { head: true }).catch(() => ({}))
  if (sharesError && !sharesError.message?.includes('already exists')) {
    console.error('Error creating shares table:', sharesError)
  }

  console.log('Tables setup complete!')
}

setupTables().catch(console.error)
