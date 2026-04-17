'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Heart, MessageCircle, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { likePost, getPostLikes, addComment, getPostComments, addShare, getPostShares, getPostCommentsCount } from '@/lib/actions/fashion'

interface FashionCardProps {
  id: string
  image: string
  title: string
  description: string
  designer?: string
}

export function FashionCard({ id, image, title, description, designer }: FashionCardProps) {
  const [likes, setLikes] = useState(0)
  const [comments, setComments] = useState(0)
  const [shares, setShares] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [commentsList, setCommentsList] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Load initial counts
  useEffect(() => {
    const loadCounts = async () => {
      try {
        const [likesCount, commentsCount, sharesCount, commentsList] = await Promise.all([
          getPostLikes(id),
          getPostCommentsCount(id),
          getPostShares(id),
          getPostComments(id),
        ])
        setLikes(likesCount)
        setComments(commentsCount)
        setShares(sharesCount)
        setCommentsList(commentsList)
      } catch (error) {
        console.error('Error loading post stats:', error)
      }
    }
    loadCounts()
  }, [id])

  const handleLike = async () => {
    try {
      setIsLoading(true)
      const result = await likePost(id, 'user-' + Math.random())
      if (result.liked) {
        setLikes(likes + 1)
        setIsLiked(true)
      } else {
        setLikes(Math.max(0, likes - 1))
        setIsLiked(false)
      }
    } catch (error) {
      console.error('Error liking post:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleComment = async () => {
    if (!commentText.trim()) return
    
    try {
      setIsLoading(true)
      const userId = 'user-' + Math.random()
      const newComment = await addComment(id, userId, commentText, 'Anonymous')
      setCommentsList([newComment, ...commentsList])
      setComments(comments + 1)
      setCommentText('')
    } catch (error) {
      console.error('Error adding comment:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleShare = async () => {
    try {
      setIsLoading(true)
      const userId = 'user-' + Math.random()
      await addShare(id, userId)
      setShares(shares + 1)
    } catch (error) {
      console.error('Error sharing post:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-black"
    >
      {/* Image */}
      <div className="aspect-[3/4] relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        {designer && <p className="text-sm text-gray-300 mb-4">{designer}</p>}
        <p className="text-sm text-gray-400 line-clamp-2 mb-6">{description}</p>

        {/* Interaction buttons */}
        <div className="flex gap-4 justify-between items-center">
          {/* Like */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLike}
            disabled={isLoading}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Heart
              size={18}
              className={isLiked ? 'fill-red-500 text-red-500' : 'text-white'}
            />
            <span className="text-sm text-white">{likes}</span>
          </motion.button>

          {/* Comment */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <MessageCircle size={18} className="text-white" />
            <span className="text-sm text-white">{comments}</span>
          </motion.button>

          {/* Share */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            disabled={isLoading}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Share2 size={18} className="text-white" />
            <span className="text-sm text-white">{shares}</span>
          </motion.button>
        </div>
      </div>

      {/* Comments panel */}
      {showComments && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="absolute bottom-0 left-0 right-0 bg-black/95 backdrop-blur p-4 max-h-64 overflow-y-auto"
        >
          {/* Comment input */}
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Add a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleComment()}
              className="flex-1 px-3 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 text-sm"
            />
            <button
              onClick={handleComment}
              disabled={isLoading || !commentText.trim()}
              className="px-4 py-2 rounded-lg bg-white text-black font-semibold text-sm hover:bg-gray-200 disabled:opacity-50"
            >
              Post
            </button>
          </div>

          {/* Comments list */}
          <div className="space-y-3">
            {commentsList.map((comment) => (
              <div key={comment.id} className="text-sm">
                <p className="font-semibold text-white">{comment.user_name}</p>
                <p className="text-gray-300">{comment.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
