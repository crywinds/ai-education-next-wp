import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

interface CourseDetailPageProps {
  params: {
    slug: string
  }
}

async function getCourse(slug: string) {
  // 實際應用中，這裡應該從 WordPress 獲取課程
  // const post = await getPost(slug)
  
  // 示例數據
  const courses: Record<string, any> = {
    'chatgpt-complete-guide': {
      id: 1,
      title: 'ChatGPT 完整教學',
      content: `
        <h2>課程介紹</h2>
        <p>ChatGPT 是目前最受歡迎的 AI 對話工具，本課程將帶您從零開始，全面掌握 ChatGPT 的使用技巧。</p>
        
        <h3>您將學到：</h3>
        <ul>
          <li>ChatGPT 的基本使用與界面操作</li>
          <li>提示詞工程的核心原則</li>
          <li>進階對話技巧與策略</li>
          <li>實際應用場景與案例分享</li>
        </ul>
        
        <h3>適合對象</h3>
        <p>本課程適合所有對 AI 工具感興趣的學習者，無需任何程式設計基礎。</p>
      `,
      image: '/api/placeholder/800/400',
      duration: '8 小時',
      level: '初級',
      category: 'AI 工具',
    },
  }

  return courses[slug] || null
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = await getCourse(params.slug)

  if (!course) {
    notFound()
  }

  const levelColors = {
    初級: 'bg-green-100 text-green-800',
    中級: 'bg-blue-100 text-blue-800',
    高級: 'bg-purple-100 text-purple-800',
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
          {course.image && course.image !== '/api/placeholder/800/400' ? (
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
              unoptimized
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
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${levelColors[course.level as keyof typeof levelColors]}`}>
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

          <div
            className="prose prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: course.content }}
          />

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

