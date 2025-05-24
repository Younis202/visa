import {
  AlertCircle,
  ArrowRight,
  Bus,
  Calendar,
  Car,
  CheckCircle2,
  Clock,
  Plane,
  Shield,
  Star,
  Users,
} from "lucide-react";

export default function TransportationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50">
      {/* Hero Section with Glassmorphism */}
      <section className="relative overflow-hidden pt-14">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-full px-4 py-2 mb-8 group hover:scale-105 transition-all duration-300">
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span className="text-white/90 text-sm font-medium">
                Premium Transportation Services
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Travel in
              </span>
              <br />
              <span className="text-white">Comfort & Style</span>
            </h1>

            <p className="text-xl text-blue-100/90 mb-12 leading-relaxed max-w-2xl">
              Experience premium transportation solutions between Syria and
              Jordan. Book flights, luxury buses, and trusted taxi services with
              our seamless platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                Book Your Journey
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-md px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105">
                View Schedule
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 backdrop-blur-md rounded-full hidden lg:block animate-bounce"></div>
        <div className="absolute bottom-20 right-40 w-20 h-20 bg-white/5 backdrop-blur-md rounded-full hidden lg:block animate-bounce delay-1000"></div>
      </section>

      {/* Services Grid with Glassmorphism Cards */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Transportation Excellence
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose from our premium range of transportation services designed
              for your comfort and convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Flight Card */}
            <div className="group relative overflow-hidden backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  <Plane className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Flight Bookings
                </h3>
                <p className="text-gray-600 text-base mb-6">
                  Premium airline connections between Damascus and Amman
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">
                      Multiple premium airlines
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">
                      Flexible booking & cancellation
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">Best price guarantee</span>
                  </li>
                </ul>

                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl py-3 font-semibold hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Book Flight
                </button>
              </div>
            </div>

            {/* Bus Card */}
            <div className="group relative overflow-hidden backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  <Bus className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Luxury Bus Services
                </h3>
                <p className="text-gray-600 text-base mb-6">
                  Premium comfort buses with daily schedules
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">
                      Daily premium departures
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">
                      Luxury reclining seats
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">Competitive pricing</span>
                  </li>
                </ul>

                <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl py-3 font-semibold hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Book Bus
                </button>
              </div>
            </div>

            {/* Taxi Card */}
            <div className="group relative overflow-hidden backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  <Car className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Private Taxi
                </h3>
                <p className="text-gray-600 text-base mb-6">
                  Premium door-to-door service with professional drivers
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">24/7 premium service</span>
                  </li>
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">
                      Certified professional drivers
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700">
                      Transparent fixed pricing
                    </span>
                  </li>
                </ul>

                <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl py-3 font-semibold hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Book Taxi
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us with Floating Elements */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Excellence in Every Journey
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience unmatched quality and reliability with our premium
              transportation services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group text-center transform hover:-translate-y-2 transition-all duration-500">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-2xl">
                <Clock className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Always On Time
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Punctuality is our promise. Every journey starts and ends
                exactly when planned, respecting your valuable time.
              </p>
            </div>

            <div className="group text-center transform hover:-translate-y-2 transition-all duration-500">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-2xl">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Safety First
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Your safety is our absolute priority with regularly maintained
                vehicles and thoroughly vetted professional drivers.
              </p>
            </div>

            <div className="group text-center transform hover:-translate-y-2 transition-all duration-500">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-2xl">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                24/7 Support
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Round-the-clock customer support team ready to assist you
                before, during, and after your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Schedule & Pricing Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-6 py-2 mb-6">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
                Schedule & Pricing
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Plan Your Perfect Journey
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find the ideal transportation option that perfectly matches your
              schedule and budget preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group backdrop-blur-xl bg-white/80 border-0 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-500 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
                <div className="flex items-center gap-3 mb-2">
                  <Bus className="w-8 h-8" />
                  <div>
                    <h3 className="text-2xl font-bold">Damascus ↔ Amman Bus</h3>
                    <p className="text-blue-100">Premium daily service</p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h4 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                      <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
                      Morning Express
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                        <span className="text-gray-700">
                          Damascus Departure
                        </span>
                        <span className="font-bold text-blue-600">
                          06:00 AM
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                        <span className="text-gray-700">Amman Arrival</span>
                        <span className="font-bold text-blue-600">
                          12:00 PM
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h4 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      Evening Comfort
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                        <span className="text-gray-700">
                          Damascus Departure
                        </span>
                        <span className="font-bold text-purple-600">
                          02:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                        <span className="text-gray-700">Amman Arrival</span>
                        <span className="font-bold text-purple-600">
                          08:00 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group backdrop-blur-xl bg-white/80 border-0 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-500 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8">
                <div className="flex items-center gap-3 mb-2">
                  <Car className="w-8 h-8" />
                  <div>
                    <h3 className="text-2xl font-bold">Private Taxi Service</h3>
                    <p className="text-amber-100">24/7 premium rides</p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h4 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                      Standard Service
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                        <span className="text-gray-700">
                          Sedan (4 passengers)
                        </span>
                        <span className="font-bold text-green-600">$150</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                        <span className="text-gray-700">
                          SUV (6 passengers)
                        </span>
                        <span className="font-bold text-green-600">$200</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h4 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      VIP Experience
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors">
                        <span className="text-gray-700">Luxury Sedan</span>
                        <span className="font-bold text-purple-600">$250</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors">
                        <span className="text-gray-700">Luxury SUV</span>
                        <span className="font-bold text-purple-600">$300</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information with Modern Alert */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/20 to-red-50/10"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/80 border-0 shadow-2xl rounded-3xl overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <AlertCircle className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">
                      Essential Travel Information
                    </h3>
                    <p className="text-amber-100 mt-2">
                      Please review these important details before booking
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors group">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-700 font-medium">
                        Valid travel documents and permits required for all
                        passengers
                      </span>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 transition-colors group">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-700 font-medium">
                        Arrive 30 minutes early for scheduled departures
                      </span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors group">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-700 font-medium">
                        Baggage allowance varies by selected service type
                      </span>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 transition-colors group">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-700 font-medium">
                        Flexible cancellation policies available for all
                        bookings
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
