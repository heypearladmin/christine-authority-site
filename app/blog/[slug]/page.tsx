import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import BlogCard from "@/components/BlogCard";
import TableOfContents from "@/components/blog/TableOfContents";
import FAQSection from "@/components/blog/FAQSection";
import { blogPosts, getAllSlugs, getPostBySlug } from "@/lib/blogs";
import { getFaqsByBlogSlug } from "@/lib/faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPostingSchema, breadcrumbSchema, faqPageSchema, SITE } from "@/lib/seo/schema";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Article not found" };
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          width: 1600,
          height: 1000,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://www.christineandreasen.com/blog/${params.slug}`,
    },
  };
}

function formatDate(d: string) {
  const [year, month, day] = d.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim().replace(/\s+/g, "-");
}

function renderParagraph(text: string, key: number) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  if (!linkRegex.test(text)) return <p key={key}>{text}</p>;
  linkRegex.lastIndex = 0;
  const parts: React.ReactNode[] = [];
  let last = 0;
  let match;
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      <Link key={match.index} href={match[2]} className="text-gold hover:text-ink underline underline-offset-2 transition-colors">
        {match[1]}
      </Link>
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <p key={key}>{parts}</p>;
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = [
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 4);

  const pageUrl = `${SITE.url}/blog/${post.slug}`;
  const faqItems = getFaqsByBlogSlug(post.slug);
  const bodySections = post.sections.filter(
    (s) => !s.heading.toLowerCase().includes("frequently asked")
  );

  // For schema: extract faqs in old format
  const schemaFaqs = faqItems.map((f) => ({ question: f.question, answer: f.answer }));

  return (
    <>
      <JsonLd
        schema={[
          blogPostingSchema({
            title: post.title,
            description: post.excerpt,
            url: pageUrl,
            image: post.image,
            datePublished: post.date,
            dateModified: post.dateModified ?? post.date,
            keywords: [post.category, "Seattle real estate", "Christine Andreasen"],
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "The Journal", url: `${SITE.url}/blog` },
            { name: post.title, url: pageUrl },
          ]),
          ...(schemaFaqs.length > 0 ? [faqPageSchema(schemaFaqs)] : []),
        ]}
      />

      {/* Article header */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 pb-12 pt-20 md:px-10 md:pt-28">
          <Link
            href="/blog"
            className="text-xs uppercase tracking-editorial text-ink/60 transition-colors hover:text-gold"
          >
            &larr; The Journal
          </Link>
          <p className="eyebrow mt-10">{post.category}</p>
          <span className="gold-rule mt-4" />
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-editorial text-ink/55">
            <span>By Christine Andreasen</span>
            <span className="h-px w-6 bg-ink/30" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="h-px w-6 bg-ink/30" />
            <span>{post.readingTime}</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="relative aspect-[16/9] w-full overflow-hidden image-fallback">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(min-width: 1280px) 1100px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quick answer */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 pt-16 md:px-10">
          <div className="border-l-2 border-gold pl-6">
            <p className="text-xs uppercase tracking-editorial text-gold">
              Quick Answer
            </p>
            <p className="mt-3 font-serif text-xl leading-snug text-ink md:text-2xl">
              {post.quickAnswer}
            </p>
          </div>
        </div>
      </section>

      {/* Body + TOC */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          {/* Mobile TOC inline */}
          <div className="lg:hidden mx-auto max-w-3xl mb-8">
            <TableOfContents sections={bodySections} />
          </div>
          <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
            {/* Desktop TOC sidebar */}
            <aside className="hidden lg:block">
              <TableOfContents sections={bodySections} />
            </aside>
            {/* Article prose */}
            <article>
              <div className="editorial-prose max-w-3xl">
                {bodySections.map((section) => (
                  <section key={section.heading} id={slugify(section.heading)} className="scroll-mt-24">
                    <h2>{section.heading}</h2>
                    {section.body.map((para, i) => {
                      const qMatch = para.match(/^(.+\?)\s+([\s\S]+)$/);
                      if (qMatch) {
                        return (
                          <p key={i}>
                            <strong>{qMatch[1]}</strong>{" "}{qMatch[2]}
                          </p>
                        );
                      }
                      return renderParagraph(para, i);
                    })}
                  </section>
                ))}

                <hr className="my-12 border-t border-ink/10" />

                <p className="font-serif text-xl italic leading-snug text-ink md:text-2xl">
                  {post.closing}
                </p>

                {post.relatedServiceCta && (
                  <div className="mt-10 rounded-lg border border-gold/30 bg-gold/5 px-6 py-6">
                    <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                      {post.relatedServiceCta.label}
                    </p>
                    <p className="mt-2 text-ink/80">{post.relatedServiceCta.text}</p>
                    <a
                      href={post.relatedServiceCta.href}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink underline-offset-4 hover:underline"
                    >
                      Learn more →
                    </a>
                  </div>
                )}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <FAQSection faqs={faqItems} />

      {/* CTA strip */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="eyebrow text-gold">Ready to talk?</p>
              <span className="mt-4 inline-block h-px w-14 bg-gold" />
              <h3 className="mt-5 max-w-2xl font-serif text-3xl leading-tight md:text-4xl">
                Considering a move? Let&apos;s have the early conversation.
              </h3>
            </div>
            <Link
              href="/schedule"
              className="inline-flex items-center bg-gold px-6 py-3 text-xs uppercase tracking-editorial text-ink transition-colors duration-300 hover:bg-cream"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-3xl text-ink md:text-4xl">
                More from the Journal
              </h2>
              {related.some((r) => r.category === post.category) && (
                <p className="mt-1 text-xs uppercase tracking-editorial text-ink/50">
                  More in {post.category}
                </p>
              )}
            </div>
            <Link
              href="/blog"
              className="editorial-link text-xs uppercase tracking-editorial text-ink"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <BlogCard
                key={r.slug}
                slug={r.slug}
                title={r.title}
                excerpt={r.excerpt}
                image={r.image}
                category={r.category}
                readingTime={r.readingTime}
                date={r.date}
                isNew={r.isNew}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
