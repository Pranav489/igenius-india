import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import CoursesSection from "@/components/home/CoursesSection";
import WhyIGenius from "@/components/home/WhyIGenius";
import ClassModeSection from "@/components/home/ClassModeSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import { buildMetadata } from "@/utils/seoConfig";
import HeroSection from "@/components/home/HeroSection";

export const metadata = buildMetadata("home");

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CoursesSection />
      <WhyIGenius />
      <ClassModeSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
