import JsonLd from "./json-ld";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { service_meta } from "@/lib/constants";

/**
 * Emits Service + BreadcrumbList JSON-LD for a service route. Keeps the thin
 * service page files free of schema wiring (per CLAUDE.md app/ conventions).
 */
const ServiceSchema = ({ route }: { route: string }) => {
  const service = serviceSchema(route);
  if (!service) return null;
  const title = service_meta[route]?.title ?? "";
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: title, path: route },
  ]);
  return <JsonLd data={[service, breadcrumb]} />;
};

export default ServiceSchema;
