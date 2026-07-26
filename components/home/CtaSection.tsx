import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaSection() {
  return (
    <section id="quote" className="py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center shadow-2xl shadow-primary/25 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Start Your Export Journey
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready to source premium sustainable materials?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
              Tell us about your product requirements and target markets. Our
              export team will respond with tailored specifications and
              competitive pricing within two business days.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="mailto:hello@ecotreva.com?subject=Export%20Quote%20Request"
                variant="secondary"
                className="min-w-[200px]"
              >
                Request Quote
              </Button>
              <Button
                href="mailto:hello@ecotreva.com"
                variant="outline"
                className="min-w-[200px] border-white/30 bg-transparent text-white hover:border-white/50 hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
