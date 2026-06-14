import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy - Emorixia Keepsakes",
  description: "Learn about the packaging details, timelines, shipping partners, and tracking procedures for keepsakes delivered across India by Emorixia.",
  alternates: {
    canonical: "/shipping-policy",
  }
};

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-left flex flex-col gap-8">
      <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
        Shipping Policy
      </h1>
      <p className="text-muted-foreground text-sm">Last updated: June 13, 2026</p>
      
      <hr className="border-border/30" />

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">1. Shipping Coverage</h2>
        <p className="text-muted-foreground leading-relaxed">
          We ship our premium memory gifts and keepsakes to all pin codes across India, covering Tier 1, Tier 2, and Tier 3 cities. Currently, we do not support international shipping outside India.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">2. Timelines & Processing</h2>
        <p className="text-muted-foreground leading-relaxed">
          Since our items are customized and handcrafted, they undergo a strict production timeline:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
          <li><strong>Design Phase:</strong> 1-2 business days to compile drafts and obtain client approvals.</li>
          <li><strong>Printing & Finishing:</strong> 1 business day for pressing, bindings, or mirror arrangements.</li>
          <li><strong>Logistics Shipping:</strong> 3-5 business days depending on delivery locations. (Odisha orders deliver within 2 days; other regions take 3-5 days).</li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">3. Safety Packaging</h2>
        <p className="text-muted-foreground leading-relaxed">
          We treat your memories with extreme care. All frames, resin blocks, and Lippan art plates are wrapped in multiple layers of heavy-duty bubble wrap, secured with cardboard corner protectors, and shipped inside rigid outer corrugated boxes to prevent shipping breakage.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">4. Tracking and Support</h2>
        <p className="text-muted-foreground leading-relaxed">
          Once your package is picked up by our logistics courier partner, we send you a direct tracking number (AWB) and a tracking link via WhatsApp or email. You can track your packages live. For urgent shipping updates, call us at <span className="text-primary font-bold">+91 7848807515</span>.
        </p>
      </section>
    </div>
  );
}
