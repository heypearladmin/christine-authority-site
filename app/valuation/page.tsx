import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema, breadcrumbSchema, webPageSchema, SITE } from "@/lib/seo/schema";
import ValuationForm from "./ValuationForm";

export const metadata: Metadata = {
  title: "What's My Home Worth?",
  description:
    "Get an honest, expert home value estimate for your Seattle property from Christine Andreasen — not an automated guess.",
  alternates: { canonical: "https://www.christineandreasen.com/valuation" },
};

export default function ValuationPage() {
  return (
    <>
      <JsonLd
        schema={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Home Valuation", url: `${SITE.url}/valuation` },
          ]),
          webPageSchema({
            name: "What's My Home Worth? | Seattle Home Valuation",
            url: `${SITE.url}/valuation`,
            description:
              "Get an honest, expert home value estimate for your Seattle property from Christine Andreasen — not an automated guess.",
            speakableSelectors: ["h1", ".border-l-2.border-gold p"],
          }),
        ]}
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 pb-12 pt-20 md:px-10 md:pt-28">
          <p className="eyebrow">Seller Resources</p>
          <span className="gold-rule mt-4" />
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-5xl lg:text-6xl">
            What&rsquo;s Your Seattle Home Really Worth?
          </h1>
          <div className="mt-6 max-w-2xl border-l-2 border-gold pl-6">
            <p className="text-base leading-relaxed text-ink/80 md:text-lg">
              Automated estimates miss the details that actually move value in Seattle — views,
              lot orientation, renovation quality, and how your specific block compares to what&rsquo;s
              truly selling nearby. Share a few details below and Christine will follow up
              personally with an honest, market-informed opinion of value.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 pb-20 md:px-10 md:pb-28">
          <ValuationForm />
        </div>
      </section>
    </>
  );
}
