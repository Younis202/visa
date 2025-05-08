import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">SyriJo Travel</h3>
            <p className="text-gray-300 mb-4">
              Professional travel services between Syria and Jordan. We make your journey safe, comfortable, and hassle-free.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-blue-400 hover:text-white hover:bg-blue-500">
                <Facebook size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-400 hover:text-white hover:bg-blue-500">
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-400 hover:text-white hover:bg-blue-500">
                <Instagram size={20} />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/entry-permits" className="text-gray-300 hover:text-blue-300 transition">
                  Entry Permits
                </Link>
              </li>
              <li>
                <Link href="/services/visa-services" className="text-gray-300 hover:text-blue-300 transition">
                  Visa Services
                </Link>
              </li>
              <li>
                <Link href="/services/hotel-booking" className="text-gray-300 hover:text-blue-300 transition">
                  Hotel Booking
                </Link>
              </li>
              <li>
                <Link href="/services/transportation" className="text-gray-300 hover:text-blue-300 transition">
                  Transportation
                </Link>
              </li>
              <li>
                <Link href="/services/language-exams" className="text-gray-300 hover:text-blue-300 transition">
                  German Language Exams
                </Link>
              </li>
              <li>
                <Link href="/services/document-services" className="text-gray-300 hover:text-blue-300 transition">
                  Document Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Travel Street, Damascus, Syria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+963 11 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@syrijo.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive the latest updates and offers.
            </p>
            <div className="flex flex-col space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border-gray-700 text-white" 
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} SyriJo Travel. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-gray-400 hover:text-blue-300 text-sm">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-blue-300 text-sm">
                Privacy Policy
              </Link>
              <Link href="/faq" className="text-gray-400 hover:text-blue-300 text-sm">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}