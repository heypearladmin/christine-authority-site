import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, breadcrumbSchema, webPageSchema, SITE } from "@/lib/seo/schema";
import ScheduleForm from "./ScheduleForm";

export const metadata: Metadata = {
  title: "Schedule a Consultation",
  description:
    "Book a private consultation with Christine Andreasen, Seattle luxury real estate advisor. No pressure — just a focused conversation about your timing and next step.",
  openGraph: { images: [{ url: "/headshot.webp", width: 1200, height: 630 }] },
  twitter: { images: ["/headshot.webp"] },
};

const STEPS = [
  {
    title: "Your inquiry",
    copy: "Share your timing and what you're considering. Christine personally reviews every request.",
  },
  {
    title: "A direct response",
    copy: "Within one business day you'll hear back from Christine to confirm a time and outline what to bring.",
  },
  {
    title: "The conversation",
    copy: "A 30 to 45 minute call or in-person meeting — strategic, candid, and entirely yours.",
  },
  {
    title: "Clear next steps",
    copy: "You leave with a clear view of timing, value, and the path forward — no obligation, no pressure.",
  },
];

export default function SchedulePage() {
  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: "Real Estate Consultation with Christine Andreasen",
            url: `${SITE.url}/schedule`,
            description:
              "Book a private, no-pressure consultation with Christine Andreasen — a focused conversation about your timing, property, and the right next step in Seattle real estate.",
            category: "Real Estate Consultation",
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Schedule a Consultation", url: `${SITE.url}/schedule` },
          ]),
          webPageSchema({
            name: "Schedule a Consultation | Christine Andreasen Seattle Real Estate",
            url: `${SITE.url}/schedule`,
            description:
              "Book a private consultation with Christine Andreasen, Seattle luxury real estate advisor. No pressure — just a focused conversation about your timing and next step.",
          }),
        ]}
      />
      {/* Header */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow">Private Consultation</p>
          <span className="gold-rule mt-4" />
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-ink md:text-6xl">
            Schedule a private consultation.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 md:text-lg">
            A focused, 30 to 45 minute conversation about your property, your
            timing, and the right next move. By appointment only — virtual or
            in person at the Seattle office.
          </p>
        </div>
      </section>

      {/* Booking form + sidebar */}
      <section className="border-t border-ink/10 bg-cream-light">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:px-10 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl text-ink md:text-4xl">
              Request a time.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              Share a few details and Christine will personally confirm a slot
              that works for both of you within one business day.
            </p>

            <ScheduleForm />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5">
            <div className="bg-ink p-8 text-cream md:p-10">
              <p className="eyebrow text-gold">What to expect</p>
              <span className="mt-4 inline-block h-px w-12 bg-gold" />
              <h3 className="mt-5 font-serif text-3xl leading-tight md:text-[34px]">
                A quiet, four-step process.
              </h3>
              <ul className="mt-8 space-y-6">
                {STEPS.map((step, i) => (
                  <li
                    key={step.title}
                    className="border-t border-cream/15 pt-5"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs uppercase tracking-editorial text-gold">
                        0{i + 1}
                      </span>
                      <h4 className="font-serif text-lg text-cream">
                        {step.title}
                      </h4>
                    </div>
                    <p className="mt-2 pl-9 text-sm leading-relaxed text-cream/75">
                      {step.copy}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-8 aspect-[4/3] w-full image-fallback">
              <Image
                src="/luxury-living.webp"
                alt="Luxury Seattle home interior at twilight"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-8 border-t border-ink/10 pt-6">
              <p className="text-xs uppercase tracking-editorial text-ink/55">
                General questions instead?
              </p>
              <Link
                href="/contact"
                className="editorial-link mt-2 inline-flex items-center gap-2 text-sm text-ink"
              >
                Visit the contact page <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
