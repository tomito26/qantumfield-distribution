/**
 * JSON-LD structured-data builders. Pure functions fed from `lib/site.ts` and
 * `lib/constants.ts` — the output is serialized into <script type="application/ld+json">
 * by `components/seo/json-ld.tsx`.
 *
 * Placeholder-derived fields (address, geo, sameAs, certifications) are omitted
 * from the emitted schema until they hold real values, so we never publish empty
 * or misleading structured data. See SEO-AUDIT.md.
 */
import { siteConfig, faqs } from "@/lib/site";
import { service_meta, services } from "@/lib/constants";

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

function postalAddress() {
  const { streetAddress, addressLocality, addressRegion, postalCode, addressCountry } =
    siteConfig.address;
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality,
    addressRegion,
    addressCountry,
  };
  if (streetAddress) address.streetAddress = streetAddress;
  if (postalCode) address.postalCode = postalCode;
  return address;
}

function geoCoordinates() {
  const { latitude, longitude } = siteConfig.geo;
  if (!latitude || !longitude) return undefined;
  return { "@type": "GeoCoordinates", latitude, longitude };
}

/** Organization + LocalBusiness — the core brand entity, emitted site-wide. */
export function organizationSchema() {
  const geo = geoCoordinates();
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    image: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    foundingDate: siteConfig.foundingDate,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    address: postalAddress(),
    ...(geo ? { geo } : {}),
    areaServed: siteConfig.areaServed.map((name) => ({ "@type": "Place", name })),
    ...(siteConfig.sameAs.length ? { sameAs: [...siteConfig.sameAs] } : {}),
    ...(siteConfig.registrationNumber
      ? { identifier: siteConfig.registrationNumber }
      : {}),
    ...(siteConfig.certifications.length
      ? {
          hasCredential: siteConfig.certifications.map((name) => ({
            "@type": "EducationalOccupationalCredential",
            name,
          })),
        }
      : {}),
  };
}

/** WebSite entity — links pages to the publishing organization. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": ORG_ID },
  };
}

/**
 * Service schema for a service route (keyed by path, e.g. "/waste-disposal").
 * Pulls the display title + tagline from `service_meta` and the summary from
 * `services` in lib/constants.ts.
 */
export function serviceSchema(route: string) {
  const meta = service_meta[route];
  if (!meta) return null;
  const summary = services.find((s) => s.link === route)?.description ?? meta.tagline;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: meta.title,
    serviceType: meta.title,
    description: summary,
    url: `${siteConfig.url}${route}`,
    provider: { "@id": ORG_ID },
    areaServed: siteConfig.areaServed.map((name) => ({ "@type": "Place", name })),
  };
}

/** BreadcrumbList from an ordered [name, path] trail. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/** FAQPage from the shared FAQ list (defaults to the site-wide FAQs). */
export function faqSchema(items = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
