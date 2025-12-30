'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Icon from '@/components/Icon'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // 這裡應該連接到實際的表單處理服務
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: '📞',
      title: '電話',
      content: '+852 5132 2677',
      link: 'tel:+85251322677',
    },
    {
      icon: '💬',
      title: 'Whatsapp / Signal',
      content: '(+852) 5132 2677',
      link: 'https://wa.me/85251322677',
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'info@koraeweb.com',
      link: 'mailto:info@koraeweb.com',
    },
    {
      icon: '📍',
      title: '地址',
      content: '6G, Reason Group Tower, 403-413 Castle Peak Road, Kwai Chung, New Territories',
      link: '#',
    },
  ]

  const officeHours = [
    { day: 'OPEN', time: '09:00 AM - 06:00 PM' },
    { day: 'SAT', time: '09:00 AM - 12:30 PM' },
    { day: 'OFF', time: 'SUN, PUBLIC HOLIDAY' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
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
              預約諮詢
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900">
              聯絡我們
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed">
              有任何問題或建議？我們很樂意聽到您的聲音
              <br />
              <span className="text-base md:text-lg text-slate-500 mt-2 block">
                我們會協助您了解我們批發服務，過程中絕對不會有硬性銷售
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 sm:p-6 md:p-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">發送訊息</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition touch-manipulation"
                    placeholder="請輸入您的姓名"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    電話
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="請輸入您的電話"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    主題 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="請輸入主題"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    訊息 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    placeholder="請輸入您的訊息..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg"
                  >
                    感謝您的聯絡！我們會盡快回覆您。
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg"
                  >
                    發送失敗，請稍後再試。
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '發送中...' : '發送訊息'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 border border-blue-200">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">聯繫資訊</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="text-3xl flex-shrink-0">{info.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 mb-1">{info.title}</h3>
                        {info.link !== '#' ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-blue-600 hover:text-blue-700 transition"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-slate-600">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 md:p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">辦公時間</h3>
                <div className="space-y-2">
                  {officeHours.map((hour, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">{hour.day}</span>
                      <span className="text-slate-600">{hour.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-100 rounded-2xl p-6 md:p-8 border-2 border-dashed border-slate-400">
                <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-2 flex items-center justify-center">
                      <Icon emoji="🗺️" size={48} className="text-slate-600" />
                    </div>
                    <div className="text-slate-600 font-semibold mb-1">地圖位置</div>
                    <div className="text-xs text-slate-500">建議尺寸: 800x600</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-200"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">預約免費諮詢</h2>
            <p className="text-lg md:text-xl text-slate-600 mb-8">
              我們提供免費開網店諮詢，若想要預約我們的開店顧問，請在這裡登記
            </p>
            <Link
              href="https://orangebox.com.hk/applybooking/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              預約開店顧問
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
