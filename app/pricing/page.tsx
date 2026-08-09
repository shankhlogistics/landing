import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.shankhlogistics.com";

export const metadata: Metadata = {
  title: "Pricing — Shankh Logistics",
  description:
    "Transparent pricing for logistics management. Choose from Starter, Business, and Enterprise plans. No hidden fees.",
  alternates: { canonical: "https://www.shankhlogistics.com/pricing" },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "PriceSpecification",
  name: "Shankh Logistics Pricing Plans",
  description: "Subscription plans for logistics management — Starter, Business, and Enterprise.",
};

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "/ month",
    description: "Perfect for small transporters & single-city operations.",
    features: [
      "Up to 5 vehicles",
      "Basic GPS tracking",
      "Manual dispatch",
      "E-way bill support",
      "Email support",
    ],
    cta: "Get Started",
    ctaHref: `${APP_URL}/vendor/register`,
    highlight: false,
  },
  {
    name: "Business",
    price: "₹14,999",
    period: "/ month",
    description: "For growing fleets and multi-city freight operations.",
    features: [
      "Up to 50 vehicles",
      "Real-time GPS & geofencing",
      "Automated dispatch",
      "Driver app",
      "Analytics dashboard",
      "Priority support",
    ],
    cta: "Start Free Trial",
    ctaHref: `${APP_URL}/vendor/register`,
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large fleet operators and enterprise shippers with custom needs.",
    features: [
      "Unlimited vehicles",
      "Dedicated account manager",
      "API access",
      "Custom integrations (ERP/WMS)",
      "SLA-backed uptime",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    ctaHref: "/contact",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={pricingSchema} />

      {/* Header */}
      <section className="pt-40 pb-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold tracking-widest uppercase text-[#20a396] mb-3 block">Simple Pricing</span>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#333a3f] mb-4">
            Transparent. No Surprises.
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Start free, scale as you grow. All plans include a 14-day free trial.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-[#f4f7f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-[#333a3f] text-white shadow-2xl scale-105"
                    : "glass-card"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#20a396] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    {plan.badge}
                  </span>
                )}
                <div>
                  <h2 className={`text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-[#333a3f]"}`}>
                    {plan.name}
                  </h2>
                  <p className={`text-sm mb-6 ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-end gap-1 mb-8">
                    <span className={`text-5xl font-extrabold ${plan.highlight ? "text-white" : "text-[#20a396]"}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-sm mb-2 ${plan.highlight ? "text-gray-400" : "text-gray-400"}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                          plan.highlight ? "bg-[#20a396] text-white" : "bg-[#20a396]/20 text-[#20a396]"
                        }`}>✓</span>
                        <span className={plan.highlight ? "text-gray-300" : "text-gray-600"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={plan.ctaHref}
                  className={`mt-auto block text-center py-3.5 rounded-full font-bold text-sm transition-all ${
                    plan.highlight
                      ? "bg-[#20a396] text-white hover:bg-[#178a7e]"
                      : "bg-[#333a3f] text-white hover:bg-black"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-10">
            All prices exclude GST. Need a custom quote?{" "}
            <Link href="/contact" className="text-[#20a396] hover:underline font-semibold">
              Talk to us →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
