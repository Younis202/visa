"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Steps } from "@/components/ui/steps";
import {
  AlertCircle,
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  Globe,
  GraduationCap,
  Phone,
  Shield,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const examLevels = [
  {
    name: "A1",
    title: "ÖSD Zertifikat A1",
    description: "Basic communication skills for everyday situations.",
    duration: "70 minutes",
    price: "145",
    modules: [
      "Reading (25 min)",
      "Listening (20 min)",
      "Writing (25 min)",
      "Speaking (10-15 min)",
    ],
    features: [
      "Official ÖSD certificate",
      "Valid indefinitely",
      "Recognized worldwide",
      "Digital certificate option",
    ],
    gradient: "from-emerald-400 to-green-600",
    popular: false,
  },
  {
    name: "A2",
    title: "ÖSD Zertifikat A2",
    description:
      "Enhanced basic language skills for daily life and simple work situations.",
    duration: "90 minutes",
    price: "170",
    modules: [
      "Reading (30 min)",
      "Listening (25 min)",
      "Writing (35 min)",
      "Speaking (15 min)",
    ],
    features: [
      "Official ÖSD certificate",
      "Valid indefinitely",
      "Recognized worldwide",
      "Digital certificate option",
    ],
    gradient: "from-green-400 to-emerald-600",
    popular: false,
  },
  {
    name: "B1",
    title: "ÖSD Zertifikat B1",
    description:
      "Independent language use for work, study, and immigration purposes.",
    duration: "165 minutes",
    price: "195",
    modules: [
      "Reading (45 min)",
      "Listening (40 min)",
      "Writing (80 min)",
      "Speaking (15-20 min)",
    ],
    features: [
      "Official ÖSD certificate",
      "Valid indefinitely",
      "Recognized worldwide",
      "Digital certificate option",
    ],
    gradient: "from-green-500 to-teal-600",
    popular: true,
  },
  {
    name: "B2",
    title: "ÖSD Zertifikat B2",
    description:
      "Advanced communication for academic and professional environments.",
    duration: "195 minutes",
    price: "220",
    modules: [
      "Reading (55 min)",
      "Listening (45 min)",
      "Writing (95 min)",
      "Speaking (20 min)",
    ],
    features: [
      "Official ÖSD certificate",
      "Valid indefinitely",
      "Recognized worldwide",
      "Digital certificate option",
    ],
    gradient: "from-teal-500 to-green-700",
    popular: false,
  },
];

const stats = [
  { number: "10,000+", label: "ÖSD Certificates Issued", icon: Award },
  { number: "99.2%", label: "Success Rate", icon: Target },
  { number: "40+", label: "Exam Centers", icon: Globe },
  { number: "24/7", label: "Support Available", icon: Shield },
];

const whyChooseData = [
  {
    icon: Star,
    title: "International Recognition",
    description:
      "Accepted worldwide for immigration, academic, and professional purposes.",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: FileText,
    title: "Digital Certificates",
    description:
      "Receive both physical and digital certificates for convenient verification.",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    icon: Clock,
    title: "Lifetime Validity",
    description:
      "Certificates are valid indefinitely, with no expiration date.",
    gradient: "from-emerald-400 to-green-500",
  },
];

export default function OesdExamPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50">
      {/* Hero Section with Glassmorphism */}
      <section className="relative overflow-hidden pt-14">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800">
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
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span className="text-white/90 text-sm font-medium">
                ÖSD Examinations • Austrian Excellence
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
              <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                ÖSD German
              </span>
              <br />
              <span className="text-white">Certification</span>
            </h1>

            <p className="text-xl text-green-100/90 mb-12 leading-relaxed max-w-2xl">
              Obtain your official Austrian German language certificate.
              <span className="font-semibold text-white">
                {" "}
                Recognized worldwide
              </span>{" "}
              for immigration, study, and professional purposes with
              <span className="font-semibold text-white">
                {" "}
                lifetime validity
              </span>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="group bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Schedule Exam
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-md px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
              >
                Learn More
                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
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
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent mb-2">
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

      {/* Why Choose ÖSD */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/10 to-emerald-600/10 backdrop-blur-sm border border-green-200/30 rounded-full px-6 py-2 mb-6">
              <span className="text-green-600 text-sm font-semibold uppercase tracking-wider">
                Austrian Excellence
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent">
              Why Choose ÖSD?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The Austrian German Language Diploma offers unique advantages for
              language certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseData.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group text-center backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exam Levels */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/10 to-emerald-600/10 backdrop-blur-sm border border-green-200/30 rounded-full px-6 py-2 mb-6">
              <span className="text-green-600 text-sm font-semibold uppercase tracking-wider">
                Certification Levels
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent">
              Available Certifications
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose the certification level that matches your needs and
              language proficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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

                {/* Popular Badge */}
                {level.popular && (
                  <div
                    className={`absolute -top-3 -right-3 bg-gradient-to-r ${level.gradient} text-white px-6 py-2 rounded-2xl text-sm font-semibold shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300 backdrop-blur-md border border-white/20`}
                  >
                    Most Popular
                  </div>
                )}

                <CardHeader className="relative z-10 pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div
                        className={`text-4xl font-bold bg-gradient-to-r ${level.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {level.name}
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {level.title}
                      </CardTitle>
                    </div>
                    <div className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-medium backdrop-blur-sm">
                      {level.duration}
                    </div>
                  </div>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {level.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="space-y-6">
                    {/* Exam Components */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-green-600" />
                        Exam Components:
                      </h4>
                      <ul className="space-y-2">
                        {level.modules.map((module, idx) => (
                          <li
                            key={idx}
                            className={`flex items-center transition-all duration-300 delay-${
                              idx * 100
                            } ${
                              hoveredCard === level.name ? "translate-x-2" : ""
                            }`}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{module}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Star className="w-4 h-4 mr-2 text-amber-500" />
                        Features:
                      </h4>
                      <ul className="space-y-2">
                        {level.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className={`flex items-center transition-all duration-300 delay-${
                              idx * 100
                            } ${
                              hoveredCard === level.name ? "translate-x-2" : ""
                            }`}
                          >
                            <div
                              className={`w-5 h-5 bg-gradient-to-r ${level.gradient} rounded-full flex items-center justify-center flex-shrink-0 mr-3`}
                            >
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price & CTA */}
                    <div className="pt-6 flex items-center justify-between border-t border-gray-200/50">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Exam Fee:</p>
                        <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent">
                          ${level.price}
                        </p>
                      </div>

                      <Link
                        href={`/services/language-exams/oesd/book/${level.name.toLowerCase()}`}
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/10 to-emerald-600/10 backdrop-blur-sm border border-green-200/30 rounded-full px-6 py-2 mb-6">
              <span className="text-green-600 text-sm font-semibold uppercase tracking-wider">
                Step by Step
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent">
              Certification Process
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your journey to obtaining the ÖSD certificate.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Steps
              items={[
                {
                  title: "Book Your Exam",
                  description:
                    "Choose your level and preferred exam date online or contact our team.",
                  icon: <Calendar className="h-6 w-6" />,
                },
                {
                  title: "Exam Preparation",
                  description:
                    "Access premium practice materials and prepare for your test with expert guidance.",
                  icon: <BookOpen className="h-6 w-6" />,
                },
                {
                  title: "Take the Exam",
                  description:
                    "Complete all exam modules at our certified center with professional supervision.",
                  icon: <FileText className="h-6 w-6" />,
                },
                {
                  title: "Get Certified",
                  description:
                    "Receive your official ÖSD certificate and digital copy with lifetime validity.",
                  icon: <GraduationCap className="h-6 w-6" />,
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Important Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">
                      Arrive 30 minutes before exam time
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">
                      Bring valid ID/passport
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">
                      No electronic devices allowed
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Special Arrangements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We provide special arrangements for candidates with specific
                  requirements. Contact us to discuss your needs.
                </p>
                <Button
                  variant="outline"
                  className="w-full group/btn border-2 border-green-200 hover:border-green-300 hover:bg-green-50 rounded-xl transition-all duration-300"
                >
                  <Users className="mr-2 w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>

            <Card className="group backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Study Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">
                      Sample exams
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">
                      Preparation courses
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">
                      Online practice materials
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                <span className="text-white/90 text-sm font-medium">
                  Start Your Journey
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Start Your ÖSD Certification Journey
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                Book your ÖSD exam today and take a step towards your German
                language goals with Austria's premier certification.
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
