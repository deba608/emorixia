import React from "react";
import Link from "next/link";
import { Heart, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 gap-6 max-w-lg mx-auto">
      {/* 404 Icon block */}
      <div className="relative w-24 h-24 flex items-center justify-center bg-secondary text-primary rounded-full mb-2">
        <Heart className="h-12 w-12 text-primary animate-pulse" />
        <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
          404
        </span>
      </div>

      <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
        Lost in a Memory
      </h1>
      
      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
        We couldn&apos;t find the page you are looking for. It might have been moved, deleted, or never existed. Let&apos;s guide you back to safety.
      </p>

      <div className="pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
        >
          <Home className="h-4 w-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
