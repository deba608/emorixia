import React from "react";
import type { Metadata } from "next";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Emorixia - Custom Memory Gifts Inquiries",
  description: "Send inquiries for custom photobook memory magazines, frames, resin art, Lippan art, and trophies. Reach Emorixia in Odisha, India.",
  alternates: {
    canonical: "/contact",
  }
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-16">
      {/* Header section */}
      <div className="text-center flex flex-col items-center gap-4 max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-[0.15em] text-primary uppercase bg-secondary px-3.5 py-1.5 rounded-lg">
          Get In Touch
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
          Let&apos;s Start Creating
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          Have an idea for a customized anniversary book, resin rose preservation, or a banner? Drop us an email request or chat directly on WhatsApp.
        </p>
      </div>

      {/* Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Info Column */}
        <div className="lg:col-span-5 flex flex-col gap-8 text-left">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Connect With Our Design Team
          </h2>
          
          <p className="text-muted-foreground text-base leading-relaxed">
            Our typical customer support is available 24/7. Once you submit a request, a designer will connect with you to request high-resolution image files and outline the textured paper draft layouts.
          </p>

          {/* Contact Methods */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 bg-card border border-border/30 rounded-2xl p-5 shadow-sm">
              <div className="p-3 bg-secondary text-primary rounded-xl flex-shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground font-semibold">Phone Support</span>
                <span className="text-foreground font-bold text-base">+91 7848807515</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card border border-border/30 rounded-2xl p-5 shadow-sm">
              <div className="p-3 bg-secondary text-primary rounded-xl flex-shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground font-semibold">Email Inquiries</span>
                <span className="text-foreground font-bold text-base">contact@emorixia.in</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card border border-border/30 rounded-2xl p-5 shadow-sm">
              <div className="p-3 bg-secondary text-primary rounded-xl flex-shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground font-semibold">Location Hub</span>
                <span className="text-foreground font-bold text-base">Bhubaneswar, Odisha, India</span>
              </div>
            </div>
          </div>

          {/* Social CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://wa.me/917848807515"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Chat</span>
            </a>
            <a
              href="https://instagram.com/thesairajj"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border hover:border-primary bg-card px-6 py-3 rounded-xl font-semibold text-sm transition-all flex items-center gap-2"
            >
              <InstagramIcon className="h-4 w-4 text-primary" />
              <span>Instagram Page</span>
            </a>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
