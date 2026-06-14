"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowLeft, ArrowRight, MessageSquare, Check, HelpCircle } from "lucide-react";

// Config options
const SHAPES = [
  { id: "tray", name: "Glossy Serving Tray", desc: "Elegant rectangle tray with gold brass handles.", price: 1299, shapeClass: "rounded-xl border-4" },
  { id: "hexagon", name: "Hexagon Preserved Block", desc: "Thick freestanding 3D resin hexagonal block.", price: 999, shapeClass: "clip-path-hexagon border-y-4 border-x-2" },
  { id: "coasters", name: "Coaster Set (4 Pcs)", desc: "Four circular matching tea coasters with gold leaf borders.", price: 699, shapeClass: "rounded-full border-4" },
  { id: "letter", name: "Initial Letter Stand", desc: "Custom 6-inch tall alphabet character block.", price: 799, shapeClass: "rounded-2xl border-4" }
];

const FLOWERS = [
  { id: "roses", name: "Crimson Red Roses", color: "bg-red-500", emoji: "🌹" },
  { id: "babysbreath", name: "White Baby's Breath", color: "bg-white border border-border/20", emoji: "🌸" },
  { id: "marigolds", name: "Bright Marigolds", color: "bg-amber-400", emoji: "🌼" },
  { id: "sage", name: "Dried Sage Leaves", color: "bg-emerald-600", emoji: "🍃" }
];

const FLAKES = [
  { id: "gold", name: "Gold Metallic Flakes", color: "from-amber-300 to-yellow-500" },
  { id: "silver", name: "Silver Glitter Shimmer", color: "from-slate-200 to-slate-400" },
  { id: "rosegold", name: "Rose Gold Accents", color: "from-pink-300 to-rose-400" },
  { id: "none", name: "No Flakes (Clean Resin)", color: "from-transparent to-transparent" }
];

const TINTS = [
  { id: "clear", name: "Crystal Clear Glass", bg: "bg-cyan-50/10 backdrop-blur-md", hex: "#E0F7FA" },
  { id: "milky", name: "Soft Milky White", bg: "bg-slate-100/30 backdrop-blur-md", hex: "#F5F5F5" },
  { id: "ocean", name: "Deep Ocean Teal", bg: "bg-teal-500/20 backdrop-blur-md", hex: "#008080" },
  { id: "blush", name: "Blush Pink Tint", bg: "bg-rose-400/20 backdrop-blur-md", hex: "#FFC0CB" }
];

export function ResinConfigurator() {
  const [step, setStep] = useState(1);
  const [selectedShape, setSelectedShape] = useState(SHAPES[0]);
  const [selectedFlowers, setSelectedFlowers] = useState<string[]>([FLOWERS[0].id]);
  const [selectedFlakes, setSelectedFlakes] = useState(FLAKES[0]);
  const [selectedTint, setSelectedTint] = useState(TINTS[0]);

  const toggleFlower = (id: string) => {
    if (selectedFlowers.includes(id)) {
      if (selectedFlowers.length > 1) {
        setSelectedFlowers(selectedFlowers.filter((f) => f !== id));
      }
    } else {
      setSelectedFlowers([...selectedFlowers, id]);
    }
  };

  const getWhatsAppLink = () => {
    const activeFlowers = FLOWERS.filter((f) => selectedFlowers.includes(f.id)).map((f) => f.name).join(", ");
    const msg = `Hi Emorixia! I just configured a custom floral Resin Art keepsake:
- Shape Choice: ${selectedShape.name}
- Flowers to Preserve: ${activeFlowers}
- Glitter Accent: ${selectedFlakes.name}
- Background Tint: ${selectedTint.name}
- Starting Price: ₹${selectedShape.price}

I'd like to get details on how to ship my flowers to your Bhubaneswar workshop!`;
    return `https://wa.me/917848807515?text=${encodeURIComponent(msg)}`;
  };

  const totalSteps = 4;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto w-full px-2">
      {/* LEFT COLUMN: VISUAL PREVIEW CANVAS */}
      <div className="lg:col-span-6 flex flex-col items-center gap-6 sticky top-24">
        <div className="w-full flex items-center justify-between">
          <span className="text-xs font-bold text-primary tracking-widest uppercase flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Floral Preview Composition
          </span>
          <span className="text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
            Step {step} of {totalSteps}
          </span>
        </div>

        {/* Dynamic Resin Shape Mockup */}
        <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] flex items-center justify-center bg-radial from-secondary/25 via-transparent to-transparent rounded-full">
          
          {/* Main Acrylic/Resin Container */}
          <motion.div
            layout
            className={`w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] relative border-primary/20 shadow-2xl overflow-hidden flex items-center justify-center transition-all duration-500 ${selectedShape.shapeClass} ${selectedTint.bg}`}
            style={{
              boxShadow: "inset 0 0 25px rgba(255,255,255,0.4), 0 20px 45px rgba(0,0,0,0.12)",
              clipPath: selectedShape.id === "hexagon" ? "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" : "none"
            }}
          >
            {/* Glossy Reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/30 pointer-events-none z-20" />
            <div className="absolute top-2 left-6 w-[80%] h-3 bg-white/20 rounded-full blur-[1px] pointer-events-none z-20" />

            {/* Brass Handles for Tray */}
            {selectedShape.id === "tray" && (
              <>
                <div className="absolute left-1.5 top-1/2 -translate-y-1/2 w-2 h-14 bg-yellow-600 rounded-full z-30 border-r border-yellow-400" />
                <div className="absolute right-1.5 top-1/2 -translate-y-1/2 w-2 h-14 bg-yellow-600 rounded-full z-30 border-l border-yellow-400" />
              </>
            )}

            {/* Glitter Flakes Render */}
            {selectedFlakes.id !== "none" && (
              <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
                {[...Array(25)].map((_, i) => {
                  const randomX = Math.sin(i * 123) * 50 + 50;
                  const randomY = Math.cos(i * 456) * 50 + 50;
                  const randomScale = (Math.sin(i * 789) + 1.5) * 0.4;
                  return (
                    <div
                      key={i}
                      className={`absolute w-3 h-3 bg-gradient-to-tr rounded-full blur-[0.5px] ${selectedFlakes.color}`}
                      style={{
                        left: `${randomX}%`,
                        top: `${randomY}%`,
                        transform: `scale(${randomScale}) rotate(${i * 15}deg)`,
                      }}
                    />
                  );
                })}
              </div>
            )}

            {/* Preserved Flowers Render */}
            <div className="relative w-full h-full flex items-center justify-center z-10 pointer-events-none">
              <AnimatePresence>
                {/* Render Selected Flowers inside the container */}
                {FLOWERS.filter((f) => selectedFlowers.includes(f.id)).map((flower, idx, arr) => {
                  const offsetCount = arr.length;
                  const radius = 40;
                  const angle = (idx * 2 * Math.PI) / offsetCount;
                  const translateX = offsetCount > 1 ? Math.cos(angle) * radius : 0;
                  const translateY = offsetCount > 1 ? Math.sin(angle) * radius : 0;

                  return (
                    <motion.div
                      key={flower.id}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1.25, x: translateX, y: translateY }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ type: "spring", damping: 15, stiffness: 150 }}
                      className="absolute text-5xl select-none filter drop-shadow-md animate-float-medium"
                      style={{
                        animationDelay: `${idx * 0.2}s`
                      }}
                    >
                      {flower.emoji}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

          </motion.div>
        </div>

        {/* Estimate tag */}
        <div className="flex items-center gap-2 bg-secondary/80 text-primary border border-primary/20 px-6 py-2.5 rounded-full font-bold text-sm">
          <span>Starting at: ₹{selectedShape.price}</span>
        </div>
      </div>

      {/* RIGHT COLUMN: STEP CONFIGURATOR */}
      <div className="lg:col-span-6 bg-card border border-border/40 rounded-[2.5rem] p-8 md:p-10 shadow-sm relative overflow-hidden text-left glass min-h-[500px] flex flex-col justify-between">
        
        {/* Step Contents */}
        <div>
          <AnimatePresence mode="wait">
            
            {/* Step 1: Shape Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: -20, x: -20 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    1. Choose Keepsake Shape
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                    Select a shape for the resin preservation structure.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SHAPES.map((sh) => (
                    <button
                      key={sh.id}
                      onClick={() => setSelectedShape(sh)}
                      className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col gap-2 ${
                        selectedShape.id === sh.id
                          ? "border-primary bg-secondary/20 shadow-sm shadow-primary/5"
                          : "border-border/40 bg-muted/20 hover:border-primary/20 hover:bg-card"
                      }`}
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className="font-bold text-foreground text-base">{sh.name}</span>
                        {selectedShape.id === sh.id && (
                          <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center">
                            <Check className="h-3.5 w-3.5" />
                          </div>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground leading-relaxed">{sh.desc}</span>
                      <span className="text-xs font-bold text-primary mt-1">₹{sh.price}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Flora Elements Selection */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: -20, x: -20 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    2. Select Flora to Preserve
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                    Choose one or more flower types. We preserve your real flowers sent via courier.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {FLOWERS.map((fl) => {
                    const isSelected = selectedFlowers.includes(fl.id);
                    return (
                      <button
                        key={fl.id}
                        onClick={() => toggleFlower(fl.id)}
                        className={`p-5 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between gap-4 ${
                          isSelected
                            ? "border-primary bg-secondary/20 shadow-sm"
                            : "border-border/40 bg-muted/20 hover:border-primary/20"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{fl.emoji}</span>
                          <div className="flex flex-col">
                            <span className="font-bold text-foreground text-sm">{fl.name}</span>
                            <span className="text-[10px] text-muted-foreground">Archival preserved</span>
                          </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected ? "bg-primary border-primary text-white" : "border-border/60"
                        }`}>
                          {isSelected && <Check className="h-3 w-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 3: Metallic Accents */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: -20, x: -20 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    3. Select Metallic Accents
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                    Metallic foil fragments are mixed in with floral layers to catch light beautifully.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {FLAKES.map((fk) => (
                    <button
                      key={fk.id}
                      onClick={() => setSelectedFlakes(fk)}
                      className={`p-5 rounded-2xl border text-left transition-all duration-300 flex justify-between items-center ${
                        selectedFlakes.id === fk.id
                          ? "border-primary bg-secondary/20 shadow-sm"
                          : "border-border/40 bg-muted/20 hover:border-primary/20"
                      }`}
                    >
                      <span className="font-bold text-foreground text-sm">{fk.name}</span>
                      {selectedFlakes.id === fk.id && (
                        <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Backdrop Tints */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: -20, x: -20 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    4. Select Resin Backdrop Tint
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                    Transparent or tinted base layer. Clear is recommended for most wedding flowers.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {TINTS.map((tn) => (
                    <button
                      key={tn.id}
                      onClick={() => setSelectedTint(tn)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col gap-3 ${
                        selectedTint.id === tn.id
                          ? "border-primary bg-secondary/20 shadow-sm"
                          : "border-border/40 bg-muted/20 hover:border-primary/20"
                      }`}
                    >
                      <div
                        className="w-full h-12 rounded-xl border border-black/15 flex items-center justify-center font-bold text-foreground/40 text-xs"
                        style={{ backgroundColor: tn.hex }}
                      >
                        Preview Tint
                      </div>
                      <span className="font-bold text-foreground text-xs">{tn.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Action Controls Footer */}
        <div className="flex items-center justify-between border-t border-border/10 pt-6 mt-8">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="border border-border/40 hover:border-primary/30 text-foreground/80 hover:text-primary px-5 py-2.5 rounded-full text-xs font-bold transition-colors flex items-center gap-1.5 focus:outline-none"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < totalSteps ? (
            <button
              onClick={() => setStep(step + 1)}
              className="bg-primary hover:bg-primary-hover text-white px-7 py-2.5 rounded-full text-xs font-bold transition-all shadow-md shadow-primary/10 flex items-center gap-1.5 focus:outline-none cursor-pointer"
            >
              <span>Next Step</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/25 flex items-center gap-2 focus:outline-none cursor-pointer"
            >
              <MessageSquare className="h-4.5 w-4.5" />
              <span>Submit Design to Artist</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
