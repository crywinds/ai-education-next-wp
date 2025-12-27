import Link from 'next/link'
import CourseCard from './CourseCard'

// 示例課程數據（實際應從 WordPress 獲取）
const featuredCourses = [
  {
    id: 1,
    title: 'ChatGPT 完整教學',
    description: '從零開始學習 ChatGPT，掌握提示詞工程與進階應用技巧',
    image: '/api/placeholder/400/250',
    duration: '8 小時',
    level: '初級' as const,
    price: 0,
    slug: 'chatgpt-complete-guide',
    category: 'AI 工具',
  },
  {
    id: 2,
    title: 'Midjourney AI 繪圖',
    description: '學習使用 Midjourney 創造驚艷的 AI 藝術作品',
    image: '/api/placeholder/400/250',
    duration: '6 小時',
    level: '中級' as const,
    price: 0,
    slug: 'midjourney-ai-art',
    category: 'AI 創作',
  },
  {
    id: 3,
    title: 'AI 提示詞工程',
    description: '深入學習提示詞設計，讓 AI 生成更精準的內容',
    image: '/api/placeholder/400/250',
    duration: '10 小時',
    level: '高級' as const,
    price: 0,
    slug: 'prompt-engineering',
    category: 'AI 技術',
  },
]

export default function FeaturedCourses() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">精選課程</h2>
          <p className="text-xl text-gray-600">
            由專業講師精心設計的 AI 學習課程
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            查看所有課程
          </Link>
        </div>
      </div>
    </section>
  )
}




