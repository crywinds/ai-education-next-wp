"use client";

import { Container, Section } from "@/components/craft";
import { Star } from "lucide-react";
import { InteractiveCard } from "@/components/ui/InteractiveCard";

const testimonials = [
  {
    name: "王小明",
    role: "平面設計師",
    content: "Midjourney 課程讓我學會了如何用 AI 創作驚艷的作品，工作效率提升了好幾倍！",
    rating: 5,
  },
  {
    name: "李美麗",
    role: "內容創作者",
    content: "ChatGPT 課程的提示詞工程教學非常實用，現在我能輕鬆創作出高品質內容。",
    rating: 5,
  },
  {
    name: "張志強",
    role: "行銷專員",
    content: "從零基礎到能夠熟練運用 AI 工具，這裡的課程設計真的很好，推薦給所有人！",
    rating: 5,
  },
  {
    name: "陳雅婷",
    role: "產品經理",
    content: "AI 提示詞工程課程讓我能夠更有效地與 AI 協作，產品開發效率大幅提升。",
    rating: 5,
  },
  {
    name: "林志明",
    role: "自由工作者",
    content: "課程內容非常豐富且實用，講師的講解很清楚，學完後立即就能應用在工作上。",
    rating: 5,
  },
  {
    name: "黃淑芬",
    role: "教育工作者",
    content: "作為老師，這些 AI 工具大大提升了我的教學效率，課程品質也變得更好了。",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">學員評價</h2>
          <p className="text-lg text-muted-foreground">
            聽聽學員們的學習心得與真實反饋
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <InteractiveCard
              key={index}
              InteractiveColor="#8b5cf6"
              borderRadius="12px"
              rotationFactor={0.2}
              tailwindBgClass="bg-card/50 backdrop-blur-sm border p-6 flex flex-col h-full"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic flex-grow">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </InteractiveCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}

