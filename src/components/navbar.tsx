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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-[var(--shadow-sm)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <span className="font-heading text-2xl font-bold tracking-tight text-primary select-none">
                Emorixia
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200",
                      isActive
                        ? "text-primary"
                        : "text-foreground/60 hover:text-foreground"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-x-1 -bottom-[1px] h-[2px] bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}

              <div className="w-px h-4 bg-border mx-2" />

              {labLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200",
                      isActive
                        ? "text-primary"
                        : "text-foreground/60 hover:text-foreground"
                    )}
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-40" />
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-x-1 -bottom-[1px] h-[2px] bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/917848807515"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md shadow-primary/20"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Order Now</span>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
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
              className="fixed inset-0 z-40 bg-black/30 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-[min(85vw,340px)] z-50 lg:hidden flex flex-col bg-card border-l border-border"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-border/50">
                <Link href="/" className="font-heading text-xl font-bold text-primary" onClick={() => setIsOpen(false)}>
                  Emorixia
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-foreground/50 hover:text-foreground hover:bg-muted transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1">
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
                          "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-foreground/70 hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {link.name}
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                      </Link>
                    </motion.div>
                  );
                })}

                <div className="h-px bg-border/50 my-3 mx-3" />

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
                          "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-foreground/70 hover:bg-muted hover:text-foreground"
                        )}
                      >
                        <span className="flex items-center gap-2">
                          {link.name}
                          <ArrowUpRight className="h-3 w-3 opacity-40" />
                        </span>
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer CTA */}
              <div className="px-5 pb-8 pt-4 border-t border-border/50">
                <a
                  href="https://wa.me/917848807515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-primary/20"
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
