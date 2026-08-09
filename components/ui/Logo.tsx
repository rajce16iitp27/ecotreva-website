"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "", priority = false }: LogoProps) {
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      className={`inline-flex shrink-0 ${className}`}
    >
      <Image
        src="/ecotreva_logo.png"
        alt="Ecotreva"
        width={400}
        height={100}
        priority={priority}
        className="h-10 w-auto sm:h-11 lg:h-12"
      />
    </Link>
  );
}