"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  FileText,
  Languages,
  Shield,
  Stamp,
  Star,
  Zap,
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function DocumentServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Hero Section with Glassmorphism */}
      <section className="relative py-32 overflow-hidden pt-22">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px]" />
        </div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-purple-300/20 rounded-full blur-xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-white/20 hover:bg-white/30 text-white px-4 py-2 text-sm font-medium backdrop-blur-sm border-none">
                <FileText className="w-4 h-4 mr-2" />
                Professional Document Services
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight"
              variants={fadeInUp}
            >
              Document Services
              <span className="block text-3xl md:text-4xl text-purple-200 font-normal mt-2">
                Professional • Certified • Reliable
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-purple-100 mb-10 leading-relaxed max-w-3xl"
              variants={fadeInUp}
            >
              Professional document translation, legalization, and certification
              services for all your travel and immigration needs with guaranteed
              accuracy and fast turnaround.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              variants={fadeInUp}
            >
              <Button className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 px-8 py-6 rounded-2xl font-medium text-lg transition-all duration-300 hover:scale-105">
                <Zap className="w-5 h-5 mr-2" />
                Get Started Now
              </Button>
              <Button
                variant="outline"
                className="text-white border-white/50 hover:bg-white/10 backdrop-blur-md px-8 py-6 rounded-2xl font-medium text-lg"
              >
                View Services
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Document Icon */}
        <motion.div
          className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-20 pointer-events-none"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FileText className="w-64 h-64 text-white" />
        </motion.div>
      </section>

      {/* Enhanced Services Grid with Glassmorphism */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.05),transparent_70%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/70 px-4 py-2">
                Our Services
              </Badge>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Professional Document Solutions
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
              variants={fadeInUp}
            >
              Comprehensive document handling solutions for your travel and
              immigration needs with certified quality and fast processing.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Document Translation Card */}
            <motion.div variants={fadeInUp}>
              <Card className="group relative overflow-hidden border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="absolute inset-[1px] bg-white dark:bg-gray-800 rounded-2xl" />

                {/* Content */}
                <div className="relative p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Languages className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold mb-3">
                      Document Translation
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      Professional translation services for all types of
                      documents
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-4">
                      <li className="flex items-start group/item">
                        <div className="mr-3 mt-1 p-1 rounded-full bg-green-100 dark:bg-green-900/30 group-hover/item:bg-green-200 dark:group-hover/item:bg-green-900/50 transition-colors">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Certified translations
                        </span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="mr-3 mt-1 p-1 rounded-full bg-green-100 dark:bg-green-900/30 group-hover/item:bg-green-200 dark:group-hover/item:bg-green-900/50 transition-colors">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          25+ language pairs
                        </span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="mr-3 mt-1 p-1 rounded-full bg-green-100 dark:bg-green-900/30 group-hover/item:bg-green-200 dark:group-hover/item:bg-green-900/50 transition-colors">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          24-72h turnaround
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </div>
              </Card>
            </motion.div>

            {/* Document Legalization Card */}
            <motion.div variants={fadeInUp}>
              <Card className="group relative overflow-hidden border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="absolute inset-[1px] bg-white dark:bg-gray-800 rounded-2xl" />

                {/* Content */}
                <div className="relative p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Stamp className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold mb-3">
                      Document Legalization
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      Official legalization and attestation services
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-4">
                      <li className="flex items-start group/item">
                        <div className="mr-3 mt-1 p-1 rounded-full bg-green-100 dark:bg-green-900/30 group-hover/item:bg-green-200 dark:group-hover/item:bg-green-900/50 transition-colors">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Embassy legalization
                        </span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="mr-3 mt-1 p-1 rounded-full bg-green-100 dark:bg-green-900/30 group-hover/item:bg-green-200 dark:group-hover/item:bg-green-900/50 transition-colors">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Apostille services
                        </span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="mr-3 mt-1 p-1 rounded-full bg-green-100 dark:bg-green-900/30 group-hover/item:bg-green-200 dark:group-hover/item:bg-green-900/50 transition-colors">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Ministry attestation
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </div>
              </Card>
            </motion.div>

            {/* Document Certification Card */}
            <motion.div variants={fadeInUp}>
              <Card className="group relative overflow-hidden border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="absolute inset-[1px] bg-white dark:bg-gray-800 rounded-2xl" />

                {/* Content */}
                <div className="relative p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold mb-3">
                      Document Certification
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      Official certification of documents and copies
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-4">
                      <li className="flex items-start group/item">
                        <div className="mr-3 mt-1 p-1 rounded-full bg-green-100 dark:bg-green-900/30 group-hover/item:bg-green-200 dark:group-hover/item:bg-green-900/50 transition-colors">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Notary services
                        </span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="mr-3 mt-1 p-1 rounded-full bg-green-100 dark:bg-green-900/30 group-hover/item:bg-green-200 dark:group-hover/item:bg-green-900/50 transition-colors">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Certified copies
                        </span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="mr-3 mt-1 p-1 rounded-full bg-green-100 dark:bg-green-900/30 group-hover/item:bg-green-200 dark:group-hover/item:bg-green-900/50 transition-colors">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Authentication
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Process Steps */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-purple-500/5 bg-[size:32px_32px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/70 px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Simple Process
              </Badge>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              How It Works
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
              variants={fadeInUp}
            >
              Simple steps to get your documents processed with professional
              quality and fast turnaround.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Submit Documents",
                  description:
                    "Upload or bring your documents to our office for initial review and assessment.",
                  icon: <FileText className="h-8 w-8" />,
                  color: "from-purple-500 to-purple-600",
                },
                {
                  step: "02",
                  title: "Document Processing",
                  description:
                    "Our experts handle translation, legalization, or certification as needed.",
                  icon: <Languages className="h-8 w-8" />,
                  color: "from-indigo-500 to-indigo-600",
                },
                {
                  step: "03",
                  title: "Quality Check",
                  description:
                    "Thorough review to ensure accuracy and compliance with requirements.",
                  icon: <CheckCircle2 className="h-8 w-8" />,
                  color: "from-blue-500 to-blue-600",
                },
                {
                  step: "04",
                  title: "Document Delivery",
                  description:
                    "Receive your processed documents in person or via secure delivery.",
                  icon: <Award className="h-8 w-8" />,
                  color: "from-cyan-500 to-cyan-600",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="relative group">
                    {/* Connection Line */}
                    {index < 3 && (
                      <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-indigo-200 dark:from-purple-800 dark:to-indigo-800 z-0" />
                    )}

                    {/* Step Card */}
                    <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 dark:border-gray-700/20">
                      {/* Step Number */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {item.step}
                      </div>

                      {/* Icon */}
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        {item.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Additional Information */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Requirements Card */}
            <motion.div variants={fadeInUp}>
              <Card className="group relative overflow-hidden border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 h-full">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="absolute inset-[1px] bg-white dark:bg-gray-800 rounded-2xl" />

                <div className="relative p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <AlertCircle className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">
                      Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-4">
                      <li className="flex items-start group/item">
                        <div className="mr-3 mt-1 p-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 group-hover/item:bg-amber-200 dark:group-hover/item:bg-amber-900/50 transition-colors">
                          <div className="w-2 h-2 bg-amber-500 rounded-full" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Original documents or certified copies
                        </span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="mr-3 mt-1 p-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 group-hover/item:bg-amber-200 dark:group-hover/item:bg-amber-900/50 transition-colors">
                          <div className="w-2 h-2 bg-amber-500 rounded-full" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Valid identification
                        </span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="mr-3 mt-1 p-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 group-hover/item:bg-amber-200 dark:group-hover/item:bg-amber-900/50 transition-colors">
                          <div className="w-2 h-2 bg-amber-500 rounded-full" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Purpose declaration letter
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </div>
              </Card>
            </motion.div>

            {/* Processing Time Card */}
            <motion.div variants={fadeInUp}>
              <Card className="group relative overflow-hidden border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 h-full">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="absolute inset-[1px] bg-white dark:bg-gray-800 rounded-2xl" />

                <div className="relative p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">
                      Processing Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-4">
                      <li className="flex items-start group/item">
                        <div className="mr-3 mt-1 p-1.5 rounded-full bg-green-100 dark:bg-green-900/30 group-hover/item:bg-green-200 dark:group-hover/item:bg-green-900/50 transition-colors">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Translation: 24-72 hours
                        </span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="mr-3 mt-1 p-1.5 rounded-full bg-green-100 dark:bg-green-900/30 group-hover/item:bg-green-200 dark:group-hover/item:bg-green-900/50 transition-colors">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Legalization: 3-7 days
                        </span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="mr-3 mt-1 p-1.5 rounded-full bg-green-100 dark:bg-green-900/30 group-hover/item:bg-green-200 dark:group-hover/item:bg-green-900/50 transition-colors">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Certification: 1-2 days
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </div>
              </Card>
            </motion.div>

            {/* Important Notes Card */}
            <motion.div variants={fadeInUp}>
              <Card className="group relative overflow-hidden border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 h-full">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="absolute inset-[1px] bg-white dark:bg-gray-800 rounded-2xl" />

                <div className="relative p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">
                      Important Notes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-4">
                      <li className="flex items-start group/item">
                        <div className="mr-3 mt-1 p-1.5 rounded-full bg-red-100 dark:bg-red-900/30 group-hover/item:bg-red-200 dark:group-hover/item:bg-red-900/50 transition-colors">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          All documents must be in good condition
                        </span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="mr-3 mt-1 p-1.5 rounded-full bg-red-100 dark:bg-red-900/30 group-hover/item:bg-red-200 dark:group-hover/item:bg-red-900/50 transition-colors">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Expedited services available
                        </span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="mr-3 mt-1 p-1.5 rounded-full bg-red-100 dark:bg-red-900/30 group-hover/item:bg-red-200 dark:group-hover/item:bg-red-900/50 transition-colors">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Secure handling guaranteed
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Call-to-Action Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-700" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.4),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,107,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:48px_48px]" />
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-32 h-32 bg-purple-300/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-8 bg-white/20 hover:bg-white/30 text-white px-6 py-3 text-base font-medium backdrop-blur-sm border-none">
                <Zap className="w-5 h-5 mr-2" />
                Ready to Get Started?
              </Badge>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight"
              variants={fadeInUp}
            >
              Get Your Documents
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Processed Today
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-purple-100 mb-12 leading-relaxed max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Professional document services with guaranteed quality, fast
              processing, and secure handling. Start your application process
              now.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={fadeInUp}
            >
              <Button className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 hover:scale-105 px-10 py-6 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-2xl">
                <FileText className="w-6 h-6 mr-3" />
                Submit Documents
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
              <Button
                variant="outline"
                className="text-white border-white/50 hover:bg-white/10 backdrop-blur-md hover:scale-105 px-10 py-6 rounded-2xl font-semibold text-lg transition-all duration-300"
              >
                Contact Us
              </Button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  5000+
                </div>
                <div className="text-purple-200">Documents Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  25+
                </div>
                <div className="text-purple-200">Language Pairs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  99.9%
                </div>
                <div className="text-purple-200">Accuracy Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.08),transparent_60%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/70 px-4 py-2">
                FAQ
              </Badge>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
              variants={fadeInUp}
            >
              Get answers to common questions about our document services.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                question: "How long does document translation take?",
                answer:
                  "Standard translations are completed within 24-72 hours. Expedited services are available for urgent requests.",
                icon: <Clock className="w-6 h-6" />,
              },
              {
                question: "What documents can be legalized?",
                answer:
                  "We can legalize various documents including educational certificates, birth certificates, marriage certificates, and commercial documents.",
                icon: <Stamp className="w-6 h-6" />,
              },
              {
                question: "Are your translations certified?",
                answer:
                  "Yes, all our translations are certified and accepted by government agencies, embassies, and educational institutions.",
                icon: <Shield className="w-6 h-6" />,
              },
              {
                question: "What languages do you support?",
                answer:
                  "We support over 25 language pairs including Arabic, English, French, Spanish, German, and many others.",
                icon: <Languages className="w-6 h-6" />,
              },
            ].map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="group relative overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                  <div className="relative p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {faq.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(147,51,234,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div variants={fadeInUp}>
                <Badge className="mb-6 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/70 px-4 py-2">
                  Contact Us
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Ready to Process Your Documents?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Get in touch with our document experts today. We're here to
                  help you with all your translation, legalization, and
                  certification needs.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Fast Processing
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        24-72 hour turnaround
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Certified Quality
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        Guaranteed accuracy
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Professional Service
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        Expert handling
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Card */}
              <motion.div variants={fadeInUp}>
                <Card className="relative overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-2xl">
                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl" />
                  <div className="absolute inset-[1px] bg-white dark:bg-gray-800 rounded-2xl" />

                  <div className="relative p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                      Get Started Today
                    </h3>

                    <div className="space-y-6">
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                        <FileText className="w-5 h-5 mr-2" />
                        Submit Your Documents
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full border-2 border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 py-4 rounded-xl font-semibold text-lg"
                      >
                        Schedule Consultation
                      </Button>

                      <div className="text-center pt-4">
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          Or call us directly
                        </p>
                        <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
