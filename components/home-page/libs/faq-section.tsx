"use client";

import { faqs } from "@/lib/site";
import { Plus } from "lucide-react";
import { useState } from "react";

/**
 * Home-page FAQ accordion. The same `faqs` data is emitted as FAQPage JSON-LD
 * from app/page.tsx, so on-screen answers and structured data stay in sync —
 * the core AEO (answer-engine optimization) surface for the site.
 */
const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-y bg-canvas page-x scroll-mt-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="eyebrow eyebrow--center mb-4">FAQ</p>
        <h2 className="section-title">Frequently asked questions</h2>
        <p className="mt-4 text-body-gray">
          Answers to the questions organisations most often ask about our waste,
          recycling, and environmental services.
        </p>
      </div>

      <div className="mx-auto max-w-3xl divide-y divide-black/[0.08] rounded-2xl border border-black/[0.08] bg-white">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.question} className="px-6">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-base font-semibold text-monochrome"
                >
                  {faq.question}
                  <Plus
                    className={`h-5 w-5 shrink-0 stroke-brand transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
              </h3>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                }`}
              >
                <p className="overflow-hidden text-body-gray">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
