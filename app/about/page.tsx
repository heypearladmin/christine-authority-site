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
  openGraph: { images: [{ url: "/og-default.jpg", width: 1200, height: 630 }] },
  twitter: { images: ["/og-default.jpg"] },
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
            Christine Andreasen and Travis Foxx bring together more than 60 years of combined experience — covering Seattle luxury residential, investment property, commercial assets, and complex high-value transactions.
          </p>
        </div>
      </section>

      {/* Christine */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full image-fallback">
              <Image
                src="/headshot.jpg"
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
              Residential luxury. Editorial standards. Nearly three decades of local expertise.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/80 md:text-lg">
              <p>
                Christine Andreasen is the founder of Christine &amp; Company and one of the most recognized real estate professionals in the Seattle area. She pledges to exceed expectations — delivering superior service and remarkable results in every transaction, for every client.
              </p>
              <p>
                Voted Best of Seattle for 14 consecutive years, recognized among the Top 100 influential agents, featured multiple times in Seattle Magazine, and listed in Forbes&rsquo; Top 500 twice — Christine&rsquo;s reputation is built on a career of exceptional outcomes. She works closely with each client to understand their goals and craft the most effective strategy to achieve them.
              </p>
              <p>
                Based in Seattle and serving Washington State comprehensively, Christine also brings global reach through exceptional partners across the world.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-ink/10 pt-8 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-editorial text-gold mb-3">Accolades</p>
                <ul className="space-y-2 text-sm leading-relaxed text-ink/70">
                  <li>Voted Best of Seattle — 14 consecutive years</li>
                  <li>Top 100 Influential Agents</li>
                  <li>Featured in Seattle Magazine</li>
                  <li>Forbes Top 500 — recognized twice</li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-editorial text-gold mb-3">Specialties</p>
                <ul className="space-y-2 text-sm leading-relaxed text-ink/70">
                  <li>Keynote Speaker — 20 years</li>
                  <li>Best-selling Author</li>
                  <li>National Real Estate Coach</li>
                  <li>Investment Strategy Expert</li>
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
              Investment depth. Complex strategy. 30+ years across every asset class.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/80 md:text-lg">
              <p>
                Travis Foxx is a veteran real estate professional with over 30 years of experience across residential, investment, commercial, and multi-family properties. He started his first real estate company in Portland in 1996, helping business finance clients with the acquisition, management, and sale of commercial properties — before expanding into multi-family, residential investments, and complex receivership transactions.
              </p>
              <p>
                Travis was instrumental in the SEC Receivership of Dargey Development, overseeing the sale of multiple related properties including a personal residence at $2.41M and Potala Village in Shoreline, sold to Trammel Crow for $11.5 million. That experience — evaluating assets under complexity and pressure — informs how he approaches every property decision today.
              </p>
              <p>
                He focuses on Seattle&rsquo;s North Coast — the corridor from Magnolia to Mukilteo — with deep specialization in the 98107, 98117, and 98177 zip codes and the Edmonds area, where he has lived for more than a decade. Travis is Christine&rsquo;s life partner and Corporate Controller at Christine &amp; Company.
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
                src="/travis-headshot.png"
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
