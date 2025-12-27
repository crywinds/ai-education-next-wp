import { getPosts } from '@/lib/wordpress'
import Link from 'next/link'
import Image from 'next/image'
import { WPPost } from '@/lib/wordpress'

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function getFeaturedImage(post: WPPost) {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
}

// Next.js 會自動緩存這個頁面，每60秒重新驗證一次
// 這樣可以避免每次訪問都重新獲取數據，同時保持數據相對新鮮
export const revalidate = 60 // 重新驗證時間（秒）

export default async function BlogPage() {
  // 如果需要顯示所有文章，可以使用 fetchAll: true
  // 否則只獲取前12篇文章（用於首頁預覽）
  const posts = await getPosts({ per_page: 12, fetchAll: false })

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">最新文章</h1>
        <p className="text-xl text-gray-600">
          探索 AI 領域的最新趨勢與教學內容
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">
            目前還沒有文章。請確保 WordPress 網站已正確配置，並設置環境變數。
          </p>
          <p className="text-sm text-gray-500">
            提示：在 .env.local 文件中設置 NEXT_PUBLIC_WP_API_URL
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const featuredImage = getFeaturedImage(post)
            const excerpt = post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150) + '...'

            return (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                {featuredImage && (
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-48 bg-gray-200">
                      <Image
                        src={featuredImage}
                        alt={post.title.rendered}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                )}
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {formatDate(post.date)}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary-600 transition"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                  </h2>
                  <div
                    className="text-gray-600 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                  />
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 font-semibold hover:text-primary-700 transition"
                  >
                    閱讀更多 →
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      )}
    </div>
  )
}


