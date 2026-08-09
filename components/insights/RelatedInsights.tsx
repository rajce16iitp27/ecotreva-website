import { Container } from "@/components/ui/Container";
import { InsightCard } from "./InsightCard";
import { insights } from "@/lib/insights-data";

type RelatedInsightsProps = {
  currentSlug: string;
};

export function RelatedInsights({
  currentSlug,
}: RelatedInsightsProps) {
  const relatedArticles = insights
    .filter((article) => article.slug !== currentSlug)
    .slice(0, 3);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-border/60 bg-slate-50/40 py-16">
      <Container>
        {/* Section Label */}
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A8068]">
          Continue Reading
        </p>

        {/* Heading */}
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[#0D5845]">
          Related Insights
        </h2>

        {/* Articles */}
        <div className="mt-7 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedArticles.map((article) => (
            <InsightCard
              key={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              image={article.image}
              category={article.category}
              readTime={article.readTime}
              date={article.date}
              href={`/insights/${article.slug}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}