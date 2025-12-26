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
import { SlidingLogoMarquee, SlidingLogoMarqueeItem } from "@/components/ui/SlidingLogoMarquee";

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
  const marqueeItems: SlidingLogoMarqueeItem[] = tools.map((tool) => {
    const Icon = tool.icon;
    return {
      id: tool.name,
      content: (
        <div className={cn(
          "group relative p-6 rounded-xl border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-pointer",
          tool.bgColor,
          tool.hoverColor
        )}>
          <div className="flex flex-col items-center gap-3 min-w-[120px]">
            <Icon
              className={cn(
                "w-8 h-8 group-hover:scale-125 transition-transform duration-300",
                tool.color
              )}
            />
            <span className="text-sm font-medium text-center whitespace-nowrap">{tool.name}</span>
          </div>
        </div>
      ),
    };
  });

  return (
    <Section className="bg-muted/30 relative overflow-hidden">
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

        <div className="py-8">
          <SlidingLogoMarquee
            items={marqueeItems}
            speed={50}
            height="180px"
            enableBlur={true}
            blurIntensity={2}
            pauseOnHover={true}
            backgroundColor="transparent"
            gap="1.5rem"
          />
        </div>
      </Container>
    </Section>
  );
}
