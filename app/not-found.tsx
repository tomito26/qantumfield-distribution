import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { our_services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for could not be found. Explore our waste, recycling, asset recovery, and environmental consulting services instead.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center section-y page-x text-center">
      <p className="eyebrow eyebrow--center mb-4">404</p>
      <h1 className="section-title max-w-2xl">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-4 max-w-lg text-body-gray">
        The page may have moved or no longer exists. Head back home, or jump
        straight to one of our services.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link href="/">
          <Button variant="brand" size="lg">
            Back to Home
          </Button>
        </Link>
        <Link href="/about#contact">
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </Link>
      </div>
      <nav
        aria-label="Services"
        className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-brand"
      >
        {our_services.map((service) => (
          <Link
            key={service.link}
            href={service.link}
            className="transition-colors hover:text-brand-dark hover:underline"
          >
            {service.title}
          </Link>
        ))}
      </nav>
    </main>
  );
}
