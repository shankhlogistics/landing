import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const SITE_URL = "https://www.shankhlogistics.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shankh Logistics | Advanced Enterprise Supply Chain Platform",
    template: "%s | Shankh Logistics",
  },
  description:
    "Shankh Logistics is India's advanced enterprise supply chain platform — real-time fleet tracking, warehousing, B2B & B2C freight, and intelligent dispatch automation.",
  keywords: [
    "logistics",
    "supply chain",
    "fleet tracking",
    "freight",
    "warehousing",
    "India logistics",
    "B2B logistics",
    "transport management",
    "TMS",
    "Shankh Logistics",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Shankh Logistics",
    title: "Shankh Logistics | Advanced Enterprise Supply Chain Platform",
    description:
      "India's advanced enterprise supply chain platform — real-time fleet tracking, warehousing, B2B & B2C freight, and intelligent dispatch automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shankh Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shankh Logistics | Advanced Enterprise Supply Chain Platform",
    description:
      "India's advanced enterprise supply chain platform — real-time fleet tracking, warehousing, B2B & B2C freight.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shankh Logistics",
  url: SITE_URL,
  logo: `${SITE_URL}/branding/logo-vertical.png`,
  description:
    "India's advanced enterprise supply chain platform offering real-time fleet tracking, warehousing, B2B & B2C freight, and intelligent dispatch automation.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@shankhlogistics.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="bg-[#f4f7f6] text-[#333a3f] font-sans antialiased">
        <JsonLd data={orgSchema} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
