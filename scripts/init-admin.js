// Run this to initialize the admin user in Supabase
// Usage: node -e "require('dotenv').config(); require('./scripts/init-admin.js')"

const { createClient } = require('@supabase/supabase-js')
const bcrypt = require('bcryptjs')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { persistSession: false },
})

const ADMIN_EMAIL = 'admin@isolele.com'
const ADMIN_PASSWORD = 'Isolele2025#'

async function initializeAdmin() {
  try {
    console.log('[v0] Initializing admin user...')

    // Check if admin already exists
    const { data: existing } = await supabase
      .from('admin_login')
      .select('id')
      .eq('email', ADMIN_EMAIL)
      .single()

    if (existing) {
      console.log('[v0] Admin user already exists')
      process.exit(0)
    }

    // Hash password
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10)

    // Insert admin user
    const { error } = await supabase.from('admin_login').insert({
      email: ADMIN_EMAIL,
      password_hash: passwordHash,
      is_active: true,
      created_at: new Date().toISOString(),
    })

    if (error) {
      console.error('[v0] Error creating admin user:', error)
      process.exit(1)
    }

    console.log('[v0] Admin user created successfully!')
    console.log(`Email: ${ADMIN_EMAIL}`)
    console.log(`Password: ${ADMIN_PASSWORD}`)
    process.exit(0)
  } catch (error) {
    console.error('[v0] Error:', error)
    process.exit(1)
  }
}

initializeAdmin()
