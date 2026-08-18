"use client";

import Link from "next/link";

export type NeighborhoodLink = { label: string; href: string };

export const EASTSIDE_NEIGHBORHOODS: NeighborhoodLink[] = [
  { label: "Bellevue", href: "/neighborhoods/bellevue" },
  { label: "Medina", href: "/neighborhoods/medina" },
  { label: "Kirkland", href: "/neighborhoods/kirkland" },
  { label: "Mercer Island", href: "/neighborhoods/mercer-island" },
];

export const SEATTLE_NEIGHBORHOODS: NeighborhoodLink[] = [
  { label: "Queen Anne", href: "/neighborhoods/queen-anne" },
  { label: "Magnolia", href: "/neighborhoods/magnolia" },
  { label: "Ballard", href: "/neighborhoods/ballard" },
  { label: "West Seattle", href: "/neighborhoods/west-seattle" },
  { label: "North Beach", href: "/neighborhoods/north-beach" },
  { label: "Blue Ridge", href: "/neighborhoods/blue-ridge" },
  { label: "Edmonds", href: "/neighborhoods/edmonds" },
];

export function NeighborhoodsDesktopDropdown() {
  return (
    <div className="group relative">
      <Link
        href="/neighborhoods"
        className="editorial-link flex items-center gap-1.5 text-sm tracking-wide text-ink/80 hover:text-ink"
      >
        Neighborhoods
        <svg
          viewBox="0 0 12 8"
          className="h-2.5 w-2.5 fill-none stroke-current stroke-[1.5] transition-transform duration-300 ease-editorial group-hover:rotate-180"
          aria-hidden
        >
          <path d="M1 1.5L6 6.5L11 1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      <div className="invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-1 pt-4 opacity-0 transition-all duration-300 ease-editorial group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="w-[560px] border border-ink/10 bg-cream shadow-xl">
          <div className="border-b border-ink/10 px-8 py-5">
            <p className="eyebrow">Featured Neighborhoods</p>
          </div>
          <div className="grid grid-cols-2 gap-8 px-8 py-7">
            <div>
              <p className="text-xs uppercase tracking-editorial text-gold">Eastside</p>
              <ul className="mt-4 space-y-2.5">
                {EASTSIDE_NEIGHBORHOODS.map((item) => (
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
            </div>
            <div>
              <p className="text-xs uppercase tracking-editorial text-gold">Seattle &amp; Puget Sound</p>
              <ul className="mt-4 space-y-2.5">
                {SEATTLE_NEIGHBORHOODS.map((item) => (
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
            </div>
          </div>
          <div className="border-t border-ink/10 px-8 py-5">
            <Link
              href="/neighborhoods"
              className="inline-flex items-center gap-1 text-xs uppercase tracking-editorial text-gold transition-colors hover:text-ink"
            >
              View All Neighborhoods <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NeighborhoodsMobileAccordion({
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
        Neighborhoods
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
          <p className="text-xs uppercase tracking-editorial text-gold">Featured Neighborhoods</p>

          <p className="mt-4 text-xs uppercase tracking-editorial text-ink/40">Eastside</p>
          <ul className="mt-2 space-y-1">
            {EASTSIDE_NEIGHBORHOODS.map((item) => (
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

          <p className="mt-5 text-xs uppercase tracking-editorial text-ink/40">Seattle &amp; Puget Sound</p>
          <ul className="mt-2 space-y-1">
            {SEATTLE_NEIGHBORHOODS.map((item) => (
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

          <Link
            href="/neighborhoods"
            onClick={onNavigate}
            className="mt-5 block py-1.5 text-xs uppercase tracking-editorial text-gold"
          >
            View All Neighborhoods &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
