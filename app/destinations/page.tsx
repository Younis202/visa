import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, MapPin } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Petra",
    region: "Ma'an Governorate",
    description: "Discover the ancient Nabataean city carved into rose-colored rock, one of the New Seven Wonders of the World. Explore the Treasury, Monastery, and countless tombs.",
    image: "https://ik.imagekit.io/06fdnzilf/Visit-Petra-from-Israel-scaled-e1591013326776.jpg?updatedAt=1746532191206",
    rating: 4.9,
    reviews: 2150,
    price: "From $150/day"
  },
  {
    id: 2,
    name: "Dead Sea",
    region: "Balqa Governorate",
    description: "Float effortlessly in the mineral-rich waters at the lowest point on Earth. Experience the healing properties of the mud and enjoy luxury spa treatments.",
    image: "https://ik.imagekit.io/06fdnzilf/shutterstock_463528040-scaled.jpg?updatedAt=1746532839210",
    rating: 4.8,
    reviews: 1680,
    price: "From $120/day"
  },
  {
    id: 3,
    name: "Wadi Rum",
    region: "Aqaba Governorate",
    description: "Experience the stunning desert landscape and traditional Bedouin hospitality in the Valley of the Moon. Enjoy jeep tours, camel rides, and stargazing.",
    image: "https://ik.imagekit.io/06fdnzilf/Memories-Luxury-Camp-Jordan.webp?updatedAt=1746532980584",
    rating: 4.9,
    reviews: 1450,
    price: "From $180/day"
  },
  {
    id: 4,
    name: "Jerash",
    region: "Jerash Governorate",
    description: "Walk through one of the best-preserved Roman provincial towns in the world, featuring stunning colonnaded streets, temples, and theaters.",
    image: "https://ik.imagekit.io/06fdnzilf/Jerash-Via-Jordan-Travel(1).jpg?updatedAt=1746544197375",
    rating: 4.8,
    reviews: 920,
    price: "From $95/day"
  },
  {
    id: 5,
    name: "Amman Citadel",
    region: "Amman Governorate",
    description: "Explore the historical heart of Amman, featuring ruins from the Roman, Byzantine, and Umayyad periods, with panoramic views of the capital.",
    image: "https://ik.imagekit.io/06fdnzilf/Visit-Amman-Citadel.jpg?updatedAt=1746533054102",
    rating: 4.7,
    reviews: 1120,
    price: "From $85/day"
  },
  {
    id: 6,
    name: "Aqaba",
    region: "Aqaba Governorate",
    description: "Dive into the crystal-clear waters of the Red Sea, exploring vibrant coral reefs and marine life. Perfect for water sports and beach relaxation.",
    image: "https://ik.imagekit.io/06fdnzilf/aqaba.jpg?updatedAt=1746538144657",
    rating: 4.8,
    reviews: 890,
    price: "From $130/day"
  },
  {
    id: 7,
    name: "Ajloun Castle",
    region: "Ajloun Governorate",
    description: "Visit this impressive 12th-century Muslim castle built by the Ayyubids, offering spectacular views of the Jordan Valley.",
    image: "https://ik.imagekit.io/06fdnzilf/36289c2b-7587-4589-9e0c-d947dfad0a66.jpg?updatedAt=1746544996680",
    rating: 4.6,
    reviews: 680,
    price: "From $75/day"
  },
  {
    id: 8,
    name: "Dana Biosphere Reserve",
    region: "Tafilah Governorate",
    description: "Jordan's largest nature reserve, featuring stunning landscapes, diverse wildlife, and excellent hiking trails through dramatic valleys.",
    image: "https://ik.imagekit.io/06fdnzilf/share1-6-1024x768.jpg?updatedAt=1746544790710",
    rating: 4.8,
    reviews: 540,
    price: "From $110/day"
  }
];

export default function DestinationsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/20 text-blue-200 text-sm font-medium">
              Discover Jordan
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Explore the Wonders of Jordan
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              From ancient wonders to natural treasures, experience the rich history and breathtaking landscapes of Jordan.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {destinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
                      {destination.region}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{destination.name}</h3>
                    <div className="flex items-center text-white/90 mb-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                      <span>{destination.rating}</span>
                      <span className="mx-2">•</span>
                      <span>{destination.reviews} reviews</span>
                    </div>
                    <p className="text-white/80 text-sm">{destination.price}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {destination.description}
                  </p>
                  <Button className="w-full group">
                    Explore More 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Experience Jordan?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Let us help you plan the perfect journey through Jordan's most incredible destinations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Planning <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Travel Packages
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}