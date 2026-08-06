import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  personSchema,
  travisPersonSchema,
  breadcrumbSchema,
  webPageSchema,
  SITE,
} from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "About Christine Andreasen & Travis Foxx",
  description:
    "Meet Christine Andreasen and Travis Foxx — a strategic luxury real estate partnership with 60+ combined years across Seattle residential, investment, and complex property decisions.",
  openGraph: { images: [{ url: "/headshot.webp", width: 800, height: 1000 }] },
  twitter: { images: ["/headshot.webp"] },
};

const PILLARS = [
  {
    title: "Residential Luxury",
    copy: "Christine's three decades of Seattle market cycles, editorial presentation, and off-market relationships.",
  },
  {
    title: "Investment Depth",
    copy: "Travis's 30+ years evaluating residential, commercial, multi-family, and complex property strategy.",
  },
  {
    title: "Strategic Negotiation",
    copy: "Pricing and negotiation built on data and judgment — designed to protect outcome and timing.",
  },
  {
    title: "Concierge Standard",
    copy: "Coordinated prep, media, marketing, and post-close support, all under one calm roof.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        schema={[
          personSchema(),
          travisPersonSchema(),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "About", url: `${SITE.url}/about` },
          ]),
          webPageSchema({
            name: "About Christine Andreasen & Travis Foxx | Christine & Company",
            url: `${SITE.url}/about`,
            description:
              "Meet Christine Andreasen and Travis Foxx — a strategic luxury real estate partnership with 60+ combined years across Seattle residential, investment, and complex property decisions.",
          }),
        ]}
      />

      {/* Page header */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 pb-12 pt-20 md:px-10 md:pt-28">
          <p className="eyebrow">The Partnership</p>
          <span className="gold-rule mt-4" />
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-ink md:text-6xl">
            Strategic luxury representation — residential, investment, and beyond.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 md:text-lg">
            Together, Christine and Travis offer a rare caliber of representation for the luxury seller: the union of visionary marketing, refined brand positioning, deep financial intelligence, and seasoned negotiation. For sellers who expect more than service — for those who expect stewardship, strategy, and standout results — their partnership is both distinctive and exceptionally effective.
          </p>
        </div>
      </section>

      {/* Christine */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full image-fallback">
              <Image
                src="/headshot.webp"
                alt="Portrait of Christine Andreasen, Seattle Luxury Real Estate Advisor"
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

          <div className="lg:col-span-6 lg:col-start-7 lg:flex lg:flex-col lg:justify-center">
            <p className="eyebrow">Christine Andreasen</p>
            <span className="gold-rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-5xl">
              A commanding presence in Seattle luxury real estate.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/80 md:text-lg">
              <p>
                Christine Andreasen is the founder of Christine &amp; Company — a brand synonymous with excellence, influence, and elevated results. With a career spanning more than two decades, Christine has built a reputation for representing exceptional properties with a rare blend of strategic precision, market sophistication, and magnetic client service.
              </p>
              <p>
                Licensed since 1996, she first rose to prominence coaching and training top-producing agents across the country before returning her focus to the art of buying and selling homes at the highest level. She is known not only for the results she delivers, but for the experience she creates: polished, powerful, and deeply personal.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-ink/10 pt-8 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-editorial text-gold mb-3">Accolades</p>
                <ul className="space-y-2 text-sm leading-relaxed text-ink/70">
                  <li>Washington&rsquo;s Top 100 Most Influential Agents</li>
                  <li>Forbes Top 500 Agents Nationwide</li>
                  <li>Multiple ICON Award Recipient</li>
                  <li>Top 1% of Agents Nationwide</li>
                  <li>Keynote Speaker — 20 years</li>
                  <li>Best-selling Author</li>
                  <li>National Real Estate Coach</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travis */}
      <section className="bg-cream border-t border-ink/5">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-6 lg:flex lg:flex-col lg:justify-center">
            <p className="eyebrow">Travis Foxx</p>
            <span className="gold-rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-5xl">
              Financial sophistication. Operational mastery. 30+ years of trusted leadership.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/80 md:text-lg">
              <p>
                Travis Foxx brings more than 30 years of real estate expertise shaped by a career that spans residential, commercial, investment, and complex asset sales. He founded his first real estate company in Portland in 1996, advising clients on the acquisition, management, and disposition of commercial real estate before expanding into multifamily, residential investment, and receivership properties.
              </p>
              <p>
                His depth of experience includes an instrumental role in the SEC receivership of Dargey Development, as well as the successful sale of several notable assets ranging from luxury residences to major development sites. Today, Travis applies that same level of discernment, financial sophistication, and operational mastery to the luxury market — offering sellers a calm, highly tailored, and exceptionally informed experience.
              </p>
              <p>
                His presence brings a quiet strength to every transaction: measured, strategic, and built on decades of trusted leadership.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-ink/70">
              <a href="tel:+12069920066" className="hover:text-gold transition-colors">
                (206) 992-0066
              </a>
              <a href="mailto:travis.foxx@exprealty.com" className="hover:text-gold transition-colors">
                travis.foxx@exprealty.com
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[4/5] w-full image-fallback">
              <Image
                src="/travis-headshot.webp"
                alt="Portrait of Travis Foxx, Strategic Real Estate Advisor"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-editorial text-ink/60">
              Travis Foxx &middot; Strategic Real Estate Advisor
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

      {/* The Practice */}
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
              Christine &amp; Company is a boutique advisory practice operating within eXp Realty&rsquo;s national platform. Christine and Travis work together as a strategic partnership — combining Christine&rsquo;s residential luxury expertise with Travis&rsquo;s investment and complex transaction depth to provide the most comprehensive advisory capability in the Seattle luxury market.
            </p>
            <p>
              Clients work directly with Christine and Travis on strategy, pricing, and key decisions, supported by a vetted network of stagers, photographers, contractors, and lenders refined over decades of combined practice.
            </p>
            <p>
              The footprint covers Seattle and surrounding waterfront and Eastside communities: Magnolia, Queen Anne, Ballard, Mercer Island, Bellevue, Medina, Kirkland, West Seattle, Edmonds, and beyond.
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
