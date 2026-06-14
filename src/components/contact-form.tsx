"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, AlertCircle, CheckCircle } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/schema";
import { submitContactForm } from "@/lib/actions";

export function ContactForm() {
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      productType: "Memory Magazine",
      message: "",
    },
  });

  // Watch form fields to dynamically generate a WhatsApp message link
  const watchedName = watch("name");
  const watchedProduct = watch("productType");
  const watchedMessage = watch("message");

  const onSubmit = async (values: ContactFormValues) => {
    setLoading(true);
    setStatus({ type: null, message: "" });
    try {
      const response = await submitContactForm(values);
      if (response.success) {
        setStatus({ type: "success", message: response.message });
        reset();
      } else {
        setStatus({ type: "error", message: response.message });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An unexpected error occurred. Please try sending via WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Generate WhatsApp message URL
  const getWhatsAppLink = () => {
    const baseText = `Hi Emorixia, I'm interested in ordering a customized keepsake!
Here are my details:
• Name: ${watchedName || "[My Name]"}
• Product: ${watchedProduct}
• Request: ${watchedMessage || "[Details here]"}`;
    
    return `https://wa.me/917848807515?text=${encodeURIComponent(baseText)}`;
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-card border border-border/40 rounded-2xl p-6 md:p-8 shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div className="flex flex-col gap-1.5 text-left">
          <label htmlFor="name" className="text-sm font-semibold text-primary">
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="e.g., Sneha Sharma"
            {...register("name")}
            className="w-full px-4 py-3 rounded-xl border border-border/30 bg-background text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
          {errors.name && (
            <span className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
              <AlertCircle className="h-3 w-3" /> {errors.name.message}
            </span>
          )}
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <div className="flex flex-col gap-1.5 text-left">
            <label htmlFor="email" className="text-sm font-semibold text-primary">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              placeholder="e.g., sneha@example.com"
              {...register("email")}
              className="w-full px-4 py-3 rounded-xl border border-border/30 bg-background text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            {errors.email && (
              <span className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
                <AlertCircle className="h-3 w-3" /> {errors.email.message}
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5 text-left">
            <label htmlFor="phone" className="text-sm font-semibold text-primary">
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="e.g., 9876543210"
              {...register("phone")}
              className="w-full px-4 py-3 rounded-xl border border-border/30 bg-background text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            {errors.phone && (
              <span className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
                <AlertCircle className="h-3 w-3" /> {errors.phone.message}
              </span>
            )}
          </div>
        </div>

        {/* Product Type dropdown */}
        <div className="flex flex-col gap-1.5 text-left">
          <label htmlFor="productType" className="text-sm font-semibold text-primary">
            Keepsake Category *
          </label>
          <select
            id="productType"
            {...register("productType")}
            className="w-full px-4 py-3 rounded-xl border border-border/30 bg-background text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
          >
            <option value="Memory Magazine">Memory Magazine</option>
            <option value="Photo Frames">Photo Frames</option>
            <option value="Resin Art">Resin Art</option>
            <option value="Lippan Art">Lippan Art</option>
            <option value="Gift Boxes">Gift Boxes</option>
            <option value="Customized Trophies">Customized Trophies</option>
            <option value="Flex and Banner Design">Flex and Banner Design</option>
            <option value="Other Custom Keepsake">Other Custom Keepsake</option>
          </select>
          {errors.productType && (
            <span className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
              <AlertCircle className="h-3 w-3" /> {errors.productType.message}
            </span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5 text-left">
          <label htmlFor="message" className="text-sm font-semibold text-primary">
            Message / Customization Request *
          </label>
          <textarea
            id="message"
            placeholder="Tell us about the memory or gift specifications you'd like to create..."
            rows={4}
            {...register("message")}
            className="w-full px-4 py-3 rounded-xl border border-border/30 bg-background text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
          />
          {errors.message && (
            <span className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
              <AlertCircle className="h-3 w-3" /> {errors.message.message}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {/* Submit Action */}
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-primary hover:bg-primary-hover text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-all shadow-md shadow-primary/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            <span>{loading ? "Sending inquiry..." : "Send Inquiry"}</span>
          </button>

          {/* WhatsApp Action */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-primary/25 hover:border-primary/50 bg-secondary text-primary hover:bg-primary/10 py-3.5 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="h-4 w-4 text-primary" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Form Messages */}
        <AnimatePresence>
          {status.type && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={`p-4 rounded-xl flex items-start gap-2.5 text-sm mt-4 border ${
                status.type === "success"
                  ? "bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400"
                  : "bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" />
              ) : (
                <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-red-500" />
              )}
              <span className="leading-relaxed">{status.message}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
