"use client";

import { motion } from "framer-motion";
import { Shield, Clock, UserCheck, Globe, Star } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Service",
    description: "Licensed and certified visa processing service with years of experience",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-500/5 via-transparent to-blue-500/5"
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Quick and efficient visa processing with express options available",
    gradient: "from-emerald-500 to-emerald-600",
    bgGradient: "from-emerald-500/5 via-transparent to-emerald-500/5"
  },
  {
    icon: UserCheck,
    title: "Expert Support",
    description: "Dedicated team of visa experts to guide you through the process",
    gradient: "from-amber-500 to-amber-600",
    bgGradient: "from-amber-500/5 via-transparent to-amber-500/5"
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Strong partnerships with embassies and travel organizations",
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-500/5 via-transparent to-purple-500/5"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-6 py-2 mb-6">
            <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            Excellence in Every Journey
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We provide comprehensive visa and travel solutions with a focus on quality and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl p-8"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon with Gradient */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}