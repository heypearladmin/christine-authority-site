import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Schedule a Consultation",
  description:
    "Book a private, no-pressure consultation with Christine Andreasen. A focused 30-minute conversation about your timing, your property, and the right next step in Seattle real estate.",
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
            in person at the Ballard office.
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

            <form
              action="mailto:christine@candco.me?subject=Consultation%20Request"
              method="post"
              encType="text/plain"
              className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-xs uppercase tracking-editorial text-ink/60"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-xs uppercase tracking-editorial text-ink/60"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
                  placeholder="Your last name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-editorial text-ink/60"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs uppercase tracking-editorial text-ink/60"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
                  placeholder="(206) 555-0100"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="purpose"
                  className="block text-xs uppercase tracking-editorial text-ink/60"
                >
                  Purpose of consultation
                </label>
                <select
                  id="purpose"
                  name="purpose"
                  required
                  defaultValue=""
                  className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink focus:border-gold focus:outline-none"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Selling — listing strategy</option>
                  <option>Selling — pricing / valuation</option>
                  <option>Buying — search strategy</option>
                  <option>Buying — neighborhood guidance</option>
                  <option>Owner advisory — long-term planning</option>
                  <option>Just exploring</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="format"
                  className="block text-xs uppercase tracking-editorial text-ink/60"
                >
                  Preferred format
                </label>
                <select
                  id="format"
                  name="format"
                  defaultValue="Either"
                  className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink focus:border-gold focus:outline-none"
                >
                  <option>Either</option>
                  <option>Phone / Zoom</option>
                  <option>In person — Ballard office</option>
                  <option>In person — at the property</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="timeframe"
                  className="block text-xs uppercase tracking-editorial text-ink/60"
                >
                  Your timing
                </label>
                <select
                  id="timeframe"
                  name="timeframe"
                  defaultValue=""
                  className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink focus:border-gold focus:outline-none"
                >
                  <option value="" disabled>
                    Select a window
                  </option>
                  <option>Within 30 days</option>
                  <option>1–3 months</option>
                  <option>3–6 months</option>
                  <option>6–12 months</option>
                  <option>Just exploring</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="property"
                  className="block text-xs uppercase tracking-editorial text-ink/60"
                >
                  Property address (optional)
                </label>
                <input
                  id="property"
                  name="property"
                  type="text"
                  className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
                  placeholder="If you're inquiring about a specific home"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="notes"
                  className="block text-xs uppercase tracking-editorial text-ink/60"
                >
                  What would you like to discuss?
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={5}
                  className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
                  placeholder="A few sentences on goals, questions, or context."
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center bg-ink px-6 py-3 text-xs uppercase tracking-editorial text-cream transition-colors duration-300 hover:bg-gold"
                >
                  Request Consultation
                </button>
                <p className="mt-4 text-xs text-ink/55">
                  Prefer a direct line?{" "}
                  <a
                    href="tel:+12063538787"
                    className="text-ink underline decoration-gold underline-offset-4"
                  >
                    (206) 353-8787
                  </a>
                </p>
              </div>
            </form>
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
                src="/luxury-living.jpg"
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
