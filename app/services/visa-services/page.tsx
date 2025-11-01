import { Button } from "@/components/ui/button";
import { Steps } from "@/components/ui/steps";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function VisaServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50/30 to-purple-50">
      {/* Hero Section with Glassmorphism */}
      <section className="relative overflow-hidden pt-14">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800">
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
                Premium Visa Services
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
              <span className="bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent">
                Visa
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>

            <p className="text-xl text-indigo-100/90 mb-12 leading-relaxed max-w-2xl">
              Complete assistance with visa applications, document preparation,
              and status tracking for multiple destinations.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                Start Application
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-md px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 backdrop-blur-md rounded-full hidden lg:block animate-bounce"></div>
        <div className="absolute bottom-20 right-40 w-20 h-20 bg-white/5 backdrop-blur-md rounded-full hidden lg:block animate-bounce delay-1000"></div>
      </section>

      {/* Visa Types with Glassmorphism Cards */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm border border-indigo-200/30 rounded-full px-6 py-2 mb-6">
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">
                Types of Visas
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 bg-clip-text text-transparent">
              We assist with various types of visas
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose the right visa type to meet your travel needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tourist Visa Card */}
            <div className="group relative overflow-hidden backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Tourist Visas
                </h3>
                <p className="text-gray-600 text-base mb-6">
                  For leisure travel and short-term visits, typically valid for
                  30-90 days.
                </p>

                <h4 className="font-medium mb-3">Requirements:</h4>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">
                      Valid passport with at least 6 months validity
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">Passport-sized photos</span>
                  </li>
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">Bank statements</span>
                  </li>
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">Travel itinerary</span>
                  </li>
                </ul>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Processing time:
                    </p>
                    <p className="font-medium">5-10 business days</p>
                  </div>

                  <button className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl py-3 px-6 font-semibold hover:from-indigo-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <Link
                      href="/apply/tourist-visa"
                      className="flex items-center"
                    >
                      Apply Now <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            {/* Business Visa Card */}
            <div className="group relative overflow-hidden backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Business Visas
                </h3>
                <p className="text-gray-600 text-base mb-6">
                  For business meetings, conferences, and professional
                  activities.
                </p>

                <h4 className="font-medium mb-3">Requirements:</h4>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">
                      Valid passport with at least 6 months validity
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">
                      Business invitation letter
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">
                      Company registration documents
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">Bank statements</span>
                  </li>
                </ul>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Processing time:
                    </p>
                    <p className="font-medium">7-14 business days</p>
                  </div>

                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl py-3 px-6 font-semibold hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <Link
                      href="/apply/business-visa"
                      className="flex items-center"
                    >
                      Apply Now <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process with Floating Elements */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50/30 to-purple-50/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm border border-indigo-200/30 rounded-full px-6 py-2 mb-6">
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">
                Application Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 bg-clip-text text-transparent">
              Visa Application Process
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our streamlined process makes applying for a visa simple and
              efficient.
            </p>
          </div>

          <div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/70 border-0 shadow-xl rounded-3xl p-8">
            <Steps
              items={[
                {
                  title: "Document Collection",
                  description:
                    "Gather all required documents according to the visa type you're applying for.",
                  icon: <FileText className="h-6 w-6" />,
                },
                {
                  title: "Application Review",
                  description:
                    "Our experts review your application and documents to ensure everything meets requirements.",
                  icon: <CheckCircle2 className="h-6 w-6" />,
                },
                {
                  title: "Visa Processing",
                  description:
                    "We submit your application and track its progress throughout the process.",
                  icon: <Clock className="h-6 w-6" />,
                },
                {
                  title: "Visa Collection",
                  description:
                    "Once approved, collect your visa or we can arrange delivery to your location.",
                  icon: <FileText className="h-6 w-6" />,
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Additional Information with Glassmorphism Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm border border-indigo-200/30 rounded-full px-6 py-2 mb-6">
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">
                Important Details
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 bg-clip-text text-transparent">
              Essential Information
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about our visa services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Important Notes
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start group/item">
                    <div className="mr-3 mt-1.5 w-2 h-2 bg-amber-500 rounded-full group-hover/item:scale-150 transition-transform"></div>
                    <span className="text-gray-700">
                      All documents must be original or certified copies
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="mr-3 mt-1.5 w-2 h-2 bg-amber-500 rounded-full group-hover/item:scale-150 transition-transform"></div>
                    <span className="text-gray-700">
                      Photos must be recent and meet specifications
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="mr-3 mt-1.5 w-2 h-2 bg-amber-500 rounded-full group-hover/item:scale-150 transition-transform"></div>
                    <span className="text-gray-700">
                      Bank statements should be from the last 3 months
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="mr-3 mt-1.5 w-2 h-2 bg-amber-500 rounded-full group-hover/item:scale-150 transition-transform"></div>
                    <span className="text-gray-700">
                      All documents in Arabic need certified translation
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Processing Times
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                    <span className="text-gray-700">Tourist Visa:</span>
                    <span className="font-medium text-blue-600">5-10 days</span>
                  </li>
                  <li className="flex justify-between items-center p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                    <span className="text-gray-700">Business Visa:</span>
                    <span className="font-medium text-blue-600">7-14 days</span>
                  </li>
                  <li className="flex justify-between items-center p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                    <span className="text-gray-700">Express Processing:</span>
                    <span className="font-medium text-blue-600">3-5 days</span>
                  </li>
                  <li className="flex justify-between items-center p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                    <span className="text-gray-700">Super Express:</span>
                    <span className="font-medium text-blue-600">
                      24-48 hours*
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  *Subject to availability and additional fees
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Required Documents
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">
                      Valid passport (min. 6 months validity)
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">
                      Recent passport photos
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">
                      Completed application form
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">
                      Supporting documents based on visa type
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">
                      Proof of financial means
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with Glassmorphism Cards */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50/30 to-purple-50/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm border border-indigo-200/30 rounded-full px-6 py-2 mb-6">
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">
                FAQ
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Common questions about our visa services and application process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {[
              {
                question:
                  "How long does it take to process a visa application?",
                answer:
                  "Processing times vary by visa type and destination. Tourist visas typically take 5-10 business days, while business visas may take 7-14 business days. Express processing options are available for urgent cases.",
              },
              {
                question: "What happens if my visa application is rejected?",
                answer:
                  "In case of rejection, we will help you understand the reasons and guide you on the necessary modifications for a successful reapplication. Our success rate is over 95% thanks to our thorough pre-screening process.",
              },
              {
                question: "Do you offer translation services for documents?",
                answer:
                  "Yes, we provide certified translation services for all required documents. Our translations are accepted by all relevant authorities and embassies.",
              },
              {
                question: "Can you help with urgent visa applications?",
                answer:
                  "Yes, we offer express and super express processing options for urgent cases, subject to availability and additional fees. Contact us to discuss your specific timeline requirements.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="group backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 rounded-3xl overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span className="text-white/90 text-sm font-medium">
                Premium Visa Services
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Ready to Apply for Your Visa?
            </h2>

            <p className="text-xl text-blue-100/90 mb-12 leading-relaxed">
              Let our experts guide you through a smooth, hassle-free visa
              application process.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="group bg-white text-indigo-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                Start Application
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                className="text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-md px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
              >
                Contact an Advisor
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 backdrop-blur-md rounded-full hidden lg:block animate-bounce"></div>
        <div className="absolute bottom-20 left-40 w-20 h-20 bg-white/5 backdrop-blur-md rounded-full hidden lg:block animate-bounce delay-1000"></div>
      </section>
    </div>
  );
}
