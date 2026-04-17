"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Settings as SettingsIcon, Shield, Database, AlertCircle } from "lucide-react"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "ISOLELE",
    maintenanceMode: false,
    notificationsEnabled: true,
    analyticsEnabled: true,
  })

  const handleToggle = (key: string) => {
    setSettings({ ...settings, [key]: !settings[key as keyof typeof settings] })
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
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-2">Manage admin preferences and system settings</p>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        {/* General Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border p-6"
          style={{
            backgroundColor: "rgba(26, 32, 53, 0.5)",
            borderColor: "rgba(201, 165, 66, 0.1)",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <SettingsIcon className="text-[#C9A542]" size={24} />
            <h2 className="text-xl font-semibold text-white">General Settings</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Site Name</label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                className="w-full px-4 py-2 bg-[#1a2035] border border-[#C9A542]/20 rounded-lg text-white focus:border-[#C9A542] outline-none transition-colors"
              />
            </div>
          </div>
        </motion.div>

        {/* System Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-lg border p-6"
          style={{
            backgroundColor: "rgba(26, 32, 53, 0.5)",
            borderColor: "rgba(201, 165, 66, 0.1)",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Database className="text-[#C9A542]" size={24} />
            <h2 className="text-xl font-semibold text-white">System Settings</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded bg-[#1a2035]/50 border border-[#C9A542]/10">
              <div>
                <p className="font-medium text-white">Maintenance Mode</p>
                <p className="text-sm text-gray-400">Prevent public access to the site</p>
              </div>
              <button
                onClick={() => handleToggle("maintenanceMode")}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.maintenanceMode ? "bg-red-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    settings.maintenanceMode ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 rounded bg-[#1a2035]/50 border border-[#C9A542]/10">
              <div>
                <p className="font-medium text-white">Notifications</p>
                <p className="text-sm text-gray-400">Enable real-time notifications</p>
              </div>
              <button
                onClick={() => handleToggle("notificationsEnabled")}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.notificationsEnabled ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    settings.notificationsEnabled ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 rounded bg-[#1a2035]/50 border border-[#C9A542]/10">
              <div>
                <p className="font-medium text-white">Analytics</p>
                <p className="text-sm text-gray-400">Track site analytics and user behavior</p>
              </div>
              <button
                onClick={() => handleToggle("analyticsEnabled")}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.analyticsEnabled ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    settings.analyticsEnabled ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Security */}
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
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-[#C9A542]" size={24} />
            <h2 className="text-xl font-semibold text-white">Security</h2>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-gray-400 mb-4">Your admin account is secured with the following:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                HTTP-only secure cookies
              </li>
              <li className="flex items-center gap-2 text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Encrypted password authentication
              </li>
              <li className="flex items-center gap-2 text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Row-level database security
              </li>
              <li className="flex items-center gap-2 text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Rate limiting on API endpoints
              </li>
            </ul>
          </div>
        </motion.div>

        {/* System Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-lg border p-6 bg-blue-500/5 border-blue-500/20"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="text-blue-400 mt-1" size={20} />
            <div>
              <p className="font-medium text-white mb-2">System Information</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Admin Panel Version: 1.0.0</li>
                <li>Database: Supabase PostgreSQL</li>
                <li>Cache: Real-time ISR</li>
                <li>Last updated: {new Date().toLocaleString()}</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
