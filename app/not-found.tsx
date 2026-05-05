import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-cream">
      <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center md:px-10 md:py-28">
        <p className="eyebrow">Page not found</p>
        <span className="gold-rule mt-4" />
        <h1 className="mt-6 font-serif text-5xl leading-tight text-ink md:text-6xl">
          A quiet detour.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg">
          The page you were looking for isn't here. Try the journal, the about
          page, or send Christine a note directly.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center bg-ink px-6 py-3 text-xs uppercase tracking-editorial text-cream transition-colors duration-300 hover:bg-gold"
          >
            Return Home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center border border-ink px-6 py-3 text-xs uppercase tracking-editorial text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
          >
            Read the Journal
          </Link>
        </div>
      </div>
    </section>
  );
}
