import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  faqPageSchema,
  breadcrumbSchema,
  webPageSchema,
  SITE,
} from "@/lib/seo/schema";
import {
  getAllFaqs,
  getFaqBySlug,
  getBlogDateBySlug,
  getBlogExcerptBySlug,
  getFaqsByCategory,
} from "@/lib/faqs";
import { blogPosts } from "@/lib/blogs";
import { faqExtensions } from "@/lib/faq-extensions";
import BlogCard from "@/components/BlogCard";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllFaqs().map((faq) => ({ slug: faq.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const faq = getFaqBySlug(params.slug);
  if (!faq) return { title: "Question not found" };
  const description = faq.answer.slice(0, 160);
  const pageUrl = `${SITE.url}/faq/${faq.slug}`;
  return {
    title: faq.question,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: faq.question,
      description,
      url: pageUrl,
      images: [{ url: `${SITE.url}${SITE.ogImage}` }],
    },
  };
}

export default function FaqPage({ params }: { params: Params }) {
  const faq = getFaqBySlug(params.slug);
  if (!faq) notFound();

  const ext = faqExtensions[faq.slug];

  const rawDate = getBlogDateBySlug(faq.blogSlug);
  const lastUpdated = rawDate
    ? new Date(rawDate + "T12:00:00").toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : undefined;

  const blogExcerpt = getBlogExcerptBySlug(faq.blogSlug);

  const relatedFaqs = getFaqsByCategory(faq.blogCategory, faq.slug).slice(0, 4);

  const relatedArticles = blogPosts
    .filter((p) => p.category === faq.blogCategory && p.slug !== faq.blogSlug)
    .slice(0, 3);

  const pageUrl = `${SITE.url}/faq/${faq.slug}`;
  const blogUrl = `${SITE.url}/blog/${faq.blogSlug}`;

  return (
    <>
      <JsonLd
        schema={[
          faqPageSchema([{ question: faq.question, answer: faq.answer }]),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "The Journal", url: `${SITE.url}/blog` },
            { name: faq.blogTitle, url: blogUrl },
            { name: "FAQ", url: pageUrl },
          ]),
          webPageSchema({
            name: faq.question,
            url: pageUrl,
            description: faq.answer.slice(0, 160),
            speakableSelectors: ["h1", ".border-l-2.border-gold p"],
          }),
        ]}
      />

      {/* HERO */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 pb-12 pt-20 md:px-10 md:pt-28">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-editorial text-ink/50"
          >
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gold transition-colors">
              The Journal
            </Link>
            <span>/</span>
            <Link
              href={`/blog/${faq.blogSlug}`}
              className="hover:text-gold transition-colors line-clamp-1 max-w-[200px]"
            >
              {faq.blogTitle}
            </Link>
            <span>/</span>
            <span className="text-ink/35 line-clamp-1 max-w-[200px]">FAQ</span>
          </nav>

          <p className="eyebrow mt-10">{faq.blogCategory} · FAQ</p>
          <span className="gold-rule mt-4" />

          <h1 className="mt-6 font-serif text-3xl leading-[1.1] text-ink md:text-4xl lg:text-5xl">
            {faq.question}
          </h1>

          {lastUpdated && (
            <p className="mt-5 text-xs uppercase tracking-editorial text-ink/40">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 pb-12 md:px-10">
          <div className="border-l-2 border-gold pl-6">
            <p className="text-xs uppercase tracking-editorial text-gold mb-3">
              Quick Answer
            </p>
            <p className="font-serif text-xl leading-relaxed text-ink md:text-2xl">
              {faq.answer}
            </p>
          </div>
        </div>
      </section>

      {/* KEY TAKEAWAYS */}
      {ext?.keyTakeaways && ext.keyTakeaways.length > 0 && (
        <section className="bg-cream">
          <div className="mx-auto max-w-3xl px-6 py-10 md:px-10">
            <div className="rounded-sm border border-ink/10 p-6 md:p-8">
              <p className="eyebrow mb-5">Key Takeaways</p>
              <ul className="space-y-3">
                {ext.keyTakeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-gold text-sm" aria-hidden>
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed text-ink/80 md:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* EXPANDED SECTIONS */}
      {ext?.expandedSections && ext.expandedSections.length > 0 && (
        <section className="bg-cream border-t border-ink/5">
          <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20">
            <div className="editorial-prose">
              {ext.expandedSections.map((sec, i) => (
                <section key={i}>
                  <h2>{sec.heading}</h2>
                  {sec.body.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COMPARISON TABLE */}
      {ext?.comparisonTable && (
        <section className="bg-cream">
          <div className="mx-auto max-w-3xl px-6 pb-16 md:px-10">
            {ext.comparisonTable.caption && (
              <p className="mb-4 text-xs uppercase tracking-editorial text-ink/50">
                {ext.comparisonTable.caption}
              </p>
            )}
            <div className="overflow-x-auto rounded-sm border border-ink/10">
              <table className="w-full min-w-[500px] text-sm">
                <thead>
                  <tr className="border-b border-ink/10 bg-cream-dark">
                    {ext.comparisonTable.headers.map((h, i) => (
                      <th
                        key={i}
                        className="px-4 py-3 text-left text-xs uppercase tracking-editorial text-ink/60 font-medium"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ext.comparisonTable.rows.map((row, ri) => (
                    <tr
                      key={ri}
                      className={ri % 2 === 0 ? "bg-cream" : "bg-cream-light"}
                    >
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className="px-4 py-3 text-ink/80 leading-snug"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* SOURCE ARTICLE */}
      <section className="bg-cream border-t border-ink/10">
        <div className="mx-auto max-w-3xl px-6 py-10 md:px-10">
          <p className="text-xs uppercase tracking-editorial text-ink/50 mb-4">
            From the article
          </p>
          <Link
            href={`/blog/${faq.blogSlug}`}
            className="group block rounded-sm border border-ink/10 p-5 transition-colors hover:border-gold"
          >
            <h3 className="font-serif text-lg leading-snug text-ink group-hover:text-gold transition-colors md:text-xl">
              {faq.blogTitle}
            </h3>
            {blogExcerpt && (
              <p className="mt-2 text-sm leading-relaxed text-ink/60 line-clamp-2">
                {blogExcerpt}
              </p>
            )}
            <span className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-editorial text-gold">
              Read full article →
            </span>
          </Link>
        </div>
      </section>

      {/* RELATED QUESTIONS */}
      {relatedFaqs.length > 0 && (
        <section className="bg-cream border-t border-ink/10">
          <div className="mx-auto max-w-3xl px-6 py-16 md:px-10">
            <p className="eyebrow">Related Questions</p>
            <span className="gold-rule mt-4" />
            <h2 className="mt-6 font-serif text-2xl leading-tight text-ink md:text-3xl">
              People also ask
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {relatedFaqs.map((q) => (
                <Link
                  key={q.slug}
                  href={`/faq/${q.slug}`}
                  className="group block rounded-sm border border-ink/10 p-5 transition-colors hover:border-gold"
                >
                  <h3 className="font-serif text-base leading-snug text-ink md:text-lg">
                    {q.question}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink/55">
                    {q.answer}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-editorial text-gold group-hover:text-ink transition-colors">
                    Read answer <span aria-hidden>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SOURCES */}
      {ext?.sources && ext.sources.length > 0 && (
        <section className="bg-cream border-t border-ink/10">
          <div className="mx-auto max-w-3xl px-6 py-10 md:px-10">
            <p className="eyebrow mb-5">Sources</p>
            <ul className="space-y-3">
              {ext.sources.map((src, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-ink/40 mt-0.5">•</span>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink/70 hover:text-gold underline underline-offset-2 transition-colors"
                  >
                    {src.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* RELATED ARTICLES */}
      {relatedArticles.length > 0 && (
        <section className="bg-cream border-t border-ink/10">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <p className="eyebrow">Related Articles</p>
            <span className="gold-rule mt-4" />
            <h2 className="mt-6 font-serif text-3xl text-ink md:text-4xl">
              More from the Journal
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((p) => (
                <BlogCard
                  key={p.slug}
                  slug={p.slug}
                  title={p.title}
                  excerpt={p.excerpt}
                  image={p.image}
                  category={p.category}
                  readingTime={p.readingTime}
                  date={p.date}
                  isNew={p.isNew}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
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
    </>
  );
}
