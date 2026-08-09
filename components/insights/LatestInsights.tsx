import { Container } from "@/components/ui/Container";
import { InsightCard } from "./InsightCard";
import { insights } from "@/lib/insights-data";

export function LatestInsights() {
  const latestArticles = insights.filter((article) => !article.featured);

  return (
    <section className="pb-24">
      <Container>
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6C7A51]">
          LATEST INSIGHTS
        </span>

        <h2 className="mt-3 font-display text-3xl font-bold text-[#0D5845]">
          Latest Articles
        </h2>

        <div className="mt-7 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestArticles.map((article) => (
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