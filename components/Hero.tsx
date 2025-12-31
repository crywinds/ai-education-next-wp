'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from '@/components/Icon'
import HeroBadges from '@/components/HeroBadges'

const rotatingTags = ['#最透明', '#最方便', '#最公開']

export default function Hero() {
  const [currentTagIndex, setCurrentTagIndex] = useState(0)

  useEffect(() => {
    // 確保組件掛載後立即開始計時
    const interval = setInterval(() => {
      setCurrentTagIndex((prev) => (prev + 1) % rotatingTags.length)
    }, 3000) // 每 3 秒切換一次

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden w-full max-w-full">
      {/* CSS Artwork Background - 淺色系 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 網格背景 - 加深 */}
        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(to_right,rgba(96,165,250,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.2)_1px,transparent_1px)]"></div>
        </div>
        
        {/* 大型圓形裝飾 - 加深 */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-300/30 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-cyan-300/30 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-300/30 dark:bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* 幾何線條 - 加深 */}
        <div className="absolute top-1/3 left-1/4 w-px h-64 bg-gradient-to-b from-blue-400/50 to-transparent dark:from-blue-400/40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent dark:via-cyan-400/40"></div>
        <div className="absolute top-1/2 right-1/3 w-px h-48 bg-gradient-to-b from-transparent via-pink-400/50 to-transparent dark:via-pink-400/40"></div>
        <div className="absolute top-1/4 right-1/5 w-48 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent dark:via-blue-400/30"></div>
        <div className="absolute bottom-1/4 left-1/5 w-px h-56 bg-gradient-to-b from-purple-400/40 to-transparent dark:from-purple-400/30"></div>
        
        {/* 浮動幾何圖形 - 加深 */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-400/40 dark:border-blue-400/30 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 border-2 border-cyan-400/40 dark:border-cyan-400/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-pink-400/40 dark:border-pink-400/30 rotate-12 animate-float" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-purple-400/35 dark:border-purple-400/25 rounded-lg rotate-45 animate-float" style={{ animationDelay: '3.5s' }}></div>
        
        {/* 漸變光暈效果 - 加深 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-radial from-blue-200/40 via-blue-100/20 to-transparent dark:from-blue-800/30 dark:via-blue-900/15"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-cyan-200/35 via-cyan-100/15 to-transparent dark:from-cyan-800/25 dark:via-cyan-900/10"></div>
        <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-gradient-radial from-pink-200/30 via-pink-100/15 to-transparent dark:from-pink-800/20 dark:via-pink-900/10"></div>
        
        {/* 點狀圖案 - 加深並增加數量 */}
        <div className="absolute inset-0 opacity-[0.12] dark:opacity-[0.15]">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-2.5 h-2.5 bg-cyan-500 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-500 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-500 rounded-full"></div>
          <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-purple-500 rounded-full"></div>
          <div className="absolute bottom-1/5 left-1/5 w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
          <div className="absolute top-2/3 right-1/6 w-2 h-2 bg-pink-500 rounded-full"></div>
          <div className="absolute bottom-2/3 left-2/3 w-2 h-2 bg-cyan-500 rounded-full"></div>
        </div>
        
        {/* 額外的裝飾性圓圈 */}
        <div className="absolute top-1/6 right-1/6 w-40 h-40 border border-blue-400/25 dark:border-blue-400/15 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/6 left-1/6 w-36 h-36 border border-cyan-400/25 dark:border-cyan-400/15 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* 左側相片框架 */}
      <div className="absolute left-4 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 hidden lg:block z-0">
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem]">
          {/* 第一張相片 - 左上，稍微傾斜 */}
          <div className="absolute top-0 left-0 w-[60%] h-[45%] rounded-2xl overflow-hidden shadow-xl z-10 bg-blue-100/80 dark:bg-blue-900/40 border-2 border-dashed border-blue-300/50 dark:border-blue-600/30 rotate-[-5deg] backdrop-blur-sm">
            <div className="relative w-full h-full">
              <Image
                src="/images/about/team-1.jpg"
                alt="團隊照片 1"
                fill
                className="object-cover rounded-2xl"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.parentElement?.querySelector('.image-placeholder') as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="image-placeholder hidden absolute inset-0 items-center justify-center">
                <div className="text-center p-3">
                  <Icon emoji="📸" size={32} className="text-blue-500 dark:text-blue-400 mx-auto mb-1" />
                  <div className="text-xs text-blue-600 dark:text-blue-300 font-medium mb-1">團隊照片 1</div>
                  <div className="text-[9px] text-blue-500 dark:text-blue-400 font-semibold mb-1 px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/30 rounded">
                    team-1.jpg
                  </div>
                  <div className="text-[8px] text-blue-400 dark:text-blue-500 leading-tight">
                    <a href="/admin" target="_blank" className="underline hover:text-blue-600 dark:hover:text-blue-400">
                      /admin
                    </a>
                    <br/>分類: 關於我們
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 第二張相片 - 中間右側，稍微傾斜 */}
          <div className="absolute top-[25%] right-0 w-[55%] h-[50%] rounded-2xl overflow-hidden shadow-xl z-20 bg-cyan-100/80 dark:bg-cyan-900/40 border-2 border-dashed border-cyan-300/50 dark:border-cyan-600/30 rotate-[8deg] backdrop-blur-sm">
            <div className="relative w-full h-full">
              <Image
                src="/images/about/team-2.jpg"
                alt="團隊照片 2"
                fill
                className="object-cover rounded-2xl"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.parentElement?.querySelector('.image-placeholder') as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="image-placeholder hidden absolute inset-0 items-center justify-center">
                <div className="text-center p-3">
                  <Icon emoji="📸" size={32} className="text-cyan-500 dark:text-cyan-400 mx-auto mb-1" />
                  <div className="text-xs text-cyan-600 dark:text-cyan-300 font-medium mb-1">團隊照片 2</div>
                  <div className="text-[9px] text-cyan-500 dark:text-cyan-400 font-semibold mb-1 px-1.5 py-0.5 bg-cyan-50 dark:bg-cyan-900/30 rounded">
                    team-2.jpg
                  </div>
                  <div className="text-[8px] text-cyan-400 dark:text-cyan-500 leading-tight">
                    <a href="/admin" target="_blank" className="underline hover:text-cyan-600 dark:hover:text-cyan-400">
                      /admin
                    </a>
                    <br/>分類: 關於我們
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 第三張相片 - 左下，稍微傾斜 */}
          <div className="absolute bottom-0 left-[10%] w-[50%] h-[40%] rounded-2xl overflow-hidden shadow-xl z-30 bg-pink-100/80 dark:bg-pink-900/40 border-2 border-dashed border-pink-300/50 dark:border-pink-600/30 rotate-[-3deg] backdrop-blur-sm">
            <div className="relative w-full h-full">
              <Image
                src="/images/about/team-3.jpg"
                alt="團隊照片 3"
                fill
                className="object-cover rounded-2xl"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.parentElement?.querySelector('.image-placeholder') as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="image-placeholder hidden absolute inset-0 items-center justify-center">
                <div className="text-center p-3">
                  <Icon emoji="📸" size={32} className="text-pink-500 dark:text-pink-400 mx-auto mb-1" />
                  <div className="text-xs text-pink-600 dark:text-pink-300 font-medium mb-1">團隊照片 3</div>
                  <div className="text-[9px] text-pink-500 dark:text-pink-400 font-semibold mb-1 px-1.5 py-0.5 bg-pink-50 dark:bg-pink-900/30 rounded">
                    team-3.jpg
                  </div>
                  <div className="text-[8px] text-pink-400 dark:text-pink-500 leading-tight">
                    <a href="/admin" target="_blank" className="underline hover:text-pink-600 dark:hover:text-pink-400">
                      /admin
                    </a>
                    <br/>分類: 關於我們
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 右側相片框架 */}
      <div className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 hidden lg:block z-0 max-w-[calc(50%-2rem)]">
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem]">
          {/* 第一張相片 - 右上，稍微傾斜 */}
          <div className="absolute top-0 right-0 w-[60%] h-[45%] rounded-2xl overflow-hidden shadow-xl z-10 bg-purple-100/80 dark:bg-purple-900/40 border-2 border-dashed border-purple-300/50 dark:border-purple-600/30 rotate-[5deg] backdrop-blur-sm">
            <div className="relative w-full h-full">
              <Image
                src="/images/about/team-4.jpg"
                alt="團隊照片 4"
                fill
                className="object-cover rounded-2xl"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.parentElement?.querySelector('.image-placeholder') as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="image-placeholder hidden absolute inset-0 items-center justify-center">
                <div className="text-center p-3">
                  <Icon emoji="📸" size={32} className="text-purple-500 dark:text-purple-400 mx-auto mb-1" />
                  <div className="text-xs text-purple-600 dark:text-purple-300 font-medium mb-1">團隊照片 4</div>
                  <div className="text-[9px] text-purple-500 dark:text-purple-400 font-semibold mb-1 px-1.5 py-0.5 bg-purple-50 dark:bg-purple-900/30 rounded">
                    team-4.jpg
                  </div>
                  <div className="text-[8px] text-purple-400 dark:text-purple-500 leading-tight">
                    <a href="/admin" target="_blank" className="underline hover:text-purple-600 dark:hover:text-purple-400">
                      /admin
                    </a>
                    <br/>分類: 關於我們
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 第二張相片 - 中間左側，稍微傾斜 */}
          <div className="absolute top-[25%] left-0 w-[55%] h-[50%] rounded-2xl overflow-hidden shadow-xl z-20 bg-indigo-100/80 dark:bg-indigo-900/40 border-2 border-dashed border-indigo-300/50 dark:border-indigo-600/30 rotate-[-8deg] backdrop-blur-sm">
            <div className="relative w-full h-full">
              <Image
                src="/images/about/team-5.jpg"
                alt="團隊照片 5"
                fill
                className="object-cover rounded-2xl"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.parentElement?.querySelector('.image-placeholder') as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="image-placeholder hidden absolute inset-0 items-center justify-center">
                <div className="text-center p-3">
                  <Icon emoji="📸" size={32} className="text-indigo-500 dark:text-indigo-400 mx-auto mb-1" />
                  <div className="text-xs text-indigo-600 dark:text-indigo-300 font-medium mb-1">團隊照片 5</div>
                  <div className="text-[9px] text-indigo-500 dark:text-indigo-400 font-semibold mb-1 px-1.5 py-0.5 bg-indigo-50 dark:bg-indigo-900/30 rounded">
                    team-5.jpg
                  </div>
                  <div className="text-[8px] text-indigo-400 dark:text-indigo-500 leading-tight">
                    <a href="/admin" target="_blank" className="underline hover:text-indigo-600 dark:hover:text-indigo-400">
                      /admin
                    </a>
                    <br/>分類: 關於我們
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 第三張相片 - 右下，稍微傾斜 */}
          <div className="absolute bottom-0 right-[10%] w-[50%] h-[40%] rounded-2xl overflow-hidden shadow-xl z-30 bg-teal-100/80 dark:bg-teal-900/40 border-2 border-dashed border-teal-300/50 dark:border-teal-600/30 rotate-[3deg] backdrop-blur-sm">
            <div className="relative w-full h-full">
              <Image
                src="/images/about/team-6.jpg"
                alt="團隊照片 6"
                fill
                className="object-cover rounded-2xl"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.parentElement?.querySelector('.image-placeholder') as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="image-placeholder hidden absolute inset-0 items-center justify-center">
                <div className="text-center p-3">
                  <Icon emoji="📸" size={32} className="text-teal-500 dark:text-teal-400 mx-auto mb-1" />
                  <div className="text-xs text-teal-600 dark:text-teal-300 font-medium mb-1">團隊照片 6</div>
                  <div className="text-[9px] text-teal-500 dark:text-teal-400 font-semibold mb-1 px-1.5 py-0.5 bg-teal-50 dark:bg-teal-900/30 rounded">
                    team-6.jpg
                  </div>
                  <div className="text-[8px] text-teal-400 dark:text-teal-500 leading-tight">
                    <a href="/admin" target="_blank" className="underline hover:text-teal-600 dark:hover:text-teal-400">
                      /admin
                    </a>
                    <br/>分類: 關於我們
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content with Transparent Background Card */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Transparent Background Card - 類似 koraeweb.com 的設計 */}
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 shadow-2xl border border-white/20 dark:border-slate-700/50 relative pb-20 sm:pb-24 md:pb-28 overflow-visible">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-50 dark:bg-green-900/30 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100 mb-4 sm:mb-6 md:mb-8 shadow-sm border border-green-200/50 dark:border-green-700/50">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="whitespace-nowrap">沒有硬性銷售・沒有捆綁服務・收費透明</span>
              </div>
              
              {/* Main Heading - 黑色文字 */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 text-slate-900 dark:text-white leading-tight px-2 sm:px-4">
                香港{' '}
                <span className="inline-block relative min-w-[120px] sm:min-w-[140px] md:min-w-[180px] lg:min-w-[220px] text-left h-[1.2em]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={currentTagIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                      }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ 
                        duration: 0.4,
                        ease: "easeInOut"
                      }}
                      className="inline-block bg-gradient-to-r from-blue-600 via-pink-500 to-cyan-600 bg-clip-text text-transparent animate-tag-bounce"
                    >
                      {rotatingTags[currentTagIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-pink-500 to-cyan-600 bg-clip-text text-transparent">
                  東大門時裝批發平台
                </span>
              </h1>
              
              {/* Subtitle - 深色文字 */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 dark:text-slate-200 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 font-medium">
                支援多平台數據下載，輕鬆匯入 Shopline、Shopify 等平台，門市、網店得心應手
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4">
                <Link 
                  href="/wholesale"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-center text-sm sm:text-base touch-manipulation"
                >
                  免費註冊開始批發
                </Link>
                <Link 
                  href="/contact"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 active:bg-slate-100 dark:active:bg-slate-600 text-slate-900 dark:text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-2 border-slate-300 dark:border-slate-600 text-center text-sm sm:text-base touch-manipulation"
                >
                  了解會員計劃
                </Link>
              </div>
              
              {/* Stats - 深色文字 */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-3xl mx-auto px-2 sm:px-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">10+</div>
                  <div className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium">年專業經驗</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">1000+</div>
                  <div className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium">合作客戶</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">40+</div>
                  <div className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium">企業支持</div>
                </div>
              </div>
            </div>
            
            {/* 跳動徽章 - 在卡片下方 */}
            <HeroBadges />
          </div>
        </div>
      </div>
      
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
    </section>
  )
}








