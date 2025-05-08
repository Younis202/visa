"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight,
  GraduationCap,
  Star,
  CheckCircle2,
  Users,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LanguageExamsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              German Language Certification
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Official German language examinations from renowned institutions. Choose between Goethe-Institut and ÖSD certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                Compare Certifications
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Options */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Choose Your Certification Path
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Select the certification that best suits your needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Goethe Card */}
            <Link href="/services/language-exams/goethe" className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-blue-400">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg"
                    alt="Goethe-Institut Certification"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-2 text-white">
                      <GraduationCap className="h-5 w-5" />
                      <span className="font-medium">Goethe-Institut</span>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                    Goethe-Institut Certification
                  </CardTitle>
                  <CardDescription className="text-base">
                    Internationally recognized certificates from Germany's cultural institute.
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                        <span>Recognized worldwide</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                        <span>Comprehensive examination system</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                        <span>Multiple test centers</span>
                      </li>
                    </ul>
                    
                    <div className="flex items-center justify-between pt-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Starting from
                        <span className="block text-2xl font-bold text-gray-900 dark:text-white">$150</span>
                      </div>
                      <Button>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* ÖSD Card */}
            <Link href="/services/language-exams/oesd" className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-green-400">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg"
                    alt="ÖSD Certification"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-2 text-white">
                      <Star className="h-5 w-5" />
                      <span className="font-medium">ÖSD</span>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-green-600 transition-colors">
                    ÖSD Certification
                  </CardTitle>
                  <CardDescription className="text-base">
                    Austrian German Language Diploma for academic and professional purposes.
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                        <span>Lifetime validity</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                        <span>Digital certificates available</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                        <span>Flexible exam dates</span>
                      </li>
                    </ul>
                    
                    <div className="flex items-center justify-between pt-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Starting from
                        <span className="block text-2xl font-bold text-gray-900 dark:text-white">$145</span>
                      </div>
                      <Button>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Exam Center?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We provide comprehensive support for your German language certification journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Dedicated team to guide you through the certification process.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Flexible Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Multiple exam dates and sessions to fit your schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Preparation Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Access to study materials and practice tests.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Certified?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Choose your preferred certification path and start your German language journey today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                Compare Certifications <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}