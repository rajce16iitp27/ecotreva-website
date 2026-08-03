import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Link
  href="/"
  scroll={true}
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