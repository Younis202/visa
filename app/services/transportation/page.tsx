import Image from "next/image";
import Link from "next/link";
import { 
  Plane, 
  Bus, 
  Car, 
  Clock, 
  Shield, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TransportationPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transportation Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Reliable and comfortable transportation solutions between Syria and Jordan. Book flights, buses, and trusted taxi services with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                Book Now
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                View Schedule
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
          <Image 
            src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg" 
            alt="Transportation" 
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
              Our Transportation Options
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Choose from our range of transportation services tailored to your needs and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                  <Plane className="w-6 h-6" />
                </div>
                <CardTitle>Flight Bookings</CardTitle>
                <CardDescription>Book flights between Damascus and Amman with major airlines</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Multiple airlines available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Flexible booking options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Best price guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                  <Bus className="w-6 h-6" />
                </div>
                <CardTitle>Bus Services</CardTitle>
                <CardDescription>Regular bus services between Damascus and Amman</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Daily departures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Comfortable seating</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Affordable rates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
                  <Car className="w-6 h-6" />
                </div>
                <CardTitle>Private Taxi</CardTitle>
                <CardDescription>Door-to-door service with professional drivers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>24/7 availability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Professional drivers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    <span>Fixed prices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Transportation Services?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Experience safe and reliable transportation with our professional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Punctual Service</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We value your time and ensure all our services run according to schedule.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe Travel</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your safety is our priority with well-maintained vehicles and professional drivers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600 dark:text-gray-400">
                24/7 support team available to assist you throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Schedule & Pricing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Find the best transportation option that fits your schedule and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Damascus - Amman Bus Service</CardTitle>
                <CardDescription>Daily departures from both cities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4">Morning Schedule</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <span>Damascus Departure</span>
                        <span className="font-medium">06:00 AM</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Amman Arrival</span>
                        <span className="font-medium">12:00 PM</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">Evening Schedule</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <span>Damascus Departure</span>
                        <span className="font-medium">02:00 PM</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Amman Arrival</span>
                        <span className="font-medium">08:00 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Private Taxi Service</CardTitle>
                <CardDescription>Available 24/7 with advance booking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4">Standard Service</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <span>Sedan (up to 4 passengers)</span>
                        <span className="font-medium">$150</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>SUV (up to 6 passengers)</span>
                        <span className="font-medium">$200</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">VIP Service</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <span>Luxury Sedan</span>
                        <span className="font-medium">$250</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Luxury SUV</span>
                        <span className="font-medium">$300</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <AlertCircle className="h-8 w-8 text-amber-500 mb-2" />
                <CardTitle>Important Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-amber-500 rounded-full p-1">
                      <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Passengers must have valid travel documents and permits</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-amber-500 rounded-full p-1">
                      <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Arrive at least 30 minutes before scheduled departure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-amber-500 rounded-full p-1">
                      <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Baggage allowance varies by service type</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-amber-500 rounded-full p-1">
                      <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Cancellation policy applies to all bookings</span>
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
              Ready to Book Your Transportation?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us now to arrange your travel between Syria and Jordan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
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