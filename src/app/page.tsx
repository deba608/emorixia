import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  Heart,
  FileText,
  Clock,
  Settings,
  ShieldCheck,
  Truck,
  Users,
  Sparkles,
} from "lucide-react";

import { AnimatedCounter } from "@/components/animated-counter";
import { ProcessTimeline } from "@/components/process-timeline";
import { GalleryMasonry } from "@/components/gallery-masonry";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { Accordion } from "@/components/ui/accordion";
import { ContactForm } from "@/components/contact-form";
import { NewsletterForm } from "@/components/newsletter-form";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/scroll-reveal";

const featuredProducts = [
  {
    title: "Memory Magazine",
    description: "Storybook-styled personalized magazines made with your favorite photos, captions, and romantic timelines.",
    price: "₹899",
    image: "/images/memory_magazine.png",
    whatsappText: "Hi Emorixia, I'd like to order a customized Memory Magazine!",
  },
  {
    title: "Photo Frames",
    description: "Elegant wooden and glass collage frames crafted to showcase your family bonds or individual keepsakes.",
    price: "₹499",
    image: "/images/photo_frame.png",
    whatsappText: "Hi Emorixia, I'm interested in ordering customized Photo Frames!",
  },
  {
    title: "Resin Art",
    description: "Stunning glossy resin trays, coasters, and letters holding preserved floral petals and golden details.",
    price: "₹699",
    image: "/images/resin_art.png",
    whatsappText: "Hi Emorixia, I'd like to design a custom Resin Art keepsake!",
  },
  {
    title: "Lippan Art",
    description: "Bespoke mud-and-mirror clay art plates matching traditional patterns to light up your home walls.",
    price: "₹799",
    image: "/images/lippan_art.png",
    whatsappText: "Hi Emorixia, I'd love to order a traditional Lippan Art piece!",
  },
  {
    title: "Surprise Gift Boxes",
    description: "Premium rose gold boxes storing personalized photo scrolls, custom notes, and organic confetti.",
    price: "₹1,199",
    image: "/images/gift_box.png",
    whatsappText: "Hi Emorixia, I want to order a customized Surprise Gift Box!",
  },
  {
    title: "Customized Trophies",
    description: "Engraved crystal glass award keepsakes to honour personal milestones and emotional dates.",
    price: "₹599",
    image: "/images/custom_trophy.png",
    whatsappText: "Hi Emorixia, I'd like to request a customized Trophy!",
  },
  {
    title: "Flex & Banner Design",
    description: "Aesthetic graphic design and print banner services for birthdays, anniversaries, and custom events.",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop",
    whatsappText: "Hi Emorixia, I need a custom Flex or Banner design!",
  },
];

const whyChoosePoints = [
  { icon: FileText, title: "Premium Textured Papers", description: "Printed on museum-grade cotton, linen, and archival papers for a premium tactile feel." },
  { icon: Settings, title: "Fully Customized", description: "Tailored to your exact narrative, photos, quotes, themes, and font selections." },
  { icon: Heart, title: "Handcrafted with Care", description: "Carefully designed, curated, printed, and packaged by hand to honor your feelings." },
  { icon: Truck, title: "Pan India Delivery", description: "Fast, double-packaged bubble wrapped delivery protecting your keepsakes across all states." },
  { icon: Users, title: "100+ Happy Customers", description: "Serving emotions with an immaculate five-star rating across all client interactions." },
  { icon: Clock, title: "Fast Support", description: "Direct WhatsApp support assisting you from initial draft reviews to post-delivery tracking." },
];

const testimonials = [
  {
    text: "Emorixia turned our wedding story into a dreamy keepsake. Every single page feels handmade and full of deep love. The quality of cotton paper is breathtaking.",
    author: "Priya & Arjun",
    role: "Wedding Memory Magazine",
    rating: 5,
  },
  {
    text: "The customized surprise gift box was a masterpiece. The scroll messages and detailed photo quality made my anniversary moment magical and highly emotional.",
    author: "Sneha Mohanty",
    role: "Surprise Gift Box Client",
    rating: 5,
  },
  {
    text: "Their Lippan mirror art plate looks absolutely beautiful on my living room wall. Excellent craftsmanship and safe bubble packaging. Strongly recommended!",
    author: "Dr. Rohit Dash",
    role: "Lippan Art Collector",
    rating: 5,
  },
];

const faqItems = [
  {
    question: "How long does the entire design and delivery process take?",
    answer: "Our standard turnaround is 5-7 business days across India. This includes 2 days for layout design, client preview approval, and 3-5 days for shipping and courier delivery. Rush options are available upon WhatsApp request.",
  },
  {
    question: "Can I review and change the layouts before they are printed?",
    answer: "Absolutely! Transparency is our core value. We send you a complete digital draft preview of your Memory Magazine, Frame, or banner. We only start the printing process once you review and give us a 100% confirmation approval.",
  },
  {
    question: "What makes your paper quality different from normal prints?",
    answer: "We reject normal slick photographic papers. Instead, we print on curated fine art papers, featuring linen, cotton, and organic natural matte textures. This gives your memory a premium artistic feel that remains vibrant for decades.",
  },
  {
    question: "Do you accept bulk orders for events or corporate gifts?",
    answer: "Yes, we do! We provide custom trophies, banners, and personalized gift boxes in bulk for weddings, corporate milestones, and private parties. Contact us via our form or WhatsApp to unlock special bulk discounts.",
  },
  {
    question: "How do I share my images and text details for customization?",
    answer: "After placing an order or inquiry, we will connect with you on WhatsApp. You can easily share files via WhatsApp Documents, Google Drive folders, or Email to preserve image resolution.",
  },
];

const instagramPosts = [
  { id: 1, src: "/images/memory_magazine.png", likes: 142, comments: 24 },
  { id: 2, src: "/images/photo_frame.png", likes: 98, comments: 12 },
  { id: 3, src: "/images/resin_art.png", likes: 235, comments: 45 },
  { id: 4, src: "/images/gift_box.png", likes: 184, comments: 19 },
  { id: 5, src: "/images/lippan_art.png", likes: 110, comments: 8 },
  { id: 6, src: "/images/custom_trophy.png", likes: 167, comments: 31 },
];

function SectionHeader({ tag, title, description }: { tag: string; title: string; description?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 mb-14">
      <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">{tag}</span>
      <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold text-foreground leading-tight text-center">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-xl text-base md:text-lg text-balance text-center leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-6 md:px-12">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-[30vw] h-[30vw] bg-secondary/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[25vw] h-[25vw] bg-accent/30 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full py-16 md:py-24">
          <ScrollReveal direction="up" delay={0.1} className="lg:col-span-7 flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 bg-secondary text-primary px-3.5 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-[0.15em]">
              <Sparkles className="h-3.5 w-3.5" />
              Odisha&apos;s Premium Keepsakes
            </span>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
              Transform{" "}
              <span className="text-gradient">Memories</span>{" "}
              Into Forever.
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed text-balance">
              Premium handcrafted memory gifts and personalized keepsakes made with love. Printed on archival textured cotton papers for a tactile difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <a
                href="https://wa.me/917848807515"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Order on WhatsApp</span>
              </a>
              <a
                href="#products"
                className="group border border-border hover:border-primary/30 bg-card hover:bg-muted/50 px-8 py-4 rounded-xl font-semibold text-base transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Collection</span>
                <ArrowRight className="h-5 w-5 text-primary" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 text-sm text-muted-foreground border-t border-border/50 w-full max-w-lg">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Premium Cotton Paper
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="h-4 w-4 text-primary" />
                Pan-India Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="h-4 w-4 text-primary" />
                100% Customizable
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3} className="lg:col-span-5 relative h-[420px] md:h-[520px] flex items-center justify-center">
            <div className="w-[70%] aspect-[3/4] rounded-2xl overflow-hidden border-4 border-background bg-card shadow-xl z-10 animate-float-slow transform rotate-[-2deg]">
              <img src="/images/memory_magazine.png" alt="Memory Magazine" className="w-full h-full object-cover" />
            </div>
            <div className="absolute right-0 top-10 w-[42%] aspect-square rounded-2xl overflow-hidden border-4 border-background bg-card shadow-lg z-20 animate-float-medium transform rotate-[6deg]">
              <img src="/images/photo_frame.png" alt="Photo Frame" className="w-full h-full object-cover" />
            </div>
            <div className="absolute left-0 bottom-6 w-[45%] aspect-[3/4] rounded-2xl overflow-hidden border-4 border-background bg-card shadow-md z-0 animate-float-fast transform rotate-[-8deg]">
              <img src="/images/gift_box.png" alt="Gift Box" className="w-full h-full object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <ScrollReveal>
          <SectionHeader tag="Curated Treasures" title="Stories We Turn Into Forever" description="Choose a keepsake category below. Share your details, and watch us craft your memories into physical art." />
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((prod, index) => (
            <StaggerItem key={index}>
              <div className="group flex flex-col bg-card border border-border/50 rounded-2xl overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] hover:border-primary/20 transition-all duration-300">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/20">
                  <img src={prod.image} alt={prod.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute bottom-4 left-4 bg-card/95 px-3.5 py-1.5 rounded-lg text-xs font-bold text-primary shadow-sm">
                    Starting at {prod.price}
                  </span>
                </div>
                <div className="p-7 flex flex-col items-start text-left flex-grow">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{prod.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">{prod.description}</p>
                  <a
                    href={`https://wa.me/917848807515?text=${encodeURIComponent(prod.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-primary/20 hover:border-primary bg-secondary/30 hover:bg-primary text-primary hover:text-white py-2.5 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Customize on WhatsApp</span>
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* Design Studios */}
      <section className="bg-muted/40 border-y border-border/30 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <SectionHeader tag="Design Studios" title="Interactive Keepsake Labs" description="Try our digital customization tools to draft your magazine cover layouts or select resin art botanicals in real time." />
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
            <StaggerItem>
              <div className="group bg-card border border-border/50 rounded-2xl p-8 md:p-10 text-left flex flex-col justify-between gap-6 hover:shadow-[var(--shadow-lg)] hover:border-primary/20 transition-all duration-300">
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">Magazine Cover Studio</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Step-by-step interactive builder to draft your Magazine Cover. Mix background colors, adjust typography, and share layouts with your designer on WhatsApp.
                  </p>
                </div>
                <Link href="/magazine-builder" className="group/btn inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-3 px-6 rounded-xl font-bold text-sm shadow-md transition-all w-fit">
                  <span>Launch Magazine Lab</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="group bg-card border border-border/50 rounded-2xl p-8 md:p-10 text-left flex flex-col justify-between gap-6 hover:shadow-[var(--shadow-lg)] hover:border-primary/20 transition-all duration-300">
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">Resin Art Configurator</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Select from shapes (hexagon blocks, serving trays, coasters) and visually place preserved botanicals with golden leaf foil shimmer.
                  </p>
                </div>
                <Link href="/resin-configurator" className="group/btn inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-3 px-6 rounded-xl font-bold text-sm shadow-md transition-all w-fit">
                  <span>Launch Resin Lab</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <SectionHeader tag="How It Works" title="From Emotion to Your Doorstep" description="We guide you through every phase of design, ensuring you are 100% happy before we print a single pixel." />
          </ScrollReveal>
          <ProcessTimeline />
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <ScrollReveal>
          <div className="bg-primary rounded-2xl p-8 md:p-14 shadow-xl shadow-primary/15 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px]" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative z-10 text-center">
              {[
                { value: 500, suffix: "+", label: "Orders Delivered" },
                { value: 750, suffix: "+", label: "Keepsakes Created" },
                { value: 50, suffix: "+", label: "Cities Served" },
                { value: 99, suffix: "%", label: "Satisfaction Rate" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-2">
                  <span className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-white/70 text-sm md:text-base font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <ScrollReveal>
          <SectionHeader tag="Inspiration Board" title="Our Memory Gallery" description="Look at the tactile difference of textured archival pages and custom frame layouts curated for previous clients." />
        </ScrollReveal>
        <GalleryMasonry />
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/40 border-y border-border/30 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <SectionHeader tag="The Tactile Difference" title="Why Choose Emorixia?" description="We design keepsakes that feel luxury to hold, look gorgeous to display, and remain archival to last a lifetime." />
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <StaggerItem key={idx}>
                  <div className="group bg-card border border-border/50 rounded-2xl p-7 flex flex-col items-start text-left gap-4 hover:border-primary/20 hover:shadow-[var(--shadow-md)] transition-all duration-300">
                    <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">{pt.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pt.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* About / Mission */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal direction="left" className="lg:col-span-7 flex flex-col gap-5 text-left">
            <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">Brand Mission</span>
            <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold text-foreground leading-tight">
              Every Memory Deserves Forever
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Emorixia was born from a simple belief: memories shouldn&apos;t fade away into digital scrolling feeds. The details of our lives&mdash;a wedding kiss, a baby&apos;s laugh, a grandparent&apos;s smile&mdash;deserve a tactile physical home.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We curate and edit each keepsake from scratch. We select only museum-grade textured cardstock that elevates photo printing into an emotional work of fine art.
            </p>
            <div className="pt-2">
              <Link href="/about" className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-7 py-3 rounded-xl font-bold text-sm shadow-md transition-all">
                <span>Read Full Story</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-5">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/30 bg-card shadow-lg group">
              <img src="https://images.unsplash.com/photo-1606744824163-985d376605aa?q=80&w=800&auto=format&fit=crop" alt="Artisan assembling memory prints" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8">
                <p className="text-white font-heading text-lg md:text-xl font-bold italic leading-snug">
                  &ldquo;You give us memories... we give them forever.&rdquo;
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/40 border-y border-border/30 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <SectionHeader tag="Client Love" title="What Our Clients Say" />
          </ScrollReveal>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-24">
        <ScrollReveal>
          <SectionHeader tag="Common Inquiries" title="Frequently Asked Questions" />
        </ScrollReveal>
        <Accordion items={faqItems} />
      </section>

      {/* Instagram */}
      <section className="bg-muted/40 border-y border-border/30 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <SectionHeader tag="Social Community" title="Follow Us @thesairajj" description="Discover behind-the-scenes layout processes, printing guides, and romantic design collections on Instagram." />
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" staggerDelay={0.05}>
            {instagramPosts.map((post) => (
              <StaggerItem key={post.id}>
                <a
                  href="https://instagram.com/thesairajj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square group overflow-hidden rounded-xl border border-border/30 bg-muted/30"
                >
                  <img src={post.src} alt={`Instagram Post ${post.id}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-4 text-white text-xs font-semibold">
                    <span className="flex items-center gap-1">
                      <Heart className="h-3.5 w-3.5 fill-white/80" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="h-3.5 w-3.5" /> {post.comments}
                    </span>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <ScrollReveal>
            <div className="mt-10 text-center">
              <a
                href="https://instagram.com/thesairajj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border hover:border-primary/30 text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200"
              >
                <span>Follow on Instagram</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <ScrollReveal>
          <SectionHeader tag="Get in Touch" title="Contact Emorixia" description="Request pricing catalogs, bulk details, or customized order layouts. Use our secure email form or message us on WhatsApp." />
        </ScrollReveal>
        <ContactForm />
      </section>

      {/* Newsletter */}
      <section className="px-6 md:px-12 pb-24">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto bg-primary rounded-2xl p-8 md:p-16 text-center text-white shadow-xl shadow-primary/15 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full blur-[60px]" />
            <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
                Never Miss a Keepsake Update
              </h2>
              <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-lg">
                Subscribe to unlock memory-making tips, exclusive coupon offers, and previews of our newest handcrafted designs.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
