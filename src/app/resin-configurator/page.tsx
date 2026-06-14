import React from "react";
import type { Metadata } from "next";
import { ResinConfigurator } from "@/components/resin-configurator";

export const metadata: Metadata = {
  title: "Floral Preservation Resin Configurator - Emorixia Keepsakes",
  description: "Configure custom resin art trays, hexagon blocks, and coasters with real dried roses, gold leaf accents, and transparent base tints. Share with our artists.",
  alternates: {
    canonical: "/resin-configurator",
  }
};

export default function ResinConfiguratorPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-12 sm:gap-16">
      {/* Header section */}
      <div className="text-center flex flex-col items-center gap-4 max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-widest text-primary uppercase bg-secondary px-3.5 py-1.5 rounded-full">
          Custom Keepsakes Lab
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
          Resin Art Configurator
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          Select your keepsake shape, flowers to preserve, metallic foil elements, and background tints. Share your layout configurations with our artist on WhatsApp to schedule your floral delivery.
        </p>
      </div>

      {/* Resin Configurator Component */}
      <ResinConfigurator />
    </div>
  );
}
