import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { insights } from "@/lib/insights-data";

import { ArticleHero } from "@/components/insights/ArticleHero";
import { ArticleContent } from "@/components/insights/ArticleContent";
import { RelatedInsights } from "@/components/insights/RelatedInsights";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = insights.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return {
      title: "Article Not Found | Ecotreva",
    };
  }

  return {
    title: article.seoTitle,
    description: article.metaDescription,

    alternates: {
      canonical: `https://ecotreva.com/insights/${article.slug}`,
    },

    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      url: `https://ecotreva.com/insights/${article.slug}`,
      type: "article",
      authors: [article.author],
      images: [
        {
          url: `https://ecotreva.com${article.image}`,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function InsightArticlePage({
  params,
}: Props) {
  const { slug } = await params;

  const article = insights.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: [`https://ecotreva.com${article.image}`],

    author: {
      "@type": "Organization",
      name: article.author,
    },

    publisher: {
      "@type": "Organization",
      name: "Ecotreva",
      url: "https://ecotreva.com",
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ecotreva.com/insights/${article.slug}`,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <ArticleHero
        title={article.title}
        excerpt={article.excerpt}
        image={article.image}
        category={article.category}
        readTime={article.readTime}
        date={article.date}
      />

      <ArticleContent content={article.content} />

      <RelatedInsights currentSlug={article.slug} />
    </main>
  );
}