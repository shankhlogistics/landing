import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ClientMarquee } from "@/components/ClientMarquee";
import { HeroWidget } from "@/components/HeroWidget";
import { Truck, Package, Factory, RefreshCw, ShieldCheck, BarChart3, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Shankh Logistics | Advanced Enterprise Supply Chain Platform",
  description:
    "India's most advanced logistics platform — real-time fleet tracking, B2B & B2C freight, warehousing, and intelligent dispatch. Join 500+ enterprises.",
  alternates: { canonical: "https://www.shankhlogistics.com" },
};

const stats = [
  { value: 500, suffix: "+", label: "Enterprise Clients" },
  { value: 50, suffix: "K+", label: "Shipments / Month" },
  { value: 99.8, suffix: "%", decimals: 1, label: "On-Time Delivery" },
  { value: 24, suffix: "/7", label: "Live Support" },
];

const services = [
  {
    icon: <Truck className="w-8 h-8 text-teal-500" />,
    title: "Full Truckload (FTL)",
    description: "Dedicated vehicles for high-volume freight with real-time GPS tracking and guaranteed transit times.",
  },
  {
    icon: <Package className="w-8 h-8 text-teal-500" />,
    title: "Less Than Truckload (LTL)",
    description: "Cost-effective shared freight solutions for smaller shipments without compromising delivery speed.",
  },
  {
    icon: <Factory className="w-8 h-8 text-teal-500" />,
    title: "Warehousing & Storage",
    description: "Pan-India hub network with ambient, temperature-controlled, and hazmat-compliant storage.",
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-teal-500" />,
    title: "Last Mile Delivery",
    description: "End-to-end B2C delivery with live proof-of-delivery, e-POD, and customer notification.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-teal-500" />,
    title: "Cargo Insurance",
    description: "Comprehensive in-transit insurance coverage for all freight categories, processed digitally.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-teal-500" />,
    title: "Supply Chain Analytics",
    description: "Real-time dashboards, predictive ETAs, and performance reports for data-driven decisions.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-24 pb-16">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          alt="Shankh Logistics warehouse operations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm animate-fade-up">
              India's Logistics Engine
            </span>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight animate-fade-up-1">
              Intelligent <br />
              <span className="text-gradient">Supply Chain</span> <br />
              Platform
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed font-light animate-fade-up-2">
              Real-time fleet tracking, automated dispatch, and seamless freight management for enterprises across India.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up-3">
              <Link href="/contact" className="btn-primary">
                Partner With Us <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/customer/register" className="btn-outline">
                I'm a Shipper
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-end animate-fade-up-3">
            <HeroWidget />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4">
        <div className="dark-glass rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="stat-number mb-2 text-white flex items-center justify-center font-black text-4xl lg:text-5xl">
                  <AnimatedCounter value={stat.value} decimals={stat.decimals} />
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <ClientMarquee />

      {/* Services Section */}
      <section className="py-24 bg-[#f8fafb] relative noise-overlay">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-eyebrow justify-center">What We Do</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0d1117] mb-6 tracking-tight">
              End-to-End <span className="text-teal-500">Logistics</span> Solutions
            </h2>
            <p className="text-gray-500 text-lg">
              From first-mile pickup to last-mile delivery, our platform unifies your entire supply chain ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="glass-card p-8 card-hover group relative overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 ease-out z-0" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0d1117] group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0d1117] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--teal)_0,transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Ready to optimize your freight?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Join thousands of businesses across India who trust Shankh Logistics for their supply chain needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get Started Now <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/about" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
