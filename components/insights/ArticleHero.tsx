import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ArticleInfo } from "./ArticleInfo";

type ArticleHeroProps = {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
};

export function ArticleHero({
  title,
  excerpt,
  image,
  category,
  readTime,
  date,
}: ArticleHeroProps) {
  return (
    <section className="pt-16 pb-16 lg:pt-20 lg:pb-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight text-[#0D5845] sm:text-5xl lg:text-[3.25rem]">
  {title}
</h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            {excerpt}
          </p>

          <div className="mt-6 flex justify-center">
            <ArticleInfo
              category={category}
              readTime={readTime}
              date={date}
            />
          </div>
        </div>

        <div className="relative mx-auto mt-10 h-[280px] max-w-6xl overflow-hidden rounded-3xl sm:h-[360px] lg:h-[440px]">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
          />
        </div>
      </Container>
    </section>
  );
}