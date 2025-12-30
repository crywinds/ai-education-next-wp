'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
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

function Section({ children, delay = 0, id }: { children: React.ReactNode; delay?: number; id?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={itemVariants}
      transition={{ delay }}
      className="scroll-mt-20"
    >
      {children}
    </motion.section>
  )
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('intro')

  const serviceFeatures = [
    {
      icon: '📥',
      title: '數據下載功能（核心）',
      description: '支援 CSV、Excel、JSON 格式，批量下載商品數據，相容 Shopify、WooCommerce 等平台（付費會員專享）',
    },
    {
      icon: '📦',
      title: '批發貨源',
      description: '每週更新過千款韓國、日本時裝批發貨源',
    },
    {
      icon: '🛍️',
      title: '網店系統（可選）',
      description: '完整的網店管理系統，包括商品展示、訂單管理、付款處理等（可選服務，無需強制綁定）',
    },
    {
      icon: '🎨',
      title: '網店設計（可選）',
      description: '專業網店設計服務，打造您專屬的品牌形象（可選服務）',
    },
    {
      icon: '🚚',
      title: '物流配送',
      description: '專業物流團隊，協助處理商品配送',
    },
    {
      icon: '✅',
      title: '品質保證',
      description: '嚴格品質檢查，確保每一件商品都符合標準',
    },
  ]

  const productCategories = [
    {
      name: '韓國時裝',
      items: ['女裝', '男裝', '童裝', '配飾', '鞋履'],
      image: '👗',
      count: '1000+',
    },
    {
      name: '日本時裝',
      items: ['日系女裝', '日系男裝', '日系配飾', '日系鞋履'],
      image: '👘',
      count: '800+',
    },
    {
      name: '韓國傢俬',
      items: ['木製傢俬', '家具', '家居用品', '裝飾品'],
      image: '🪑',
      count: '500+',
    },
    {
      name: '護膚品',
      items: ['韓國護膚', '日本護膚', '化妝品', '美容工具'],
      image: '💄',
      count: '600+',
    },
    {
      name: '首飾',
      items: ['項鍊', '耳環', '手飾', '髮飾', '戒指'],
      image: '💍',
      count: '400+',
    },
    {
      name: '其他商品',
      items: ['包包', '眼鏡', '手錶', '其他配件'],
      image: '👜',
      count: '300+',
    },
  ]

  const pricingPlans = [
    {
      name: '基礎方案',
      price: 'HKD $8,000',
      period: '年費',
      description: '適合剛開始經營網店的客戶',
      features: [
        '基本網店系統',
        '每週 1000+ 批發貨源',
        '基本網店設計',
        '品質檢查服務',
        '物流配送支援',
        '技術支援',
      ],
      popular: false,
    },
    {
      name: '標準方案',
      price: 'HKD $12,000',
      period: '年費',
      description: '適合已有一定規模的網店',
      features: [
        '完整網店系統',
        '每週 2000+ 批發貨源',
        '專業網店設計',
        '品質檢查服務',
        '物流配送支援',
        '數據分析功能',
        '優先技術支援',
        'A.I ChatGPT 接合',
      ],
      popular: true,
    },
    {
      name: '專業方案',
      price: 'HKD $18,000',
      period: '年費',
      description: '適合企業級客戶',
      features: [
        '完整網店系統',
        '每週 3000+ 批發貨源',
        '客製化網店設計',
        '品質檢查服務',
        '物流配送支援',
        '進階數據分析',
        '專屬技術支援',
        'A.I ChatGPT 接合',
        '攝影場地借用',
        '營銷策劃協助',
      ],
      popular: false,
    },
  ]

  const websiteStyles = [
    {
      name: '簡約風格',
      description: '簡潔大方的設計，適合各種商品類型',
      image: '🎨',
    },
    {
      name: '時尚風格',
      description: '現代時尚的設計，適合時裝類商品',
      image: '✨',
    },
    {
      name: '商務風格',
      description: '專業商務的設計，適合企業客戶',
      image: '💼',
    },
    {
      name: '個性化風格',
      description: '完全客製化設計，打造獨特品牌形象',
      image: '🎭',
    },
  ]

  const faqs = [
    {
      question: '網店服務是強制性的嗎？',
      answer: '不是。網店服務是可選的，客戶無需強制綁定。我們提供純批發服務，您可以選擇下載商品數據匯入您現有的 Shopify、WooCommerce 或其他電商平台。',
    },
    {
      question: 'Korae 的收費是否透明？有沒有隱藏費用？',
      answer: 'Korae 提供透明度極高的收費制度，絕不收取任何隱藏費用。所有費用清晰列明：免費會員完全免費註冊；付費會員可選擇月費 HKD 188 或年費 HKD 1,888。',
    },
    {
      question: '數據下載功能支援哪些格式？',
      answer: 'Korae 支援 CSV、Excel、JSON 三種數據格式下載。下載的數據包含商品圖片、描述、價格、庫存等完整資訊，可輕鬆匯入 Shopify、WooCommerce 或其他電商平台。',
    },
    {
      question: '網店系統包含哪些功能？',
      answer: '網店系統包括商品展示、訂單管理、付款處理、會員系統、數據分析等功能，讓您輕鬆管理網店業務。這是可選服務，客戶可自由選擇是否需要。',
    },
    {
      question: '批發貨源多久更新一次？',
      answer: '我們每週更新過千款批發貨源，包括韓國、日本時裝、傢俬、護膚品、首飾等多種類商品。',
    },
    {
      question: '如何選擇適合我的服務？',
      answer: '如果您已有網店系統（如 Shopify、WooCommerce），建議選擇純批發服務，下載商品數據匯入您現有的平台。如果您需要完整的網店解決方案，可以選擇網店 + 批發服務。',
    },
  ]

  const tabs = [
    { id: 'intro', label: '服務介紹' },
    { id: 'products', label: '多元化批發種類' },
    { id: 'pricing', label: '服務費用' },
    { id: 'features', label: '網店功能' },
    { id: 'styles', label: '網站風格' },
    { id: 'highlights', label: '我們的特色' },
    { id: 'studio', label: '攝影場地借用' },
    { id: 'ai', label: 'A.I ChatGPT 接合' },
    { id: 'faq', label: '常見問題' },
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
            <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
              可選服務
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white">
              網店 + 批發服務
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                （可選服務）
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              如果您需要網店系統，我們也提供可選的網店服務。客戶可自由選擇，無需強制綁定。我們也提供純批發服務，讓您下載商品數據匯入您現有的銷售渠道。
            </p>
            <Link
              href="#apply"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              線上申請
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
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

      {/* Service Introduction */}
      <Section id="intro" delay={0}>
        <div className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">服務介紹</h2>
                <p className="text-xl text-slate-600">
                  最輕易、最簡便的一站式服務
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">可選的網店服務</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    如果您需要網店系統，我們也提供可選的網店服務。擁有屬於您自己的個人網店，包括網址、網店名稱、網店外觀等等，全部由您決定！網上商店操作簡單，我們更設有首次設置服務，由文字擺放至設計圖片，我們都會為您一手包辦。
                  </p>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    <strong>重要提示：</strong>網店服務是可選的，無需強制綁定。如果您已有網店系統，建議選擇純批發服務，下載商品數據匯入您現有的平台。
                  </p>
                  <Link
                    href="/wholesale"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    了解純批發服務
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl shadow-xl overflow-hidden border-2 border-dashed border-slate-400">
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-4xl mb-2">🖼️</div>
                        <div className="text-slate-700 font-semibold mb-1">網店系統展示</div>
                        <div className="text-xs text-slate-500">建議尺寸: 1200x675</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-200"
                  >
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Product Categories */}
      <Section id="products" delay={0.1}>
        <div className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium mb-4">
                多元化批發種類
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                豐富的批發商品種類
              </h2>
              <p className="text-xl text-slate-600">
                每週更新過千款人氣 東大門 及 日本時裝、韓國傢俬、首飾、護膚品等批發貨源
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {productCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-5xl">{category.image}</div>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                      {category.count} 款
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm"
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
      </Section>

      {/* Pricing Plans */}
      <Section id="pricing" delay={0.2}>
        <div className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium mb-4">
                服務費用
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                成交費、 交易費全免，收費透明
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Korae 提供透明度極高的收費制度，絕不再有任何隱藏收費，所有增值及強化你所選擇的計劃收費亦清晰列明，次年更免除大部份首次設置費用，令您可以優惠的價格享用沿有的服務計劃。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white border-blue-500 scale-105'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-amber-400 text-amber-900 rounded-full text-sm font-semibold">
                      最受歡迎
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                      {plan.name}
                    </h3>
                    <div className="mb-2">
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-slate-600'}`}>
                        /{plan.period}
                      </span>
                    </div>
                    <p className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-slate-600'}`}>
                      {plan.description}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`mr-2 ${plan.popular ? 'text-white' : 'text-green-600'}`}>✓</span>
                        <span className={plan.popular ? 'text-blue-50' : 'text-slate-700'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#apply"
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-white text-blue-600 hover:bg-blue-50'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                    }`}
                  >
                    選擇方案
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Website Features */}
      <Section id="features" delay={0.3}>
        <div className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">網店功能</h2>
              <p className="text-xl text-slate-600">
                完善的管理後台，桌上電腦、平板、手機也能直時操作商店後台
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200 mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">核心功能</h3>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>商品展示與管理</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>訂單發票管理</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>付款管理系統</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>會員系統</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>庫存管理</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">進階功能</h3>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>數據分析與報表</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>廣告追蹤工具整合</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>商品數據一鍵下載</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>多語言支援</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>SEO 優化功能</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl shadow-xl overflow-hidden border-2 border-dashed border-slate-400">
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-4xl mb-2">🖼️</div>
                      <div className="text-slate-700 font-semibold mb-1">網店管理後台展示</div>
                      <div className="text-xs text-slate-500">建議尺寸: 1920x1080</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Website Styles */}
      <Section id="styles" delay={0.4}>
        <div className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">網站風格</h2>
              <p className="text-xl text-slate-600">
                多種網站風格選擇，打造您專屬的品牌形象
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {websiteStyles.map((style, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-200"
                >
                  <div className="text-5xl mb-4">{style.image}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{style.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{style.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Highlights */}
      <Section id="highlights" delay={0.5}>
        <div className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">我們的特色</h2>
              <p className="text-xl text-slate-600">
                為什麼選擇 Korae 網店 + 批發服務
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: '🎯',
                  title: '一站式服務',
                  description: '從網店設計到批發貨源，從品質檢查到物流配送，我們提供一站式完整服務。',
                },
                {
                  icon: '💰',
                  title: '成交費、交易費全免',
                  description: '透明的收費制度，絕不收取任何隱藏費用，讓您清楚了解每一項收費。',
                },
                {
                  icon: '📈',
                  title: '持續更新貨源',
                  description: '每週更新過千款最新批發貨源，讓您的網店始終保持競爭力。',
                },
                {
                  icon: '🤝',
                  title: '專業團隊支援',
                  description: '我們的專業團隊隨時為您提供協助，絕不硬性銷售，以提供合適建議為依歸。',
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
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Photography Studio */}
      <Section id="studio" delay={0.6}>
        <div className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">攝影場地借用</h2>
                <p className="text-xl text-slate-600">
                  專業方案客戶可借用我們的攝影場地
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">專業攝影場地</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    我們提供專業的攝影場地供客戶使用，配備專業燈光設備和背景，讓您輕鬆拍攝商品照片，提升商品展示效果。
                  </p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>專業燈光設備</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>多種背景選擇</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>專業攝影指導</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>預約制使用</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-xl overflow-hidden border-2 border-dashed border-slate-400">
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-4xl mb-2">🖼️</div>
                        <div className="text-slate-700 font-semibold mb-1">攝影場地</div>
                        <div className="text-xs text-slate-500">建議尺寸: 1200x675</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* AI ChatGPT Integration */}
      <Section id="ai" delay={0.7}>
        <div className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                  A.I ChatGPT 接合
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  AI 智能客服系統
                </h2>
                <p className="text-xl text-blue-50">
                  整合 ChatGPT 技術，提供智能客服服務
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">智能客服功能</h3>
                    <ul className="space-y-3 text-blue-50">
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>24/7 自動回覆客戶查詢</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>多語言支援</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>智能商品推薦</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>訂單查詢協助</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">提升效率</h3>
                    <ul className="space-y-3 text-blue-50">
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>減少客服工作量</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>即時回應客戶</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>提升客戶滿意度</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>數據分析與優化</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" delay={0.8}>
        <div className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">常見問題</h2>
                <p className="text-xl text-slate-600">
                  解答您對網店 + 批發服務的疑問
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
                  >
                    <details className="group">
                      <summary className="px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors cursor-pointer">
                        <span className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</span>
                        <svg
                          className="w-5 h-5 text-slate-500 flex-shrink-0 transition-transform group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                        <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </details>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Application Section */}
      <Section id="apply" delay={0.9}>
        <div className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-12 shadow-xl border border-slate-200">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">準備開始您的網店之旅？</h2>
              <p className="text-xl text-slate-600 mb-8">
                立即申請網店 + 批發服務，開始您的電商事業
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  線上申請
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all border border-slate-200"
                >
                  預約諮詢
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

