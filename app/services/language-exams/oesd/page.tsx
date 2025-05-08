"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  FileText, 
  ArrowRight,
  GraduationCap,
  BookOpen,
  Users,
  Calendar,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Steps } from "@/components/ui/steps";

const examLevels = [
  {
    name: "A1",
    title: "ÖSD Zertifikat A1",
    description: "Basic communication skills for everyday situations.",
    duration: "70 minutes",
    price: "145",
    modules: ["Reading (25 min)", "Listening (20 min)", "Writing (25 min)", "Speaking (10-15 min)"],
    features: [
      "Official ÖSD certificate",
      "Valid indefinitely",
      "Recognized worldwide",
      "Digital certificate option"
    ]
  },
  {
    name: "A2",
    title: "ÖSD Zertifikat A2",
    description: "Enhanced basic language skills for daily life and simple work situations.",
    duration: "90 minutes",
    price: "170",
    modules: ["Reading (30 min)", "Listening (25 min)", "Writing (35 min)", "Speaking (15 min)"],
    features: [
      "Official ÖSD certificate",
      "Valid indefinitely",
      "Recognized worldwide",
      "Digital certificate option"
    ]
  },
  {
    name: "B1",
    title: "ÖSD Zertifikat B1",
    description: "Independent language use for work, study, and immigration purposes.",
    duration: "165 minutes",
    price: "195",
    modules: ["Reading (45 min)", "Listening (40 min)", "Writing (80 min)", "Speaking (15-20 min)"],
    features: [
      "Official ÖSD certificate",
      "Valid indefinitely",
      "Recognized worldwide",
      "Digital certificate option"
    ]
  },
  {
    name: "B2",
    title: "ÖSD Zertifikat B2",
    description: "Advanced communication for academic and professional environments.",
    duration: "195 minutes",
    price: "220",
    modules: ["Reading (55 min)", "Listening (45 min)", "Writing (95 min)", "Speaking (20 min)"],
    features: [
      "Official ÖSD certificate",
      "Valid indefinitely",
      "Recognized worldwide",
      "Digital certificate option"
    ]
  }
];

export default function OesdExamPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-600/20 backdrop-blur-sm mb-6">
              <Star className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">ÖSD Examinations</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ÖSD German Language Certification
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Obtain your official Austrian German language certificate. Recognized worldwide for immigration, study, and professional purposes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-green-700 hover:bg-green-50">
                Schedule Exam
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
          <Image 
            src="https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg" 
            alt="German language exam" 
            width={600} 
            height={800}
            className="object-contain"
          />
        </div>
      </section>

      {/* Why Choose ÖSD */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose ÖSD?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The Austrian German Language Diploma (ÖSD) offers unique advantages for language certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>International Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Accepted worldwide for immigration, academic, and professional purposes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Digital Certificates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Receive both physical and digital certificates for convenient verification.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Lifetime Validity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Certificates are valid indefinitely, with no expiration date.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exam Levels */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Available Certification Levels
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Choose the certification level that matches your needs and language proficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examLevels.map((level) => (
              <Card key={level.name} className="border-2 border-green-100 dark:border-green-900">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">{level.name}</div>
                      <CardTitle className="text-xl">{level.title}</CardTitle>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {level.duration}
                    </div>
                  </div>
                  <CardDescription className="text-base mt-2">
                    {level.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-3">Exam Components:</h4>
                      <ul className="space-y-2">
                        {level.modules.map((module, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                            <span>{module}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {level.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Star className="mr-2 h-5 w-5 text-amber-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Exam Fee:</p>
                        <p className="text-2xl font-bold">${level.price}</p>
                      </div>
                      
                      <Button asChild>
                        <Link href={`/services/language-exams/oesd/book/${level.name.toLowerCase()}`}>
                          Book Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Certification Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Your journey to obtaining the ÖSD certificate.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Steps 
              items={[
                {
                  title: "Book Your Exam",
                  description: "Choose your level and preferred exam date.",
                  icon: <Calendar className="h-6 w-6" />
                },
                {
                  title: "Exam Preparation",
                  description: "Access practice materials and prepare for your test.",
                  icon: <BookOpen className="h-6 w-6" />
                },
                {
                  title: "Take the Exam",
                  description: "Complete all exam modules at our certified center.",
                  icon: <FileText className="h-6 w-6" />
                },
                {
                  title: "Get Certified",
                  description: "Receive your official ÖSD certificate and digital copy.",
                  icon: <GraduationCap className="h-6 w-6" />
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <AlertCircle className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle>Important Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Arrive 30 minutes before exam time</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Bring valid ID/passport</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>No electronic devices allowed</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle>Special Arrangements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We provide special arrangements for candidates with specific requirements. Contact us to discuss your needs.
                </p>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle>Study Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Sample exams</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Preparation courses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Online practice materials</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Start Your ÖSD Certification Journey
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Book your ÖSD exam today and take a step towards your German language goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-green-700 hover:bg-green-50">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Download Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}