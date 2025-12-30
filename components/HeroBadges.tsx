'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Badge {
  id: number
  text: string
  position: {
    top?: string
    left?: string
    right?: string
    transform?: string
  }
  animation: string
}

export default function HeroBadges() {
  const [badges, setBadges] = useState<Badge[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 先設置默認徽章，確保即使 API 失敗也能顯示
    const defaultBadges = [
      { id: 1, text: '🎯 業界認可', position: { top: '0', left: '5%' }, animation: 'bounce-gentle' },
      { id: 2, text: '⭐ 信譽保證', position: { top: '2', right: '8%' }, animation: 'bounce-gentle-delay1' },
      { id: 3, text: '💎 透明收費', position: { top: '8', left: '2%' }, animation: 'bounce-gentle-delay2' },
      { id: 4, text: '🚀 專業服務', position: { top: '10', right: '3%' }, animation: 'bounce-gentle-delay3' },
    ]
    setBadges(defaultBadges)
    setIsVisible(true)

    // 嘗試從 API 獲取徽章數據（可選，不阻塞渲染）
    try {
      fetch('/api/admin/badges')
        .then((res) => {
          if (!res.ok) throw new Error('API request failed')
          return res.json()
        })
        .then((data) => {
          if (data?.success && data?.data?.badges && Array.isArray(data.data.badges)) {
            // 只取前 4 個徽章
            setBadges(data.data.badges.slice(0, 4))
          }
        })
        .catch((error) => {
          // 靜默失敗，使用默認徽章
          console.warn('Failed to load badges from API, using defaults:', error)
        })
    } catch (error) {
      // 靜默失敗，使用默認徽章
      console.warn('Error fetching badges:', error)
    }
  }, [])

  if (!isVisible || badges.length === 0) return null

  return (
    <div className="absolute -bottom-8 sm:-bottom-10 md:-bottom-12 left-0 right-0 pointer-events-none z-10" style={{ width: '100%', height: 'auto' }}>
      {badges.map((badge, index) => {
        const positionStyle: React.CSSProperties = {}
        if (badge.position.top) {
          positionStyle.top = badge.position.top.includes('%') 
            ? badge.position.top 
            : `${badge.position.top}rem`
        }
        if (badge.position.left) {
          positionStyle.left = badge.position.left
        }
        if (badge.position.right) {
          positionStyle.right = badge.position.right
        }
        if (badge.position.transform) {
          positionStyle.transform = badge.position.transform
        }

        return (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
            className="absolute"
            style={positionStyle}
          >
            <div className={`bg-white dark:bg-slate-800 rounded-[80px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 ${
              badge.animation === 'bounce-gentle' ? 'animate-bounce-gentle' :
              badge.animation === 'bounce-gentle-delay1' ? 'animate-bounce-gentle-delay1' :
              badge.animation === 'bounce-gentle-delay2' ? 'animate-bounce-gentle-delay2' :
              badge.animation === 'bounce-gentle-delay3' ? 'animate-bounce-gentle-delay3' :
              badge.animation === 'bounce-gentle-delay4' ? 'animate-bounce-gentle-delay4' :
              'animate-bounce-gentle'
            }`}>
              <p className="text-xs sm:text-sm md:text-base text-slate-900 dark:text-slate-100 font-medium leading-6 whitespace-nowrap">
                {badge.text}
              </p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

