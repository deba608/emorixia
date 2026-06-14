"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Heart, Sparkles } from "lucide-react";

interface ProductItem {
  id: number;
  title: string;
  category: "Magazines" | "Frames & Trophies" | "Custom Art" | "Event Design";
  description: string;
  price: string;
  image: string;
  whatsappText: string;
}

const productsData: ProductItem[] = [
  {
    id: 1,
    title: "Romantic Memory Magazine",
    category: "Magazines",
    description: "Premium couple photobook styled as a high-fashion editorial magazine. Features custom quotes, text timelines, and natural linen texture finish.",
    price: "₹899",
    image: "/images/memory_magazine.png",
    whatsappText: "Hi Emorixia, I'd like to order a Romantic Memory Magazine!"
  },
  {
    id: 2,
    title: "Anniversary Birthday Collage Frame",
    category: "Frames & Trophies",
    description: "Multi-layered custom wooden collage frames showcasing emotional milestones. Bubble wrapped and double-secured for safe pan-India shipping.",
    price: "₹499",
    image: "/images/photo_frame.png",
    whatsappText: "Hi Emorixia, I'd like to customize a photo collage frame!"
  },
  {
    id: 3,
    title: "Preserved Floral Resin Tray",
    category: "Custom Art",
    description: "Bespoke resin art coasters and serving trays storing real wedding flowers, gold leaves, and glossy transparent swirls.",
    price: "₹699",
    image: "/images/resin_art.png",
    whatsappText: "Hi Emorixia, I'm interested in ordering a floral Resin Art tray!"
  },
  {
    id: 4,
    title: "Handmade Mirror Lippan Plate",
    category: "Custom Art",
    description: "Circular traditional mud mirror Lippan artwork plates. Symmetrical designs ideal for luxury housewarming presents and aesthetic room decoration.",
    price: "₹799",
    image: "/images/lippan_art.png",
    whatsappText: "Hi Emorixia, I'd love to order a handmade Lippan mirror plate!"
  },
  {
    id: 5,
    title: "Satin Ribbon Surprise Gift Box",
    category: "Custom Art",
    description: "Premium handcrafted gift box containing delicate photo scrolls, miniature message bottles, and rose petals tied in high-end ribbons.",
    price: "₹1,199",
    image: "/images/gift_box.png",
    whatsappText: "Hi Emorixia, I want to order a customized Surprise Gift Box!"
  },
  {
    id: 6,
    title: "Custom Engraved Crystal Trophy",
    category: "Frames & Trophies",
    description: "Heavy crystal glass award trophies engraved with personalized congratulatory notes and achievements, standing on a solid dark wood base.",
    price: "₹599",
    image: "/images/custom_trophy.png",
    whatsappText: "Hi Emorixia, I'd like to design a customized crystal trophy!"
  },
  {
    id: 7,
    title: "Creative Event Birthday Flex",
    category: "Event Design",
    description: "Professional graphic layout design and high-grade print flex banners for weddings, anniversaries, and corporate backdrops.",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop",
    whatsappText: "Hi Emorixia, I'd like to get an event banner or flex designed!"
  }
];

const catalogCategories = ["All", "Magazines", "Frames & Trophies", "Custom Art", "Event Design"] as const;

export default function ProductsPage() {
  const [filter, setFilter] = useState<string>("All");

  const filteredProducts = productsData.filter(
    (prod) => filter === "All" || prod.category === filter
  );

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-16">
      {/* Header text */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center flex flex-col items-center gap-4 max-w-2xl mx-auto"
      >
        <span className="text-xs font-bold tracking-widest text-primary uppercase bg-secondary px-3.5 py-1.5 rounded-lg">
          Keepsakes Catalogue
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
          Stories We Turn Into Forever
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          Browse our premium collections of memory books, traditional mirror art, frames, and surprise boxes. Handcrafted in Odisha, delivered across India.
        </p>
      </motion.div>

      {/* Categories filter controls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 md:gap-3"
      >
        {catalogCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
              filter === cat
                ? "bg-primary text-white shadow-md shadow-primary/15"
                : "border border-border/40 bg-card hover:border-primary/30 text-foreground/80 hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Catalog Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((prod) => (
            <motion.div
              layout
              key={prod.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col bg-card border border-border/40 rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border/10">
                <img
                  src={prod.image}
                  alt={prod.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-4 left-4 bg-background/95 dark:bg-card/95 backdrop-blur-sm px-4 py-1.5 rounded-lg text-sm font-bold text-primary border border-border/20">
                  Starting at {prod.price}
                </span>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-card border border-border/30 text-muted-foreground group-hover:text-primary flex items-center justify-center transition-colors shadow-sm">
                  <Heart className="h-4 w-4" />
                </div>
              </div>

              {/* Card details */}
              <div className="p-6 md:p-8 flex flex-col items-start text-left flex-grow">
                <span className="text-xs font-bold text-primary tracking-wider uppercase bg-secondary/80 px-2.5 py-1 rounded-lg mb-3">
                  {prod.category}
                </span>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {prod.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {prod.description}
                </p>

                {/* Card Action */}
                <a
                  href={`https://wa.me/917848807515?text=${encodeURIComponent(prod.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-primary/20 hover:border-primary bg-secondary/30 hover:bg-primary text-primary hover:text-white py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Customize on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Texture Warning / Tactile details note */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-secondary/40 border border-primary/10 rounded-2xl p-6 md:p-10 text-center max-w-4xl mx-auto mt-8 flex flex-col items-center gap-4"
      >
        <Sparkles className="h-8 w-8 text-primary fill-primary/10" />
        <h3 className="font-heading text-xl md:text-2xl font-bold text-primary">
          Custom Crafting Guidelines
        </h3>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
          All orders are customized to order. Once you make an inquiry, our designer team will request high-resolution photos and discuss the textured paper finishes (cotton or linen matte) suitable for your keepsake. You approve the preview draft before printing.
        </p>
      </motion.div>
    </div>
  );
}
