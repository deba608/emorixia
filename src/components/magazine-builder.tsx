"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowLeft, ArrowRight, MessageSquare, BookOpen, Check, RefreshCw } from "lucide-react";

// Mock options
const COVER_TEMPLATES = [
  { id: "editorial", name: "Modern Editorial", desc: "Bold, modern typography with a clean layout." },
  { id: "classic", name: "Classic Portrait", desc: "Centered elegant script with border accent." },
  { id: "romantic", name: "Romantic Script", desc: "Warm cursive typography, perfect for weddings." },
  { id: "minimal", name: "Minimal Border", desc: "Clean borders with small elegant bottom text." },
];

const COLOR_PALETTES = [
  { id: "rosegold", name: "Rose Gold & Cream", bg: "bg-[#FFF2F6]", text: "text-[#D03B62]", border: "border-[#FFC0D3]", hexBg: "#FFF2F6", hexText: "#D03B62" },
  { id: "midnight", name: "Midnight Blue & Gold", bg: "bg-[#0B132B]", text: "text-[#D4AF37]", border: "border-[#D4AF37]/35", hexBg: "#0B132B", hexText: "#D4AF37" },
  { id: "emerald", name: "Emerald & Silver", bg: "bg-[#093A3E]", text: "text-[#E6E8EA]", border: "border-[#E6E8EA]/30", hexBg: "#093A3E", hexText: "#E6E8EA" },
  { id: "lavender", name: "Soft Lavender & Ash", bg: "bg-[#F3EEF5]", text: "text-[#584D5C]", border: "border-[#D6C5DC]", hexBg: "#F3EEF5", hexText: "#584D5C" },
];

const PAPER_FINISHES = [
  { id: "cotton", name: "Museum Cotton Matte", desc: "Extra thick cotton fibers for a premium, heavy art-gallery feel.", extraPrice: "₹0" },
  { id: "linen", name: "Linen Weave Textured", desc: "Cross-hatch textured linen coating, feels like canvas paintings.", extraPrice: "₹100" },
  { id: "archival", name: "Archival Classic Smooth", desc: "Ultra smooth organic matte with zero glare for crisp photo colors.", extraPrice: "₹0" },
];

const SAMPLE_IMAGES = [
  { id: 1, url: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600&auto=format&fit=crop", name: "Wedding Polaroid" },
  { id: 2, url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop", name: "Anniversary Rose" },
  { id: 3, url: "https://images.unsplash.com/photo-1606744824163-985d376605aa?q=80&w=600&auto=format&fit=crop", name: "Handcrafting Love" },
];

export function MagazineBuilder() {
  const [step, setStep] = useState(1);
  
  // Customization state
  const [template, setTemplate] = useState(COVER_TEMPLATES[0]);
  const [palette, setPalette] = useState(COLOR_PALETTES[0]);
  const [title, setTitle] = useState("OUR FOREVER STORY");
  const [names, setNames] = useState("Priya & Arjun");
  const [date, setDate] = useState("June 14, 2026");
  const [customImage, setCustomImage] = useState<string | null>(SAMPLE_IMAGES[0].url);
  const [paper, setPaper] = useState(PAPER_FINISHES[0]);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImage(url);
    }
  };

  const getWhatsAppLink = () => {
    const basePrice = paper.id === "linen" ? 999 : 899;
    const msg = `Hi Emorixia! I just designed a custom Memory Magazine on your builder tool. Here are my choices:
- Cover Layout: ${template.name}
- Color Theme: ${palette.name}
- Title Text: "${title}"
- Couple Names: "${names}"
- Date: "${date}"
- Paper Finish: ${paper.name}
- Total Price: ₹${basePrice}

Can we proceed to complete this design draft?`;
    return `https://wa.me/917848807515?text=${encodeURIComponent(msg)}`;
  };

  const totalSteps = 4;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto w-full px-6 md:px-12">
      {/* LEFT COLUMN: LIVE MOCKUP PREVIEW */}
      <div className="lg:col-span-6 flex flex-col items-center gap-6 sticky top-24">
        <div className="w-full flex items-center justify-between">
          <span className="text-xs font-bold text-primary tracking-widest uppercase flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Interactive 3D Mockup
          </span>
          <span className="text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
            Step {step} of {totalSteps}
          </span>
        </div>

        {/* 3D Animated Cover Mockup */}
        <motion.div
          layout
          className={`relative w-[280px] sm:w-[340px] md:w-[380px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl p-6 flex flex-col justify-between border border-border/20 ${palette.bg} transition-colors duration-500`}
          style={{
            perspective: 1000,
          }}
        >
          {/* Magazine Spine Shadow Effect */}
          <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-black/15 via-black/5 to-transparent z-10" />

          {/* Border line accent for classic template */}
          {template.id === "classic" && (
            <div className={`absolute inset-4 border-2 ${palette.border} rounded-lg pointer-events-none transition-colors duration-500`} />
          )}

          {/* Cover Layout Configs */}
          <div className="flex flex-col h-full justify-between z-10 relative">
            
            {/* Template: Editorial Top Header */}
            {template.id === "editorial" && (
              <div className="text-left mb-4 mt-2">
                <span className={`text-[10px] tracking-[0.25em] font-bold ${palette.text} opacity-80 block mb-1 uppercase`}>
                  EMORIXIA KEEPSAKES VOL. I
                </span>
                <h2 className={`font-heading text-4xl sm:text-5xl font-black tracking-tighter leading-[0.9] ${palette.text}`}>
                  {title.substring(0, 18) || "MEMORIES"}
                </h2>
              </div>
            )}

            {/* Template: Classic Top Script */}
            {template.id === "classic" && (
              <div className="text-center mt-6">
                <span className={`font-heading text-3xl italic font-semibold ${palette.text}`}>
                  {title.toLowerCase() || "our memory book"}
                </span>
              </div>
            )}

            {/* Template: Minimal Top Header */}
            {template.id === "minimal" && (
              <div className="text-left mt-4 border-b border-border/10 pb-3 flex justify-between items-baseline">
                <span className={`text-xs font-bold tracking-widest ${palette.text}`}>
                  {names || "Priya & Arjun"}
                </span>
                <span className="text-[10px] text-muted-foreground font-semibold">
                  {date || "2026"}
                </span>
              </div>
            )}

            {/* Main Central Image Section */}
            <motion.div
              layout
              className={`relative flex-grow rounded-xl overflow-hidden my-4 border ${palette.border} bg-muted flex items-center justify-center`}
              style={{
                aspectRatio: template.id === "minimal" ? "1.2/1" : "1.35/1",
              }}
            >
              {customImage ? (
                <img
                  src={customImage}
                  alt="Selected Cover Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-muted-foreground p-4 text-center">
                  <BookOpen className="h-8 w-8 text-primary animate-pulse" />
                  <span className="text-xs font-semibold">Upload cover photo</span>
                </div>
              )}
            </motion.div>

            {/* Bottom Details Section */}
            
            {/* Template: Editorial Bottom Details */}
            {template.id === "editorial" && (
              <div className="flex justify-between items-end border-t border-border/10 pt-3">
                <div className="text-left">
                  <p className={`text-[11px] font-bold ${palette.text} uppercase tracking-wider`}>
                    Featuring
                  </p>
                  <p className="text-sm font-black text-foreground">
                    {names || "Our Memories"}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">
                    DATE CREATED
                  </span>
                  <span className="text-xs font-bold text-foreground">
                    {date || "June 14, 2026"}
                  </span>
                </div>
              </div>
            )}

            {/* Template: Classic Bottom Details */}
            {template.id === "classic" && (
              <div className="text-center mb-4 flex flex-col items-center gap-1.5">
                <div className={`w-8 h-[1px] ${palette.text} opacity-40`} />
                <h4 className="text-base font-bold text-foreground tracking-wide">
                  {names || "Priya & Arjun"}
                </h4>
                <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-widest">
                  {date || "June 14, 2026"}
                </p>
              </div>
            )}

            {/* Template: Romantic Script Layout */}
            {template.id === "romantic" && (
              <div className="text-center my-auto flex flex-col gap-2">
                <h2 className={`font-heading text-4xl sm:text-5xl font-bold tracking-tight text-primary`}>
                  {title}
                </h2>
                <p className="text-muted-foreground font-heading text-base italic">
                  With {names || "Love"}
                </p>
                <p className="text-xs text-muted-foreground tracking-widest uppercase">
                  {date || "2026"}
                </p>
              </div>
            )}

            {/* Template: Minimal Bottom Text */}
            {template.id === "minimal" && (
              <div className="text-center mb-2">
                <h3 className={`font-heading text-xl font-bold tracking-wider uppercase ${palette.text}`}>
                  {title || "MEMORIES"}
                </h3>
                <p className="text-[10px] text-muted-foreground tracking-widest uppercase mt-1">
                  Premium Linen Book finish
                </p>
              </div>
            )}

          </div>
        </motion.div>

        {/* Pricing tag */}
        <div className="flex items-center gap-2 bg-secondary/80 text-primary border border-primary/20 px-6 py-2.5 rounded-full font-bold text-sm">
          <span>Total starting price: ₹{paper.id === "linen" ? "999" : "899"}</span>
        </div>
      </div>

      {/* RIGHT COLUMN: STEP CONFIGURATOR */}
      <div className="lg:col-span-6 bg-card border border-border/40 rounded-[2.5rem] p-8 md:p-10 shadow-sm relative overflow-hidden text-left glass min-h-[500px] flex flex-col justify-between">
        
        {/* Step Content */}
        <div>
          <AnimatePresence mode="wait">
            
            {/* Step 1: Choose Cover Layout Template */}
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
                    1. Select Cover Layout
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                    Pick a typography alignment that matches your aesthetic preference.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {COVER_TEMPLATES.map((tmpl) => (
                    <button
                      key={tmpl.id}
                      onClick={() => setTemplate(tmpl)}
                      className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col gap-2 ${
                        template.id === tmpl.id
                          ? "border-primary bg-secondary/20 shadow-sm shadow-primary/5"
                          : "border-border/40 bg-muted/20 hover:border-primary/20 hover:bg-card"
                      }`}
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className="font-bold text-foreground text-base">{tmpl.name}</span>
                        {template.id === tmpl.id && (
                          <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center">
                            <Check className="h-3.5 w-3.5" />
                          </div>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground leading-relaxed">{tmpl.desc}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Configure Details & Colors */}
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
                    2. Customize Text & Color
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                    Modify the cover messages and choose a color theme for the textured cover.
                  </p>
                </div>

                {/* Form Fields */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Magazine Cover Title
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. OUR MEMORY BOOK"
                      className="bg-muted/30 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 text-foreground"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Couple / Family Names
                      </label>
                      <input
                        type="text"
                        value={names}
                        onChange={(e) => setNames(e.target.value)}
                        placeholder="e.g. Priya & Arjun"
                        className="bg-muted/30 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 text-foreground"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Aesthetic Date text
                      </label>
                      <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="e.g. June 14, 2026"
                        className="bg-muted/30 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 text-foreground"
                      />
                    </div>
                  </div>
                </div>

                {/* Color Palettes Selection */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Select Color Palette
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {COLOR_PALETTES.map((pal) => (
                      <button
                        key={pal.id}
                        onClick={() => setPalette(pal)}
                        className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                          palette.id === pal.id
                            ? "border-primary bg-secondary/20"
                            : "border-border/45 hover:border-primary/20 bg-muted/10"
                        }`}
                      >
                        <div
                          className="w-6 h-6 rounded-full border border-black/10 flex-shrink-0"
                          style={{ backgroundColor: pal.hexBg }}
                        />
                        <span className="text-xs font-semibold text-foreground truncate">{pal.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Cover Photo Selection */}
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
                    3. Choose Cover Image
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                    Upload your own cover portrait or select a sample image to test the layout.
                  </p>
                </div>

                {/* Image Upload Trigger */}
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-border/40 rounded-2xl p-8 bg-muted/10 hover:bg-muted/20 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    id="builder-image-upload"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <label
                    htmlFor="builder-image-upload"
                    className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-5 py-2.5 rounded-full cursor-pointer flex items-center gap-1.5 transition-colors shadow-sm shadow-primary/10"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    <span>Upload Local Photo</span>
                  </label>
                  <span className="text-[10px] text-muted-foreground mt-2 font-medium">
                    Supports JPG, PNG (Simulated preview)
                  </span>
                </div>

                {/* Sample Images Grid */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Or select a sample photo
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    {SAMPLE_IMAGES.map((img) => (
                      <button
                        key={img.id}
                        onClick={() => setCustomImage(img.url)}
                        className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                          customImage === img.url ? "border-primary scale-95" : "border-transparent opacity-80 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img.url}
                          alt={img.name}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Paper Finishes */}
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
                    4. Select Archival Paper finish
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                    Our papers define the premium quality. Choose the texture that will store your memories.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {PAPER_FINISHES.map((pf) => (
                    <button
                      key={pf.id}
                      onClick={() => setPaper(pf)}
                      className={`p-5 rounded-2xl border text-left transition-all duration-300 flex justify-between items-start gap-4 ${
                        paper.id === pf.id
                          ? "border-primary bg-secondary/20 shadow-sm shadow-primary/5"
                          : "border-border/40 bg-muted/20 hover:border-primary/20 hover:bg-card"
                      }`}
                    >
                      <div className="flex flex-col gap-1 text-left">
                        <span className="font-bold text-foreground text-base flex items-center gap-1.5">
                          {pf.name}
                          {paper.id === pf.id && <span className="bg-primary text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Selected</span>}
                        </span>
                        <span className="text-xs text-muted-foreground leading-relaxed">{pf.desc}</span>
                      </div>
                      <span className="text-sm font-bold text-primary flex-shrink-0">
                        {pf.extraPrice === "₹0" ? "Free" : `+ ${pf.extraPrice}`}
                      </span>
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
              <span>Submit Cover to Designer</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
