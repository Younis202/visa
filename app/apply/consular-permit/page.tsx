"use client";

import { ArrowLeft, Shield, User, MapPin, Calendar, Mail, Phone, FileText, Building, Heart, GraduationCap, Briefcase, Plus, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

type FormData = {
  purpose?: string;
  [key: string]: any;
};

export default function ConsularPermitPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { id: 1, title: "Identity", icon: User },
    { id: 2, title: "Purpose & Details", icon: Building },
    { id: 3, title: "Finalize", icon: CheckCircle }
  ];

  const purposeOptions = [
    { value: "business", label: "Business Affairs", icon: Briefcase, color: "blue" },
    { value: "medical", label: "Medical Treatment", icon: Heart, color: "red" },
    { value: "education", label: "Educational Matters", icon: GraduationCap, color: "green" },
    { value: "family", label: "Family Visit", icon: User, color: "purple" },
    { value: "other", label: "Other Official Business", icon: Plus, color: "orange" }
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
    await new Promise(resolve => setTimeout(resolve, 2500));
    setIsSubmitting(false);
    // Handle success
  };

  const selectedPurpose = purposeOptions.find(p => p.value === formData.purpose);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden bg-white/90 backdrop-blur-sm border-b dark:bg-gray-900/90">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-cyan-600/5"></div>
        <div className="relative container mx-auto px-4 py-6">
          <Link 
            href="/services/entry-permits" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Entry Permits
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            Consular Permit
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Official business made simple. Secure processing for diplomatic and consular affairs.
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
                      ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg scale-110' 
                      : isCompleted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 text-gray-400 dark:bg-gray-700'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`ml-2 font-medium ${isActive ? 'text-indigo-600' : 'text-gray-500'}`}>
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
        <Card className="backdrop-blur-sm bg-white/95 dark:bg-gray-800/95 border-0 shadow-2xl shadow-indigo-500/10">
          <CardContent className="p-8">
            {/* Step 1: Identity */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in slide-in-from-right duration-300">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Identity Verification</h2>
                  <p className="text-gray-600 dark:text-gray-400">Provide your official identification details</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <User className="w-4 h-4 mr-2 text-indigo-500" />
                      First Name
                    </label>
                    <Input 
                      placeholder="Official first name"
                      className="h-12 border-0 bg-indigo-50 dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500"
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <User className="w-4 h-4 mr-2 text-indigo-500" />
                      Last Name
                    </label>
                    <Input 
                      placeholder="Official last name"
                      className="h-12 border-0 bg-indigo-50 dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500"
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-cyan-500" />
                      Date of Birth
                    </label>
                    <Input 
                      type="date"
                      className="h-12 border-0 bg-cyan-50 dark:bg-gray-700 focus:ring-2 focus:ring-cyan-500"
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-green-500" />
                      Nationality
                    </label>
                    <Input 
                      placeholder="Your nationality"
                      className="h-12 border-0 bg-green-50 dark:bg-gray-700 focus:ring-2 focus:ring-green-500"
                      onChange={(e) => handleInputChange('nationality', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-purple-500" />
                    Passport Number
                  </label>
                  <Input 
                    placeholder="Official passport number"
                    className="h-12 border-0 bg-purple-50 dark:bg-gray-700 focus:ring-2 focus:ring-purple-500"
                    onChange={(e) => handleInputChange('passportNumber', e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                      Passport Issue Date
                    </label>
                    <Input 
                      type="date"
                      className="h-12 border-0 bg-orange-50 dark:bg-gray-700 focus:ring-2 focus:ring-orange-500"
                      onChange={(e) => handleInputChange('passportIssue', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-pink-500" />
                      Passport Expiry Date
                    </label>
                    <Input 
                      type="date"
                      className="h-12 border-0 bg-pink-50 dark:bg-gray-700 focus:ring-2 focus:ring-pink-500"
                      onChange={(e) => handleInputChange('passportExpiry', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-blue-500" />
                      Email Address
                    </label>
                    <Input 
                      type="email"
                      placeholder="official@example.com"
                      className="h-12 border-0 bg-blue-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500"
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-teal-500" />
                      Phone Number
                    </label>
                    <Input 
                      placeholder="+1 (555) 000-0000"
                      className="h-12 border-0 bg-teal-50 dark:bg-gray-700 focus:ring-2 focus:ring-teal-500"
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <Building className="w-4 h-4 mr-2 text-violet-500" />
                    Current Address
                  </label>
                  <Textarea 
                    placeholder="Your complete residential address..."
                    className="min-h-[100px] border-0 bg-violet-50 dark:bg-gray-700 focus:ring-2 focus:ring-violet-500 resize-none"
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Purpose & Details */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in slide-in-from-right duration-300">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Purpose & Official Details</h2>
                  <p className="text-gray-600 dark:text-gray-400">Specify the nature of your consular business</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center mb-4">
                    <Building className="w-4 h-4 mr-2 text-indigo-500" />
                    Purpose of Visit
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {purposeOptions.map((purpose) => {
                      const Icon = purpose.icon;
                      const isSelected = formData.purpose === purpose.value;
                      return (
                        <div
                          key={purpose.value}
                          onClick={() => handleInputChange('purpose', purpose.value)}
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
                            <span className={`font-medium ${
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
                    <FileText className="w-4 h-4 mr-2 text-indigo-500" />
                    Additional Details & Supporting Information
                  </label>
                  <Textarea 
                    placeholder="Please provide detailed information about your consular business, including any supporting documentation references, official contacts, or specific requirements..."
                    className="min-h-[150px] border-0 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500 resize-none"
                    onChange={(e) => handleInputChange('details', e.target.value)}
                  />
                </div>

                {formData.purpose && selectedPurpose && (
                  <div className={`bg-gradient-to-r from-${selectedPurpose.color}-50 to-${selectedPurpose.color}-100 dark:from-${selectedPurpose.color}-900/20 dark:to-${selectedPurpose.color}-800/20 rounded-xl p-4 border border-${selectedPurpose.color}-200 dark:border-${selectedPurpose.color}-800`}>
                    <div className="flex items-center text-sm">
                      <selectedPurpose.icon className={`w-4 h-4 mr-2 text-${selectedPurpose.color}-600`} />
                      <span className={`font-medium text-${selectedPurpose.color}-800 dark:text-${selectedPurpose.color}-300`}>
                        Selected: {selectedPurpose.label}
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
                  <h2 className="text-2xl font-semibold mb-2">Final Review</h2>
                  <p className="text-gray-600 dark:text-gray-400">Verify all information before official submission</p>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</div>
                    <div><span className="font-medium">Nationality:</span> {formData.nationality}</div>
                    <div><span className="font-medium">Email:</span> {formData.email}</div>
                    <div><span className="font-medium">Phone:</span> {formData.phone}</div>
                  </div>
                  {formData.purpose && (
                    <div className="text-sm">
                      <span className="font-medium">Purpose:</span> {selectedPurpose?.label}
                    </div>
                  )}
                  {formData.address && (
                    <div className="text-sm">
                      <span className="font-medium">Address:</span> {formData.address}
                    </div>
                  )}
                  {formData.details && (
                    <div className="text-sm">
                      <span className="font-medium">Details:</span> {formData.details.substring(0, 100)}{formData.details.length > 100 ? '...' : ''}
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                  <div className="flex items-center text-green-800 dark:text-green-400 mb-2">
                    <Shield className="w-6 h-6 mr-3" />
                    <span className="font-semibold text-lg">Ready for Official Processing</span>
                  </div>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Your consular permit application will be reviewed by our diplomatic affairs team within 2-3 business days. You will receive official confirmation and next steps via email.
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
                  className="px-8 h-12 border-indigo-200 text-indigo-600 hover:bg-indigo-50"
                >
                  Previous
                </Button>
              )}
              
              <div className="ml-auto">
                {currentStep < 3 ? (
                  <Button 
                    onClick={nextStep}
                    className="px-8 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600"
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
                      'Submit Official Application'
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