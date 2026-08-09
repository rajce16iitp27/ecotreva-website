import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { ProductCategories } from "@/components/home/ProductCategories";
import { ExportProcess } from "@/components/home/ExportProcess";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <ProductCategories />
      <ExportProcess />
    </main>
  );
}