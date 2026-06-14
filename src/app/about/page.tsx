import React from "react";
import type { Metadata } from "next";
import { AboutContent } from "@/components/about-content";

export const metadata: Metadata = {
  title: "About Our Brand - Emorixia Keepsakes",
  description: "Learn about the mission, tactile paper details, and handcrafted design process behind Emorixia memory gifts. Creating lifetime keepsakes in Odisha, India.",
  alternates: {
    canonical: "/about",
  }
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <AboutContent />
    </div>
  );
}
