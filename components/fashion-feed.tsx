'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, MessageCircle, Share2, MoreVertical, Send } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { useTheme } from '@/lib/theme-context'

interface FashionPost {
  id: number
  type: 'image' | 'video'
  media: string
  title: Record<string, string>
  description: Record<string, string>
  likes: number
  comments: any[]
  shares: number
}

const fashionContent: FashionPost[] = [
  {
    id: 1,
    type: 'image',
    media: '/fashion/img-1.jpg',
    title: { en: 'Fire Performance Ritual', fr: 'Rituel de Performance du Feu' },
    description: { en: 'Ancient traditions meet contemporary expression', fr: 'Les traditions anciennes rencontrent l\'expression contemporaine' },
    likes: 2450,
    comments: [
      { id: 1, user: 'ISOLELE Universe Fashion', text: 'Stunning collection! 🔥', avatar: '/logo.png' },
      { id: 2, user: 'Fashion Lover', text: 'Amazing craftsmanship', avatar: '/avatar.jpg' }
    ],
    shares: 180
  },
  {
    id: 2,
    type: 'image',
    media: '/fashion/img-2.jpg',
    title: { en: 'Monument of Power', fr: 'Monument du Pouvoir' },
    description: { en: 'Golden armor and ancestral pride', fr: 'Armure dorée et fierté ancestrale' },
    likes: 3200,
    comments: [
      { id: 1, user: 'ISOLELE Universe Fashion', text: 'Regal elegance ✨', avatar: '/logo.png' }
    ],
    shares: 245
  },
  {
    id: 3,
    type: 'image',
    media: '/fashion/img-3.jpg',
    title: { en: 'Sacred Geometry', fr: 'Géométrie Sacrée' },
    description: { en: 'Woven patterns of spiritual power', fr: 'Motifs tissés de puissance spirituelle' },
    likes: 1890,
    comments: [],
    shares: 120
  },
  {
    id: 4,
    type: 'image',
    media: '/fashion/img-4.jpg',
    title: { en: 'Runway Essence', fr: 'Essence de la Piste' },
    description: { en: 'Modern grace with traditional roots', fr: 'Grâce moderne avec des racines traditionnelles' },
    likes: 4100,
    comments: [],
    shares: 310
  },
  {
    id: 5,
    type: 'image',
    media: '/fashion/img-5.jpg',
    title: { en: 'Sculptural Fashion', fr: 'Mode Sculpturale' },
    description: { en: 'Architectural beauty in every thread', fr: 'Beauté architecturale dans chaque fil' },
    likes: 2760,
    comments: [],
    shares: 195
  }
]

interface Post extends FashionPost {
  liked: boolean
  shared: boolean
}

function PostCard({ post, onLike, onComment, onShare }: { 
  post: Post
  onLike: (id: number) => void
  onComment: (id: number) => void
  onShare: (id: number) => void
}) {
  const { currentLanguage } = useLanguage()
  const { currentTheme } = useTheme()
  const [showComments, setShowComments] = useState(false)
  const [newComment, setNewComment] = useState('')
  const [allComments, setAllComments] = useState(post.comments)
  
  const lang = currentLanguage.code
  const t = (obj: Record<string, string>) => obj[lang] || obj.en

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: allComments.length + 1,
        user: 'You',
        text: newComment,
        avatar: '/avatar.jpg'
      }
      setAllComments([comment, ...allComments])
      setNewComment('')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-lg border mb-6 overflow-hidden"
      style={{
        backgroundColor: currentTheme.colors.background,
        borderColor: `${currentTheme.colors.accentPrimary}30`
      }}
    >
      {/* Header */}
      <div className="px-4 py-3 flex items-center justify-between border-b" style={{ borderColor: `${currentTheme.colors.accentPrimary}20` }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
            <Image src="/logo.png" alt="ISOLELE" width={32} height={32} className="rounded-full object-cover" />
          </div>
          <div>
            <p className="font-semibold text-sm" style={{ color: currentTheme.colors.textPrimary }}>
              ISOLELE Universe Fashion
            </p>
            <p className="text-xs" style={{ color: currentTheme.colors.textSecondary }}>
              Official Fashion Channel
            </p>
          </div>
        </div>
        <button className="p-2 hover:bg-opacity-20 rounded" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}10` }}>
          <MoreVertical size={18} style={{ color: currentTheme.colors.textSecondary }} />
        </button>
      </div>

      {/* Media */}
      <div className="relative aspect-square bg-black overflow-hidden">
        {post.type === 'image' ? (
          <Image
            src={post.media}
            alt={t(post.title)}
            fill
            className="object-cover"
            priority={post.id <= 2}
          />
        ) : (
          <video src={post.media} className="w-full h-full object-cover" controls />
        )}
      </div>

      {/* Actions */}
      <div className="px-4 py-3 flex gap-4 border-b" style={{ borderColor: `${currentTheme.colors.accentPrimary}20` }}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onLike(post.id)}
          className="flex items-center gap-2 transition-all"
        >
          <Heart 
            size={24} 
            fill={post.liked ? currentTheme.colors.accentPrimary : 'none'}
            style={{ color: post.liked ? currentTheme.colors.accentPrimary : currentTheme.colors.textPrimary }}
          />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2"
        >
          <MessageCircle size={24} style={{ color: currentTheme.colors.textPrimary }} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onShare(post.id)}
          className="flex items-center gap-2"
        >
          <Share2 
            size={24} 
            style={{ color: post.shared ? currentTheme.colors.accentPrimary : currentTheme.colors.textPrimary }}
          />
        </motion.button>
      </div>

      {/* Likes and Info */}
      <div className="px-4 py-3 border-b" style={{ borderColor: `${currentTheme.colors.accentPrimary}20` }}>
        <p className="font-semibold text-sm mb-2" style={{ color: currentTheme.colors.textPrimary }}>
          {post.likes + (post.liked ? 1 : 0)} likes
        </p>
        <h3 className="font-bold text-sm mb-1" style={{ color: currentTheme.colors.textPrimary }}>
          {t(post.title)}
        </h3>
        <p className="text-sm line-clamp-2" style={{ color: currentTheme.colors.textSecondary }}>
          {t(post.description)}
        </p>
        <p className="text-xs mt-2" style={{ color: currentTheme.colors.textSecondary }}>
          View all {allComments.length} comments
        </p>
      </div>

      {/* Comments Section */}
      {showComments && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-b overflow-hidden"
          style={{ borderColor: `${currentTheme.colors.accentPrimary}20` }}
        >
          <div className="px-4 py-3 max-h-64 overflow-y-auto space-y-3">
            {allComments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex-shrink-0 overflow-hidden">
                  <Image src={comment.avatar} alt={comment.user} width={32} height={32} className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm" style={{ color: currentTheme.colors.textPrimary }}>
                    {comment.user}
                  </p>
                  <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                    {comment.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Comment Input */}
          <div className="px-4 py-3 border-t flex gap-2" style={{ borderColor: `${currentTheme.colors.accentPrimary}20` }}>
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
              className="flex-1 px-3 py-2 rounded-full text-sm outline-none"
              style={{
                backgroundColor: `${currentTheme.colors.accentPrimary}10`,
                color: currentTheme.colors.textPrimary,
              }}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddComment}
              style={{ color: currentTheme.colors.accentPrimary }}
            >
              <Send size={20} />
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export function FashionFeed() {
  const { currentLanguage } = useLanguage()
  const { currentTheme } = useTheme()
  const [posts, setPosts] = useState<Post[]>(
    fashionContent.map(p => ({ ...p, liked: false, shared: false }))
  )
  const [hasMore, setHasMore] = useState(true)
  const observerTarget = useRef(null)

  const lang = currentLanguage.code

  const handleLike = useCallback((id: number) => {
    setPosts(posts.map(p => 
      p.id === id ? { ...p, liked: !p.liked } : p
    ))
  }, [posts])

  const handleShare = useCallback((id: number) => {
    setPosts(posts.map(p => 
      p.id === id ? { ...p, shared: !p.shared } : p
    ))
  }, [posts])

  const handleComment = useCallback((id: number) => {
    // Comment handler is in PostCard component
  }, [])

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        // Load more posts
        setTimeout(() => {
          setPosts(prev => [...prev, ...fashionContent.map(p => ({ ...p, liked: false, shared: false }))])
        }, 500)
      }
    })

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => observer.disconnect()
  }, [hasMore])

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {posts.map((post) => (
        <PostCard 
          key={`${post.id}-${Math.random()}`}
          post={post} 
          onLike={handleLike}
          onComment={handleComment}
          onShare={handleShare}
        />
      ))}
      
      <div ref={observerTarget} className="py-8 text-center">
        <p style={{ color: currentTheme.colors.textSecondary }}>
          {lang === 'fr' ? 'Chargement plus de contenus...' : 'Loading more fashion...'}
        </p>
      </div>
    </div>
  )
}
