import Image from "next/image";
import Link from "next/link";
import { Plane, Hotel, FileText, Globe, Languages as Language, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    id: "entry-permits",
    title: "Entry Permits",
    description: "Apply for tourist or consular permits from Syria to Jordan with our streamlined process.",
    icon: Globe,
    color: "bg-blue-500/10 text-blue-500",
    image: "https://ik.imagekit.io/06fdnzilf/jordan-pass-featured-1-1080x675.png?updatedAt=1746546861512",
    features: [
      "Fast-track application processing",
      "Document verification assistance",
      "Regular status updates",
      "Support for all permit types"
    ],
    href: "/services/entry-permits"
  },
  {
    id: "visa-services",
    title: "Visa Services",
    description: "Complete assistance with filling visa applications, document submission, and status tracking.",
    icon: FileText,
    color: "bg-indigo-500/10 text-indigo-500",
    image: "https://ik.imagekit.io/06fdnzilf/jordan-tourist-visa-featured.png?updatedAt=1746546860110",
    features: [
      "Application form assistance",
      "Document preparation",
      "Application submission",
      "Visa status tracking",
      "Visa printing services"
    ],
    href: "/services/visa-services"
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    description: "Compare and book hotels with the best rates across Jordan through our partner network.",
    icon: Hotel,
    color: "bg-emerald-500/10 text-emerald-500",
    image: "https://ik.imagekit.io/06fdnzilf/b3e9eba9f029255d4e6a11c685911d1db3272b11.jpg?updatedAt=1746547075964",
    features: [
      "Competitive rates comparison",
      "Wide selection of hotels",
      "Secure booking system",
      "Free cancellation options",
      "Special group rates"
    ],
    href: "/services/hotel-booking"
  },
  {
    id: "transportation",
    title: "Transportation",
    description: "Book flights, buses between Damascus-Amman, and trusted taxi services.",
    icon: Plane,
    color: "bg-amber-500/10 text-amber-500",
    image: "https://ik.imagekit.io/06fdnzilf/adanpc2wRXyAgeyYIYWtyg.jpg?updatedAt=1746534761941",
    features: [
      "Flight bookings with major airlines",
      "Regular bus services between cities",
      "Private taxi arrangements",
      "Airport transfers",
      "Group transportation options"
    ],
    href: "/services/transportation"
  },
  {
    id: "language-exams",
    title: "German Language Exams",
    description: "Schedule Goethe-Zertifikat and ÖSD exams required for visas or immigration.",
    icon: Language,
    color: "bg-red-500/10 text-red-500",
    image: "https://ik.imagekit.io/06fdnzilf/ChatGPT%20Image%206%20%D9%85%D8%A7%D9%8A%D9%88%202025_%2007_32_29%20%D9%85%20(1).png?updatedAt=1746549188943",
    features: [
      "Exam appointment scheduling",
      "Preparation resources",
      "Mock tests and evaluation",
      "Certificate collection",
      "Exam feedback and guidance"
    ],
    href: "/services/language-exams"
  },
  {
    id: "document-services",
    title: "Document Services",
    description: "Document translation, legalization, and obtaining necessary certifications.",
    icon: FileText,
    color: "bg-purple-500/10 text-purple-500",
    image: "https://ik.imagekit.io/06fdnzilf/Legalisation.png?updatedAt=1746549125388",
    features: [
      "Professional document translation",
      "Document legalization",
      "Notarization services",
      "Criminal record certificates",
      "Educational document authentication"
    ],
    href: "/services/document-services"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive travel services designed to make your journey between Syria and Jordan smooth and hassle-free.
            </p>
            <Button className="bg-white text-blue-700 hover:bg-blue-50">
              Contact Us For Details
            </Button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
          <MapPin className="w-64 h-64" />
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <div key={service.id}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${service.color}`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    
                    <div>
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        {service.description}
                      </p>
                    </div>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-2 mt-1 bg-blue-500 rounded-full p-1">
                            <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                              <circle cx="4" cy="4" r="3" />
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild>
                      <Link href={service.href}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                {index < services.length - 1 && (
                  <Separator className="my-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Find answers to common questions about our services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid gap-6">
            {[
              {
                question: "How far in advance should I apply for an entry permit?",
                answer: "We recommend applying for entry permits at least 2-3 weeks before your planned travel date. For peak travel seasons, consider applying 4-6 weeks in advance."
              },
              {
                question: "Do you offer rush processing for visa services?",
                answer: "Yes, we offer expedited processing for an additional fee. The timeframe depends on the specific visa type and current processing times."
              },
              {
                question: "Can I cancel my hotel booking if my plans change?",
                answer: "Most hotel bookings made through our service can be cancelled free of charge up to 24-48 hours before check-in, depending on the hotel's policy. We clearly indicate the cancellation policy before you confirm your booking."
              },
              {
                question: "How do I schedule a German language exam?",
                answer: "You can schedule an exam by filling out our online form or visiting our office. We'll need your personal details, preferred exam date, and the specific certification you need. We'll confirm availability and guide you through the registration process."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/faq">
                View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Plan Your Journey?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Contact us today to discuss your travel needs and how we can assist you with our comprehensive services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Call +963 11 123 4567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}