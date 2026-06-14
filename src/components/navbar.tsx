"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageSquare, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const labLinks = [
  { name: "Magazine Lab", href: "/magazine-builder" },
  { name: "Resin Lab", href: "/resin-configurator" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Floating Pill Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-3 pointer-events-none">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "pointer-events-auto w-full max-w-5xl rounded-2xl transition-all duration-300",
            scrolled
              ? "bg-card/95 backdrop-blur-xl border border-border/50 shadow-[var(--shadow-lg)]"
              : "bg-card/80 backdrop-blur-md border border-border/30 shadow-[var(--shadow-sm)]"
          )}
        >
          <div className="flex items-center justify-between px-4 sm:px-5 h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <span className="font-heading text-xl font-bold tracking-tight text-primary select-none">
                Emorixia
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative text-[13px] font-medium px-3 py-1.5 rounded-lg transition-colors duration-200",
                      isActive
                        ? "text-primary"
                        : "text-foreground/55 hover:text-foreground"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-primary/8 border border-primary/15"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        style={{ zIndex: -1 }}
                      />
                    )}
                  </Link>
                );
              })}

              <div className="w-px h-3.5 bg-border/60 mx-1.5" />

              {labLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative flex items-center gap-1 text-[13px] font-medium px-3 py-1.5 rounded-lg transition-colors duration-200",
                      isActive
                        ? "text-primary"
                        : "text-foreground/55 hover:text-foreground"
                    )}
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-30" />
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-primary/8 border border-primary/15"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        style={{ zIndex: -1 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="https://wa.me/917848807515"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-hover text-white text-[13px] font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-sm shadow-primary/20"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Order Now</span>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-muted transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="h-[18px] w-[18px]" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="h-[18px] w-[18px]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/25 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-[min(85vw,320px)] z-50 lg:hidden flex flex-col bg-card border-l border-border/50"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-border/30">
                <Link href="/" className="font-heading text-lg font-bold text-primary" onClick={() => setIsOpen(false)}>
                  Emorixia
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-foreground/40 hover:text-foreground hover:bg-muted transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-0.5">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground px-3 mb-2">
                  Pages
                </p>
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-foreground/65 hover:bg-muted"
                        )}
                      >
                        {link.name}
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                      </Link>
                    </motion.div>
                  );
                })}

                <div className="h-px bg-border/30 my-3 mx-3" />

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground px-3 mb-2">
                  Design Labs
                </p>
                {labLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navLinks.length + i) * 0.03 + 0.08, duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-foreground/65 hover:bg-muted"
                        )}
                      >
                        <span className="flex items-center gap-1.5">
                          {link.name}
                          <ArrowUpRight className="h-3 w-3 opacity-30" />
                        </span>
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer CTA */}
              <div className="px-4 pb-6 pt-3 border-t border-border/30">
                <a
                  href="https://wa.me/917848807515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-xl transition-all shadow-md shadow-primary/20"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
