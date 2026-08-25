import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  webPageSchema,
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
  localBusinessSchema,
  SITE,
} from "@/lib/seo/schema";

const PAGE_URL = `${SITE.url}/services/selling`;

export const metadata: Metadata = {
  title: "Selling a Home in Seattle",
  description:
    "A complete guide to selling a home in Seattle — home value, preparation, staging, pricing, marketing, offers, and closing. Strategic guidance from Christine Andreasen.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Selling a Home in Seattle | Christine Andreasen",
    description:
      "A complete guide to selling a home in Seattle — home value, preparation, staging, pricing, marketing, offers, and closing.",
    type: "website",
    images: [{ url: "/website-service-selling.webp", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image", images: ["/website-service-selling.webp"] },
};

const FAQS = [
  {
    question: "How do I find out what my Seattle home is worth?",
    answer:
      "Online valuation tools (AVMs) provide a rough starting estimate, but they don't see your view, your renovation quality, or how your specific block compares to others nearby. A comparative market analysis from a local advisor — grounded in true comparables, not just an algorithm — is the only reliable basis for a listing decision.",
  },
  {
    question: "How much does it cost to prepare and stage a home before selling?",
    answer:
      "Professional staging in Seattle typically ranges from $5,000 to $25,000 depending on home size and how much furniture is needed. Basic preparation — deep cleaning, decluttering, minor repairs — costs far less and should happen regardless of whether you stage further.",
  },
  {
    question: "How long does it take to sell a home in Seattle?",
    answer:
      "Correctly priced homes in Seattle's most competitive neighborhoods often go under contract within 7 to 30 days. Homes that sit longer than 30 days without a serious offer are almost always facing a pricing issue rather than a market issue.",
  },
  {
    question: "Do I need to be present at closing when I sell my home?",
    answer:
      "In Washington, sellers typically sign closing documents in advance through escrow rather than attending a joint closing appointment with the buyer. Your agent and escrow officer coordinate the signing and fund disbursement so the process is straightforward on your end.",
  },
];

export default function SellingPillarPage() {
  return (
    <>
      <JsonLd
        schema={[
          localBusinessSchema(),
          webPageSchema({
            name: "Selling a Home in Seattle",
            url: PAGE_URL,
            description:
              "A complete guide to selling a home in Seattle — home value, preparation, staging, pricing, marketing, offers, and closing.",
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Services", url: `${SITE.url}/services` },
            { name: "Selling", url: PAGE_URL },
          ]),
          serviceSchema({
            name: "Home Selling Representation",
            url: PAGE_URL,
            description:
              "Strategic guidance for sellers at every stage of the Seattle home selling process, from valuation through closing.",
            category: "Real Estate Seller Representation",
          }),
          faqPageSchema(FAQS),
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
          <nav
            aria-label="Breadcrumb"
            className="mt-3 flex flex-wrap items-center gap-x-2 text-xs uppercase tracking-editorial text-ink/50"
          >
            <Link href="/" className="transition-colors hover:text-gold">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/services" className="transition-colors hover:text-gold">Services</Link>
            <span aria-hidden>/</span>
            <span>Selling</span>
          </nav>
          <p className="eyebrow mt-10">Selling in Seattle</p>
          <span className="gold-rule mt-4" />
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-5xl lg:text-6xl">
            Selling a Home in Seattle
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 md:text-lg">
            A clear, step-by-step guide to selling your Seattle home — from your first valuation
            conversation to the day the sale closes.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="relative aspect-[16/9] w-full overflow-hidden image-fallback">
            <Image
              src="/website-service-selling.webp"
              alt="Beautifully staged Seattle home living room, representing the home selling process"
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
        <div id="guide" className="mx-auto max-w-3xl scroll-mt-24 px-6 pt-16 md:px-10">
          <div className="border-l-2 border-gold pl-6">
            <p className="text-xs uppercase tracking-editorial text-gold">
              Christine &amp; Company
            </p>
            <p className="mt-3 font-serif text-xl leading-snug text-ink md:text-2xl">
              Selling a home in Seattle is a process where preparation and strategy determine the
              outcome more than market conditions do. This guide walks through each stage — with
              links to the detailed resources that matter most at each step.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-step body */}
      <article className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20">
          <div className="editorial-prose">
            <section className="scroll-mt-24">
              <h2>What&rsquo;s My Home Worth?</h2>
              <p>
                Every sale starts with an honest valuation. Automated estimates from sites like
                Zillow are a useful starting reference, but they can't account for your view,
                your renovation quality, or how your specific block compares to what's actually
                selling nearby — which is exactly why a real comparative market analysis matters
                before you set an asking price.
              </p>
              <p>
                <Link href="/blog/ai-vs-appraisals-seattle" className="text-gold hover:text-ink underline underline-offset-2 transition-colors">
                  Read how AI valuations compare to real appraisals in Seattle →
                </Link>
              </p>
            </section>

            <section className="scroll-mt-24">
              <h2>Preparing Your Home for Sale</h2>
              <p>
                The 30 days before listing are where outcomes are made or missed. A disciplined,
                room-by-room preparation process — addressing deferred maintenance, deep cleaning,
                and decluttering — is what separates homes that sell at premium prices from homes
                that sit on the market.
              </p>
              <p>
                <Link href="/blog/prepare-home-to-sell-seattle" className="text-gold hover:text-ink underline underline-offset-2 transition-colors">
                  Get the full 30-day, room-by-room preparation checklist →
                </Link>
              </p>
            </section>

            <section className="scroll-mt-24">
              <h2>Home Staging</h2>
              <p>
                Staging isn't decoration — it's a strategic process that aligns a home's
                architecture and lifestyle appeal with what buyers are actually looking for.
                Professionally staged homes consistently sell faster and for more than comparable
                unstaged homes, particularly at the luxury tier where presentation is expected,
                not optional.
              </p>
              <p>
                <Link href="/blog/luxury-staging-seattle-tips" className="text-gold hover:text-ink underline underline-offset-2 transition-colors">
                  Read our luxury staging tips for Seattle homes →
                </Link>
              </p>
            </section>

            <section className="scroll-mt-24">
              <h2>Pricing Your Home</h2>
              <p>
                Pricing is not a formula — it's a strategy. The sellers who achieve the strongest
                outcomes price with precision from day one, using true comparables rather than
                optimism. Overpricing is particularly costly: it burns the critical first-two-week
                window when buyer interest is highest, and price reductions afterward are read by
                the market as a signal of weakness.
              </p>
              <p>
                <Link href="/blog/how-to-price-seattle-home" className="text-gold hover:text-ink underline underline-offset-2 transition-colors">
                  Learn how to price your Seattle home to sell — not just to list →
                </Link>
              </p>
            </section>

            <section id="marketing" className="scroll-mt-24">
              <h2>Marketing Your Home</h2>
              <p>
                Effective marketing extends well beyond an MLS listing. Professional photography
                and video, a compelling written narrative, targeted digital promotion, and broker
                network outreach all play a role in reaching the right buyers — and at the luxury
                tier, private outreach to qualified buyer networks often matters more than public
                exposure. Christine builds a marketing plan specific to each home and each price
                tier, not a one-size-fits-all package.
              </p>
            </section>

            <section id="understanding-offers" className="scroll-mt-24">
              <h2>Understanding and Negotiating Offers</h2>
              <p>
                An offer is more than its price — financing type, contingencies, proposed timeline,
                and earnest money all affect how much risk and certainty it actually carries. A
                cash offer at a slightly lower price is often stronger than a financed offer at a
                higher one, once financing risk and appraisal contingencies are factored in.
              </p>
              <p id="negotiating">
                Negotiation doesn't end when an offer is accepted — inspection findings, appraisal
                gaps, and financing conditions frequently reopen the conversation before closing.
                Having an advisor who negotiates these moments calmly and strategically, rather
                than reactively, protects both your price and your timeline.
              </p>
            </section>

            <section id="inspections" className="scroll-mt-24">
              <h2>Home Inspections</h2>
              <p>
                Buyers will almost always inspect the home during their contingency period, and
                many sellers choose to commission their own pre-listing inspection to identify and
                address issues before they become negotiating leverage for the buyer. Disclosing
                known issues upfront, rather than letting a buyer's inspector discover them,
                generally produces a smoother transaction and preserves buyer trust through
                closing.
              </p>
            </section>

            <section id="closing" className="scroll-mt-24">
              <h2>Closing the Sale</h2>
              <p>
                Sellers in Seattle typically pay real estate commissions, Washington's Real Estate
                Excise Tax, and prorated costs at closing — commonly totaling 6 to 8 percent of
                the sale price. Once financing contingencies clear and any final walk-through is
                complete, documents are signed through escrow and funds are disbursed upon
                recording.
              </p>
              <p>
                <Link href="/blog/closing-costs-seattle-real-estate" className="text-gold hover:text-ink underline underline-offset-2 transition-colors">
                  See the full breakdown of what buyers and sellers pay at closing in Seattle →
                </Link>
              </p>
            </section>

            <section className="scroll-mt-24">
              <h2>Luxury Home Selling</h2>
              <p>
                Selling above $2 million involves a different buyer pool, different marketing
                expectations, and a pricing process with fewer true comparables to rely on. The
                margin between a good outcome and a great one in this segment is almost always a
                function of strategy and representation.
              </p>
              <p>
                <Link href="/services/luxury-home-selling" className="text-gold hover:text-ink underline underline-offset-2 transition-colors">
                  Learn about Christine's luxury home selling representation →
                </Link>
              </p>
            </section>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="border-t border-ink/10 bg-cream-light">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20">
          <p className="eyebrow">Frequently Asked Questions</p>
          <span className="gold-rule mt-4" />
          <h2 className="mt-6 font-serif text-3xl leading-[1.1] text-ink md:text-4xl">
            Common selling questions, answered.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FAQS.map((faq) => (
              <div key={faq.question} className="rounded-sm border border-ink/10 p-5">
                <h3 className="font-serif text-base leading-snug text-ink md:text-lg">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{faq.answer}</p>
              </div>
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
                Get your home value.
              </h3>
            </div>
            <Link
              href="/schedule"
              className="inline-flex items-center bg-gold px-6 py-3 text-xs uppercase tracking-editorial text-ink transition-colors duration-300 hover:bg-cream"
            >
              Let&rsquo;s Talk About Selling
            </Link>
          </div>
        </div>
      </section>

      {/* Cross-link + explore more */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-3xl text-ink md:text-4xl">Also Buying Your Next Home?</h2>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
            If you're selling your current home to buy your next one, our buying guide covers
            financing, timing, and how to structure your purchase alongside your sale.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services/buying"
              className="inline-flex items-center border border-ink/20 px-5 py-2.5 text-xs uppercase tracking-editorial text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Buying a Home
            </Link>
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
          </div>
        </div>
      </section>
    </>
  );
}
