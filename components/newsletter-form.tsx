'use client'

import { useState } from 'react'
import { subscribeNewsletter } from '@/lib/actions/games'
import { useLanguage } from '@/lib/language-context'

export function NewsletterForm() {
  const { currentLanguage } = useLanguage()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const lang = currentLanguage.code

  const t = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      'footer_thank_you': { en: 'Thank you for subscribing!', fr: 'Merci de vous être abonné!' },
      'footer_email_placeholder': { en: 'Your email address', fr: 'Votre adresse email' },
      'footer_subscribe': { en: 'SUBSCRIBE', fr: "S'INSCRIRE" }
    }
    return translations[key]?.[lang] || translations[key]?.en || key
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const result = await subscribeNewsletter(email, lang)
    
    if (result.error) {
      setError(result.error)
    } else {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
    
    setIsSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <p className="text-green-600 font-semibold">{t('footer_thank_you')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t('footer_email_placeholder')}
        required
        className="flex-1 px-3 py-2 rounded text-sm"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 py-2 bg-amber-600 text-white rounded font-semibold disabled:opacity-50"
      >
        {isSubmitting ? '...' : t('footer_subscribe')}
      </button>
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
    </form>
  )
}
