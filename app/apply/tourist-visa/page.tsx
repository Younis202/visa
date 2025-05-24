"use client";

import { ArrowLeft, Camera, User, MapPin, Mail, Phone, FileText, Calendar, Globe, Heart, CheckCircle2, Plane, Mountain, Building2, Palmtree, Map, Users } from "lucide-react";
import { useState } from "react";

type FormData = {
  purpose?: string;
  nationality?: string;
  accommodationType?: string;
  [key: string]: any;
};

export default function TourismVisaApplication() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { id: 1, title: "Personal Info", icon: User },
    { id: 2, title: "Travel Details", icon: MapPin },
    { id: 3, title: "Confirmation", icon: CheckCircle2 }
  ];

  const travelPurposes = [
    { value: "leisure", label: "Leisure & Recreation", icon: Palmtree, color: "blue" },
    { value: "sightseeing", label: "Sightseeing & Culture", icon: Camera, color: "green" },
    { value: "adventure", label: "Adventure Tourism", icon: Mountain, color: "purple" },
    { value: "family", label: "Family Visit", icon: Users, color: "orange" },
    { value: "medical", label: "Medical Tourism", icon: Heart, color: "pink" },
    { value: "other", label: "Other Tourism", icon: Map, color: "cyan" }
  ];

  const nationalities = [
    "United States", "United Kingdom", "Canada", "Australia", "Germany", 
    "France", "Japan", "South Korea", "Singapore", "UAE", "Saudi Arabia", "Other"
  ];

  const accommodationTypes = [
    "Hotel", "Resort", "Vacation Rental", "Hostel", "Guest House", "Friend/Family", "Other"
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Handle success
  };

  const selectedTravelPurpose = travelPurposes.find(p => p.value === formData.travelPurpose);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden bg-white/90 backdrop-blur-sm border-b dark:bg-gray-900/90">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative container mx-auto px-4 py-6">
          <button className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 transition-colors group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Visa Services
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tourism Visa
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore new horizons. Simplified application for your dream vacation.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-110' 
                      : isCompleted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 text-gray-400 dark:bg-gray-700'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`ml-2 font-medium ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 mx-4 ${
                      isCompleted ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Card */}
        <div className="backdrop-blur-sm bg-white/95 dark:bg-gray-800/95 border-0 shadow-2xl shadow-blue-500/10 rounded-2xl">
          <div className="p-8">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in slide-in-from-right duration-300">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Personal Information</h2>
                  <p className="text-gray-600 dark:text-gray-400">Let's start with your basic details</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <User className="w-4 h-4 mr-2 text-blue-500" />
                    Full Name (as per passport)
                  </label>
                  <input 
                    placeholder="John Michael Doe"
                    className="w-full h-12 px-4 border-0 bg-blue-50 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-purple-500" />
                      Email Address
                    </label>
                    <input 
                      type="email"
                      placeholder="john.doe@email.com"
                      className="w-full h-12 px-4 border-0 bg-purple-50 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-green-500" />
                      Phone Number
                    </label>
                    <input 
                      placeholder="+1 (555) 123-4567"
                      className="w-full h-12 px-4 border-0 bg-green-50 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-orange-500" />
                    Nationality
                  </label>
                  <select 
                    className="w-full h-12 px-4 border-0 bg-orange-50 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    onChange={(e) => handleInputChange('nationality', e.target.value)}
                  >
                    <option value="">Select your nationality</option>
                    {nationalities.map(nationality => (
                      <option key={nationality} value={nationality}>{nationality}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-pink-500" />
                      Passport Number
                    </label>
                    <input 
                      placeholder="A12345678"
                      className="w-full h-12 px-4 border-0 bg-pink-50 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                      onChange={(e) => handleInputChange('passportNumber', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-cyan-500" />
                      Passport Expiry Date
                    </label>
                    <input 
                      type="date"
                      className="w-full h-12 px-4 border-0 bg-cyan-50 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                      onChange={(e) => handleInputChange('passportExpiry', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Travel Details */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in slide-in-from-right duration-300">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Travel Information</h2>
                  <p className="text-gray-600 dark:text-gray-400">Tell us about your travel plans and destinations</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                    Destination Cities/Regions
                  </label>
                  <input 
                    placeholder="Paris, Rome, Barcelona"
                    className="w-full h-12 px-4 border-0 bg-blue-50 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    onChange={(e) => handleInputChange('destinations', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center mb-4">
                    <Camera className="w-4 h-4 mr-2 text-purple-500" />
                    Purpose of Travel
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {travelPurposes.map((purpose) => {
                      const Icon = purpose.icon;
                      const isSelected = formData.travelPurpose === purpose.value;
                      return (
                        <div
                          key={purpose.value}
                          onClick={() => handleInputChange('travelPurpose', purpose.value)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? `border-${purpose.color}-500 bg-${purpose.color}-50 dark:bg-${purpose.color}-900/20`
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${
                              isSelected 
                                ? `bg-${purpose.color}-500 text-white` 
                                : `bg-${purpose.color}-100 text-${purpose.color}-600 dark:bg-gray-700 dark:text-${purpose.color}-400`
                            }`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className={`font-medium text-sm ${
                              isSelected 
                                ? `text-${purpose.color}-700 dark:text-${purpose.color}-300` 
                                : 'text-gray-700 dark:text-gray-300'
                            }`}>
                              {purpose.label}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <Heart className="w-4 h-4 mr-2 text-green-500" />
                    Travel Itinerary & Activities
                  </label>
                  <textarea 
                    placeholder="Visiting museums, exploring historical sites, beach relaxation, local cuisine tours, shopping, cultural experiences, nature walks, photography, etc. Please describe your planned activities..."
                    className="w-full min-h-[120px] px-4 py-3 border-0 bg-green-50 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
                    onChange={(e) => handleInputChange('itinerary', e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                      Intended Arrival Date
                    </label>
                    <input 
                      type="date"
                      className="w-full h-12 px-4 border-0 bg-orange-50 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                      onChange={(e) => handleInputChange('arrivalDate', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-pink-500" />
                      Duration of Stay (days)
                    </label>
                    <input 
                      type="number"
                      min="1"
                      placeholder="14"
                      className="w-full h-12 px-4 border-0 bg-pink-50 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <Building2 className="w-4 h-4 mr-2 text-cyan-500" />
                    Accommodation Type
                  </label>
                  <select 
                    className="w-full h-12 px-4 border-0 bg-cyan-50 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                    onChange={(e) => handleInputChange('accommodation', e.target.value)}
                  >
                    <option value="">Select accommodation type</option>
                    {accommodationTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {formData.travelPurpose && selectedTravelPurpose && (
                  <div className={`bg-gradient-to-r from-${selectedTravelPurpose.color}-50 to-${selectedTravelPurpose.color}-100 dark:from-${selectedTravelPurpose.color}-900/20 dark:to-${selectedTravelPurpose.color}-800/20 rounded-xl p-4 border border-${selectedTravelPurpose.color}-200 dark:border-${selectedTravelPurpose.color}-800`}>
                    <div className="flex items-center text-sm">
                      <selectedTravelPurpose.icon className={`w-4 h-4 mr-2 text-${selectedTravelPurpose.color}-600`} />
                      <span className={`font-medium text-${selectedTravelPurpose.color}-800 dark:text-${selectedTravelPurpose.color}-300`}>
                        Travel Purpose: {selectedTravelPurpose.label}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Review & Submit */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in slide-in-from-right duration-300">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Application Summary</h2>
                  <p className="text-gray-600 dark:text-gray-400">Review your tourism visa application</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 space-y-4">
                  <h3 className="font-semibold text-lg mb-4">Personal Details</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div><span className="font-medium">Name:</span> {formData.fullName}</div>
                    <div><span className="font-medium">Nationality:</span> {formData.nationality}</div>
                    <div><span className="font-medium">Email:</span> {formData.email}</div>
                    <div><span className="font-medium">Phone:</span> {formData.phone}</div>
                    <div><span className="font-medium">Passport:</span> {formData.passportNumber}</div>
                    <div><span className="font-medium">Duration:</span> {formData.duration} days</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-green-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 space-y-4">
                  <h3 className="font-semibold text-lg mb-4">Travel Information</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Destinations:</span> {formData.destinations}</div>
                    <div><span className="font-medium">Travel Purpose:</span> {selectedTravelPurpose?.label}</div>
                    <div><span className="font-medium">Accommodation:</span> {formData.accommodation}</div>
                    {formData.arrivalDate && (
                      <div><span className="font-medium">Arrival Date:</span> {formData.arrivalDate}</div>
                    )}
                    {formData.itinerary && (
                      <div><span className="font-medium">Itinerary:</span> {formData.itinerary.substring(0, 150)}{formData.itinerary.length > 150 ? '...' : ''}</div>
                    )}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                  <div className="flex items-center text-green-800 dark:text-green-400 mb-2">
                    <Plane className="w-6 h-6 mr-3" />
                    <span className="font-semibold text-lg">Ready to Explore</span>
                  </div>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Your tourism visa application will be processed within 3-5 business days. Our team will review your travel plans and contact you for any additional requirements.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              {currentStep > 1 && (
                <button 
                  onClick={prevStep}
                  className="px-8 h-12 border border-blue-200 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Previous
                </button>
              )}
              
              <div className="ml-auto">
                {currentStep < 3 ? (
                  <button 
                    onClick={nextStep}
                    className="px-8 h-12 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all"
                  >
                    Continue
                  </button>
                ) : (
                  <button 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-lg text-lg font-semibold transition-all"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Processing Application...
                      </div>
                    ) : (
                      'Submit Tourism Visa Application'
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}