import { getPost, getPosts } from '@/lib/wordpress'
import { notFound } from 'next/navigation'
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

function getPostCategories(post: WPPost) {
  return post._embedded?.['wp:term']?.[0]?.filter(term => term.taxonomy === 'category') || []
}

function getPostTags(post: WPPost) {
  return post._embedded?.['wp:term']?.[0]?.filter(term => term.taxonomy === 'post_tag') || []
}

async function getRelatedPosts(currentPost: WPPost, limit: number = 3): Promise<WPPost[]> {
  try {
    const categories = getPostCategories(currentPost)
    if (categories.length === 0) {
      // 如果沒有分類，返回最新的文章
      const allPosts = await getPosts({ per_page: limit + 1 })
      return allPosts.filter(p => p.id !== currentPost.id).slice(0, limit)
    }
    
    // 獲取同分類的文章
    const categoryId = categories[0].id
    const relatedPosts = await getPosts({ 
      categories: categoryId, 
      per_page: limit + 1 
    })
    
    // 過濾掉當前文章
    return relatedPosts.filter(p => p.id !== currentPost.id).slice(0, limit)
  } catch (error) {
    console.error('Error fetching related posts:', error)
    return []
  }
}

interface BlogPostPageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

// 設置為動態路由，避免構建時需要 WordPress API
export const dynamic = 'force-dynamic'
export const dynamicParams = true

export async function generateStaticParams() {
  try {
    const posts = await getPosts({ per_page: 100 })
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params for blog posts:', error)
    // 如果 WordPress API 不可用，返回空數組，讓頁面在運行時動態生成
    return []
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const featuredImage = getFeaturedImage(post)
  const categories = getPostCategories(post)
  const tags = getPostTags(post)
  const relatedPosts = await getRelatedPosts(post, 3)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* 返回按鈕 */}
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回文章列表
        </Link>

        {/* 文章內容 */}
        <article className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden mb-8">
          {featuredImage && (
            <div className="relative h-64 md:h-96 bg-gray-200 dark:bg-slate-700">
              <Image
                src={featuredImage}
                alt={post.title.rendered.replace(/<[^>]*>/g, '')}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="p-8 md:p-12">
            {/* 分類和日期 */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/blog?category=${cat.slug}`}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
              <div className="text-sm text-slate-500 dark:text-slate-400">
                {formatDate(post.date)}
              </div>
            </div>
            
            {/* 標題 */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            {/* 標籤 */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            )}

            {/* 文章內容 */}
            <div
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-slate-900 dark:prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        </article>

        {/* 相關文章 */}
        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">相關文章</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => {
                const relatedImage = getFeaturedImage(relatedPost)
                const relatedCategories = getPostCategories(relatedPost)
                
                return (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700 overflow-hidden group"
                  >
                    {relatedImage && (
                      <div className="relative h-40 bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <Image
                          src={relatedImage}
                          alt={relatedPost.title.rendered.replace(/<[^>]*>/g, '')}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      {relatedCategories.length > 0 && (
                        <div className="text-xs text-blue-600 dark:text-blue-400 mb-2">
                          {relatedCategories[0].name}
                        </div>
                      )}
                      <h3
                        className="text-lg font-semibold text-slate-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                        dangerouslySetInnerHTML={{ __html: relatedPost.title.rendered }}
                      />
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                        {formatDate(relatedPost.date)}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}








