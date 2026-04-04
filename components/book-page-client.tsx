"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, BookOpen, Star, ShoppingBag, X, Printer } from "lucide-react"
import { loadStripe } from "@stripe/stripe-js"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import emailjs from "@emailjs/browser"
import { useTheme } from "@/lib/theme-context"
import { startBookCheckoutSession } from "@/app/actions/book-checkout"
import type { BookProduct } from "@/lib/book-products"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface BookPageClientProps {
  book: BookProduct
}

function formatPrice(cents: number) {
  return (cents / 100).toFixed(2)
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
}

// POS Invoice overlay shown after successful payment
function InvoiceOverlay({
  book,
  customerEmail,
  onClose,
}: {
  book: BookProduct
  customerEmail: string
  onClose: () => void
}) {
  const now = new Date()
  const invoiceNumber = `ISO-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}-${Math.floor(1000 + Math.random() * 9000)}`

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: "#fff", color: "#111" }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={18} color="#666" />
        </button>

        {/* Receipt */}
        <div className="p-6 font-mono text-sm">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="flex justify-center mb-2">
              <span className="text-2xl font-black tracking-widest" style={{ color: "#B8860B", letterSpacing: "0.15em" }}>
                ISOLELE
              </span>
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-widest">The Chosen Ones</p>
            <p className="text-xs text-gray-500">universe.isolele.com</p>
            <div className="border-t border-dashed border-gray-300 my-3" />
          </div>

          {/* Invoice info */}
          <div className="space-y-1 mb-4 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-500">INVOICE</span>
              <span className="font-bold">{invoiceNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">DATE</span>
              <span>{formatDate(now)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">TIME</span>
              <span>{formatTime(now)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">CUSTOMER</span>
              <span className="truncate ml-2 max-w-[180px]">{customerEmail}</span>
            </div>
          </div>

          <div className="border-t border-dashed border-gray-300 my-3" />

          {/* Line items */}
          <div className="mb-4">
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">ITEMS</div>
            <div className="flex justify-between items-start gap-2">
              <div className="flex-1">
                <p className="font-bold text-xs leading-tight">{book.name}</p>
                <p className="text-gray-500 text-xs">{book.subtitle}</p>
                <p className="text-gray-400 text-xs">{book.format} · {book.pages}p</p>
              </div>
              <span className="font-bold whitespace-nowrap">${formatPrice(book.priceInCents)}</span>
            </div>
          </div>

          <div className="border-t border-dashed border-gray-300 my-3" />

          {/* Totals */}
          <div className="space-y-1 text-xs mb-4">
            <div className="flex justify-between">
              <span className="text-gray-500">SUBTOTAL</span>
              <span>${formatPrice(book.priceInCents)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">TAX (0%)</span>
              <span>$0.00</span>
            </div>
            <div className="border-t border-gray-200 pt-2 flex justify-between font-black text-base">
              <span>TOTAL</span>
              <span style={{ color: "#B8860B" }}>${formatPrice(book.priceInCents)}</span>
            </div>
          </div>

          <div className="border-t border-dashed border-gray-300 my-3" />

          {/* Footer */}
          <div className="text-center text-xs text-gray-400 space-y-1">
            <p className="font-bold text-gray-600">Thank you for your purchase!</p>
            <p>A confirmation has been sent to your email.</p>
            <p className="text-gray-400">ISOLELE Universe · All rights reserved</p>
          </div>
        </div>

        {/* Print button */}
        <div className="px-6 pb-5">
          <button
            onClick={() => window.print()}
            className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-sm font-bold transition-colors"
            style={{ backgroundColor: "#B8860B", color: "#fff" }}
          >
            <Printer size={16} />
            Print Receipt
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Stripe checkout modal
function CheckoutModal({
  book,
  onClose,
  onSuccess,
  customerEmail,
}: {
  book: BookProduct
  onClose: () => void
  onSuccess: (email: string) => void
  customerEmail: string
}) {
  const fetchClientSecret = useCallback(async () => {
    return await startBookCheckoutSession(book.id)
  }, [book.id])

  const options = {
    fetchClientSecret,
    onComplete: () => {
      onSuccess(customerEmail)
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 22 }}
        className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: "#fff", maxHeight: "90vh", overflowY: "auto" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: "#f0f0f0" }}>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Secure Checkout</p>
            <p className="font-black text-gray-800 text-sm truncate max-w-[260px]">{book.name}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg font-black" style={{ color: "#B8860B" }}>
              ${formatPrice(book.priceInCents)}
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={20} color="#666" />
            </button>
          </div>
        </div>

        {/* Stripe Embedded Checkout */}
        <div className="p-2">
          <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function BookPageClient({ book }: BookPageClientProps) {
  const { currentTheme } = useTheme()
  const [showCheckout, setShowCheckout] = useState(false)
  const [showInvoice, setShowInvoice] = useState(false)
  const [customerEmail, setCustomerEmail] = useState("")
  const [emailInput, setEmailInput] = useState("")

  const handlePaymentSuccess = useCallback(
    async (email: string) => {
      setCustomerEmail(email)
      setShowCheckout(false)
      setShowInvoice(true)

      // Send EmailJS invoice
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            to_email: email,
            to_name: email.split("@")[0],
            book_title: book.name,
            book_subtitle: book.subtitle,
            book_format: book.format,
            book_pages: book.pages,
            book_price: `$${formatPrice(book.priceInCents)}`,
            book_description: book.description,
            invoice_number: `ISO-${Date.now()}`,
            invoice_date: formatDate(new Date()),
            invoice_time: formatTime(new Date()),
            tax: "$0.00",
            total: `$${formatPrice(book.priceInCents)}`,
            from_name: "ISOLELE Universe",
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
      } catch {
        // Silent fail — invoice shown on screen regardless
      }
    },
    [book]
  )

  const handleOpenCheckout = () => {
    if (!emailInput || !emailInput.includes("@")) return
    setCustomerEmail(emailInput)
    setShowCheckout(true)
  }

  const reviews = [
    { name: "Amara K.", rating: 5, text: "A groundbreaking universe that celebrates African culture with stunning visuals!" },
    { name: "Kwame M.", rating: 5, text: "My kids were hooked from the first page. Inspiring and beautifully illustrated." },
    { name: "Zainab L.", rating: 4, text: "Powerful storytelling rooted in heritage. A must-read for the whole family." },
  ]

  return (
    <>
      <div
        className="min-h-screen py-10"
        style={{ background: currentTheme.colors.background, color: currentTheme.colors.textPrimary }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back */}
          <Link href="/shop">
            <motion.span
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all"
              style={{
                color: currentTheme.colors.accentPrimary,
                backgroundColor: `${currentTheme.colors.accentPrimary}15`,
              }}
              whileHover={{ scale: 1.04 }}
            >
              <ArrowLeft size={18} />
              Back to Shop
            </motion.span>
          </Link>

          {/* Book hero grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-start">

            {/* Cover */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div
                className="relative w-full max-w-xs aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl"
                style={{ border: `4px solid ${book.accentColor}30` }}
              >
                <Image
                  src={book.coverImage}
                  alt={book.name}
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {book.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
                    style={{
                      backgroundColor: `${book.accentColor}20`,
                      color: book.accentColor,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <div>
                <h1
                  className="text-3xl lg:text-4xl font-black tracking-tight leading-tight text-balance mb-1"
                  style={{ color: currentTheme.colors.textPrimary }}
                >
                  {book.name}
                </h1>
                <p className="text-lg font-semibold" style={{ color: book.accentColor }}>
                  {book.subtitle}
                </p>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={book.accentColor}
                    color={book.accentColor}
                  />
                ))}
                <span className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                  5.0 · 3 reviews
                </span>
              </div>

              {/* Description */}
              <p
                className="text-base leading-relaxed"
                style={{ color: currentTheme.colors.textSecondary }}
              >
                {book.description}
              </p>

              {/* Details row */}
              <div
                className="grid grid-cols-2 gap-3 p-4 rounded-xl text-sm"
                style={{ backgroundColor: `${book.accentColor}10` }}
              >
                <div>
                  <p className="text-xs uppercase tracking-wide" style={{ color: currentTheme.colors.textSecondary }}>Format</p>
                  <p className="font-bold">{book.format}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide" style={{ color: currentTheme.colors.textSecondary }}>Pages</p>
                  <p className="font-bold">{book.pages}</p>
                </div>
              </div>

              {/* Price + email + CTA */}
              <div className="flex flex-col gap-3 mt-2">
                <span
                  className="text-4xl font-black"
                  style={{ color: book.accentColor }}
                >
                  ${formatPrice(book.priceInCents)}
                </span>
                <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: currentTheme.colors.textSecondary }}>
                  Available in Paperback.
                </p>
                {/* Email for receipt */}
                <input
                  type="email"
                  placeholder="Your email for receipt..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                  style={{
                    backgroundColor: `${book.accentColor}0D`,
                    borderColor: emailInput && !emailInput.includes("@") ? "#e53e3e" : `${book.accentColor}40`,
                    color: currentTheme.colors.textPrimary,
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleOpenCheckout()}
                />
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleOpenCheckout}
                  disabled={!emailInput.includes("@")}
                  className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-black text-base uppercase tracking-widest shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                  style={{
                    backgroundColor: book.accentColor,
                    color: "#fff",
                  }}
                >
                  <ShoppingBag size={20} />
                  Pay Now
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Full description */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-14"
          >
            <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
              <BookOpen size={22} style={{ color: book.accentColor }} />
              About This Book
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              {book.fullDescription}
            </p>
          </motion.section>

          {/* Reviews */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-black mb-6">Reader Reviews</h2>
            <div className="space-y-4">
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl"
                  style={{ backgroundColor: `${book.accentColor}0D` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">{review.name}</span>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} fill={book.accentColor} color={book.accentColor} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

        </div>
      </div>

      {/* Checkout Modal */}
      <AnimatePresence>
        {showCheckout && (
          <CheckoutModal
            book={book}
            onClose={() => setShowCheckout(false)}
            onSuccess={handlePaymentSuccess}
            customerEmail={customerEmail}
          />
        )}
      </AnimatePresence>

      {/* Invoice Overlay */}
      <AnimatePresence>
        {showInvoice && (
          <InvoiceOverlay
            book={book}
            customerEmail={customerEmail}
            onClose={() => setShowInvoice(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
