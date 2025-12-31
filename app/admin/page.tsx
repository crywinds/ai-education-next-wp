'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import Icon from '@/components/Icon'

interface ImageInfo {
  path: string
  category: string
  filename: string
  size?: number
}

interface ImageFile {
  filename: string
  size?: string // 建議尺寸，例如 "1920x1080"
  description?: string // 圖片說明
}

interface ImageCategory {
  id: string
  name: string
  path: string
  files: ImageFile[]
  defaultSize?: string // 該分類的默認尺寸
}

const imageCategories: ImageCategory[] = [
  // Logo
  { 
    id: 'logo', 
    name: 'Logo', 
    path: '/images/logo/', 
    defaultSize: '300x150',
    files: [
      { filename: 'korae-logo.png', size: '300x150', description: 'Korae 主 Logo（透明背景 PNG，淺色模式）' },
      { filename: 'korae-logo-dark.png', size: '300x150', description: 'Korae 主 Logo 黑夜模式（透明背景 PNG，深色模式）' }
    ] 
  },
  
  // 首頁
  { 
    id: 'hero', 
    name: 'Hero 背景圖片', 
    path: '/images/hero/', 
    defaultSize: '1920x1080',
    files: [
      { filename: 'hero-background.jpg', size: '1920x1080', description: '首頁 Hero 區塊背景圖（寬屏橫向）' }
    ] 
  },
  { 
    id: 'partners', 
    name: '合作伙伴 Logo', 
    path: '/images/partners/', 
    defaultSize: '300x150',
    files: [
      { filename: 'hsbc-logo.png', size: '300x150', description: '香港上海滙豐銀行 Logo（透明背景）' },
      { filename: 'shopage-logo.png', size: '300x150', description: 'SHOPAGE Logo（透明背景）' },
      { filename: 'bowtie-logo.png', size: '300x150', description: 'Bowtie Logo（透明背景）' },
      { filename: 'shopline-logo.png', size: '300x150', description: 'Shopline Logo（透明背景）' },
      { filename: 'metro-radio-logo.png', size: '300x150', description: '新城電台 Logo（透明背景）' },
      { filename: 'hkcc-logo.png', size: '300x150', description: '香港電腦商會 Logo（透明背景）' },
      { filename: 'sfexpress-logo.png', size: '300x150', description: '順豐速遞 Logo（透明背景）' }
    ] 
  },
  { 
    id: 'testimonials', 
    name: '客戶見證', 
    path: '/images/testimonials/', 
    defaultSize: '400x300',
    files: [
      { filename: 'testimonial-1.jpg', size: '400x300', description: '客戶見證圖片 1（人物照片）' },
      { filename: 'testimonial-2.jpg', size: '400x300', description: '客戶見證圖片 2（人物照片）' },
      { filename: 'testimonial-3.jpg', size: '400x300', description: '客戶見證圖片 3（人物照片）' }
    ] 
  },
  
  // 韓國批發團隊簡介 (about)
  { 
    id: 'about', 
    name: '關於我們 - 團隊照片', 
    path: '/images/about/', 
    defaultSize: '400x400',
    files: [
      { filename: 'team-1.jpg', size: '400x400', description: '團隊成員照片 1（正方形）' },
      { filename: 'team-2.jpg', size: '400x400', description: '團隊成員照片 2（正方形）' },
      { filename: 'team-3.jpg', size: '400x400', description: '團隊成員照片 3（正方形）' },
      { filename: 'team-4.jpg', size: '400x400', description: '團隊成員照片 4（正方形）' },
      { filename: 'team-5.jpg', size: '400x400', description: '團隊成員照片 5（正方形）' },
      { filename: 'team-6.jpg', size: '400x400', description: '團隊成員照片 6（正方形）' }
    ] 
  },
  // 關於我們區塊圖片 (about-section)
  { 
    id: 'about-section', 
    name: '關於我們 - 區塊圖片', 
    path: '/images/about/', 
    defaultSize: '800x600',
    files: [
      { filename: 'about-section-1.jpg', size: '800x600', description: '關於我們區塊圖片 1（橫向）' },
      { filename: 'about-section-2.jpg', size: '800x600', description: '關於我們區塊圖片 2（橫向）' },
      { filename: 'about-section-3.jpg', size: '800x600', description: '關於我們區塊圖片 3（橫向）' }
    ] 
  },
  
  // 批發+網店服務 (services)
  { 
    id: 'services', 
    name: '服務圖片', 
    path: '/images/services/', 
    defaultSize: '1200x675',
    files: [
      { filename: 'dongdaemun-mobile.jpg', size: '1200x675', description: '東大門批發網站手機版截圖' },
      { filename: 'service-fee.jpg', size: '1200x675', description: '服務收費說明圖' },
      { filename: 'website-showcase.jpg', size: '1200x675', description: '網站展示截圖' },
      { filename: 'admin-dashboard.jpg', size: '1200x675', description: '後台管理系統截圖' },
      { filename: 'photography-studio.jpg', size: '1200x675', description: '攝影工作室照片' }
    ] 
  },
  
  // 純批發服務 (wholesale)
  { 
    id: 'wholesale', 
    name: '批發商品圖片', 
    path: '/images/wholesale/', 
    defaultSize: '1200x800',
    files: [
      { filename: 'korea-fashion.jpg', size: '1200x800', description: '韓國時尚商品照片' },
      { filename: 'japan-fashion.jpg', size: '1200x800', description: '日本時尚商品照片' },
      { filename: 'korea-furniture.jpg', size: '1200x800', description: '韓國家具商品照片' },
      { filename: 'skincare.jpg', size: '1200x800', description: '護膚品商品照片' },
      { filename: 'jewelry.jpg', size: '1200x800', description: '珠寶商品照片' }
    ] 
  },
  
  // 人才招募 (careers)
  { 
    id: 'careers', 
    name: '職位圖片', 
    path: '/images/careers/', 
    defaultSize: '800x600',
    files: [
      { filename: 'position-procurement.jpg', size: '800x600', description: '採購職位相關圖片' },
      { filename: 'position-customer-service.jpg', size: '800x600', description: '客服職位相關圖片' },
      { filename: 'position-quality.jpg', size: '800x600', description: '質檢職位相關圖片' },
      { filename: 'position-developer.jpg', size: '800x600', description: '開發職位相關圖片' }
    ] 
  },
  
  // 業界獎項 (awards)
  { 
    id: 'awards', 
    name: '獎項圖片', 
    path: '/images/awards/', 
    defaultSize: '400x400',
    files: [
      { filename: 'metro-radio-award.png', size: '400x400', description: '新城電台 傑出批發平台獎項（正方形）' },
      { filename: 'hk-digital-brand-2018.png', size: '400x400', description: '香港數碼品牌 2018 獎項（正方形）' },
      { filename: 'award-brand.png', size: '400x400', description: '得獎品牌標誌（正方形）' },
      { filename: 'outstanding-platform.png', size: '400x400', description: '傑出網上批發平台獎項（正方形）' },
      { filename: 'chals-interview.jpg', size: '800x600', description: 'CHALS 訪問照片' },
      { filename: 'ebonia-sponsor.jpg', size: '800x600', description: 'EBONIA 贊助活動照片' }
    ] 
  },
  
  // 媒體影片 (media)
  { 
    id: 'media', 
    name: '媒體影片縮圖', 
    path: '/images/media/', 
    defaultSize: '1280x720',
    files: [
      { filename: 'video-wholesale-intro.jpg', size: '1280x720', description: '批發介紹影片縮圖（16:9）' },
      { filename: 'video-dongdaemun.jpg', size: '1280x720', description: '東大門影片縮圖（16:9）' },
      { filename: 'video-customer-case.jpg', size: '1280x720', description: '客戶案例影片縮圖（16:9）' },
      { filename: 'video-website-demo.jpg', size: '1280x720', description: '網站演示影片縮圖（16:9）' },
      { filename: 'video-quality-check.jpg', size: '1280x720', description: '質檢流程影片縮圖（16:9）' },
      { filename: 'video-team-intro.jpg', size: '1280x720', description: '團隊介紹影片縮圖（16:9）' }
    ] 
  },
  { 
    id: 'media-logos', 
    name: '媒體 Logo', 
    path: '/images/media/logos/', 
    defaultSize: '300x150',
    files: [
      { filename: 'metro-radio-logo.png', size: '300x150', description: '新城電台 Logo（透明背景）' },
      { filename: 'singtao-logo.png', size: '300x150', description: '星島日報 Logo（透明背景）' },
      { filename: 'hsbc-logo.png', size: '300x150', description: '滙豐銀行 Logo（透明背景）' },
      { filename: 'shopage-logo.png', size: '300x150', description: 'SHOPAGE Logo（透明背景）' }
    ] 
  },
  
  // 預約諮詢 (contact)
  { 
    id: 'contact', 
    name: '聯絡頁面', 
    path: '/images/contact/', 
    defaultSize: '1200x600',
    files: [
      { filename: 'map-location.jpg', size: '1200x600', description: '地圖位置截圖（寬屏橫向）' }
    ] 
  },
]

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [uploading, setUploading] = useState<Record<string, boolean>>({})
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({})
  const [deleting, setDeleting] = useState<Record<string, boolean>>({})
  const [imageExists, setImageExists] = useState<Record<string, boolean>>({})
  const [imageRefreshKey, setImageRefreshKey] = useState<Record<string, number>>({})
  const [activeTab, setActiveTab] = useState<'images' | 'badges'>('images')
  const [checkingImages, setCheckingImages] = useState(true)
  const [badges, setBadges] = useState<any[]>([])
  const [editingBadge, setEditingBadge] = useState<number | null>(null)
  const [savingBadges, setSavingBadges] = useState(false)

  useEffect(() => {
    // 檢查是否已登錄
    const authStatus = localStorage.getItem('admin_authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
      // 檢查所有圖片是否存在
      imageCategories.forEach(category => {
        category.files.forEach(fileInfo => {
          const filename = typeof fileInfo === 'string' ? fileInfo : fileInfo.filename
          checkImageExists(category.id, filename)
        })
      })
      // 載入徽章數據
      loadBadges()
    }
  }, [])

  const loadBadges = async () => {
    try {
      const response = await fetch('/api/admin/badges')
      const data = await response.json()
      if (data.success && data.data?.badges) {
        setBadges(data.data.badges)
      }
    } catch (error) {
      console.error('Failed to load badges:', error)
    }
  }

  const handleSaveBadges = async () => {
    setSavingBadges(true)
    try {
      const authToken = localStorage.getItem('admin_authenticated') === 'true' ? 'Bearer admin' : ''
      const response = await fetch('/api/admin/badges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authToken,
        },
        body: JSON.stringify({ badges }),
      })
      const data = await response.json()
      if (data.success) {
        alert('徽章已保存！')
      } else {
        alert(`保存失敗: ${data.message}`)
      }
    } catch (error) {
      alert('保存失敗，請稍後再試')
    } finally {
      setSavingBadges(false)
    }
  }

  const handleAddBadge = () => {
    const newBadge = {
      id: Date.now(),
      text: '✨ 新徽章',
      position: { top: '0', left: '10%' },
      animation: 'bounce-gentle',
    }
    setBadges([...badges, newBadge])
  }

  const handleDeleteBadge = (id: number) => {
    if (confirm('確定要刪除這個徽章嗎？')) {
      setBadges(badges.filter(badge => badge.id !== id))
    }
  }

  const handleUpdateBadge = (id: number, field: string, value: any) => {
    setBadges(badges.map(badge => 
      badge.id === id ? { ...badge, [field]: value } : badge
    ))
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (data.success) {
        localStorage.setItem('admin_authenticated', 'true')
        setIsAuthenticated(true)
      } else {
        setError(data.message || '密碼錯誤')
      }
    } catch (err) {
      setError('登錄失敗，請稍後再試')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated')
    setIsAuthenticated(false)
    setPassword('')
  }

  const checkImageExists = (category: string, filename: string) => {
    const uploadKey = `${category}-${filename}`
    const categoryData = imageCategories.find(cat => cat.id === category)
    if (!categoryData) return
    
    // 使用原生 HTML Image 構造函數，避免與 Next.js Image 組件衝突
    const img = new window.Image()
    const imagePath = `${categoryData.path}${filename}?t=${Date.now()}` // 添加時間戳避免緩存
    img.onload = () => {
      setImageExists(prev => ({ ...prev, [uploadKey]: true }))
    }
    img.onerror = () => {
      setImageExists(prev => ({ ...prev, [uploadKey]: false }))
    }
    img.src = imagePath
  }

  const handleDeleteImage = async (category: string, filename: string) => {
    if (!confirm(`確定要刪除 ${filename} 嗎？此操作無法復原。`)) {
      return
    }

    const deleteKey = `${category}-${filename}`
    setDeleting({ ...deleting, [deleteKey]: true })

    try {
      const response = await fetch('/api/admin/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, filename }),
      })

      const data = await response.json()

      if (data.success) {
        alert('圖片已刪除')
        setImageExists(prev => ({ ...prev, [deleteKey]: false }))
        // 刷新頁面以更新顯示
        window.location.reload()
      } else {
        alert(`刪除失敗: ${data.message}`)
      }
    } catch (err) {
      alert('刪除失敗，請稍後再試')
    } finally {
      setDeleting({ ...deleting, [deleteKey]: false })
    }
  }

  const handleFileUpload = async (category: string, filename: string, file: File) => {
    setUploading({ ...uploading, [`${category}-${filename}`]: true })
    setUploadProgress({ ...uploadProgress, [`${category}-${filename}`]: 0 })

    const formData = new FormData()
    formData.append('file', file)
    formData.append('category', category)
    formData.append('filename', filename)

    try {
      const xhr = new XMLHttpRequest()

      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const percentComplete = (e.loaded / e.total) * 100
          setUploadProgress({
            ...uploadProgress,
            [`${category}-${filename}`]: percentComplete,
          })
        }
      })

      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText)
          if (data.success) {
            // 標記圖片已存在並強制刷新
            const uploadKey = `${category}-${filename}`
            const refreshTimestamp = Date.now()
            
            // 先更新 refresh key 強制重新載入圖片
            setImageRefreshKey(prev => ({ ...prev, [uploadKey]: refreshTimestamp }))
            
            // 等待一小段時間後再標記為存在，確保圖片已寫入磁盤
            setTimeout(() => {
              setImageExists(prev => ({ ...prev, [uploadKey]: true }))
              
              // 強制刷新圖片元素
              const imgElement = document.querySelector(`img[alt="${filename}"]`) as HTMLImageElement
              if (imgElement && imgElement.parentElement) {
                const categoryPath = imageCategories.find(cat => cat.id === category)?.path || ''
                imgElement.src = `${categoryPath}${filename}?t=${refreshTimestamp}`
              }
            }, 300)
            
            setUploading(prev => ({ ...prev, [uploadKey]: false }))
            setUploadProgress(prev => ({ ...prev, [uploadKey]: 0 }))
            
            alert(`圖片上傳成功！\n路徑: ${data.path}\n\n如果圖片未顯示，請刷新頁面。`)
          } else {
            alert(`上傳失敗: ${data.message}`)
            setUploading({ ...uploading, [`${category}-${filename}`]: false })
          }
        } else {
          alert(`上傳失敗: HTTP ${xhr.status}`)
          setUploading({ ...uploading, [`${category}-${filename}`]: false })
        }
      })

      xhr.addEventListener('error', () => {
        alert('上傳失敗，請檢查網絡連接')
        setUploading({ ...uploading, [`${category}-${filename}`]: false })
      })

      xhr.open('POST', '/api/admin/upload')
      xhr.send(formData)
    } catch (err) {
      alert('上傳失敗，請稍後再試')
      setUploading({ ...uploading, [`${category}-${filename}`]: false })
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full"
        >
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Panel</h1>
            <p className="text-slate-600">請輸入密碼以訪問管理面板</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                密碼
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="輸入管理員密碼"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '登錄中...' : '登錄'}
            </button>
          </form>

          <div className="mt-6 text-xs text-slate-500 text-center">
            <p>提示：密碼設置在環境變數 ADMIN_PASSWORD 中</p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">管理面板</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            登出
          </button>
        </div>
        
        {/* Tabs */}
        <div className="container mx-auto px-4 border-b border-slate-200">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('images')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'images'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              圖片管理
            </button>
            <button
              onClick={() => setActiveTab('badges')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'badges'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              徽章管理
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'images' ? (
          <>
            <div className="mb-6">
              <p className="text-slate-600 mb-2">
                選擇分類並上傳對應的圖片。圖片將自動保存到 <code className="bg-slate-200 px-2 py-1 rounded">public/images/</code> 目錄。
              </p>
              <p className="text-sm text-slate-500">
                共 <strong>{imageCategories.length}</strong> 個分類，<strong>{imageCategories.reduce((sum, cat) => sum + cat.files.length, 0)}</strong> 個圖片位置
              </p>
            </div>

            {/* Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imageCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">{category.name}</h2>
                <div className="flex items-center gap-2 mb-4">
                <p className="text-sm text-slate-500">路徑: {category.path}</p>
                {category.defaultSize && (
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-medium rounded">
                    建議尺寸: {category.defaultSize}
                  </span>
                )}
              </div>

                <div className="space-y-4">
                  {category.files.map((fileInfo) => {
                    const filename = typeof fileInfo === 'string' ? fileInfo : fileInfo.filename
                    const fileSize = typeof fileInfo === 'string' ? category.defaultSize : (fileInfo.size || category.defaultSize)
                    const fileDescription = typeof fileInfo === 'string' ? undefined : fileInfo.description
                    const uploadKey = `${category.id}-${filename}`
                    const isUploading = uploading[uploadKey] || false
                    const progress = uploadProgress[uploadKey] || 0

                    return (
                      <div key={filename} className="border border-slate-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-medium text-slate-700">{filename}</span>
                              {fileSize && (
                                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                                  📐 {fileSize}
                                </span>
                              )}
                            </div>
                            {fileDescription && (
                              <p className="text-xs text-slate-500 mt-1">{fileDescription}</p>
                            )}
                          </div>
                          <label className="cursor-pointer ml-2">
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0]
                                if (file) {
                                  handleFileUpload(category.id, filename, file)
                                }
                              }}
                              disabled={isUploading}
                            />
                            <span className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors disabled:opacity-50 whitespace-nowrap">
                              {isUploading ? '上傳中...' : '選擇圖片'}
                            </span>
                          </label>
                        </div>

                        {isUploading && (
                          <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        )}

                        {/* Preview */}
                        <div className="mt-3 relative aspect-video bg-slate-100 rounded overflow-hidden group">
                          <img
                            key={imageRefreshKey[uploadKey] || uploadKey}
                            src={`${category.path}${filename}${imageRefreshKey[uploadKey] ? `?t=${imageRefreshKey[uploadKey]}` : `?t=${Date.now()}`}`}
                            alt={filename}
                            className={`w-full h-full object-contain ${imageExists[uploadKey] ? '' : 'hidden'}`}
                            onLoad={() => {
                              setImageExists(prev => ({ ...prev, [uploadKey]: true }))
                            }}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                              setImageExists(prev => ({ ...prev, [uploadKey]: false }))
                            }}
                          />
                          {!imageExists[uploadKey] && (
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-200 border-2 border-dashed border-slate-400">
                              <div className="text-center text-xs text-slate-500">
                                <div className="mb-1 flex items-center justify-center">
                                  <Icon emoji="🖼️" size={32} className="text-slate-500" />
                                </div>
                                <div>尚未上傳</div>
                                <div className="mt-2 text-[10px] text-blue-600 break-all px-2">
                                  {category.path}{filename}
                                </div>
                              </div>
                            </div>
                          )}
                          {/* Delete Button - 只在圖片存在時顯示 */}
                          {imageExists[uploadKey] && (
                            <button
                              onClick={() => handleDeleteImage(category.id, filename)}
                              disabled={deleting[uploadKey]}
                              className="absolute top-2 right-2 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs rounded transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                            >
                              {deleting[uploadKey] ? (
                                <>
                                  <span className="animate-spin">⏳</span>
                                  <span>刪除中...</span>
                                </>
                              ) : (
                                <>
                                  <span>🗑️</span>
                                  <span>移除</span>
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6"
        >
          <h3 className="text-lg font-bold text-blue-900 mb-2">📝 使用說明</h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>• 選擇對應的分類和文件名</li>
            <li>• 點擊「選擇圖片」按鈕上傳圖片</li>
            <li>• 圖片會自動保存到對應的目錄</li>
            <li>• 建議圖片格式：JPG、PNG</li>
            <li>• 圖片會自動覆蓋同名文件</li>
          </ul>
        </motion.div>
          </>
        ) : (
          <>
            {/* Badges Management */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">徽章管理</h2>
                  <p className="text-slate-600">
                    編輯跳動徽章的文字和位置。徽章會顯示在 Hero 卡片下方和品牌跑馬燈區域。
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleAddBadge}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    + 新增徽章
                  </button>
                  <button
                    onClick={handleSaveBadges}
                    disabled={savingBadges}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50"
                  >
                    {savingBadges ? '保存中...' : '保存徽章'}
                  </button>
                </div>
              </div>
            </div>

            {/* Badges List */}
            <div className="grid md:grid-cols-2 gap-6">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg border border-slate-200 p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-900">徽章 #{index + 1}</h3>
                    <button
                      onClick={() => handleDeleteBadge(badge.id)}
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded transition-colors"
                    >
                      刪除
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* Badge Text */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        徽章文字
                      </label>
                      <input
                        type="text"
                        value={badge.text}
                        onChange={(e) => handleUpdateBadge(badge.id, 'text', e.target.value)}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="例如：🎯 業界認可"
                      />
                    </div>

                    {/* Position */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Top (rem 或 %)
                        </label>
                        <input
                          type="text"
                          value={badge.position.top || ''}
                          onChange={(e) => handleUpdateBadge(badge.id, 'position', { ...badge.position, top: e.target.value })}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="例如：0 或 5%"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Left (%)
                        </label>
                        <input
                          type="text"
                          value={badge.position.left || ''}
                          onChange={(e) => handleUpdateBadge(badge.id, 'position', { ...badge.position, left: e.target.value })}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="例如：5%"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Right (%)
                        </label>
                        <input
                          type="text"
                          value={badge.position.right || ''}
                          onChange={(e) => handleUpdateBadge(badge.id, 'position', { ...badge.position, right: e.target.value })}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="例如：8%"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          動畫類型
                        </label>
                        <select
                          value={badge.animation}
                          onChange={(e) => handleUpdateBadge(badge.id, 'animation', e.target.value)}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="bounce-gentle">跳動 1</option>
                          <option value="bounce-gentle-delay1">跳動 2</option>
                          <option value="bounce-gentle-delay2">跳動 3</option>
                          <option value="bounce-gentle-delay3">跳動 4</option>
                          <option value="bounce-gentle-delay4">跳動 5</option>
                        </select>
                      </div>
                    </div>

                    {/* Preview */}
                    <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                      <p className="text-xs text-slate-500 mb-2">預覽：</p>
                      <div className="inline-block bg-white rounded-[80px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] px-4 py-2">
                        <p className="text-sm text-slate-900 font-medium">{badge.text}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {badges.length === 0 && (
              <div className="text-center py-12 bg-slate-50 rounded-xl">
                <p className="text-slate-600 mb-4">還沒有徽章，點擊「新增徽章」開始添加</p>
                <button
                  onClick={handleAddBadge}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  + 新增第一個徽章
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}

