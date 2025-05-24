"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MessageSquare, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/30 border border-white/30 rounded-full px-6 py-2 mb-6">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-semibold">Contact Us</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg">Have questions? We're here to help!</p>
          </div>

          {/* Form Container */}
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="backdrop-blur-md bg-white/50 border-white/30 focus:bg-white/70 transition-all duration-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your@email.com" 
                          {...field} 
                          className="backdrop-blur-md bg-white/50 border-white/30 focus:bg-white/70 transition-all duration-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Phone</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your phone number" 
                          {...field} 
                          className="backdrop-blur-md bg-white/50 border-white/30 focus:bg-white/70 transition-all duration-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          {...field} 
                          className="backdrop-blur-md bg-white/50 border-white/30 focus:bg-white/70 transition-all duration-300 resize-none"
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}