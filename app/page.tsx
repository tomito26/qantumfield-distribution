import type { Metadata } from "next";
import Home from "@/components/home-page/home";
import JsonLd from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  description:
    "Quantumfield Distribution Ltd provides waste disposal, recycling, asset recovery, and environmental consulting across Kenya and East Africa — compliant, chain-of-custody solutions delivered to international standards.",
  alternates: { canonical: "/" },
};

export default function Homepage() {
  return (
    <main>
      {/* FAQPage schema mirrors the on-page FAQ accordion — feeds AI answer engines */}
      <JsonLd data={faqSchema()} />
      <Home />
    </main>
  );
}
