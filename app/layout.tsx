import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import JsonLd from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Display face for headings — geometric grotesk that pairs with Geist body.
const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Quantumfield Distribution | Waste, Recycling & Environmental Solutions",
    template: "%s | Quantumfield Distribution",
  },
  description: siteConfig.description,
  keywords: [
    "waste management",
    "waste disposal",
    "recycling solutions",
    "asset recovery",
    "e-waste disposal",
    "environmental consulting",
    "hazardous waste",
    "Nairobi",
    "Kenya",
    "sustainable waste management",
  ],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Quantumfield Distribution — Global Waste, Recycling & Environmental Solutions",
    description:
      "Waste disposal, recycling, asset recovery, and environmental consulting delivered to international standards for a cleaner, more sustainable world.",
    url: siteConfig.url,
    type: "website",
    locale: "en_US",
    siteName: "Quantumfield Distribution",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantumfield Distribution — Global Waste & Recycling Solutions",
    description:
      "Waste disposal, recycling, asset recovery, and environmental consulting delivered to international standards for a cleaner, more sustainable world.",
  },
  // TODO(seo): paste the Google Search Console verification token, then submit
  // https://quantumfielddistribution.com/sitemap.xml in Search Console.
  // verification: { google: "your-token-here" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} antialiased`}
      >
        {/* Site-wide brand entity for search + AI answer engines */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
