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
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Steps } from "@/components/ui/steps";

const examLevels = [
  {
    name: "A1",
    title: "Start Deutsch 1",
    description: "Basic language use. Can understand and use familiar everyday expressions.",
    duration: "65 minutes",
    price: "150",
    modules: ["Listening (20 min)", "Reading (25 min)", "Writing (20 min)", "Speaking (15 min)"],
    requirements: [
      "Valid ID/Passport",
      "Exam registration confirmation",
      "Writing materials"
    ]
  },
  {
    name: "A2",
    title: "Goethe-Zertifikat A2",
    description: "Can communicate in simple, routine situations.",
    duration: "90 minutes",
    price: "175",
    modules: ["Listening (30 min)", "Reading (30 min)", "Writing (30 min)", "Speaking (15 min)"],
    requirements: [
      "Valid ID/Passport",
      "Exam registration confirmation",
      "Writing materials"
    ]
  },
  {
    name: "B1",
    title: "Goethe-Zertifikat B1",
    description: "Independent language use. Required for spouse visa and citizenship.",
    duration: "160 minutes",
    price: "200",
    modules: ["Listening (40 min)", "Reading (65 min)", "Writing (60 min)", "Speaking (15 min)"],
    requirements: [
      "Valid ID/Passport",
      "Exam registration confirmation",
      "Writing materials"
    ]
  },
  {
    name: "B2",
    title: "Goethe-Zertifikat B2",
    description: "Advanced communication. Ideal for academic and professional purposes.",
    duration: "190 minutes",
    price: "225",
    modules: ["Listening (30 min)", "Reading (65 min)", "Writing (75 min)", "Speaking (20 min)"],
    requirements: [
      "Valid ID/Passport",
      "Exam registration confirmation",
      "Writing materials"
    ]
  }
];

export default function GoetheExamPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 backdrop-blur-sm mb-6">
              <GraduationCap className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Goethe-Institut Examinations</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Goethe-Institut German Language Certification
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Internationally recognized German language certificates from the prestigious Goethe-Institut. Book your exam date and get certified for visa, academic, or professional purposes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                Book Exam Date
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Download Guide
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
          <Image 
            src="https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg" 
            alt="German language exam" 
            width={600} 
            height={800}
            className="object-contain"
          />
        </div>
      </section>

      {/* Exam Levels Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Available Exam Levels
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Choose your certification level and book your exam date with our hassle-free process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examLevels.map((level) => (
              <Card key={level.name} className="border-2 border-blue-100 dark:border-blue-900">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">{level.name}</div>
                      <CardTitle className="text-xl">{level.title}</CardTitle>
                    </div>
                    <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
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
                      <h4 className="font-medium mb-3">Exam Modules:</h4>
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
                      <h4 className="font-medium mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {level.requirements.map((req, index) => (
                          <li key={index} className="flex items-center">
                            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                            <span>{req}</span>
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
                        <Link href={`/services/language-exams/goethe/book/${level.name.toLowerCase()}`}>
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
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Exam Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Understanding what to expect on your exam day.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Steps 
              items={[
                {
                  title: "Registration",
                  description: "Book your exam date and complete the registration process.",
                  icon: <Calendar className="h-6 w-6" />
                },
                {
                  title: "Preparation",
                  description: "Access study materials and practice tests to prepare for your exam.",
                  icon: <BookOpen className="h-6 w-6" />
                },
                {
                  title: "Exam Day",
                  description: "Arrive at the exam center with required documents and complete your test.",
                  icon: <FileText className="h-6 w-6" />
                },
                {
                  title: "Certification",
                  description: "Receive your official Goethe-Institut certificate upon successful completion.",
                  icon: <GraduationCap className="h-6 w-6" />
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Exam Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span>Morning Session:</span> 
                    <span className="font-medium">09:00 - 13:00</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Afternoon Session:</span> 
                    <span className="font-medium">14:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Check-in Time:</span> 
                    <span className="font-medium">30 min before</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Group Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Special rates available for groups of 5 or more candidates. Contact us for corporate and institutional bookings.
                </p>
                <Button variant="outline" className="w-full">
                  Group Enquiry
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Preparation Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Practice tests</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Study materials</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Online resources</span>
                  </li>
                </ul>
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
              Book your Goethe-Institut exam today and take the first step towards your German language certification.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                Book Your Exam <ArrowRight className="ml-2 h-4 w-4" />
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