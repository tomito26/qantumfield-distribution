import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";

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
  metadataBase: new URL("https://quantumfielddistribution.com"),
  title: {
    default: "Quantumfield Distribution",
    template: "%s | Quantumfield Distribution",
  },
  description:
    "Quantumfield Distribution Ltd delivers waste disposal, recycling, asset recovery, and environmental consulting to international standards — helping organisations cut waste, stay compliant, and build a cleaner planet.",
  openGraph: {
    title: "Quantumfield Distribution — Global Waste, Recycling & Environmental Solutions",
    description:
      "Waste disposal, recycling, asset recovery, and environmental consulting delivered to international standards for a cleaner, more sustainable world.",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
