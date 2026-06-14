import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 text-card-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="font-heading text-2xl font-bold tracking-tight text-primary">
              Emorixia
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Transforming your most precious emotions and memories into premium, handcrafted keepsake magazines, custom art, and gifts.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <a
                href="https://instagram.com/thesairajj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-muted text-muted-foreground hover:text-primary flex items-center justify-center transition-colors text-xs font-bold"
              >
                IG
              </a>
              <a
                href="mailto:contact@emorixia.in"
                aria-label="Email"
                className="w-9 h-9 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-muted text-muted-foreground hover:text-primary flex items-center justify-center transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/917848807515"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-muted text-muted-foreground hover:text-primary flex items-center justify-center transition-colors"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-foreground">Navigate</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "Gallery", href: "/gallery" },
                { name: "About", href: "/about" },
                { name: "Reviews", href: "/testimonials" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-150">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-foreground">Policies</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms" },
                { name: "Shipping Policy", href: "/shipping-policy" },
                { name: "Refund Policy", href: "/refund-policy" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-150">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-foreground">Get in Touch</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Odisha&apos;s premier print-design keepsakes store. Delivering premium textured paper memory magazines across India.
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="tel:+917848807515" className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+91 7848807515</span>
              </a>
              <a href="mailto:contact@emorixia.in" className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>contact@emorixia.in</span>
              </a>
              <span className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>Bhubaneswar, Odisha, India</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            &copy; {new Date().getFullYear()} Emorixia.in. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted by</span>
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
      </div>
    </footer>
  );
}
