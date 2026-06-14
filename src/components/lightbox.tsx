"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, ZoomOut, RotateCcw, X } from "lucide-react";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  const [scale, setScale] = useState(1);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Handle mouse wheel zoom
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const zoomFactor = 0.1;
    if (e.deltaY < 0) {
      // Zoom in
      setScale((prev) => Math.min(prev + zoomFactor, 3));
    } else {
      // Zoom out
      setScale((prev) => Math.max(prev - zoomFactor, 0.5));
    }
  };

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));
  const handleReset = () => {
    setScale(1);
    setDragOffset({ x: 0, y: 0 });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 select-none"
        onWheel={handleWheel}
      >
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-[110] text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-md transition-all focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Zoom Controls Overlay */}
        <div className="absolute bottom-8 z-[110] flex gap-4 bg-black/40 px-5 py-3 rounded-full border border-white/10 backdrop-blur-md">
          <button
            onClick={handleZoomIn}
            className="text-white/80 hover:text-white p-1.5 hover:bg-white/10 rounded-full transition-colors"
            title="Zoom In (+)"
          >
            <ZoomIn className="h-5 w-5" />
          </button>
          <button
            onClick={handleZoomOut}
            className="text-white/80 hover:text-white p-1.5 hover:bg-white/10 rounded-full transition-colors"
            title="Zoom Out (-)"
          >
            <ZoomOut className="h-5 w-5" />
          </button>
          <button
            onClick={handleReset}
            className="text-white/80 hover:text-white p-1.5 hover:bg-white/10 rounded-full transition-colors"
            title="Reset Zoom"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>

        {/* Image Container */}
        <div className="w-full h-full flex items-center justify-center overflow-hidden p-6 cursor-grab active:cursor-grabbing">
          <motion.img
            src={src}
            alt={alt}
            drag
            dragMomentum={false}
            dragElastic={0.1}
            style={{
              x: dragOffset.x,
              y: dragOffset.y,
              scale: scale,
            }}
            onDragEnd={(_, info) => {
              // Track coordinate changes
              setDragOffset((prev) => ({
                x: prev.x + info.offset.x,
                y: prev.y + info.offset.y,
              }));
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: scale, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="max-w-full max-h-[85vh] object-contain rounded-lg pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
