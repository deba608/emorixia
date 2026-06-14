"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbox } from "./lightbox";
import { ZoomIn } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: "Memory Magazines" | "Resin Art" | "Frames" | "Gift Boxes" | "Lippan Art";
  ratio: string; // Tailwind aspect-ratio helper classes
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/memory_magazine.png",
    alt: "Luxury Open Memory Magazine with couple photos",
    category: "Memory Magazines",
    ratio: "aspect-[3/4]",
  },
  {
    id: 2,
    src: "/images/photo_frame.png",
    alt: "Handcrafted wooden frames displaying custom memories",
    category: "Frames",
    ratio: "aspect-[1/1]",
  },
  {
    id: 3,
    src: "/images/resin_art.png",
    alt: "Handmade resin tray with preserved real roses and gold leaves",
    category: "Resin Art",
    ratio: "aspect-[4/3]",
  },
  {
    id: 4,
    src: "/images/lippan_art.png",
    alt: "Detailed mud-and-mirror work Lippan art plate",
    category: "Lippan Art",
    ratio: "aspect-[1/1]",
  },
  {
    id: 5,
    src: "/images/gift_box.png",
    alt: "Sleek customized rose gold surprise gift box with scrolls",
    category: "Gift Boxes",
    ratio: "aspect-[3/4]",
  },
  {
    id: 6,
    src: "/images/custom_trophy.png",
    alt: "Custom engraved crystal keepsake trophy award",
    category: "Frames", // Grouping trophies with Frames category
    ratio: "aspect-[3/4]",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600&auto=format&fit=crop",
    alt: "Personalized polaroid notes and memories collections",
    category: "Memory Magazines",
    ratio: "aspect-[1/1]",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop",
    alt: "Aesthetic customized luxury wrapped gift setup",
    category: "Gift Boxes",
    ratio: "aspect-[4/3]",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop",
    alt: "Minimalist aesthetic print layouts on natural textured card stock",
    category: "Memory Magazines",
    ratio: "aspect-[4/3]",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1606744824163-985d376605aa?q=80&w=600&auto=format&fit=crop",
    alt: "Detailed dried floral frames preservation memory art",
    category: "Resin Art",
    ratio: "aspect-[3/4]",
  },
];

const categories = ["All", "Memory Magazines", "Resin Art", "Frames", "Gift Boxes", "Lippan Art"] as const;

export function GalleryMasonry() {
  const [filter, setFilter] = useState<string>("All");
  const [activeLightbox, setActiveLightbox] = useState<{ src: string; alt: string } | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => filter === "All" || item.category === filter
  );

  return (
    <div className="w-full">
      {/* Category Filter Controls */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
              filter === cat
                ? "bg-primary text-white shadow-md shadow-primary/15"
                : "border border-border/40 bg-card hover:border-primary/30 text-foreground/80 hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Columns Layout */}
      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`break-inside-avoid relative group overflow-hidden rounded-2xl border border-border/20 bg-card cursor-pointer shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:border-primary/25 transition-all duration-500 ${item.ratio}`}
              onClick={() => setActiveLightbox({ src: item.src, alt: item.alt })}
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover overlay details */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center w-full">
                  <div>
                    <span className="text-xs font-bold text-primary tracking-wider uppercase bg-secondary/95 px-2.5 py-1 rounded-lg">
                      {item.category}
                    </span>
                    <h3 className="text-white font-heading text-lg font-semibold mt-2">
                      {item.alt}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0 ml-3">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <Lightbox
          src={activeLightbox.src}
          alt={activeLightbox.alt}
          onClose={() => setActiveLightbox(null)}
        />
      )}
    </div>
  );
}
