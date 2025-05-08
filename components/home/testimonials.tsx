"use client"

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Saeed",
    role: "Business Traveler",
    content: "SyriJo Travel made my business trip to Amman incredibly smooth. Their visa service saved me so much time and hassle. The team's professionalism and attention to detail were outstanding.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Fatima Khalid",
    role: "Student",
    content: "As a student taking the German language exam, I was nervous about all the arrangements. Their team guided me through every step of the process and helped me secure my appointment. I couldn't be more grateful!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Omar Nasser",
    role: "Tourist",
    content: "My family vacation to Jordan was perfectly arranged by SyriJo Travel. The hotel recommendations were excellent and the transportation service was punctual and comfortable. A truly memorable experience!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/62.jpg"
  },
  {
    id: 4,
    name: "Layla Ibrahim",
    role: "Medical Tourist",
    content: "I needed to travel to Jordan for medical treatment, and SyriJo made the entire process stress-free. They arranged everything from permits to accommodation near the hospital. Their support was invaluable.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/17.jpg"
  },
  {
    id: 5,
    name: "Karim Farhat",
    role: "Family Traveler",
    content: "The entry permit application was straightforward with SyriJo Travel's assistance. Their team was responsive and took care of all the document preparations. Would definitely recommend their services!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/77.jpg"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Read testimonials from travelers who have experienced our services firsthand.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="absolute top-0 right-0 w-32 h-32 -translate-y-12 translate-x-8">
                <Quote className="w-full h-full text-blue-100 dark:text-blue-900/30" />
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-blue-100 dark:ring-blue-900">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex gap-1 justify-center md:justify-start mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={cn(
                            "w-5 h-5", 
                            i < testimonials[activeIndex].rating 
                              ? "text-yellow-400 fill-yellow-400" 
                              : "text-gray-300 dark:text-gray-600"
                          )}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl font-medium mb-6 text-gray-800 dark:text-gray-200">
                      "{testimonials[activeIndex].content}"
                    </blockquote>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 -translate-x-12 hidden md:flex items-center">
            <Button 
              onClick={prevSlide}
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute inset-y-0 right-0 translate-x-12 hidden md:flex items-center">
            <Button 
              onClick={nextSlide}
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200"
              disabled={isAnimating}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={cn(
                "transition-all duration-300 rounded-full",
                activeIndex === index
                  ? "w-8 h-2 bg-blue-600"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
              )}
              disabled={isAnimating}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}