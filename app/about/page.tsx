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
      ease: 'easeOut',
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

export default function AboutPage() {
  const teamMembers = [
    {
      name: '麥晧威先生',
      role: '創辦人',
      description: 'Korae 創辦人，榮獲「香港傑出數碼品牌大獎」——傑出網上批發平台。',
      image: '👨‍💼',
      achievements: ['香港傑出數碼品牌大獎', '10+ 年批發行業經驗'],
    },
    {
      name: '韓國採購團隊',
      role: '專業買手',
      description: '駐紮韓國東大門市場，每日為客戶精選最新時裝及批發貨源。',
      image: '👔',
      achievements: ['東大門市場深度了解', '每週更新過千款商品'],
    },
    {
      name: '品質檢查團隊',
      role: '品質保證',
      description: '嚴格檢查每一件商品品質，確保客戶收到最優質的批發貨源。',
      image: '🔍',
      achievements: ['100% 品質檢查', '專業物流配送'],
    },
    {
      name: '客戶服務團隊',
      role: '客戶支援',
      description: '提供專業諮詢服務，協助客戶開展批發業務，絕不硬性銷售。',
      image: '💬',
      achievements: ['7x24 小時支援', '專業開店顧問'],
    },
  ]

  const values = [
    {
      icon: '💎',
      title: '透明收費',
      description: '採用按使用付費或單項服務模式，無隱藏費用、無捆綁服務',
    },
    {
      icon: '🔄',
      title: '數據靈活性',
      description: '支援多平台數據導出（CSV、Excel、JSON），讓客戶自由選擇銷售渠道',
    },
    {
      icon: '✅',
      title: '品質保證',
      description: '嚴格品質檢查，確保每一件商品都符合標準',
    },
    {
      icon: '🤝',
      title: '客戶至上',
      description: '以客戶需求為中心，提供最優質的服務體驗，絕不硬性銷售',
    },
  ]

  const stats = [
    { number: '10+', label: '年專業經驗' },
    { number: '1000+', label: '合作客戶' },
    { number: '40+', label: '企業支持' },
    { number: '1000+', label: '每週更新商品' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
        {/* Background Pattern */}
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
              韓國批發團隊簡介
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">
              專業團隊
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                為您服務
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
              我們團隊致力讓您從網絡遊覽韓國東大門時裝批發市場，
              <br />
              提供透明收費、無捆綁服務，支援多平台數據下載，讓您自由選擇銷售渠道
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <Section delay={0}>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
                我們的團隊
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                專業團隊成員
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                由經驗豐富的專業人士組成，為您提供最優質的批發服務
              </p>
            </div>
          </Section>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center text-4xl flex-shrink-0 overflow-hidden border-2 border-dashed border-slate-400">
                    <div className="relative w-full h-full bg-slate-200 flex items-center justify-center">
                      <div className="text-xs text-slate-500 text-center px-1">團隊照片<br/>200x200</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
                      {member.role}
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">{member.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Section delay={0.2}>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium mb-4">
                我們的價值觀
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                核心價值
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                這些價值觀指引著我們為客戶提供最優質的服務
              </p>
            </div>
          </Section>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-200 text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <Section delay={0.3}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                我們的故事
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                從 OrangeBox 到 Korae 的卓越傳承
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-blue-50">
                <p>
                  Korae 延續 OrangeBox 的卓越傳統，於 2026 年全新出發，致力提供更優質、更透明的價格及服務，涵蓋亞洲地區客戶需求。
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">重組動機與目標</h3>
                  <p className="mb-4">
                    為回應市場需求，我們決定重組業務，建立獨立品牌 Korae。重點改善包括：
                  </p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start">
                      <span className="text-white mr-2">✓</span>
                      <span><strong>收費透明</strong>：採用按使用付費或單項服務模式，無隱藏捆綁費用</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">✓</span>
                      <span><strong>數據靈活性</strong>：支援多平台數據導出（CSV、Excel、JSON），讓客戶自由選擇銷售渠道</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">✓</span>
                      <span><strong>無捆綁服務</strong>：客戶可自由選擇所需服務，無需強制綁定網店系統或物流服務</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">目標用戶</h3>
                  <p>
                    主要面向香港、台灣及海外的網店創業者和批發商，預計初期用戶規模為數百至千名。無論是初次試用的小規模批發商，還是需要頻繁上架商品至自家網店的中大型批發商，Korae 都能提供適合的服務方案。
                  </p>
                </div>
                <p>
                  <strong className="text-white">榮譽肯定</strong> Korae 前身 OrangeBox 榮獲新城電台及香港電腦商會合辦之「香港傑出數碼品牌大獎」——傑出網上批發平台（創辦人：麥晧威先生）。
                </p>
                <blockquote className="border-l-4 border-white/50 pl-6 italic text-xl">
                  「在這個數碼新世代，效率至關重要。Korae 作為網上批發平台的市場領導者，一直致力為不同規模的商店提供合適且優質的商品，透過創新並緊貼市場趨勢的服務模式，提升客戶的競爭優勢。」
                  <footer className="mt-4 text-base not-italic text-blue-100">— 新城電台評價</footer>
                </blockquote>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <Section delay={0.4}>
            <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-12 shadow-xl border border-slate-200">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">準備開始您的批發之旅？</h2>
              <p className="text-xl text-slate-600 mb-8">
                我們的專業團隊隨時為您提供協助，讓您輕鬆開展批發業務
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  預約諮詢
                </Link>
                <Link
                  href="https://www.orangeboxapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all border border-slate-200"
                >
                  瀏覽批發商品
                </Link>
              </div>
            </div>
          </Section>
        </div>
      </section>
    </div>
  )
}
