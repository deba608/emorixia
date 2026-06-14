"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-border/40 bg-card/50 flex items-center justify-center" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-full border border-border/40 bg-card/50 hover:bg-muted text-foreground flex items-center justify-center relative overflow-hidden transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ y: 30, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -30, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="h-5 w-5 text-primary" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: 30, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -30, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="h-5 w-5 text-primary" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
