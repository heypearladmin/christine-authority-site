import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import { JsonLd } from "@/components/seo/JsonLd";
import { webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Seattle Luxury Real Estate Services",
  description:
    "Expert luxury real estate services — buying, selling, relocation, waterfront, and investment guidance across Seattle and the Eastside. Christine Andreasen.",
  alternates: { canonical: "https://www.christineandreasen.com/services" },
  openGraph: {
    title: "Seattle Luxury Real Estate Services | Christine Andreasen",
    description:
      "Expert luxury real estate services — buying, selling, relocation, waterfront, and investment guidance across Seattle and the Eastside.",
    type: "website",
  },
};

export default function ServicesPage() {
  const pageUrl = `${SITE.url}/services`;

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            name: "Seattle Luxury Real Estate Services",
            url: pageUrl,
            description:
              "Expert luxury real estate services across Seattle and the Eastside. Christine Andreasen | Christine & Company.",
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Services", url: pageUrl },
          ]),
        ]}
      />

      {/* Header */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 pb-12 pt-20 md:px-10 md:pt-28">
          <p className="eyebrow">Christine &amp; Company</p>
          <span className="gold-rule mt-4" />
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-5xl lg:text-6xl">
            Luxury Real Estate Services
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 md:text-lg">
            From waterfront estates to strategic investment acquisitions, Christine provides
            comprehensive advisory services for Seattle area buyers and sellers at every stage
            of the luxury residential market.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden image-fallback">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 380px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5">
                  <p className="eyebrow">Expert Representation</p>
                  <h2 className="mt-2 font-serif text-2xl text-ink transition-colors group-hover:text-gold">
                    {s.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/70">
                    {s.intro}
                  </p>
                  <span className="mt-4 inline-block text-xs uppercase tracking-editorial text-gold transition-colors group-hover:text-ink">
                    Learn More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="eyebrow text-gold">Ready to talk?</p>
              <span className="mt-4 inline-block h-px w-14 bg-gold" />
              <h3 className="mt-5 max-w-2xl font-serif text-3xl leading-tight md:text-4xl">
                Every successful transaction starts with a conversation.
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
