import Link from "next/link";
import { Section, Container } from "@/components/craft";
import { siteConfig } from "@/site.config";
import { footerLinks } from "@/menu.config";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function MainFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* 品牌介紹 */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <Image
                  src={Logo}
                  alt={siteConfig.site_name}
                  width={32}
                  height={32}
                  className="dark:invert"
                />
                <span className="font-semibold text-lg">{siteConfig.site_name}</span>
              </Link>
              <p className="text-muted-foreground leading-relaxed">
                致力於創造直覺且美觀的數位體驗。結合設計思維與程式技術，打造有溫度的網路產品。
                從品牌識別到系統開發，我們提供全方位的解決方案，協助企業在數位浪潮中脫穎而出。
              </p>
              
              {/* 社群連結 */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 網站導覽 */}
            <div>
              <h3 className="font-semibold mb-4">網站導覽</h3>
              <ul className="space-y-2 text-sm">
                {Object.entries(footerLinks.網站導覽).map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 精選作品 */}
            <div>
              <h3 className="font-semibold mb-4">精選作品</h3>
              <ul className="space-y-2 text-sm">
                {Object.entries(footerLinks.精選作品).map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 編輯精選 */}
            <div>
              <h3 className="font-semibold mb-4">編輯精選</h3>
              <ul className="space-y-2 text-sm">
                {Object.entries(footerLinks.編輯精選).map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 訂閱電子報 */}
          <div className="border-t pt-8 mb-8">
            <div className="max-w-md">
              <h3 className="font-semibold mb-2">訂閱我的電子報</h3>
              <p className="text-sm text-muted-foreground mb-4">
                每週一次寄送產品實戰筆記、AI 工具評測與設計靈感，不錯過任何重要更新。
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="輸入您的 Email"
                  className="flex-1 px-4 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  立即訂閱
                </button>
              </form>
              <p className="text-xs text-muted-foreground mt-2">
                無廣告、無垃圾信，想退訂隨時一鍵完成。
              </p>
            </div>
          </div>

          {/* 底部版權 */}
          <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <p className="text-sm text-muted-foreground">
                © {currentYear} {siteConfig.site_name} All Rights Reserved
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                隱私權政策
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                服務條款
              </Link>
              <Link href="/design-system" className="hover:text-foreground transition-colors">
                網站視覺規範
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
}

