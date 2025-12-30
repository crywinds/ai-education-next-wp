import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getCourseFromWP, transformPostToCourse } from '@/lib/wordpress'
import type { Course } from '@/types'

interface CourseDetailPageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

// 設置為動態路由，避免構建時需要 WordPress API
export const dynamic = 'force-dynamic'
export const dynamicParams = true

async function getCourse(slug: string): Promise<Course | null> {
  try {
    // 從 WordPress 獲取課程
    const post = await getCourseFromWP(slug)
    if (post) {
      return transformPostToCourse(post)
    }
    
    // 如果未找到，返回 null（會觸發 404）
    return null
  } catch (error) {
    console.error('Error fetching course:', error)
    return null
  }
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params
  const course = await getCourse(slug)

  if (!course) {
    notFound()
  }

  const levelColors: Record<string, string> = {
    '初級': 'bg-green-100 text-green-800',
    '中級': 'bg-blue-100 text-blue-800',
    '高級': 'bg-purple-100 text-purple-800',
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/courses"
        className="text-primary-600 hover:text-primary-700 mb-4 inline-block"
      >
        ← 返回課程列表
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-96 bg-gray-200">
          {course.image ? (
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          )}
        </div>

        <div className="p-8">
          <div className="flex items-center space-x-4 mb-4">
            {course.category && (
              <span className="text-primary-600 font-medium">{course.category}</span>
            )}
            {course.level && (
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${levelColors[course.level] || 'bg-gray-100 text-gray-800'}`}>
                {course.level}
              </span>
            )}
            {course.duration && (
              <span className="text-gray-600 text-sm">
                <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {course.duration}
              </span>
            )}
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">{course.title}</h1>

          {course.description && (
            <p className="text-xl text-gray-600 mb-6">{course.description}</p>
          )}

          {course.content && (
            <div
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: course.content }}
            />
          )}

          <div className="bg-primary-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">準備好開始學習了嗎？</h3>
            <p className="text-gray-700 mb-4">
              立即加入課程，開啟您的 AI 學習之旅！
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
              立即開始學習
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
