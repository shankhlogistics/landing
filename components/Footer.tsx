import Image from "next/image";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.shankhlogistics.com";

const services = [
  { label: "Full Truckload (FTL)", href: "/services" },
  { label: "Less Than Truckload (LTL)", href: "/services" },
  { label: "Warehousing & Storage", href: "/services" },
  { label: "Last Mile Delivery", href: "/services" },
  { label: "Cargo Insurance", href: "/services" },
  { label: "Supply Chain Analytics", href: "/services" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const partners = [
  { label: "Register as Vendor", href: `${APP_URL}/vendor/register`, external: true },
  { label: "Vendor Login", href: `${APP_URL}/vendor/login`, external: true },
  { label: "Shipper Onboarding", href: "/customer" },
  { label: "Access Portal", href: `${APP_URL}/login`, external: true },
];

const certifications = ["ISO 9001:2015", "GST Registered", "MSME Certified", "Pan-India Operations"];

export function Footer() {
  return (
    <footer className="relative bg-[#0d1117] text-white overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#20a396]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#4ade80]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top CTA Banner */}
      <div className="relative border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <p className="section-eyebrow">Join Our Network</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
                Ready to Move with
                <span className="text-gradient"> Shankh Logistics?</span>
              </h2>
              <p className="mt-3 text-white/50 text-sm max-w-lg">
                Whether you own a fleet or need freight — we have a solution built for you.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a
                href={`${APP_URL}/vendor/register`}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Register as Vendor</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <Link href="/contact" className="btn-outline">
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 group">
              <Image
                src="/branding/logo-vertical.png"
                alt="Shankh Logistics"
                width={130}
                height={52}
                className="h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity brightness-200"
              />
            </Link>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              India&apos;s advanced enterprise supply chain platform. Real-time tracking,
              intelligent dispatch, and seamless freight management from first mile to last.
            </p>

            {/* Certifications */}
            <div className="mt-8 flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="text-[10px] font-bold tracking-wider uppercase text-[#20a396] border border-[#20a396]/30 bg-[#20a396]/8 px-2.5 py-1 rounded-full"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-8 space-y-2.5">
              <a
                href="mailto:support@shankhlogistics.com"
                className="flex items-center gap-3 text-sm text-white/45 hover:text-[#20a396] transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#20a396]/15 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </span>
                support@shankhlogistics.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-white/45 hover:text-[#20a396] transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#20a396]/15 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
                  </svg>
                </span>
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-extrabold tracking-[0.12em] uppercase text-[#20a396] mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/45 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#20a396]/50 group-hover:bg-[#20a396] transition-colors flex-shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold tracking-[0.12em] uppercase text-[#20a396] mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="text-sm text-white/45 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#20a396]/50 group-hover:bg-[#20a396] transition-colors flex-shrink-0" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-extrabold tracking-[0.12em] uppercase text-[#20a396] mb-6">
              For Partners
            </h3>
            <ul className="space-y-3">
              {partners.map((p) => (
                <li key={p.label}>
                  {"external" in p && p.external ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/45 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#20a396]/50 group-hover:bg-[#20a396] transition-colors flex-shrink-0" />
                      {p.label}
                    </a>
                  ) : (
                    <Link
                      href={p.href}
                      className="text-sm text-white/45 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#20a396]/50 group-hover:bg-[#20a396] transition-colors flex-shrink-0" />
                      {p.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Stats mini */}
            <div className="mt-8 p-4 rounded-xl border border-white/8 bg-white/3">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "500+", l: "Clients" },
                  { v: "2K+", l: "Vendors" },
                  { v: "50+", l: "Hubs" },
                  { v: "18+", l: "States" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="text-xl font-extrabold text-[#20a396]">{s.v}</div>
                    <div className="text-[10px] text-white/35 font-medium mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom legal strip */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Shankh Logistics Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-white/30 hover:text-white/70 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-white/30 hover:text-white/70 transition-colors">
                Terms of Service
              </Link>
              <span className="text-xs text-white/20">·</span>
              <span className="text-xs text-white/25 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse inline-block" />
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
