"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  text: string;
  author: string;
  role: string;
  rating: number;
  image?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    z: 0,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: number) => ({
    z: 1,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  }),
};

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const activeIndex = Math.abs(page % testimonials.length);

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 6000); // Change slides every 6 seconds
    return () => clearInterval(interval);
  }, [paginate, isHovered]);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto px-6 py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider Window */}
      <div className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full flex flex-col items-center text-center bg-card border border-border/40 rounded-3xl p-8 md:p-12 shadow-md shadow-primary/5"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < testimonials[activeIndex].rating
                      ? "text-primary fill-primary"
                      : "text-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-heading text-lg md:text-2xl text-foreground italic leading-relaxed mb-8 max-w-2xl">
              “{testimonials[activeIndex].text}”
            </blockquote>

            {/* Customer Details */}
            <div className="flex flex-col items-center">
              {testimonials[activeIndex].image ? (
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full object-cover mb-3 border border-primary/20 shadow-sm"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-primary font-bold mb-3">
                  {testimonials[activeIndex].author[0]}
                </div>
              )}
              <cite className="not-italic font-bold text-foreground text-base">
                {testimonials[activeIndex].author}
              </cite>
              <span className="text-muted-foreground text-xs md:text-sm mt-0.5">
                {testimonials[activeIndex].role}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2">
        <button
          onClick={() => paginate(-1)}
          className="w-11 h-11 rounded-full border border-border/40 bg-card/80 hover:bg-card hover:border-primary/45 text-foreground/80 hover:text-primary flex items-center justify-center pointer-events-auto backdrop-blur-sm transition-all shadow-sm focus:outline-none"
          aria-label="Previous Review"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="w-11 h-11 rounded-full border border-border/40 bg-card/80 hover:bg-card hover:border-primary/45 text-foreground/80 hover:text-primary flex items-center justify-center pointer-events-auto backdrop-blur-sm transition-all shadow-sm focus:outline-none"
          aria-label="Next Review"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center gap-2.5 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const diff = i - activeIndex;
              if (diff !== 0) paginate(diff);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-6 bg-primary" : "w-2.5 bg-muted-foreground/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
