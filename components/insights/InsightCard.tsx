import Image from "next/image";
import Link from "next/link";

type InsightCardProps = {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  href: string;
};

export function InsightCard({
  title,
  excerpt,
  image,
  category,
  readTime,
  date,
  href,
}: InsightCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link href={href} className="block">
        {/* Image */}
        <div className="relative h-35 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6C7A51]">
            {category}
          </span>

          <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-[#0D5845]">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            {excerpt}
          </p>

          <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
            <span>{readTime}</span>
            <span>{date}</span>
          </div>

          <span className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition-transform duration-200 group-hover:translate-x-1">
            Read Article →
          </span>
        </div>
      </Link>
    </article>
  );
}