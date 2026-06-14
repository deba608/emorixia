import React from "react";
import Link from "next/link";
import { Mail, Phone, Heart } from "lucide-react";
import { InstagramIcon } from "./icons/instagram-icon";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/30 text-card-foreground py-16 px-6 md:px-12 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="font-heading text-3xl font-bold tracking-wide text-primary">
            Emorixia
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Transforming your most precious emotions and memories into premium, handcrafted keepsake magazines, custom art, and gifts. Made with love, printed for forever.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://instagram.com/thesairajj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-border/40 hover:bg-muted text-muted-foreground hover:text-primary flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href="mailto:contact@emorixia.in"
              className="w-9 h-9 rounded-full border border-border/40 hover:bg-muted text-muted-foreground hover:text-primary flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://wa.me/917848807515"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-border/40 hover:bg-muted text-muted-foreground hover:text-primary flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <Phone className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-lg font-semibold text-primary">Navigate</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                Our Products
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                Memory Gallery
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Our Brand
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                Client Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact & Orders
              </Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-lg font-semibold text-primary">Policies</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/shipping-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Store Information */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-lg font-semibold text-primary">Handcrafted in Odisha</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Odisha's premier print-design keepsakes store. Delivering premium textured paper memory magazines across India.
          </p>
          <div className="flex flex-col gap-2 text-sm mt-1 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+91 7848807515</span>
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>contact@emorixia.in</span>
            </span>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="max-w-7xl mx-auto border-t border-border/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <div>
          &copy; {new Date().getFullYear()} Emorixia.in. All Rights Reserved.
        </div>
        <div className="flex items-center gap-1">
          <span>Designed with</span>
          <Heart className="h-3.5 w-3.5 text-primary fill-primary animate-pulse" />
          <span>by</span>
          <a
            href="https://instagram.com/thesairajj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            @thesairajj
          </a>
        </div>
      </div>
    </footer>
  );
}
