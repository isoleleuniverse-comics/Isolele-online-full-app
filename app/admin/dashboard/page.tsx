"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Eye, ShoppingCart, Users, BookOpen, Bell, Zap } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalVisits: 0,
    totalPurchases: 0,
    totalRevenue: 0,
    totalSubscribers: 0,
    totalSponsors: 0,
    unreadNotifications: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/admin/stats")
      if (!res.ok) throw new Error("Failed to fetch stats")
      const data = await res.json()
      setStats(data)
    } catch (error) {
      console.error("[v0] Error fetching stats:", error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    { label: "Total Visits", value: stats.totalVisits, icon: Eye, color: "#3B82F6" },
    { label: "Purchases", value: stats.totalPurchases, icon: ShoppingCart, color: "#10B981" },
    { label: "Revenue", value: `$${stats.totalRevenue.toFixed(2)}`, icon: Zap, color: "#F59E0B" },
    { label: "Subscribers", value: stats.totalSubscribers, icon: Users, color: "#8B5CF6" },
    { label: "Sponsors", value: stats.totalSponsors, icon: BookOpen, color: "#EC4899" },
    { label: "Notifications", value: stats.unreadNotifications, icon: Bell, color: "#EF4444" },
  ]

  return (
    <>
      {/* Welcome section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-3xl font-bold text-white mb-2">Welcome back</h2>
        <p className="text-gray-400 mb-8">Here's your site performance overview</p>
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {statCards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-lg p-6 border"
            style={{
              backgroundColor: "rgba(26, 32, 53, 0.5)",
              borderColor: "rgba(201, 165, 66, 0.1)",
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-2">{card.label}</p>
                <p className="text-2xl font-bold text-white">{card.value}</p>
              </div>
              <div
                className="p-3 rounded-lg"
                style={{ backgroundColor: `${card.color}20` }}
              >
                <card.icon size={24} style={{ color: card.color }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-lg p-6 border"
          style={{
            backgroundColor: "rgba(26, 32, 53, 0.5)",
            borderColor: "rgba(201, 165, 66, 0.2)",
          }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <Link href="/admin/display">
              <button className="w-full px-4 py-2 rounded-lg text-left text-sm font-medium text-gray-300 hover:bg-[#1a2035] transition-colors">
                Manage Display
              </button>
            </Link>
            <Link href="/admin/notifications">
              <button className="w-full px-4 py-2 rounded-lg text-left text-sm font-medium text-gray-300 hover:bg-[#1a2035] transition-colors">
                View Notifications
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-lg p-6 border"
          style={{
            backgroundColor: "rgba(26, 32, 53, 0.5)",
            borderColor: "rgba(201, 165, 66, 0.2)",
          }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">System Status</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Database</span>
              <span className="text-green-400">Connected</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Storage</span>
              <span className="text-green-400">Active</span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

