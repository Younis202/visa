"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import Image from "next/image";

const partners = [
  {
    name: "Royal Jordanian",
    logo: "https://ik.imagekit.io/06fdnzilf/347614237_163781906418045_231927803396920565_n.jpg?updatedAt=1748048706820",
    category: "Airlines",
  },
  {
    name: "Marriott Hotels",
    logo: "https://ik.imagekit.io/06fdnzilf/322135668_886972632344163_3623508944907071240_n.jpg?updatedAt=1748048827783",
    category: "Hotels",
  },
  {
    name: "Jordan Tourism Board",
    logo: "https://ik.imagekit.io/06fdnzilf/250814547_4983983091636309_2627334908151393102_n.png?updatedAt=1748048965191",
    category: "Tourism",
  },
  {
    name: "Syrian Airlines",
    logo: "https://ik.imagekit.io/06fdnzilf/FreeVector-Syrian-Air.jpg?updatedAt=1748049127595",
    category: "Airlines",
  },
  {
    name: "Embassy of Jordan",
    logo: "https://ik.imagekit.io/06fdnzilf/309346238_195922696135797_2855730820719252889_n.jpg?updatedAt=1748049363839",
    category: "Government",
  },
];

export default function PartnersSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          {/* Simple Badge */}
          <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-full px-6 py-2 mb-6">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-semibold">
              Trusted Partners
            </span>
          </div>

          {/* Simple Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Our Partners
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Working with leading organizations to provide exceptional travel
            experiences.
          </p>
        </motion.div>

        {/* Simple Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Simple Partner Card */}
              <div className="backdrop-blur-md bg-white/30 border border-white/30 rounded-2xl p-6 hover:bg-white/40 hover:shadow-lg transition-all duration-300">
                {/* Logo Container */}
                <div className="relative w-full aspect-square mb-4">
                  <div className="relative w-full h-full p-3 transition-all duration-300">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Partner Info */}
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-gray-500">{partner.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Verified Partners</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Trusted Worldwide</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Premium Service</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
