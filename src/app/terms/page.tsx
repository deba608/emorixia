import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - Emorixia Keepsakes",
  description: "Review the Terms & Conditions governing orders, customized designs, and transactions at Emorixia.",
  alternates: {
    canonical: "/terms",
  }
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-left flex flex-col gap-8">
      <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
        Terms & Conditions
      </h1>
      <p className="text-muted-foreground text-sm">Last updated: June 13, 2026</p>
      
      <hr className="border-border/30" />

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">1. Terms Acceptance</h2>
        <p className="text-muted-foreground leading-relaxed">
          By accessing this website or placing a customized order with Emorixia, you agree to comply with and be bound by the following Terms and Conditions. If you disagree with any part of these terms, please do not use our services.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">2. Custom Keepsake Specifications</h2>
        <p className="text-muted-foreground leading-relaxed">
          Due to the organic, handcrafted nature of our products (including resin art, Lippan plates, and custom-bound magazines), minor variances in textures, colors, and alignments may occur. These are not flaws but features of artisanal manufacturing.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The client is solely responsible for uploading high-resolution images. Emorixia is not liable for low quality prints resulting from blurry, low-resolution files sent by the client.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">3. Design Approvals</h2>
        <p className="text-muted-foreground leading-relaxed">
          We submit a digital proof copy for client review before printing. Once you explicitly approve the preview draft on WhatsApp or email, we begin printing immediately. No further editing revisions or design changes can be made after print approval has been granted.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">4. Payment & Delivery</h2>
        <p className="text-muted-foreground leading-relaxed">
          All custom orders require 100% advance payment or a pre-agreed design deposit. Orders are shipped across India via third-party logistics partners. Emorixia is not liable for any shipment delays caused by weather conditions, public holidays, or logistics issues beyond our control.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">5. Intellectual Property</h2>
        <p className="text-muted-foreground leading-relaxed">
          We reserve the right to photograph our finished handcrafted products and display them in our marketing gallery on our website or social channels. If your design contains sensitive material or you prefer to keep your memories completely private, you must notify us in writing during order placement.
        </p>
      </section>
    </div>
  );
}
