import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function MarketsPage() {
  return (
    <section className="border-y border-border bg-accent-muted/20 py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Global Reach"
          title="Serving importers across six continents"
          description="From North America and Europe to the Middle East, Asia-Pacific, and Africa — Ecotreva delivers sustainable materials to partners in over 40 countries."
          align="center"
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {[
            "North America",
            "Europe",
            "Middle East",
            "Asia-Pacific",
            "Africa",
            "Oceania",
          ].map((market) => (
            <span
              key={market}
              className="rounded-full border border-border bg-surface px-5 py-2 text-sm font-medium text-primary shadow-sm"
            >
              {market}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}