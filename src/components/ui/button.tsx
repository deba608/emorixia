"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  animate?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      animate = true,
      loading = false,
      icon,
      iconPosition = "left",
      disabled,
      children,
      ...htmlProps
    } = props;

    const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-50 disabled:pointer-events-none select-none";

    const variantStyles = {
      primary: "bg-primary text-white shadow-md shadow-primary/10 hover:bg-primary-hover active:scale-[0.97]",
      secondary: "bg-secondary text-primary hover:bg-primary hover:text-white border border-primary/20 transition-colors",
      outline: "border border-foreground/20 hover:border-primary/50 text-foreground hover:bg-muted/30",
      ghost: "hover:bg-muted text-foreground/80 hover:text-foreground",
    };

    const sizes = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm px-6 py-3 gap-2",
      lg: "text-base px-8 py-4 gap-2.5",
    };

    const buttonClass = cn(
      baseStyles,
      variantStyles[variant],
      sizes[size],
      fullWidth ? "w-full" : "",
      loading && "cursor-wait",
      className
    );

    const content = (
      <>
        {loading && <Loader2 className="h-4 w-4 animate-spin shrink-0" />}
        {!loading && icon && iconPosition === "left" && (
          <span className="shrink-0">{icon}</span>
        )}
        {children}
        {!loading && icon && iconPosition === "right" && (
          <span className="shrink-0">{icon}</span>
        )}
      </>
    );

    if (animate && !loading) {
      return (
        <motion.button
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ref={ref as any}
          className={buttonClass}
          disabled={disabled || loading}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0, scale: 0.97 }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(htmlProps as any)}
        >
          {content}
        </motion.button>
      );
    }

    return (
      <button ref={ref} className={buttonClass} disabled={disabled || loading} {...htmlProps}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
