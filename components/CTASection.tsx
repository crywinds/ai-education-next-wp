import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">準備好開始您的 AI 學習之旅了嗎？</h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          立即加入我們，探索 AI 創作的無限可能
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/courses"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition shadow-lg"
          >
            開始學習
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
          >
            聯絡我們
          </Link>
        </div>
      </div>
    </section>
  )
}

