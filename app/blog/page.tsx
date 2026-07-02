import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/blogs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema, SITE } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "The Journal | Seattle Real Estate Insights",
  description:
    "Seattle real estate insights from Christine Andreasen — staging, neighborhoods, market strategy, and buyer/seller guides. Christine & Company | eXp Realty.",
  openGraph: {
    title: "The Journal | Seattle Real Estate Insights",
    description:
      "Editorial insights on Seattle's luxury real estate market from Christine Andreasen.",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: { images: ["/og-default.jpg"] },
};

export default function BlogIndexPage() {
  const [feature, ...rest] = blogPosts;

  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "The Journal", url: `${SITE.url}/blog` },
          ]),
          webPageSchema({
            name: "The Journal | Seattle Real Estate Insights",
            url: `${SITE.url}/blog`,
            description:
              "Seattle real estate insights from Christine Andreasen — staging, neighborhoods, market strategy, and buyer/seller guides. Christine & Company | eXp Realty.",
          }),
        ]}
      />
      {/* Header */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow">The Journal</p>
          <span className="gold-rule mt-4" />
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-ink md:text-6xl">
            Editorial insights from Seattle's high-end market.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 md:text-lg">
            A curated record of strategy, market commentary, and the quiet
            details that move outcomes — written for buyers, sellers, and
            owners weighing their next move in Seattle.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {feature && (
        <section className="border-y border-ink/10 bg-cream-light">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:px-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <a
                href={`/blog/${feature.slug}`}
                className="block overflow-hidden"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden image-fallback">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-editorial hover:scale-[1.03]"
                  />
                </div>
              </a>
            </div>
            <div className="flex flex-col justify-center lg:col-span-5">
              <div className="flex items-center gap-3 text-xs uppercase tracking-editorial text-gold">
                <span>Featured &middot; {feature.category}</span>
                {feature.isNew && (
                  <span className="bg-gold px-2.5 py-1 text-[10px] tracking-widest text-ink font-medium">New</span>
                )}
              </div>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-4xl">
                <a href={`/blog/${feature.slug}`} className="editorial-link">
                  {feature.title}
                </a>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/75">
                {feature.excerpt}
              </p>
              <a
                href={`/blog/${feature.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-editorial text-ink transition-colors hover:text-gold"
              >
                Read the article <span aria-hidden>&rarr;</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Article grid */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-3xl text-ink md:text-4xl">
              All articles
            </h2>
            <span className="text-xs uppercase tracking-editorial text-ink/50">
              {blogPosts.length} entries
            </span>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
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
    </>
  );
}
