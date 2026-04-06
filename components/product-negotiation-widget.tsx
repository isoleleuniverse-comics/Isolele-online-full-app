"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Loader2, MessageCircle, X } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"

interface NegotiationResponse {
  response: string
  negotiatedPrice: number
  suggestedDiscount: number
}

export function ProductNegotiationWidget({
  productName,
  productId,
  originalPrice,
}: {
  productName: string
  productId: string
  originalPrice: number
}) {
  const { currentTheme } = useTheme()
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [negotiationData, setNegotiationData] = useState<NegotiationResponse | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setLoading(true)

    try {
      const response = await fetch("/api/shop/negotiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          productName,
          originalPrice,
          userQuery: userMessage,
          customRequests: messages
            .filter((m) => m.role === "user")
            .map((m) => m.content)
            .join("; "),
        }),
      })

      const data = await response.json()

      if (data.success) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.response }])
        setNegotiationData({
          response: data.response,
          negotiatedPrice: data.negotiatedPrice,
          suggestedDiscount: data.suggestedDiscount,
        })
      }
    } catch (error) {
      console.error("[v0] Negotiation error:", error)
      setMessages((prev) => [...prev, { role: "assistant", content: "Error processing request" }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-32 right-4 lg:bottom-8 p-4 rounded-full shadow-lg z-30 transition-all"
        style={{
          backgroundColor: currentTheme.colors.accentPrimary,
          color: currentTheme.colors.background,
        }}
        title="Ask about price negotiation"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-8 right-4 w-96 max-h-96 rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden"
            style={{
              backgroundColor: currentTheme.colors.background,
              border: `1.5px solid ${currentTheme.colors.accentPrimary}40`,
            }}
          >
            {/* Header */}
            <div
              className="p-4 flex justify-between items-center"
              style={{ backgroundColor: `${currentTheme.colors.accentPrimary}15` }}
            >
              <div>
                <h3 className="font-bold text-sm">{productName}</h3>
                <p className="text-xs opacity-75">Price negotiation assistant</p>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false)
                  setMessages([])
                  setNegotiationData(null)
                }}
                className="hover:opacity-75"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && (
                <div className="text-center text-sm opacity-60 py-8">
                  <p>Ask about prices, custom requests, or product details!</p>
                </div>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-xs px-4 py-2 rounded-lg text-sm"
                    style={{
                      backgroundColor:
                        msg.role === "user"
                          ? currentTheme.colors.accentPrimary
                          : `${currentTheme.colors.accentPrimary}15`,
                      color:
                        msg.role === "user"
                          ? currentTheme.colors.background
                          : currentTheme.colors.textPrimary,
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {negotiationData && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-3 rounded-lg border-2"
                  style={{
                    borderColor: currentTheme.colors.accentPrimary,
                    backgroundColor: `${currentTheme.colors.accentPrimary}05`,
                  }}
                >
                  <p className="text-xs font-bold mb-2">💰 Negotiated Offer</p>
                  <div className="space-y-1 text-xs">
                    <p>
                      Original: <span className="line-through">${originalPrice}</span>
                    </p>
                    <p>
                      Negotiated: <span className="font-bold">${negotiationData.negotiatedPrice}</span>
                    </p>
                    <p>
                      Discount: <span className="font-bold">{negotiationData.suggestedDiscount}%</span>
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-3 border-t"
              style={{ borderColor: `${currentTheme.colors.accentPrimary}20` }}
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about price..."
                  className="flex-1 px-3 py-2 rounded-lg text-sm bg-white dark:bg-gray-900 border outline-none focus:border-2"
                  style={{
                    borderColor: currentTheme.colors.accentPrimary,
                    color: currentTheme.colors.textPrimary,
                  }}
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="p-2 rounded-lg transition-all disabled:opacity-50"
                  style={{ backgroundColor: currentTheme.colors.accentPrimary }}
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
