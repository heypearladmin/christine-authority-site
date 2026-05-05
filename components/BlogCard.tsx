import Link from "next/link";
import Image from "next/image";

export type BlogCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category?: string;
  readingTime?: string;
};

export default function BlogCard({
  slug,
  title,
  excerpt,
  image,
  category = "Insights",
  readingTime = "5 min read",
}: BlogCardProps) {
  return (
    <article className="group flex flex-col">
      <Link href={`/blog/${slug}`} className="block overflow-hidden">
        <div className="relative aspect-[16/10] w-full overflow-hidden image-fallback">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
          />
        </div>
      </Link>

      <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-editorial text-gold">
        <span>{category}</span>
        <span className="h-px w-6 bg-gold/60" />
        <span className="text-ink/50">{readingTime}</span>
      </div>

      <h3 className="mt-3 font-serif text-2xl leading-tight text-ink md:text-[26px]">
        <Link
          href={`/blog/${slug}`}
          className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-editorial hover:bg-[length:100%_1px]"
        >
          {title}
        </Link>
      </h3>

      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/70">
        {excerpt}
      </p>

      <Link
        href={`/blog/${slug}`}
        className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-editorial text-ink transition-colors hover:text-gold"
      >
        Read the article
        <span aria-hidden>&rarr;</span>
      </Link>
    </article>
  );
}
