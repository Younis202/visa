import CTASection from "@/components/home/cta-section";
import FeaturedDestinations from "@/components/home/featured-destinations";
import HeroSection from "@/components/home/hero-section";
import NewsSection from "@/components/home/news-section";
import PartnersSection from "@/components/home/partners-section";
import ServiceHighlights from "@/components/home/service-highlights";
import Testimonials from "@/components/home/testimonials";
import WhyChooseUs from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServiceHighlights />
      <FeaturedDestinations />
      <WhyChooseUs />
      <NewsSection />
      <PartnersSection />
      <Testimonials />
      <CTASection />
    </div>
  );
}
