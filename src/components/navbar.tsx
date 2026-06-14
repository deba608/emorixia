"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageSquare, Phone } from "lucide-react";
import { InstagramIcon } from "./icons/instagram-icon";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "py-3 glass shadow-sm border-b border-border/20"
          : "py-5 bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl md:text-3xl font-bold tracking-wide text-primary select-none">
            Emorixia
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium tracking-wide transition-colors hover:text-primary py-1",
                  isActive ? "text-primary" : "text-foreground/80"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Instagram */}
          <a
            href="https://instagram.com/thesairajj"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border/40 hover:bg-muted text-foreground/80 hover:text-primary flex items-center justify-center transition-colors"
            aria-label="Instagram Link"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/917848807515"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all transform hover:-translate-y-0.5 shadow-md shadow-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-full border border-border/40 hover:bg-muted text-foreground flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden w-full glass border-b border-border/20 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5 max-w-md mx-auto">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium py-1.5 transition-colors border-b border-border/10 hover:text-primary",
                        isActive ? "text-primary font-semibold" : "text-foreground/80"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex flex-col gap-4 pt-2">
                {/* Social links grid */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://instagram.com/thesairajj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 border border-border/40 rounded-xl flex items-center justify-center gap-2 hover:bg-muted text-foreground/85 transition-colors"
                  >
                    <InstagramIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                  <a
                    href="https://wa.me/917848807515"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 border border-border/40 rounded-xl flex items-center justify-center gap-2 hover:bg-muted text-foreground/85 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">WhatsApp Call</span>
                  </a>
                </div>

                <a
                  href="https://wa.me/917848807515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/10 transition-colors"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
