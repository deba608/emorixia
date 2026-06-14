import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Emorixia Keepsakes",
  description: "Read the Privacy Policy of Emorixia. Learn how we handle your personal details, email submissions, and uploaded customization files safely.",
  alternates: {
    canonical: "/privacy-policy",
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-left flex flex-col gap-8">
      <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
        Privacy Policy
      </h1>
      <p className="text-muted-foreground text-sm">Last updated: June 13, 2026</p>
      
      <hr className="border-border/30" />

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">1. Introduction</h2>
        <p className="text-muted-foreground leading-relaxed">
          Welcome to Emorixia ("we," "our," "us"). We respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy describes how we collect, use, and store your information when you visit our website, submit inquiries, or order customized memory gifts.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">2. Information We Collect</h2>
        <p className="text-muted-foreground leading-relaxed">
          We collect personal details that you voluntarily submit to us via our contact forms, newsletter subscription inputs, or direct WhatsApp inquiries. This includes:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
          <li><strong>Identity Details:</strong> Your name, phone number, and email address.</li>
          <li><strong>Customization Materials:</strong> Personal photos, texts, quotes, timelines, and event dates that you upload or share to customize keepsakes.</li>
          <li><strong>Browsing Data:</strong> Anonymized cookies and usage indicators compiled for Google Analytics and website optimization.</li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">3. How We Use Your Data</h2>
        <p className="text-muted-foreground leading-relaxed">
          We use the collected information solely to fulfill your orders and deliver exceptional customer support. Specifically, we:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
          <li>Communicate order status, draft reviews, and shipping details.</li>
          <li>Incorporate your files (photos, text) directly into the keepsake designs.</li>
          <li>Process email inquiries and subscription updates.</li>
          <li>Enhance website loading performance and mobile responsive features.</li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">4. Storage and Security</h2>
        <p className="text-muted-foreground leading-relaxed">
          We take appropriate security measures to prevent your photos and contact details from unauthorized access, alteration, or disclosure. All design materials you upload are deleted from our local design servers within 30 days of successful product delivery. We never sell, rent, or lease your files or personal information to third parties.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">5. Your Consent and Rights</h2>
        <p className="text-muted-foreground leading-relaxed">
          By using our website or submitting your photos, you consent to our collection and usage practices outlined here. You have the right to request access to, correction of, or deletion of your personal data at any time by emailing us at <span className="text-primary font-bold">contact@emorixia.in</span>.
        </p>
      </section>
    </div>
  );
}
