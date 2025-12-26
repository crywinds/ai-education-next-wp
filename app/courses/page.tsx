import { getPosts } from '@/lib/wordpress'
import CourseCard from '@/components/CourseCard'
import { Course } from '@/types'

async function getCourses(): Promise<Course[]> {
  // 實際應用中，這裡應該從 WordPress 獲取課程
  // const posts = await getPosts({ categories: COURSE_CATEGORY_ID })
  // return posts.map(transformToCourse)
  
  // 示例數據
  return [
    {
      id: 1,
      title: 'ChatGPT 完整教學',
      description: '從零開始學習 ChatGPT，掌握提示詞工程與進階應用技巧',
      content: '',
      image: '/api/placeholder/400/250',
      duration: '8 小時',
      level: '初級',
      price: 0,
      slug: 'chatgpt-complete-guide',
      category: 'AI 工具',
    },
    {
      id: 2,
      title: 'Midjourney AI 繪圖',
      description: '學習使用 Midjourney 創造驚艷的 AI 藝術作品',
      content: '',
      image: '/api/placeholder/400/250',
      duration: '6 小時',
      level: '中級',
      price: 0,
      slug: 'midjourney-ai-art',
      category: 'AI 創作',
    },
    {
      id: 3,
      title: 'AI 提示詞工程',
      description: '深入學習提示詞設計，讓 AI 生成更精準的內容',
      content: '',
      image: '/api/placeholder/400/250',
      duration: '10 小時',
      level: '高級',
      price: 0,
      slug: 'prompt-engineering',
      category: 'AI 技術',
    },
    {
      id: 4,
      title: 'Stable Diffusion 入門',
      description: '了解開源 AI 圖像生成工具 Stable Diffusion 的使用方法',
      content: '',
      image: '/api/placeholder/400/250',
      duration: '5 小時',
      level: '初級',
      price: 0,
      slug: 'stable-diffusion-intro',
      category: 'AI 創作',
    },
    {
      id: 5,
      title: 'AI 寫作技巧',
      description: '運用 AI 工具提升寫作效率與品質的實用技巧',
      content: '',
      image: '/api/placeholder/400/250',
      duration: '4 小時',
      level: '初級',
      price: 0,
      slug: 'ai-writing-tips',
      category: 'AI 工具',
    },
    {
      id: 6,
      title: 'AI 視頻製作',
      description: '學習使用 AI 工具進行視頻創作與後期處理',
      content: '',
      image: '/api/placeholder/400/250',
      duration: '7 小時',
      level: '中級',
      price: 0,
      slug: 'ai-video-creation',
      category: 'AI 創作',
    },
  ]
}

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">所有課程</h1>
        <p className="text-xl text-gray-600">
          探索我們提供的所有 AI 教育課程
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

