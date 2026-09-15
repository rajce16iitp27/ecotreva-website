import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/main hero image.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
    </div>
  );
}