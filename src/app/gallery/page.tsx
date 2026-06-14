import React from "react";
import type { Metadata } from "next";
import { GalleryMasonry } from "@/components/gallery-masonry";

export const metadata: Metadata = {
  title: "Memory Gallery - Emorixia Showcase",
  description: "Explore previous handcrafted projects of memory magazines, floral resin art, custom collage frames, and traditional mirror Lippan art designed by Emorixia.",
  alternates: {
    canonical: "/gallery",
  }
};

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-16">
      {/* Header section */}
      <div className="text-center flex flex-col items-center gap-4 max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-widest text-primary uppercase bg-secondary px-3.5 py-1.5 rounded-lg">
          Inspiration Board
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
          Our Memory Gallery
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          Browse physical keepsakes, floral tray structures, and custom photo layouts crafted for our clients. Click any image to trigger full screen zoom, pan, and dragging controls.
        </p>
      </div>

      {/* Masonry gallery layout */}
      <GalleryMasonry />
    </div>
  );
}
