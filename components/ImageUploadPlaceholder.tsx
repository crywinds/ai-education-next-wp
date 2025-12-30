'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Icon from '@/components/Icon'

interface ImageUploadPlaceholderProps {
  imagePath: string // 例如: '/images/about/team-1.jpg'
  category: string // 例如: 'about'
  filename: string // 例如: 'team-1.jpg'
  placeholderText?: string
  className?: string
  size?: string // 建議尺寸，例如: '400x400'
}

export default function ImageUploadPlaceholder({
  imagePath,
  category,
  filename,
  placeholderText,
  className = '',
  size,
}: ImageUploadPlaceholderProps) {
  const [imageExists, setImageExists] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [imageKey, setImageKey] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // 組件掛載時檢查圖片是否存在
  useEffect(() => {
    const checkImageExists = () => {
      const img = new window.Image()
      img.onload = () => {
        setImageExists(true)
      }
      img.onerror = () => {
        setImageExists(false)
      }
      img.src = `${imagePath}?t=${Date.now()}`
    }
    
    checkImageExists()
  }, [imagePath])

  const handleFileSelect = () => {
    fileInputRef.current?.click()
  }

  const handleFileUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('請選擇圖片文件')
      return
    }

    setIsUploading(true)
    setUploadProgress(0)

    const formData = new FormData()
    formData.append('file', file)
    formData.append('category', category)
    formData.append('filename', filename)

    try {
      const xhr = new XMLHttpRequest()

      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const percentComplete = (e.loaded / e.total) * 100
          setUploadProgress(percentComplete)
        }
      })

      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText)
          if (data.success) {
            // 上傳成功，強制刷新圖片
            const newKey = Date.now()
            setImageKey(newKey)
            // 等待文件寫入後再檢查
            setTimeout(() => {
              const img = new window.Image()
              img.onload = () => {
                setImageExists(true)
              }
              img.onerror = () => {
                setImageExists(false)
              }
              img.src = `${imagePath}?t=${newKey}`
            }, 500)
            alert('圖片上傳成功！')
          } else {
            alert(`上傳失敗: ${data.message}`)
          }
        } else {
          alert(`上傳失敗: HTTP ${xhr.status}`)
        }
        setIsUploading(false)
        setUploadProgress(0)
      })

      xhr.addEventListener('error', () => {
        alert('上傳失敗，請檢查網絡連接')
        setIsUploading(false)
        setUploadProgress(0)
      })

      xhr.open('POST', '/api/admin/upload')
      xhr.send(formData)
    } catch (err) {
      alert('上傳失敗，請稍後再試')
      setIsUploading(false)
      setUploadProgress(0)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileUpload(file)
    }
    // 重置 input，允許上傳同名文件
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  if (imageExists) {
    // 圖片存在，顯示圖片
    return (
      <div className={`relative w-full h-full ${className}`}>
        <Image
          key={imageKey}
          src={`${imagePath}?t=${imageKey || Date.now()}`}
          alt={placeholderText || filename}
          fill
          className="object-cover"
          unoptimized
          onError={() => {
            setImageExists(false)
          }}
        />
      </div>
    )
  }

  // 圖片不存在，顯示佔位符和上傳按鈕
  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        disabled={isUploading}
      />
      
      <div className="text-center p-4">
        <div className="text-3xl mb-2">📸</div>
        {placeholderText && (
          <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mb-1">
            {placeholderText}
          </div>
        )}
        <div className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold mb-2 px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 rounded inline-block">
          {filename}
        </div>
        {size && (
          <div className="text-[9px] text-slate-400 dark:text-slate-500 mb-3">
            建議尺寸: {size}
          </div>
        )}
        
        {isUploading ? (
          <div className="mt-3">
            <div className="w-32 bg-slate-200 rounded-full h-2 mx-auto">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            <div className="text-xs text-slate-500 mt-2">上傳中... {Math.round(uploadProgress)}%</div>
          </div>
        ) : (
          <button
            onClick={handleFileSelect}
            className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            📤 選擇圖片
          </button>
        )}
      </div>
    </div>
  )
}

