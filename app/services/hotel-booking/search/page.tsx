"use client";

import { useState, useEffect } from "react";
import { MapPin, Star, Search, Calendar, Users, ArrowLeft, Filter, SlidersHorizontal, Heart, Wifi, Car, Coffee, Utensils, Waves, Dumbbell, Sparkles, Award, Crown, Zap, Eye, ChevronDown, ArrowRight } from "lucide-react";

// Mock data for search results
const searchResults = [
  {
    id: 1,
    name: "Amman Rotana",
    location: "Amman, Jordan",
    description: "Experience luxury in the heart of Amman with stunning city views and world-class amenities.",
    rating: 5.0,
    reviewCount: 2847,
    price: "150",
    originalPrice: "200",
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    amenities: ["Free WiFi", "Infinity Pool", "Luxury Spa", "Fine Dining", "Valet Parking"],
    badge: "Bestseller",
    discount: "25% OFF",
    premium: true,
    quickBook: true
  },
  {
    id: 2,
    name: "Petra Marriott Hotel",
    location: "Petra, Jordan",
    description: "Luxury hotel overlooking the stunning Petra valley, offering exceptional comfort and breathtaking views.",
    rating: 4.9,
    reviewCount: 1923,
    price: "200",
    originalPrice: "250",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    amenities: ["Mountain View", "Free WiFi", "Pool", "Spa", "Multiple Restaurants"],
    badge: "Premium Choice",
    discount: "20% OFF",
    premium: true,
    quickBook: false
  },
  {
    id: 3,
    name: "Dead Sea Kempinski",
    location: "Dead Sea, Jordan",
    description: "Premium resort on the shores of the Dead Sea with private beach access and luxury spa facilities.",
    rating: 4.8,
    reviewCount: 3156,
    price: "220",
    originalPrice: "280",
    image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
    amenities: ["Private Beach", "Spa", "Multiple Pools", "Restaurants", "Free WiFi"],
    badge: "Most Popular",
    discount: "21% OFF",
    premium: false,
    quickBook: true
  },
  {
    id: 4,
    name: "Aqaba Movenpick Resort",
    location: "Aqaba, Jordan",
    description: "Beachfront resort offering pristine views of the Red Sea and exceptional diving opportunities.",
    rating: 4.7,
    reviewCount: 2234,
    price: "180",
    originalPrice: "230",
    image: "https://images.pexels.com/photos/261156/pexels-photo-261156.jpeg",
    amenities: ["Beach Access", "Diving Center", "Pool", "Spa", "Water Sports"],
    badge: "Adventure Hub",
    discount: "22% OFF",
    premium: false,
    quickBook: true
  },
  {
    id: 5,
    name: "W Amman",
    location: "Amman, Jordan",
    description: "Modern luxury hotel in the heart of Amman's new downtown, featuring spectacular design and premium services.",
    rating: 4.9,
    reviewCount: 1567,
    price: "180",
    originalPrice: "220",
    image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
    amenities: ["Free WiFi", "Rooftop Pool", "Spa", "Multiple Restaurants", "Gym"],
    badge: "Design Hotel",
    discount: "18% OFF",
    premium: true,
    quickBook: false
  },
  {
    id: 6,
    name: "Wadi Rum Night Camp",
    location: "Wadi Rum, Jordan",
    description: "Luxury desert camp offering unique bubble tents with stunning views of the starlit sky.",
    rating: 4.6,
    reviewCount: 892,
    price: "160",
    originalPrice: "190",
    image: "https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg",
    amenities: ["Desert Views", "Traditional Dining", "Stargazing", "Desert Tours", "Private Bathroom"],
    badge: "Unique Experience",
    discount: "16% OFF",
    premium: false,
    quickBook: true
  }
];

type AmenityIconKey = keyof typeof amenityIcons;

const amenityIcons = {
  "Free WiFi": Wifi,
  "Pool": Waves,
  "Infinity Pool": Waves,
  "Rooftop Pool": Waves,
  "Multiple Pools": Waves,
  "Spa": Sparkles,
  "Luxury Spa": Sparkles,
  "Restaurant": Utensils,
  "Fine Dining": Utensils,
  "Multiple Restaurants": Utensils,
  "Parking": Car,
  "Valet Parking": Car,
  "Gym": Dumbbell,
  "Beach Access": Waves,
  "Private Beach": Waves,
  "Mountain View": Eye,
  "Desert Views": Eye,
  "Diving Center": Waves,
  "Water Sports": Waves,
  "Stargazing": Sparkles,
  "Desert Tours": Car,
  "Traditional Dining": Utensils,
  "Private Bathroom": Coffee
} as const;

export default function HotelSearchPage() {
  const [filteredResults, setFilteredResults] = useState(searchResults);
  const [scrollY, setScrollY] = useState(0);
  const [searchParams, setSearchParams] = useState({
    location: "Jordan",
    checkIn: "",
    checkOut: "",
    guests: "2"
  });
  const [sortBy, setSortBy] = useState("recommended");
  const [filterOpen, setFilterOpen] = useState(false);
  const [hoveredHotel, setHoveredHotel] = useState<number | null>(null);
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFavorite = (hotelId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(hotelId)) {
      newFavorites.delete(hotelId);
    } else {
      newFavorites.add(hotelId);
    }
    setFavorites(newFavorites);
  };

  const handleSearch = () => {
    // In a real app, this would trigger an API call
    console.log("Searching with params:", searchParams);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 pt-16">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200/20 to-indigo-200/20 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-purple-200/15 to-pink-200/15 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div 
          className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-200/20 to-blue-200/20 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
      </div>

      {/* Enhanced Search Header */}
      <div className="sticky top-16 z-40 backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header with Back Button */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button className="group flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-xl">
                <ArrowLeft className="h-4 w-4 text-gray-600 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium text-gray-700">Back</span>
              </button>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Premium Hotels in Jordan
                </h1>
                <p className="text-gray-600 mt-1">{filteredResults.length} exceptional properties found</p>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="hidden md:flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{filteredResults.length}</div>
                <div className="text-xs text-gray-500">Hotels</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">25%</div>
                <div className="text-xs text-gray-500">Avg. Savings</div>
              </div>
            </div>
          </div>

          {/* Premium Search Form */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Destination
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    value={searchParams.location}
                    onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
                    placeholder="Where dreams await..."
                    className="w-full h-12 pl-12 pr-4 rounded-2xl border-0 bg-gray-50/80 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-900 placeholder-gray-500"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Check-in</label>
                <div className="relative group">
                  <input
                    type="date"
                    value={searchParams.checkIn}
                    onChange={(e) => setSearchParams({...searchParams, checkIn: e.target.value})}
                    className="w-full h-12 pl-12 pr-4 rounded-2xl border-0 bg-gray-50/80 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Check-out</label>
                <div className="relative group">
                  <input
                    type="date"
                    value={searchParams.checkOut}
                    onChange={(e) => setSearchParams({...searchParams, checkOut: e.target.value})}
                    className="w-full h-12 pl-12 pr-4 rounded-2xl border-0 bg-gray-50/80 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Guests</label>
                <div className="relative group">
                  <input
                    type="number"
                    value={searchParams.guests}
                    onChange={(e) => setSearchParams({...searchParams, guests: e.target.value})}
                    min="1"
                    className="w-full h-12 pl-12 pr-4 rounded-2xl border-0 bg-gray-50/80 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gray-100/80 hover:bg-gray-200/80 transition-all duration-300 font-medium text-gray-700"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                <ChevronDown className={`h-4 w-4 transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <button
                onClick={handleSearch}
                className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Search className="inline-block mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Update Search
                <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sort & Filter Bar */}
      <div className="sticky top-36 z-30 backdrop-blur-lg bg-white/60 border-b border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm border border-white/30 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 transition-all"
              >
                <option value="recommended">Recommended</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                {filteredResults.length} properties
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Results Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8">
          {filteredResults.map((hotel, index) => (
            <div
              key={hotel.id}
              className={`group relative bg-white/70 backdrop-blur-xl rounded-3xl border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden ${
                hoveredHotel === hotel.id ? 'scale-[1.02] shadow-3xl' : ''
              }`}
              onMouseEnter={() => setHoveredHotel(hotel.id)}
              onMouseLeave={() => setHoveredHotel(null)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Premium Badge */}
              {hotel.premium && (
                <div className="absolute top-6 left-6 z-20">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    <Crown className="w-3 h-3" />
                    PREMIUM
                  </div>
                </div>
              )}

              {/* Discount Badge */}
              <div className="absolute top-6 right-6 z-20">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  {hotel.discount}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="relative w-full lg:w-2/5 aspect-[4/3] lg:aspect-auto">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button
                      onClick={() => toggleFavorite(hotel.id)}
                      className={`w-10 h-10 rounded-full backdrop-blur-sm border border-white/30 shadow-lg transition-all duration-300 flex items-center justify-center group-hover:scale-110 ${
                        favorites.has(hotel.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${favorites.has(hotel.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 shadow-lg transition-all duration-300 flex items-center justify-center group-hover:scale-110">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quick Book Badge */}
                  {hotel.quickBook && (
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-1 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                        <Zap className="w-3 h-3" />
                        Quick Book
                      </div>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none" />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      {/* Hotel Name & Location */}
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                          {hotel.name}
                        </h3>
                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {hotel.badge}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                        {hotel.location}
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl px-3 py-1.5">
                          <Star className="h-4 w-4 text-white fill-white mr-1" />
                          <span className="text-white font-bold text-sm">{hotel.rating}</span>
                        </div>
                        <span className="text-sm text-gray-600">
                          ({hotel.reviewCount.toLocaleString()} reviews)
                        </span>
                        <span className="text-sm text-green-600 font-semibold">Excellent</span>
                      </div>
                    </div>

                    {/* Price Section */}
                    <div className="text-right ml-6">
                      <div className="flex items-center justify-end gap-2 mb-1">
                        <span className="text-lg text-gray-400 line-through">${hotel.originalPrice}</span>
                        <span className="text-3xl font-bold text-gray-900">${hotel.price}</span>
                      </div>
                      <div className="text-sm text-gray-500 mb-2">per night</div>
                      <div className="text-xs text-green-600 font-semibold">
                        Save ${Number(hotel.originalPrice) - Number(hotel.price)}!
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {hotel.description}
                  </p>
                  
                  {/* Amenities */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {hotel.amenities.slice(0, 5).map((amenity, idx) => {
                      const IconComponent = amenityIcons[amenity as AmenityIconKey] || Coffee;
                      return (
                        <div 
                          key={idx}
                          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-xl border border-blue-200/50 text-sm font-medium"
                        >
                          <IconComponent className="w-4 h-4" />
                          {amenity}
                        </div>
                      );
                    })}
                    {hotel.amenities.length > 5 && (
                      <div className="flex items-center px-3 py-2 bg-gray-100 text-gray-600 rounded-xl text-sm font-medium">
                        +{hotel.amenities.length - 5} more
                      </div>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                        View Details
                      </button>
                      <button className="px-6 py-3 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-xl font-medium transition-all duration-300">
                        Compare
                      </button>
                    </div>
                    
                    <button className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      Book Now
                      <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="group px-8 py-4 bg-white/70 backdrop-blur-xl border border-white/30 hover:bg-white/90 text-gray-700 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Load More Hotels
            <ChevronDown className="inline-block ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Floating Quick Search */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="group w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center">
          <Search className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </div>
  );
}