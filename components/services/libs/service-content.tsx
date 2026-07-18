import ContactUsForm from "@/components/forms/contact-us-form";
import { Check } from "lucide-react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export type ServiceFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ServiceHighlight = {
  title: string;
  description: string;
};

export interface ServiceContentProps {
  title: string;
  image: string;
  intro: string[];
  highlights: ServiceHighlight[];
  whyTitle: string;
  features: ServiceFeature[];
}

/**
 * Shared layout for every service page body. Each service page supplies its
 * own copy/data and this component renders the standardized, design-system
 * styled markup — removing the near-identical duplication that previously
 * lived in each of the four service components.
 */
const ServiceContent = ({
  title,
  image,
  intro,
  highlights,
  whyTitle,
  features,
}: ServiceContentProps) => {
  return (
    <article>
      <h2 className="font-display text-3xl font-bold tracking-tight text-monochrome md:text-4xl">
        {title}
      </h2>

      <div className="relative mt-6 h-[240px] w-full overflow-hidden rounded-2xl shadow-soft md:h-[380px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover"
        />
      </div>

      <div className="mt-8 space-y-4 text-body-gray">
        {intro.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <ul className="mt-8 space-y-5">
        {highlights.map((item) => (
          <li key={item.title} className="flex gap-4">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10">
              <Check className="h-4 w-4 stroke-brand" />
            </span>
            <div>
              <h3 className="font-display font-semibold text-monochrome">
                {item.title}
              </h3>
              <p className="mt-1 text-body-gray">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-14">
        <h3 className="font-display text-2xl font-bold text-monochrome">
          {whyTitle}
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="card flex gap-4 p-5">
              <span className="icon-tile">
                <feature.icon className="h-6 w-6" />
              </span>
              <div>
                <h4 className="font-display font-semibold text-brand">
                  {feature.title}
                </h4>
                <p className="mt-1 text-sm text-body-gray">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 card p-6 md:p-8">
        <ContactUsForm />
      </div>
    </article>
  );
};

export default ServiceContent;
