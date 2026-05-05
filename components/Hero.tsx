import Link from "next/link";
import Image from "next/image";

type HeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export default function Hero({
  eyebrow = "Seattle Real Estate Advisor",
  title,
  subtitle,
  imageSrc = "/hero-waterfront.jpg",
  imageAlt = "Luxury Seattle waterfront home at twilight",
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative grid min-h-[78vh] grid-cols-1 lg:grid-cols-12">
        {/* Copy column */}
        <div className="relative z-10 col-span-1 flex flex-col justify-center bg-cream px-6 py-20 md:px-10 lg:col-span-5 lg:py-28">
          <div className="max-w-xl">
            <p className="eyebrow editorial-rise">{eyebrow}</p>
            <span className="gold-rule mt-5 editorial-rise editorial-rise-delay-1" />
            <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-5xl lg:text-6xl editorial-rise editorial-rise-delay-1">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/75 md:text-lg editorial-rise editorial-rise-delay-2">
                {subtitle}
              </p>
            )}
            <div className="mt-10 flex flex-wrap items-center gap-4 editorial-rise editorial-rise-delay-3">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center bg-ink px-6 py-3 text-xs uppercase tracking-editorial text-cream transition-colors duration-300 hover:bg-gold"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center border border-ink px-6 py-3 text-xs uppercase tracking-editorial text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Image column */}
        <div className="relative col-span-1 min-h-[40vh] lg:col-span-7 lg:min-h-full">
          <div className="image-fallback absolute inset-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/40 to-transparent lg:via-cream/0" />
        </div>
      </div>
    </section>
  );
}
