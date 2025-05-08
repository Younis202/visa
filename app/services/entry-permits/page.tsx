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

export default function EntryPermitsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entry Permits to Jordan
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Streamlined application process for tourist and consular permits from Syria to Jordan, with expert guidance at every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                Apply Now
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
          <Image 
            src="https://images.pexels.com/photos/1738996/pexels-photo-1738996.jpeg" 
            alt="Passport and stamps" 
            width={600} 
            height={800}
            className="object-contain"
          />
        </div>
      </section>

      {/* Types of Permits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Types of Entry Permits
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We handle various types of permits to suit your travel needs between Syria and Jordan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-100 dark:border-blue-900">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Tourist Permits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Standard entry permits for tourism and short visits to Jordan, typically valid for 30-90 days.
                </CardDescription>
                
                <h4 className="font-medium mb-3">Requirements:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Valid passport with at least 6 months validity</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Passport-sized photos (white background)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Proof of accommodation in Jordan</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Return travel confirmation</span>
                  </li>
                </ul>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Processing time:</p>
                    <p className="font-medium">5-7 business days</p>
                  </div>
                  
                  <Button asChild>
                    <Link href="/apply/tourist-permit">
                      Apply Now <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-100 dark:border-blue-900">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Consular Permits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Special permits for specific purposes such as medical visits, business, or family reunions.
                </CardDescription>
                
                <h4 className="font-medium mb-3">Requirements:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Valid passport with at least 6 months validity</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Passport-sized photos (white background)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Purpose documentation (medical, business, etc.)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Invitation letter (when applicable)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>Financial guarantee or bank statement</span>
                  </li>
                </ul>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Processing time:</p>
                    <p className="font-medium">7-14 business days</p>
                  </div>
                  
                  <Button asChild>
                    <Link href="/apply/consular-permit">
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
              Application Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Simple steps to obtain your entry permit with our assistance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Steps 
              items={[
                {
                  title: "Submit Application",
                  description: "Fill out our online form or visit our office to provide the necessary personal information and travel details.",
                  icon: <FileText className="h-6 w-6" />
                },
                {
                  title: "Document Verification",
                  description: "Our team reviews your documents to ensure they meet all requirements and assists with any necessary corrections.",
                  icon: <CheckCircle2 className="h-6 w-6" />
                },
                {
                  title: "Application Processing",
                  description: "We submit your application to the appropriate authorities and monitor its progress throughout the review period.",
                  icon: <Clock className="h-6 w-6" />
                },
                {
                  title: "Permit Issuance",
                  description: "Once approved, we collect your entry permit and notify you. You can pick it up or arrange for delivery.",
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
                    <span>All documents must be original or notarized copies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-amber-500 rounded-full p-1">
                      <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Applications cannot be expedited during holiday periods</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-amber-500 rounded-full p-1">
                      <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Permits are usually valid for entry within 30 days of issuance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-amber-500 rounded-full p-1">
                      <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Children under 16 require additional documentation</span>
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
                    <span>Tourist Permits:</span> 
                    <span className="font-medium">5-7 days</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Consular Permits:</span> 
                    <span className="font-medium">7-14 days</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Rush Processing:</span> 
                    <span className="font-medium">3-5 days</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Super Rush:</span> 
                    <span className="font-medium">1-2 days*</span>
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
                    <span>Passport valid for at least 6 months</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>2 recent passport-sized photos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Completed application form</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Purpose documentation (varies by permit type)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Proof of accommodation in Jordan</span>
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
              Find answers to the most common questions about entry permits.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {[
              {
                question: "How far in advance should I apply for an entry permit?",
                answer: "We recommend applying for entry permits at least 2-3 weeks before your planned travel date. For peak travel seasons, consider applying 4-6 weeks in advance."
              },
              {
                question: "Can I extend my entry permit while in Jordan?",
                answer: "Yes, most permits can be extended through local authorities in Jordan. We can provide guidance on the extension process for an additional fee."
              },
              {
                question: "What happens if my entry permit application is rejected?",
                answer: "In the rare case of rejection, we will assist you in understanding the reasons and guide you on modifications needed for a successful reapplication. Our success rate is over 95%."
              },
              {
                question: "Can I apply for an entry permit for a group or family?",
                answer: "Yes, we offer group and family applications. Each traveler needs individual documentation, but we streamline the process and may offer group discounts."
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Apply for Your Entry Permit?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our team is ready to assist you with a smooth, hassle-free application process.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
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