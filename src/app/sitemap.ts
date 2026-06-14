import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://emorixia.in";
  
  const routes = [
    "",
    "/about",
    "/products",
    "/gallery",
    "/testimonials",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/shipping-policy",
    "/refund-policy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
