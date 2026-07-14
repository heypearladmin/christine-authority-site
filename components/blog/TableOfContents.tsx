'use client'
import { useEffect, useState } from "react";

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim().replace(/\s+/g, "-");
}

export default function TableOfContents({ sections }: { sections: { heading: string }[] }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(slugify(s.heading));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const items = sections.map((s) => ({ label: s.heading, id: slugify(s.heading) }));

  return (
    <>
      {/* Mobile collapsible */}
      <details className="lg:hidden mb-8 border border-ink/10 rounded-sm">
        <summary className="px-5 py-3 text-xs uppercase tracking-editorial text-ink/60 cursor-pointer select-none list-none flex items-center justify-between">
          Table of Contents
          <span aria-hidden>↓</span>
        </summary>
        <nav aria-label="Table of contents" className="px-5 pb-4">
          <ol className="mt-2 space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-ink/70 hover:text-gold transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </details>

      {/* Desktop sticky sidebar */}
      <nav aria-label="Table of contents" className="hidden lg:block sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <p className="text-xs uppercase tracking-editorial text-ink/50 mb-4">On this page</p>
        <ol className="space-y-3 border-l border-ink/10 pl-4">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block text-sm leading-snug transition-colors ${
                  active === item.id
                    ? "text-gold border-l-2 border-gold -ml-[17px] pl-[15px]"
                    : "text-ink/55 hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
