"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  BarChart3,
  Eye,
  ShoppingCart,
  Users,
  BookOpen,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  TrendingUp,
  Zap,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [stats, setStats] = useState({
    totalVisits: 0,
    totalPurchases: 0,
    totalRevenue: 0,
    totalSubscribers: 0,
    totalSponsors: 0,
    totalSponsorship: 0,
    unreadNotifications: 0,
  })
  const [loading, setLoading] = useState(true)
  const router = useRouter()

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

  const handleLogout = async () => {
    document.cookie = "admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    document.cookie = "admin_email=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    router.push("/admin/login")
  }

  const menuItems = [
    { label: "Dashboard", icon: BarChart3, href: "/admin/dashboard" },
    { label: "Display", icon: Eye, href: "/admin/display" },
    { label: "Analytics", icon: TrendingUp, href: "/admin/analytics" },
    { label: "Notifications", icon: Bell, href: "/admin/notifications" },
    { label: "Settings", icon: Settings, href: "/admin/settings" },
  ]

  const statCards = [
    { label: "Total Visits", value: stats.totalVisits, icon: Eye, color: "#3B82F6" },
    { label: "Purchases", value: stats.totalPurchases, icon: ShoppingCart, color: "#10B981" },
    { label: "Revenue", value: `$${stats.totalRevenue.toFixed(2)}`, icon: Zap, color: "#F59E0B" },
    { label: "Subscribers", value: stats.totalSubscribers, icon: Users, color: "#8B5CF6" },
    { label: "Sponsors", value: stats.totalSponsors, icon: BookOpen, color: "#EC4899" },
    { label: "Notifications", value: stats.unreadNotifications, icon: Bell, color: "#EF4444" },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0F1524" }}>
      {/* Header */}
      <div
        className="border-b flex items-center justify-between px-6 py-4"
        style={{ borderColor: "rgba(201, 165, 66, 0.1)", backgroundColor: "rgba(15, 21, 36, 0.8)" }}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-[#1a2035] rounded-lg transition-colors md:hidden"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/isolele-removebg-preview-HeByXSyVrkbKFrcntxvpelZxSswbcU.png"
            alt="ISOLELE"
            width={32}
            height={32}
            className="object-contain"
          />
          <h1 className="text-xl font-bold text-[#C9A542] hidden sm:block">ISOLELE ADMIN</h1>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-500/10 text-red-400 transition-colors text-sm"
        >
          <LogOut size={18} />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <motion.div
          animate={{ width: sidebarOpen ? 256 : 0 }}
          className="hidden md:block border-r overflow-hidden"
          style={{ borderColor: "rgba(201, 165, 66, 0.1)" }}
        >
          <nav className="p-6 space-y-2 w-64">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <motion.div
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#1a2035] transition-colors cursor-pointer group"
                  whileHover={{ x: 4 }}
                >
                  <item.icon size={20} className="text-[#C9A542] group-hover:text-[#F6B800]" />
                  <span className="text-sm font-medium text-gray-300">{item.label}</span>
                </motion.div>
              </Link>
            ))}
          </nav>
        </motion.div>

        {/* Main content */}
        <div className="flex-1 p-6 md:p-8">
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
        </div>
      </div>
    </div>
  )
}
