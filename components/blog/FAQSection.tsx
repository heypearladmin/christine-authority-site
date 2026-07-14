import Link from "next/link";

type FAQ = { slug: string; question: string; answer: string };

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  if (faqs.length === 0) return null;
  return (
    <section className="bg-cream border-t border-ink/10" aria-label="Frequently asked questions">
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20">
        <p className="eyebrow">Frequently Asked Questions</p>
        <span className="gold-rule mt-4" />
        <h2 className="mt-6 font-serif text-3xl leading-[1.1] text-ink md:text-4xl">
          Common questions answered.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {faqs.map((faq) => (
            <Link
              key={faq.slug}
              href={`/faq/${faq.slug}`}
              className="group block rounded-sm border border-ink/10 p-5 transition-colors duration-200 hover:border-gold"
            >
              <h3 className="font-serif text-base leading-snug text-ink md:text-lg">
                {faq.question}
              </h3>
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink/60">
                {faq.answer}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-editorial text-gold transition-colors group-hover:text-ink">
                Read full answer <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
