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

export default function AwardsPage() {
  const awards = [
    {
      organization: '香港電腦商會',
      award: '香港傑出數碼品牌大獎',
      category: '傑出網上批發平台',
      year: '2018',
      description: 'Korae 榮獲新城電台及香港電腦商會合辦之「香港傑出數碼品牌大獎」——傑出網上批發平台（創辦人：麥晧威先生）。',
      image: '🏆',
      color: 'blue',
    },
    {
      organization: '新城電台',
      award: '香港傑出數碼品牌大獎',
      category: '傑出網上批發平台',
      year: '2018',
      description: '新城電台評價：「在這個數碼新世代，效率至關重要。Korae 作為網上批發平台的市場領導者，一直致力為不同規模的商店提供合適且優質的商品，透過創新並緊貼市場趨勢的服務模式，提升客戶的競爭優勢。」',
      image: '📻',
      color: 'purple',
    },
    {
      organization: '星島日報',
      award: '專題訪問',
      category: '媒體報導',
      year: '2020',
      description: '星島日報專題訪問 Korae，介紹我們的批發服務和成功案例。',
      image: '📰',
      color: 'green',
    },
  ]

  const recommendations = [
    {
      organization: '香港上海滙豐銀行',
      title: '專題推薦',
      description: '我們團隊的服務曾經被香港上海滙豐銀行推薦介紹，評價為可信性高的網絡批發平台。',
      link: 'https://www.visiongo.hsbc.com.hk/zh-HK/article/online-store-product-purchasing',
      image: '🏦',
      color: 'red',
    },
    {
      organization: 'SHOPAGE',
      title: '專題推薦',
      description: 'SHOPAGE 推薦介紹我們的服務，評價為可信性高的網絡批發平台，十分方便。',
      link: 'https://www.shopage.org/zh/post/%E7%B6%B2%E5%BA%97%E8%B2%A8%E6%BA%90%E5%BE%9E%E4%BD%95%E4%BE%86',
      image: '🛍️',
      color: 'orange',
    },
    {
      organization: 'Shopline',
      title: '專題推薦',
      description: 'Shopline 專題推薦我們的批發服務，認可我們的專業和可靠性。',
      image: '💼',
      color: 'blue',
    },
    {
      organization: 'Shopbine',
      title: '專題推薦',
      description: 'Shopbine 推薦我們的批發平台，認可我們的服務品質。',
      image: '📦',
      color: 'cyan',
    },
    {
      organization: 'Bowtie',
      title: '專題推薦',
      description: 'Bowtie 專題推薦我們的服務，認可我們的專業能力。',
      image: '🎀',
      color: 'pink',
    },
    {
      organization: 'Wise',
      title: '專題推薦',
      description: 'Wise 推薦我們的批發服務，認可我們的創新和可靠性。',
      image: '💡',
      color: 'yellow',
    },
  ]

  const interviews = [
    {
      title: '韓國 CHALS 家具專訪',
      description: '與韓國 CHALS 家具品牌的專訪，介紹我們的批發合作關係。',
      image: '🪑',
      color: 'amber',
    },
    {
      title: 'ebonia 與韓國影視 | 贊助商品',
      description: '與 ebonia 及韓國影視的合作，提供贊助商品服務。',
      image: '🎬',
      color: 'indigo',
    },
  ]

  const colorClasses = {
    blue: 'from-blue-50 to-blue-100 border-blue-200',
    purple: 'from-purple-50 to-purple-100 border-purple-200',
    green: 'from-green-50 to-green-100 border-green-200',
    red: 'from-red-50 to-red-100 border-red-200',
    orange: 'from-orange-50 to-orange-100 border-orange-200',
    cyan: 'from-cyan-50 to-cyan-100 border-cyan-200',
    pink: 'from-pink-50 to-pink-100 border-pink-200',
    yellow: 'from-yellow-50 to-yellow-100 border-yellow-200',
    amber: 'from-amber-50 to-amber-100 border-amber-200',
    indigo: 'from-indigo-50 to-indigo-100 border-indigo-200',
  }

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
              業界獎項
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">
              業界認可
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                榮譽肯定
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              Korae 榮獲多項業界獎項，獲得專業機構和媒體的認可
            </p>
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Section delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                獲獎記錄
              </h2>
              <p className="text-xl text-slate-600">
                我們獲得的業界獎項和認可
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className={`bg-gradient-to-br ${colorClasses[award.color as keyof typeof colorClasses]} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border`}
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="relative w-24 h-24 bg-slate-200 border-2 border-dashed border-slate-400 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <div className="text-xs text-slate-500 text-center px-2">獎項圖片<br/>200x200</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-sm font-semibold text-slate-900">
                          {award.organization}
                        </span>
                        <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-sm font-semibold text-slate-900">
                          {award.year}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">{award.award}</h3>
                      <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-sm font-medium text-slate-700 mb-4">
                        {award.category}
                      </div>
                      <p className="text-slate-700 leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <Section delay={0.1}>
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium mb-4">
                業界信譽保證
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                專題推薦
              </h2>
              <p className="text-xl text-slate-600">
                獲得知名機構和平台的專題推薦
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {recommendations.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`bg-gradient-to-br ${colorClasses[item.color as keyof typeof colorClasses]} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border`}
                >
                  <div className="relative w-20 h-20 bg-slate-200 border-2 border-dashed border-slate-400 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <div className="text-xs text-slate-500 text-center px-2">機構 Logo<br/>200x200</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.organization}</h3>
                  <div className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm rounded-lg text-sm font-medium text-slate-700 mb-3">
                    {item.title}
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                    >
                      查看詳情
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </Section>
        </div>
      </section>

      {/* Interviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Section delay={0.2}>
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-amber-50 text-amber-600 rounded-full text-sm font-medium mb-4">
                媒體合作
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                專訪與合作
              </h2>
              <p className="text-xl text-slate-600">
                與知名品牌和媒體的合作案例
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {interviews.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`bg-gradient-to-br ${colorClasses[item.color as keyof typeof colorClasses]} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border`}
                >
                  <div className="relative aspect-video bg-slate-200 border-2 border-dashed border-slate-400 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                    <div className="text-xs text-slate-500 text-center px-2">合作圖片<br/>600x400</div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </Section>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <Section delay={0.3}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">獲得業界認可的批發平台</h2>
              <p className="text-xl text-blue-50 mb-8">
                加入我們，體驗獲得業界認可的專業批發服務
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/wholesale"
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  了解批發服務
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

