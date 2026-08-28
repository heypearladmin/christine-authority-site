"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/seo/schema";
import { blogPosts } from "@/lib/blogs";

type Intent = "buying" | "selling" | "neighborhood" | "general";

function getIntent(pathname: string): Intent {
  if (pathname.startsWith("/services/selling") || pathname.startsWith("/services/luxury-home-selling") || pathname === "/valuation") {
    return "selling";
  }
  if (pathname.startsWith("/services/buying") || pathname.startsWith("/services/luxury-home-buying")) {
    return "buying";
  }
  if (pathname.startsWith("/neighborhoods")) {
    return "neighborhood";
  }
  if (pathname.startsWith("/blog/")) {
    const slug = pathname.split("/")[2];
    const post = blogPosts.find((p) => p.slug === slug);
    if (post?.pillar === "selling") return "selling";
    if (post?.pillar === "buying") return "buying";
  }
  return "general";
}

const COPY: Record<Intent, { message: string; label: string; href: string }> = {
  buying: {
    message: "Ready to Find Your Next Home?",
    label: `Talk to ${SITE.agentName.split(" ")[0]}`,
    href: "/schedule",
  },
  selling: {
    message: "Curious What Your Home Is Worth?",
    label: "Get My Home Value",
    href: "/valuation",
  },
  neighborhood: {
    message: "Want to Know More About This Area?",
    label: `Talk to ${SITE.agentName.split(" ")[0]}`,
    href: "/schedule",
  },
  general: {
    message: `Have Questions? Talk to ${SITE.agentName.split(" ")[0]}`,
    label: `Call ${SITE.phoneDisplay}`,
    href: `tel:${SITE.phone}`,
  },
};

const HIDDEN_PREFIXES = ["/schedule", "/contact", "/valuation"];

export default function StickyCTA() {
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;
  if (HIDDEN_PREFIXES.some((p) => pathname.startsWith(p))) return null;

  const intent = getIntent(pathname);
  const copy = COPY[intent];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-ink/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-10">
        <p className="hidden text-sm text-cream/90 sm:block">{copy.message}</p>
        <div className="flex flex-1 items-center justify-between gap-3 sm:flex-none sm:justify-end">
          <Link
            href={copy.href}
            className="inline-flex items-center whitespace-nowrap bg-gold px-5 py-2.5 text-xs uppercase tracking-editorial text-ink transition-colors duration-300 hover:bg-cream"
          >
            {copy.label}
          </Link>
          <button
            type="button"
            aria-label="Dismiss"
            onClick={() => setDismissed(true)}
            className="text-cream/50 transition-colors hover:text-cream"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
