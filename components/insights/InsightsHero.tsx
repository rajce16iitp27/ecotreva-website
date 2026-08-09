import { Container } from "@/components/ui/Container";

export function InsightsHero() {
  return (
    <section className="pt-10 pb-8">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A8068]">
          Export Insights
        </p>

        <h1 className="mt-4 font-display text-2xl font-bold leading-tight text-[#0D5845] sm:text-3xl lg:text-[2.4rem]">
          Knowledge Hub for Global Importers
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Expert guides, sourcing knowledge, compliance updates, and practical
          resources for businesses importing eco-friendly materials from India.
        </p>
      </Container>
    </section>
  );
}