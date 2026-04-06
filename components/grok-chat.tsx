'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, X, MessageSquare, Minimize2, Maximize2 } from 'lucide-react'
import { useTheme } from '@/lib/theme-context'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export function GrokChat() {
  const { currentTheme } = useTheme()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! 👋 I\'m Grok, your AI fashion assistant. Ask me anything about our ISOLELE collections, fashion trends, styling tips, or anything else you\'d like to know!',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/grok', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: input,
          context: 'You are Grok, an AI fashion expert for ISOLELE Universe Fashion. You provide styling advice, fashion insights, and answer questions about our African luxury collection. Be witty, engaging, and helpful.'
        })
      })

      if (!response.ok) {
        throw new Error('Failed to get response from Grok')
      }

      let assistantMessage = ''
      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value, { stream: true })
          assistantMessage += chunk

          // Update message as it streams
          setMessages(prev => {
            const lastMsg = prev[prev.length - 1]
            if (lastMsg?.role === 'assistant' && lastMsg?.id === 'streaming') {
              return [
                ...prev.slice(0, -1),
                { ...lastMsg, content: assistantMessage }
              ]
            }
            return [
              ...prev,
              {
                id: 'streaming',
                role: 'assistant',
                content: assistantMessage,
                timestamp: new Date()
              }
            ]
          })
        }
      }

      // Finalize streaming message
      setMessages(prev => {
        const lastMsg = prev[prev.length - 1]
        if (lastMsg?.id === 'streaming') {
          return [
            ...prev.slice(0, -1),
            { ...lastMsg, id: Date.now().toString() }
          ]
        }
        return prev
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get response')
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again!',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-40 p-4 rounded-full shadow-lg flex items-center justify-center group"
          style={{ backgroundColor: currentTheme.colors.accentPrimary }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MessageSquare size={24} className="text-black" />
          </motion.div>
          <span className="absolute bottom-full right-0 mb-2 px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ backgroundColor: currentTheme.colors.accentPrimary, color: '#000' }}>
            Ask Grok AI
          </span>
        </motion.button>
      )}

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            className={`fixed bottom-8 right-8 z-50 rounded-2xl shadow-2xl flex flex-col transition-all ${
              isMinimized ? 'w-80 h-16' : 'w-96 h-96'
            }`}
            style={{ backgroundColor: currentTheme.colors.background }}
          >
            {/* Header */}
            <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: `${currentTheme.colors.accentPrimary}30` }}>
              <div>
                <h3 className="font-bold" style={{ color: currentTheme.colors.textPrimary }}>Grok AI Fashion</h3>
                <p className="text-xs" style={{ color: currentTheme.colors.textSecondary }}>Always here to help</p>
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 rounded hover:bg-opacity-20"
                  style={{ backgroundColor: `${currentTheme.colors.accentPrimary}10` }}
                >
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded hover:bg-opacity-20"
                  style={{ backgroundColor: `${currentTheme.colors.accentPrimary}10` }}
                >
                  <X size={18} />
                </motion.button>
              </div>
            </div>

            {/* Messages - Only show if not minimized */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className="px-4 py-2 rounded-lg max-w-xs text-sm"
                        style={{
                          backgroundColor: message.role === 'user' 
                            ? currentTheme.colors.accentPrimary 
                            : `${currentTheme.colors.accentPrimary}20`,
                          color: message.role === 'user' 
                            ? '#000' 
                            : currentTheme.colors.textPrimary
                        }}
                      >
                        {message.content}
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div
                        className="px-4 py-2 rounded-lg"
                        style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20` }}
                      >
                        <motion.div className="flex gap-1">
                          {[0, 1, 2].map(i => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: currentTheme.colors.accentPrimary }}
                              animate={{ y: [0, -4, 0] }}
                              transition={{ duration: 0.6, delay: i * 0.1, repeat: Infinity }}
                            />
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSendMessage} className="px-4 py-3 border-t flex gap-2" style={{ borderColor: `${currentTheme.colors.accentPrimary}30` }}>
                  <input
                    type="text"
                    placeholder="Ask Grok..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isLoading}
                    className="flex-1 px-3 py-2 rounded-full text-sm outline-none disabled:opacity-50"
                    style={{
                      backgroundColor: `${currentTheme.colors.accentPrimary}10`,
                      color: currentTheme.colors.textPrimary
                    }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="p-2 rounded-full disabled:opacity-50"
                    style={{ backgroundColor: currentTheme.colors.accentPrimary }}
                  >
                    <Send size={18} className="text-black" />
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
