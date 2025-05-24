"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  ArrowRight,
  Star,
  Shield,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Link href="/" className="group inline-block">
              <div className="relative p-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <Image
                  src="https://ik.imagekit.io/06fdnzilf/ChatGPT%20Image%208%20%D9%85%D8%A7%D9%8A%D9%88%202025_%2001_53_20%20%D9%85%20(1).png?updatedAt=1746701754026"
                  width={120}
                  height={120}
                  alt="Visa Welt Logo"
                  priority
                  className="object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>

            <p className="text-blue-100/90 leading-relaxed">
              Professional travel services between Syria and Jordan. Your
              trusted partner for seamless journeys.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 border border-white/20 rounded-full px-3 py-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-white/80 text-xs font-medium">Secure</span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 border border-white/20 rounded-full px-3 py-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white/80 text-xs font-medium">4.9/5</span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 border border-white/20 rounded-full px-3 py-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-white/80 text-xs font-medium">24/7</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              {[
                {
                  Icon: Facebook,
                  color: "hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-400/30",
                  href: "#"
                },
                { 
                  Icon: Twitter, 
                  color: "hover:bg-sky-500/20 hover:text-sky-300 hover:border-sky-400/30",
                  href: "#"
                },
                {
                  Icon: Instagram,
                  color: "hover:bg-pink-500/20 hover:text-pink-300 hover:border-pink-400/30",
                  href: "#"
                },
              ].map(({ Icon, color, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className={`group w-12 h-12 backdrop-blur-md bg-white/10 border border-white/20 text-white/70 ${color} rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-110`}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">Services</h3>
            <nav className="space-y-4">
              {[
                { name: "Entry Permits", popular: true },
                { name: "Visa Services", popular: false },
                { name: "Hotel Booking", popular: true },
                { name: "Transportation", popular: false },
                { name: "Language Exams", popular: false },
                { name: "Documents", popular: false },
              ].map((service) => (
                <Link
                  key={service.name}
                  href={`/services/${service.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mr-3 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
                    <span className="text-blue-100/90 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                      {service.name}
                    </span>
                  </div>
                  {service.popular && (
                    <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 py-1 rounded-full font-semibold">
                      Popular
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">Contact</h3>
            <div className="space-y-6">
              {[
                {
                  Icon: MapPin,
                  content: "123 Travel Street\nDamascus, Syria",
                  href: null,
                },
                {
                  Icon: Phone,
                  content: "+963 98 991 3472",
                  href: "tel:+96398991347",
                },
                {
                  Icon: Mail,
                  content: "info@syrijo.com",
                  href: "mailto:info@syrijo.com",
                },
              ].map(({ Icon, content, href }, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 backdrop-blur-md bg-white/10 border border-white/20 text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  {href ? (
                    <Link
                      href={href}
                      className="text-blue-100/90 hover:text-white transition-colors duration-300 leading-relaxed whitespace-pre-line group-hover:translate-x-1"
                    >
                      {content}
                    </Link>
                  ) : (
                    <address className="text-blue-100/90 not-italic leading-relaxed whitespace-pre-line">
                      {content}
                    </address>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-blue-100/80 leading-relaxed">
                Get exclusive travel deals and updates delivered to your inbox.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative group">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-14 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/50 focus:bg-white/20 focus:border-blue-400/50 transition-all duration-300 group-hover:bg-white/15 pr-12"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                  <Mail className="w-3 h-3 text-white" />
                </div>
              </div>
              <Button className="group w-full h-14 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105">
                <span className="flex items-center justify-center">
                  Subscribe Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                </span>
              </Button>
            </div>

            {/* Newsletter Benefits */}
            <div className="space-y-3">
              {[
                "Exclusive travel deals",
                "Early access to offers",
                "Travel tips & guides"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
                  <span className="text-blue-100/70 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-blue-100/70 text-sm">
                © {currentYear} Visa Welt. All rights reserved.
              </p>
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-white/60 text-xs">Trusted by 15,000+ travelers</span>
              </div>
            </div>

            <nav className="flex gap-8">
              {[
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Support Center", href: "/support" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-blue-100/70 hover:text-white text-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 backdrop-blur-md rounded-full hidden lg:block animate-bounce"></div>
      <div className="absolute bottom-20 right-40 w-20 h-20 bg-white/3 backdrop-blur-md rounded-full hidden lg:block animate-bounce delay-1000"></div>
      <div className="absolute top-40 left-20 w-24 h-24 bg-white/3 backdrop-blur-md rounded-full hidden lg:block animate-bounce delay-2000"></div>
    </footer>
  );
}
