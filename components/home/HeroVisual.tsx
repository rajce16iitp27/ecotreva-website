"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  "/mast-hero-product-1.png",
  "/hero-product-2.png",
  "/hero-product-3.png",
  "/hero-product-4.png",
  "/hero-product-5.png",
];

export function HeroVisual() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((current) => (current + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}
    </>
  );
}