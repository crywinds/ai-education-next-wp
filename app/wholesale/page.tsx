'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import MembershipComparison from '@/components/MembershipComparison'
import Icon from '@/components/Icon'

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

function Section({ children, delay = 0, id }: { children: React.ReactNode; delay?: number; id?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={itemVariants}
      transition={{ delay }}
      className="scroll-mt-20"
    >
      {children}
    </motion.div>
  )
}

export default function WholesalePage() {
  const [activeTab, setActiveTab] = useState('intro')

  const tabs = [
    { id: 'intro', label: '服務介紹' },
    { id: 'plan', label: '會員計畫' },
    { id: 'features', label: '服務內容' },
    { id: 'products', label: '多元化批發種類' },
    { id: 'team', label: '韓國採購團隊' },
    { id: 'recommendations', label: '業界推薦' },
  ]

  const features = [
    {
      icon: '📥',
      title: '多平台數據下載（付費會員專享）',
      description: '支援 CSV、Excel、JSON 格式，批量下載商品數據（圖片、描述、價格、庫存），相容 Shopify、WooCommerce、Shopline、Shopage 等平台',
    },
    {
      icon: '📦',
      title: '每週愈 2000 件貨源更新選擇',
      description: '持續更新最新韓國、日本時裝批發貨源',
    },
    {
      icon: '🌏',
      title: '多種類批發商品、日本、韓國',
      description: '整合東大門、南大門、日韓官網貨源',
    },
    {
      icon: '📏',
      title: '詳細尺寸及物料、清洗方式資訊',
      description: '完整的商品資訊，讓您清楚了解每一件商品',
    },
    {
      icon: '✅',
      title: '進行多重品質檢驗，保證質量',
      description: '嚴格品質檢查，確保每一件商品都符合標準',
    },
    {
      icon: '🚚',
      title: '提供物流配送協助服務',
      description: '專業物流團隊，協助您處理配送事宜',
    },
  ]

  const productCategories = [
    {
      name: '韓國時裝',
      items: ['女裝', '男裝', '童裝', '配飾'],
      image: '👗',
    },
    {
      name: '日本時裝',
      items: ['日系女裝', '日系男裝', '日系配飾'],
      image: '👘',
    },
    {
      name: '韓國傢俬',
      items: ['木製傢俬', '家具', '家居用品'],
      image: '🪑',
    },
    {
      name: '護膚品',
      items: ['韓國護膚', '日本護膚', '化妝品'],
      image: '💄',
    },
    {
      name: '首飾',
      items: ['項鍊', '耳環', '手飾', '髮飾'],
      image: '💍',
    },
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
              純批發服務
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">
              純批發方案
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                簡介
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
              這個計劃適合本身已經有銷售渠道的客戶，本身有經營網絡商店的客戶優化接受申請
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-[73px] z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className={`px-4 py-4 font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Network Sales Trend Section */}
      <Section id="intro" delay={0}>
        <div className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 border border-orange-200 mb-8">
                <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
                  新冠狀病毒影響
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">網絡銷售是未來最大趨勢</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  全球過半人口禁足宅在家，網購銷量大洗牌，武漢肺炎疫情於全球爆發，近日有統計指地球近半人口都受國家禁足令限制，無法自由外出。多了時間留於家中，購物形式亦自然由逛街逛商場，轉變成網購，在一眾網上商店搜尋心水貨品。
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  立即登記我們服務，開始您的網絡銷售！
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* One Minute Intro Section */}
        <div className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                一分鐘 了解我們的批發服務
              </h2>
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                如果您本身已經在經營網絡商店，純粹想尋找供應商
              </div>
              <p className="text-2xl font-semibold text-slate-800 mb-8">
                純批發方案，可能會更適合您！
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                我們提供免費和付費兩種會員計劃。免費會員可免費註冊，瀏覽完整商品目錄並直接下單批發購買。付費會員（月費 HKD 188 或年費 HKD 1,888）額外享有數據下載功能、額外折扣、優先服務等權益。
                <br />
                <span className="font-semibold text-slate-800 dark:text-slate-200 mt-4 block">
                  我們現時與近 2000 個韓國、日本供應商品牌 / 店家合作，而且近乎每月都有新的供應商加入。我們未來更會考慮到泰國、美國、不同國家的批發商品。
                </span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 mt-2 block">
                  歡迎實體店店主或本身已在經營網絡商店的店主加入。
                </span>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Membership Plan Section */}
      <Section id="plan" delay={0.2}>
        <div className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-4">
                  透明收費・無捆綁服務
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                  會員計劃
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                  選擇最適合您的會員計劃，免費會員可隨時升級為付費會員
                </p>
              </div>

              {/* Membership Comparison Component */}
              <MembershipComparison />

              {/* Additional Info */}
              <div className="mt-12 grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
                >
                  <div className="text-3xl mb-4">💡</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">免費會員適合</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      <span>初次試用批發服務的客戶</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      <span>小規模批發商</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      <span>不需要數據下載功能的客戶</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
                >
                  <div className="mb-4 flex items-center justify-center">
                    <Icon emoji="🚀" size={40} className="text-slate-700 dark:text-slate-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">付費會員適合</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                      <span>需頻繁上架商品至自家網店的中大型批發商</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                      <span>需要批量下載商品數據的客戶</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                      <span>希望享有額外折扣和優先服務的客戶</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Grid Section */}
      <Section id="features" delay={0.3}>
        <div className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  服務內容詳情
                </h2>
                <p className="text-xl text-slate-600">
                  我們為您提供全方位的批發服務支援
                </p>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={containerVariants}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-200"
                  >
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Product Categories Section */}
      <Section id="products" delay={0.4}>
        <div className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium mb-4">
                  多元化批發種類
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  豐富的批發商品種類
                </h2>
                <p className="text-xl text-slate-600">
                  整合東大門、南大門、日韓官網貨源，提供多元化批發選擇
                </p>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={containerVariants}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {productCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-200"
                  >
                    <div className="relative aspect-video bg-slate-200 border-2 border-dashed border-slate-400 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                      <div className="text-center p-2">
                        <div className="text-2xl mb-1">{category.image}</div>
                        <div className="text-xs text-slate-500">商品圖片<br/>600x400</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Korea Team Section */}
      <Section id="team" delay={0.5}>
        <div className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  我們的韓國採購團隊
                </h2>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
                <p className="text-lg leading-relaxed mb-6 text-blue-50">
                  東大門 的 批發市場 是從晚上約 11 點開始。這裡每天都有成千上萬的人群，也有數以百萬計的貨品在各地流動。那些走過東大門之夜的人，表面上，只有稱為 批發商 和零售商的人。這種聯繫正以不同的形式連接著東大門的供應鏈，亦是現時的趨勢。
                </p>
                <p className="text-lg leading-relaxed mb-6 text-blue-50">
                  代理商當天收到的客戶訂單，信息會被發送到購物中心。我們 批發團隊 負責採購的同事要求擁有該商品的東大門批發商根據訂單提前準備，然後於晚上 11 點左右去各個商店，收取他提前要求的商品。貨物會在同一天由東大門直接運到購物中心，再寄給客戶。
                </p>
                <p className="text-lg leading-relaxed text-blue-50">
                  我們團隊會對商品進行嚴格品質檢查及提供多種物流配送支援，即使不能抽空處理大量寄送，我們亦能為您代辦出貨。
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Recommendations Section */}
      <Section id="recommendations" delay={0.6}>
        <div className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
                <div className="text-sm font-semibold text-blue-600 mb-3">業界信譽保證，多元化網絡批發平台</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  香港上海滙豐銀行、SHOPAGE 專題推薦
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  我們團隊的服務曾經被「
                  <a href="https://www.visiongo.hsbc.com.hk/zh-HK/article/online-store-product-purchasing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-medium">
                    香港上海滙豐銀行
                  </a>
                  」、「
                  <a href="https://www.shopage.org/zh/post/%E7%B6%B2%E5%BA%97%E8%B2%A8%E6%BA%90%E5%BE%9E%E4%BD%95%E4%BE%86" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-medium">
                    SHOPAGE
                  </a>
                  」推薦介紹，評價為可信性高的網絡批發平台，十分方便。
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="apply" delay={0.7}>
        <div className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-12 shadow-xl border border-slate-200">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">準備加入純批發會員？</h2>
              <p className="text-xl text-slate-600 mb-8">
                立即申請成為我們的純批發會員，開始您的批發業務
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  線上申請
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all border border-slate-200"
                >
                  了解更多
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
