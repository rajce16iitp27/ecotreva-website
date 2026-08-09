import { exportSteps } from "@/lib/home-data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExportProcess() {
  return (
    <section id="process" className="pt-2 pb-16 sm:pt-4 sm:pb-20 lg:pt-2 lg:pb-28">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="A seamless export process"
          description="From first inquiry to final delivery — a structured, transparent workflow designed for international B2B buyers."
          align="center"
          className="mb-14 lg:mb-20"
        />

        <div className="relative">
          <div
            className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-accent/60 to-transparent lg:block"
            aria-hidden="true"
          />

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {exportSteps.map((step, index) => (
              <li key={step.step} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface shadow-md shadow-primary/10">
                  <span className="font-display text-lg font-semibold text-primary">
                    {step.step}
                  </span>
                </div>

                {index < exportSteps.length - 1 && (
                  <div
                    className="absolute left-1/2 top-16 h-full w-0.5 -translate-x-1/2 bg-accent/30 lg:hidden"
                    aria-hidden="true"
                  />
                )}

                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
