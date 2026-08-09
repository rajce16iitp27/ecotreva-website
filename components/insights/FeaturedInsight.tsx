import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { insights } from "@/lib/insights-data";

export function FeaturedInsight() {
  const featuredArticle = insights.find((article) => article.featured);

  if (!featuredArticle) return null;

  return (
    <section className="pb-12">
      <Container>
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6C7A51]">
          Featured Insight
        </div>

        <Link
          href={`/insights/${featuredArticle.slug}`}
          className="group mt-5 block overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[320px]">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 lg:p-10">
              <span className="inline-flex w-fit rounded-full bg-accent-muted px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
                {featuredArticle.category}
              </span>

              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-[#0D5845]">
                {featuredArticle.title}
              </h2>

              <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
                <span>{featuredArticle.readTime}</span>
                <span>•</span>
                <span>{featuredArticle.date}</span>
              </div>

              <p className="mt-5 text-base leading-7 text-slate-600">
                {featuredArticle.excerpt}
              </p>

              <span className="mt-7 inline-flex w-fit rounded-xl bg-[#0D5845] px-6 py-3 font-semibold text-white transition group-hover:bg-[#0a4740]">
                Read Article →
              </span>
            </div>
          </div>
        </Link>
      </Container>
    </section>
  );
}