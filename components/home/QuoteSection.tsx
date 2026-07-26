"use client";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function QuoteSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(companyName);
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
  };
  if (submitted) {
    return (
      <section
        id="quote"
        className="border-t border-border bg-accent-muted/20 py-24"
      >
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-white p-12 text-center shadow-xl">
            <div className="mb-6 text-5xl">✅</div>
  
            <h2 className="text-3xl font-bold text-primary">
              Thank You!
            </h2>
  
            <p className="mt-4 text-muted-foreground">
              We've received your enquiry and our export team will contact you
              within <strong>24 business hours</strong>.
            </p>
  
            <p className="mt-6 font-semibold">
              sales@ecotreva.com
            </p>
          </div>
        </Container>
      </section>
    );
  }
  return (
    <section
      id="quote"
      className="border-t border-border bg-accent-muted/20 py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Let's Connect"
          title="Tell Us About Your Requirements"
          description="Share your requirements and our export team will contact you within 24 business hours with the best solution for your business."
          align="center"
        />

        <div className="mx-auto mt-14 max-w-5xl rounded-3xl border border-border bg-white p-10 shadow-xl">

        <form
  onSubmit={handleSubmit}
  className="grid gap-6 md:grid-cols-2"
>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Company Name *
              </label>

              <input
  type="text"
  value={companyName}
  onChange={(e) => setCompanyName(e.target.value)}
  placeholder="ABC Imports Ltd."
  className="w-full rounded-xl border border-border px-4 py-3 focus:border-[#407E4F] focus:outline-none"
/>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Contact Person *
              </label>

              <input
                type="text"
                placeholder="John Smith"
                className="w-full rounded-xl border border-border px-4 py-3 focus:border-[#407E4F] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Business Email *
              </label>

              <input
                type="email"
                placeholder="john@company.com"
                className="w-full rounded-xl border border-border px-4 py-3 focus:border-[#407E4F] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Phone / WhatsApp
              </label>

              <input
                type="text"
                placeholder="+1 234 567 890"
                className="w-full rounded-xl border border-border px-4 py-3 focus:border-[#407E4F] focus:outline-none"
              />
            </div>
            <div>
                    <label className="mb-2 block text-sm font-medium">
                      Country *
                    </label>

                    <input
                      type="text"
                      placeholder="United States"
                      className="w-full rounded-xl border border-border px-4 py-3 focus:border-[#407E4F] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Product Interested In *
                    </label>

                    <select className="w-full rounded-xl border border-border px-4 py-3 focus:border-[#407E4F] focus:outline-none">
                      <option>Bagasse Packaging</option>
                      <option>Handmade Paper</option>
                      <option>Seed Paper</option>
                      <option>Jute Products</option>
                      <option>Bamboo Products</option>
                      <option>Molded Pulp Packaging</option>
                      <option>Kraft Paper Packaging</option>
                      <option>Compostable Mailer Bags</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium">
                      Estimated Quantity
                    </label>

                    <select className="w-full rounded-xl border border-border px-4 py-3 focus:border-[#407E4F] focus:outline-none">
                      <option>Sample</option>
                      <option>Small Order</option>
                      <option>Medium Order</option>
                      <option>Container Load</option>
                      <option>Multiple Containers</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium">
                      Requirements
                    </label>

                    <textarea
                      rows={6}
                      placeholder="Tell us about your requirements..."
                      className="w-full rounded-xl border border-border px-4 py-3 focus:border-[#407E4F] focus:outline-none"
                    />
                  </div>

                  <div className="md:col-span-2 mt-8">
                  <button
  type="submit"
  disabled={isSubmitting}
  className="w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70 shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
>
  {isSubmitting ? "Sending..." : "Request a Quote"}
</button>
</div>

              </form>

            </div>

      </Container>

    </section>

  );
}