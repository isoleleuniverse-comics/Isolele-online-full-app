"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronLeft,
  Bell,
  ShoppingCart,
  Users,
  Loader2,
  X,
  Volume2,
  VolumeX,
} from "lucide-react"

interface Notification {
  id: string
  type: "purchase" | "subscriber" | "sponsor"
  title: string
  message: string
  related_id: string
  related_type: string
  is_read: boolean
  created_at: string
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    fetchNotifications()
    const interval = setInterval(fetchNotifications, 10000) // Refresh every 10 seconds
    return () => clearInterval(interval)
  }, [])

  const fetchNotifications = async () => {
    try {
      const res = await fetch("/api/admin/notifications")
      if (!res.ok) throw new Error("Failed to fetch notifications")
      const data = await res.json()
      setNotifications(data)
    } catch (error) {
      console.error("[v0] Error fetching notifications:", error)
    } finally {
      setLoading(false)
    }
  }

  const playSound = () => {
    if (soundEnabled && audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch((e) => console.log("[v0] Sound play error:", e))
    }
  }

  const markAsRead = async (id: string) => {
    try {
      await fetch(`/api/admin/notifications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_read: true }),
      })
      setNotifications(notifications.map((n) => (n.id === id ? { ...n, is_read: true } : n)))
    } catch (error) {
      console.error("[v0] Error marking notification as read:", error)
    }
  }

  const deleteNotification = async (id: string) => {
    try {
      await fetch(`/api/admin/notifications/${id}`, {
        method: "DELETE",
      })
      setNotifications(notifications.filter((n) => n.id !== id))
    } catch (error) {
      console.error("[v0] Error deleting notification:", error)
    }
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "purchase":
        return <ShoppingCart className="text-green-400" size={24} />
      case "subscriber":
        return <Users className="text-purple-400" size={24} />
      case "sponsor":
        return <Bell className="text-yellow-400" size={24} />
      default:
        return <Bell size={24} />
    }
  }

  const unreadCount = notifications.filter((n) => !n.is_read).length

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0F1524" }}>
      {/* Audio element for ding sound */}
      <audio
        ref={audioRef}
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ding-RUjEZVEmCkQDkhSgd67T8bcDm15kms.mp3"
        preload="auto"
      />

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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Notifications</h1>
            <p className="text-gray-400 mt-2">
              {unreadCount} unread {unreadCount === 1 ? "notification" : "notifications"}
            </p>
          </div>
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 hover:bg-[#1a2035] rounded-lg transition-colors text-[#C9A542]"
            title={soundEnabled ? "Disable sound" : "Enable sound"}
          >
            {soundEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-[#C9A542]" />
        </div>
      ) : (
        <div className="p-6 md:p-8">
          {notifications.length === 0 ? (
            <div className="text-center py-12">
              <Bell className="w-16 h-16 mx-auto text-gray-600 mb-4" />
              <p className="text-gray-400">No notifications yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              <AnimatePresence>
                {notifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className={`rounded-lg p-4 border flex items-start justify-between ${
                      !notification.is_read ? "border-[#C9A542]/50" : "border-[#C9A542]/10"
                    }`}
                    style={{
                      backgroundColor: !notification.is_read
                        ? "rgba(201, 165, 66, 0.05)"
                        : "rgba(26, 32, 53, 0.5)",
                    }}
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="mt-1">{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{notification.title}</h3>
                        <p className="text-sm text-gray-400 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-2">
                          {new Date(notification.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2 ml-4">
                      {!notification.is_read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="px-3 py-1 text-xs rounded bg-[#C9A542]/20 text-[#C9A542] hover:bg-[#C9A542]/40 transition-colors"
                        >
                          Mark read
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
