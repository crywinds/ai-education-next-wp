'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
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

export default function CareersPage() {
  const positions = [
    {
      title: '韓國採購專員',
      department: '採購部',
      location: '韓國首爾 / 香港',
      type: '全職',
      description: '負責韓國東大門市場的批發商品採購，與供應商建立良好關係，確保商品品質和及時交付。',
      requirements: [
        '熟悉韓國批發市場運作',
        '良好的韓語溝通能力',
        '2年以上採購經驗',
        '能適應夜間工作（東大門市場晚上11點開始）',
      ],
      benefits: [
        '具競爭力的薪酬',
        '年終獎金',
        '醫療保險',
        '培訓發展機會',
      ],
    },
    {
      title: '客戶服務專員',
      department: '客戶服務部',
      location: '香港',
      type: '全職',
      description: '為客戶提供專業的批發服務諮詢，協助客戶開展批發業務，絕不硬性銷售。',
      requirements: [
        '良好的溝通技巧',
        '客戶服務經驗',
        '細心、有耐心',
        '能處理多任務工作',
      ],
      benefits: [
        '固定工作時間',
        '醫療保險',
        '團隊建設活動',
        '職業發展機會',
      ],
    },
    {
      title: '品質檢查專員',
      department: '品質保證部',
      location: '香港',
      type: '全職',
      description: '負責檢查批發商品的品質，確保每一件商品都符合標準，維護品牌聲譽。',
      requirements: [
        '對時裝/商品品質有敏銳觸覺',
        '細心、負責任',
        '相關工作經驗優先',
        '能承受工作壓力',
      ],
      benefits: [
        '穩定工作環境',
        '醫療保險',
        '培訓機會',
        '團隊合作文化',
      ],
    },
    {
      title: '網店開發工程師',
      department: '技術部',
      location: '香港',
      type: '全職 / 兼職',
      description: '負責開發和維護網店系統，優化用戶體驗，整合批發商品數據。',
      requirements: [
        '熟悉 Next.js / React',
        '有網店開發經驗',
        '了解 WordPress API',
        '良好的問題解決能力',
      ],
      benefits: [
        '彈性工作時間',
        '遠程工作選項',
        '技術培訓',
        '創新項目機會',
      ],
    },
  ]

  const whyJoinUs = [
    {
      icon: '🚀',
      title: '快速成長',
      description: '加入快速發展的批發平台，與團隊一起成長',
    },
    {
      icon: '💼',
      title: '專業發展',
      description: '提供培訓和發展機會，提升您的專業技能',
    },
    {
      icon: '🤝',
      title: '團隊合作',
      description: '友善的工作環境，重視團隊合作和溝通',
    },
    {
      icon: '⭐',
      title: '業界認可',
      description: '榮獲多項業界獎項，是值得信賴的品牌',
    },
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
              人才招募
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">
              加入我們的
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                專業團隊
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              我們正在尋找有熱忱、有才華的夥伴，一起推動批發數碼化的未來
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Section delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                為什麼選擇我們
              </h2>
              <p className="text-xl text-slate-600">
                加入一個充滿機會和成長的團隊
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {whyJoinUs.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-200 text-center"
                >
                  <div className="mb-4 flex items-center justify-center">
                    <Icon emoji={item.icon} size={48} className="text-slate-700 dark:text-slate-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </Section>
        </div>
      </section>

      {/* Job Positions Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <Section delay={0.1}>
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium mb-4">
                職位空缺
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                正在招聘的職位
              </h2>
              <p className="text-xl text-slate-600">
                查看我們目前開放的職位，找到適合您的機會
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {positions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      {/* Job Image Placeholder */}
                      <div className="relative w-full md:w-32 h-32 bg-slate-200 border-2 border-dashed border-slate-400 rounded-lg mb-4 md:mb-0 md:float-right md:ml-4 flex items-center justify-center">
                        <div className="text-xs text-slate-500 text-center px-2">職位圖片<br/>300x300</div>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                          {position.department}
                        </span>
                        <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">
                          {position.location}
                        </span>
                        <span className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm font-medium">
                          {position.type}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{position.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">職位要求</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, i) => (
                          <li key={i} className="flex items-start text-slate-600">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">福利待遇</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-slate-600">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      立即申請
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Section delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  申請流程
                </h2>
                <p className="text-xl text-slate-600">
                  簡單的申請流程，讓我們快速了解彼此
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: '1', title: '提交申請', description: '填寫申請表單並附上履歷' },
                  { step: '2', title: '初步篩選', description: '我們會審閱您的申請資料' },
                  { step: '3', title: '面試', description: '與團隊成員進行面試交流' },
                  { step: '4', title: '加入團隊', description: '歡迎加入我們的大家庭' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <Section delay={0.3}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">沒有看到適合的職位？</h2>
              <p className="text-xl text-blue-50 mb-8">
                我們歡迎有才華的人才隨時與我們聯繫，即使目前沒有合適的職位，我們也會將您的資料保存，當有合適機會時會主動聯繫您。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                主動聯繫我們
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Section>
        </div>
      </section>
    </div>
  )
}

