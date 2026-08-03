import { Container } from "@/components/ui/Container";

export function MissionSection() {
  return (
    <section className="border-y border-border bg-surface pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Our Mission
            </h2>
            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-accent" aria-hidden="true" />
          </div>

          <blockquote className="mt-10 text-center">
            <p className="font-display text-2xl font-medium leading-snug tracking-tight text-primary sm:text-3xl lg:text-4xl lg:leading-tight">
              &ldquo;To help decarbonize global supply chains by exporting
              eco-friendly products from India.&rdquo;
            </p>
          </blockquote>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-muted sm:text-lg">
            Ecotreva &amp; Company connects sustainable innovations from India
            with businesses across the globe. We specialize in exporting
            eco-friendly materials that combine natural integrity with modern
            precision. Our focus is on reliability, certified quality, and
            global partnerships&mdash;helping enterprises meet their
            sustainability goals with confidence.
          </p>
        </div>
      </Container>
    </section>
  );
}
