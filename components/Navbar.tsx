"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ServicesDesktopDropdown, ServicesMobileAccordion } from "./ServicesDropdown";

const NAV_BEFORE_SERVICES = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/neighborhoods", label: "Neighborhoods" },
];

const NAV_AFTER_SERVICES = [{ href: "/blog", label: "Blog" }];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ease-editorial ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm border-ink/10"
          : "bg-cream border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="Christine Andreasen home">
          <span className="font-serif text-xl tracking-tight text-ink md:text-2xl">
            Christine <span className="text-gold italic">&amp;</span> Company
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_BEFORE_SERVICES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="editorial-link text-sm tracking-wide text-ink/80 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <ServicesDesktopDropdown />
          {NAV_AFTER_SERVICES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="editorial-link text-sm tracking-wide text-ink/80 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center border border-ink px-5 py-2.5 text-xs uppercase tracking-editorial text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
          >
            Schedule a Consultation
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-6 bg-ink mb-1.5"></span>
          <span className="block h-px w-6 bg-ink mb-1.5"></span>
          <span className="block h-px w-4 bg-ink"></span>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-cream md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {NAV_BEFORE_SERVICES.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-ink/5 py-3 text-sm tracking-wide text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ServicesMobileAccordion
              open={mobileServicesOpen}
              onToggle={() => setMobileServicesOpen((v) => !v)}
              onNavigate={() => setOpen(false)}
            />
            {NAV_AFTER_SERVICES.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-ink/5 py-3 text-sm tracking-wide text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center border border-ink px-5 py-3 text-xs uppercase tracking-editorial text-ink"
              onClick={() => setOpen(false)}
            >
              Schedule a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
