"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const destinations = [
  {
    id: 1,
    name: "Petra, Jordan",
    description: "One of the Seven Wonders of the World, this ancient city carved into rose-colored rock is simply breathtaking.",
    image: "https://ik.imagekit.io/06fdnzilf/Visit-Petra-from-Israel-scaled-e1591013326776.jpg?updatedAt=1746532191206",
    featured: true
  },
  {
    id: 2,
    name: "Dead Sea",
    description: "Float effortlessly in the mineral-rich waters at the lowest point on Earth.",
    image: "https://ik.imagekit.io/06fdnzilf/shutterstock_463528040-scaled.jpg?updatedAt=1746532839210"
  },
  {
    id: 3,
    name: "Wadi Rum",
    description: "Experience the vast, dramatic desert landscape and Bedouin hospitality.",
    image: "https://ik.imagekit.io/06fdnzilf/Memories-Luxury-Camp-Jordan.webp?updatedAt=1746532980584"
  },
  {
    id: 4,
    name: "Amman Citadel",
    description: "Explore the historical heart of Amman with stunning panoramic views of the city.",
    image: "https://ik.imagekit.io/06fdnzilf/Visit-Amman-Citadel.jpg?updatedAt=1746533054102"
  },
  {
    id: 5,
    name: "Damascus Old City",
    description: "Wander through one of the oldest continuously inhabited cities in the world.",
    image: "https://ik.imagekit.io/06fdnzilf/53-1.jpg?updatedAt=1746533135325"
  }
];

export default function FeaturedDestinations() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced Animated Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Primary Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60"></div>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-purple-100/20 animate-gradient-x"></div>
        
        {/* Floating Orbs with Enhanced Animation */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full blur-3xl"
          ></motion.div>
          
          <motion.div 
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
            className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-br from-purple-200/25 to-pink-200/20 rounded-full blur-3xl"
          ></motion.div>
          
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-cyan-200/20 to-blue-200/15 rounded-full blur-2xl"
          ></motion.div>
        </div>
        
        {/* Mesh Gradient Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          {/* Premium Badge with Enhanced Glassmorphism */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 backdrop-blur-xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-white/30 rounded-full px-8 py-3 mb-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="relative">
              <MapPin className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-blue-700 text-sm font-bold uppercase tracking-wider">Featured Destinations</span>
            <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
          </motion.div>
          
          {/* Enhanced Gradient Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent animate-gradient-x">
              Discover Amazing
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
              Places
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Discover the breathtaking wonders of Jordan and Syria through our curated travel experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enhanced Featured Destination */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden aspect-[4/3] backdrop-blur-2xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 border border-white/30 shadow-2xl hover:shadow-4xl transition-all duration-700 hover:-translate-y-2"
          >
            {/* Enhanced Image with Overlay Effects */}
            <div className="relative w-full h-full overflow-hidden rounded-3xl">
              <Image
                src={destinations[0].image}
                alt={destinations[0].name}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
              />
              
              {/* Multiple Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Animated Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </div>
            
            {/* Enhanced Premium Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute top-6 left-6"
            >
              <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-300/40 rounded-full px-5 py-2.5 shadow-lg">
                <Star className="w-5 h-5 text-yellow-300 fill-yellow-300 animate-pulse" />
                <span className="text-white font-bold text-sm tracking-wide">FEATURED</span>
              </div>
            </motion.div>
            
            {/* Enhanced Content Area */}
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  {destinations[0].name}
                </span>
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-gray-200 mb-8 max-w-md text-lg leading-relaxed"
              >
                {destinations[0].description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 text-white border-0 rounded-2xl px-8 py-4 font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group">
                  Explore Petra 
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </motion.div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-white/20 to-blue-300/20 backdrop-blur-xl rounded-full hidden lg:block border border-white/30"
            ></motion.div>
            
            <motion.div 
              animate={{ 
                y: [0, 15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-32 right-12 w-12 h-12 bg-gradient-to-br from-purple-300/20 to-pink-300/20 backdrop-blur-xl rounded-full hidden lg:block border border-white/20"
            ></motion.div>
          </motion.div>

          {/* Enhanced Grid of Smaller Destinations */}
          <div className="grid grid-cols-2 gap-6">
            {destinations.slice(1, 5).map((destination, index) => (
              <motion.div 
                key={destination.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden aspect-square backdrop-blur-xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 border border-white/25 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500"
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-115 group-hover:brightness-110"
                  />
                  
                  {/* Enhanced Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>
                
                {/* Enhanced Content */}
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">
                    {destination.name}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
                    {destination.description}
                  </p>
                </div>
                
                {/* Enhanced Hover Icon */}
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 shadow-lg"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.div>
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Button 
            size="lg" 
            className="backdrop-blur-xl bg-gradient-to-r from-white/20 via-blue-50/30 to-white/20 border border-white/40 text-gray-800 hover:text-gray-900 rounded-full px-12 py-5 font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden"
          >
            {/* Button Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            
            <span className="relative z-10 flex items-center gap-3">
              View All Destinations 
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}