'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getResources, getResourceCategories, parseResource } from '@/lib/wordpress'
import ResourceSearch from '@/components/resources/ResourceSearch'
import ResourceCard from '@/components/resources/ResourceCard'
import { Skeleton } from '@/components/ui/skeleton'
import { Card } from '@/components/ui/card'
import { staggerContainer } from '@/lib/animations'
import type { WPResource, ResourceCategory } from '@/types/resource'

export default function ResourcesPage() {
  const [resources, setResources] = useState<Array<ReturnType<typeof parseResource>>>([])
  const [categories, setCategories] = useState<ResourceCategory[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>()
  const [error, setError] = useState<string | null>(null)

  // 獲取分類
  useEffect(() => {
    async function fetchCategories() {
      try {
        const cats = await getResourceCategories()
        setCategories(cats)
      } catch (err) {
        console.error('Error fetching categories:', err)
        // 如果獲取分類失敗，使用預設分類
        setCategories([])
      }
    }
    fetchCategories()
  }, [])

  // 獲取資源
  const fetchResources = useCallback(async (query: string = '', categoryId?: number) => {
    setIsLoading(true)
    setError(null)
    try {
      const params: any = {
        per_page: 100,
        orderby: 'title',
        order: 'asc',
      }

      if (query) {
        params.search = query
      }

      if (categoryId) {
        params.categories = categoryId
      }

      const fetchedResources = await getResources(params)
      const parsedResources = fetchedResources.map(parseResource)
      setResources(parsedResources)
    } catch (err) {
      console.error('Error fetching resources:', err)
      setError('載入資源時出錯，請稍後再試')
      setResources([])
    } finally {
      setIsLoading(false)
    }
  }, [])

  // 初始載入
  useEffect(() => {
    fetchResources()
  }, [fetchResources])

  // 處理搜尋
  const handleSearch = useCallback((query: string, categoryId?: number) => {
    setSearchQuery(query)
    setSelectedCategory(categoryId)
    fetchResources(query, categoryId)
  }, [fetchResources])

  // 格式化分類資料供 Select 組件使用
  const categoryOptions = categories.map(cat => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              設計與開發資源
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-2">
              精選實用工具與資源
            </p>
            <p className="text-lg text-primary-200">
              整理優質的 AI 工具、學習資源與設計素材，助您快速上手
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <ResourceSearch
            onSearch={handleSearch}
            categories={categoryOptions}
            isLoading={isLoading}
          />
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {error && (
            <div className="mb-8 p-4 bg-destructive/10 text-destructive rounded-lg text-center">
              {error}
            </div>
          )}

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6" />
                </Card>
              ))}
            </div>
          ) : resources.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">
                {searchQuery || selectedCategory
                  ? '未找到匹配的資源'
                  : '暫無資源'}
              </p>
              {(searchQuery || selectedCategory) && (
                <button
                  onClick={() => handleSearch('')}
                  className="text-primary-600 hover:underline"
                >
                  清除篩選條件
                </button>
              )}
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {resources.map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
            </motion.div>
          )}

          {!isLoading && resources.length > 0 && (
            <div className="mt-8 text-center text-sm text-muted-foreground">
              共找到 {resources.length} 個資源
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              需要更多協助？
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              如果您有任何問題或建議，歡迎與我們聯繫
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                聯絡我們
              </Link>
              <Link
                href="/courses"
                className="bg-white border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
              >
                查看課程
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
