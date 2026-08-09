import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us — Shankh Logistics",
  description:
    "Learn how Shankh Logistics is transforming Indian supply chains with technology-first freight management, real-time tracking, and a vendor-first ecosystem.",
  alternates: { canonical: "https://www.shankhlogistics.com/about" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shankhlogistics.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.shankhlogistics.com/about" },
  ],
};

const milestones = [
  { year: "2021", title: "Founded", desc: "Shankh Logistics incorporated with a mission to digitize Indian freight." },
  { year: "2022", title: "First 100 Clients", desc: "Reached 100 enterprise clients across 8 states within the first year." },
  { year: "2023", title: "Real-Time GPS Network", desc: "Launched live GPS tracking with sub-30-second location updates." },
  { year: "2024", title: "Vendor Platform", desc: "Opened the platform to independent fleet owners — 2,000+ vendors onboarded." },
  { year: "2025", title: "Pan-India Hub Network", desc: "50+ warehousing hubs operational across India." },
];

const values = [
  { icon: "⚡", title: "Speed", desc: "Every feature we build reduces friction. Faster quotes, faster dispatch, faster delivery." },
  { icon: "🔍", title: "Transparency", desc: "Real-time tracking for every stakeholder — shippers, vendors, and end customers." },
  { icon: "🤝", title: "Partnership", desc: "We grow when our vendors grow. Vendor success is our success." },
  { icon: "🌱", title: "Sustainability", desc: "Route optimisation reduces empty kilometres and carbon emissions." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative h-80 flex items-end pb-0">
        <Image
          src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=2000"
          alt="Shankh Logistics operations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#333a3f]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32 w-full">
          <nav className="text-xs text-gray-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white">
            About <span className="text-gradient">Shankh Logistics</span>
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#20a396] mb-3 block">Our Mission</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#333a3f] mb-6 leading-tight">
                Making Indian Freight Intelligent, Transparent &amp; Profitable
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                India moves on trucks. Yet the industry that carries ₹50 lakh crore worth of
                goods every year is still largely paper-based, opaque, and inefficient.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Shankh Logistics exists to change that. We built a platform where shippers
                get real-time visibility, vendors get consistent freight, and everyone gets
                paid faster.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our technology — from live GPS tracking to AI-assisted dispatch — is
                purpose-built for the scale and complexity of Indian logistics.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Enterprise Clients" },
                { value: "2000+", label: "Registered Vendors" },
                { value: "50+", label: "Warehousing Hubs" },
                { value: "18+", label: "States Covered" },
              ].map((s) => (
                <div key={s.label} className="glass-card p-6 text-center">
                  <div className="text-3xl font-extrabold text-[#20a396]">{s.value}</div>
                  <div className="text-sm text-gray-500 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#f4f7f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#20a396] mb-3 block">Our Journey</span>
            <h2 className="text-3xl font-extrabold text-[#333a3f]">Milestones That Define Us</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#20a396]/30" />
            <div className="space-y-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start pl-0">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#20a396] flex items-center justify-center text-white font-bold text-xs text-center leading-tight z-10">
                    {m.year}
                  </div>
                  <div className="glass-card p-6 flex-1">
                    <h3 className="font-bold text-[#333a3f] mb-1">{m.title}</h3>
                    <p className="text-gray-500 text-sm">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#20a396] mb-3 block">What We Stand For</span>
            <h2 className="text-3xl font-extrabold text-[#333a3f]">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="glass-card p-8 text-center card-hover">
                <span className="text-5xl mb-4 block">{v.icon}</span>
                <h3 className="font-bold text-[#333a3f] mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
