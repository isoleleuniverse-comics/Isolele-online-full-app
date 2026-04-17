import bcrypt from 'bcryptjs'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { persistSession: false },
})

// Admin credentials
const ADMIN_EMAIL = 'admin@isolele.com'
const ADMIN_PASSWORD = 'Isolele2025#'

export async function initializeAdminUser() {
  try {
    // Check if admin user exists
    const { data: existing } = await supabase
      .from('admin_login')
      .select('id')
      .eq('email', ADMIN_EMAIL)
      .single()

    if (existing) {
      console.log('[v0] Admin user already exists')
      return
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10)

    // Create admin user
    const { error } = await supabase.from('admin_login').insert({
      email: ADMIN_EMAIL,
      password_hash: passwordHash,
      is_active: true,
    })

    if (error) {
      console.error('[v0] Error creating admin user:', error)
      return false
    }

    console.log('[v0] Admin user created successfully')
    return true
  } catch (error) {
    console.error('[v0] Error initializing admin user:', error)
    return false
  }
}

export async function verifyAdminLogin(
  email: string,
  password: string
): Promise<{ success: boolean; error?: string }> {
  try {
    // Direct credential check
    const ADMIN_EMAIL = 'admin@isolele.com'
    const ADMIN_PASSWORD = 'Isolele2025#'

    if (email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      console.log('[v0] Invalid email:', email)
      return { success: false, error: 'Invalid credentials' }
    }

    if (password !== ADMIN_PASSWORD) {
      console.log('[v0] Invalid password')
      return { success: false, error: 'Invalid credentials' }
    }

    // Log successful login
    try {
      await supabase
        .from('admin_login')
        .update({
          last_login: new Date().toISOString(),
          login_attempts: 0,
        })
        .eq('email', ADMIN_EMAIL)
    } catch (dbError) {
      // Database might not have the record yet, that's ok
      console.log('[v0] Could not update last_login:', dbError)
    }

    return { success: true }
  } catch (error) {
    console.error('[v0] Login error:', error)
    return { success: false, error: 'Authentication failed' }
  }
}

export async function getAdminStats() {
  try {
    const [visits, purchases, subscribers, sponsors, notifications] =
      await Promise.all([
        supabase.from('site_visits').select('id'),
        supabase.from('purchases').select('total_amount'),
        supabase.from('subscribers').select('id').eq('is_active', true),
        supabase.from('sponsors').select('sponsorship_amount').eq('is_active', true),
        supabase.from('notifications').select('id').eq('is_read', false),
      ])

    const totalRevenue = purchases.data?.reduce(
      (sum, p) => sum + (parseFloat(p.total_amount) || 0),
      0
    ) ?? 0

    const totalSponsorship = sponsors.data?.reduce(
      (sum, s) => sum + (s.sponsorship_amount || 0),
      0
    ) ?? 0

    return {
      totalVisits: visits.data?.length ?? 0,
      totalPurchases: purchases.data?.length ?? 0,
      totalRevenue,
      totalSubscribers: subscribers.data?.length ?? 0,
      totalSponsors: sponsors.data?.length ?? 0,
      totalSponsorship,
      unreadNotifications: notifications.data?.length ?? 0,
    }
  } catch (error) {
    console.error('[v0] Error fetching admin stats:', error)
    return null
  }
}
