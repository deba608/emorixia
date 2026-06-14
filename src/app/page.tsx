import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  MessageSquare,
  Heart,
  FileText,
  Clock,
  Settings,
  ShieldCheck,
  Truck,
  Users
} from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram-icon";

import { AnimatedCounter } from "@/components/animated-counter";
import { ProcessTimeline } from "@/components/process-timeline";
import { GalleryMasonry } from "@/components/gallery-masonry";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { Accordion } from "@/components/ui/accordion";
import { ContactForm } from "@/components/contact-form";
import { NewsletterForm } from "@/components/newsletter-form";

// Featured Products data
const featuredProducts = [
  {
    title: "Memory Magazine",
    description: "Storybook-styled personalized magazines made with your favorite photos, captions, and romantic timelines.",
    price: "₹899",
    image: "/images/memory_magazine.png",
    whatsappText: "Hi Emorixia, I'd like to order a customized Memory Magazine!"
  },
  {
    title: "Photo Frames",
    description: "Elegant wooden and glass collage frames crafted to showcase your family bonds or individual keepsakes.",
    price: "₹499",
    image: "/images/photo_frame.png",
    whatsappText: "Hi Emorixia, I'm interested in ordering customized Photo Frames!"
  },
  {
    title: "Resin Art",
    description: "Stunning glossy resin trays, coasters, and letters holding preserved floral petals and golden details.",
    price: "₹699",
    image: "/images/resin_art.png",
    whatsappText: "Hi Emorixia, I'd like to design a custom Resin Art keepsake!"
  },
  {
    title: "Lippan Art",
    description: "Bespoke mud-and-mirror clay art plates matching traditional patterns to light up your home walls.",
    price: "₹799",
    image: "/images/lippan_art.png",
    whatsappText: "Hi Emorixia, I'd love to order a traditional Lippan Art piece!"
  },
  {
    title: "Surprise Gift Boxes",
    description: "Premium rose gold boxes storing personalized photo scrolls, custom notes, and organic confetti.",
    price: "₹1,199",
    image: "/images/gift_box.png",
    whatsappText: "Hi Emorixia, I want to order a customized Surprise Gift Box!"
  },
  {
    title: "Customized Trophies",
    description: "Engraved crystal glass award keepsakes to honour personal milestones and emotional dates.",
    price: "₹599",
    image: "/images/custom_trophy.png",
    whatsappText: "Hi Emorixia, I'd like to request a customized Trophy!"
  },
  {
    title: "Flex & Banner Design",
    description: "Aesthetic graphic design and print banner services for birthdays, anniversaries, and custom events.",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop",
    whatsappText: "Hi Emorixia, I need a custom Flex or Banner design!"
  }
];

// Why Choose points
const whyChoosePoints = [
  {
    icon: FileText,
    title: "Premium Textured Papers",
    description: "Printed on museum-grade cotton, linen, and archival papers for a premium tactile feel."
  },
  {
    icon: Settings,
    title: "Fully Customized",
    description: "Tailored to your exact narrative, photos, quotes, themes, and font selections."
  },
  {
    icon: Heart,
    title: "Handcrafted with Love",
    description: "Carefully designed, curated, printed, and packaged by hand to honor your feelings."
  },
  {
    icon: Truck,
    title: "Pan India Delivery",
    description: "Fast, double-packaged bubble wrapped delivery protecting your keepsakes across all states."
  },
  {
    icon: Users,
    title: "100+ Happy Customers",
    description: "Serving emotions with an immaculate five-star rating across all client interactions."
  },
  {
    icon: Clock,
    title: "Fast Support",
    description: "Direct WhatsApp support assisting you from initial draft reviews to post-delivery tracking."
  }
];

// Testimonials data
const testimonials = [
  {
    text: "Emorixia turned our wedding story into a dreamy keepsake. Every single page feels handmade and full of deep love. The quality of cotton paper is breathtaking.",
    author: "Priya & Arjun",
    role: "Wedding Memory Magazine",
    rating: 5
  },
  {
    text: "The customized surprise gift box was a masterpiece. The scroll messages and detailed photo quality made my anniversary moment magical and highly emotional.",
    author: "Sneha Mohanty",
    role: "Surprise Gift Box Client",
    rating: 5
  },
  {
    text: "Their Lippan mirror art plate looks absolutely beautiful on my living room wall. Excellent craftsmanship and safe bubble packaging. Strongly recommended!",
    author: "Dr. Rohit Dash",
    role: "Lippan Art Collector",
    rating: 5
  }
];

// FAQ items
const faqItems = [
  {
    question: "How long does the entire design and delivery process take?",
    answer: "Our standard turnaround is 5-7 business days across India. This includes 2 days for layout design, client preview approval, and 3-5 days for shipping and courier delivery. Rush options are available upon WhatsApp request."
  },
  {
    question: "Can I review and change the layouts before they are printed?",
    answer: "Absolutely! Transparency is our core value. We send you a complete digital draft preview of your Memory Magazine, Frame, or banner. We only start the printing process once you review and give us a 100% confirmation approval."
  },
  {
    question: "What makes your paper quality different from normal prints?",
    answer: "We reject normal slick photographic papers. Instead, we print on curated fine art papers, featuring linen, cotton, and organic natural matte textures. This gives your memory a premium artistic feel that remains vibrant for decades."
  },
  {
    question: "Do you accept bulk orders for events or corporate gifts?",
    answer: "Yes, we do! We provide custom trophies, banners, and personalized gift boxes in bulk for weddings, corporate milestones, and private parties. Contact us via our form or WhatsApp to unlock special bulk discounts."
  },
  {
    question: "How do I share my images and text details for customization?",
    answer: "After placing an order or inquiry, we will connect with you on WhatsApp. You can easily share files via WhatsApp Documents, Google Drive folders, or Email to preserve image resolution."
  }
];

// Mock Instagram Posts
const instagramPosts = [
  { id: 1, src: "/images/memory_magazine.png", likes: 142, comments: 24 },
  { id: 2, src: "/images/photo_frame.png", likes: 98, comments: 12 },
  { id: 3, src: "/images/resin_art.png", likes: 235, comments: 45 },
  { id: 4, src: "/images/gift_box.png", likes: 184, comments: 19 },
  { id: 5, src: "/images/lippan_art.png", likes: 110, comments: 8 },
  { id: 6, src: "/images/custom_trophy.png", likes: 167, comments: 31 }
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 pb-20 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-12 md:py-20 px-6 md:px-12 bg-radial from-secondary/35 via-transparent to-transparent">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] bg-accent/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-[25vw] h-[25vw] bg-secondary/30 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col text-left items-start gap-6">
            {/* Sparkle Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Odisha's Premium Keepsakes Store</span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
              Transform <br />
              <span className="text-primary">Memories</span> Into <br />
              Forever.
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
              Premium handcrafted memory gifts and personalized keepsakes made with love. Printed on archival textured cotton papers for a tactile difference.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <a
                href="https://wa.me/917848807515"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Order on WhatsApp</span>
              </a>
              <a
                href="#products"
                className="border border-border/40 hover:border-primary/40 bg-card hover:bg-muted/30 px-8 py-4 rounded-full font-semibold text-base transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Collection</span>
                <ArrowRight className="h-5 w-5 text-primary" />
              </a>
            </div>

            {/* Micro details */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 text-sm text-muted-foreground border-t border-border/20 w-full max-w-lg">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4.5 w-4.5 text-primary" />
                <span>Premium Cotton Paper</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="h-4.5 w-4.5 text-primary" />
                <span>Pan-India Delivery</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="h-4.5 w-4.5 text-primary" />
                <span>100% Customizable</span>
              </span>
            </div>
          </div>

          {/* Right Floating Images Collage */}
          <div className="lg:col-span-5 relative h-[450px] md:h-[550px] flex items-center justify-center">
            {/* Main Central Card */}
            <div className="w-[70%] aspect-[3/4] rounded-2xl overflow-hidden border-4 border-background bg-card shadow-2xl z-10 animate-float-slow transform rotate-[-2deg]">
              <img
                src="/images/memory_magazine.png"
                alt="Memory Magazine Hero Item"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Top Right Card */}
            <div className="absolute right-0 top-10 w-[42%] aspect-square rounded-2xl overflow-hidden border-4 border-background bg-card shadow-xl z-20 animate-float-medium transform rotate-[6deg]">
              <img
                src="/images/photo_frame.png"
                alt="Custom Photo Frame"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom Left Card */}
            <div className="absolute left-0 bottom-6 w-[45%] aspect-[3/4] rounded-2xl overflow-hidden border-4 border-background bg-card shadow-lg z-0 animate-float-fast transform rotate-[-8deg]">
              <img
                src="/images/gift_box.png"
                alt="Surprise Gift Box"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Sparkle element */}
            <div className="absolute top-[20%] left-[10%] text-primary animate-pulse z-30">
              <Sparkles className="h-10 w-10 fill-primary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED PRODUCTS SECTION */}
      <section id="products" className="max-w-7xl mx-auto px-6 md:px-12 py-10 text-center">
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">
            Curated Treasures
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Stories We Turn Into Forever
          </h2>
          <p className="text-muted-foreground max-w-xl text-base md:text-lg">
            Choose a keepsake category below. Share your details, and watch us craft your memories into physical art.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((prod, index) => (
            <div
              key={index}
              className="flex flex-col bg-card border border-border/40 rounded-3xl overflow-hidden group shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border/10">
                <img
                  src={prod.image}
                  alt={prod.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-4 left-4 bg-background/95 dark:bg-card/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-primary border border-border/20">
                  Starting at {prod.price}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-6 md:p-8 flex flex-col items-start text-left flex-grow">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {prod.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {prod.description}
                </p>

                {/* Card Action */}
                <a
                  href={`https://wa.me/917848807515?text=${encodeURIComponent(prod.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-primary/20 hover:border-primary bg-secondary/30 hover:bg-primary text-primary hover:text-white py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Customize on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROCESS SECTION */}
      <section className="bg-muted/30 py-20 border-y border-border/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="flex flex-col items-center gap-4 mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              How It Works
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              From Emotion to Your Doorstep
            </h2>
            <p className="text-muted-foreground max-w-xl text-base md:text-lg">
              We guide you through every phase of design, ensuring you are 100% happy before we print a single pixel.
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* 4. STATISTICS COUNTER STRIPE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-primary text-white rounded-3xl p-8 md:p-14 shadow-xl shadow-primary/10 relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px]" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative z-10 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="font-heading text-4xl md:text-6xl font-bold">
                <AnimatedCounter value={500} suffix="+" />
              </span>
              <span className="text-white/80 text-sm md:text-base font-semibold">
                Orders Delivered
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="font-heading text-4xl md:text-6xl font-bold">
                <AnimatedCounter value={750} suffix="+" />
              </span>
              <span className="text-white/80 text-sm md:text-base font-semibold">
                Keepsakes Created
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="font-heading text-4xl md:text-6xl font-bold">
                <AnimatedCounter value={50} suffix="+" />
              </span>
              <span className="text-white/80 text-sm md:text-base font-semibold">
                Cities Served
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="font-heading text-4xl md:text-6xl font-bold">
                <AnimatedCounter value={99} suffix="%" />
              </span>
              <span className="text-white/80 text-sm md:text-base font-semibold">
                Satisfaction Rate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-10 text-center">
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">
            Inspiration Board
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Our Memory Gallery
          </h2>
          <p className="text-muted-foreground max-w-xl text-base md:text-lg">
            Look at the tactile difference of textured archival pages and custom frame layouts curated for previous clients.
          </p>
        </div>

        <GalleryMasonry />
      </section>

      {/* 6. WHY CHOOSE EMORIXIA */}
      <section className="bg-muted/30 py-20 border-y border-border/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="flex flex-col items-center gap-4 mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              The Tactile Difference
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              Why Choose Emorixia?
            </h2>
            <p className="text-muted-foreground max-w-xl text-base md:text-lg">
              We design keepsakes that feel luxury to hold, look gorgeous to display, and remain archival to last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div
                  key={idx}
                  className="bg-card border border-border/30 rounded-3xl p-8 flex flex-col items-start text-left gap-4 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="p-3 bg-secondary text-primary rounded-2xl">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {pt.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. ABOUT / MISSION SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Brand Mission
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              Every Memory Deserves Forever
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Emorixia was born from a simple belief: memories shouldn't fade away into digital scrolling feeds. The details of our lives—a wedding kiss, a baby's laugh, a grandparent's smile—deserve a tactile physical home.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We curate and edit each keepsake from scratch. We select only museum-grade textured cardstock (linen, cotton, and eco finishes) that elevates photo printing into an emotional work of fine art. When you hold an Emorixia magazine, you feel the texture of your stories.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-7 py-3 rounded-full font-bold text-sm shadow-md transition-colors"
              >
                <span>Read Full Story</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Image Layout */}
          <div className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden border border-border/30 bg-card shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1606744824163-985d376605aa?q=80&w=800&auto=format&fit=crop"
              alt="Artisan assembling memory prints"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-end p-8">
              <p className="text-white font-heading text-xl md:text-2xl font-bold italic">
                “You give us memories... we give them forever 💖”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="bg-muted/30 py-20 border-y border-border/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="flex flex-col items-center gap-4 mb-10">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Client Love
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              What Our Clients Say
            </h2>
          </div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* 9. FAQ ACCORDION SECTION */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-10 text-center">
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">
            Common Inquiries
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion items={faqItems} />
      </section>

      {/* 10. INSTAGRAM GRID FEED */}
      <section className="bg-muted/30 py-20 border-y border-border/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="flex flex-col items-center gap-4 mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Social Community
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              Follow Us @thesairajj
            </h2>
            <p className="text-muted-foreground max-w-xl text-base md:text-lg">
              Discover behind-the-scenes layout processes, printing guides, and romantic design collections on Instagram.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href="https://instagram.com/thesairajj"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square group overflow-hidden rounded-2xl border border-border/10 shadow-sm"
              >
                <img
                  src={post.src}
                  alt={`Instagram Post ${post.id}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Mask */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white text-xs font-semibold">
                  <span className="flex items-center gap-1">
                    ❤️ {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    💬 {post.comments}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="https://instagram.com/thesairajj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary/30 hover:border-primary text-primary hover:bg-secondary/20 px-6 py-3 rounded-full font-bold text-sm transition-colors"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
              <span>Connect on Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* 11. CONTACT FORM SECTION */}
      <section id="contact" className="max-w-7xl mx-auto px-6 md:px-12 py-10 text-center">
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">
            Let's Collaborate
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Contact Emorixia
          </h2>
          <p className="text-muted-foreground max-w-xl text-base md:text-lg">
            Request pricing catalogs, bulk details, or customized order layouts. Use our secure email form or request instantly via WhatsApp.
          </p>
        </div>

        <ContactForm />
      </section>

      {/* 12. NEWSLETTER SECTION */}
      <section className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-gradient-to-tr from-primary via-primary-hover to-accent rounded-3xl p-8 md:p-16 text-center text-white shadow-xl shadow-primary/10 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full blur-[60px]" />
          
          <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
              Never Miss a Keepsake Update
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Subscribe to unlock memory-making tips, exclusive coupon offers, and previews of our newest handcrafted designs.
            </p>

            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
