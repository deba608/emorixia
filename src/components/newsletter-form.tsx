"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { newsletterSchema, type NewsletterValues } from "@/lib/schema";
import { submitNewsletter } from "@/lib/actions";

export function NewsletterForm() {
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: NewsletterValues) => {
    setLoading(true);
    setStatus({ type: null, message: "" });
    try {
      const response = await submitNewsletter(values);
      if (response.success) {
        setStatus({ type: "success", message: response.message });
        reset();
      } else {
        setStatus({ type: "error", message: response.message });
      }
    } catch {
      setStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-grow flex flex-col gap-1">
          <input
            type="email"
            placeholder="Enter your email address"
            {...register("email")}
            className="w-full px-5 py-3.5 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-3.5 rounded-xl bg-white text-primary hover:bg-white/95 font-bold text-sm transition-all shadow-md disabled:opacity-50 flex-shrink-0 cursor-pointer"
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      
      {errors.email && (
        <span className="text-xs text-red-200 mt-1.5 block text-center">
          {errors.email.message}
        </span>
      )}

      <AnimatePresence>
        {status.type && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className={`mt-4 text-sm font-semibold text-center ${
              status.type === "success" ? "text-white" : "text-red-200"
            }`}
          >
            {status.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
