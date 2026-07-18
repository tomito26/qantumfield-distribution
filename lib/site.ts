/**
 * Central brand / SEO configuration — single source of truth for site metadata,
 * sitemap URLs, JSON-LD structured data, and llms.txt.
 *
 * IMPORTANT: values tagged `// TODO(seo)` are placeholders. Confirm them with the
 * business and replace before this data is published — Google and AI answer
 * engines will surface whatever is here. See SEO-AUDIT.md for the full checklist.
 */

export const siteConfig = {
  name: "Quantumfield Distribution",
  legalName: "Quantumfield Distribution Ltd",
  /** Production origin — also set as metadataBase in app/layout.tsx. */
  url: "https://quantumfielddistribution.com",
  /** Absolute-from-root path to the brand logo (used in schema + icons). */
  logo: "/assets/quantumfield-logo.png",
  description:
    "Quantumfield Distribution Ltd delivers waste disposal, recycling, asset recovery, and environmental consulting to international standards — helping organisations cut waste, stay compliant, and build a cleaner planet.",
  /** Short tagline for OG images / social. */
  tagline: "Global Waste, Recycling & Environmental Solutions",
  foundingDate: "2004", // TODO(seo): confirm founding year (site claims 20+ years)

  telephone: "+254700524588",
  email: "quantumfielddistribution@gmail.com", // TODO(seo): move to a domain address (e.g. info@quantumfielddistribution.com) for brand trust

  address: {
    streetAddress: "", // TODO(seo): add full street address (schema LocalBusiness ranks far better with a real street + geo)
    addressLocality: "Nairobi",
    addressRegion: "Nairobi County",
    postalCode: "", // TODO(seo): add postal code
    addressCountry: "KE",
  },

  geo: {
    latitude: "", // TODO(seo): add latitude (e.g. from Google Maps place)
    longitude: "", // TODO(seo): add longitude
  },

  /** Company registration / compliance identifiers. */
  registrationNumber: "", // TODO(seo): add Companies Registry number
  /** Certifications referenced as "international standards" on the site. */
  certifications: [] as string[], // TODO(seo): list concrete certs, e.g. "ISO 14001:2015", "NEMA licence no. …"

  /** Regions the business serves (schema areaServed + copy). */
  areaServed: ["Kenya", "East Africa"],

  /**
   * Live social profile URLs → schema `sameAs` + footer links.
   * TODO(seo): create/verify official profiles, then paste the real URLs here
   * (currently the footer links to "#"). Consistent profiles are the backbone
   * of brand recognition across the web.
   */
  sameAs: [] as string[],
} as const;

/**
 * On-site FAQ — answer-first Q&A that feeds Google FAQ features and AI answer
 * engines (AEO). Rendered on the home page and emitted as FAQPage JSON-LD.
 */
export const faqs: { question: string; answer: string }[] = [
  {
    question: "What services does Quantumfield Distribution offer?",
    answer:
      "Quantumfield Distribution provides four core services: waste disposal (general, hazardous, construction, and organic waste), recycling solutions for paper, plastic, glass, and metals, asset recovery and disposal for e-waste and end-of-life equipment, and environmental consulting covering waste audits, strategy, and compliance.",
  },
  {
    question: "What areas does Quantumfield Distribution serve?",
    answer:
      "We are based in Nairobi, Kenya, and serve businesses, institutions, and governments across Kenya and the wider East Africa region, delivering waste, recycling, and environmental services to internationally benchmarked standards.",
  },
  {
    question: "Do you handle hazardous waste?",
    answer:
      "Yes. We manage general, recyclable, and hazardous waste streams under full chain-of-custody, with duty-of-care documentation provided on every job to keep your operations compliant with local and international environmental regulations.",
  },
  {
    question: "Are disposal or recycling certificates provided?",
    answer:
      "Yes. Collected materials are processed at our facilities, and disposal or recycling certificates are issued on request so you have audit-ready proof of responsible, compliant handling.",
  },
  {
    question: "How do I schedule a waste collection?",
    answer:
      "Get in touch through our contact form or by phone to schedule a pickup. We assess your waste streams, recommend a tailored solution, then collect on your scheduled date — sorting recyclable from non-recyclable materials before transport to our facilities.",
  },
  {
    question: "Can you help my organisation reduce waste and meet sustainability targets?",
    answer:
      "Absolutely. Our environmental consulting team runs waste audits, builds diversion and circular-economy strategies, and identifies operational improvements that cut waste, lower disposal costs, and move you toward measurable sustainability goals.",
  },
];
