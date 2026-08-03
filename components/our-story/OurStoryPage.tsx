import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function OurStoryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-4 pb-6 sm:pt-6 sm:pb-8">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6C7A51]">
              Since 1971
            </p>

            <h1 className="mt-4 font-display text-5xl font-bold text-primary sm:text-6xl">
              Our Story
            </h1>

            <p className="mx-auto mt-3 max-w-3xl text-xl leading-9 text-gray-600">
            A Legacy of Sustainable Innovation
            </p>
          </div>
        </Container>
      </section>
  
      <section className="pt-4 pb-12">
  <Container>
    <div className="mx-auto max-w-3xl space-y-8 text-lg leading-9 text-gray-700">

      <p>
        The story of <strong>Ecotreva &amp; Co.</strong> began in 1971, when our
        grandparents built a business around materials, craftsmanship and
        responsible use of resources.
      </p>

      <p>
        Long before <em>eco-friendly</em> and <em>sustainability</em> became
        part of the modern business vocabulary, these principles were already
        embedded in the way we worked.
      </p>

      <p>
        Our early years were closely connected with traditional handmade paper
        centres, recycled paper and agricultural-residue-based materials. At a
        time when India had limited access to conventional softwood resources,
        the paper industry increasingly looked towards what the country had in
        abundance — materials such as bagasse from sugarcane, wheat straw,
        bamboo and recovered paper.
      </p>

      <p>
        Waste was not simply something to be discarded. Old newspapers and
        waste paper were collected, reused and given another life, while
        agricultural residues became valuable raw materials.
      </p>

      <p>
        For our family, this approach was never driven by a trend. It was
        simply a better way of doing business.
      </p>

    </div>
  </Container>
</section>
<section className="bg-accent-muted/20 pt-10 pb-10 sm:pt-8 sm:pb-12">
  <Container>
    <div className="mx-auto max-w-3xl">

      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6C7A51]">
        Today
      </p>

      <h2 className="mt-4 font-display text-4xl font-bold text-primary">
        From Our Grandparents' Generation to a Global Future
      </h2>

      <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">

        <p>
          More than five decades later, that foundation continues through
          <strong> Ecotreva &amp; Co.</strong>
        </p>

        <p>
          What began with traditional paper and resource-conscious
          manufacturing has evolved into a broader vision: connecting
          sustainable innovations from India with businesses across the world.
        </p>

        <p>
          Today, our portfolio extends across handmade and recycled papers,
          bagasse products, bamboo products, moulded pulp, jute and other
          environmentally responsible materials.
        </p>

        <p>
          We combine the knowledge and sourcing relationships built over
          generations with today's expectations for certified quality,
          dependable supply and international standards.
        </p>

      </div>

    </div>
    </Container>
  </section>

  <section className="bg-white pt-6 pb-20">
  <Container>
    <div className="mx-auto max-w-3xl text-center">

      <p className="text-2xl text-primary sm:text-4xl">
        The materials may have evolved.
      </p>

      <p className="mt-8 text-2xl text-primary sm:text-4xl">
        The markets may have changed.
      </p>

      <div className="mx-auto my-12 h-px w-32 bg-[#C8B88A]" />

      <h2 className="text-4xl font-bold text-[#0F3D3E] sm:text-4xl">
  Our philosophy has not.
</h2>

      <p className="mx-auto mt-10 max-w-3xl text-2xl leading-10 text-gray-500 text-muted">
        From 1971 to today, we remain committed to finding greater value in
        natural, renewable and recovered resources — and building long-term
        partnerships around them.
      </p>

      <div className="mx-auto my-12 h-px w-20 bg-[#C8B88A]" />

      <div className="mt-16 flex justify-center">
  <div className="-translate-x-4">
    <Logo />
  </div>
</div>

<p className="mt-8 -translate-x-1 text-xl font-semibold tracking-[0.08em] text-[#0F3D3E]">
  Where <span className="text-[#407E4F]">Green</span> Meets Global
</p>
    </div>
  </Container>
</section>

</main>
);
}