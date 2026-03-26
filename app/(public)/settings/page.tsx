"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, Bell, ShoppingBag, Clock, Shirt } from "lucide-react"
import { useTheme, themes } from "@/lib/theme-context"
import { useLanguage, languages } from "@/lib/language-context"
import { useNotifications } from "@/lib/notifications-context"
import { useBillHistory } from "@/lib/bill-history-context"
import { cn } from "@/lib/utils"

type Tab = "preferences" | "fashion" | "shop" | "bill-history" | "notifications"

export default function SettingsPage() {
  const { currentTheme, setTheme } = useTheme()
  const { currentLanguage, setLanguage, t } = useLanguage()
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications()
  const { bills } = useBillHistory()
  const [activeTab, setActiveTab] = useState<Tab>("preferences")

  const tabs = [
    { id: "preferences", label: "Paramètres", icon: "⚙️" },
    { id: "fashion", label: "Mode", icon: "👗" },
    { id: "shop", label: "Boutique", icon: "🛍️" },
    { id: "bill-history", label: "Factures", icon: "📋" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
  ] as const

  return (
    <div className="min-h-screen pt-24 pb-32" style={{ backgroundColor: currentTheme.colors.background }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: currentTheme.colors.textPrimary }}>
            {t("nav_settings")}
          </h1>
          <p style={{ color: currentTheme.colors.textSecondary }}>
            Gérez vos préférences, consulez votre historique et explorez plus
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={cn(
                "flex flex-col items-center gap-2 px-4 py-3 rounded-lg transition-all",
                activeTab === tab.id
                  ? "ring-2"
                  : ""
              )}
              style={{
                backgroundColor: activeTab === tab.id ? `${currentTheme.colors.accentPrimary}20` : `${currentTheme.colors.accentPrimary}05`,
                color: activeTab === tab.id ? currentTheme.colors.accentPrimary : currentTheme.colors.textSecondary,
                ringColor: currentTheme.colors.accentPrimary
              }}
            >
              <span className="text-2xl">{tab.icon}</span>
              <span className="text-xs md:text-sm font-medium text-center">{tab.label}</span>
              {tab.id === "notifications" && unreadCount > 0 && (
                <span
                  className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: "#ef4444" }}
                >
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "preferences" && (
            <motion.div
              key="preferences"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {/* Language */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}05`, border: `1px solid ${currentTheme.colors.accentPrimary}20` }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: currentTheme.colors.textPrimary }}>
                  Langue
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={cn(
                        "py-3 rounded-lg text-sm font-medium transition-all",
                        currentLanguage.code === lang.code
                          ? "ring-2"
                          : ""
                      )}
                      style={{
                        backgroundColor: currentLanguage.code === lang.code ? currentTheme.colors.accentPrimary : `${currentTheme.colors.accentPrimary}15`,
                        color: currentLanguage.code === lang.code ? currentTheme.colors.background : currentTheme.colors.textSecondary,
                        ringColor: currentTheme.colors.accentPrimary
                      }}
                    >
                      {lang.flag} {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}05`, border: `1px solid ${currentTheme.colors.accentPrimary}20` }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: currentTheme.colors.textPrimary }}>
                  Thème
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => setTheme(theme.id)}
                      className="p-4 rounded-lg transition-all text-left"
                      style={{
                        backgroundColor: theme.colors.background,
                        border: currentTheme.id === theme.id ? `2px solid ${theme.colors.accentPrimary}` : `1px solid ${theme.colors.accentPrimary}20`
                      }}
                    >
                      <div className="text-xs font-semibold mb-3" style={{ color: theme.colors.textPrimary }}>
                        {theme.name}
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.accentPrimary }} />
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.accentSecondary }} />
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.background }} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "fashion" && (
            <motion.div
              key="fashion"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="p-8 rounded-xl"
              style={{ backgroundColor: `${currentTheme.colors.accentPrimary}10` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">👗</span>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: currentTheme.colors.textPrimary }}>
                    Mode ISOLELE
                  </h3>
                  <p style={{ color: currentTheme.colors.textSecondary }}>
                    Explorez notre collection de mode exclusive
                  </p>
                </div>
              </div>
              <p className="mb-6" style={{ color: currentTheme.colors.textSecondary }}>
                Découvrez les tenues inspirées de l'univers ISOLELE. Chaque pièce raconte une histoire du Kongo et célèbre le style africain moderne.
              </p>
              <Link
                href="/fashion"
                className="inline-block px-6 py-3 rounded-lg font-semibold transition-all"
                style={{
                  backgroundColor: currentTheme.colors.accentPrimary,
                  color: currentTheme.colors.background
                }}
              >
                Voir la collection complète
              </Link>
            </motion.div>
          )}

          {activeTab === "shop" && (
            <motion.div
              key="shop"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="p-8 rounded-xl"
              style={{ backgroundColor: `${currentTheme.colors.accentPrimary}10` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">🛍️</span>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: currentTheme.colors.textPrimary }}>
                    Boutique ISOLELE
                  </h3>
                  <p style={{ color: currentTheme.colors.textSecondary }}>
                    Tous nos produits en un seul endroit
                  </p>
                </div>
              </div>
              <p className="mb-6" style={{ color: currentTheme.colors.textSecondary }}>
                Bandes dessinées, jeux KUFU, accessoires, vêtements et bien plus. Retrouvez tous les produits de l'univers ISOLELE avec livraison rapide.
              </p>
              <Link
                href="/shop"
                className="inline-block px-6 py-3 rounded-lg font-semibold transition-all"
                style={{
                  backgroundColor: currentTheme.colors.accentPrimary,
                  color: currentTheme.colors.background
                }}
              >
                Aller à la boutique
              </Link>
            </motion.div>
          )}

          {activeTab === "bill-history" && (
            <motion.div
              key="bill-history"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {bills.length === 0 ? (
                <div className="text-center py-16">
                  <Clock size={64} className="mx-auto mb-4" style={{ color: currentTheme.colors.textSecondary, opacity: 0.3 }} />
                  <p className="text-xl" style={{ color: currentTheme.colors.textSecondary }}>
                    Aucun achat pour le moment
                  </p>
                  <p className="text-sm mt-2" style={{ color: currentTheme.colors.textSecondary }}>
                    Commencez à explorer la boutique pour voir vos achats ici
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8 p-6 rounded-xl" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}10` }}>
                    <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                      Total dépensé
                    </p>
                    <p className="text-4xl font-bold mt-2" style={{ color: currentTheme.colors.accentPrimary }}>
                      ${bills.filter(b => b.status === "completed").reduce((sum, b) => sum + b.price * b.quantity, 0).toFixed(2)}
                    </p>
                  </div>
                  <div className="space-y-4">
                    {bills.map((bill) => (
                      <div
                        key={bill.id}
                        className="p-4 rounded-lg border"
                        style={{
                          backgroundColor: `${currentTheme.colors.accentPrimary}05`,
                          borderColor: `${currentTheme.colors.accentPrimary}20`
                        }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold" style={{ color: currentTheme.colors.textPrimary }}>
                              {bill.bookTitle}
                            </h4>
                            <p className="text-xs mt-1" style={{ color: currentTheme.colors.textSecondary }}>
                              {new Date(bill.purchaseDate).toLocaleDateString('fr-FR')}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold" style={{ color: currentTheme.colors.accentPrimary }}>
                              ${(bill.price * bill.quantity).toFixed(2)}
                            </p>
                            <p className="text-xs" style={{ color: currentTheme.colors.textSecondary }}>
                              Quantité: {bill.quantity}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span
                            className="text-xs px-3 py-1 rounded-full font-medium"
                            style={{
                              backgroundColor: bill.status === "completed" ? "#10b98120" : "#f59e0b20",
                              color: bill.status === "completed" ? "#10b981" : "#f59e0b"
                            }}
                          >
                            {bill.status === "completed" ? "✓ Complété" : "⏳ En attente"}
                          </span>
                          <p className="text-xs" style={{ color: currentTheme.colors.textSecondary }}>
                            {bill.paymentMethod}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )}

          {activeTab === "notifications" && (
            <motion.div
              key="notifications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="w-full mb-6 px-4 py-3 rounded-lg text-sm font-semibold transition-all"
                  style={{
                    backgroundColor: `${currentTheme.colors.accentPrimary}20`,
                    color: currentTheme.colors.accentPrimary
                  }}
                >
                  Marquer tout comme lu ({unreadCount})
                </button>
              )}
              {notifications.length === 0 ? (
                <div className="text-center py-16">
                  <Bell size={64} className="mx-auto mb-4" style={{ color: currentTheme.colors.textSecondary, opacity: 0.3 }} />
                  <p className="text-xl" style={{ color: currentTheme.colors.textSecondary }}>
                    Aucune notification
                  </p>
                  <p className="text-sm mt-2" style={{ color: currentTheme.colors.textSecondary }}>
                    Vous recevrez des notifications ici
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      onClick={() => !notification.read && markAsRead(notification.id)}
                      className="p-4 rounded-lg border cursor-pointer transition-all hover:border-opacity-100"
                      style={{
                        backgroundColor: !notification.read ? `${currentTheme.colors.accentPrimary}15` : "transparent",
                        borderColor: !notification.read ? `${currentTheme.colors.accentPrimary}50` : `${currentTheme.colors.accentPrimary}20`,
                        opacity: notification.read ? 0.7 : 1
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{
                            backgroundColor:
                              notification.type === "success" ? "#10b981" :
                              notification.type === "error" ? "#ef4444" :
                              notification.type === "warning" ? "#f59e0b" :
                              currentTheme.colors.accentPrimary
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm" style={{ color: currentTheme.colors.textPrimary }}>
                            {notification.title}
                          </h4>
                          <p className="text-sm mt-1" style={{ color: currentTheme.colors.textSecondary }}>
                            {notification.message}
                          </p>
                          <p className="text-xs mt-2" style={{ color: currentTheme.colors.textSecondary }}>
                            {new Date(notification.timestamp).toLocaleTimeString('fr-FR')}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

