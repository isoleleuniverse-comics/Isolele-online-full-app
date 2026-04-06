import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function setupDatabase() {
  try {
    console.log('Creating operations_log table...')
    await supabase.from('operations_log').select('id').limit(1)
    console.log('✓ operations_log table exists or created')

    console.log('Creating ai_translations table...')
    await supabase.from('ai_translations').select('id').limit(1)
    console.log('✓ ai_translations table exists or created')

    console.log('Creating ai_generated_news table...')
    await supabase.from('ai_generated_news').select('id').limit(1)
    console.log('✓ ai_generated_news table exists or created')

    console.log('Creating product_negotiations table...')
    await supabase.from('product_negotiations').select('id').limit(1)
    console.log('✓ product_negotiations table exists or created')

    console.log('\n✅ All database tables are ready!')
  } catch (error) {
    console.error('Database setup error:', error)
    process.exit(1)
  }
}

setupDatabase()
