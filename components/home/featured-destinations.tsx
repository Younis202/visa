import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Destinations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover the breathtaking wonders of Jordan and Syria through our curated travel experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Destination */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
            <Image
              src={destinations[0].image}
              alt={destinations[0].name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {destinations[0].name}
              </h3>
              <p className="text-gray-200 mb-4 max-w-md">
                {destinations[0].description}
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore Petra <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {destinations.slice(1, 5).map((destination) => (
              <div key={destination.id} className="relative rounded-xl overflow-hidden aspect-square group">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-lg md:text-xl font-bold text-white">{destination.name}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="rounded-full">
            View All Destinations <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}