export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Markets", href: "#markets" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const trustCards = [
  {
    title: "Export Ready",
    description:
      "Complete export documentation, compliance support, and coordinated logistics for seamless international delivery.",
    icon: "globe",
  },
  {
    title: "Quality Assured",
    description:
      "Rigorous quality control at every stage ensures consistent specifications and reliable batch performance.",
    icon: "shield",
  },
  {
    title: "Sustainable",
    description:
      "Renewable, plant-based materials sourced responsibly from verified manufacturers across India.",
    icon: "leaf",
  },
  {
    title: "Global Supply",
    description:
      "Dependable fulfillment programs designed for distributors, brands, and importers worldwide.",
    icon: "network",
  },
] as const;

export const productCategories = [
  {
    name: "Bagasse Packaging",
    description: "Compostable containers and tableware from sugarcane fiber.",
    gradient: "from-teal-900/80 via-teal-700/60 to-emerald-600/40",
    pattern: "grain",
  },
  {
    name: "Handmade Paper",
    description: "Artisan-crafted sheets for premium stationery and packaging.",
    gradient: "from-stone-700/70 via-amber-800/50 to-orange-600/30",
    pattern: "fiber",
  },
  {
    name: "Seed Paper",
    description: "Plantable paper embedded with wildflower and herb seeds.",
    gradient: "from-green-900/70 via-lime-800/50 to-emerald-500/30",
    pattern: "dots",
  },
  {
    name: "Molded Pulp",
    description: "Custom-fit protective packaging for electronics and retail.",
    gradient: "from-slate-800/70 via-gray-600/50 to-stone-400/30",
    pattern: "grid",
  },
  {
    name: "Bamboo Products",
    description: "Durable utensils, straws, and disposables from fast-renewable bamboo.",
    gradient: "from-emerald-950/80 via-green-800/60 to-lime-700/40",
    pattern: "lines",
  },
  {
    name: "Jute Products",
    description: "Natural fiber bags, pouches, and promotional merchandise.",
    gradient: "from-amber-950/70 via-yellow-900/50 to-amber-600/30",
    pattern: "weave",
  },
] as const;

export const whyEcotreva = [
  {
    title: "Direct Manufacturer Access",
    description:
      "Work directly with vetted Indian producers — no unnecessary intermediaries, better pricing transparency.",
  },
  {
    title: "End-to-End Export Support",
    description:
      "From sample approval to customs documentation, our team manages every step of your export journey.",
  },
  {
    title: "Custom Branding Programs",
    description:
      "Private-label packaging, custom dimensions, and branded finishes tailored to your market requirements.",
  },
  {
    title: "Flexible Volume Programs",
    description:
      "Scalable MOQ structures that grow with your business — from trial orders to container-load fulfillment.",
  },
] as const;

export const exportSteps = [
  {
    step: "01",
    title: "Inquiry & Requirements",
    description:
      "Share your product specs, target markets, and volume expectations with our export team.",
  },
  {
    step: "02",
    title: "Sample & Specification",
    description:
      "Receive samples for evaluation while we finalize technical specifications and pricing.",
  },
  {
    step: "03",
    title: "Production & QC",
    description:
      "Manufacturing begins with continuous quality checks aligned to your approved standards.",
  },
  {
    step: "04",
    title: "Export & Delivery",
    description:
      "Coordinated shipping, documentation, and tracking until goods arrive at your destination.",
  },
] as const;

export const footerLinks = {
  products: [
    "Bagasse Packaging",
    "Handmade Paper",
    "Seed Paper",
    "Molded Pulp",
    "Bamboo Products",
    "Jute Products",
  ],

  company: [
    { label: "About Ecotreva", href: "#about" },
    { label: "Export Markets", href: "#markets" },
    { label: "Our Process", href: "#process" },
    { label: "Request Quote", href: "#quote" },
  ],

  contact: [
    {
      label: "sales@ecotreva.com",
      href: "mailto:sales@ecotreva.com",
    },
    {
      label: "+91-9905760452",
      href: "tel:+919905760452",
    },
    {
      label: "Mumbai, Maharashtra, India",
      href: "#",
    },
  ],
} as const;