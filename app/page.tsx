import { HeroSection } from "@/components/home/hero-section";
import { TechShowcase } from "@/components/home/tech-showcase";
import { AITrendsSection } from "@/components/home/ai-trends-section";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { Testimonials } from "@/components/home/testimonials";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechShowcase />
      <AITrendsSection />
      <FeaturedCourses />
      <Testimonials />
      <CTASection />
    </>
  );
}
