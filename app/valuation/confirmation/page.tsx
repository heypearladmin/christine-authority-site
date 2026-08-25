import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, SITE } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Valuation Request Received",
  description: "Your home valuation request has been received. Christine will follow up shortly.",
  robots: { index: false, follow: false },
};

export default function ValuationConfirmationPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Home Valuation", url: `${SITE.url}/valuation` },
          { name: "Request Received", url: `${SITE.url}/valuation/confirmation` },
        ])}
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow">Request Received</p>
          <span className="gold-rule mt-4" />
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-ink md:text-6xl">
            Thank you.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg">
            Christine has received your property details and will follow up personally with an
            honest opinion of value.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg">
            Prefer to reach her directly?{" "}
            <a href="tel:+12063538787" className="text-ink underline decoration-gold underline-offset-4">
              (206) 353-8787
            </a>
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center bg-ink px-6 py-3 text-xs uppercase tracking-editorial text-cream transition-colors duration-300 hover:bg-gold"
            >
              Back to home
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center border border-ink/30 px-6 py-3 text-xs uppercase tracking-editorial text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Read the insights
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
