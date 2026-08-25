"use client";

import Link from "next/link";

export type ServiceLink = { label: string; href: string };

export const BUYING_LINKS: ServiceLink[] = [
  { label: "Buying a Home", href: "/services/buying" },
  { label: "First-Time Home Buyers", href: "/blog/first-time-luxury-buyer-seattle-guide" },
  { label: "Home Buying Guide", href: "/blog/seattle-home-buyer-guide-2026" },
  { label: "Getting Pre-Approved", href: "/services/buying#pre-approval" },
  { label: "Finding the Right Home", href: "/services/buying#finding-a-home" },
  { label: "Making an Offer", href: "/blog/how-to-win-multiple-offers-seattle" },
  { label: "Home Inspections", href: "/services/buying#inspections" },
  { label: "Closing Costs", href: "/blog/closing-costs-seattle-real-estate" },
  { label: "Closing Day", href: "/services/buying#closing" },
  { label: "New Construction", href: "/blog/new-construction-vs-existing-homes-seattle" },
  { label: "Luxury Home Buying", href: "/services/luxury-home-buying" },
];

export const SELLING_LINKS: ServiceLink[] = [
  { label: "Selling a Home", href: "/services/selling" },
  { label: "Home Selling Guide", href: "/services/selling#guide" },
  { label: "What's My Home Worth?", href: "/blog/ai-vs-appraisals-seattle" },
  { label: "Preparing Your Home for Sale", href: "/blog/prepare-home-to-sell-seattle" },
  { label: "Home Staging", href: "/blog/luxury-staging-seattle-tips" },
  { label: "Pricing Your Home", href: "/blog/how-to-price-seattle-home" },
  { label: "Marketing Your Home", href: "/services/selling#marketing" },
  { label: "Understanding Offers", href: "/services/selling#understanding-offers" },
  { label: "Negotiating Offers", href: "/services/selling#negotiating" },
  { label: "Home Inspections", href: "/services/selling#inspections" },
  { label: "Closing the Sale", href: "/services/selling#closing" },
  { label: "Luxury Home Selling", href: "/services/luxury-home-selling" },
];

export function ServicesDesktopDropdown() {
  return (
    <div className="group relative">
      <Link
        href="/services"
        aria-haspopup="true"
        className="editorial-link flex items-center gap-1.5 text-sm tracking-wide text-ink/80 hover:text-ink"
      >
        Services
        <svg
          viewBox="0 0 12 8"
          className="h-2.5 w-2.5 fill-none stroke-current stroke-[1.5] transition-transform duration-300 ease-editorial group-hover:rotate-180"
          aria-hidden
        >
          <path d="M1 1.5L6 6.5L11 1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      <div
        className="invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-1 pt-4 opacity-0 transition-all duration-300 ease-editorial group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
      >
        <div className="w-[560px] border border-ink/10 bg-cream shadow-xl">
          <div className="border-b border-ink/10 px-8 py-5">
            <p className="eyebrow">Services</p>
          </div>
          <div className="grid grid-cols-2 gap-8 px-8 py-7">
            <div>
              <p className="text-xs uppercase tracking-editorial text-gold">Buying</p>
              <ul className="mt-4 space-y-2.5">
                {BUYING_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink/75 transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/services/buying"
                className="mt-5 inline-flex items-center gap-1 text-xs uppercase tracking-editorial text-gold transition-colors hover:text-ink"
              >
                View All Buying <span aria-hidden>&rarr;</span>
              </Link>
            </div>
            <div>
              <p className="text-xs uppercase tracking-editorial text-gold">Selling</p>
              <ul className="mt-4 space-y-2.5">
                {SELLING_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink/75 transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/services/selling"
                className="mt-5 inline-flex items-center gap-1 text-xs uppercase tracking-editorial text-gold transition-colors hover:text-ink"
              >
                View All Selling <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesMobileAccordion({
  open,
  onToggle,
  onNavigate,
}: {
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className="border-b border-ink/5">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-3 text-sm tracking-wide text-ink"
      >
        Services
        <svg
          viewBox="0 0 12 8"
          className={`h-2.5 w-2.5 fill-none stroke-current stroke-[1.5] transition-transform duration-300 ease-editorial ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        >
          <path d="M1 1.5L6 6.5L11 1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="pb-4 pl-4">
          <Link
            href="/services"
            onClick={onNavigate}
            className="block py-1.5 text-xs uppercase tracking-editorial text-gold"
          >
            All Services &rarr;
          </Link>

          <p className="mt-4 text-xs uppercase tracking-editorial text-gold">Buying</p>
          <ul className="mt-2 space-y-1">
            {BUYING_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className="block py-1.5 text-sm text-ink/75"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-xs uppercase tracking-editorial text-gold">Selling</p>
          <ul className="mt-2 space-y-1">
            {SELLING_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className="block py-1.5 text-sm text-ink/75"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
