import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2,
  AlertCircle,
  Clock,
  FileText,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Steps } from "@/components/ui/steps";

export default function VisaServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Visa Services
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Complete assistance with visa applications, document preparation, and status tracking for multiple destinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-indigo-700 hover:bg-indigo-50">
                Start Application
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
          <Image 
            src="https://images.pexels.com/photos/3831441/pexels-photo-3831441.jpeg" 
            alt="Visa and passport" 
            width={600} 
            height={800}
            className="object-contain"
          />
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Types of Visas
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We assist with various types of visas to meet your travel needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-indigo-100 dark:border-indigo-900">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Tourist Visas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  For leisure travel and short-term visits, typically valid for 30-90 days.
                </CardDescription>
                
                <h4 className="font-medium mb-3">Requirements:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Valid passport with at least 6 months validity</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Passport-sized photos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Bank statements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Travel itinerary</span>
                  </li>
                </ul>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Processing time:</p>
                    <p className="font-medium">5-10 business days</p>
                  </div>
                  
                  <Button asChild>
                    <Link href="/apply/visa-services">
                      Apply Now <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-indigo-100 dark:border-indigo-900">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Business Visas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  For business meetings, conferences, and professional activities.
                </CardDescription>
                
                <h4 className="font-medium mb-3">Requirements:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Valid passport with at least 6 months validity</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Business invitation letter</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Company registration documents</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Bank statements</span>
                  </li>
                </ul>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Processing time:</p>
                    <p className="font-medium">7-14 business days</p>
                  </div>
                  
                  <Button asChild>
                    <Link href="/apply/business-visa">
                      Apply Now <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Visa Application Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our streamlined process makes applying for a visa simple and efficient.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Steps 
              items={[
                {
                  title: "Document Collection",
                  description: "Gather all required documents according to the visa type you're applying for.",
                  icon: <FileText className="h-6 w-6" />
                },
                {
                  title: "Application Review",
                  description: "Our experts review your application and documents to ensure everything meets requirements.",
                  icon: <CheckCircle2 className="h-6 w-6" />
                },
                {
                  title: "Visa Processing",
                  description: "We submit your application and track its progress throughout the process.",
                  icon: <Clock className="h-6 w-6" />
                },
                {
                  title: "Visa Collection",
                  description: "Once approved, collect your visa or we can arrange delivery to your location.",
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
                <CardTitle>Important Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-amber-500 rounded-full p-1">
                      <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>All documents must be original or certified copies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-amber-500 rounded-full p-1">
                      <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Photos must be recent and meet specifications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-amber-500 rounded-full p-1">
                      <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Bank statements should be from the last 3 months</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-amber-500 rounded-full p-1">
                      <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>All documents in Arabic need certified translation</span>
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
                    <span>Tourist Visa:</span> 
                    <span className="font-medium">5-10 days</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Business Visa:</span> 
                    <span className="font-medium">7-14 days</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Express Processing:</span> 
                    <span className="font-medium">3-5 days</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Super Express:</span> 
                    <span className="font-medium">24-48 hours*</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  *Subject to availability and additional fees
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Valid passport (min. 6 months validity)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Recent passport photos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Completed application form</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Supporting documents based on visa type</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Proof of financial means</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Common questions about our visa services and application process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {[
              {
                question: "How long does it take to process a visa application?",
                answer: "Processing times vary by visa type and destination. Tourist visas typically take 5-10 business days, while business visas may take 7-14 business days. Express processing options are available for urgent cases."
              },
              {
                question: "What happens if my visa application is rejected?",
                answer: "In case of rejection, we will help you understand the reasons and guide you on the necessary modifications for a successful reapplication. Our success rate is over 95% thanks to our thorough pre-screening process."
              },
              {
                question: "Do you offer translation services for documents?",
                answer: "Yes, we provide certified translation services for all required documents. Our translations are accepted by all relevant authorities and embassies."
              },
              {
                question: "Can you help with urgent visa applications?",
                answer: "Yes, we offer express and super express processing options for urgent cases, subject to availability and additional fees. Contact us to discuss your specific timeline requirements."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Apply for Your Visa?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let our experts guide you through a smooth, hassle-free visa application process.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-indigo-700 hover:bg-indigo-50">
                Start Application <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Contact an Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}