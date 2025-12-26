"use client";

import { Container, Section } from "@/components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Palette, Code, Smartphone, Layers, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { InteractiveCard } from "@/components/ui/InteractiveCard";

const services = [
  {
    icon: Palette,
    title: "網頁設計",
    description: "打造視覺美觀且符合品牌形象的網站設計",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "系統開發",
    description: "高性能、可擴展的現代化系統架構開發",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "App 設計",
    description: "直覺易用的行動應用程式設計與開發",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Layers,
    title: "UI / UX 設計",
    description: "以用戶為中心的介面與體驗設計",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Sparkles,
    title: "品牌識別",
    description: "建立獨特且一致的品牌視覺識別系統",
    color: "from-yellow-500 to-amber-500",
  },
];

export function ServicesShowcase() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">服務方案</h2>
          <p className="text-lg text-muted-foreground">
            提供全方位的數位解決方案
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <InteractiveCard
                key={service.title}
                InteractiveColor="#3b82f6"
                borderRadius="12px"
                rotationFactor={0.3}
                tailwindBgClass={cn(
                  "bg-card/50 backdrop-blur-sm border",
                  "p-6 flex flex-col items-center text-center gap-4"
                )}
                className="h-full"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={cn(
                    "p-4 rounded-lg bg-gradient-to-br",
                    service.color,
                    "bg-opacity-10 transition-all duration-300"
                  )}
                >
                  <Icon className="w-8 h-8 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </InteractiveCard>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              查看所有服務
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

