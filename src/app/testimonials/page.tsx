import React from "react";
import type { Metadata } from "next";
import { Star, MessageSquare } from "lucide-react";
import { TestimonialSlider } from "@/components/testimonial-slider";

export const metadata: Metadata = {
  title: "Client Testimonials - Emorixia Reviews",
  description: "Read five-star reviews from clients who transformed their wedding memories, birthdays, and anniversaries into customkeepsakes with Emorixia.",
  alternates: {
    canonical: "/testimonials",
  }
};

const allReviews = [
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
  },
  {
    text: "The customized crystal trophy I requested for my father's retirement was beautiful. The laser engraving was extremely sharp and clear.",
    author: "Amit Patnaik",
    role: "Customized Trophy Client",
    rating: 5
  },
  {
    text: "Ordered a birthday flex banner and a memory booklet. The design team was super patient with my text edit revisions. Exceptional service and prompt delivery!",
    author: "Sweta Panda",
    role: "Event Flex & Book Client",
    rating: 5
  },
  {
    text: "Bespoke resin art tray holding my dried engagement flowers. It looks like a high-end luxury decor piece. Lifetime memories preserved perfectly.",
    author: "Rashmi Ranjan",
    role: "Resin Floral Coasters",
    rating: 5
  }
];

export default function TestimonialsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-20">
      {/* Header section */}
      <div className="text-center flex flex-col items-center gap-4 max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-widest text-primary uppercase bg-secondary px-3.5 py-1.5 rounded-lg">
          Client Feedback
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
          What Our Clients Say
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          We pride ourselves on offering five-star handcrafted keepsakes with premium textured finishes and patient layout customization. Read client stories below.
        </p>
      </div>

      {/* Featured slider */}
      <div className="bg-muted/20 border border-border/10 rounded-2xl p-4 md:p-8">
        <TestimonialSlider testimonials={allReviews.slice(0, 3)} />
      </div>

      {/* Reviews Grid */}
      <div className="flex flex-col gap-10">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-left border-l-4 border-primary pl-4">
          Client Stories Grid
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-card border border-border/40 rounded-2xl p-8 flex flex-col justify-between gap-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4.5 w-4.5 ${
                      i < rev.rating ? "text-primary fill-primary" : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground text-sm leading-relaxed italic flex-grow">
                “{rev.text}”
              </p>

              {/* Author details */}
              <div className="flex flex-col border-t border-border/10 pt-4 text-left">
                <span className="font-bold text-foreground text-sm">{rev.author}</span>
                <span className="text-xs text-muted-foreground mt-0.5">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Request Stripe */}
      <div className="bg-secondary/40 border border-primary/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto flex flex-col items-center gap-5">
        <MessageSquare className="h-7 w-7 text-primary fill-primary/10" />
        <h3 className="font-heading text-xl md:text-2xl font-bold text-primary">
          Are you an Emorixia client?
        </h3>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
          We would love to hear how your custom keepsake was received! Share your experience, comments, or pictures with us on WhatsApp or email, and let us add your story to our wall of love.
        </p>
        <a
          href="https://wa.me/917848807515?text=Hi%20Emorixia,%20I'd%20love%20to%20share%20a%20feedback%20review%20about%20my%20order!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors"
        >
          Submit WhatsApp Feedback
        </a>
      </div>
    </div>
  );
}
