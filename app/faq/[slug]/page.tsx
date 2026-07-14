import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema, breadcrumbSchema, SITE } from "@/lib/seo/schema";
import { getAllFaqs, getFaqBySlug, getFaqsByBlogSlug } from "@/lib/faqs";

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
  };
}

export default function FaqPage({ params }: { params: Params }) {
  const faq = getFaqBySlug(params.slug);
  if (!faq) notFound();

  const others = getFaqsByBlogSlug(faq.blogSlug).filter(
    (f) => f.slug !== faq.slug
  );

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
            { name: faq.question, url: pageUrl },
          ]),
        ]}
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 pb-20 pt-20 md:px-10 md:pt-28">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-editorial text-ink/50">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/blog" className="hover:text-gold transition-colors">The Journal</Link>
            <span aria-hidden>/</span>
            <Link href={`/blog/${faq.blogSlug}`} className="hover:text-gold transition-colors line-clamp-1 max-w-[160px]">
              {faq.blogTitle}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink/35 line-clamp-1 max-w-[160px]">{faq.question}</span>
          </nav>

          <p className="eyebrow mt-10">{faq.blogCategory}</p>
          <span className="gold-rule mt-4" />

          <h1 className="mt-6 font-serif text-3xl leading-[1.1] text-ink md:text-4xl lg:text-5xl">
            {faq.question}
          </h1>

          {/* Answer */}
          <div className="mt-10 border-l-2 border-gold pl-6">
            <p className="text-xs uppercase tracking-editorial text-gold mb-3">Answer</p>
            <p className="font-serif text-xl leading-relaxed text-ink md:text-2xl">
              {faq.answer}
            </p>
          </div>

          {/* Source article link */}
          <div className="mt-10 border-t border-ink/10 pt-8">
            <p className="text-xs uppercase tracking-editorial text-ink/50 mb-3">From the article</p>
            <Link
              href={`/blog/${faq.blogSlug}`}
              className="font-serif text-lg text-ink hover:text-gold transition-colors"
            >
              {faq.blogTitle} →
            </Link>
          </div>

          {/* Other questions from this article */}
          {others.length > 0 && (
            <div className="mt-14">
              <p className="text-xs uppercase tracking-editorial text-ink/50 mb-6">
                Other questions from this article
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {others.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/faq/${other.slug}`}
                    className="group block rounded-sm border border-ink/10 p-5 transition-colors duration-200 hover:border-gold"
                  >
                    <h3 className="font-serif text-base leading-snug text-ink md:text-lg">
                      {other.question}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-editorial text-gold transition-colors group-hover:text-ink">
                      Read answer <span aria-hidden>→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

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
    </>
  );
}
