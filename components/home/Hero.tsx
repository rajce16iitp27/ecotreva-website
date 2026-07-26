import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroVisual } from "@/components/home/HeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent-muted/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">

            {/* Brand */}
            <h2 className="animate-fade-in-up font-display text-4xl font-bold tracking-tight text-[#407E4F] sm:text-5xl lg:text-5xl">
              Ecotreva &amp; Co.
            </h2>

            {/* Tagline */}
            <p className="animate-fade-in-up animation-delay-100 mt-2 text-base font-semibold italic tracking-wide text-[#7A5C3E]">
              Where Green Meets Global
            </p>

            {/* Hero Headline */}
            <h1 className="animate-fade-in-up animation-delay-200 mt-6 font-display text-2xl font-semibold leading-[1.2] tracking-tight text-black sm:text-3xl lg:text-4xl">
              Eco-Friendly Materials.
              <br />
              Exported from India.
              <br />
              Trusted Globally.
            </h1>

            {/* Description */}
            <p className="animate-fade-in-up animation-delay-300 mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              Ecotreva &amp; Co. connects sustainable innovations from India
              with businesses across the globe. We export eco-friendly
              materials with a focus on certified quality, dependable
              sourcing, and long-term partnerships.
            </p>

            {/* Buttons */}
            <div className="animate-fade-in-up animation-delay-400 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="#products" variant="primary">
                Explore Products
              </Button>

              <Button href="#quote" variant="outline">
                Request a Quote
              </Button>
            </div>

          </div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}