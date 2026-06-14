"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Image as ImageIcon, Paintbrush, CheckCircle, Truck } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Send Photos",
    description: "Upload your favorite photos and share your stories with us via our form or WhatsApp. Include any texts or personal layouts you prefer.",
    icon: ImageIcon,
    color: "bg-primary text-white",
  },
  {
    step: "02",
    title: "We Design",
    description: "Our designer team carefully curates your memories, formatting layout, typography, and visual edits to create a gorgeous luxury design.",
    icon: Paintbrush,
    color: "bg-accent text-primary",
  },
  {
    step: "03",
    title: "Approve Preview",
    description: "We send you a complete digital preview of the keepsake. You review and suggest revisions. We print only when you are 100% satisfied.",
    icon: CheckCircle,
    color: "bg-secondary text-primary",
  },
  {
    step: "04",
    title: "Delivered Across India",
    description: "Printed on premium cotton, linen, or natural textured papers, safely packed and shipped to your address anywhere in India.",
    icon: Truck,
    color: "bg-primary text-white",
  },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress inside the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto px-6 py-12">
      {/* Central Connector Line */}
      <div className="absolute left-10 md:left-1/2 top-4 bottom-4 w-[3px] bg-muted/40 md:-translate-x-1/2 rounded-full overflow-hidden">
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="w-full h-full bg-primary rounded-full"
        />
      </div>

      {/* Timeline Steps */}
      <div className="space-y-16 md:space-y-20 relative">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          const isEven = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-start md:items-center relative ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Node Icon */}
              <div className="absolute left-10 md:left-1/2 top-1.5 md:top-1/2 w-10 h-10 -translate-x-[18px] md:-translate-x-5 md:-translate-y-5 rounded-full flex items-center justify-center border-4 border-background bg-card shadow-sm z-10">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.1 }}
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-primary text-white`}
                >
                  {idx + 1}
                </motion.div>
              </div>

              {/* Space for the opposite column on desktop */}
              <div className="hidden md:block w-1/2" />

              {/* Timeline Card */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                className="w-full md:w-[45%] pl-16 md:pl-0 bg-card border border-border/40 hover:border-primary/20 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-2xl ${item.color} flex-shrink-0`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">
                      Step {item.step}
                    </span>
                    <h3 className="font-heading text-lg md:text-xl font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
