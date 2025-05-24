"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Saeed",
    role: "Business Traveler",
    content:
      "SyriJo Travel made my business trip to Amman incredibly smooth. Their visa service saved me so much time and hassle. The team's professionalism and attention to detail were outstanding.",
    rating: 5,
  },
  {
    id: 2,
    name: "Fatima Khalid",
    role: "Student",
    content:
      "As a student taking the German language exam, I was nervous about all the arrangements. Their team guided me through every step of the process and helped me secure my appointment. I couldn't be more grateful!",
    rating: 5,
  },
  {
    id: 3,
    name: "Omar Nasser",
    role: "Tourist",
    content:
      "My family vacation to Jordan was perfectly arranged by SyriJo Travel. The hotel recommendations were excellent and the transportation service was punctual and comfortable. A truly memorable experience!",
    rating: 5,
  },
  {
    id: 4,
    name: "Layla Ibrahim",
    role: "Medical Tourist",
    content:
      "I needed to travel to Jordan for medical treatment, and SyriJo made the entire process stress-free. They arranged everything from permits to accommodation near the hospital. Their support was invaluable.",
    rating: 5,
  },
  {
    id: 5,
    name: "Karim Farhat",
    role: "Family Traveler",
    content:
      "The entry permit application was straightforward with SyriJo Travel's assistance. Their team was responsive and took care of all the document preparations. Would definitely recommend their services!",
    rating: 4,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 300);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 border border-gray-200 rounded-full px-6 py-2 mb-6">
            <Quote className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-medium">
              Client Testimonials
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            What Our Clients Say
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Read testimonials from travelers who have experienced our
            exceptional services.
          </p>
        </motion.div>

        {/* Simple Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/90 border border-gray-200 rounded-2xl shadow-lg p-8 md:p-12"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
              <div className="flex-1 text-center lg:text-left">
                {/* Star Rating */}
                <div className="flex gap-1 justify-center lg:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5",
                        i < testimonials[activeIndex].rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      )}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed text-gray-800">
                  "{testimonials[activeIndex].content}"
                </blockquote>

                {/* Author Info */}
                <div className="bg-gray-50 rounded-xl p-4 inline-block">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-blue-600 font-medium">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 -translate-x-12 hidden lg:flex items-center">
            <Button
              onClick={prevSlide}
              size="icon"
              className="h-12 w-12 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-200"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute inset-y-0 right-0 translate-x-12 hidden lg:flex items-center">
            <Button
              onClick={nextSlide}
              size="icon"
              className="h-12 w-12 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-200"
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsAnimating(false), 300);
                }
              }}
              className={cn(
                "transition-all duration-200 rounded-full",
                activeIndex === index
                  ? "w-8 h-3 bg-blue-600"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              )}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
