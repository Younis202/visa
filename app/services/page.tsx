'use client';
import CTASection from "@/components/home/cta-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Globe,
  Hotel,
  Languages as Language,
  MapPin,
  Phone,
  Plane,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "entry-permits",
    title: "Entry Permits",
    tagline: "Fast & Reliable",
    description:
      "Apply for tourist or consular permits from Syria to Jordan with our streamlined process designed for ultimate convenience and peace of mind.",
    icon: Globe,
    color: "bg-blue-500/10 text-blue-500",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    image:
      "https://ik.imagekit.io/06fdnzilf/jordan-pass-featured-1-1080x675.png?updatedAt=1746546861512",
    features: [
      "Fast-track application processing",
      "Document verification assistance",
      "Regular status updates",
      "Support for all permit types",
      "Expedited emergency services",
    ],
    testimonial: {
      quote:
        "The entry permit process was incredibly smooth. I received my permit in record time!",
      author: "Sarah M.",
      location: "Damascus",
    },
    stats: {
      avgProcessingTime: "48 hours",
      successRate: "99.5%",
    },
    href: "/services/entry-permits",
  },
  {
    id: "visa-services",
    title: "Visa Services",
    tagline: "Seamless Applications",
    description:
      "Complete assistance with filling visa applications, document submission, and status tracking with our team of experienced visa specialists.",
    icon: FileText,
    color: "bg-indigo-500/10 text-indigo-500",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-indigo-600",
    image:
      "https://ik.imagekit.io/06fdnzilf/jordan-tourist-visa-featured.png?updatedAt=1746546860110",
    features: [
      "Application form assistance",
      "Document preparation & review",
      "Application submission",
      "Visa status tracking",
      "Visa printing services",
      "Consular appointment booking",
    ],
    testimonial: {
      quote:
        "Their visa specialists saved me countless hours and ensured my application was perfect!",
      author: "Ahmad K.",
      location: "Amman",
    },
    stats: {
      avgProcessingTime: "7-10 days",
      successRate: "98.2%",
    },
    href: "/services/visa-services",
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    tagline: "Premium Accommodations",
    description:
      "Compare and book hotels with the best rates across Jordan through our exclusive partner network offering special discounts and premium options.",
    icon: Hotel,
    color: "bg-emerald-500/10 text-emerald-500",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-emerald-600",
    image:
      "https://ik.imagekit.io/06fdnzilf/b3e9eba9f029255d4e6a11c685911d1db3272b11.jpg?updatedAt=1746547075964",
    features: [
      "Competitive rates comparison",
      "Wide selection of premium hotels",
      "Secure booking system",
      "Free cancellation options",
      "Special group rates",
      "Exclusive member discounts",
    ],
    testimonial: {
      quote:
        "I saved over 20% on my luxury hotel booking compared to other platforms!",
      author: "Layla T.",
      location: "Petra",
    },
    stats: {
      hotelsAvailable: "500+",
      averageSavings: "15-25%",
    },
    href: "/services/hotel-booking",
  },
  {
    id: "transportation",
    title: "Transportation",
    tagline: "Comfort & Convenience",
    description:
      "Book flights, buses between Damascus-Amman, and trusted taxi services with our vetted network of transportation providers for a seamless journey.",
    icon: Plane,
    color: "bg-amber-500/10 text-amber-500",
    gradientFrom: "from-amber-500",
    gradientTo: "to-amber-600",
    image:
      "https://ik.imagekit.io/06fdnzilf/adanpc2wRXyAgeyYIYWtyg.jpg?updatedAt=1746534761941",
    features: [
      "Flight bookings with major airlines",
      "Regular bus services between cities",
      "Private luxury taxi arrangements",
      "VIP airport transfers",
      "Group transportation options",
      "Real-time journey tracking",
    ],
    testimonial: {
      quote:
        "The private transfer service was impeccable - comfortable vehicles and professional drivers.",
      author: "Omar J.",
      location: "Damascus",
    },
    stats: {
      dailyDepartures: "12+",
      onTimeRate: "97%",
    },
    href: "/services/transportation",
  },
  {
    id: "language-exams",
    title: "German Language Exams",
    tagline: "Certified Testing",
    description:
      "Schedule Goethe-Zertifikat and ÖSD exams required for visas or immigration with our authorized testing center and preparation resources.",
    icon: Language,
    color: "bg-red-500/10 text-red-500",
    gradientFrom: "from-red-500",
    gradientTo: "to-red-600",
    image:
      "https://ik.imagekit.io/06fdnzilf/ChatGPT%20Image%206%20%D9%85%D8%A7%D9%8A%D9%88%202025_%2007_32_29%20%D9%85%20(1).png?updatedAt=1746549188943",
    features: [
      "Official exam appointment scheduling",
      "Comprehensive preparation resources",
      "Professional mock tests & evaluation",
      "Certificate collection service",
      "Exam feedback and guidance",
      "Pre-exam preparation workshops",
    ],
    testimonial: {
      quote:
        "Their preparation materials helped me pass my B2 exam on the first attempt!",
      author: "Nour H.",
      location: "Amman",
    },
    stats: {
      passRate: "92%",
      examLevels: "A1-C2",
    },
    href: "/services/language-exams",
  },
  {
    id: "document-services",
    title: "Document Services",
    tagline: "Official & Certified",
    description:
      "Professional document translation, legalization, and obtaining necessary certifications with our network of certified translators and legal experts.",
    icon: FileText,
    color: "bg-purple-500/10 text-purple-500",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
    image:
      "https://ik.imagekit.io/06fdnzilf/Legalisation.png?updatedAt=1746549125388",
    features: [
      "Professional certified translations",
      "Document legalization services",
      "Notarization by authorized notaries",
      "Criminal record certificates",
      "Educational document authentication",
      "Apostille & embassy attestations",
    ],
    testimonial: {
      quote:
        "Their document translation services are fast, accurate, and officially recognized.",
      author: "Rami S.",
      location: "Irbid",
    },
    stats: {
      languages: "25+",
      turnaroundTime: "24-72h",
    },
    href: "/services/document-services",
  },
];

// Enhanced Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Enhanced Hero Section with Advanced Glassmorphism */}
      <section className="relative py-32 overflow-hidden">
        {/* Multi-layered Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-indigo-700/85 to-purple-800/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.4),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.1)_50%,transparent_70%)] animate-pulse" />
        </div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300/20 rounded-full blur-2xl"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Premium Badge */}
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
                <span className="text-sm font-medium">
                  Premium Travel Solutions
                </span>
              </div>
            </motion.div>

            {/* Enhanced Title with Gradient */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Exceptional Services
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                For Your Journey
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-blue-100/90 mb-12 leading-relaxed max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Experience seamless travel between Syria and Jordan with our
              comprehensive range of professional services designed to exceed
              expectations.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={fadeInUp}
            >
              <Button className="group relative px-10 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 rounded-2xl font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </Button>
              <Button className="group relative px-10 py-6 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 rounded-2xl font-medium text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
          <motion.div
            className="w-96 h-96 relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            <MapPin className="w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* Enhanced Service Stats Section with Glassmorphism */}
      <motion.section
        className="py-20 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Glass Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-gray-50/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 right-20 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"
          animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                value: "10,000+",
                label: "Satisfied Clients",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: CheckCircle,
                value: "98%",
                label: "Success Rate",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Clock,
                value: "24/7",
                label: "Customer Support",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Calendar,
                value: "7+ Yrs",
                label: "Industry Experience",
                color: "from-orange-500 to-orange-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group relative"
              >
                {/* Glass Card */}
                <div className="relative p-8 rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/30">
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Stats */}
                  <div
                    className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.value}
                  </div>
                  <p className="text-gray-700 font-medium">{stat.label}</p>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Section Introduction */}
      <motion.section
        className="py-24 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Glass Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/60 to-blue-50/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={fadeInUp}
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/40 backdrop-blur-md border border-white/50 text-blue-600 mb-8 shadow-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse" />
              <span className="text-sm font-medium">Our Services</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Premium Services For Your Journey
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              We've crafted a comprehensive suite of services to ensure your
              travel experience is seamless, efficient, and memorable from start
              to finish.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Services List with Advanced Glassmorphism */}
      <section className="py-10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="scroll-mt-20 relative"
                id={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                {/* Floating Background Elements */}
                <motion.div
                  className={`absolute -top-20 ${
                    index % 2 === 0 ? "-left-20" : "-right-20"
                  } w-40 h-40 bg-gradient-to-r ${service.gradientFrom} ${
                    service.gradientTo
                  } opacity-10 rounded-full blur-3xl`}
                  animate={{
                    y: [-20, 20, -20],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                />

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Section */}
                  <motion.div
                    className={`lg:col-span-6 ${
                      index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                    }`}
                    variants={fadeInUp}
                  >
                    <div className="relative group">
                      {/* Glass Container */}
                      <div className="relative p-6 rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl group-hover:shadow-3xl transition-all duration-500 hover:scale-105">
                        {/* Image */}
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                          {/* Floating Badge */}
                          <div className="absolute top-6 left-6">
                            <div
                              className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} text-white text-sm font-medium shadow-lg backdrop-blur-sm`}
                            >
                              <service.icon className="w-4 h-4 mr-2" />
                              {service.tagline}
                            </div>
                          </div>

                          {/* Title Overlay */}
                          <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {service.title}
                            </h3>
                            <div className="flex items-center text-white/80">
                              <Star className="w-4 h-4 mr-1 fill-current" />
                              <span className="text-sm">Premium Service</span>
                            </div>
                          </div>

                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12" />
                        </div>
                      </div>

                      {/* Stats Bar with Glass Effect */}
                      <div className="mt-8 p-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 shadow-lg">
                        <div className="flex flex-col sm:flex-row justify-between gap-6">
                          {service.stats &&
                            Object.entries(service.stats).map(
                              ([key, value], i) => (
                                <div
                                  key={key}
                                  className="flex items-center group"
                                >
                                  <div
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                  >
                                    {key.includes("Time") ? (
                                      <Clock className="w-6 h-6 text-white" />
                                    ) : key.includes("Rate") ? (
                                      <Star className="w-6 h-6 text-white" />
                                    ) : key.includes("hotel") ? (
                                      <Hotel className="w-6 h-6 text-white" />
                                    ) : key.includes("language") ? (
                                      <Language className="w-6 h-6 text-white" />
                                    ) : (
                                      <CheckCircle className="w-6 h-6 text-white" />
                                    )}
                                  </div>
                                  <div>
                                    <p className="text-sm text-gray-600 uppercase font-medium tracking-wide">
                                      {key
                                        .replace(/([A-Z])/g, " $1")
                                        .replace(/^./, (str) =>
                                          str.toUpperCase()
                                        )
                                        .replace(/([A-Z])/g, (match) =>
                                          match.toLowerCase()
                                        )}
                                    </p>
                                    <p className="text-xl font-bold text-gray-900">
                                      {value}
                                    </p>
                                  </div>
                                </div>
                              )
                            )}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    className={`lg:col-span-6 ${
                      index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                    }`}
                    variants={fadeInUp}
                  >
                    <div className="space-y-8">
                      {/* Icon */}
                      <div
                        className={`w-20 h-20 rounded-3xl flex items-center justify-center bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} shadow-xl hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="w-10 h-10 text-white" />
                      </div>

                      {/* Title and Description */}
                      <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                          {service.title}
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                          {service.description}
                        </p>
                      </div>

                      {/* Features with Glass Effect */}
                      <div className="p-8 rounded-3xl bg-white/30 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500">
                        <h3 className="text-2xl font-semibold mb-8 flex items-center">
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} flex items-center justify-center mr-3`}
                          >
                            <Award className="h-5 w-5 text-white" />
                          </div>
                          <span>Premium Features</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start p-4 rounded-xl hover:bg-white/40 transition-all duration-300 group cursor-pointer"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="mr-4 mt-1">
                                <div
                                  className={`p-2 rounded-full bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                >
                                  <CheckCircle className="h-4 w-4 text-white" />
                                </div>
                              </div>
                              <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial with Glass Effect */}
                      {service.testimonial && (
                        <div className="p-6 rounded-2xl bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-md border border-white/50 shadow-lg">
                          <div className="flex items-start">
                            <div className="mr-4">
                              <div
                                className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} flex items-center justify-center shadow-lg`}
                              >
                                <span className="text-white font-bold text-lg">
                                  {service.testimonial.author.charAt(0)}
                                </span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-700 mb-3 italic font-medium">
                                "{service.testimonial.quote}"
                              </p>
                              <div>
                                <p className="font-semibold text-gray-900">
                                  {service.testimonial.author}
                                </p>
                                <p className="text-sm text-gray-600">
                                  {service.testimonial.location}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          asChild
                          className={`group relative px-8 py-6 rounded-2xl bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} hover:shadow-2xl text-white shadow-xl transition-all duration-300 hover:scale-105 border-none`}
                        >
                          <Link href={service.href}>
                            <span className="relative z-10 flex items-center">
                              Explore {service.title}
                              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                          </Link>
                        </Button>
                        <Button className="px-8 py-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 text-gray-700 hover:bg-white/50 hover:scale-105 transition-all duration-300 shadow-lg">
                          <Phone className="mr-2 h-5 w-5" />
                          Contact Us
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Separator */}
                {index < services.length - 1 && (
                  <div className="relative my-24">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <div className="px-6 py-3 bg-white/40 backdrop-blur-md border border-white/50 rounded-full shadow-lg">
                        <span className="text-sm text-gray-600 font-medium">
                          Our Services
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-6 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/70">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              The Excellence We Deliver
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Experience unparalleled service quality and attention to detail
              with our dedicated team committed to your satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="text-center bg-white dark:bg-gray-800 border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-2xl">Rapid Processing</CardTitle>
                <CardDescription className="text-gray-500 dark:text-gray-400 mt-2">
                  Fast-track service delivery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our streamlined processes ensure quick and efficient handling
                  of all your travel documentation needs, saving you valuable
                  time.
                </p>
              </CardContent>
              <CardFooter className="justify-center pt-4 pb-8">
                <Button variant="outline" className="rounded-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card className="text-center bg-white dark:bg-gray-800 border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-indigo-600"></div>
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-2xl">Expert Support</CardTitle>
                <CardDescription className="text-gray-500 dark:text-gray-400 mt-2">
                  Guidance throughout your journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our team of experienced professionals provides personalized
                  guidance and support through every step of your travel
                  process.
                </p>
              </CardContent>
              <CardFooter className="justify-center pt-4 pb-8">
                <Button variant="outline" className="rounded-full">
                  Meet Our Team
                </Button>
              </CardFooter>
            </Card>

            <Card className="text-center bg-white dark:bg-gray-800 border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-2xl">Premium Quality</CardTitle>
                <CardDescription className="text-gray-500 dark:text-gray-400 mt-2">
                  Excellence in everything we do
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We're committed to delivering the highest standard of service
                  with attention to detail and personalized care for each
                  client.
                </p>
              </CardContent>
              <CardFooter className="justify-center pt-4 pb-8">
                <Button variant="outline" className="rounded-full">
                  Our Standards
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <CTASection />
    </div>
  );
}
