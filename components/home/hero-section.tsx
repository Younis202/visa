"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    title: "Your Bridge Between Syria & Jordan",
    subtitle: "Seamless Travel Solutions for Every Need",
    description: "Professional assistance with visas, transportation, and accommodation for a worry-free journey",
    image: "https://ik.imagekit.io/06fdnzilf/N_iiue6ySkKiG-sKFr5pWw.jpg?updatedAt=1746534761402",
    cta: "Our Services",
    link: "/services"
  },
    {
    id: 2,
    title: "Discover the Wonders of Jordan",
    subtitle: "From the Ancient City of Petra to the Serene Dead Sea",
    description: "Experience a journey through time and natural beauty with our expertly curated travel services",
    image: "https://ik.imagekit.io/06fdnzilf/imagehero%20(3).png?updatedAt=1746537860910",
    cta: "Start Your Journey",
    link: "/services/entry-permits"
  },
  {
    id: 3,
    title: "Expert Visa & Permit Services",
    subtitle: "Fast, Reliable, and Professional Assistance",
    description: "Let our experienced team handle your travel documentation with care and efficiency",
    image: "https://ik.imagekit.io/06fdnzilf/Be_LM5i_QSmeo3QbNa4rtQ.jpg?updatedAt=1746534757614",
    cta: "Apply Now",
    link: "/services/visa-services"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-600 text-white text-sm font-medium"
              >
                Welcome to SyriJo Travel
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-xl md:text-2xl text-gray-200 mb-4"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg text-gray-300 mb-8 max-w-2xl"
              >
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white group"
                  asChild
                >
                  <a href={slides[currentSlide].link}>
                    {slides[currentSlide].cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "transition-all duration-500 ease-out rounded-full",
              currentSlide === index
                ? "w-12 h-2 bg-blue-600"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}