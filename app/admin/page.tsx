'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import NextImage from 'next/image'

interface ImageInfo {
  path: string
  category: string
  filename: string
  size?: number
}

const imageCategories = [
  // Logo
  { id: 'logo', name: 'Logo', path: '/images/logo/', files: ['korae-logo.png'] },
  
  // 首頁
  { id: 'hero', name: 'Hero 背景圖片', path: '/images/hero/', files: ['hero-background.jpg'] },
  { id: 'partners', name: '合作伙伴 Logo', path: '/images/partners/', files: ['hsbc-logo.png', 'shopage-logo.png', 'sfexpress-logo.png', 'metro-radio-logo.png', 'hkcc-logo.png'] },
  { id: 'testimonials', name: '客戶見證', path: '/images/testimonials/', files: ['testimonial-1.jpg', 'testimonial-2.jpg', 'testimonial-3.jpg'] },
  
  // 韓國批發團隊簡介 (about)
  { id: 'about', name: '關於我們 - 團隊照片', path: '/images/about/', files: ['team-member-1.jpg', 'team-member-2.jpg', 'team-member-3.jpg', 'team-member-4.jpg'] },
  
  // 批發+網店服務 (services)
  { id: 'services', name: '服務圖片', path: '/images/services/', files: ['dongdaemun-mobile.jpg', 'service-fee.jpg', 'website-showcase.jpg', 'admin-dashboard.jpg', 'photography-studio.jpg'] },
  
  // 純批發服務 (wholesale)
  { id: 'wholesale', name: '批發商品圖片', path: '/images/wholesale/', files: ['korea-fashion.jpg', 'japan-fashion.jpg', 'korea-furniture.jpg', 'skincare.jpg', 'jewelry.jpg'] },
  
  // 人才招募 (careers)
  { id: 'careers', name: '職位圖片', path: '/images/careers/', files: ['position-procurement.jpg', 'position-customer-service.jpg', 'position-quality.jpg', 'position-developer.jpg'] },
  
  // 業界獎項 (awards)
  { id: 'awards', name: '獎項圖片', path: '/images/awards/', files: ['hk-digital-brand-2018.png', 'award-brand.png', 'outstanding-platform.png', 'chals-interview.jpg', 'ebonia-sponsor.jpg'] },
  
  // 媒體影片 (media)
  { id: 'media', name: '媒體影片縮圖', path: '/images/media/', files: ['video-wholesale-intro.jpg', 'video-dongdaemun.jpg', 'video-customer-case.jpg', 'video-website-demo.jpg', 'video-quality-check.jpg', 'video-team-intro.jpg'] },
  { id: 'media-logos', name: '媒體 Logo', path: '/images/media/logos/', files: ['metro-radio-logo.png', 'singtao-logo.png', 'hsbc-logo.png', 'shopage-logo.png'] },
  
  // 預約諮詢 (contact)
  { id: 'contact', name: '聯絡頁面', path: '/images/contact/', files: ['map-location.jpg'] },
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

  useEffect(() => {
    // 檢查是否已登錄
    const authStatus = localStorage.getItem('admin_authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
      // 檢查所有圖片是否存在
      imageCategories.forEach(category => {
        category.files.forEach(filename => {
          checkImageExists(category.id, filename)
        })
      })
    }
  }, [])

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
    const categoryData = imageCategories.find(c => c.id === category)
    if (!categoryData) return
    
    // 使用原生 HTML Image 構造函數，避免與 Next.js Image 組件衝突
    const img = new window.Image()
    const imagePath = `${categoryData.path}${filename}?t=${Date.now()}` // 添加時間戳避免緩存
    img.onload = () => {
      setImageExists(prev => ({ ...prev, [`${category}-${filename}`]: true }))
    }
    img.onerror = () => {
      setImageExists(prev => ({ ...prev, [`${category}-${filename}`]: false }))
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
            alert(`圖片上傳成功！\n路徑: ${data.path}`)
            setUploading({ ...uploading, [`${category}-${filename}`]: false })
            setUploadProgress({ ...uploadProgress, [`${category}-${filename}`]: 0 })
            // 刷新頁面以顯示新圖片
            window.location.reload()
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
          <h1 className="text-2xl font-bold text-slate-900">圖片管理面板</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            登出
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
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
                <p className="text-sm text-slate-500 mb-4">路徑: {category.path}</p>

                <div className="space-y-4">
                  {category.files.map((filename) => {
                    const uploadKey = `${category.id}-${filename}`
                    const isUploading = uploading[uploadKey] || false
                    const progress = uploadProgress[uploadKey] || 0

                    return (
                      <div key={filename} className="border border-slate-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700">{filename}</span>
                          <label className="cursor-pointer">
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
                            <span className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors disabled:opacity-50">
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
                          <NextImage
                            src={`${category.path}${filename}`}
                            alt={filename}
                            fill
                            className="object-contain"
                            onLoad={() => {
                              setImageExists(prev => ({ ...prev, [uploadKey]: true }))
                            }}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                              const placeholder = target.nextElementSibling as HTMLElement
                              if (placeholder) placeholder.style.display = 'flex'
                              setImageExists(prev => ({ ...prev, [uploadKey]: false }))
                            }}
                          />
                          <div className="hidden absolute inset-0 items-center justify-center bg-slate-200 border-2 border-dashed border-slate-400">
                            <div className="text-center text-xs text-slate-500">
                              <div className="text-2xl mb-1">🖼️</div>
                              <div>尚未上傳</div>
                            </div>
                          </div>
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
      </main>
    </div>
  )
}

