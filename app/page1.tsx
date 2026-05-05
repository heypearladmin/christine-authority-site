import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Seattle Luxury Real Estate Advisor",
  description:
    "Christine Andreasen — Seattle's editorial real estate advisor. Strategic guidance, confident decisions, exceptional outcomes for buyers and sellers across Seattle and surrounding waterfront communities.",
};

export default function HomePage() {
  const featured = blogPosts.slice(0, 3);

  return (
    <>
     <Hero
  eyebrow="Seattle Real Estate Advisor"
  title="Seattle Luxury Real Estate, Thoughtfully Guided"
  description="A more strategic approach to buying and selling in Seattle’s high-end market."
  primaryCta={{ href: "/contact", label: "Schedule a Consultation" }}
  secondaryCta={{ href: "/blog", label: "Read the Journal" }}
/>
}
          <>
            Strategic guidance.
            <br />
            <span className="italic text-ink/85">Confident decisions.</span>
            <br />
            Exceptional outcomes.
          </>
        }
        subtitle="Christine Andreasen serves discerning buyers and sellers across Seattle and surrounding waterfront communities. Editorial presentation, luxury standards, and nearly three decades of local expertise."
        imageSrc="/hero-waterfront.jpg"
        imageAlt="Luxury Seattle waterfront home at twilight overlooking the skyline"
        primaryCta={{ href: "/contact", label: "Schedule a Consultation" }}
        secondaryCta={{ href: "/blog", label: "Read the Journal" }}
      />

      {/* Authority strip */}
      <section className="border-y border-ink/10 bg-cream-light">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-14 md:grid-cols-4 md:px-10">
          {[
            { stat: "30+", label: "Years of local expertise" },
            { stat: "Seattle", label: "& surrounding waterfront" },
            { stat: "Concierge", label: "Approach to every listing" },
            { stat: "eXp", label: "Realty | Christine & Company" },
          ].map((item) => (
            <div key={item.label} className="px-2">
              <div className="font-serif text-3xl text-ink md:text-4xl">
                {item.stat}
              </div>
              <div className="mt-2 text-xs uppercase tracking-editorial text-ink/60">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:px-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">Philosophy</p>
            <span className="gold-rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-ink md:text-5xl">
              A quieter, more deliberate way to buy and sell in Seattle.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink/80 lg:col-span-6 lg:col-start-7 md:text-lg">
            <p>
              Real estate at the high end is rarely about urgency. It's about
              preparation, presentation, and judgment — the work that happens
              long before a listing goes live or an offer is signed.
            </p>
            <p>
              Christine's practice is built on that conviction. Every
              engagement begins with a conversation about lifestyle and
              outcome, not square footage or commission. The result is a
              process that feels considered, calm, and decisively in your
              favor.
            </p>
            <p>
              Whether you're selling a generational home in Magnolia or buying
              your first waterfront on Mercer Island, the standard is the same:
              editorial presentation, strategic pricing, and steady
              communication from the first call to the final close.
            </p>
            <Link
              href="/about"
              className="editorial-link inline-flex items-center gap-2 pt-4 text-xs uppercase tracking-editorial text-ink"
            >
              More about Christine <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service pillars */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-gold">The Practice</p>
              <span className="mt-4 inline-block h-px w-14 bg-gold" />
              <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.1] md:text-5xl">
                Built around outcomes — not transactions.
              </h2>
            </div>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center border border-cream/40 px-5 py-3 text-xs uppercase tracking-editorial text-cream transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Schedule a Consultation
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              {
                title: "Sellers",
                copy: "Strategic preparation, editorial staging, and disciplined pricing — designed to position your home at the top of its category.",
              },
              {
                title: "Buyers",
                copy: "Lifestyle-first matching, off-market intelligence, and negotiation grounded in three decades of local market data.",
              },
              {
                title: "Advisory",
                copy: "Long-term guidance for owners weighing a move — clarity on timing, value, and the right path forward, without pressure.",
              },
            ].map((p, i) => (
              <div key={p.title} className="border-t border-cream/15 pt-6">
                <div className="text-xs uppercase tracking-editorial text-gold">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-serif text-2xl text-cream md:text-[28px]">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-cream/75">
                  {p.copy}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <Link
              href="/contact"
              className="inline-flex items-center border border-cream/40 px-5 py-3 text-xs uppercase tracking-editorial text-cream"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Featured journal */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">The Journal</p>
              <span className="gold-rule mt-4" />
              <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.1] text-ink md:text-5xl">
                Insights from Seattle's high-end market.
              </h2>
            </div>
            <Link
              href="/blog"
              className="editorial-link text-xs uppercase tracking-editorial text-ink"
            >
              View all articles &rarr;
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <BlogCard
                key={p.slug}
                slug={p.slug}
                title={p.title}
                excerpt={p.excerpt}
                image={p.image}
                category={p.category}
                readingTime={p.readingTime}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative overflow-hidden bg-cream-dark">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-12 md:px-10">
          <div className="md:col-span-7">
            <p className="eyebrow">Begin the conversation</p>
            <span className="gold-rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl leading-tight text-ink md:text-5xl">
              Considering a move in Seattle?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg">
              The earliest conversations are often the most valuable. Reach out
              for a quiet, no-pressure consultation about your timing, your
              property, or the right next step.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center bg-ink px-6 py-3 text-xs uppercase tracking-editorial text-cream transition-colors duration-300 hover:bg-gold"
              >
                Schedule a Consultation
              </Link>
              <a
                href="tel:+12063538787"
                className="editorial-link text-xs uppercase tracking-editorial text-ink"
              >
                (206) 353-8787
              </a>
            </div>
          </div>
          <div className="relative md:col-span-5 h-[500px]">
  <div className="grid grid-rows-2 gap-4 h-full">

    {/* Top Image */}
    <div className="relative w-full h-full">
      <Image
        src="/listing1exterior.jpg"
        alt="Luxury exterior home"
        fill
        className="object-cover rounded-sm"
        priority
      />
    </div>

    {/* Bottom Image */}
    <div className="relative w-full h-full">
      <Image
        src="/luxury-living.jpg"
        alt="Luxury interior living space"
        fill
        className="object-cover rounded-sm"
      />
    </div>

  </div>
</div>

</div>
          </div>
        </div>
      </section>
    </>
  );
}
