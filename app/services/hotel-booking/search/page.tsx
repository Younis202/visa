"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { MapPin, Star, Search, Calendar, Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

// Mock data for search results - in a real app, this would come from an API
const searchResults = [
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
    name: "Petra Marriott Hotel",
    location: "Petra, Jordan",
    description: "Luxury hotel overlooking the stunning Petra valley, offering exceptional comfort and breathtaking views.",
    rating: 5,
    price: "200",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    amenities: ["Mountain View", "Free WiFi", "Pool", "Spa", "Multiple Restaurants"]
  },
  {
    id: 3,
    name: "Dead Sea Kempinski",
    location: "Dead Sea, Jordan",
    description: "Premium resort on the shores of the Dead Sea with private beach access and luxury spa facilities.",
    rating: 5,
    price: "220",
    image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
    amenities: ["Private Beach", "Spa", "Multiple Pools", "Restaurants", "Free WiFi"]
  },
  {
    id: 4,
    name: "Aqaba Movenpick Resort",
    location: "Aqaba, Jordan",
    description: "Beachfront resort offering pristine views of the Red Sea and exceptional diving opportunities.",
    rating: 5,
    price: "180",
    image: "https://images.pexels.com/photos/261156/pexels-photo-261156.jpeg",
    amenities: ["Beach Access", "Diving Center", "Pool", "Spa", "Water Sports"]
  },
  {
    id: 5,
    name: "W Amman",
    location: "Amman, Jordan",
    description: "Modern luxury hotel in the heart of Amman's new downtown, featuring spectacular design and premium services.",
    rating: 5,
    price: "180",
    image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
    amenities: ["Free WiFi", "Rooftop Pool", "Spa", "Multiple Restaurants", "Gym"]
  },
  {
    id: 6,
    name: "Wadi Rum Night Camp",
    location: "Wadi Rum, Jordan",
    description: "Luxury desert camp offering unique bubble tents with stunning views of the starlit sky.",
    rating: 4,
    price: "160",
    image: "https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg",
    amenities: ["Desert Views", "Traditional Dining", "Stargazing", "Desert Tours", "Private Bathroom"]
  }
];

export default function HotelSearchPage() {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");

  // Filter results based on location
  const filteredResults = location
    ? searchResults.filter(hotel => 
        hotel.location.toLowerCase().includes(location.toLowerCase())
      )
    : searchResults;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Search Form */}
      <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/services/hotel-booking">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Search
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">
              {location ? `Hotels in ${location}` : "All Hotels"}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <div className="relative">
                <Input 
                  type="text"
                  placeholder="Where are you going?"
                  className="pl-10"
                  defaultValue={location || ""}
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <div className="relative">
              <div className="relative">
                <Input 
                  type="date"
                  className="pl-10"
                />
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <div className="relative">
              <div className="relative">
                <Input 
                  type="date"
                  className="pl-10"
                />
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <div className="relative">
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
              Update Search
            </Button>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredResults.length > 0 ? (
          <div className="grid grid-cols-1 gap-8">
            {filteredResults.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-1/3 aspect-[4/3]">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{hotel.name}</h3>
                        <p className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {hotel.location}
                        </p>
                        <div className="flex items-center mb-4">
                          {Array.from({ length: hotel.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold">${hotel.price}</p>
                        <p className="text-gray-600 dark:text-gray-400">per night</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {hotel.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {hotel.amenities.map((amenity, index) => (
                        <span 
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-end">
                      <Button size="lg">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">No hotels found</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              We couldn't find any hotels matching your search criteria. Try adjusting your search or explore other destinations.
            </p>
            <Link href="/services/hotel-booking">
              <Button>
                Return to Search
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}