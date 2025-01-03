import { BadgeCheck, Users, Building2, Phone, Mail, MapPin } from "lucide-react";

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
    title: "Waste  Disposal",
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

export const reasons = [
  {
    id: 1,
    title: "Unmatched Expertise",
    description:
      "Skilled environmental specialists delivering quality results.",
    image: "/assets/Notes-Settings--Streamline-Ultimate.png",
  },
  {
    id: 2,
    title: "Proven Results",
    description: "Tangible, measurable environmental impact.",
    image:
      "/assets/Presentation-Projector-Screen-Pie-Chart--Streamline-Ultimate.png",
  },
  {
    id: 3,
    title: "Innovative Approach",
    description:
      "Creative, technology-driven solutions to environmental challenges.",
    image: "/assets/Bulb-1--Streamline-Ultimate (1).png",
  },
  {
    id: 4,
    title: "Community-Centric",
    description: " Empowering and uplifting local communities.",
    image: "/assets/Network-Users--Streamline-Ultimate.png",
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

export const our_processes = [
  {
    title: "Schedule a Pickup",
    image: "/assets/Calendar-Edit-1--Streamline-Ultimate.png",
    description:
      "Get in touch with us to schedule a pickup day that works for you. We'll discuss your waste management needs and recommend a solution that's tailored to your specific requirements.",
  },
  {
    title: "Pickup and Transport",
    image: "/assets/Delivery-Truck-2--Streamline-Ultimate.png",
    description:
      "On the scheduled date, our team will arrive at your premises to collect your waste. We'll sort and separate the recyclable materials from the non-recyclable ones.",
  },
  {
    title: "Waste Recycling",
    image: "/assets/Recycling-Sign--Streamline-Ultimate.png",
    description:
      " We take recycling seriously. The materials we collect are transported to our recycling facility, where they are sorted, processed, and repurposed into new products.",
  },
];
export const commitments = [
  {
    title: "Our Mission",
    description:
      "To contribute to a cleaner, greener planet by delivering  innovative and responsible recycling and waste disposal solutions that benefit clients and the environment.",
    icon: "/assets/Target-Center-1--Streamline-Ultimate.png",
  },
  {
    title: "Our Vision",
    description:
      "To be a global leader in environmental conservation and waste management, fostering a sustainable future for generations to come.",
    icon: "/assets/Astronomy-Telescope--Streamline-Ultimate.png",
  },
];
export const metrics = [
  { title: "20", description: "Years Experience", icon: BadgeCheck },
  { title: "3000", description: "Satisfied Clients", icon: Users },
  { title: "10", description: "Industries Served", icon: Building2 },
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