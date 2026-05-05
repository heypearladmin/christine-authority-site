import Link from "next/link";

const SOCIAL = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/christine.andreasen.robertson",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/christineandcompany",
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

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-serif text-2xl tracking-tight">
              Christine <span className="text-gold italic">&amp;</span> Company
            </div>
            <p className="mt-2 text-xs uppercase tracking-editorial text-cream/60">
              Seattle Real Estate Advisor &middot; eXp Realty
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/80">
              Strategic guidance. Confident decisions. Exceptional outcomes.
              Christine Andreasen serves discerning buyers and sellers across
              Seattle and surrounding waterfront communities.
            </p>

            <a
              href="https://www.christineandcompany.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 border-b border-gold/50 pb-1 text-xs uppercase tracking-editorial text-gold transition-colors hover:text-cream hover:border-cream"
            >
              Visit christineandcompany.com
              <span aria-hidden>&rarr;</span>
            </a>

            <span className="mt-6 inline-block h-px w-14 bg-gold" />
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-editorial text-gold">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-cream/80 transition-colors hover:text-gold"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-editorial text-gold">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              <li>
                9245 25th Avenue NW
                <br />
                Seattle, WA 98117
              </li>
              <li>
                <a
                  href="tel:+12063538787"
                  className="transition-colors hover:text-gold"
                >
                  (206) 353-8787
                </a>
              </li>
              <li>
                <a
                  href="mailto:christine@candco.me"
                  className="transition-colors hover:text-gold"
                >
                  christine@candco.me
                </a>
              </li>
            </ul>

            <h4 className="mt-8 text-xs uppercase tracking-editorial text-gold">
              Follow
            </h4>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-editorial">
              {SOCIAL.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-cream/70 transition-colors hover:text-gold"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-cream/10 pt-8 text-xs text-cream/50 md:flex-row md:items-center">
          <span>
            &copy; {year} Christine &amp; Company &middot; eXp Realty. All rights
            reserved.
          </span>
          <span className="tracking-editorial uppercase">
            Equal Housing Opportunity
          </span>
        </div>
      </div>
    </footer>
  );
}
