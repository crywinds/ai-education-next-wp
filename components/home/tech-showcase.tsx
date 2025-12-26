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

const tools = [
  {
    name: "ChatGPT",
    icon: MessageSquare,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    name: "Midjourney",
    icon: ImageIcon,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    name: "Claude",
    icon: Brain,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    name: "Stable Diffusion",
    icon: Sparkles,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    name: "Cursor AI",
    icon: Code,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    name: "Runway ML",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
];

export function TechShowcase() {
  return (
    <Section className="bg-muted/30">
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
            return (
              <div
                key={tool.name}
                className={cn(
                  "group relative p-6 rounded-lg border bg-background hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer",
                  tool.bgColor
                )}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex flex-col items-center gap-3">
                  <Icon
                    className={cn("w-8 h-8 group-hover:scale-110 transition-transform", tool.color)}
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

