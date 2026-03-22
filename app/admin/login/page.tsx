"use client"

import React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Eye, EyeOff, AlertCircle, Loader2, Mail, Lock } from "lucide-react"
import Image from "next/image"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (data.success) {
        router.push("/admin/dashboard")
        router.refresh()
      } else {
        setError(data.error || "Invalid credentials")
      }
    } catch (err: any) {
      console.error("[v0] Login error:", err)
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{ backgroundColor: "#0F1524" }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`bg-${i}`}
            className="absolute opacity-10"
            style={{
              left: `${(i * 8.3) % 100}%`,
              top: `${(i * 12.5) % 100}%`,
              width: `${40 + (i * 7) % 60}px`,
              height: `${40 + (i * 7) % 60}px`,
              border: "1px solid #C9A542",
              transform: `rotate(${i * 30}deg)`,
            }}
            animate={{ rotate: [i * 30, i * 30 + 360], scale: [1, 1.1, 1] }}
            transition={{ duration: 20 + i * 2, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      {/* Main container */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md relative z-10">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(15, 21, 36, 0.95)",
            border: "1px solid rgba(201, 165, 66, 0.3)",
            boxShadow: "0 0 80px rgba(201, 165, 66, 0.15)",
          }}
        >
          {/* Header with ISOLELE logo */}
          <div className="p-8 pb-6 border-b border-[#C9A542]/20 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-4"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/isolele-removebg-preview-HeByXSyVrkbKFrcntxvpelZxSswbcU.png"
                alt="ISOLELE Logo"
                width={80}
                height={80}
                className="mx-auto object-contain"
              />
            </motion.div>
            <h1 className="text-3xl font-black text-[#C9A542] tracking-wider" style={{ letterSpacing: "0.1em" }}>
              ISOLELE
            </h1>
            <p className="text-xs text-gray-400 mt-2 tracking-widest">ADMIN CONTROL CENTER</p>
            <p className="text-sm text-gray-500 mt-2">Manage content, media & analytics</p>
          </div>

          {/* Login Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            onSubmit={handleLogin}
            className="p-8 space-y-5"
          >
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30"
              >
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <p className="text-sm text-red-400">{error}</p>
              </motion.div>
            )}

            <div>
              <label className="block text-xs font-bold text-gray-400 mb-2.5 tracking-wider">
                ADMIN EMAIL
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError(null)
                  }}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#1a2035] text-white outline-none transition-all border border-[#C9A542]/20 focus:border-[#C9A542] focus:shadow-[0_0_20px_rgba(201,165,66,0.15)]"
                  placeholder="admin@isolele.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 mb-2.5 tracking-wider">
                PASSWORD
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError(null)
                  }}
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-[#1a2035] text-white outline-none transition-all border border-[#C9A542]/20 focus:border-[#C9A542] focus:shadow-[0_0_20px_rgba(201,165,66,0.15)]"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#C9A542] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-bold tracking-wider text-[#0F1524] transition-all disabled:opacity-50 mt-6"
              style={{ backgroundColor: "#C9A542" }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(201, 165, 66, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? <Loader2 className="w-5 h-5 mx-auto animate-spin" /> : "SIGN IN"}
            </motion.button>
          </motion.form>
        </div>

        {/* Decorative corners */}
        <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#C9A542]/40" />
        <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#C9A542]/40" />
      </motion.div>
    </div>
  )
}

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`bg-${i}`}
            className="absolute opacity-10"
            style={{
              left: `${(i * 8.3) % 100}%`,
              top: `${(i * 12.5) % 100}%`,
              width: `${40 + (i * 7) % 60}px`,
              height: `${40 + (i * 7) % 60}px`,
              border: "1px solid #C9A542",
              transform: `rotate(${i * 30}deg)`,
            }}
            animate={{ rotate: [i * 30, i * 30 + 360], scale: [1, 1.1, 1] }}
            transition={{ duration: 20 + i * 2, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      {/* Main container */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md relative z-10">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(15, 21, 36, 0.95)",
            border: "1px solid rgba(201, 165, 66, 0.3)",
            boxShadow: "0 0 80px rgba(201, 165, 66, 0.15)",
          }}
        >
          {/* Header */}
          <div className="p-6 pb-4 border-b border-[#C9A542]/20 text-center">
            <h1 className="text-2xl font-bold text-[#C9A542] tracking-wider">ISOLELE</h1>
            <p className="text-xs text-gray-400 mt-2 tracking-widest">ADMIN DASHBOARD</p>
            <p className="text-sm text-gray-500 mt-2">Manage content and media</p>
          </div>

          {/* Login Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleLogin}
            className="p-6 space-y-5"
          >
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30"
              >
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <p className="text-sm text-red-400">{error}</p>
              </motion.div>
            )}

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2 tracking-wider">
                EMAIL
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError(null)
                  }}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#1a2035] text-white outline-none transition-all border border-[#C9A542]/20 focus:border-[#C9A542] focus:shadow-[0_0_20px_rgba(201,165,66,0.15)]"
                  placeholder="admin@isolele.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2 tracking-wider">
                PASSWORD
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError(null)
                  }}
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-[#1a2035] text-white outline-none transition-all border border-[#C9A542]/20 focus:border-[#C9A542] focus:shadow-[0_0_20px_rgba(201,165,66,0.15)]"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-bold tracking-wider text-[#0F1524] transition-all disabled:opacity-50"
              style={{ backgroundColor: "#C9A542" }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(201, 165, 66, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? <Loader2 className="w-5 h-5 mx-auto animate-spin" /> : "SIGN IN"}
            </motion.button>
          </motion.form>
        </div>

        {/* Decorative corners */}
        <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#C9A542]/40" />
        <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#C9A542]/40" />
      </motion.div>
    </div>
  )
}

