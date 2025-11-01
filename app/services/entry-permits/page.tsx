"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  CheckCircle,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  ShieldCheck,
  Star,
  Users,
  ArrowRight,
  Sparkles,
  Globe,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Enhanced Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

const testimonials = [
  {
    quote:
      "The entry permit process was incredibly smooth. I received my permit in just 4 days - truly exceptional service!",
    author: "Sarah M.",
    location: "Damascus",
    rating: 5,
    photoUrl: "/api/placeholder/50/50",
  },
  {
    quote:
      "As a family of five, we were worried about the complexity, but their team guided us through every step flawlessly.",
    author: "Ahmad K.",
    location: "Aleppo",
    rating: 5,
    photoUrl: "/api/placeholder/50/50",
  },
  {
    quote:
      "When my application had complications, they resolved the issues quickly. Their expertise is unmatched.",
    author: "Layla T.",
    location: "Homs",
    rating: 4,
    photoUrl: "/api/placeholder/50/50",
  },
];

const faqItems = [
  {
    question: "How far in advance should I apply for an entry permit?",
    answer:
      "We recommend applying for entry permits at least 2-3 weeks before your planned travel date. For peak travel seasons (July-August and December-January), consider applying 4-6 weeks in advance to avoid any delays.",
  },
  {
    question: "Can I extend my entry permit while in Jordan?",
    answer:
      "Yes, most permits can be extended through local authorities in Jordan. Tourist permits can typically be extended for up to an additional 3 months. We can provide guidance on the extension process for an additional fee.",
  },
  {
    question: "What happens if my entry permit application is rejected?",
    answer:
      "In the rare case of rejection, we will assist you in understanding the reasons and guide you on modifications needed for a successful reapplication. Our success rate is over 98%, and we offer a 50% discount on reapplication fees.",
  },
  {
    question: "Can I apply for an entry permit for a group or family?",
    answer:
      "Yes, we offer group and family applications. Each traveler needs individual documentation, but we streamline the process and offer discounts of 10% for groups of 3-5 people and 15% for groups of 6 or more.",
  },
  {
    question:
      "Are there any restrictions on who can apply for a Jordanian entry permit?",
    answer:
      "While most nationalities can apply for Jordanian entry permits, certain restrictions may apply based on current regulations. Our team will verify your eligibility during the initial consultation and advise accordingly.",
  },
  {
    question: "How can I check the status of my application?",
    answer:
      "After submitting your application, you'll receive a unique tracking number. You can check your application status through our secure online portal or by contacting our customer service team directly.",
  },
];

const advantages = [
  {
    title: "Lightning Fast",
    description:
      "Our expedited service reduces waiting times by up to 50% compared to standard applications.",
    icon: Clock,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Expert Guidance",
    description:
      "Our team includes former immigration officials with insider knowledge of the application process.",
    icon: BadgeCheck,
    gradient: "from-emerald-500 to-green-500",
    bgGradient: "from-emerald-500/10 to-green-500/10",
  },
  {
    title: "100% Accuracy",
    description:
      "We thoroughly review all documents to ensure they meet all current regulatory requirements.",
    icon: CheckCircle,
    gradient: "from-purple-500 to-indigo-500",
    bgGradient: "from-purple-500/10 to-indigo-500/10",
  },
  {
    title: "Bank-Level Security",
    description:
      "Your personal information is protected with enterprise-grade encryption and security protocols.",
    icon: ShieldCheck,
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-500/10 to-orange-500/10",
  },
];

export default function EntryPermitsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50">
      {/* Premium Glassmorphism Hero Section */}
      <section className="relative overflow-hidden pt-14">
        {/* Animated Background with Glassmorphism */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full blur-xl animate-bounce delay-500"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Premium Badge with Glassmorphism */}
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-full px-6 py-3 mb-8 group hover:scale-105 hover:bg-white/25 transition-all duration-300 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300 animate-pulse" />
              <span className="text-white/90 text-sm font-semibold tracking-wide">
                Premium Entry Permit Services
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Entry Permits
              </span>
              <br />
              <span className="text-white">Made Effortless</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl text-blue-100/90 mb-12 leading-relaxed max-w-3xl"
            >
              Experience premium entry permit services to Jordan with our cutting-edge platform. 
              Fast-track processing, expert guidance, and guaranteed results - all wrapped in a 
              luxurious, seamless experience.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button className="group bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                Start Your Application
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-md px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:border-white/50">
                View Requirements
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Glassmorphism Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 backdrop-blur-md rounded-full hidden lg:block animate-bounce border border-white/20"></div>
        <div className="absolute bottom-20 right-40 w-20 h-20 bg-white/5 backdrop-blur-md rounded-full hidden lg:block animate-bounce delay-1000 border border-white/10"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-white/5 backdrop-blur-md rounded-full hidden lg:block animate-pulse border border-white/10"></div>
      </section>

      {/* Premium Stats Section with Glassmorphism */}
      <section className="py-16 relative -mt-16 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Clock, value: "24hrs", label: "Avg. Processing", gradient: "from-blue-500 to-cyan-500" },
                { icon: CheckCircle, value: "99.2%", label: "Success Rate", gradient: "from-emerald-500 to-green-500" },
                { icon: Users, value: "25,000+", label: "Happy Clients", gradient: "from-purple-500 to-indigo-500" },
                { icon: Star, value: "4.9/5", label: "Client Rating", gradient: "from-amber-500 to-orange-500" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="group relative overflow-hidden backdrop-blur-xl bg-white/80 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl border border-white/20"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className="relative z-10 p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.gradient} text-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                      <stat.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:scale-105 transition-transform">
                      {stat.value}
                    </h3>
                    <p className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Advantages Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-6 py-3 mb-6">
              <Award className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Premium Advantages
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience the difference with our luxury approach to entry permit services.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {advantages.map((advantage, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="group relative overflow-hidden backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10 p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${advantage.gradient} text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                    <advantage.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premium Service Types with Enhanced Glassmorphism */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-100/30"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm border border-indigo-200/30 rounded-full px-6 py-3 mb-6">
              <Globe className="w-4 h-4 text-indigo-600" />
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 bg-clip-text text-transparent">
              Entry Permit Excellence
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose from our premium range of entry permit services designed for your specific needs.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Tourist Permit Card */}
            <motion.div 
              variants={scaleIn}
              className="group relative overflow-hidden backdrop-blur-xl bg-white/80 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  <FileText className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  Tourist Entry Permit
                </h3>
                <p className="text-gray-600 text-base mb-6 leading-relaxed">
                  Perfect for leisure travel, family visits, and tourism. Valid for up to 3 months with multiple entry options.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Valid for 3 months",
                    "Multiple entry options",
                    "Fast 24-48hr processing",
                    "Family group discounts"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start group/item">
                      <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                  <Link href='/apply/consular-permit' >
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl py-4 font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Apply for Tourist Permit
                </button>
                  </Link>
              </div>
            </motion.div>

            {/* Consular Permit Card */}
            <motion.div 
              variants={scaleIn}
              className="group relative overflow-hidden backdrop-blur-xl bg-white/80 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  <BadgeCheck className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors">
                  Consular Entry Permit
                </h3>
                <p className="text-gray-600 text-base mb-6 leading-relaxed">
                  For official business, diplomatic missions, and extended stays. Comprehensive documentation support included.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Extended validity periods",
                    "Official documentation",
                    "Priority processing",
                    "Diplomatic support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start group/item">
                      <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/apply/consular-permit">

                <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl py-4 font-semibold hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Apply for Consular Permit
                </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Premium Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600/10 to-green-600/10 backdrop-blur-sm border border-emerald-200/30 rounded-full px-6 py-3 mb-6">
              <Star className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span className="text-emerald-600 text-sm font-semibold uppercase tracking-wider">
                Client Stories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Real experiences from thousands of satisfied clients who trusted us with their journey.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group relative overflow-hidden backdrop-blur-xl bg-white/80 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premium CTA Section */}
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
    </div>
  );
}
