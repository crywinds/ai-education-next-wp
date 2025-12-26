import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { MainNav } from "@/components/nav/main-nav";
import { MainFooter } from "@/components/footer/main-footer";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";

import type { Metadata } from "next";

const font = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AI 教育學院 - 學習 AI 創作的專業平台",
  description:
    "探索 AI 創作、學習最新 AI 技術，參加專業 AI 課程，從 ChatGPT 到 Midjourney，開啟您的 AI 創作之旅",
  metadataBase: new URL(siteConfig.site_domain),
  alternates: {
    canonical: "/",
  },
  keywords: "AI 教育, AI 課程, AI 創作, 人工智慧, 機器學習, ChatGPT, Midjourney",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen font-sans antialiased", font.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNav />
          {children}
          <MainFooter />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

