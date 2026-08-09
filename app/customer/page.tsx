import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.shankhlogistics.com";

export const metadata: Metadata = {
  title: "Shipper & Customer Onboarding | Shankh Logistics",
  description:
    "Start shipping smarter with Shankh Logistics. Real-time tracking, automated freight management, and competitive rates for businesses of all sizes.",
  alternates: { canonical: "https://www.shankhlogistics.com/customer" },
};

const steps = [
  { step: "01", title: "Create an Account", desc: "Sign up through our portal and complete your business profile in under 5 minutes." },
  { step: "02", title: "Get a Quote", desc: "Enter your pickup, drop, and cargo details — get competitive rates instantly." },
  { step: "03", title: "Book & Track", desc: "Confirm your shipment and track it live from pickup to delivery." },
  { step: "04", title: "Deliver & Invoice", desc: "Receive digital proof of delivery and automated GST-compliant invoicing." },
];

const benefits = [
  { icon: "💰", title: "Competitive Rates", desc: "Multi-carrier matching ensures you always get the best price for your freight." },
  { icon: "🗺️", title: "Real-Time Tracking", desc: "Track every shipment live on a map — share live links with your customers." },
  { icon: "📄", title: "Digital Documentation", desc: "Auto-generated e-way bills, invoices, and e-POD — zero paperwork." },
  { icon: "📞", title: "Dedicated Support", desc: "A dedicated operations team reachable by phone, chat, or email." },
];

export default function CustomerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2000"
          alt="Shipper onboarding"
          fill className="object-cover" priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
          <nav className="text-xs text-gray-300 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">For Shippers</span>
          </nav>
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block bg-[#20a396] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              For Businesses &amp; Shippers
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Ship Smarter. <br />
              <span className="text-gradient">Track Every Move.</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Book freight in minutes, track it in real time, and receive digital proof of delivery — all in one platform.
            </p>
            <a href={`${APP_URL}/login`} className="btn-teal">
              Start Shipping Today
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#20a396] mb-3 block">Simple Process</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#333a3f]">
              Ship in 4 Easy Steps
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="glass-card p-8 card-hover text-center">
                <div className="text-5xl font-extrabold text-[#20a396]/30 mb-2">{s.step}</div>
                <h3 className="font-bold text-[#333a3f] mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#f4f7f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#20a396] mb-3 block">Why Choose Us</span>
            <h2 className="text-3xl font-extrabold text-[#333a3f]">Built for Shippers Like You</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="glass-card p-8 flex gap-6 card-hover">
                <span className="text-4xl flex-shrink-0">{b.icon}</span>
                <div>
                  <h3 className="font-bold text-[#333a3f] mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#20a396] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Optimise Your Freight?</h2>
          <p className="text-white/80 mb-8">Get started today — no setup fee, no long-term contract.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`${APP_URL}/login`} className="bg-white text-[#20a396] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-all">
              Access the Portal
            </a>
            <Link href="/contact" className="btn-dark">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
