import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogs";
import { neighborhoods } from "@/lib/neighborhoods";
import { services } from "@/lib/services";
import { getAllFaqs } from "@/lib/faqs";

const SITE_URL = "https://www.christineandreasen.com";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/schedule`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/valuation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/policies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const neighborhoodRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/neighborhoods`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    ...neighborhoods.map((n) => ({
      url: `${SITE_URL}/neighborhoods/${n.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const serviceRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/services/buying`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/services/selling`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    ...services.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const faqRoutes: MetadataRoute.Sitemap = getAllFaqs().map((f) => ({
    url: `${SITE_URL}/faq/${f.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...faqRoutes, ...neighborhoodRoutes, ...serviceRoutes];
}
