import React from "react";
import { cn } from "@/lib/utils";

interface StepItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface StepsProps {
  items: StepItem[];
  activeStep?: number;
  className?: string;
}

export function Steps({ items, activeStep = -1, className }: StepsProps) {
  return (
    <div className={cn("space-y-8", className)}>
      {items.map((item, index) => {
        const isActive = activeStep === index;
        const isCompleted = activeStep > index;
        const isLast = index === items.length - 1;
        
        return (
          <div key={index} className="relative">
            {!isLast && (
              <div
                className={cn(
                  "absolute top-6 left-6 bottom-0 w-0.5 -ml-px",
                  isCompleted ? "bg-blue-600 dark:bg-blue-500" : "bg-gray-200 dark:bg-gray-700"
                )}
                style={{ height: "calc(100% - 1.5rem)" }}
              />
            )}
            
            <div className="relative flex items-start group">
              <div className="flex-shrink-0 flex items-center justify-center">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center z-10",
                    isActive || isCompleted
                      ? "bg-blue-600 text-white dark:bg-blue-500"
                      : "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                  )}
                >
                  {item.icon || (
                    <span className="text-sm font-semibold">{index + 1}</span>
                  )}
                </div>
              </div>
              
              <div className="ml-6 pb-8">
                <h3 className={cn(
                  "text-lg font-semibold",
                  isActive || isCompleted
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-900 dark:text-gray-100"
                )}>
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}