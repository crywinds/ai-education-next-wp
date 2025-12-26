"use client";

import { Container, Section } from "@/components/craft";
import { cn } from "@/lib/utils";
import {
  MessageSquare,
  Image as ImageIcon,
  Code,
  Sparkles,
  Brain,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const tools = [
  {
    name: "ChatGPT",
    icon: MessageSquare,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    hoverColor: "hover:bg-green-500/20",
  },
  {
    name: "Midjourney",
    icon: ImageIcon,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    hoverColor: "hover:bg-purple-500/20",
  },
  {
    name: "Claude",
    icon: Brain,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    hoverColor: "hover:bg-orange-500/20",
  },
  {
    name: "Stable Diffusion",
    icon: Sparkles,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    hoverColor: "hover:bg-blue-500/20",
  },
  {
    name: "Cursor AI",
    icon: Code,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    hoverColor: "hover:bg-cyan-500/20",
  },
  {
    name: "Runway ML",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    hoverColor: "hover:bg-yellow-500/20",
  },
];

export function TechShowcase() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 依次顯示每個工具圖標
            tools.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  const newItems = [...prev];
                  newItems[index] = true;
                  return newItems;
                });
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Section className="bg-muted/30 relative overflow-hidden" ref={sectionRef}>
      {/* 背景裝飾 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">我們使用的技術</h2>
          <p className="text-lg text-muted-foreground">
            掌握業界最熱門的 AI 工具與技術
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            const isVisible = visibleItems[index] ?? false;
            return (
              <div
                key={tool.name}
                className={cn(
                  "group relative p-6 rounded-xl border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer overflow-hidden",
                  tool.bgColor,
                  tool.hoverColor,
                  isVisible ? "animate-scale-in" : "opacity-0"
                )}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {/* 懸停時的發光效果 */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex flex-col items-center gap-3">
                  <Icon
                    className={cn(
                      "w-8 h-8 group-hover:scale-125 transition-transform duration-300",
                      tool.color
                    )}
                  />
                  <span className="text-sm font-medium text-center">{tool.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
