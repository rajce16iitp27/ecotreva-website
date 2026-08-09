import { InsightsHero } from "@/components/insights/InsightsHero";
import { FeaturedInsight } from "@/components/insights/FeaturedInsight";
import { LatestInsights } from "@/components/insights/LatestInsights";

export default function InsightsPage() {
  return (
    <main>
      <InsightsHero />
      <FeaturedInsight />
      <LatestInsights />
    </main>
  );
}