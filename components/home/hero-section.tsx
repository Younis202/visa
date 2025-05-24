"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Your Bridge Between Syria & Jordan",
    subtitle: "Seamless Travel Solutions for Every Need",
    description:
      "Professional assistance with visas, transportation, and accommodation for a worry-free journey",
    image:
      "https://ik.imagekit.io/06fdnzilf/N_iiue6ySkKiG-sKFr5pWw.jpg?updatedAt=1746534761402",
    cta: "Our Services",
    link: "/services",
  },
  {
    id: 2,
    title: "Discover the Wonders of Jordan",
    subtitle: "From the Ancient City of Petra to the Serene Dead Sea",
    description:
      "Experience a journey through time and natural beauty with our expertly curated travel services",
    image:
      "https://ik.imagekit.io/06fdnzilf/imagehero%20(3).png?updatedAt=1746537860910",
      cta: "Our Services",
      link: "/services",
  },
  {
    id: 3,
    title: "Expert Visa & Permit Services",
    subtitle: "Fast, Reliable, and Professional Assistance",
    description:
      "Let our experienced team handle your travel documentation with care and efficiency",
    image:
      "https://ik.imagekit.io/06fdnzilf/Be_LM5i_QSmeo3QbNa4rtQ.jpg?updatedAt=1746534757614",
      cta: "Our Services",
      link: "/services",
  },
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
    <section className="relative h-screen w-full overflow-hidden pt-14">
      {/* Animated Background with Glassmorphism */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-blue-800/20 to-indigo-900/20" />
          {/* Floating Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-40 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-40 left-60 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content with Premium Glassmorphism */}
      <div className="relative h-full flex items-center z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl"
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-full px-6 py-3 mb-8 group hover:scale-105 transition-all duration-300"
              >
                <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                <span className="text-white/90 text-sm font-medium">
                  Welcome to Visa Welt
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="text-white">
                  {slides[currentSlide].title.split(" ").slice(0, 3).join(" ")}
                </span>
                <br />
                <span className="text-white">
                  {slides[currentSlide].title.split(" ").slice(3).join(" ")}
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-xl md:text-2xl text-white font-medium"
              >
                {slides[currentSlide].subtitle}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg md:text-xl text-white mb-12 leading-relaxed max-w-2xl"
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Link href={slides[currentSlide].link}>
                <button className="group bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                  {slides[currentSlide].cta}
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                </Link>
                <button className="text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-md px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators with Glassmorphism */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300 backdrop-blur-sm",
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            )}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 backdrop-blur-md rounded-full hidden lg:block animate-bounce"></div>
      <div className="absolute bottom-20 right-40 w-20 h-20 bg-white/5 backdrop-blur-md rounded-full hidden lg:block animate-bounce delay-1000"></div>
    </section>
  );
}
