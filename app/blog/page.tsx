import { getPosts } from '@/lib/wordpress'
import Link from 'next/link'
import Image from 'next/image'
import { WPPost } from '@/lib/wordpress'
import Icon from '@/components/Icon'
import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

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

export const revalidate = 60

export const metadata: Metadata = genMeta({
  title: '最新消息 - 韓國批發資訊',
  description: '了解韓國批發、時裝趨勢及網店經營的最新資訊。Korae 為您提供最新的批發市場動態、時尚趨勢和電商經營技巧。',
  keywords: ['最新消息', '韓國批發', '時裝趨勢', '網店經營', '批發資訊', '電商技巧'],
  url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://korae.com'}/blog`,
})

export default async function BlogPage() {
  const posts = await getPosts({ per_page: 12, fetchAll: false })

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

      {/* Blog Posts Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="max-w-2xl mx-auto">
                <div className="relative aspect-video bg-slate-200 border-2 border-dashed border-slate-400 rounded-2xl mb-8 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="mb-4 flex items-center justify-center">
                      <Icon emoji="📰" size={64} className="text-slate-600" />
                    </div>
                    <div className="text-slate-600 font-semibold text-lg mb-2">目前還沒有文章</div>
                    <div className="text-sm text-slate-500">
                      請確保 WordPress 網站已正確配置，並設置環境變數
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-500">
                  提示：在 .env.local 文件中設置 NEXT_PUBLIC_WP_API_URL
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post) => {
                const featuredImage = getFeaturedImage(post)
                const excerpt = post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150) + '...'

                return (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-slate-200 group">
                    {featuredImage ? (
                      <Link href={`/blog/${post.slug}`}>
                        <div className="relative h-48 bg-slate-200 overflow-hidden">
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
                        <div className="relative h-48 bg-slate-200 border-2 border-dashed border-slate-400 flex items-center justify-center">
                          <div className="text-center p-4">
                            <div className="mb-2 flex items-center justify-center">
                              <Icon emoji="🖼️" size={48} className="text-slate-500" />
                            </div>
                            <div className="text-xs text-slate-500">文章圖片<br/>800x600</div>
                          </div>
                        </div>
                      </Link>
                    )}
                    <div className="p-6">
                      <div className="text-sm text-slate-500 mb-3">
                        {formatDate(post.date)}
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        <Link
                          href={`/blog/${post.slug}`}
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                      </h2>
                      <div
                        className="text-slate-600 mb-4 line-clamp-3 text-sm"
                        dangerouslySetInnerHTML={{ __html: excerpt }}
                      />
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition"
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


