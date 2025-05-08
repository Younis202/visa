import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2,
  AlertCircle,
  Clock,
  FileText,
  ChevronRight,
  ArrowRight,
  Languages,
  Stamp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Steps } from "@/components/ui/steps";

export default function DocumentServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-purple-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Document Services
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Professional document translation, legalization, and certification services for all your travel and immigration needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-purple-700 hover:bg-purple-50">
                Get Started
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
          <Image 
            src="https://images.pexels.com/photos/5668869/pexels-photo-5668869.jpeg" 
            alt="Document services" 
            width={600} 
            height={800}
            className="object-contain"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Our Document Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive document handling solutions for your travel and immigration needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4">
                  <Languages className="w-6 h-6" />
                </div>
                <CardTitle>Document Translation</CardTitle>
                <CardDescription>Professional translation services for all types of documents</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Certified translations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Multiple language pairs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Quick turnaround</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4">
                  <Stamp className="w-6 h-6" />
                </div>
                <CardTitle>Document Legalization</CardTitle>
                <CardDescription>Official legalization and attestation services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Embassy legalization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Apostille services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Ministry attestation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <CardTitle>Document Certification</CardTitle>
                <CardDescription>Official certification of documents and copies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Notary services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Certified copies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Authentication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Simple steps to get your documents processed.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Steps 
              items={[
                {
                  title: "Submit Documents",
                  description: "Upload or bring your documents to our office for initial review.",
                  icon: <FileText className="h-6 w-6" />
                },
                {
                  title: "Document Processing",
                  description: "Our experts handle translation, legalization, or certification as needed.",
                  icon: <Languages className="h-6 w-6" />
                },
                {
                  title: "Quality Check",
                  description: "Thorough review to ensure accuracy and compliance with requirements.",
                  icon: <CheckCircle2 className="h-6 w-6" />
                },
                {
                  title: "Document Delivery",
                  description: "Receive your processed documents in person or via secure delivery.",
                  icon: <FileText className="h-6 w-6" />
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
                <AlertCircle className="h-8 w-8 text-amber-500 mb-2" />
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-amber-500 rounded-full p-1">
                      <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Original documents or certified copies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-amber-500 rounded-full p-1">
                      <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Valid identification</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-amber-500 rounded-full p-1">
                      <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Purpose declaration letter</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Processing Times</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span>Standard Processing:</span> 
                    <span className="font-medium">3-5 business days</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Express Processing:</span> 
                    <span className="font-medium">1-2 business days</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Same Day Service:</span> 
                    <span className="font-medium">Available*</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  *Subject to document type and availability
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle>Accepted Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Educational certificates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Personal documents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Commercial documents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Legal documents</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Process Your Documents?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact us now to get started with our professional document services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-purple-700 hover:bg-purple-50">
                Start Now <ArrowRight className="ml-2 h-4 w-4" />
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