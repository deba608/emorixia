import React from "react";
import type { Metadata } from "next";
import { MagazineBuilder } from "@/components/magazine-builder";

export const metadata: Metadata = {
  title: "Aesthetic Memory Magazine Builder - Emorixia Keepsakes",
  description: "Create and customize your custom memory magazine cover. Select colors, details, text layout, and paper textures. Share with our designers.",
  alternates: {
    canonical: "/magazine-builder",
  }
};

export default function MagazineBuilderPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-12 sm:gap-16">
      {/* Header section */}
      <div className="text-center flex flex-col items-center gap-4 max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-widest text-primary uppercase bg-secondary px-3.5 py-1.5 rounded-full">
          Custom Keepsakes Lab
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
          Design Your Magazine Cover
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          Personalize the cover layout, colors, names, and archival paper textures. Once satisfied, submit your template to our designers on WhatsApp to initiate your printing draft.
        </p>
      </div>

      {/* Magazine Builder Configurator Component */}
      <MagazineBuilder />
    </div>
  );
}
