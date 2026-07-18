"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error for monitoring; replace with a real logger when wired.
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center section-y page-x text-center">
      <p className="eyebrow eyebrow--center mb-4">Something went wrong</p>
      <h1 className="section-title max-w-2xl">
        We hit an unexpected error
      </h1>
      <p className="mt-4 max-w-lg text-body-gray">
        Please try again. If the problem persists, get in touch and we&apos;ll
        help you out.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button variant="brand" size="lg" onClick={reset}>
          Try Again
        </Button>
        <Link href="/">
          <Button variant="outline" size="lg">
            Back to Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
