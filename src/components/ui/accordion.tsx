"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={cn("flex flex-col gap-4 w-full", className)}>
      {items.map((item, idx) => {
        const isOpen = activeIndex === idx;
        return (
          <div
            key={idx}
            className={cn(
              "border border-border/40 rounded-2xl overflow-hidden bg-card transition-all duration-300",
              isOpen ? "shadow-md shadow-primary/5 border-primary/20" : "hover:border-primary/20"
            )}
          >
            {/* Header */}
            <button
              onClick={() => toggleIndex(idx)}
              className="flex justify-between items-center w-full px-7 py-5 text-left font-semibold text-foreground hover:text-primary transition-colors focus:outline-none"
            >
              <span className="text-base sm:text-lg leading-relaxed">{item.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-primary flex-shrink-0 ml-4"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </button>

            {/* Answer body */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-7 pb-7 pt-2 text-sm sm:text-base leading-relaxed text-muted-foreground border-t border-border/10">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
