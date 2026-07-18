import {
  BadgeCheck,
  Users,
  Building2,
  Phone,
  Mail,
  MapPin,
  Award,
  TrendingUp,
  Lightbulb,
  HeartHandshake,
  Target,
  Telescope,
  CalendarClock,
  Truck,
  Recycle,
  ShieldCheck,
  FileCheck2,
  Leaf,
  Globe2,
  type LucideIcon,
} from "lucide-react";

export const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    subLink: [
      {
        title: "Waste Disposal",
        link: "/waste-disposal",
        image: "/assets"
      },
      {
        title: "Recycling Solutions",
        link: "/recycling-solutions",
      },
      {
        title: "Asset Recovery and Disposal",
        link: "/asset-recovery-and-disposal",
      },
      {
        title: "Environmental Consulting",
        link: "/environmental-consulting",
      },
    ],
  },
];

export const our_services = [
  {
    title: "Waste Disposal",
    link: "/waste-disposal",
    image: "/assets/Bin-1--Streamline-Ultimate.png"
  },
  {
    title: "Recycling Solutions",
    link: "/recycling-solutions",
    image: "/assets/Recycling-Sign--Streamline-Ultimate.png"
  },
  {
    title: "Asset Recovery and Disposal",
    link: "/asset-recovery-and-disposal",
    image: "/assets/Recycled-Box-1--Streamline-Ultimate.png"
  },
  {
    title: "Environmental Consulting",
    link: "/environmental-consulting",
    image: "/assets/Products-Briefcase--Streamline-Ultimate.png"
  },
];

export const items = [
  "Efficient Waste Collection",
  "Cost-effective disposal solution",
  "Eco-Friendly Disposal",
  "Commercial Waste Management",
];
export const services = [
  {
    id: 1,
    title: "Waste Disposal",
    description: "Proper disposal of general, recyclable, and hazardous waste.",
    image:
      "/assets/The-Benefits-of-Waste-Collection-Services-for-Your-Business-scaled.jpg",
    link: "/waste-disposal",
  },
  {
    id: 2,
    title: "Recycling Solutions",
    description:
      "Sorting and recycling services for paper, plastic, glass, and metals.",
    image: "/assets/UNDP-Jordan-2019-women-recycling-1304_2 (1).jpg",
    link: "/recycling-solutions",
  },
  {
    id: 3,
    title: "Asset Recovery and Disposal ",
    description:
      "Efficient recycling for electronic waste (e-waste), plastics, and metals.",
    image: "/assets/article-pic-1.jpg",
    link: "/asset-recovery-and-disposal",
  },
  {
    id: 4,
    title: "Environmental Consulting",
    description:
      "We offer expertise in waste audits, strategic planning, and operational improvements.",
    image: "/assets/medium-shot-men-working-together (1).jpg",
    link: "/environmental-consulting",
  },
];

export const reasons: {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    id: 1,
    title: "Unmatched Expertise",
    description:
      "Skilled environmental specialists delivering measurable, audit-ready results.",
    icon: Award,
  },
  {
    id: 2,
    title: "Proven Results",
    description: "Tangible, measurable environmental impact across every engagement.",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Innovative Approach",
    description:
      "Creative, technology-driven solutions to complex environmental challenges.",
    icon: Lightbulb,
  },
  {
    id: 4,
    title: "Community-Centric",
    description: "Empowering and uplifting the communities we operate in.",
    icon: HeartHandshake,
  },
];
export const comments = [
  {
    id: 1,
    comment:
      "QuantumField Distribution has truly transformed our waste management process. Their team is highly professional, ensuring that we adhere to all environmental regulations while efficiently handling all our waste disposal needs.",
    client: {
      name: "Sarah K",
      profile_photo_url: "/assets/african-american-woman-autumn-outdoors.jpg",
      company: " Urban Enterprises",
    },
  },
  {
    id: 2,
    comment:
      "As a company that values sustainability, we needed a reliable waste management partner. QuantumField Distribution exceeded our expectations with their innovative recycling programs and waste reduction strategies",
    client: {
      name: "John M",
      profile_photo_url:
        "/assets/handsome-young-african-american-with-khaki-tshirt.jpg",
      company: "Corporate Solutions Ltd",
    },
  },
  {
    id: 3,
    comment:
      "We've been using QuantumField Distribution for over a year, and their service has been nothing short of excellent. Their punctuality and attention to detail are impressive, and they've helped us create a waste disposal strategy that aligns with our company's environmental goals.",
    client: {
      name: "Alex J",
      profile_photo_url:
        "/assets/young-african-american-man-wearing-denim-shirt.jpg",
      company: " Apex Innovations",
    },
  },
  {
    id: 4,
    comment:
      "QuantumField Distribution has been a game-changer for our waste management system. From the timely collection to the effective recycling and disposal processes, we've seen a noticeable reduction in waste costs",
    client: {
      name: "Vanessa W",
      profile_photo_url:
        "/assets/young-beautiful-woman-with-curly-hair-isolated.jpg",
      company: "Pioneer Group",
    },
  },
];

export const our_partners = [
  {
    id: 2,
    logo: "/assets/Rectangle 35.png",
    partner: "NCBA Bank",
  },
  {
    id: 3,
    logo: "/assets/Rectangle 36.png",
    partner: "NCBA Bank",
  },
  {
    id: 4,
    logo: "/assets/safaricom.png",
    partner: "Safaricom",
  },
];

export const our_processes: {
  title: string;
  icon: LucideIcon;
  description: string;
}[] = [
  {
    title: "Schedule a Pickup",
    icon: CalendarClock,
    description:
      "Get in touch to schedule a collection that works for you. We'll assess your waste streams and recommend a solution tailored to your requirements and compliance needs.",
  },
  {
    title: "Pickup and Transport",
    icon: Truck,
    description:
      "Our team arrives on the scheduled date to collect your waste, sorting and separating recyclable materials from non-recyclable ones under full chain-of-custody.",
  },
  {
    title: "Recycle & Recover",
    icon: Recycle,
    description:
      "Collected materials are transported to our facilities, where they are sorted, processed, and repurposed into new products — with disposal certificates issued on request.",
  },
];
export const commitments: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Our Mission",
    description:
      "To contribute to a cleaner, greener planet by delivering innovative and responsible recycling and waste disposal solutions that benefit clients and the environment.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To be a global leader in environmental conservation and waste management, fostering a sustainable future for generations to come.",
    icon: Telescope,
  },
];
export const metrics = [
  { title: "20", suffix: "+", description: "Years of Experience", icon: BadgeCheck },
  { title: "3000", suffix: "+", description: "Clients Served", icon: Users },
  { title: "10", suffix: "+", description: "Industries Served", icon: Building2 },
];

// Per-service hero metadata — single source for the service page hero
// (title, breadcrumb label, hero image, intro). Keyed by route path so the
// hero component can do a simple lookup instead of nested ternaries.
export const service_meta: Record<
  string,
  { title: string; heroImage: string; tagline: string }
> = {
  "/waste-disposal": {
    title: "Waste Disposal",
    heroImage: "/assets/USE-105-garbage-dump-truck-1.jpg",
    tagline:
      "Responsible, compliant disposal of general, hazardous, and specialised waste streams.",
  },
  "/recycling-solutions": {
    title: "Recycling Solutions",
    heroImage: "/assets/UNDP-Jordan-2019-women-recycling-1304_2.jpg",
    tagline:
      "Sorting and recycling programmes that divert materials from landfill and close the loop.",
  },
  "/asset-recovery-and-disposal": {
    title: "Asset Recovery and Disposal",
    heroImage: "/assets/gettyimages-494832555-scaled.webp",
    tagline:
      "Secure recovery and value extraction from e-waste, plastics, and end-of-life assets.",
  },
  "/environmental-consulting": {
    title: "Environmental Consulting",
    heroImage: "/assets/business-partners-discussing-contract-terms.jpg",
    tagline:
      "Waste audits, strategy, and compliance guidance to hit your sustainability targets.",
  },
};

// Global-reach framing. NOTE: figures below are illustrative capability
// framing — replace with verified numbers before publishing.
export const global_reach = {
  eyebrow: "Global Reach, Local Expertise",
  title: "Trusted to manage waste at scale",
  description:
    "From our base in Nairobi, we partner with businesses, institutions, and governments to deliver waste, recycling, and environmental services to international standards — combining on-the-ground operational know-how with globally benchmarked processes.",
  highlights: [
    { value: "25", suffix: "K+", label: "Tonnes of waste diverted each year" },
    { value: "98", suffix: "%", label: "Client compliance & retention rate" },
    { value: "24", suffix: "/7", label: "Operational support and collection" },
  ],
};

// Standards / compliance strip. NOTE: confirm exact certifications and
// accreditations with the business before publishing these publicly.
export const standards: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Regulatory Compliance",
    description: "Operations aligned with local and international environmental law.",
    icon: ShieldCheck,
  },
  {
    title: "Chain-of-Custody",
    description: "Full traceability and duty-of-care documentation on every job.",
    icon: FileCheck2,
  },
  {
    title: "Sustainable by Design",
    description: "Landfill diversion and circular-economy principles built in.",
    icon: Leaf,
  },
  {
    title: "Globally Benchmarked",
    description: "Processes measured against recognised international standards.",
    icon: Globe2,
  },
];
export const contact_details = [
  {
    icon: Phone,
    text: "+254 700 524588",
    title: "Have any question?",
  },
  {
    icon: Mail,
    text: "quantumfielddistribution@gmail.com",
    title: "Write email",
  },
  {
    icon: MapPin,
    text: "Nairobi, Kenya",
    title: "Visit anytime",
  },
];