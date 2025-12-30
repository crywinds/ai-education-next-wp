'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
}

function Section({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={itemVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export default function MediaPage() {
  const videos = [
    {
      title: 'Korae 批發服務介紹',
      description: '了解我們的批發服務如何幫助客戶開展業務',
      thumbnail: 'https://via.placeholder.com/600x400/1e293b/64748b?text=批發服務介紹',
      duration: '5:30',
      category: '服務介紹',
    },
    {
      title: '韓國東大門採購實況',
      description: '跟隨我們的採購團隊，深入了解東大門批發市場',
      thumbnail: 'https://via.placeholder.com/600x400/1e293b/64748b?text=東大門採購',
      duration: '8:15',
      category: '實地採訪',
    },
    {
      title: '客戶成功案例分享',
      description: '聽聽我們的客戶如何成功開展批發業務',
      thumbnail: 'https://via.placeholder.com/600x400/1e293b/64748b?text=客戶案例',
      duration: '6:45',
      category: '客戶見證',
    },
    {
      title: '網店系統功能演示',
      description: '了解我們的網店系統如何幫助您管理業務',
      thumbnail: 'https://via.placeholder.com/600x400/1e293b/64748b?text=網店系統',
      duration: '10:20',
      category: '產品演示',
    },
    {
      title: '品質檢查流程',
      description: '了解我們如何確保每一件商品的品質',
      thumbnail: 'https://via.placeholder.com/600x400/1e293b/64748b?text=品質檢查',
      duration: '4:30',
      category: '服務流程',
    },
    {
      title: '團隊介紹',
      description: '認識我們的專業團隊成員',
      thumbnail: 'https://via.placeholder.com/600x400/1e293b/64748b?text=團隊介紹',
      duration: '7:00',
      category: '團隊介紹',
    },
  ]

  const mediaCategories = [
    { name: '全部', count: videos.length },
    { name: '服務介紹', count: 1 },
    { name: '實地採訪', count: 1 },
    { name: '客戶見證', count: 1 },
    { name: '產品演示', count: 1 },
    { name: '服務流程', count: 1 },
    { name: '團隊介紹', count: 1 },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0)_1px,transparent_0)] bg-[length:40px_40px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
              媒體影片
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">
              媒體影片
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                與報導
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              透過影片了解我們的服務、團隊和成功案例
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Section delay={0}>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {mediaCategories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 rounded-lg font-medium transition-all"
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-70">({category.count})</span>
                </motion.button>
              ))}
            </div>

            {/* Video Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-slate-200 group cursor-pointer"
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden border-2 border-dashed border-slate-400">
                    <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-4xl mb-2">🎬</div>
                        <div className="text-slate-700 font-semibold mb-1">影片縮圖</div>
                        <div className="text-xs text-slate-500">建議尺寸: 1280x720</div>
                      </div>
                    </div>
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                      >
                        <svg className="w-10 h-10 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </motion.div>
                    </div>
                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded">
                      {video.duration}
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">
                      {video.category}
                    </div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{video.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Section>
        </div>
      </section>

      {/* Media Coverage Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <Section delay={0.1}>
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium mb-4">
                媒體報導
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                媒體報導與專訪
              </h2>
              <p className="text-xl text-slate-600">
                看看媒體如何報導我們的服務和成就
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
              {[
                {
                  media: '新城電台',
                  title: '專題訪問',
                  description: '新城電台專題訪問 Korae，介紹我們的批發服務和市場領導地位。',
                  date: '2018',
                  image: '📻',
                },
                {
                  media: '星島日報',
                  title: '專題報導',
                  description: '星島日報專題報導我們的批發服務和成功案例。',
                  date: '2020/3/17',
                  image: '📰',
                },
                {
                  media: '香港上海滙豐銀行',
                  title: '專題推薦',
                  description: '香港上海滙豐銀行專題推薦我們的批發平台服務。',
                  date: '2020',
                  image: '🏦',
                },
                {
                  media: 'SHOPAGE',
                  title: '專題推薦',
                  description: 'SHOPAGE 專題推薦我們的批發服務，評價為可信性高的網絡批發平台。',
                  date: '2020',
                  image: '🛍️',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative w-20 h-20 bg-slate-200 border-2 border-dashed border-slate-400 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <div className="text-xs text-slate-500 text-center px-2">媒體 Logo<br/>200x200</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                          {item.media}
                        </span>
                        <span className="text-sm text-slate-500">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Section delay={0.2}>
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-12 border border-red-200">
              <div className="text-6xl mb-6">📺</div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">訂閱我們的 YouTube 頻道</h2>
              <p className="text-xl text-slate-600 mb-8">
                訂閱我們的 YouTube 頻道，獲取最新的影片內容和更新
              </p>
              <a
                href="https://www.youtube.com/orangeboxhk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                前往 YouTube 頻道
              </a>
            </div>
          </Section>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <Section delay={0.3}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">想了解更多？</h2>
              <p className="text-xl text-blue-50 mb-8">
                觀看我們的影片，深入了解我們的服務和團隊
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/about"
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  了解我們的團隊
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  聯絡我們
                </Link>
              </div>
            </div>
          </Section>
        </div>
      </section>
    </div>
  )
}

