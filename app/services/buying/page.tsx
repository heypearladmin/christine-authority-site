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

const PAGE_URL = `${SITE.url}/services/buying`;

export const metadata: Metadata = {
  title: "Buying a Home in Seattle",
  description:
    "A complete guide to buying a home in Seattle — pre-approval, finding the right home, making an offer, inspections, and closing. Strategic guidance from Christine Andreasen.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Buying a Home in Seattle | Christine Andreasen",
    description:
      "A complete guide to buying a home in Seattle — pre-approval, finding the right home, making an offer, inspections, and closing.",
    type: "website",
    images: [{ url: "/website-service-buying.webp", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image", images: ["/website-service-buying.webp"] },
};

const FAQS = [
  {
    question: "How long does it take to buy a home in Seattle?",
    answer:
      "From pre-approval to closing, most Seattle buyers should plan for 60 to 90 days once they begin actively touring homes — less if you're well-prepared and decisive in a competitive situation, longer if you're being selective or searching in a constrained inventory segment.",
  },
  {
    question: "How much do I need for a down payment in Seattle?",
    answer:
      "Conventional financing typically requires 10 to 20 percent down, though options exist with less. At the luxury tier, many sellers expect 20 percent or more, and cash offers are common above $3 million. See our full guide on what you need to buy a home in Seattle in 2026 for the complete breakdown by price tier.",
  },
  {
    question: "Should I get pre-approved before I start looking at homes?",
    answer:
      "Yes — pre-approval should be the first step, not an afterthought. In Seattle's competitive segments, an offer without a strong pre-approval letter is rarely taken seriously, and knowing your real budget before you fall in love with a home prevents wasted time and disappointment.",
  },
  {
    question: "Do I need a buyer's agent to purchase a home in Seattle?",
    answer:
      "You are not legally required to have one, but representation matters — a buyer's agent negotiates on your behalf, manages the inspection and financing timeline, and in many cases has access to off-market inventory you would never find searching on your own.",
  },
];

export default function BuyingPillarPage() {
  return (
    <>
      <JsonLd
        schema={[
          localBusinessSchema(),
          webPageSchema({
            name: "Buying a Home in Seattle",
            url: PAGE_URL,
            description:
              "A complete guide to buying a home in Seattle — pre-approval, finding the right home, making an offer, inspections, and closing.",
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Services", url: `${SITE.url}/services` },
            { name: "Buying", url: PAGE_URL },
          ]),
          serviceSchema({
            name: "Home Buying Representation",
            url: PAGE_URL,
            description:
              "Strategic guidance for buyers at every stage of the Seattle home buying process, from pre-approval through closing.",
            category: "Real Estate Buyer Representation",
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
          <p className="eyebrow mt-10">Buying in Seattle</p>
          <span className="gold-rule mt-4" />
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-5xl lg:text-6xl">
            Buying a Home in Seattle
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 md:text-lg">
            A clear, step-by-step guide to the Seattle home buying process — from your first
            conversation with a lender to the day you get the keys.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="relative aspect-[16/9] w-full overflow-hidden image-fallback">
            <Image
              src="/website-service-buying.webp"
              alt="Seattle luxury home interior with floor-to-ceiling windows, representing the home buying process"
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
              Buying a home in Seattle involves more steps — and more nuance — than most buyers
              anticipate. This guide walks through each stage of the process, with links to the
              detailed resources that matter most at each step.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-step body */}
      <article className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20">
          <div className="editorial-prose">
            <section id="pre-approval" className="scroll-mt-24">
              <h2>Getting Pre-Approved</h2>
              <p>
                Pre-approval should be the first real step in your search, not something you
                arrange after you've found a home. A lender reviews your income, credit, and
                assets and issues a letter stating what you're qualified to borrow — which tells
                you your real budget and signals to sellers that you're a serious, capable buyer.
                In Seattle's more competitive price bands, an offer without strong pre-approval is
                rarely taken seriously.
              </p>
              <p>
                <strong>How much you'll actually need</strong> — for a down payment, closing
                costs, and reserves — varies significantly by price tier.{" "}
                <Link href="/blog/how-much-to-buy-home-seattle-2026" className="text-gold hover:text-ink underline underline-offset-2 transition-colors">
                  Read the full breakdown of what it takes to buy a home in Seattle in 2026 →
                </Link>
              </p>
            </section>

            <section id="finding-a-home" className="scroll-mt-24">
              <h2>Finding the Right Home</h2>
              <p>
                Once financing is arranged, the search itself should be approached on two tracks:
                active monitoring of public listings, and awareness that a meaningful share of
                Seattle's best inventory — particularly at the upper end — never reaches the MLS
                at all. Buyers working with an advisor who has local relationships routinely see
                homes before they're publicly listed.
              </p>
              <p>
                <Link href="/blog/off-market-homes-seattle" className="text-gold hover:text-ink underline underline-offset-2 transition-colors">
                  Learn how off-market properties work in Seattle and how to access them →
                </Link>
              </p>
            </section>

            <section className="scroll-mt-24">
              <h2>Making an Offer</h2>
              <p>
                A strong offer is about more than price — clean terms, an appropriate earnest
                money deposit, and a realistic timeline all shape how a seller evaluates
                competing offers. Multiple-offer situations remain common in Seattle's best
                neighborhoods, and winning one requires strategy, not just the highest number.
              </p>
              <p>
                <Link href="/blog/how-to-win-multiple-offers-seattle" className="text-gold hover:text-ink underline underline-offset-2 transition-colors">
                  Read our buyer's strategy guide for winning multiple-offer situations →
                </Link>
              </p>
            </section>

            <section id="inspections" className="scroll-mt-24">
              <h2>Home Inspections</h2>
              <p>
                A professional home inspection — typically scheduled within a few days of your
                offer being accepted — examines the home's structure, systems, and major
                components to surface issues that aren't visible during a showing. In Seattle,
                buyers commonly pair a general inspection with a sewer scope, given the age of
                housing stock in many established neighborhoods, and add specialized inspections
                (roof, structural, pest) when the general inspector flags a concern.
              </p>
              <p>
                What you do with the results is a negotiation, not an automatic walk-away: minor
                issues are often simply noted for future maintenance, while significant findings
                can lead to a price adjustment, a seller-funded repair, or in some cases a
                withdrawal from the contract within your inspection contingency period.
              </p>
            </section>

            <section id="closing" className="scroll-mt-24">
              <h2>Closing Costs and Closing Day</h2>
              <p>
                Buyers in Seattle typically pay 2 to 3 percent of the purchase price in closing
                costs — covering loan origination, title insurance, escrow fees, and prepaid
                items like property taxes and insurance. Closing day itself is largely
                administrative: final documents are signed, funds are transferred through escrow,
                and once the deed is recorded, the home is officially yours.
              </p>
              <p>
                <Link href="/blog/closing-costs-seattle-real-estate" className="text-gold hover:text-ink underline underline-offset-2 transition-colors">
                  See the full breakdown of what buyers and sellers pay at closing in Seattle →
                </Link>
              </p>
            </section>

            <section className="scroll-mt-24">
              <h2>New Construction</h2>
              <p>
                New construction offers warranties and modern systems that existing homes can't
                match, but it comes with its own trade-offs — location, lot size, and character
                chief among them. Understanding when new construction is genuinely the smarter
                buy, and when an established home offers better long-term value, is worth
                clarifying before you narrow your search.
              </p>
              <p>
                <Link href="/blog/new-construction-vs-existing-homes-seattle" className="text-gold hover:text-ink underline underline-offset-2 transition-colors">
                  Compare new construction and existing homes in Seattle's 2026 market →
                </Link>
              </p>
            </section>

            <section className="scroll-mt-24">
              <h2>First-Time Buyers and Luxury Buyers</h2>
              <p>
                The buying process looks meaningfully different depending on where you're
                entering the market. First-time buyers face financing and search dynamics that
                seasoned buyers have already navigated, while buyers moving into the $1M+ tier for
                the first time encounter a different competitive landscape — and buyers above $3M
                operate in a market defined by off-market access and discretion.
              </p>
              <p>
                <Link href="/blog/first-time-luxury-buyer-seattle-guide" className="text-gold hover:text-ink underline underline-offset-2 transition-colors">
                  Read our guide for first-time buyers entering the $1M–$3M tier →
                </Link>
                {" "}&middot;{" "}
                <Link href="/services/luxury-home-buying" className="text-gold hover:text-ink underline underline-offset-2 transition-colors">
                  Learn about Christine's luxury home buying representation →
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
            Common buying questions, answered.
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
              <p className="eyebrow text-gold">Ready to start?</p>
              <span className="mt-4 inline-block h-px w-14 bg-gold" />
              <h3 className="mt-5 max-w-2xl font-serif text-3xl leading-tight md:text-4xl">
                Let&rsquo;s find your home.
              </h3>
            </div>
            <Link
              href="/schedule"
              className="inline-flex items-center bg-gold px-6 py-3 text-xs uppercase tracking-editorial text-ink transition-colors duration-300 hover:bg-cream"
            >
              Start Your Home Search
            </Link>
          </div>
        </div>
      </section>

      {/* Cross-link + explore more */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-3xl text-ink md:text-4xl">Also Selling a Home?</h2>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
            If you're buying your next home while selling your current one, our selling guide
            covers preparation, staging, pricing, and timing your sale alongside your purchase.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services/selling"
              className="inline-flex items-center border border-ink/20 px-5 py-2.5 text-xs uppercase tracking-editorial text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Selling a Home
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
