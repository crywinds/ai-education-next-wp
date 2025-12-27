const testimonials = [
  {
    name: '王小明',
    role: '平面設計師',
    content: 'Midjourney 課程讓我學會了如何用 AI 創作驚艷的作品，工作效率提升了好幾倍！',
    avatar: '/api/placeholder/64/64',
  },
  {
    name: '李美麗',
    role: '內容創作者',
    content: 'ChatGPT 課程的提示詞工程教學非常實用，現在我能輕鬆創作出高品質內容。',
    avatar: '/api/placeholder/64/64',
  },
  {
    name: '張志強',
    role: '行銷專員',
    content: '從零基礎到能夠熟練運用 AI 工具，這裡的課程設計真的很好，推薦給所有人！',
    avatar: '/api/placeholder/64/64',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">學員評價</h2>
          <p className="text-xl text-gray-600">
            聽聽學員們的學習心得
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


