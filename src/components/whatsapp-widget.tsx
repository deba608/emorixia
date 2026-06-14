"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, FileText, Flower2, Grid3x3 } from "lucide-react";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Show tooltip after 4 seconds to catch user's attention
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const encodedText = encodeURIComponent(message.trim());
    window.open(`https://wa.me/917848807515?text=${encodedText}`, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  const handleQuickQuestion = (text: string) => {
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/917848807515?text=${encodedText}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="bg-card border border-primary/20 shadow-lg px-4 py-2.5 rounded-2xl text-xs font-medium text-foreground max-w-[220px] text-right relative"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-1.5 left-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-3 w-3" />
            </button>
            <div className="flex flex-col gap-1 items-end pr-2 pt-1">
              <span className="flex items-center gap-1 text-primary font-bold text-[10px] uppercase tracking-wider">
                <Sparkles className="h-3 w-3" /> Design Assistant
              </span>
              <span className="text-muted-foreground leading-relaxed text-[11px]">
                Need help custom designing a keepsake? Chat with us!
              </span>
            </div>
            {/* Tooltip pointer */}
            <div className="absolute right-5 -bottom-1.5 w-3 h-3 bg-card border-r border-b border-primary/20 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="w-[330px] sm:w-[360px] bg-card border border-border/40 rounded-[2rem] overflow-hidden shadow-2xl z-50"
          >
            {/* Chat Header */}
            <div className="bg-primary text-white p-6 relative flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-white/20 border border-white/10 flex items-center justify-center font-heading text-lg font-bold text-white shadow-inner">
                  EM
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-primary rounded-full" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading text-lg font-bold flex items-center gap-1.5">
                  Emorixia Studio
                  <Sparkles className="h-4 w-4 fill-white/10 text-accent" />
                </span>
                <span className="text-white/80 text-xs">Replies instantly • Designer Team</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors"
                aria-label="Close Chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-6 flex flex-col gap-4 max-h-[300px] overflow-y-auto">
              <div className="flex gap-2.5 items-start text-left">
                <div className="w-8 h-8 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-primary text-xs font-bold font-heading">
                  EM
                </div>
                <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-none text-sm leading-relaxed text-muted-foreground">
                  Hello! Thank you for visiting Emorixia. How can we help you craft your memories today?
                </div>
              </div>

              {/* Quick Options */}
              <div className="flex flex-col gap-2 pl-10">
                <button
                  onClick={() => handleQuickQuestion("Hi, I want to order a customized Memory Magazine. Can you share details?")}
                  className="flex items-center gap-2 text-xs text-left bg-card hover:bg-secondary/40 border border-border/50 hover:border-primary/20 text-foreground px-4 py-2.5 rounded-xl transition-all duration-300 font-medium"
                >
                  <FileText className="h-3.5 w-3.5 text-primary shrink-0" />
                  Order a Memory Magazine
                </button>
                <button
                  onClick={() => handleQuickQuestion("Hi, I'm interested in designing a floral preservation Resin Art tray. How does it work?")}
                  className="flex items-center gap-2 text-xs text-left bg-card hover:bg-secondary/40 border border-border/50 hover:border-primary/20 text-foreground px-4 py-2.5 rounded-xl transition-all duration-300 font-medium"
                >
                  <Flower2 className="h-3.5 w-3.5 text-primary shrink-0" />
                  Flower Preservation Resin Art
                </button>
                <button
                  onClick={() => handleQuickQuestion("Hi, I want to inquire about custom home decor Lippan Art mirror plates.")}
                  className="flex items-center gap-2 text-xs text-left bg-card hover:bg-secondary/40 border border-border/50 hover:border-primary/20 text-foreground px-4 py-2.5 rounded-xl transition-all duration-300 font-medium"
                >
                  <Grid3x3 className="h-3.5 w-3.5 text-primary shrink-0" />
                  Symmetrical Lippan Wall Art
                </button>
              </div>
            </div>

            {/* Chat Footer */}
            <form onSubmit={handleSend} className="p-4 border-t border-border/10 flex gap-2 bg-muted/20">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your design query..."
                className="flex-grow bg-card border border-border/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 text-foreground"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-hover text-white p-2.5 rounded-xl flex items-center justify-center transition-colors focus:ring-2 focus:ring-primary/50"
                aria-label="Send WhatsApp Query"
              >
                <Send className="h-4.5 w-4.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/25 relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary z-50 cursor-pointer"
        aria-label="Toggle WhatsApp Chat Window"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare className="h-6 w-6" />
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-green-400 border-2 border-primary rounded-full animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
