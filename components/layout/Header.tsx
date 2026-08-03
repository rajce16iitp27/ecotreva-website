"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navLinks } from "@/lib/home-data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between py-3">
          <Logo priority />

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
  <button
    key={link.href}
    type="button"
    onClick={() => {
      if (link.href.startsWith("/#")) {
        const id = link.href.replace("/#", "");

        if (pathname === "/") {
          document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          router.push("/#" + id);
        }
      } else {
        router.push(link.href);
      }
    }}
    className="text-[17px] font-medium text-muted transition-colors duration-200 hover:text-primary"
  >
    {link.label}
  </button>
))}
          </nav>

          <div className="hidden md:block">
            <Button href="/request-quote" variant="primary" className="px-5 py-2.5">
              Request a Quote
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-primary md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <nav
            id="mobile-menu"
            className="border-t border-border/60 pb-6 pt-4 md:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-primary/5 hover:text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3 px-3">
                <Button
                  href="/request-quote"
                  variant="primary"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Request a Quote
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}
