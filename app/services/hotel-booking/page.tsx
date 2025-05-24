"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Heart,
  MapPin,
  Phone,
  Search,
  Shield,
  Sparkles,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const featuredHotels = [
  {
    id: 1,
    name: "Amman Rotana",
    location: "Amman, Jordan",
    description:
      "Experience luxury in the heart of Amman with stunning city views and world-class amenities.",
    rating: 5,
    price: "150",
    originalPrice: "200",
    image:
      "https://ik.imagekit.io/06fdnzilf/amman-rotana_152999002611.jpg?updatedAt=1748052598696",
    amenities: [
      "Free WiFi",
      "Infinity Pool",
      "Luxury Spa",
      "Fine Dining",
      "Valet Parking",
    ],
    badge: "Bestseller",
    discount: "25% OFF",
  },
  {
    id: 2,
    name: "Kempinski Hotel",
    location: "Aqaba, Jordan",
    description:
      "Beachfront luxury hotel offering pristine views of the Red Sea and exceptional service.",
    rating: 5,
    price: "200",
    originalPrice: "250",
    image:
      "https://ik.imagekit.io/06fdnzilf/f148d40b474c-73658289_4K.avif?updatedAt=1748052740114",
    amenities: [
      "Private Beach",
      "Free WiFi",
      "Rooftop Pool",
      "World-Class Spa",
      "5 Restaurants",
    ],
    badge: "Premium",
    discount: "20% OFF",
  },
  {
    id: 3,
    name: "Crown Plaza Dead Sea",
    location: "Dead Sea, Jordan",
    description:
      "Luxury resort on the shores of the Dead Sea with private beach access and spa facilities.",
    rating: 4,
    price: "180",
    originalPrice: "220",
    image: "https://ik.imagekit.io/06fdnzilf/hq720.jpg?updatedAt=1748052834002",
    amenities: [
      "Dead Sea Access",
      "Therapeutic Spa",
      "Multiple Pools",
      "Gourmet Dining",
      "Free WiFi",
    ],
    badge: "Wellness",
    discount: "18% OFF",
  },
];

const popularDestinations = [
  {
    name: "Amman",
    image:
      "https://ik.imagekit.io/06fdnzilf/Visit-Amman-Citadel.jpg?updatedAt=1746533054102",
    hotels: 245,
    description: "Modern capital with ancient charm",
  },
  {
    name: "Petra",
    image:
      "https://ik.imagekit.io/06fdnzilf/Visit-Petra-from-Israel-scaled-e1591013326776.jpg?updatedAt=1746532191206",
    hotels: 89,
    description: "Rose-red city carved in stone",
  },
  {
    name: "Dead Sea",
    image:
      "https://ik.imagekit.io/06fdnzilf/shutterstock_463528040-scaled.jpg?updatedAt=1746532839210",
    hotels: 56,
    description: "Earth's lowest elevation spa",
  },
  {
    name: "Aqaba",
    image: "https://ik.imagekit.io/06fdnzilf/aqaba.jpg?updatedAt=1746538144657",
    hotels: 123,
    description: "Red Sea diving paradise",
  },
];

export default function HotelBookingPage() {
  const [hoveredHotel, setHoveredHotel] = useState<number | null>(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Hero Section with Parallax Effect */}
      <section className="relative overflow-hidden pt-14">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-pulse delay-1000" />

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium">
                Exclusive Jordan Collection
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight">
              Discover Jordan's
              <br />
              <span className="italic font-light">Finest Hotels</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Curated luxury accommodations with exclusive rates and
              unforgettable experiences
            </p>

            {/* Enhanced Search Form */}
            <div
              className={`bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 transition-all duration-500 ${
                searchFocused ? "scale-105 shadow-3xl" : ""
              }`}
            >
              <Button className="w-full h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Search className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Find Perfect Stay
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hotels with Advanced Animations */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3 mb-6">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 font-semibold">
                Hand-Selected Excellence
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Signature Collection
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Each property chosen for its exceptional character, impeccable
              service, and unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredHotels.map((hotel, index) => (
              <Card
                key={hotel.id}
                className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-700 bg-white/80 backdrop-blur-sm rounded-3xl ${
                  hoveredHotel === hotel.id ? "scale-105 shadow-3xl" : ""
                }`}
                onMouseEnter={() => setHoveredHotel(hotel.id)}
                onMouseLeave={() => setHoveredHotel(null)}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {hotel.badge}
                    </div>
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {hotel.discount}
                    </div>
                  </div>

                  {/* Heart Icon */}
                  <div className="absolute top-4 right-16 z-10">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur hover:bg-white/30 border border-white/30"
                    >
                      <Heart className="w-4 h-4 text-white" />
                    </Button>
                  </div>

                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {hotel.name}
                      </CardTitle>
                      <CardDescription className="flex items-center mt-2 text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                        {hotel.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full px-3 py-1">
                      <Star className="h-4 w-4 text-white fill-white mr-1" />
                      <span className="text-white font-bold text-sm">
                        {hotel.rating}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {hotel.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {hotel.amenities.slice(0, 3).map((amenity, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200"
                      >
                        {amenity}
                      </span>
                    ))}
                    {hotel.amenities.length > 3 && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                        +{hotel.amenities.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900">
                          ${hotel.price}
                        </span>
                        <span className="text-lg text-gray-400 line-through">
                          ${hotel.originalPrice}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">per night</span>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full px-8 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations with Glassmorphism */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30">
              <MapPin className="w-5 h-5 text-indigo-600" />
              <span className="text-indigo-700 font-semibold">
                Explore Jordan
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Iconic Destinations
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              From ancient wonders to natural marvels, discover the heart of
              Jordan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination, index) => (
              <Link
                key={index}
                href={`/services/hotel-booking/search?location=${destination.name}`}
                className="group"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Floating Info Card */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-white/30 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {destination.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {destination.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-blue-600">
                          {destination.hotels} hotels
                        </span>
                        <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-3 mb-6">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-semibold">
                Trusted Excellence
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience the difference with our premium booking service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: "Best Price Guarantee",
                description:
                  "We match or beat any competitor's price for the same hotel.",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description:
                  "Our expert team is available round the clock to assist you.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Star,
                title: "Verified Reviews",
                description:
                  "Authentic reviews from real travelers to guide your choice.",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: Sparkles,
                title: "Exclusive Perks",
                description:
                  "Special amenities and VIP treatment for our valued guests.",
                color: "from-purple-500 to-pink-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm rounded-3xl hover:scale-105"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Modern Design */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">
                Expert Assistance Available
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Ready for Your
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Dream Getaway?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let our travel experts craft the perfect Jordan experience
              tailored just for you
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="h-16 px-10 bg-white text-blue-700 hover:bg-blue-50 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <Phone className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Contact Expert
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="h-16 px-10 text-white border-white/30 hover:bg-white/10 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 group"
              >
                <Search className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Explore All Hotels
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
