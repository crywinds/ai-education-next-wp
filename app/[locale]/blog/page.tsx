import { getPosts, getCategories } from '@/lib/wordpress'
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

function formatDateShort(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

function getFeaturedImage(post: WPPost) {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
}

function getPostCategories(post: WPPost) {
  return post._embedded?.['wp:term']?.[0]?.filter(term => term.taxonomy === 'category') || []
}

function getPostTags(post: WPPost) {
  return post._embedded?.['wp:term']?.[0]?.filter(term => term.taxonomy === 'post_tag') || []
}

export const revalidate = 60

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getPosts({ per_page: 12, fetchAll: false }),
    getCategories()
  ])
  
  // 獲取熱門文章（前5篇）
  const popularPosts = posts.slice(0, 5)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0)_1px,transparent_0)] bg-[length:40px_40px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
              最新消息
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900">
              最新消息
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed">
              了解韓國批發、時裝趨勢及網店經營的最新資訊
            </p>
          </div>
        </div>
      </section>

      {/* 熱門文章 Section */}
      {popularPosts.length > 0 && (
        <section className="py-12 bg-slate-50 dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">熱門文章</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {popularPosts.map((post, index) => {
                const postCategories = getPostCategories(post)
                const title = post.title.rendered.replace(/<[^>]*>/g, '')
                
                return (
                  <article key={post.id} className="bg-white dark:bg-slate-900 rounded-lg shadow-md hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700 group">
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="p-4">
                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                          {formatDateShort(post.date)}
                        </div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {title}
                        </h3>
                        {postCategories.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {postCategories.slice(0, 1).map((cat) => (
                              <span key={cat.id} className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">
                                {cat.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="max-w-2xl mx-auto">
                <div className="relative aspect-video bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600 rounded-2xl mb-8 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-5xl mb-4">📰</div>
                    <div className="text-slate-600 dark:text-slate-300 font-semibold text-lg mb-2">目前還沒有文章</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      請確保 WordPress 網站已正確配置，並設置環境變數
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  提示：在 .env.local 文件中設置 NEXT_PUBLIC_WP_API_URL
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post) => {
                const featuredImage = getFeaturedImage(post)
                const excerpt = post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150) + '...'
                const postCategories = getPostCategories(post)
                const postTags = getPostTags(post)

                return (
                  <article key={post.id} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 group">
                    {featuredImage ? (
                      <Link href={`/blog/${post.slug}`}>
                        <div className="relative h-48 bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <Image
                            src={featuredImage}
                            alt={post.title.rendered.replace(/<[^>]*>/g, '')}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </Link>
                    ) : (
                      <Link href={`/blog/${post.slug}`}>
                        <div className="relative h-48 bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600 flex items-center justify-center">
                          <div className="text-center p-4">
                            <div className="text-4xl mb-2">🖼️</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mb-1">文章圖片</div>
                            <div className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold mb-1 px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 rounded">
                              WordPress 特色圖片
                            </div>
                            <div className="text-[9px] text-slate-500 dark:text-slate-500 mt-1 leading-tight">
                              在 WordPress 後台<br/>設置文章特色圖片
                            </div>
                          </div>
                        </div>
                      </Link>
                    )}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          {formatDate(post.date)}
                        </div>
                        {postCategories.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {postCategories.slice(0, 2).map((cat) => (
                              <Link
                                key={cat.id}
                                href={`/blog?category=${cat.slug}`}
                                className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-100 dark:hover:bg-blue-900/50 transition"
                              >
                                {cat.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        <Link
                          href={`/blog/${post.slug}`}
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                      </h2>
                      <div
                        className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 text-sm"
                        dangerouslySetInnerHTML={{ __html: excerpt }}
                      />
                      {postTags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {postTags.slice(0, 3).map((tag) => (
                            <span key={tag.id} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
                              #{tag.name}
                            </span>
                          ))}
                        </div>
                      )}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition"
                      >
                        閱讀更多
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
