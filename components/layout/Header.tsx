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
    <header className="bg-white sticky top-0 z-50 border-b border-[#D6C2A3]">
      <Container>
        <div className="flex min-h-[80px] items-center justify-between gap-2 sm:gap-6">
          {/* Brand */}
          <div className="flex items-center gap-1">
          <Logo className="scale-[1.12]" />

          {/* 55 Years of Sustainability */}
          <div
  className="ml-3 flex h-9 w-[115px] shrink-0 items-center sm:ml-7 sm:w-[125px]"
  aria-label="55 Years of Sustainability"
>
  {/* Vertical Divider */}
  <div className="mr-3 h-7 w-[2px] bg-[#B89A4A] shrink-0" />
  

  <div className="flex items-center gap-1">
  <span className="-translate-x-2 font-display text-[28px] font-extrabold leading-none tracking-[-0.08em] text-[#B89A4A] sm:translate-x-0">
  55
</span>
<div className="ml-0 max-w-[70px] -translate-x-0.5 flex flex-col justify-center leading-none sm:ml-1.5 sm:max-w-none sm:-translate-x-0.5">
      <span className="text-[8px] font-semibold tracking-wide text-[#0D5845] sm:text-[10px]">
        Years of
      </span>

      <span className="mt-0.5 text-[8px] font-semibold tracking-wide text-[#0D5845] sm:mt-1 sm:text-[10px]">
        Sustainability
      </span>
    </div>
  </div>
</div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => {
                  if (link.href.startsWith("/#")) {
                    const id = link.href.replace("/#", "");
                    const element = document.getElementById(id);
                
                    if (pathname === "/" && element) {
                      const headerOffset = 100;
                      const y =
                        element.getBoundingClientRect().top +
                        window.scrollY -
                        headerOffset;
                
                      window.scrollTo({
                        top: y,
                        behavior: "smooth",
                      });
                    } else {
                      router.push(link.href);
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

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              href="/request-quote"
              variant="primary"
              className="px-5 py-2.5"
            >
              Request a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-primary lg:hidden"
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

        {/* Mobile Navigation */}
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