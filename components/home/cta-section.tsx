"use client";

import { Container, Section } from "@/components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <Section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-y">
      <Container>
        <div className="max-w-3xl mx-auto text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            準備好開始您的 AI 學習之旅了嗎？
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            立即加入我們，探索 AI 創作的無限可能，讓 AI 成為您最強大的創作夥伴
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/courses">
                開始學習
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <Link href="/contact">
                聯絡我們
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

