import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Shankh Logistics",
  description:
    "Get in touch with the Shankh Logistics team. Sales enquiries, vendor registration support, or technical help — we respond within 1 business day.",
  alternates: { canonical: "https://www.shankhlogistics.com/contact" },
};

const contactInfo = [
  { icon: "📧", label: "Email", value: "support@shankhlogistics.com", href: "mailto:support@shankhlogistics.com" },
  { icon: "📞", label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: "🕐", label: "Business Hours", value: "Mon – Sat, 9 AM – 7 PM IST", href: null },
  { icon: "📍", label: "Headquarters", value: "India", href: null },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 bg-[#333a3f] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-xs font-bold tracking-widest uppercase text-[#20a396] mb-3 block">Get In Touch</span>
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
            We&apos;d Love to <span className="text-gradient">Hear From You</span>
          </h1>
          <p className="text-gray-400">
            Whether you&apos;re exploring a partnership, need support, or just want to learn more — our team is here.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#f4f7f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-[#333a3f] mb-2">Contact Information</h2>
                <p className="text-gray-500 text-sm">We typically respond within 1 business day.</p>
              </div>

              {contactInfo.map((c) => (
                <div key={c.label} className="glass-card p-6 flex items-start gap-4">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <div className="text-xs font-bold tracking-wider uppercase text-[#20a396] mb-1">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-[#333a3f] font-semibold text-sm hover:text-[#20a396] transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-[#333a3f] font-semibold text-sm">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Quick links */}
              <div className="glass-card p-6">
                <div className="text-xs font-bold tracking-wider uppercase text-[#20a396] mb-4">Quick Actions</div>
                <div className="space-y-3">
                  <a
                    href={`${process.env.NEXT_PUBLIC_APP_URL ?? "https://app.shankhlogistics.com"}/vendor/register`}
                    className="block text-sm font-semibold text-[#333a3f] hover:text-[#20a396] transition-colors"
                  >
                    → Register as a Vendor
                  </a>
                  <a
                    href={`${process.env.NEXT_PUBLIC_APP_URL ?? "https://app.shankhlogistics.com"}/login`}
                    className="block text-sm font-semibold text-[#333a3f] hover:text-[#20a396] transition-colors"
                  >
                    → Access the Portal
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-extrabold text-[#333a3f] mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
