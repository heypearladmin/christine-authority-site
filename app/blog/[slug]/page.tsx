import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import { blogPosts, getAllSlugs, getPostBySlug } from "@/lib/blogs";
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

function extractFaqs(post: ReturnType<typeof getPostBySlug>) {
  if (!post) return [];
  const faqSection = post.sections.find((s) =>
    s.heading.toLowerCase().includes("frequently asked")
  );
  if (!faqSection) return [];
  const faqs: { question: string; answer: string }[] = [];
  for (let i = 0; i + 1 < faqSection.body.length; i += 2) {
    const q = faqSection.body[i];
    const a = faqSection.body[i + 1];
    if (q && a) faqs.push({ question: q, answer: a });
  }
  return faqs;
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const pageUrl = `${SITE.url}/blog/${post.slug}`;
  const faqs = extractFaqs(post);

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
            keywords: [post.category, "Seattle real estate", "Christine Andreasen"],
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "The Journal", url: `${SITE.url}/blog` },
            { name: post.title, url: pageUrl },
          ]),
          ...(faqs.length > 0 ? [faqPageSchema(faqs)] : []),
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

      {/* Body */}
      <article className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20">
          <div className="editorial-prose">
            {post.sections.map((section) => (
              <section key={section.heading} className="scroll-mt-24">
                <h2>{section.heading}</h2>
                {section.body.map((para, i) =>
                  para.trimEnd().endsWith("?") ? (
                    <p key={i} className="font-semibold">{para}</p>
                  ) : (
                    <p key={i}>{para}</p>
                  )
                )}
              </section>
            ))}

            <hr className="my-12 border-t border-ink/10" />

            <p className="font-serif text-xl italic leading-snug text-ink md:text-2xl">
              {post.closing}
            </p>
          </div>
        </div>
      </article>

      {/* CTA strip */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="eyebrow text-gold">Ready to talk?</p>
              <span className="mt-4 inline-block h-px w-14 bg-gold" />
              <h3 className="mt-5 max-w-2xl font-serif text-3xl leading-tight md:text-4xl">
                Considering a move? Let's have the early conversation.
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
            <h2 className="font-serif text-3xl text-ink md:text-4xl">
              More from the Journal
            </h2>
            <Link
              href="/blog"
              className="editorial-link text-xs uppercase tracking-editorial text-ink"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <BlogCard
                key={r.slug}
                slug={r.slug}
                title={r.title}
                excerpt={r.excerpt}
                image={r.image}
                category={r.category}
                readingTime={r.readingTime}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
