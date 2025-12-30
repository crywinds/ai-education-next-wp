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
      ease: [0.4, 0, 0.2, 1] as const,
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
    description: '香港上海滙豐銀行專題推薦',
  },
  {
    name: 'SHOPAGE',
    logo: '/images/partners/shopage-logo.png',
    alt: 'SHOPAGE',
    url: 'https://www.shopage.org/zh/post/%E7%B6%B2%E5%BA%97%E8%B2%A8%E6%BA%90%E5%BE%9E%E4%BD%95%E4%BE%86',
    description: 'SHOPAGE 專題推薦',
  },
  {
    name: 'Bowtie',
    logo: '/images/partners/bowtie-logo.png',
    alt: 'Bowtie',
    url: 'https://www.bowtie.com.hk',
    description: 'Bowtie 合作夥伴',
  },
  {
    name: 'Shopline',
    logo: '/images/partners/shopline-logo.png',
    alt: 'Shopline',
    url: 'https://shopline.hk',
    description: 'Shopline 合作夥伴',
  },
  {
    name: '新城電台',
    logo: '/images/partners/metro-radio-logo.png',
    alt: '新城電台',
    url: '#',
    description: '新城電台 傑出批發平台',
  },
  {
    name: '香港電腦商會',
    logo: '/images/partners/hkcc-logo.png',
    alt: '香港電腦商會',
    url: '#',
    description: '香港電腦商會會員',
  },
  {
    name: '順豐速遞',
    logo: '/images/partners/sfexpress-logo.png',
    alt: '順豐速遞',
    url: 'https://www.sf-express.com',
    description: '順豐速遞物流合作夥伴',
  },
]

export default function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Top Text */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 dark:text-white">
              超過 50,000 人及 40+ 個企業支持
            </h3>
          </motion.div>

          {/* Partners Grid - 類似 dotai.hk 的橫向滾動佈局 */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 max-w-7xl mx-auto"
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
                  className="block bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg p-4 sm:p-6 transition-all duration-300 flex items-center justify-center group"
                >
                  <div className="relative w-24 sm:w-32 md:w-40 h-16 sm:h-20 md:h-24 flex items-center justify-center">
                    {/* 嘗試載入圖片，如果失敗則顯示佔位符 */}
                    <div className="relative w-full h-full">
                      <Image
                        src={partner.logo}
                        alt={partner.alt}
                        fill
                        className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        sizes="(max-width: 768px) 150px, 200px"
                        unoptimized
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
                            請放置 Logo<br/>參考: koraeweb.com 合作伙伴 Logo
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

