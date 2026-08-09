import { type ReactNode } from "react";
import { trustCards } from "@/lib/home-data";
import { Container } from "@/components/ui/Container";

function TrustIcon({ icon }: { icon: string }) {
  const icons: Record<string, ReactNode> = {
    globe: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    ),
    shield: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    ),
    leaf: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9.75c0-.966.784-1.75 1.75-1.75h14.5c.966 0 1.75.784 1.75 1.75v3.5c0 .966-.784 1.75-1.75 1.75H4.75c-.966 0-1.75-.784-1.75-1.75v-3.5zM6 6.75V4.5a1.5 1.5 0 011.5-1.5h9A1.5 1.5 0 0118 4.5v2.25"
      />
    ),
    network: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    ),
  };

  return (
    <svg
      className="h-7 w-7 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      {icons[icon]}
    </svg>
  );
}

export function TrustSection() {
  return (
    <section className="pt-12 pb-4 sm:pt-14 sm:pb-4 lg:pt-16 lg:pb-6">
      <Container className="mt-15">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {trustCards.map((card, index) => (
            <article
              key={card.title}
              className="group rounded-2xl border border-border bg-surface p-4 shadow-sm shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/15 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 inline-flex rounded-xl bg-accent-muted/50 p-3 transition-colors group-hover:bg-accent-muted">
                <TrustIcon icon={card.icon} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
