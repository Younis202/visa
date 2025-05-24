import Image from "next/image";
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 overflow-hidden pt-22">
        {/* Glassmorphism Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-2 mb-8">
              <MessageSquare className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-semibold">Contact Support</span>
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Get in
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with our expert team for personalized travel solutions between Syria and Jordan. We're here to make your journey seamless.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">First Name</label>
                    <Input 
                      placeholder="Your first name" 
                      className="backdrop-blur-md bg-white/50 border-white/30 focus:bg-white/70 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Last Name</label>
                    <Input 
                      placeholder="Your last name" 
                      className="backdrop-blur-md bg-white/50 border-white/30 focus:bg-white/70 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="backdrop-blur-md bg-white/50 border-white/30 focus:bg-white/70 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Phone</label>
                  <Input 
                    placeholder="+963 xxx xxx xxx" 
                    className="backdrop-blur-md bg-white/50 border-white/30 focus:bg-white/70 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Service Interested In</label>
                  <select className="w-full px-3 py-2 rounded-lg backdrop-blur-md bg-white/50 border border-white/30 focus:bg-white/70 transition-all duration-300">
                    <option value="">Select a service</option>
                    <option value="entry-permits">Entry Permits</option>
                    <option value="visa-services">Visa Services</option>
                    <option value="hotel-booking">Hotel Booking</option>
                    <option value="transportation">Transportation</option>
                    <option value="language-exams">German Language Exams</option>
                    <option value="document-services">Document Services</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                  <Textarea 
                    placeholder="Tell us about your travel needs..."
                    className="min-h-[120px] backdrop-blur-md bg-white/50 border-white/30 focus:bg-white/70 transition-all duration-300 resize-none"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300 shadow-lg">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Contact Information
              </h2>
              
              <div className="grid gap-6">
                <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-6 hover:bg-white/50 transition-all duration-300 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Office Location</h3>
                  </div>
                  <p className="text-gray-600 ml-16">
                    123 Travel Street, Damascus, Syria
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-6 hover:bg-white/50 transition-all duration-300 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Phone Numbers</h3>
                  </div>
                  <div className="text-gray-600 ml-16 space-y-1">
                    <p>Syria: +963 11 123 4567</p>
                    <p>Jordan: +962 6 123 4567</p>
                    <p>WhatsApp: +963 934 567 890</p>
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-6 hover:bg-white/50 transition-all duration-300 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Email Addresses</h3>
                  </div>
                  <div className="text-gray-600 ml-16 space-y-1">
                    <p>General: info@syrijo.com</p>
                    <p>Bookings: bookings@syrijo.com</p>
                    <p>Support: support@syrijo.com</p>
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-6 hover:bg-white/50 transition-all duration-300 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Working Hours</h3>
                  </div>
                  <div className="text-gray-600 ml-16 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/40"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            
            <div className="grid gap-6 text-left">
              <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">How long does visa processing take?</h3>
                <p className="text-gray-600">Visa processing typically takes 5-10 business days, depending on the type of visa and current embassy workload.</p>
              </div>
              
              <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Do you provide transportation services?</h3>
                <p className="text-gray-600">Yes, we offer comprehensive transportation services including airport transfers, bus bookings, and private car rentals.</p>
              </div>
              
              <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Can you help with hotel bookings?</h3>
                <p className="text-gray-600">Absolutely! We partner with hotels across Syria and Jordan to provide you with the best accommodation options at competitive rates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}