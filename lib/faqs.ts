import { blogPosts } from "./blogs";

export type FAQ = {
  slug: string;
  question: string;
  answer: string;
  blogSlug: string;
  blogTitle: string;
  blogCategory: string;
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

export function getAllFaqs(): FAQ[] {
  const faqs: FAQ[] = [];
  for (const post of blogPosts) {
    const faqSection = post.sections.find((s) =>
      s.heading.toLowerCase().includes("frequently asked")
    );
    if (!faqSection) continue;
    for (const item of faqSection.body) {
      const match = item.match(/^(.+\?)\s+([\s\S]+)$/);
      if (!match) continue;
      faqs.push({
        slug: slugify(match[1]),
        question: match[1],
        answer: match[2],
        blogSlug: post.slug,
        blogTitle: post.title,
        blogCategory: post.category,
      });
    }
  }
  return faqs;
}

export function getFaqBySlug(slug: string): FAQ | undefined {
  return getAllFaqs().find((f) => f.slug === slug);
}

export function getFaqsByBlogSlug(blogSlug: string): FAQ[] {
  return getAllFaqs().filter((f) => f.blogSlug === blogSlug);
}
