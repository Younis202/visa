"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function CTASection() {
  return (
      <section className="relative py-32 overflow-hidden">
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-full px-6 py-3 mb-8 group hover:scale-105 transition-all duration-300"
            >
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300 group-hover:rotate-12 transition-transform" />
              <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                Premium Service Guarantee
              </span>
            </motion.div>

            {/* Main Heading with Gradient Text */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Ready to Start
              </span>
              <br />
              <span className="text-white">Your Journey?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-blue-100/90 mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              Join thousands of satisfied travelers who trusted us with their entry permit applications. 
              Experience our premium service with guaranteed results.
            </motion.p>

            {/* Floating Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <button className="group relative overflow-hidden bg-white text-blue-700 hover:bg-blue-50 px-10 py-5 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 flex items-center justify-center min-w-[200px]">
                <span className="relative z-10 flex items-center">
                  Apply Now
                  <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group relative overflow-hidden backdrop-blur-md bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 px-10 py-5 text-lg font-semibold rounded-2xl transition-all duration-500 hover:scale-105 flex items-center justify-center min-w-[200px]">
                <span className="flex items-center">
                  <FileText className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Get Quote
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80"
            >
              <div className="flex items-center gap-3 backdrop-blur-sm bg-white/10 rounded-full px-6 py-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium">98.7% Success Rate</span>
              </div>
              <div className="flex items-center gap-3 backdrop-blur-sm bg-white/10 rounded-full px-6 py-3">
                <Clock className="w-5 h-5 text-blue-300" />
                <span className="text-sm font-medium">48hr Processing</span>
              </div>
              <div className="flex items-center gap-3 backdrop-blur-sm bg-white/10 rounded-full px-6 py-3">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-medium">Secure & Confidential</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 backdrop-blur-md rounded-full hidden lg:block animate-bounce"></div>
        <div className="absolute bottom-20 right-40 w-20 h-20 bg-white/5 backdrop-blur-md rounded-full hidden lg:block animate-bounce delay-1000"></div>
        <div className="absolute top-40 left-20 w-24 h-24 bg-white/5 backdrop-blur-md rounded-full hidden lg:block animate-bounce delay-2000"></div>
      </section>
  );
}