"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  animate?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth = false, animate = true, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-primary text-white shadow-md shadow-primary/10 hover:bg-primary-hover",
      secondary: "bg-secondary text-primary hover:bg-primary/10 border border-primary/20",
      outline: "border border-foreground/20 hover:border-primary/50 text-foreground hover:bg-muted/30",
      ghost: "hover:bg-muted text-foreground/80 hover:text-foreground",
    };

    const sizes = {
      sm: "text-xs px-4 py-2",
      md: "text-sm px-6 py-3",
      lg: "text-base px-8 py-4",
    };

    const buttonClass = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth ? "w-full" : "",
      className
    );

    if (animate) {
      return (
        <motion.button
          ref={ref as any}
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ y: 0, scale: 0.98 }}
          className={buttonClass}
          {...(props as any)}
        >
          {children}
        </motion.button>
      );
    }

    return (
      <button ref={ref} className={buttonClass} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
