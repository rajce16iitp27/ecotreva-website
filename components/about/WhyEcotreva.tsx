import { whyEcotreva } from "@/lib/home-data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyEcotreva() {
  return (
    <section id="about" className="bg-surface py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Ecotreva"
          title="Your trusted partner for sustainable exports"
          description="We bridge the gap between India's finest eco-material manufacturers and businesses that demand quality, reliability, and scale."
          align="center"
          className="mb-12 lg:mb-16"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {whyEcotreva.map((feature, index) => (
            <article
              key={feature.title}
              className="relative rounded-2xl border border-border bg-background p-8 shadow-sm shadow-primary/5 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10 lg:p-10"
            >
              <span className="font-display text-5xl font-semibold text-accent/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
