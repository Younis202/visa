import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <div className="relative container mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-8">
            <Link href="/" className="group inline-block">
              <div className="relative p-3 backdrop-blur-sm bg-white/40 border border-white/30 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <Image
                  src="https://ik.imagekit.io/06fdnzilf/ChatGPT%20Image%208%20%D9%85%D8%A7%D9%8A%D9%88%202025_%2001_53_20%20%D9%85%20(1).png?updatedAt=1746701754026"
                  width={120}
                  height={120}
                  alt="Visa Welt Logo"
                  priority
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>

            <p className="text-gray-700 leading-relaxed">
              Professional travel services between Syria and Jordan. Your
              trusted partner for seamless journeys.
            </p>

            <div className="flex gap-3">
              {[
                {
                  Icon: Facebook,
                  color: "hover:bg-blue-50 hover:text-blue-600",
                },
                { Icon: Twitter, color: "hover:bg-sky-50 hover:text-sky-600" },
                {
                  Icon: Instagram,
                  color: "hover:bg-pink-50 hover:text-pink-600",
                },
              ].map(({ Icon, color }, index) => (
                <Link
                  key={index}
                  href="#"
                  className={`w-11 h-11 backdrop-blur-sm bg-white/50 border border-white/30 text-gray-600 ${color} rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h3 className="text-lg font-semibold text-gray-900">Services</h3>
            <nav className="space-y-4">
              {[
                "Entry Permits",
                "Visa Services",
                "Hotel Booking",
                "Transportation",
                "Language Exams",
                "Documents",
              ].map((service) => (
                <Link
                  key={service}
                  href={`/services/${service
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="group flex items-center text-gray-600 hover:text-gray-900 transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {service}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <div className="space-y-6">
              {[
                {
                  Icon: MapPin,
                  content: "123 Travel Street\nDamascus, Syria",
                  href: null,
                },
                {
                  Icon: Phone,
                  content: "+963 98 991 3472",
                  href: "tel:+96398991347",
                },
                {
                  Icon: Mail,
                  content: "info@syrijo.com",
                  href: "mailto:info@syrijo.com",
                },
              ].map(({ Icon, content, href }, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-white/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 backdrop-blur-sm bg-white/40 border border-white/30 text-gray-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  {href ? (
                    <Link
                      href={href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 leading-relaxed whitespace-pre-line"
                    >
                      {content}
                    </Link>
                  ) : (
                    <address className="text-gray-600 not-italic leading-relaxed whitespace-pre-line">
                      {content}
                    </address>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">
                Stay Updated
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get exclusive travel deals delivered to your inbox.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative group">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="h-12 backdrop-blur-sm bg-white/50 border border-white/30 rounded-2xl focus:bg-white/70 focus:border-blue-200 transition-all duration-300 group-hover:bg-white/60"
                />
              </div>
              <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-sm">
              © {currentYear} SyriJo Travel. All rights reserved.
            </p>

            <nav className="flex gap-8">
              {[
                { label: "Terms", href: "/terms" },
                { label: "Privacy", href: "/privacy" },
                { label: "Support", href: "/support" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-gray-600 hover:text-gray-900 text-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
