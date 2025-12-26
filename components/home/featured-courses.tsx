"use client";

import { Container, Section } from "@/components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Clock, Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { InteractiveCard } from "@/components/ui/InteractiveCard";

const courses = [
  {
    id: 1,
    title: "ChatGPT 完整教學",
    description: "從零開始學習 ChatGPT，掌握提示詞工程與進階應用技巧，讓 AI 成為你的最佳助手",
    duration: "8 小時",
    students: "1,200+",
    rating: 4.9,
    level: "初級",
    category: "AI 工具",
    slug: "chatgpt-complete-guide",
  },
  {
    id: 2,
    title: "Midjourney AI 繪圖",
    description: "學習使用 Midjourney 創造驚艷的 AI 藝術作品，從基礎到進階，打造專業級視覺創作",
    duration: "6 小時",
    students: "850+",
    rating: 4.8,
    level: "中級",
    category: "AI 創作",
    slug: "midjourney-ai-art",
  },
  {
    id: 3,
    title: "AI 提示詞工程",
    description: "深入學習提示詞設計，讓 AI 生成更精準的內容，掌握與 AI 高效溝通的關鍵技巧",
    duration: "10 小時",
    students: "650+",
    rating: 5.0,
    level: "高級",
    category: "AI 技術",
    slug: "prompt-engineering",
  },
];

export function FeaturedCourses() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">精選課程</h2>
          <p className="text-lg text-muted-foreground">
            由專業講師精心設計的 AI 學習課程
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {courses.map((course) => (
            <InteractiveCard
              key={course.id}
              InteractiveColor="#3b82f6"
              borderRadius="12px"
              rotationFactor={0.2}
              tailwindBgClass="bg-card/50 backdrop-blur-sm border p-6 flex flex-col h-full"
            >
              <Link
                href={`/courses/${course.slug}`}
                className="group flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{course.category}</Badge>
                  <Badge
                    variant={course.level === "初級" ? "default" : course.level === "中級" ? "outline" : "destructive"}
                  >
                    {course.level}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-2 flex-grow">{course.description}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all mt-auto">
                  了解更多
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </InteractiveCard>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/courses">
              查看所有課程
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

