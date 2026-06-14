import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy - Emorixia Keepsakes",
  description: "Read the Refund and Cancellation guidelines of Emorixia regarding custom orders and damaged shipments.",
  alternates: {
    canonical: "/refund-policy",
  }
};

export default function RefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-left flex flex-col gap-8">
      <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
        Refund & Return Policy
      </h1>
      <p className="text-muted-foreground text-sm">Last updated: June 13, 2026</p>
      
      <hr className="border-border/30" />

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">1. Custom Order Cancellations</h2>
        <p className="text-muted-foreground leading-relaxed">
          Because our products are 100% customized with your photos and stories, we cannot offer standard cancellations or returns once the design layout has been approved and sent to our printing machines.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          If you wish to cancel an order *before* layout design work starts, we will issue a full refund minus a 10% administration processing charge.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">2. Damaged or Broken Shipments</h2>
        <p className="text-muted-foreground leading-relaxed">
          While we package all items with multiple thick bubble layers, accidental shipping damages can rarely occur. If your frame, trophy, or resin block arrives broken, we will recreate and ship a replacement unit to you completely free of charge.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          To qualify for a free damage replacement, you must send us an unboxing video showing the damage clearly within 24 hours of package delivery to our WhatsApp support at <span className="text-primary font-bold">+91 7848807515</span>.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">3. Processing Refunds</h2>
        <p className="text-muted-foreground leading-relaxed">
          Approved refunds (for cancellation request before design setup) will be returned to your original payment source (UPI, Card, Bank) within 5-7 business days.
        </p>
      </section>
    </div>
  );
}
