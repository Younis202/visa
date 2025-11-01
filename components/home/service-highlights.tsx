"use client";

import { useState } from "react";
import Link from "next/link";
import { Plane, Hotel, FileText, Globe, CarTaxiFront as Taxi, Languages, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "entry-permits",
    title: "Entry Permits",
    description: "Apply for tourist or consular permits from Syria to Jordan with our streamlined process.",
    icon: Globe,
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-500/5 via-transparent to-blue-500/5",
    href: "/services/entry-permits"
  },
  {
    id: "visa-services",
    title: "Visa Services",
    description: "Complete assistance with filling visa applications, document submission, and status tracking.",
    icon: FileText,
    gradient: "from-indigo-500 to-indigo-600",
    bgGradient: "from-indigo-500/5 via-transparent to-indigo-500/5",
    href: "/services/visa-services"
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    description: "Compare and book hotels with the best rates across Jordan through our partner network.",
    icon: Hotel,
    gradient: "from-emerald-500 to-emerald-600",
    bgGradient: "from-emerald-500/5 via-transparent to-emerald-500/5",
    href: "/services/hotel-booking"
  },
  {
    id: "transportation",
    title: "Transportation",
    description: "Book flights, buses between Damascus-Amman, and trusted taxi services.",
    icon: Plane,
    gradient: "from-amber-500 to-amber-600",
    bgGradient: "from-amber-500/5 via-transparent to-amber-500/5",
    href: "/services/transportation"
  },
  {
    id: "language-exams",
    title: "German Language Exams",
    description: "Schedule Goethe-Zertifikat and ÖSD exams required for visas or immigration.",
    icon: Languages,
    gradient: "from-red-500 to-red-600",
    bgGradient: "from-red-500/5 via-transparent to-red-500/5",
    href: "/services/language-exams"
  },
  {
    id: "document-services",
    title: "Document Services",
    description: "Document translation, legalization, and obtaining necessary certifications.",
    icon: FileText,
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-500/5 via-transparent to-purple-500/5",
    href: "/services/document-services"
  }
];

export default function ServiceHighlights() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-6 py-2 mb-6">
            <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            Premium Travel Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive travel solutions to make your journey between Syria and Jordan seamless, safe, and enjoyable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                href={service.href}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="block group h-full"
              >
                <div className="group relative overflow-hidden backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl h-full">
                  {/* Gradient Overlay */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    service.bgGradient
                  )}></div>
                  
                  <div className="relative z-10 p-8">
                    {/* Icon with Gradient */}
                    <div className={cn(
                      "w-16 h-16 rounded-2xl bg-gradient-to-br text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg",
                      service.gradient
                    )}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}