"use client";

import { ArrowLeft, Briefcase, User, Building, Mail, Phone, FileText, Calendar, Globe, Target, CheckCircle2, Rocket } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function BusinessVisaApplication() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { id: 1, title: "Personal Info", icon: User },
    { id: 2, title: "Business Details", icon: Building },
    { id: 3, title: "Confirmation", icon: CheckCircle2 }
  ];

  const businessTypes = [
    { value: "corporation", label: "Corporation", icon: Building, color: "blue" },
    { value: "llc", label: "Limited Liability Company", icon: Briefcase, color: "green" },
    { value: "partnership", label: "Partnership", icon: Target, color: "purple" },
    { value: "sole-proprietorship", label: "Sole Proprietorship", icon: User, color: "orange" },
    { value: "startup", label: "Startup/Entrepreneurship", icon: Rocket, color: "pink" },
    { value: "other", label: "Other Business Entity", icon: Globe, color: "cyan" }
  ];

  const nationalities = [
    "United States", "United Kingdom", "Canada", "Australia", "Germany", 
    "France", "Japan", "South Korea", "Singapore", "UAE", "Saudi Arabia", "Other"
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

  const selectedBusinessType = businessTypes.find(bt => bt.value === formData.businessType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden bg-white/90 backdrop-blur-sm border-b dark:bg-gray-900/90">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-blue-600/5"></div>
        <div className="relative container mx-auto px-4 py-6">
          <Link 
            href="/services/visas" 
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Visa Services
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-4">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Business Visa
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Unlock global opportunities. Streamlined application for business professionals.
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
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg scale-110' 
                      : isCompleted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 text-gray-400 dark:bg-gray-700'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`ml-2 font-medium ${isActive ? 'text-emerald-600' : 'text-gray-500'}`}>
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
        <Card className="backdrop-blur-sm bg-white/95 dark:bg-gray-800/95 border-0 shadow-2xl shadow-emerald-500/10">
          <CardContent className="p-8">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in slide-in-from-right duration-300">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Personal Information</h2>
                  <p className="text-gray-600 dark:text-gray-400">Let's start with your basic details</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <User className="w-4 h-4 mr-2 text-emerald-500" />
                    Full Name (as per passport)
                  </label>
                  <Input 
                    placeholder="John Michael Doe"
                    className="h-12 border-0 bg-emerald-50 dark:bg-gray-700 focus:ring-2 focus:ring-emerald-500"
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-blue-500" />
                      Email Address
                    </label>
                    <Input 
                      type="email"
                      placeholder="john.doe@company.com"
                      className="h-12 border-0 bg-blue-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500"
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-purple-500" />
                      Phone Number
                    </label>
                    <Input 
                      placeholder="+1 (555) 123-4567"
                      className="h-12 border-0 bg-purple-50 dark:bg-gray-700 focus:ring-2 focus:ring-purple-500"
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
                    <Input 
                      placeholder="A12345678"
                      className="h-12 border-0 bg-pink-50 dark:bg-gray-700 focus:ring-2 focus:ring-pink-500"
                      onChange={(e) => handleInputChange('passportNumber', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-cyan-500" />
                      Passport Expiry Date
                    </label>
                    <Input 
                      type="date"
                      className="h-12 border-0 bg-cyan-50 dark:bg-gray-700 focus:ring-2 focus:ring-cyan-500"
                      onChange={(e) => handleInputChange('passportExpiry', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Business Details */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in slide-in-from-right duration-300">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Business Information</h2>
                  <p className="text-gray-600 dark:text-gray-400">Tell us about your business and visit purpose</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <Building className="w-4 h-4 mr-2 text-emerald-500" />
                    Company Name
                  </label>
                  <Input 
                    placeholder="Tech Solutions Inc."
                    className="h-12 border-0 bg-emerald-50 dark:bg-gray-700 focus:ring-2 focus:ring-emerald-500"
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center mb-4">
                    <Briefcase className="w-4 h-4 mr-2 text-blue-500" />
                    Business Type
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {businessTypes.map((type) => {
                      const Icon = type.icon;
                      const isSelected = formData.businessType === type.value;
                      return (
                        <div
                          key={type.value}
                          onClick={() => handleInputChange('businessType', type.value)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? `border-${type.color}-500 bg-${type.color}-50 dark:bg-${type.color}-900/20`
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${
                              isSelected 
                                ? `bg-${type.color}-500 text-white` 
                                : `bg-${type.color}-100 text-${type.color}-600 dark:bg-gray-700 dark:text-${type.color}-400`
                            }`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className={`font-medium text-sm ${
                              isSelected 
                                ? `text-${type.color}-700 dark:text-${type.color}-300` 
                                : 'text-gray-700 dark:text-gray-300'
                            }`}>
                              {type.label}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <Target className="w-4 h-4 mr-2 text-purple-500" />
                    Purpose of Visit
                  </label>
                  <Textarea 
                    placeholder="Attending business meetings, conference participation, exploring partnership opportunities, market research, client meetings, etc. Please be specific about your business activities..."
                    className="min-h-[120px] border-0 bg-purple-50 dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 resize-none"
                    onChange={(e) => handleInputChange('purposeOfVisit', e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                      Intended Arrival Date
                    </label>
                    <Input 
                      type="date"
                      className="h-12 border-0 bg-orange-50 dark:bg-gray-700 focus:ring-2 focus:ring-orange-500"
                      onChange={(e) => handleInputChange('arrivalDate', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-pink-500" />
                      Duration of Stay (days)
                    </label>
                    <Input 
                      type="number"
                      min="1"
                      placeholder="14"
                      className="h-12 border-0 bg-pink-50 dark:bg-gray-700 focus:ring-2 focus:ring-pink-500"
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                    />
                  </div>
                </div>

                {formData.businessType && selectedBusinessType && (
                  <div className={`bg-gradient-to-r from-${selectedBusinessType.color}-50 to-${selectedBusinessType.color}-100 dark:from-${selectedBusinessType.color}-900/20 dark:to-${selectedBusinessType.color}-800/20 rounded-xl p-4 border border-${selectedBusinessType.color}-200 dark:border-${selectedBusinessType.color}-800`}>
                    <div className="flex items-center text-sm">
                      <selectedBusinessType.icon className={`w-4 h-4 mr-2 text-${selectedBusinessType.color}-600`} />
                      <span className={`font-medium text-${selectedBusinessType.color}-800 dark:text-${selectedBusinessType.color}-300`}>
                        Business Type: {selectedBusinessType.label}
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
                  <p className="text-gray-600 dark:text-gray-400">Review your business visa application</p>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 space-y-4">
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

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600  rounded-xl p-6 space-y-4">
                  <h3 className="font-semibold text-lg mb-4">Business Information</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Company:</span> {formData.companyName}</div>
                    <div><span className="font-medium">Business Type:</span> {selectedBusinessType?.label}</div>
                    {formData.arrivalDate && (
                      <div><span className="font-medium">Arrival Date:</span> {formData.arrivalDate}</div>
                    )}
                    {formData.purposeOfVisit && (
                      <div><span className="font-medium">Purpose:</span> {formData.purposeOfVisit.substring(0, 150)}{formData.purposeOfVisit.length > 150 ? '...' : ''}</div>
                    )}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                  <div className="flex items-center text-green-800 dark:text-green-400 mb-2">
                    <Briefcase className="w-6 h-6 mr-3" />
                    <span className="font-semibold text-lg">Ready for Business</span>
                  </div>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Your business visa application will be processed within 3-5 business days. Our team will verify your business credentials and contact you for any additional requirements.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              {currentStep > 1 && (
                <Button 
                  variant="outline" 
                  onClick={prevStep}
                  className="px-8 h-12 border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                >
                  Previous
                </Button>
              )}
              
              <div className="ml-auto">
                {currentStep < 3 ? (
                  <Button 
                    onClick={nextStep}
                    className="px-8 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Processing Application...
                      </div>
                    ) : (
                      'Submit Business Visa Application'
                    )}
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}