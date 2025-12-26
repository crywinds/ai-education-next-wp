"use client";

import { Container, Section } from "@/components/craft";
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">我專注於細節，為您的品牌注入靈魂</h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                擁有豐富的設計與開發經驗，我深信優秀的產品源於對細節的極致追求。
                從像素級的 UI 設計到高性能的程式碼架構，我致力於提供最完美的數位體驗。
              </p>
              <p>
                結合設計美學與程式技術，為您構建高效、美觀且易於管理的現代化網站。
                從概念到上線，我們提供全方位的數位解決方案。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

