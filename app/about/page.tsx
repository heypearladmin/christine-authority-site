import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Christine Andreasen",
  description:
    "Nearly three decades guiding Seattle's most discerning buyers and sellers. Christine Andreasen is the founder of Christine & Company, a luxury real estate practice powered by eXp Realty.",
};

const PILLARS = [
  {
    title: "Local Expertise",
    copy: "Three decades of Seattle market cycles, neighborhood knowledge, and off-market relationships.",
  },
  {
    title: "Editorial Presentation",
    copy: "Every listing prepared, staged, and photographed to the standard of a luxury publication.",
  },
  {
    title: "Strategic Negotiation",
    copy: "Pricing and negotiation built on data — not guesswork — to protect outcome and timing.",
  },
  {
    title: "Concierge Standard",
    copy: "Coordinated prep, media, marketing, and post-close support, all under one calm roof.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">About Christine</p>
            <span className="gold-rule mt-4" />
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-ink md:text-6xl">
              A quieter standard for Seattle real estate.
            </h1>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/80 md:text-lg">
              <p>
                Christine Andreasen has spent nearly three decades guiding
                buyers and sellers through Seattle's most consequential
                transactions. Her practice — Christine &amp; Company, powered
                by eXp Realty — was built on a simple conviction: that real
                estate should feel considered, calm, and decisively in the
                client's favor.
              </p>
              <p>
                She works at the intersection of editorial presentation and
                rigorous strategy. Listings are prepared with the care of a
                magazine shoot. Pricing is built on data and judgment, not
                guesswork. And every conversation begins where it should — with
                lifestyle and outcome, not transaction mechanics.
              </p>
              <p>
                The result is a quieter way of working that produces better
                outcomes for sellers and clearer decisions for buyers, across
                Seattle and the surrounding waterfront communities.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full image-fallback">
              <Image
                src="/headshot.jpg"
                alt="Portrait of Christine Andreasen, Seattle Real Estate Advisor"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-editorial text-ink/60">
              Christine Andreasen &middot; Founder, Christine &amp; Company
            </p>
          </div>
        </div>
      </section>

      {/* Approach pillars */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <p className="eyebrow text-gold">The Approach</p>
          <span className="mt-4 inline-block h-px w-14 bg-gold" />
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
            Four standards that shape every engagement.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <div key={p.title} className="border-t border-cream/15 pt-6">
                <div className="text-xs uppercase tracking-editorial text-gold">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-serif text-xl text-cream md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-cream/75">
                  {p.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Background / story */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:px-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">The Practice</p>
            <span className="gold-rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-ink md:text-5xl">
              Christine &amp; Company.
            </h2>
            <p className="mt-6 text-sm uppercase tracking-editorial text-ink/60">
              Powered by eXp Realty
            </p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink/80 lg:col-span-6 lg:col-start-7 md:text-lg">
            <p>
              Christine &amp; Company is a boutique practice operating within
              eXp Realty's national platform. The combination is intentional —
              the editorial standards and personal relationships of a small
              firm, paired with the technology, reach, and resources of one of
              the country's largest brokerages.
            </p>
            <p>
              Clients work directly with Christine on strategy, pricing, and
              key decisions, supported by a vetted network of stagers,
              photographers, contractors, and lenders refined over decades of
              practice.
            </p>
            <p>
              The footprint is Seattle and surrounding waterfront communities:
              Magnolia, Queen Anne, Ballard, Capitol Hill, Mercer Island,
              Bellevue, West Seattle, Vashon Island, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-dark">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="eyebrow">Begin the conversation</p>
              <span className="gold-rule mt-4" />
              <h3 className="mt-5 font-serif text-3xl leading-tight text-ink md:text-4xl">
                Quiet, no-pressure conversations welcome.
              </h3>
            </div>
            <Link
              href="/schedule"
              className="inline-flex items-center bg-ink px-6 py-3 text-xs uppercase tracking-editorial text-cream transition-colors duration-300 hover:bg-gold"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
