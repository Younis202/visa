"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle2, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "5000+",
    label: "Happy Clients",
    color: "text-blue-500"
  },
  {
    icon: CheckCircle2,
    number: "95%",
    label: "Success Rate",
    color: "text-green-500"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Support",
    color: "text-amber-500"
  },
  {
    icon: Award,
    number: "10+",
    label: "Years Experience",
    color: "text-purple-500"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center mb-4">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}