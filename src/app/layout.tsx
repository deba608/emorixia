import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emorixia - Premium Handcrafted Memory Gifts & Keepsakes",
  description:
    "Transform your emotions into forever. Emorixia crafts luxury customized memory magazines, photo frames, resin art, Lippan art, and personalized gift boxes on premium textured papers. Deliverable across India.",
  keywords: [
    "memory gifts",
    "handmade keepsakes",
    "personalized magazines",
    "photo frames",
    "resin art",
    "Lippan art",
    "customized trophies",
    "emotional gifts",
    "Odisha prints store",
    "Pan India delivery",
  ],
  authors: [{ name: "Emorixia" }],
  metadataBase: new URL("https://emorixia.in"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Emorixia - Transform Memories Into Forever",
    description:
      "Transform your emotions into premium handcrafted memory gifts. Custom photobook magazines, frames, and keepsakes made with love.",
    url: "https://emorixia.in",
    siteName: "Emorixia",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Emorixia Premium Memory Gifts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emorixia - Memories Forever",
    description: "Premium handmade memory gifts and personalized keepsakes crafted with emotion.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Emorixia",
    url: "https://emorixia.in",
    logo: "https://emorixia.in/logo.png",
    sameAs: ["https://instagram.com/thesairajj"],
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Emorixia",
    image: "https://emorixia.in/og-image.jpg",
    telephone: "+917848807515",
    email: "contact@emorixia.in",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-[72px]">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
