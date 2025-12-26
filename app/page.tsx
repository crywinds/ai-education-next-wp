import { HeroSection } from "@/components/home/hero-section";
import { TechShowcase } from "@/components/home/tech-showcase";
import { AboutSection } from "@/components/home/about-section";
import { AITrendsSection } from "@/components/home/ai-trends-section";
import { ServicesShowcase } from "@/components/home/services-showcase";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { Testimonials } from "@/components/home/testimonials";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechShowcase />
      <AboutSection />
      <ServicesShowcase />
      <AITrendsSection />
      <FeaturedCourses />
      <Testimonials />
      <CTASection />
    </>
  );
}
