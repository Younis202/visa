import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function VisaApplicationPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          href="/services/visa-services" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Visa Services
        </Link>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Visa Application Form</h1>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <Input placeholder="Enter your first name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <Input placeholder="Enter your last name" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" placeholder="your@email.com" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <Input placeholder="+963 xxx xxx xxx" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Passport Number</label>
              <Input placeholder="Enter your passport number" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Visa Type</label>
              <select className="w-full px-3 py-2 rounded-md border border-input bg-background">
                <option value="">Select visa type</option>
                <option value="tourist">Tourist Visa</option>
                <option value="business">Business Visa</option>
                <option value="student">Student Visa</option>
                <option value="work">Work Visa</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Intended Travel Date</label>
              <Input type="date" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Additional Notes</label>
              <Textarea 
                placeholder="Any specific requirements or questions..."
                className="min-h-[100px]"
              />
            </div>

            <div className="pt-4">
              <Button className="w-full">Submit Application</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}