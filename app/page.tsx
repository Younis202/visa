import HeroSection from '@/components/home/hero-section';
import ServiceHighlights from '@/components/home/service-highlights';
import Testimonials from '@/components/home/testimonials';
import FeaturedDestinations from '@/components/home/featured-destinations';
import CTASection from '@/components/home/cta-section';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServiceHighlights />
      <Separator className="my-12" />
      <FeaturedDestinations />
      <Separator className="my-12" />
      <Testimonials />
      <CTASection />
    </div>
  );
}