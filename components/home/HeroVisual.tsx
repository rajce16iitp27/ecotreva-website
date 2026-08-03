import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src="/hero-products-v2.png"
        alt=""
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}