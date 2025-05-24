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
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronDown,
  Clock,
  Globe,
  GraduationCap,
  Shield,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LanguageExamsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const certifications = [
    {
      id: "goethe",
      title: "Goethe-Institut Certification",
      subtitle: "Germany's Cultural Institute",
      description:
        "Internationally recognized certificates from Germany's premier cultural institution.",
      price: "$150",
      badge: "Most Popular",
      features: [
        "Recognized worldwide",
        "Comprehensive examination system",
        "Multiple test centers",
        "Lifetime validity",
      ],
      gradient: "from-blue-500 to-blue-600",
      accentColor: "blue",
      icon: GraduationCap,
      href: "/services/language-exams/goethe",
    },
    {
      id: "oesd",
      title: "ÖSD Certification",
      subtitle: "Austrian German Language Diploma",
      description:
        "Premium Austrian certification for academic and professional excellence.",
      price: "$145",
      badge: "Best Value",
      features: [
        "Lifetime validity",
        "Digital certificates available",
        "Flexible exam dates",
        "University recognition",
      ],
      gradient: "from-indigo-500 to-indigo-600",
      accentColor: "indigo",
      icon: Star,
      href: "/services/language-exams/oesd",
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Expert Support",
      description:
        "Dedicated team of certified language professionals guiding your journey.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description:
        "Multiple exam sessions with convenient timing options worldwide.",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      icon: Award,
      title: "Premium Resources",
      description:
        "Exclusive access to advanced study materials and practice tests.",
      gradient: "from-blue-600 to-indigo-500",
    },
  ];

  const stats = [
    { number: "15,000+", label: "Certified Students", icon: Users },
    { number: "98%", label: "Success Rate", icon: Target },
    { number: "50+", label: "Test Centers", icon: Globe },
    { number: "24/7", label: "Support Available", icon: Shield },
  ];

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
              <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span className="text-white/90 text-sm font-medium">
                Premium Certification Center
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                German Language
              </span>
              <br />
              <span className="text-white">Certification</span>
            </h1>

            <p className="text-xl text-blue-100/90 mb-12 leading-relaxed max-w-2xl">
              Official examinations from renowned institutions. Choose between
              <span className="font-semibold text-white">
                {" "}
                Goethe-Institut
              </span>{" "}
              and
              <span className="font-semibold text-white"> ÖSD</span>{" "}
              certifications.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="group bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Compare Certifications
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

      {/* Certification Cards */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
                Choose Your Path
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Certification Options
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Select the certification that aligns with your ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card
                  key={cert.id}
                  className="group relative overflow-hidden backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl cursor-pointer"
                  onMouseEnter={() => setHoveredCard(cert.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Enhance the gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  {/* Add a subtle shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>

                  {/* Enhanced Badge */}
                  <div
                    className={`absolute -top-3 -right-3 bg-gradient-to-r ${cert.gradient} text-white px-6 py-2 rounded-2xl text-sm font-semibold shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300 backdrop-blur-md border border-white/20`}
                  >
                    {cert.badge}
                  </div>

                  <CardHeader className="relative z-10 pb-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div
                          className={`inline-flex items-center space-x-3 p-3 bg-gradient-to-r ${cert.gradient} bg-opacity-10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon
                            className={`w-6 h-6 text-${cert.accentColor}-600`}
                          />
                          <span
                            className={`font-semibold text-${cert.accentColor}-600`}
                          >
                            {cert.subtitle}
                          </span>
                        </div>
                        <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                          {cert.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 leading-relaxed">
                          {cert.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {cert.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center space-x-3 transition-all duration-300 delay-${
                            idx * 100
                          } ${hoveredCard === cert.id ? "translate-x-2" : ""}`}
                        >
                          <div
                            className={`w-6 h-6 bg-gradient-to-r ${cert.gradient} rounded-full flex items-center justify-center flex-shrink-0`}
                          >
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200/50">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          Starting from
                        </p>
                        <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                          {cert.price}
                        </p>
                      </div>
                      <Link
                        href={`/services/language-exams/${cert.id}`}
                        className="inline-block"
                      >
                        <Button
                          className={`group/btn bg-gradient-to-r ${cert.gradient} text-white hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl`}
                        >
                          <span className="relative z-10">Learn More</span>
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Premium Experience
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive support for your certification journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group text-center backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl"
                >
                  <CardContent className="p-8">
                    {/* Icon */}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Begin?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                Choose your preferred certification path and start your German
                language mastery journey today.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button className="group bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  Compare Certifications
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  className="text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-md px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  <Globe className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
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
