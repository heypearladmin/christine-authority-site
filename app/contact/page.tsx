import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Christine Andreasen",
  description:
    "Schedule a quiet, no-pressure consultation with Christine Andreasen. Christine & Company | eXp Realty — serving Seattle and surrounding waterfront communities.",
};

const SOCIAL = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/christineandcompany",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/christine.andreasen.robertson",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/christineandreasen/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@christineandcompany1784",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow">Begin the conversation</p>
          <span className="gold-rule mt-4" />
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-ink md:text-6xl">
            Quiet conversations welcome.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 md:text-lg">
            Whether you're months away from a decision or already preparing a
            home for market, the earliest conversations are often the most
            valuable. There is no pressure and no obligation.
          </p>
        </div>
      </section>

      {/* Form + details */}
      <section className="border-t border-ink/10 bg-cream-light">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:px-10 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl text-ink md:text-4xl">
              Send a message.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              Christine personally reads and responds to every inquiry within
              one business day.
            </p>

            <form
              action="mailto:christine@candco.me"
              method="post"
              encType="text/plain"
              className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              <div className="md:col-span-1">
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
              <div className="md:col-span-1">
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
              <div className="md:col-span-1">
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
              <div className="md:col-span-1">
                <label
                  htmlFor="phone"
                  className="block text-xs uppercase tracking-editorial text-ink/60"
                >
                  Phone (optional)
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
                  htmlFor="interest"
                  className="block text-xs uppercase tracking-editorial text-ink/60"
                >
                  I'm interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink focus:border-gold focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Selling a home</option>
                  <option>Buying a home</option>
                  <option>Valuation / advisory</option>
                  <option>Just exploring</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-editorial text-ink/60"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
                  placeholder="Tell Christine a little about your timing and goals."
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center bg-ink px-6 py-3 text-xs uppercase tracking-editorial text-cream transition-colors duration-300 hover:bg-gold"
                >
                  Send Message
                </button>
                <p className="mt-4 text-xs text-ink/50">
                  Or email directly:{" "}
                  <a
                    href="mailto:christine@candco.me"
                    className="text-ink underline decoration-gold underline-offset-4"
                  >
                    christine@candco.me
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Details column */}
          <aside className="lg:col-span-5">
            <div className="bg-ink p-8 text-cream md:p-10">
              <p className="eyebrow text-gold">Direct line</p>
              <span className="mt-4 inline-block h-px w-12 bg-gold" />
              <h3 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">
                Christine &amp; Company
              </h3>
              <p className="mt-2 text-xs uppercase tracking-editorial text-cream/60">
                eXp Realty
              </p>

              <div className="mt-8 space-y-5 text-sm">
                <div>
                  <div className="text-xs uppercase tracking-editorial text-gold">
                    Office
                  </div>
                  <p className="mt-2 text-cream/85">
                    9245 25th Avenue NW
                    <br />
                    Seattle, WA 98117
                  </p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-editorial text-gold">
                    Phone
                  </div>
                  <a
                    href="tel:+12063538787"
                    className="mt-2 block text-cream/85 hover:text-gold"
                  >
                    (206) 353-8787
                  </a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-editorial text-gold">
                    Email
                  </div>
                  <a
                    href="mailto:christine@candco.me"
                    className="mt-2 block text-cream/85 hover:text-gold"
                  >
                    christine@candco.me
                  </a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-editorial text-gold">
                    Hours
                  </div>
                  <p className="mt-2 text-cream/85">
                    By appointment, seven days a week
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-cream/15 pt-6">
                <div className="text-xs uppercase tracking-editorial text-gold">
                  Follow
                </div>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-editorial">
                  {SOCIAL.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-cream/75 transition-colors hover:text-gold"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative mt-8 aspect-[4/3] w-full image-fallback">
              <Image
                src="/seattle-skyline.jpg"
                alt="Seattle skyline at golden hour"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
