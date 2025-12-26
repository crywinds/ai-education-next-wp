"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { mainMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";
import { Bell, User } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { MobileNav } from "./mobile-nav";
import Image from "next/image";
import Logo from "@/public/logo.svg";

export function MainNav() {
  return (
    <nav className="sticky z-50 top-0 bg-background/80 backdrop-blur-md border-b supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src={Logo}
              alt={siteConfig.site_name}
              width={32}
              height={32}
              className="dark:invert"
              priority
            />
            <span className="font-semibold text-lg">{siteConfig.site_name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {Object.entries(mainMenu).map(([label, href]) => (
              <Button
                key={href}
                asChild
                variant="ghost"
                className="relative group"
              >
                <Link href={href}>
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </Link>
              </Button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Bell className="w-5 h-5" />
              <span className="sr-only">通知</span>
            </Button>
            
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="w-5 h-5" />
              <span className="sr-only">登入</span>
            </Button>

            <ThemeToggle />

            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
}

