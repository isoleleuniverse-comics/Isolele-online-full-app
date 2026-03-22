import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function GET() {
  try {
    const [
      visitsRes,
      purchasesRes,
      subscribersRes,
      sponsorsRes,
      purchaseDetailsRes,
      subscribersDetailsRes,
      sponsorsDetailsRes,
    ] = await Promise.all([
      supabase.from('site_visits').select('id'),
      supabase.from('purchases').select('total_amount'),
      supabase.from('subscribers').select('id').eq('is_active', true),
      supabase.from('sponsors').select('sponsorship_amount').eq('is_active', true),
      supabase
        .from('purchases')
        .select('id, customer_name, product_name, total_amount, purchased_at')
        .order('purchased_at', { ascending: false })
        .limit(50),
      supabase
        .from('subscribers')
        .select('id, email, name, subscribed_at')
        .eq('is_active', true)
        .order('subscribed_at', { ascending: false })
        .limit(50),
      supabase
        .from('sponsors')
        .select('id, name, sponsorship_amount, sponsored_at')
        .eq('is_active', true),
    ])

    const totalRevenue = purchasesRes.data?.reduce(
      (sum, p) => sum + (parseFloat(p.total_amount) || 0),
      0
    ) ?? 0

    const totalSponsorship = sponsorsRes.data?.reduce(
      (sum, s) => sum + (s.sponsorship_amount || 0),
      0
    ) ?? 0

    return NextResponse.json({
      totalVisits: visitsRes.data?.length ?? 0,
      totalPurchases: purchasesRes.data?.length ?? 0,
      totalRevenue,
      totalSubscribers: subscribersRes.data?.length ?? 0,
      totalSponsors: sponsorsRes.data?.length ?? 0,
      totalSponsorship,
      purchases: purchaseDetailsRes.data ?? [],
      subscribers: subscribersDetailsRes.data ?? [],
      sponsors: sponsorsDetailsRes.data ?? [],
    })
  } catch (error) {
    console.error('[v0] Analytics endpoint error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}
