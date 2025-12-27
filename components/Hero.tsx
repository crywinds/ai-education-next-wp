import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            掌握 AI 創作
            <br />
            <span className="text-primary-200">開啟無限可能</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            學習最新的 AI 技術與工具，從 ChatGPT 到 Midjourney，
            <br />
            成為 AI 時代的創作者
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition shadow-lg"
            >
              探索課程
            </Link>
            <Link
              href="/blog"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              閱讀文章
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}




