"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* 背景裝飾元素 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container max-w-5xl mx-auto px-6 sm:px-8 py-20 text-center">
        {/* 評分徽章 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/80 backdrop-blur-sm border mb-8 animate-slide-in-bottom delay-100">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-medium">5.0</span>
          <span className="text-sm text-muted-foreground">來自 200+ 評價</span>
        </div>

        {/* 主標題 */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 animate-slide-in-bottom delay-200">
          你的 AI 創作魔法好幫手
          <br />
          <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            AI 教育學院
          </span>
        </h1>

        {/* 副標題 */}
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-in-bottom delay-300">
          結合 AI 技術與實戰經驗，為您構建高效、實用且易於掌握的 AI 創作技能。
          從 ChatGPT 到 Midjourney，我們提供全方位的 AI 教育解決方案。
        </p>

        {/* CTA 按鈕組 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-bottom delay-500">
          <Button asChild size="lg" className="group text-lg px-8 py-6">
            <Link href="/courses">
              探索課程
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
            <Link href="/blog">
              <Sparkles className="mr-2 w-5 h-5" />
              閱讀最新文章
            </Link>
          </Button>
        </div>

        {/* 向下滾動提示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

