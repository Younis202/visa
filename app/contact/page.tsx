import Image from "next/image";
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Get in touch with our team for any inquiries about our travel services between Syria and Jordan.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
          <MessageSquare className="w-64 h-64" />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input placeholder="+963 xxx xxx xxx" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Service Interested In</label>
                  <select className="w-full px-3 py-2 rounded-md border border-input bg-background">
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
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your travel needs..."
                    className="min-h-[150px]"
                  />
                </div>
                
                <Button className="w-full">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                        Office Location
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        123 Travel Street, Damascus, Syria
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Phone className="h-5 w-5 text-blue-500 mr-2" />
                        Phone Numbers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="space-y-2">
                        <p>Syria: +963 11 123 4567</p>
                        <p>Jordan: +962 6 123 4567</p>
                        <p>WhatsApp: +963 934 567 890</p>
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Mail className="h-5 w-5 text-blue-500 mr-2" />
                        Email Addresses
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="space-y-2">
                        <p>General Inquiries: info@syrijo.com</p>
                        <p>Bookings: bookings@syrijo.com</p>
                        <p>Support: support@syrijo.com</p>
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Clock className="h-5 w-5 text-blue-500 mr-2" />
                        Working Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="space-y-2">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">Emergency Contact</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  For urgent matters outside business hours, please contact our 24/7 emergency line:
                </p>
                <Button variant="outline" className="w-full">
                  +963 934 000 000
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our office is conveniently located in central Damascus, easily accessible by public transportation.
            </p>
          </div>
          
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/2883380/pexels-photo-2883380.jpeg"
              alt="Office location"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}