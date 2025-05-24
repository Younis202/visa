"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock, Tag, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    title: "Updated Visa Requirements for Jordan",
    date: "March 15, 2024",
    excerpt: "Important changes to visa application process and documentation requirements.",
    category: "Visa Updates",
    readTime: "3 min read"
  },
  {
    title: "New Direct Flights from Damascus to Amman",
    date: "March 10, 2024",
    excerpt: "Additional flight routes opening up for easier travel between Syria and Jordan.",
    category: "Travel News",
    readTime: "2 min read"
  },
  {
    title: "Spring Travel Guide: Jordan 2024",
    date: "March 5, 2024",
    excerpt: "Essential tips for planning your spring journey to Jordan.",
    category: "Travel Tips",
    readTime: "5 min read"
  }
];

export default function NewsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Primary Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50/50 to-blue-50/30"></div>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100/30 via-transparent to-gray-100/30 animate-gradient-x"></div>
        
        {/* Floating Orbs */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -70, 0],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-36 h-36 bg-gradient-to-br from-slate-200/25 to-gray-300/20 rounded-full blur-3xl"
          ></motion.div>
          
          <motion.div 
            animate={{ 
              x: [0, -90, 0],
              y: [0, 60, 0],
              scale: [1, 0.7, 1],
              rotate: [360, 0, 360]
            }}
            transition={{ 
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 7
            }}
            className="absolute bottom-20 left-20 w-44 h-44 bg-gradient-to-br from-blue-200/20 to-indigo-200/15 rounded-full blur-3xl"
          ></motion.div>
        </div>
        
        {/* Mesh Gradient Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_75%,rgba(71,85,105,0.1),transparent_50%),radial-gradient(circle_at_75%_25%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          {/* Premium Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 backdrop-blur-xl bg-gradient-to-r from-slate-500/10 via-gray-500/10 to-blue-500/10 border border-white/30 rounded-full px-8 py-3 mb-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="relative">
              <Newspaper className="w-5 h-5 text-slate-600 group-hover:text-slate-700 transition-colors" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-slate-700 text-sm font-bold uppercase tracking-wider">Latest Updates</span>
            <Clock className="w-4 h-4 text-blue-500 animate-pulse" />
          </motion.div>
          
          {/* Enhanced Gradient Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent animate-gradient-x">
              Stay Updated with
            </span>
            <br />
            <span className="bg-gradient-to-r from-slate-600 via-blue-600 to-slate-600 bg-clip-text text-transparent animate-gradient-x">
              Latest News
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Stay informed with the latest travel news, visa updates, and essential travel information.
          </motion.p>
        </motion.div>
        
        {/* Enhanced News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Enhanced News Card */}
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/25 via-white/15 to-white/10 border border-white/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500">
                {/* Floating Decorative Elements */}
                <motion.div 
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-300/30 to-slate-300/30 backdrop-blur-md rounded-full border border-white/20"
                ></motion.div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Date and Read Time */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-full px-3 py-1">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs font-medium">{item.readTime}</span>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 backdrop-blur-md bg-gradient-to-r from-blue-500/20 to-slate-500/20 border border-white/30 rounded-full px-4 py-2 mb-4 shadow-sm"
                  >
                    <Tag className="h-3 w-3 text-blue-600" />
                    <span className="text-sm font-bold text-blue-700">{item.category}</span>
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                    <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-slate-600">
                      {item.title}
                    </span>
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.excerpt}
                  </p>
                  
                  {/* Read More Button */}
                  <Button 
                    variant="ghost" 
                    className="backdrop-blur-md bg-white/20 border border-white/30 text-gray-700 hover:bg-white/30 hover:text-gray-900 rounded-full px-6 py-3 font-semibold transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg group w-full"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Read More 
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-white/20 via-slate-50/30 to-white/20 border border-white/30 rounded-2xl p-8 shadow-xl inline-block">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-800 to-slate-600 bg-clip-text text-transparent">
                Never Miss an Update
              </span>
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">Subscribe to our newsletter for the latest travel news and visa updates.</p>
            <Button className="bg-gradient-to-r from-slate-500 via-gray-600 to-slate-500 hover:from-slate-600 hover:via-gray-700 hover:to-slate-600 text-white border-0 rounded-full px-8 py-3 font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Subscribe Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
