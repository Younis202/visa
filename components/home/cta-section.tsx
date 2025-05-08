import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-xl">
              Let us help you plan your perfect trip between Syria and Jordan with our comprehensive travel services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-blue-50"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                View Services
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold mb-6">Quick Contact</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Service Interested In</label>
                <select className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option value="" className="text-gray-800">Select a service</option>
                  <option value="entry-permits" className="text-gray-800">Entry Permits</option>
                  <option value="visa-services" className="text-gray-800">Visa Services</option>
                  <option value="hotel-booking" className="text-gray-800">Hotel Booking</option>
                  <option value="transportation" className="text-gray-800">Transportation</option>
                  <option value="language-exams" className="text-gray-800">German Language Exams</option>
                  <option value="document-services" className="text-gray-800">Document Services</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>
              
              <Button className="w-full bg-white text-blue-700 hover:bg-blue-50">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}