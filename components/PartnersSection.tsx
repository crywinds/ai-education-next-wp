'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

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
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

// 合作伙伴數據 - 圖片路徑使用相對路徑，圖片應放在 public/images/partners/ 目錄
const partners = [
  {
    name: '滙豐銀行',
    logo: '/images/partners/hsbc-logo.png',
    alt: '香港上海滙豐銀行',
    url: 'https://www.visiongo.hsbc.com.hk/zh-HK/article/online-store-product-purchasing',
  },
  {
    name: 'SHOPAGE',
    logo: '/images/partners/shopage-logo.png',
    alt: 'SHOPAGE',
    url: 'https://www.shopage.org/zh/post/%E7%B6%B2%E5%BA%97%E8%B2%A8%E6%BA%90%E5%BE%9E%E4%BD%95%E4%BE%86',
  },
  {
    name: '順豐速遞',
    logo: '/images/partners/sfexpress-logo.png',
    alt: '順豐速遞',
    url: 'https://www.sf-express.com',
  },
  {
    name: '新城電台',
    logo: '/images/partners/metro-radio-logo.png',
    alt: '新城電台',
    url: '#',
  },
  {
    name: '香港電腦商會',
    logo: '/images/partners/hkcc-logo.png',
    alt: '香港電腦商會',
    url: '#',
  },
  // 可以添加更多合作伙伴
]

export default function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
              長期合作夥伴
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              合作伙伴
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              與我們 Korae 團隊一直合作的機構
            </p>
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group"
              >
                <a
                  href={partner.url}
                  target={partner.url !== '#' ? '_blank' : undefined}
                  rel={partner.url !== '#' ? 'noopener noreferrer' : undefined}
                  className="block bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full flex items-center justify-center"
                >
                  <div className="relative w-full h-20 flex items-center justify-center">
                    {/* 嘗試載入圖片，如果失敗則顯示佔位符 */}
                    <div className="relative w-full h-full">
                      <Image
                        src={partner.logo}
                        alt={partner.alt}
                        fill
                        className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        sizes="(max-width: 768px) 150px, 200px"
                        onError={(e) => {
                          // 如果圖片載入失敗，顯示佔位符
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          const placeholder = target.parentElement?.querySelector('.partner-placeholder') as HTMLElement
                          if (placeholder) {
                            placeholder.style.display = 'flex'
                          }
                        }}
                      />
                      {/* 佔位符 - 當圖片不存在時顯示 */}
                      <div
                        className="partner-placeholder hidden w-full h-full items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-600 absolute inset-0"
                      >
                        <div className="text-center p-2">
                          <div className="text-2xl mb-1">🏢</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                            {partner.name}
                          </div>
                          <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                            請放置 Logo
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Info Note */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400"
          >
            <p>
              圖片應放置在 <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">public/images/partners/</code> 目錄下
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

