import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.shankhlogistics.com";

export const metadata: Metadata = {
  title: "Logistics Solutions — FTL, LTL, Warehousing & Last Mile | Shankh Logistics",
  description:
    "Explore Shankh Logistics' full suite of freight solutions — Full Truckload (FTL), Less Than Truckload (LTL), warehousing, last-mile delivery, cargo insurance, and supply chain analytics.",
  alternates: { canonical: "https://www.shankhlogistics.com/services" },
};

const services = [
  {
    icon: "🚛",
    title: "Full Truckload (FTL)",
    description:
      "Dedicated vehicles for high-volume freight with real-time GPS tracking and guaranteed transit times across India.",
    features: ["Guaranteed vehicle allocation", "Real-time GPS tracking", "E-way bill automation", "Pan-India coverage"],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: "📦",
    title: "Less Than Truckload (LTL)",
    description:
      "Cost-effective shared freight solutions for smaller shipments without compromising on delivery timelines.",
    features: ["Pay only for space used", "Consolidated loads", "End-to-end tracking", "Flexible pickup windows"],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: "🏭",
    title: "Warehousing & Storage",
    description:
      "Pan-India hub network with ambient, temperature-controlled, and hazmat-compliant storage facilities.",
    features: ["50+ hubs across India", "Temperature-controlled zones", "24/7 CCTV monitoring", "WMS integration"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: "🔄",
    title: "Last Mile Delivery",
    description:
      "End-to-end B2C delivery with live proof-of-delivery, digital POD, and automated customer notifications.",
    features: ["Live driver tracking", "Digital e-POD", "SMS/WhatsApp updates", "Failed delivery management"],
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: "🛡️",
    title: "Cargo Insurance",
    description:
      "Comprehensive in-transit insurance coverage for all freight categories, processed fully digitally.",
    features: ["Instant policy issuance", "All-risk coverage", "Digital claims", "Competitive premiums"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: "📊",
    title: "Supply Chain Analytics",
    description:
      "Real-time dashboards, predictive ETAs, and performance reports to make data-driven logistics decisions.",
    features: ["Live KPI dashboards", "Predictive ETA engine", "Carrier performance reports", "Cost analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Shankh Logistics Services",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.description,
      provider: { "@type": "Organization", name: "Shankh Logistics" },
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <section className="relative h-80">
        <Image
          src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=2000"
          alt="Logistics services"
          fill className="object-cover" priority
        />
        <div className="absolute inset-0 bg-[#333a3f]/80" />
        <div className="relative z-10 flex items-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32 h-full w-full">
          <div>
            <nav className="text-xs text-gray-400 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Solutions</span>
            </nav>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white">
              Our <span className="text-gradient">Solutions</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-24 bg-[#f4f7f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((s, idx) => (
              <div
                key={s.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={idx % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <span className="text-4xl mb-4 block">{s.icon}</span>
                  <h2 className="text-3xl font-extrabold text-[#333a3f] mb-4">{s.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{s.description}</p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="w-5 h-5 rounded-full bg-[#20a396]/20 text-[#20a396] flex items-center justify-center text-xs font-bold">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative h-72 rounded-3xl overflow-hidden shadow-xl ${idx % 2 !== 0 ? "lg:col-start-1" : ""}`}>
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#20a396]/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#20a396]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 mb-8">Join hundreds of enterprises already using Shankh Logistics.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-dark">Talk to Our Team</Link>
            <a href={`${APP_URL}/vendor/register`} className="bg-white text-[#20a396] px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-100 transition-all inline-flex items-center gap-2">
              Register as Vendor
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
