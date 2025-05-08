"use client"

import { useState } from "react";
import Link from "next/link";
import { Plane, Hotel, FileText, Globe, CarTaxiFront as Taxi, Languages, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "entry-permits",
    title: "Entry Permits",
    description: "Apply for tourist or consular permits from Syria to Jordan with our streamlined process.",
    icon: Globe,
    color: "bg-blue-500/10 text-blue-500",
    href: "/services/entry-permits"
  },
  {
    id: "visa-services",
    title: "Visa Services",
    description: "Complete assistance with filling visa applications, document submission, and status tracking.",
    icon: FileText,
    color: "bg-indigo-500/10 text-indigo-500",
    href: "/services/visa-services"
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    description: "Compare and book hotels with the best rates across Jordan through our partner network.",
    icon: Hotel,
    color: "bg-emerald-500/10 text-emerald-500",
    href: "/services/hotel-booking"
  },
  {
    id: "transportation",
    title: "Transportation",
    description: "Book flights, buses between Damascus-Amman, and trusted taxi services.",
    icon: Plane,
    color: "bg-amber-500/10 text-amber-500",
    href: "/services/transportation"
  },
  {
    id: "language-exams",
    title: "German Language Exams",
    description: "Schedule Goethe-Zertifikat and ÖSD exams required for visas or immigration.",
    icon: Languages,
    color: "bg-red-500/10 text-red-500",
    href: "/services/language-exams"
  },
  {
    id: "document-services",
    title: "Document Services",
    description: "Document translation, legalization, and obtaining necessary certifications.",
    icon: FileText,
    color: "bg-purple-500/10 text-purple-500",
    href: "/services/document-services"
  }
];

export default function ServiceHighlights() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Travel Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Comprehensive travel solutions to make your journey between Syria and Jordan 
            seamless, safe, and enjoyable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              href={service.href} 
              key={service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="block group"
            >
              <Card className={cn(
                "h-full transition-all duration-300 overflow-hidden",
                "border-2",
                hoveredCard === service.id 
                  ? "border-blue-400 dark:border-blue-500 shadow-lg scale-[1.02]" 
                  : "border-transparent shadow hover:shadow-md"
              )}>
                <CardHeader className="pb-4">
                  <div className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                    service.color
                  )}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <div className={cn(
                    "flex items-center text-blue-600 dark:text-blue-400 font-medium",
                    "transition-all duration-300 group-hover:translate-x-2"
                  )}>
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}