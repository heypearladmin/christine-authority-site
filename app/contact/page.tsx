import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema, breadcrumbSchema, webPageSchema, SITE } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Contact Christine Andreasen",
  description:
    "Get in touch with Christine Andreasen — Christine & Company | eXp Realty. Call, email, or follow along on social media.",
  alternates: { canonical: "https://www.christineandreasen.com/contact" },
  openGraph: { images: [{ url: "/headshot.webp", width: 1200, height: 630 }] },
  twitter: { images: ["/headshot.webp"] },
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
      <JsonLd
        schema={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Contact", url: `${SITE.url}/contact` },
          ]),
          webPageSchema({
            name: "Contact Christine Andreasen | Seattle Real Estate",
            url: `${SITE.url}/contact`,
            description:
              "Get in touch with Christine Andreasen — Christine & Company | eXp Realty. Call, email, or follow along on social media.",
          }),
        ]}
      />

      {/* Header */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow">Get in touch</p>
          <span className="gold-rule mt-4" />
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-ink md:text-6xl">
            Let&rsquo;s start a conversation.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 md:text-lg">
            Whether you have a quick question or you&rsquo;re ready to explore next steps,
            Christine is available by phone, email, or on social.
          </p>
        </div>
      </section>

      {/* Contact details + CTA */}
      <section className="border-t border-ink/10 bg-cream-light">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:px-10 lg:grid-cols-12 lg:gap-16">

          {/* Info panel */}
          <div className="lg:col-span-7">
            <div className="bg-ink p-8 text-cream md:p-10">
              <p className="eyebrow text-gold">Direct line</p>
              <span className="mt-4 inline-block h-px w-12 bg-gold" />
              <h2 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">
                Christine &amp; Company
              </h2>
              <p className="mt-2 text-xs uppercase tracking-editorial text-cream/60">
                eXp Realty
              </p>

              <div className="mt-8 space-y-5 text-sm">
                <div>
                  <div className="text-xs uppercase tracking-editorial text-gold">Office</div>
                  <p className="mt-2 text-cream/85">
                    2284 West Commodore Way Suite 200<br />Seattle, WA 98199
                  </p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-editorial text-gold">Phone</div>
                  <a href="tel:+12063538787" className="mt-2 block text-cream/85 hover:text-gold">
                    (206) 353-8787
                  </a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-editorial text-gold">Email</div>
                  <a href="mailto:christine@candco.me" className="mt-2 block text-cream/85 hover:text-gold">
                    christine@candco.me
                  </a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-editorial text-gold">Hours</div>
                  <p className="mt-2 text-cream/85">By appointment, seven days a week</p>
                </div>
              </div>

              <div className="mt-10 border-t border-cream/15 pt-6">
                <div className="text-xs uppercase tracking-editorial text-gold">Follow</div>
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

            {/* Schedule CTA */}
            <div className="mt-8 border-t border-ink/10 pt-8">
              <p className="text-sm leading-relaxed text-ink/70">
                Ready to talk through your property goals? Book a private, no-pressure
                consultation — virtual or in person at the Seattle office.
              </p>
              <Link
                href="/schedule"
                className="mt-5 inline-flex items-center border border-ink px-6 py-3 text-xs uppercase tracking-editorial text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>

          {/* Image */}
          <aside className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full image-fallback">
              <Image
                src="/seattle-skyline.webp"
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
