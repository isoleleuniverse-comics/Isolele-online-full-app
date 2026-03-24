'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { useTheme } from '@/lib/theme-context'
import { Bell, Lock, User, Globe, Moon, Zap, LogOut, Home } from 'lucide-react'

const settingsSections = [
  {
    id: 'account',
    icon: User,
    title: { en: 'Account Settings', fr: 'Paramètres du Compte' },
    items: [
      { en: 'Profile Information', fr: 'Informations de Profil' },
      { en: 'Email & Password', fr: 'Email et Mot de Passe' },
      { en: 'Privacy Settings', fr: 'Paramètres de Confidentialité' },
    ]
  },
  {
    id: 'notifications',
    icon: Bell,
    title: { en: 'Notifications', fr: 'Notifications' },
    items: [
      { en: 'Email Notifications', fr: 'Notifications par Email' },
      { en: 'Push Notifications', fr: 'Notifications Push' },
      { en: 'Newsletter Subscriptions', fr: 'Abonnement à la Lettre d\'Information' },
    ]
  },
  {
    id: 'preferences',
    icon: Globe,
    title: { en: 'Preferences', fr: 'Préférences' },
    items: [
      { en: 'Language & Region', fr: 'Langue et Région' },
      { en: 'Display Theme', fr: 'Thème d\'Affichage' },
      { en: 'Content Recommendations', fr: 'Recommandations de Contenu' },
    ]
  },
  {
    id: 'security',
    icon: Lock,
    title: { en: 'Security', fr: 'Sécurité' },
    items: [
      { en: 'Two-Factor Authentication', fr: 'Authentification à Deux Facteurs' },
      { en: 'Active Sessions', fr: 'Sessions Actives' },
      { en: 'Blocked Users', fr: 'Utilisateurs Bloqués' },
    ]
  },
  {
    id: 'subscription',
    icon: Zap,
    title: { en: 'Subscription', fr: 'Abonnement' },
    items: [
      { en: 'Membership Status', fr: 'Statut d\'Adhésion' },
      { en: 'Billing History', fr: 'Historique de Facturation' },
      { en: 'Payment Methods', fr: 'Moyens de Paiement' },
    ]
  },
]

export default function SettingsPage() {
  const { currentLanguage } = useLanguage()
  const { currentTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('account')
  const lang = currentLanguage.code

  const t = (obj: any) => obj[lang] || obj.en

  return (
    <main style={{ backgroundColor: currentTheme.colors.background, minHeight: '100vh' }}>
      {/* Navigation */}
      <div className="sticky top-0 z-40 backdrop-blur-lg" style={{
        backgroundColor: `${currentTheme.colors.background}cc`,
        borderBottom: `1px solid ${currentTheme.colors.accentPrimary}20`
      }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" style={{ color: currentTheme.colors.accentPrimary }}>
            <Home className="w-5 h-5" />
            <span className="text-sm font-medium">{lang === 'fr' ? 'Accueil' : 'Home'}</span>
          </Link>
          <h1 className="text-2xl font-bold" style={{ color: currentTheme.colors.textPrimary }}>
            {lang === 'fr' ? 'Paramètres' : 'Settings'}
          </h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="space-y-2">
              {settingsSections.map((section) => {
                const Icon = section.icon
                return (
                  <motion.button
                    key={section.id}
                    whileHover={{ x: 4 }}
                    onClick={() => setActiveSection(section.id)}
                    className="w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all"
                    style={{
                      backgroundColor: activeSection === section.id 
                        ? `${currentTheme.colors.accentPrimary}20`
                        : 'transparent',
                      borderLeft: activeSection === section.id
                        ? `3px solid ${currentTheme.colors.accentPrimary}`
                        : 'none',
                      color: currentTheme.colors.textPrimary
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: currentTheme.colors.accentPrimary }} />
                    <span className="font-medium text-sm">{t(section.title)}</span>
                  </motion.button>
                )
              })}
              
              <motion.button
                whileHover={{ x: 4 }}
                className="w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all mt-6"
                style={{ color: '#ef4444' }}
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium text-sm">{lang === 'fr' ? 'Déconnexion' : 'Logout'}</span>
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            {settingsSections.map((section) => {
              if (section.id !== activeSection) return null

              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-bold mb-8" style={{ color: currentTheme.colors.accentPrimary }}>
                    {t(section.title)}
                  </h2>

                  <div className="space-y-4">
                    {section.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-6 rounded-xl cursor-pointer transition-all hover:scale-102"
                        style={{
                          backgroundColor: `${currentTheme.colors.accentPrimary}10`,
                          border: `1px solid ${currentTheme.colors.accentPrimary}30`,
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span style={{ color: currentTheme.colors.textPrimary }} className="font-medium">
                            {t(item)}
                          </span>
                          <span style={{ color: currentTheme.colors.textSecondary }}>→</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Additional Settings Info */}
                  <div className="mt-12 p-8 rounded-xl" style={{
                    backgroundColor: `${currentTheme.colors.accentPrimary}05`,
                    border: `1px solid ${currentTheme.colors.accentPrimary}20`
                  }}>
                    <h3 className="font-bold mb-4" style={{ color: currentTheme.colors.textPrimary }}>
                      {lang === 'fr' ? 'À Propos de Vos Données' : 'About Your Data'}
                    </h3>
                    <p style={{ color: currentTheme.colors.textSecondary }} className="leading-relaxed">
                      {lang === 'fr'
                        ? 'Votre confidentialité est notre priorité. Vos données sont chiffrées et ne sont jamais partagées avec des tiers sans votre consentement.'
                        : 'Your privacy is our priority. Your data is encrypted and never shared with third parties without your consent.'}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
