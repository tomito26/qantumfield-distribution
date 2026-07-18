import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://quantumfielddistribution.com"),
  title: {
    default: "Quantumfield Distribution",
    template: "%s | Quantumfield Distribution",
  },
  description:
    "Quantumfield Distribution Ltd is a leading eco-management company dedicated to environmental conservation, sustainable practices, and waste management solutions",
  openGraph: {
    title: "Quantumfield Distribution",
    description:
      "A leading eco-management company dedicated to environmental conservation, sustainable practices, and waste management solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Quantumfield Distribution",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantumfield Distribution",
    description:
      "A leading eco-management company dedicated to environmental conservation, sustainable practices, and waste management solutions.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
