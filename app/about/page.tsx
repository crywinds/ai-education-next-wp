export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">關於我們</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我們的使命</h2>
            <p className="text-gray-700 text-lg mb-4">
              AI 教育學院致力於提供最優質的 AI 創作教育，幫助每個人都能掌握最新的人工智慧技術。
              我們相信 AI 將改變世界，而教育是讓每個人都能參與這場變革的關鍵。
            </p>
            <p className="text-gray-700 text-lg">
              無論您是創作者、設計師、開發者，還是對 AI 充滿好奇的學習者，
              我們都有適合您的課程與資源。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">為什麼選擇我們</h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>專業講師團隊：</strong>由 AI 領域的資深專家與實務工作者組成</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>最新內容：</strong>持續更新課程內容，緊跟 AI 技術發展趨勢</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>實戰導向：</strong>注重實際應用，讓您能夠立即將所學運用於工作中</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>社群支持：</strong>加入我們的學習社群，與其他學員交流分享</span>
              </li>
            </ul>
          </section>

          <section className="mb-12 bg-primary-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">聯絡我們</h2>
            <p className="text-gray-700 text-lg mb-4">
              如果您有任何問題或建議，歡迎隨時與我們聯絡。
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email：</strong> info@ai-edu.com</p>
              <p><strong>電話：</strong> (02) 1234-5678</p>
              <p><strong>地址：</strong> 台北市信義區信義路五段 7 號</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}








