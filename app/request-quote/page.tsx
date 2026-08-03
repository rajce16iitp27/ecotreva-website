import { Suspense } from "react";
import { QuoteForm } from "@/components/quote/QuoteForm";

export default function RequestQuotePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuoteForm />
    </Suspense>
  );
}