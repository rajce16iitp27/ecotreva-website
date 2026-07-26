import Image from "next/image";

export function HeroVisual() {
  return (
    <div
      className="relative aspect-square w-full max-w-xl animate-fade-in animation-delay-300 lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/10 via-accent-muted/30 to-primary/5 shadow-2xl shadow-primary/10" />

      <div className="absolute inset-4 overflow-hidden rounded-[1.75rem]">
        <Image
          src="/hero-products.png"
          alt="Eco-friendly materials exported from India"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}