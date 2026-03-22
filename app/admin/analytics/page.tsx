"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronLeft,
  Eye,
  ShoppingCart,
  DollarSign,
  Users,
  TrendingUp,
  Calendar,
  Loader2,
} from "lucide-react"

interface Analytics {
  totalVisits: number
  totalPurchases: number
  totalRevenue: number
  totalSubscribers: number
  totalSponsors: number
  totalSponsorship: number
  purchases: Array<{
    id: string
    customer_name: string
    product_name: string
    total_amount: number
    purchased_at: string
  }>
  subscribers: Array<{
    id: string
    email: string
    name: string
    subscribed_at: string
  }>
  sponsors: Array<{
    id: string
    name: string
    sponsorship_amount: number
    sponsored_at: string
  }>
}

export default function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAnalytics()
  }, [])

  const fetchAnalytics = async () => {
    try {
      const res = await fetch("/api/admin/analytics")
      if (!res.ok) throw new Error("Failed to fetch analytics")
      const data = await res.json()
      setAnalytics(data)
    } catch (error) {
      console.error("[v0] Error fetching analytics:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0F1524" }}>
      {/* Header */}
      <div
        className="border-b px-6 py-4"
        style={{ borderColor: "rgba(201, 165, 66, 0.1)", backgroundColor: "rgba(15, 21, 36, 0.8)" }}
      >
        <Link href="/admin/dashboard">
          <button className="flex items-center gap-2 text-[#C9A542] hover:text-[#F6B800] transition-colors mb-4">
            <ChevronLeft size={20} />
            Back to Dashboard
          </button>
        </Link>
        <h1 className="text-3xl font-bold text-white">Analytics & Insights</h1>
        <p className="text-gray-400 mt-2">Detailed site performance metrics</p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-[#C9A542]" />
        </div>
      ) : analytics ? (
        <div className="p-6 md:p-8 space-y-8">
          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg p-6 border"
              style={{
                backgroundColor: "rgba(26, 32, 53, 0.5)",
                borderColor: "rgba(201, 165, 66, 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-blue-400" size={24} />
                <h3 className="font-semibold text-white">Total Visits</h3>
              </div>
              <p className="text-3xl font-bold text-white">{analytics.totalVisits}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-lg p-6 border"
              style={{
                backgroundColor: "rgba(26, 32, 53, 0.5)",
                borderColor: "rgba(201, 165, 66, 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <ShoppingCart className="text-green-400" size={24} />
                <h3 className="font-semibold text-white">Total Purchases</h3>
              </div>
              <p className="text-3xl font-bold text-white">{analytics.totalPurchases}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-lg p-6 border"
              style={{
                backgroundColor: "rgba(26, 32, 53, 0.5)",
                borderColor: "rgba(201, 165, 66, 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="text-yellow-400" size={24} />
                <h3 className="font-semibold text-white">Total Revenue</h3>
              </div>
              <p className="text-3xl font-bold text-white">${analytics.totalRevenue.toFixed(2)}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-lg p-6 border"
              style={{
                backgroundColor: "rgba(26, 32, 53, 0.5)",
                borderColor: "rgba(201, 165, 66, 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-purple-400" size={24} />
                <h3 className="font-semibold text-white">Subscribers</h3>
              </div>
              <p className="text-3xl font-bold text-white">{analytics.totalSubscribers}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-lg p-6 border"
              style={{
                backgroundColor: "rgba(26, 32, 53, 0.5)",
                borderColor: "rgba(201, 165, 66, 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-pink-400" size={24} />
                <h3 className="font-semibold text-white">Sponsors</h3>
              </div>
              <p className="text-3xl font-bold text-white">{analytics.totalSponsors}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-lg p-6 border"
              style={{
                backgroundColor: "rgba(26, 32, 53, 0.5)",
                borderColor: "rgba(201, 165, 66, 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="text-orange-400" size={24} />
                <h3 className="font-semibold text-white">Sponsorship Total</h3>
              </div>
              <p className="text-3xl font-bold text-white">${analytics.totalSponsorship.toFixed(2)}</p>
            </motion.div>
          </div>

          {/* Recent purchases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-lg border p-6"
            style={{
              backgroundColor: "rgba(26, 32, 53, 0.5)",
              borderColor: "rgba(201, 165, 66, 0.1)",
            }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">Recent Purchases</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#C9A542]/20">
                    <th className="text-left py-2 px-4 text-gray-400">Customer</th>
                    <th className="text-left py-2 px-4 text-gray-400">Product</th>
                    <th className="text-left py-2 px-4 text-gray-400">Amount</th>
                    <th className="text-left py-2 px-4 text-gray-400">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {analytics.purchases.slice(0, 10).map((purchase) => (
                    <tr key={purchase.id} className="border-b border-[#C9A542]/10 hover:bg-[#1a2035]/50 transition-colors">
                      <td className="py-3 px-4 text-gray-300">{purchase.customer_name}</td>
                      <td className="py-3 px-4 text-gray-300">{purchase.product_name}</td>
                      <td className="py-3 px-4 text-[#C9A542] font-semibold">${purchase.total_amount.toFixed(2)}</td>
                      <td className="py-3 px-4 text-gray-400 text-xs">
                        {new Date(purchase.purchased_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Subscribers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-lg border p-6"
            style={{
              backgroundColor: "rgba(26, 32, 53, 0.5)",
              borderColor: "rgba(201, 165, 66, 0.1)",
            }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">Recent Subscribers</h2>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {analytics.subscribers.slice(0, 10).map((subscriber) => (
                <div key={subscriber.id} className="flex items-center justify-between p-3 rounded bg-[#1a2035]/50">
                  <div>
                    <p className="text-gray-300 font-medium">{subscriber.name || "Anonymous"}</p>
                    <p className="text-gray-500 text-sm">{subscriber.email}</p>
                  </div>
                  <span className="text-xs text-gray-400">
                    {new Date(subscriber.subscribed_at).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-lg border p-6"
            style={{
              backgroundColor: "rgba(26, 32, 53, 0.5)",
              borderColor: "rgba(201, 165, 66, 0.1)",
            }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">Active Sponsors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {analytics.sponsors.map((sponsor) => (
                <div key={sponsor.id} className="p-4 rounded bg-[#1a2035]/50 border border-[#C9A542]/10">
                  <h3 className="text-white font-semibold mb-2">{sponsor.name}</h3>
                  <p className="text-[#C9A542] font-bold mb-1">${sponsor.sponsorship_amount.toFixed(2)}</p>
                  <p className="text-gray-400 text-sm">
                    {new Date(sponsor.sponsored_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="p-6 text-center text-gray-400">Failed to load analytics</div>
      )}
    </div>
  )
}
