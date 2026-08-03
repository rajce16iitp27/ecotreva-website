"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const searchParams = useSearchParams();
  const selectedProduct = searchParams.get("product") || "";

  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [productCategory, setProductCategory] = useState(selectedProduct || "");
  const [estimatedQuantity, setEstimatedQuantity] = useState("Sample");
  const [requirements, setRequirements] = useState("");

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    setIsSubmitting(true);

    console.log("Submitting form...");

    const response = await fetch("/api/request-quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyName,
        contactPerson,
        businessEmail,
        phone,
        country,
        productCategory,
        estimatedQuantity,
        requirements,
      }),
    });

    console.log("Status:", response.status);

    const result = await response.json();

    console.log("Result:", result);

    if (result.success) {
      setSubmitted(true);
    
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
    }
  } catch (error) {
    console.error("Fetch Error:", error);
  } finally {
    setIsSubmitting(false);
  }
};

  if (submitted) {
    return (
      <section className="bg-accent-muted/20 py-24">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-white p-12 text-center shadow-xl">
            <div className="mb-6 text-5xl">✅</div>

            <h2 className="text-3xl font-bold text-primary">
              Thank You!
            </h2>

            <p className="mt-4 text-muted-foreground">
              We've received your enquiry and our export team will
              contact you within <strong>24 business hours</strong>.
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
    <section className="bg-accent-muted/20 py-24">
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
                onChange={(e) =>
                  setCompanyName(e.target.value)
                }
                placeholder="ABC Imports Ltd."
                className="w-full rounded-xl border border-border px-4 py-3 focus:border-[#407E4F] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Contact Person *
              </label>

              <input
  type="text"
  value={contactPerson}
  onChange={(e) => setContactPerson(e.target.value)}
  placeholder="John Smith"
  className="w-full rounded-xl border border-border px-4 py-3 focus:border-[#407E4F] focus:outline-none"
  required
/>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Business Email *
              </label>

              <input
  type="email"
  value={businessEmail}
  onChange={(e) => setBusinessEmail(e.target.value)}
  placeholder="john@company.com"
  className="w-full rounded-xl border border-border px-4 py-3 focus:border-[#407E4F] focus:outline-none"
  required
/>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Phone / WhatsApp
              </label>

              <input
  type="text"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
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
  value={country}
  onChange={(e) => setCountry(e.target.value)}
  placeholder="United States"
  className="w-full rounded-xl border border-border px-4 py-3 focus:border-[#407E4F] focus:outline-none"
  required
/>
            </div>

            <div>
            <label className="mb-2 block text-sm font-medium">
  Product Category *
</label>

<select
  className="w-full rounded-xl border border-border px-4 py-3 focus:border-[#407E4F] focus:outline-none"
  required
  value={productCategory}
  onChange={(e) => setProductCategory(e.target.value)}
>
  <option value="" disabled>
    Select a Product Category
  </option>

  <option value="Bagasse Packaging">
    Bagasse Packaging (plates, bowls, clamshells, trays, etc.)
  </option>

  <option value="Paper Products">
    Paper Products (handmade paper, seed paper, seed bombs, wrapping paper, etc.)
  </option>

  <option value="Molded Pulp Packaging">
    Molded Pulp Packaging (trays, inserts, protective packaging, etc.)
  </option>

  <option value="Bamboo Products">
    Bamboo Products (cutlery, straws, tableware, etc.)
  </option>

  <option value="Jute Products">
    Jute Products (bags, pouches, promotional items, etc.)
  </option>

  <option value="Eco-Friendly Products">
    Eco-Friendly Products (rice husk, coconut shell, areca, wheat straw, etc.)
  </option>

  <option value="Custom Product Sourcing">
    Custom Product Sourcing
  </option>

  <option value="Other">
    Other (Please specify in message)
  </option>
</select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium">
                Estimated Quantity
              </label>

              <select
  value={estimatedQuantity}
  onChange={(e) => setEstimatedQuantity(e.target.value)}
  className="w-full rounded-xl border border-border px-4 py-3 focus:border-[#407E4F] focus:outline-none"
>
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
  value={requirements}
  onChange={(e) => setRequirements(e.target.value)}
  placeholder="Tell us about your requirements..."
  className="w-full rounded-xl border border-border px-4 py-3 focus:border-[#407E4F] focus:outline-none"
/>
            </div>

            <div className="md:col-span-2 mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover disabled:opacity-60"
              >
                {isSubmitting
                  ? "Sending..."
                  : "Request a Quote"}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}