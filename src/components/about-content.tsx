"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, ShieldCheck, Mail, MessageSquare } from "lucide-react";

const timelineItems = [
  {
    year: "2023",
    title: "The Vision",
    desc: "Emorixia started as a small design workshop in Odisha, India, searching for paper textures that would make digital images feel tangible and archival."
  },
  {
    year: "2024",
    title: "100+ Keep-sakes Crafted",
    desc: "Launched our flagship Memory Magazine, styled like modern high-fashion editorial booklets, which went viral among couples across Odisha."
  },
  {
    year: "2025",
    title: "Floral Resin Art Preservation",
    desc: "Introduced floral resin tray collections to capture and store wedding day roses, leaves, and metallic flakes permanently."
  },
  {
    year: "2026",
    title: "Pan-India Expansion",
    desc: "Growing our online layout configurations to ship double-wrapped premium keepsakes securely to every corner of India."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
} as const;

export function AboutContent() {
  return (
    <div className="flex flex-col gap-20">
      {/* Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center flex flex-col items-center gap-4 max-w-3xl mx-auto"
      >
        <span className="text-xs font-bold tracking-widest text-primary uppercase bg-secondary px-3.5 py-1.5 rounded-full">
          Our Story
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
          Crafting Homes for Your Most Precious Memories
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
          At Emorixia, we believe that memories are too valuable to remain locked behind screens. We turn your emotions into timeless, tactile works of physical art.
        </p>
      </motion.div>

      {/* Origin Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Story Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col gap-6 text-left"
        >
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">
            How Emorixia Was Born
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Emorixia started as a small design workshop in Odisha, India, with a singular mission: to restore the emotional impact of physical photos and keepsakes. In a world of fast-paced, throwaway digital sharing, we felt something crucial was lost—the joy of touch, the smell of printed paper, and the permanence of shared stories.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            We spent months testing dozens of printing presses and card stocks. We wanted a paper that wasn&apos;t just smooth, but carried texture—a paper that would catch light, absorb inks beautifully, and feel premium to touch. Today, we utilize premium cotton, linen, and museum-grade matte papers as our brand standard.
          </p>
          <blockquote className="border-l-4 border-primary pl-4 text-primary font-heading text-lg md:text-xl italic font-semibold my-2">
            “Photos are what we take. Memories are what we keep. Keepsakes are how we live them.”
          </blockquote>
        </motion.div>

        {/* Story Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden border border-border/20 bg-card shadow-md"
        >
          <img
            src="https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=800&auto=format&fit=crop"
            alt="Handcrafted details and photobook print designs"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>
      </div>

      {/* Interactive Timeline Journey */}
      <div className="flex flex-col gap-12 max-w-5xl mx-auto w-full text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Milestones</span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">Our Creative Journey</h2>
        </div>

        <div className="relative border-l-2 border-primary/20 pl-8 md:pl-0 md:border-l-0 md:grid md:grid-cols-4 gap-6 text-left">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative bg-card border border-border/40 hover:border-primary/25 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all mb-8 md:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-6 md:relative md:left-0 md:top-0 md:mb-4 w-6 h-6 rounded-full bg-primary border-4 border-background flex items-center justify-center" />
              <div className="font-heading text-xl font-bold text-primary mb-1">{item.year}</div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-12 bg-muted/20 border border-border/10 rounded-[2.5rem] p-8 md:p-14"
      >
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground text-center">
          Our Pillars of Craftsmanship
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={cardVariants} className="flex flex-col items-start gap-4 text-left bg-card p-6 rounded-2xl border border-border/20 hover:border-primary/20 transition-all duration-300">
            <div className="p-3 bg-secondary text-primary rounded-xl">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">Archival Quality</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We print only on acid-free papers that protect colors from fading, yellowing, or degrading over the years.
            </p>
          </motion.div>

          <motion.div variants={cardVariants} className="flex flex-col items-start gap-4 text-left bg-card p-6 rounded-2xl border border-border/20 hover:border-primary/20 transition-all duration-300">
            <div className="p-3 bg-secondary text-primary rounded-xl">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">Handmade Detailing</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              From binding memory magazines to polishing Lippan mirror works, each piece is physically inspected and finished by hand.
            </p>
          </motion.div>

          <motion.div variants={cardVariants} className="flex flex-col items-start gap-4 text-left bg-card p-6 rounded-2xl border border-border/20 hover:border-primary/20 transition-all duration-300">
            <div className="p-3 bg-secondary text-primary rounded-xl">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">100% Satisfaction</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We never print blindly. You review and approve digital mock-ups first. If you want changes, we edit until you are satisfied.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Direct Contact CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6 text-center max-w-2xl mx-auto py-10"
      >
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">
          Let&apos;s Design Your Next Gift
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          Have a unique idea? A romantic memory book, a custom resin art, or a traditional mirror panel? Let&apos;s design it together.
        </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            href="https://wa.me/917848807515"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-hover text-white px-7 py-3 rounded-xl font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href="/contact"
            className="border border-border hover:border-primary bg-card px-7 py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <Mail className="h-4 w-4 text-primary" />
            <span>Fill Contact Form</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
