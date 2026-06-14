import React from "react";
import type { Metadata } from "next";
import { Sparkles, Heart, Award, ShieldCheck, Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Brand - Emorixia Keepsakes",
  description: "Learn about the mission, tactile paper details, and handcrafted design process behind Emorixia memory gifts. Creating lifetime keepsakes in Odisha, India.",
  alternates: {
    canonical: "/about",
  }
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-20">
      {/* Header Banner */}
      <div className="text-center flex flex-col items-center gap-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold tracking-widest text-primary uppercase bg-secondary px-3.5 py-1.5 rounded-full">
          Our Story
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
          Crafting Homes for Your Most Precious Memories
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
          At Emorixia, we believe that memories are too valuable to remain locked behind screens. We turn your emotions into timeless, tactile works of physical art.
        </p>
      </div>

      {/* Origin Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Story Text */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">
            How Emorixia Was Born
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Emorixia started as a small design workshop in Odisha, India, with a singular mission: to restore the emotional impact of physical photos and keepsakes. In a world of fast-paced, throwaway digital sharing, we felt something crucial was lost—the joy of touch, the smell of printed paper, and the permanence of shared stories.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            We spent months testing dozens of printing presses and card stocks. We wanted a paper that wasn't just smooth, but carried texture—a paper that would catch light, absorb inks beautifully, and feel premium to touch. Today, we utilize premium cotton, linen, and museum-grade matte papers as our brand standard.
          </p>
          <blockquote className="border-l-4 border-primary pl-4 text-primary font-heading text-lg md:text-xl italic font-semibold my-2">
            “Photos are what we take. Memories are what we keep. Keepsakes are how we live them.”
          </blockquote>
        </div>

        {/* Story Visual */}
        <div className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden border border-border/20 bg-card shadow-md">
          <img
            src="https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=800&auto=format&fit=crop"
            alt="Handcrafted details and photobook print designs"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Values Grid */}
      <div className="flex flex-col gap-12 bg-muted/20 border border-border/10 rounded-[2.5rem] p-8 md:p-14">
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground text-center">
          Our Pillars of Craftsmanship
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start gap-4 text-left bg-card p-6 rounded-2xl border border-border/20">
            <div className="p-3 bg-secondary text-primary rounded-xl">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">Archival Quality</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We print only on acid-free papers that protect colors from fading, yellowing, or degrading over the years.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 text-left bg-card p-6 rounded-2xl border border-border/20">
            <div className="p-3 bg-secondary text-primary rounded-xl">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">Handmade Detailing</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              From binding memory magazines to polishing Lippan mirror works, each piece is physically inspected and finished by hand.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 text-left bg-card p-6 rounded-2xl border border-border/20">
            <div className="p-3 bg-secondary text-primary rounded-xl">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">100% Satisfaction</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We never print blindly. You review and approve digital mock-ups first. If you want changes, we edit until you are satisfied.
            </p>
          </div>
        </div>
      </div>

      {/* Direct Contact CTA */}
      <div className="flex flex-col items-center gap-6 text-center max-w-2xl mx-auto py-10">
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">
          Let's Design Your Next Gift
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          Have a unique idea? A romantic memory book, a custom resin art, or a traditional mirror panel? Let's design it together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            href="https://wa.me/917848807515"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-hover text-white px-7 py-3 rounded-full font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="h-4.5 w-4.5" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href="/contact"
            className="border border-border/40 hover:border-primary bg-card px-7 py-3 rounded-full font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <Mail className="h-4.5 w-4.5 text-primary" />
            <span>Fill Contact Form</span>
          </a>
        </div>
      </div>
    </div>
  );
}
