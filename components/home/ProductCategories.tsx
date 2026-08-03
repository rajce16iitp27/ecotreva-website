import Image from "next/image";
import Link from "next/link";
import { productCategories } from "@/lib/home-data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
             <div className="relative h-56 overflow-hidden">
  <Image
    src={category.image}
    alt={category.name}
    fill
    className="object-cover transition-transform duration-500 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

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
                  href={`/request-quote?product=${encodeURIComponent(category.name)}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                >
                  Enquire
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
