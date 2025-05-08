import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Users, Star, ArrowRight, MapPin, Wifi, Coffee, Car, School as Pool, Utensils, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const featuredHotels = [
  {
    id: 1,
    name: "Amman Rotana",
    location: "Amman, Jordan",
    description: "Experience luxury in the heart of Amman with stunning city views and world-class amenities.",
    rating: 5,
    price: "150",
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Parking"]
  },
  {
    id: 2,
    name: "Kempinski Hotel",
    location: "Aqaba, Jordan",
    description: "Beachfront luxury hotel offering pristine views of the Red Sea and exceptional service.",
    rating: 5,
    price: "200",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    amenities: ["Beach Access", "Free WiFi", "Pool", "Spa", "Multiple Restaurants"]
  },
  {
    id: 3,
    name: "Crown Plaza Dead Sea",
    location: "Dead Sea, Jordan",
    description: "Luxury resort on the shores of the Dead Sea with private beach access and spa facilities.",
    rating: 4,
    price: "180",
    image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
    amenities: ["Dead Sea Access", "Spa", "Multiple Pools", "Restaurants", "Free WiFi"]
  }
];

const popularDestinations = [
  {
    name: "Amman",
    image: "https://images.pexels.com/photos/3290071/pexels-photo-3290071.jpeg",
    hotels: 245
  },
  {
    name: "Petra",
    image: "https://images.pexels.com/photos/4356144/pexels-photo-4356144.jpeg",
    hotels: 89
  },
  {
    name: "Dead Sea",
    image: "https://images.pexels.com/photos/4612482/pexels-photo-4612482.jpeg",
    hotels: 56
  },
  {
    name: "Aqaba",
    image: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg",
    hotels: 123
  }
];

export default function HotelBookingPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect Stay in Jordan
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Compare and book hotels at the best rates. Special discounts for our travel service customers.
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Destination
                </label>
                <div className="relative">
                  <Input 
                    type="text"
                    placeholder="Where are you going?"
                    className="pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check-in
                </label>
                <div className="relative">
                  <Input 
                    type="date"
                    className="pl-10"
                  />
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check-out
                </label>
                <div className="relative">
                  <Input 
                    type="date"
                    className="pl-10"
                  />
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Guests
                </label>
                <div className="relative">
                  <Input 
                    type="number"
                    placeholder="Number of guests"
                    min="1"
                    className="pl-10"
                  />
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">
                Search Hotels
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Featured Hotels
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Discover our hand-picked selection of the finest hotels in Jordan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{hotel.name}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {hotel.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 font-medium">{hotel.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {hotel.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.map((amenity, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold">${hotel.price}</span>
                      <span className="text-gray-500 dark:text-gray-400">/night</span>
                    </div>
                    <Button>
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore hotels in Jordan's most visited locations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDestinations.map((destination, index) => (
              <Link 
                key={index} 
                href={`/services/hotel-booking/search?location=${destination.name}`}
                className="group"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {destination.name}
                    </h3>
                    <p className="text-white/90">
                      {destination.hotels} hotels
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Book With Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Enjoy exclusive benefits and hassle-free booking with our travel services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: "Best Price Guarantee",
                description: "We match or beat any competitor's price for the same hotel."
              },
              {
                icon: Users,
                title: "24/7 Support",
                description: "Our team is available round the clock to assist you."
              },
              {
                icon: Star,
                title: "Verified Reviews",
                description: "Real reviews from real travelers to help you decide."
              },
              {
                icon: Coffee,
                title: "Extra Perks",
                description: "Exclusive deals and special amenities for our customers."
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
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
              Need Help Finding the Perfect Hotel?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our travel experts are ready to assist you in finding the best accommodation for your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                Contact an Expert <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                View All Hotels
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}