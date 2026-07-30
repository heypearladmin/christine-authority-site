import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  webPageSchema,
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
  SITE,
} from "@/lib/seo/schema";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const page = getServiceBySlug(params.slug);
  if (!page) return { title: "Service not found" };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `https://christineandreasen.com/services/${params.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: "website",
      images: [{ url: page.image, width: 1600, height: 900, alt: page.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [page.image],
    },
  };
}

export default function ServicePage({ params }: { params: Params }) {
  const page = getServiceBySlug(params.slug);
  if (!page) notFound();

  const pageUrl = `${SITE.url}/services/${page.slug}`;

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            name: page.title,
            url: pageUrl,
            description: page.metaDescription,
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Services", url: `${SITE.url}/services` },
            { name: page.name, url: pageUrl },
          ]),
          serviceSchema({
            name: page.name,
            url: pageUrl,
            description: page.metaDescription,
            category: "Luxury Real Estate",
          }),
          faqPageSchema(page.faqs),
        ]}
      />

      {/* Header */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 pb-12 pt-20 md:px-10 md:pt-28">
          <Link
            href="/services"
            className="text-xs uppercase tracking-editorial text-ink/60 transition-colors hover:text-gold"
          >
            &larr; Services
          </Link>
          <p className="eyebrow mt-10">Expert Representation</p>
          <span className="gold-rule mt-4" />
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-5xl lg:text-6xl">
            {page.title}
          </h1>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="relative aspect-[16/9] w-full overflow-hidden image-fallback">
            <Image
              src={page.image}
              alt={page.imageAlt}
              fill
              priority
              sizes="(min-width: 1280px) 1100px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 pt-16 md:px-10">
          <div className="border-l-2 border-gold pl-6">
            <p className="text-xs uppercase tracking-editorial text-gold">
              Christine &amp; Company
            </p>
            <p className="mt-3 font-serif text-xl leading-snug text-ink md:text-2xl">
              {page.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20">
          <div className="editorial-prose">
            {page.sections.map((section) => (
              <section key={section.heading} className="scroll-mt-24">
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
                  return <p key={i}>{para}</p>;
                })}
              </section>
            ))}
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="eyebrow text-gold">Let&rsquo;s talk</p>
              <span className="mt-4 inline-block h-px w-14 bg-gold" />
              <h3 className="mt-5 max-w-2xl font-serif text-3xl leading-tight md:text-4xl">
                Start with a private, no-pressure consultation.
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

      {/* Explore more */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-3xl text-ink md:text-4xl">
              More from Christine
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center border border-ink/20 px-5 py-2.5 text-xs uppercase tracking-editorial text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Real Estate Journal
            </Link>
            <Link
              href="/neighborhoods"
              className="inline-flex items-center border border-ink/20 px-5 py-2.5 text-xs uppercase tracking-editorial text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Neighborhood Guides
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border border-ink/20 px-5 py-2.5 text-xs uppercase tracking-editorial text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Contact Christine
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
