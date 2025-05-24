"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  Globe,
  GraduationCap,
  Phone,
  Shield,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const examLevels = [
  {
    name: "A1",
    title: "Start Deutsch 1",
    description:
      "Basic language use. Can understand and use familiar everyday expressions.",
    duration: "65 minutes",
    price: "150",
    modules: [
      "Listening (20 min)",
      "Reading (25 min)",
      "Writing (20 min)",
      "Speaking (15 min)",
    ],
    requirements: [
      "Valid ID/Passport",
      "Exam registration confirmation",
      "Writing materials",
    ],
    badge: "Beginner",
    gradient: "from-green-500 to-emerald-600",
    accentColor: "green",
  },
  {
    name: "A2",
    title: "Goethe-Zertifikat A2",
    description: "Can communicate in simple, routine situations.",
    duration: "90 minutes",
    price: "175",
    modules: [
      "Listening (30 min)",
      "Reading (30 min)",
      "Writing (30 min)",
      "Speaking (15 min)",
    ],
    requirements: [
      "Valid ID/Passport",
      "Exam registration confirmation",
      "Writing materials",
    ],
    badge: "Elementary",
    gradient: "from-blue-500 to-cyan-600",
    accentColor: "blue",
  },
  {
    name: "B1",
    title: "Goethe-Zertifikat B1",
    description:
      "Independent language use. Required for spouse visa and citizenship.",
    duration: "160 minutes",
    price: "200",
    modules: [
      "Listening (40 min)",
      "Reading (65 min)",
      "Writing (60 min)",
      "Speaking (15 min)",
    ],
    requirements: [
      "Valid ID/Passport",
      "Exam registration confirmation",
      "Writing materials",
    ],
    badge: "Most Popular",
    gradient: "from-orange-500 to-red-600",
    accentColor: "orange",
  },
  {
    name: "B2",
    title: "Goethe-Zertifikat B2",
    description:
      "Advanced communication. Ideal for academic and professional purposes.",
    duration: "190 minutes",
    price: "225",
    modules: [
      "Listening (30 min)",
      "Reading (65 min)",
      "Writing (75 min)",
      "Speaking (20 min)",
    ],
    requirements: [
      "Valid ID/Passport",
      "Exam registration confirmation",
      "Writing materials",
    ],
    badge: "Advanced",
    gradient: "from-purple-500 to-indigo-600",
    accentColor: "purple",
  },
];

const processSteps = [
  {
    title: "Registration",
    description:
      "Book your exam date and complete the registration process with our streamlined system.",
    icon: Calendar,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Preparation",
    description:
      "Access premium study materials and practice tests to prepare for your exam.",
    icon: BookOpen,
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "Exam Day",
    description:
      "Arrive at our premium exam center with required documents and complete your test.",
    icon: FileText,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Certification",
    description:
      "Receive your official Goethe-Institut certificate upon successful completion.",
    icon: GraduationCap,
    gradient: "from-pink-500 to-rose-600",
  },
];

const features = [
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Morning and afternoon sessions with convenient timing options.",
    items: ["09:00 - 13:00", "14:00 - 18:00", "30 min early check-in"],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Users,
    title: "Group Bookings",
    description: "Special rates for groups and corporate bookings.",
    items: ["5+ candidates", "Corporate rates", "Institutional discounts"],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: BookOpen,
    title: "Premium Resources",
    description: "Comprehensive preparation materials and support.",
    items: ["Practice tests", "Study materials", "Online resources"],
    gradient: "from-purple-500 to-pink-600",
  },
];

const stats = [
  { number: "12,000+", label: "Certified Students", icon: Users },
  { number: "99%", label: "Success Rate", icon: Target },
  { number: "25+", label: "Test Centers", icon: Globe },
  { number: "24/7", label: "Support Available", icon: Shield },
];

export default function GoetheExamPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50">
      {/* Hero Section with Glassmorphism */}
      <section className="relative overflow-hidden pt-14">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-full px-4 py-2 mb-8 group hover:scale-105 transition-all duration-300">
              <GraduationCap className="w-5 h-5 text-yellow-300" />
              <span className="text-white/90 text-sm font-medium">
                Goethe-Institut Examinations
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Goethe-Institut
              </span>
              <br />
              <span className="text-white">Certification</span>
            </h1>

            <p className="text-xl text-blue-100/90 mb-12 leading-relaxed max-w-3xl">
              Internationally recognized German language certificates from the
              prestigious Goethe-Institut. Book your exam date and get certified
              for visa, academic, or professional purposes with our premium
              examination experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="group bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Book Exam Date
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-md px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Download Guide
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 backdrop-blur-md rounded-full hidden lg:block animate-bounce"></div>
        <div className="absolute bottom-20 right-40 w-20 h-20 bg-white/5 backdrop-blur-md rounded-full hidden lg:block animate-bounce delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group text-center backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl p-6"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exam Levels Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
                Certification Levels
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Available Exam Levels
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose your certification level and book your exam date with our
              premium examination experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {examLevels.map((level, index) => (
              <Card
                key={level.name}
                className="group relative overflow-hidden backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl cursor-pointer"
                onMouseEnter={() => setHoveredCard(level.name)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${level.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>

                {/* Enhanced Badge */}
                <div
                  className={`absolute -top-3 -right-3 bg-gradient-to-r ${level.gradient} text-white px-6 py-2 rounded-2xl text-sm font-semibold shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300 backdrop-blur-md border border-white/20`}
                >
                  {level.badge}
                </div>

                <CardHeader className="relative z-10 pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className={`text-4xl font-bold bg-gradient-to-r ${level.gradient} bg-clip-text text-transparent`}
                        >
                          {level.name}
                        </div>
                        <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium backdrop-blur-sm">
                          {level.duration}
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                        {level.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-base leading-relaxed">
                        {level.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-blue-600" />
                        Exam Modules:
                      </h4>
                      <ul className="space-y-3">
                        {level.modules.map((module, idx) => (
                          <li
                            key={idx}
                            className={`flex items-center transition-all duration-300 delay-${
                              idx * 100
                            } ${
                              hoveredCard === level.name ? "translate-x-2" : ""
                            }`}
                          >
                            <div
                              className={`w-6 h-6 bg-gradient-to-r ${level.gradient} rounded-full flex items-center justify-center flex-shrink-0 mr-3`}
                            >
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-700 font-medium">
                              {module}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2 text-amber-600" />
                        Requirements:
                      </h4>
                      <ul className="space-y-3">
                        {level.requirements.map((req, idx) => (
                          <li
                            key={idx}
                            className={`flex items-center transition-all duration-300 delay-${
                              idx * 100
                            } ${
                              hoveredCard === level.name ? "translate-x-2" : ""
                            }`}
                          >
                            <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                              <AlertCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-700 font-medium">
                              {req}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 flex items-center justify-between border-t border-gray-200/50">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Exam Fee:</p>
                        <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                          ${level.price}
                        </p>
                      </div>

                      <Link
                        href={`/services/language-exams/goethe/book/${level.name.toLowerCase()}`}
                      >
                        <Button
                          className={`group/btn bg-gradient-to-r ${level.gradient} text-white hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl`}
                        >
                          <span className="relative z-10">Book Now</span>
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Process */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
                Exam Journey
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Your Certification Process
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Understanding what to expect on your premium examination journey.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="group relative text-center backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl p-8"
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Connecting Line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-200 to-indigo-200"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
                Premium Features
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Why Choose Our Center
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience the difference with our premium examination services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl"
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {feature.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center justify-between"
                        >
                          <span className="text-gray-700 font-medium">
                            {item.split(":")[0]}
                          </span>
                          {item.includes(":") && (
                            <span className="font-semibold text-gray-900">
                              {item.split(":")[1]}
                            </span>
                          )}
                          {!item.includes(":") && (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          )}
                        </li>
                      ))}
                    </ul>

                    {index === 1 && (
                      <Button
                        variant="outline"
                        className="w-full mt-6 rounded-xl hover:scale-105 transition-transform duration-300"
                      >
                        Group Enquiry
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
              <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-full px-4 py-2 mb-8">
                <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                <span className="text-white/90 text-sm font-medium">
                  Ready to Get Certified?
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Start Your Certification Journey
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                Book your Goethe-Institut exam today and take the first step
                towards your German language certification with our premium
                examination experience.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button className="group bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  Book Your Exam
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  className="text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-md px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  <Phone className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
