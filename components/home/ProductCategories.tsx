import Link from "next/link";
import { type ReactNode } from "react";
import { productCategories } from "@/lib/home-data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

function CategoryPattern({ pattern }: { pattern: string }) {
  const patterns: Record<string, ReactNode> = {
    grain: (
      <>
        <line x1="0" y1="20" x2="400" y2="20" stroke="white" strokeOpacity="0.08" />
        <line x1="0" y1="50" x2="400" y2="50" stroke="white" strokeOpacity="0.06" />
        <line x1="0" y1="80" x2="400" y2="80" stroke="white" strokeOpacity="0.08" />
        <line x1="0" y1="110" x2="400" y2="110" stroke="white" strokeOpacity="0.05" />
      </>
    ),
    fiber: (
      <>
        <path d="M0 60 Q100 20, 200 60 T400 60" stroke="white" strokeOpacity="0.1" fill="none" />
        <path d="M0 90 Q100 50, 200 90 T400 90" stroke="white" strokeOpacity="0.07" fill="none" />
      </>
    ),
    dots: (
      <>
        {Array.from({ length: 24 }).map((_, i) => (
          <circle
            key={i}
            cx={(i % 6) * 70 + 35}
            cy={Math.floor(i / 6) * 35 + 20}
            r="3"
            fill="white"
            fillOpacity="0.12"
          />
        ))}
      </>
    ),
    grid: (
      <>
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 80}
            y1="0"
            x2={i * 80}
            y2="200"
            stroke="white"
            strokeOpacity="0.06"
          />
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={i * 50}
            x2="400"
            y2={i * 50}
            stroke="white"
            strokeOpacity="0.06"
          />
        ))}
      </>
    ),
    lines: (
      <>
        <line x1="40" y1="0" x2="40" y2="200" stroke="white" strokeOpacity="0.1" strokeWidth="4" />
        <line x1="80" y1="0" x2="80" y2="200" stroke="white" strokeOpacity="0.07" strokeWidth="3" />
        <line x1="120" y1="0" x2="120" y2="200" stroke="white" strokeOpacity="0.05" strokeWidth="2" />
      </>
    ),
    weave: (
      <>
        <path
          d="M0 0 L400 200 M0 50 L350 200 M50 0 L400 150"
          stroke="white"
          strokeOpacity="0.08"
        />
        <path
          d="M400 0 L0 200 M400 50 L50 200 M350 0 L0 150"
          stroke="white"
          strokeOpacity="0.06"
        />
      </>
    ),
  };

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {patterns[pattern]}
    </svg>
  );
}

export function ProductCategories() {
  return (
    <section id="products" className="py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Product Range"
          title="Sustainable materials for every application"
          description="Explore our curated export catalog of eco-friendly products manufactured to international standards."
          className="mb-12 lg:mb-16"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <article
              key={category.name}
              className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div
                className={`relative h-48 overflow-hidden bg-gradient-to-br ${category.gradient}`}
              >
                <CategoryPattern pattern={category.pattern} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {category.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-relaxed text-muted">
                  {category.description}
                </p>
                <Link
                  href="#quote"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                >
                  View Details
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
