import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.shankhlogistics.com";

export const metadata: Metadata = {
  title: "Shankh Logistics | Advanced Enterprise Supply Chain Platform",
  description:
    "India's most advanced logistics platform — real-time fleet tracking, B2B & B2C freight, warehousing, and intelligent dispatch. Join 500+ enterprises.",
  alternates: { canonical: "https://www.shankhlogistics.com" },
};

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "50K+", label: "Shipments / Month" },
  { value: "99.8%", label: "On-Time Delivery" },
  { value: "24/7", label: "Live Support" },
];

const services = [
  {
    icon: "🚛",
    title: "Full Truckload (FTL)",
    description: "Dedicated vehicles for high-volume freight with real-time GPS tracking and guaranteed transit times.",
  },
  {
    icon: "📦",
    title: "Less Than Truckload (LTL)",
    description: "Cost-effective shared freight solutions for smaller shipments without compromising delivery speed.",
  },
  {
    icon: "🏭",
    title: "Warehousing & Storage",
    description: "Pan-India hub network with ambient, temperature-controlled, and hazmat-compliant storage.",
  },
  {
    icon: "🔄",
    title: "Last Mile Delivery",
    description: "End-to-end B2C delivery with live proof-of-delivery, e-POD, and customer notification.",
  },
  {
    icon: "🛡️",
    title: "Cargo Insurance",
    description: "Comprehensive in-transit insurance coverage for all freight categories, processed digitally.",
  },
  {
    icon: "📊",
    title: "Supply Chain Analytics",
    description: "Real-time dashboards, predictive ETAs, and performance reports for data-driven decisions.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Shankh Logistics offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shankh Logistics offers FTL, LTL, warehousing, last-mile delivery, cargo insurance, and supply chain analytics across India.",
      },
    },
    {
      "@type": "Question",
      name: "How do I become a vendor on Shankh Logistics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can register as a vehicle owner or fleet operator through our Vendor Portal. Complete your profile, submit KYC documents, and get approved within 48 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Does Shankh Logistics support real-time shipment tracking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every shipment on our platform is tracked in real-time using GPS-enabled devices and our live tracking dashboard.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section className="relative w-full" style={{ minHeight: '100vh' }}>
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          alt="Shankh Logistics warehouse operations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />

        {/* Hero content — pushed to upper half, clears the stats strip */}
        <div className="relative z-10 flex items-center" style={{ minHeight: 'calc(100vh - 100px)', paddingTop: '6rem' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl animate-fade-up">
              <span className="section-eyebrow">
                India&apos;s Logistics Engine
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
                Intelligent <br />
                <span className="text-gradient">Supply Chain</span>
                <br />
                Platform
              </h1>
              <p className="text-lg text-white/65 mb-10 max-w-xl leading-relaxed">
                Real-time fleet tracking, automated dispatch, and seamless freight management
                for enterprises across India.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`${APP_URL}/vendor/register`} className="btn-primary">
                  <span>Partner With Us</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <Link href="/customer" className="btn-outline">
                  I&apos;m a Shipper
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip — fixed to bottom of hero, never overlaps content */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#0d1117]/70 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="stat-number">{s.value}</div>
                  <div className="text-xs text-white/50 font-semibold mt-1 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About teaser ── */}
      <section id="about" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-eyebrow">Who We Are</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#333a3f] mb-6 leading-tight">
                The Operating System for Indian Freight
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Shankh Logistics is an enterprise-grade transport management system built
                from the ground up for the complexities of Indian supply chains — multi-modal
                freight, fragmented last-mile, GST compliance, and real-time visibility at scale.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Whether you&apos;re a fleet owner looking to grow your business or an enterprise
                managing thousands of shipments a month, our platform adapts to your workflow.
              </p>
              <Link href="/about" className="btn-primary inline-flex mt-2">
                <span>Learn Our Story</span>
              </Link>
            </div>
            <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800"
                alt="Fleet management operations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#20a396]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-28 bg-[#f8fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-eyebrow justify-center">What We Offer</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#333a3f] mb-4">
              End-to-End Logistics Solutions
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From first mile to last mile — every aspect of your freight managed on a single platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="glass-card p-8 card-hover">
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <h3 className="text-xl font-bold text-[#333a3f] mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary inline-flex">
              <span>View All Solutions</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Vendor CTA ── */}
      <section className="py-28 bg-[#0d1117] relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 opacity-10 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000"
            alt="Transport background"
            fill
            className="object-cover"
          />
        </div>
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-[#20a396]/10 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4ade80]/6 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-eyebrow justify-center">For Fleet Owners &amp; Transporters</p>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6">
            Turn Your Fleet Into a{" "}
            <span className="text-gradient">Revenue Engine</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Register as a vendor on Shankh Logistics. Get matched with freight, manage your
            drivers, track earnings, and grow your fleet — all from one dashboard.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`${APP_URL}/vendor/register`} className="btn-primary">
              <span>Register as Vendor — It&apos;s Free</span>
            </a>
            <a href={`${APP_URL}/vendor/login`} className="btn-outline">
              Vendor Login
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ (AEO) ── */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-eyebrow justify-center">Common Questions</p>
            <h2 className="text-4xl font-extrabold text-[#333a3f]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="glass-card p-8">
                <h3 className="text-lg font-bold text-[#333a3f] mb-3">{faq.name}</h3>
                <p className="text-gray-500 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
