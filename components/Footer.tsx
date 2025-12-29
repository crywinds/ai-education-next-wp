'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const socialVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
}

function FooterSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: '-50px' })

  const popularPosts = [
    { title: '2025韓國首爾自由行必行服飾潮牌推介，漢南洞/聖水洞最新名店、JENNIE/邊佑錫代言熱門款！', date: '2025-01-02', url: '#' },
    { title: '掌握韓國Musinsa代購技巧：必買7大品牌，潮流價格低至0.7折！', date: '2024-11-26', url: '#' },
    { title: '首爾8間影韓式證件相推薦 弘大證件照介紹 2024！', date: '2024-11-11', url: '#' },
    { title: '7個復古少年風「牛仔五分褲」穿搭範本，(G)I-DLE、aespa都在穿的早秋時尚！', date: '2024-10-25', url: '#' },
    { title: '格仔恤衫熱潮回歸，跟著韓國女生展現經典不過時的復古韓系穿搭！', date: '2024-10-18', url: '#' },
  ]

  const popularTags = [
    '女裝批發', '日本時裝批發', '日韓時裝', '時裝批發', '男裝批發',
    '網拍開辦', '網站設計', '網絡商店', '網絡批發', '韓國家具批發',
    '韓國時裝批發', '韓國木製傢俬', '順豐速遞',
  ]

  const footerLinks = {
    about: [
      { label: '關於我們', href: '/about' },
      { label: '韓國批發團隊簡介', href: '/about' },
      { label: '業界獎項', href: '/about' },
      { label: '媒體影片', href: '/about' },
    ],
    services: [
      { label: '批發 + 網店服務', href: '/pricing' },
      { label: '純批發服務', href: '/pricing' },
      { label: '服務收費', href: '/pricing' },
      { label: '人才招募', href: '/about' },
    ],
    resources: [
      { label: '最新消息', href: '/blog' },
      { label: '批發商品列表', href: 'https://www.orangeboxapp.com' },
      { label: '預約諮詢', href: '/contact' },
      { label: '常見問題', href: '/#faq' },
    ],
  }

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/orangeboxhk', icon: 'twitter' },
    { name: 'Facebook', href: 'https://www.facebook.com/orangeboxhk/', icon: 'facebook' },
    { name: 'YouTube', href: 'https://www.youtube.com/orangeboxhk', icon: 'youtube' },
    { name: 'Instagram', href: 'https://www.instagram.com/orangebox.wholesale/', icon: 'instagram' },
  ]

  return (
    <footer ref={footerRef} className="bg-slate-900 dark:bg-slate-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      {/* Main Footer Content */}
          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12"
            >
          {/* Brand Section with Image */}
          <FooterSection delay={0}>
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Korae
                </h3>
              </Link>
              <p className="text-slate-300 dark:text-slate-400 mb-6 leading-relaxed max-w-md">
                我們團隊致力讓您從網絡遊覽韓國東大門時裝批發市場，協助您輕鬆一站式打造你個人專屬的完整網店。
              </p>
              
              {/* Placeholder Image */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative w-full max-w-sm h-48 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-3xl mb-2">🏪</div>
                    <div className="text-sm font-semibold text-blue-300">Korae 韓國批發</div>
                    <div className="text-xs text-blue-400/70 mt-1">一站式批發平台</div>
                  </div>
                </div>
                {/* 參考: koraeweb.com Footer 背景圖片 */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 opacity-20 group-hover:opacity-30 transition-opacity"></div>
              </motion.div>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={socialVariants}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 sm:w-10 sm:h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors touch-manipulation"
                    aria-label={social.name}
                  >
                    {social.icon === 'twitter' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    )}
                    {social.icon === 'facebook' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                    {social.icon === 'youtube' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    )}
                    {social.icon === 'instagram' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </FooterSection>

          {/* Quick Links */}
          <FooterSection delay={0.1}>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">關於我們</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.about.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Link href={link.href} className="text-xs sm:text-sm text-slate-300 hover:text-blue-400 transition-colors block py-1 touch-manipulation">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FooterSection>

          {/* Services */}
          <FooterSection delay={0.2}>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">服務</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Link href={link.href} className="text-xs sm:text-sm text-slate-300 hover:text-blue-400 transition-colors block py-1 touch-manipulation">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FooterSection>

          {/* Resources */}
          <FooterSection delay={0.3}>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">資源</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-xs sm:text-sm text-slate-300 hover:text-blue-400 transition-colors block py-1 touch-manipulation"
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FooterSection>
        </motion.div>

        {/* Popular Posts & Tags Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12 pt-8 sm:pt-12 border-t border-slate-800"
        >
          {/* Popular Posts */}
          <FooterSection delay={0.4}>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">熱門文章</h4>
              <ul className="space-y-3 sm:space-y-4">
                {popularPosts.map((post, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <Link href={post.url} className="block touch-manipulation">
                      <p className="text-xs sm:text-sm text-slate-300 group-hover:text-blue-400 transition-colors mb-1 line-clamp-2">
                        {post.title}
                      </p>
                      <span className="text-xs text-slate-500">{post.date}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FooterSection>

          {/* Popular Tags */}
          <FooterSection delay={0.5}>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">熱門搜尋</h4>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={`/tag/${tag}`}
                      className="px-3 py-1.5 bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white rounded-lg text-xs transition-colors"
                    >
                      {tag}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </FooterSection>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={itemVariants}
          transition={{ delay: 0.6 }}
          className="pt-12 border-t border-slate-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">聯繫我們</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <p>聯繫電話 : +852 5132 2677</p>
                <p>Whatsapp / Signal 查詢 : (+852) 5132 2677</p>
                <div className="space-y-1 mt-4">
                  <p>OPEN / 09:00 AM - 06:00 PM</p>
                  <p>SAT / 09:00 AM - 12:30 PM</p>
                  <p>OFF / SUN, PUBLIC HOLIDAY</p>
                </div>
                <p className="mt-4">
                  辦工室地址 : 6G, Reason Group Tower, 403-413 Castle Peak Road, Kwai Chung, New Territories
                </p>
              </div>
            </div>
            
            {/* Placeholder Image for Contact */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 to-blue-600/30 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl mb-3">📞</div>
                  <div className="text-lg font-semibold text-cyan-300 mb-1">聯繫我們</div>
                  <div className="text-sm text-cyan-400/70">Contact Us</div>
                </div>
              </div>
              {/* 參考: koraeweb.com 聯繫我們圖片 */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 to-blue-600/30 opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.7 }}
        className="border-t border-slate-800 bg-slate-950"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © 2016-2026 Clickbala Network Limited. (公司註冊編號 CR No. 2280747) 版權所有
            </p>
            <div className="flex gap-6">
              <Link href="/about" className="text-sm text-slate-400 hover:text-blue-400 transition">
                關於我們
              </Link>
              <Link href="/contact" className="text-sm text-slate-400 hover:text-blue-400 transition">
                聯絡我們
              </Link>
              <Link href="/pricing" className="text-sm text-slate-400 hover:text-blue-400 transition">
                服務費用
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
