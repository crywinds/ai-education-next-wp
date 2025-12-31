'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Icon from '@/components/Icon'

export default function ServicesSection() {
  const [imageError, setImageError] = useState(false)

  const services = [
    {
      icon: '📥',
      title: '多平台數據下載（核心功能）',
      description: '支援 CSV、Excel、JSON 格式，批量下載商品數據（圖片、描述、價格、庫存），相容 Shopify、WooCommerce、Shopline、Shopage 等平台，讓您輕鬆匯入自家網店。',
      color: 'green',
    },
    {
      icon: '🛍️',
      title: '網店系統（可選服務）',
      description: '如需網店系統，我們也提供可選的網店服務，包括商品展示、訂單管理、付款處理等功能。客戶可自由選擇，無需強制綁定。',
      color: 'blue',
    },
    {
      icon: '📊',
      title: '透明收費制度',
      description: '採用按使用付費或單項服務模式，無隱藏費用、無捆綁服務。所有收費清晰列明，讓您清楚了解每一項費用。',
      color: 'purple',
    },
    {
      icon: '🚚',
      title: '品質及物流配送支援',
      description: '我們團隊會對商品進行嚴格品質檢查及提供多種物流配送支援，即使不能抽空處理大量寄送，我們亦能為您代辦出貨。',
      color: 'orange',
    },
  ]

  const colorClasses = {
    blue: 'from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-800 border-blue-100 dark:border-blue-800 bg-blue-50 dark:bg-slate-800',
    green: 'from-green-50 to-white dark:from-green-900/20 dark:to-slate-800 border-green-100 dark:border-green-800 bg-green-50 dark:bg-slate-800',
    purple: 'from-purple-50 to-white dark:from-purple-900/20 dark:to-slate-800 border-purple-100 dark:border-purple-800 bg-purple-50 dark:bg-slate-800',
    orange: 'from-orange-50 to-white dark:from-orange-900/20 dark:to-slate-800 border-orange-100 dark:border-orange-800 bg-orange-50 dark:bg-slate-800',
  }

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            全方位提升個人與企業競爭力
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
            推動批發數碼化落地應用
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            為批發客戶提供高效的日韓時裝商品瀏覽、訂購及數據管理工具，支援多平台數據下載，讓您自由選擇銷售渠道。
          </p>
        </div>

        {/* Main Service Description */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-4">
              核心差異化功能
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              多平台數據下載功能
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Korae 的核心優勢是提供靈活的數據下載功能。付費會員可無限制下載商品數據（圖片、描述、價格、庫存等），支援 CSV、Excel、JSON 格式，輕鬆匯入 Shopify、WooCommerce、Shopline、Shopage 或其他電商平台，無需綁定特定網店系統。
            </p>
            <Link 
              href="/wholesale"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              了解會員計劃
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-green-50 via-emerald-50 to-cyan-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-cyan-900/20 rounded-2xl shadow-xl overflow-hidden relative">
              {/* Animated Background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-emerald-400/10 to-cyan-400/10 dark:from-green-500/5 dark:via-emerald-500/5 dark:to-cyan-500/5 animate-gradient bg-[length:200%_auto]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]"></div>
              </div>

              {/* Data Download Visualization */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 sm:p-8">
                {/* Download Icon with Animation */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </motion.div>
                  
                  {/* Pulsing Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-green-400 rounded-2xl"
                    animate={{
                      scale: [1, 1.3, 1.3],
                      opacity: [0.5, 0, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  />
                </div>

                {/* Data Flow Animation */}
                <div className="w-full max-w-xs mb-6">
                  {/* Progress Bar */}
                  <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-4">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div
                      className="absolute inset-y-0 right-0 w-8 bg-white/50 blur-sm"
                      initial={{ x: '-100%' }}
                      animate={{ x: '400%' }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  </div>

                  {/* File Icons */}
                  <div className="flex items-center justify-center gap-3 sm:gap-4">
                    {['CSV', 'Excel', 'JSON'].map((format, index) => (
                      <motion.div
                        key={format}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.2,
                          duration: 0.5,
                        }}
                      >
                        <motion.div
                          className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-slate-800 rounded-lg shadow-md flex items-center justify-center mb-2"
                          whileHover={{ scale: 1.1, y: -5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <span className="text-xs sm:text-sm font-bold text-green-600 dark:text-green-400">{format}</span>
                        </motion.div>
                        <motion.div
                          className="w-1 h-1 bg-green-500 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Platform Icons */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4">
                  {['Shopify', 'WooCommerce', 'Shopline', 'Shopage'].map((platform, index) => (
                    <motion.div
                      key={platform}
                      className="px-2 sm:px-3 py-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.5 + index * 0.1,
                        duration: 0.3,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {platform}
                    </motion.div>
                  ))}
                </div>

                {/* Download Status Text */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="text-sm sm:text-base font-semibold text-green-600 dark:text-green-400 mb-1">
                    數據下載中...
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    實時同步 • 無限制下載
                  </div>
                </motion.div>

                {/* Floating Data Particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-green-400 dark:bg-green-500 rounded-full"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Latest Fashion Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-xl overflow-hidden relative">
              {!imageError ? (
                <Image
                  src="/images/services/dongdaemun-mobile.jpg"
                  alt="東大門 | Korae 韓國批發"
                  fill
                  className="object-cover"
                  unoptimized
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600 items-center justify-center flex">
                  <div className="text-center p-4">
                    <div className="mb-2 flex items-center justify-center">
                      <Icon emoji="🖼️" size={40} className="text-slate-600 dark:text-slate-400" />
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 font-semibold text-sm mb-1">東大門 | Korae 韓國批發</div>
                    <div className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold mb-1 px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 rounded">
                      dongdaemun-mobile.jpg
                    </div>
                    <div className="text-[9px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                      Admin: /admin<br/>分類: 服務圖片<br/>尺寸: 1200x675
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium mb-4">
              最新日本 韓國時裝 每日同步更新
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              東大門 韓國批發 讓您以最快速度連接
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              每週更新過千款人氣 東大門 及 日本時裝、韓國傢俬、首飾、護膚品等批發貨源。我們提供純批發服務，客戶可自由選擇所需服務，無需強制綁定網店系統。所有商品數據可下載匯入您現有的銷售渠道，讓您擁有最大的靈活性。
            </p>
            <Link 
              href="https://www.orangeboxapp.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              瀏覽我們的批發商品列表
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Service Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-16 md:mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 border`}
            >
              <div className="mb-4 flex items-center justify-center">
                <Icon emoji={service.icon} size={48} className="text-slate-700 dark:text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Data Export Formats Section */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">支援多種數據格式</h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 md:mb-12 max-w-3xl mx-auto">
            付費會員可下載商品數據，支援多種格式，輕鬆匯入您現有的電商平台
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="mb-4 flex items-center justify-center">
                <Icon emoji="📄" size={48} className="text-slate-700 dark:text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">CSV 格式</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">適合 Excel 和 Google Sheets，方便編輯和管理</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="mb-4 flex items-center justify-center">
                <Icon emoji="📊" size={48} className="text-slate-700 dark:text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Excel 格式</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">包含完整商品資訊，可直接開啟編輯</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="mb-4 flex items-center justify-center">
                <Icon emoji="🔗" size={48} className="text-slate-700 dark:text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">JSON 格式</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">適合 API 整合，支援程式化處理</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg border border-slate-200 dark:border-slate-700 mb-12">
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-green-50 via-emerald-50 to-cyan-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-cyan-900/20 rounded-xl overflow-hidden relative flex items-center justify-center">
              {/* Animated Background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-cyan-400/20 dark:from-green-500/10 dark:via-emerald-500/10 dark:to-cyan-500/10 animate-gradient bg-[length:200%_auto]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]"></div>
              </div>

              {/* Price Animation Container */}
              <div className="relative z-10 text-center">
                {/* Price Labels */}
                <div className="mb-4">
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-2 font-medium">成交費</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">交易費</div>
                </div>

                {/* Animated Price Display */}
                <div className="relative h-24 sm:h-28 md:h-32 flex items-center justify-center">
                  {/* High Price (Starting) */}
                  <motion.div
                    initial={{ opacity: 1, y: 0, scale: 1 }}
                    animate={{ opacity: 0, y: -20, scale: 0.8 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute"
                  >
                    <div className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-400 dark:text-slate-600 line-through">
                      $999
                    </div>
                  </motion.div>

                  {/* Medium Price (Transition) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: [0, 1, 0], y: [20, 0, -20], scale: [0.8, 1, 0.8] }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute"
                  >
                    <div className="text-5xl sm:text-6xl md:text-7xl font-black text-amber-500 dark:text-amber-400">
                      $499
                    </div>
                  </motion.div>

                  {/* Final Price $0 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.5, type: 'spring', stiffness: 200 }}
                    className="relative"
                  >
                    <div className="text-6xl sm:text-7xl md:text-8xl font-black bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                      $0
                    </div>
                    {/* Sparkle Effect */}
                    <motion.div
                      className="absolute -top-2 -right-2 text-2xl"
                      animate={{ 
                        rotate: [0, 180, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      ✨
                    </motion.div>
                  </motion.div>
                </div>

                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 3.3 }}
                  className="mt-4"
                >
                  <div className="text-lg sm:text-xl font-bold text-green-600 dark:text-green-400">
                    全免
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    透明收費，無隱藏費用
                  </div>
                </motion.div>

                {/* Floating Elements */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-green-400 dark:bg-green-500 rounded-full"
                    style={{
                      top: `${10 + Math.random() * 80}%`,
                      left: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="inline-block px-4 py-2 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-4">
              最輕易、最簡便
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">成交費、 交易費全免，收費透明</h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Korae 提供透明度極高的收費制度，絕不再有任何隱藏收費，所有增值及強化你所選擇的計劃收費亦清晰列明，次年更免除大部份首次設置費用，令您可以優惠的價格享用沿有的服務計劃。
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            href="https://www.orangeboxapp.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
          >
            瀏覽我們的批發商品
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
