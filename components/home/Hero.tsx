import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroVisual } from "@/components/home/HeroVisual";

import {
  Clock3,
  Leaf,
  Award,
  Settings2,
  Truck,
  Boxes,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
  <div
  className="flex min-h-[630px] flex-col pt-3 pb-12 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
  "linear-gradient(rgba(255,255,255,0.66), rgba(255,255,255,0.66)), url('/hero-products-v2.png')",
  }}
>

      {/* Background Image */}
<HeroVisual />

      {/* Decorative Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent-muted/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Content */}
      <Container className="relative z-10">

      <div className="flex flex-col">








          {/* Top Content */}
          <div className="w-full max-w-[680px] mt-10">

            {/* Tagline */}
            <div className="inline-flex items-center gap-1 sm:gap-4">
            <span className="font-cursive text-xl font-semibold text-[#B89A4A]">
  Where
</span>

  <span className="font-cursive text-xl font-semibold text-[#0D5845]">
  Green
  </span>

  <span className="font-cursive text-xl font-semibold text-[#B89A4A]">
  Meets Global
</span>
  <div className="mx-2 h-5 w-[1.5px] bg-[#0F3D3E]/50" />

  <span className="text-base font-bold tracking-[0.12em] text-[#0D5845]">
    Since 1971
  </span>
</div>

            {/* Heading */}
<h1 className="mt-6 font-display text-[2.1rem] font-bold leading-[1.1] tracking-tight text-[#0D5845] sm:text-[2.6rem]">
  Eco-Friendly Materials.
  <br />
  Manufactured in India.
  <br />
  Exported Worldwide.
</h1>

          </div>

          {/* Bottom Buttons */}
          <div className="mt-6 mb-6 flex flex-col gap-4 sm:flex-row">

          <Button href="/products" variant="outline">
  Explore Products
</Button>

<Button href="/request-quote" variant="primary">
  Enquire Now
</Button>
          </div>
{/* Trust Strip */}
<div className="mt-22">
<div className="flex justify-center gap-4 flex-wrap">

<div className="flex w-52 items-center justify-center gap-3 rounded-3xl bg-white/30 backdrop-blur-md border border-white/20 px-5 py-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/30 hover:shadow-xl">

<Clock3 className="h-6 w-6 text-[#0D5845]" />

<span className="text-sm font-semibold text-[#0D5845]">
  55+ Years
</span>

</div>

<div className="flex w-52 items-center justify-center gap-3 rounded-3xl bg-white/30 backdrop-blur-md border border-white/20 px-5 py-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/30 hover:shadow-xl">
  <Award className="h-6 w-6 text-[#0D5845]" />
  <span className="text-sm font-semibold text-[#0D5845]">
    Unmatched Quality
  </span>
</div>

<div className="flex w-52 items-center justify-center gap-3 rounded-3xl bg-white/30 backdrop-blur-md border border-white/20 px-5 py-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/30 hover:shadow-xl">
  <Settings2 className="h-6 w-6 text-[#0D5845]" />
  <span className="text-sm font-semibold text-[#0D5845]">
    Custom Manufacturing
  </span>
</div>

<div className="flex w-52 items-center justify-center gap-3 rounded-3xl bg-white/30 backdrop-blur-md border border-white/20 px-5 py-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/30 hover:shadow-xl">
  <Truck className="h-6 w-6 text-[#0D5845]" />
  <span className="text-sm font-semibold text-[#0D5845]">
    On-Time Delivery
  </span>
</div>

<div className="flex w-52 items-center justify-center gap-3 rounded-3xl bg-white/30 backdrop-blur-md border border-white/20 px-5 py-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/30 hover:shadow-xl">
  <Boxes className="h-6 w-6 text-[#0D5845]" />
  <span className="text-sm font-semibold text-[#0D5845]">
    Bulk Supply
  </span>
</div>

  </div>
</div>
        </div>

      </Container>
      </div>

    </section>
  );
}