import Link from "next/link";
import { footerLinks } from "@/lib/home-data";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border bg-primary text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-display text-2xl font-semibold tracking-tight"
            >
              Ecotreva &amp; Co.
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Supplying sustainable materials from India to businesses
              worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Products
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.products.map((product) => (
                <li key={product}>
                  <Link
                    href="#products"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.contact.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {currentYear} Ecotreva. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-white/50">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>

            <Link href="#" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}