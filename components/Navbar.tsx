"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.shankhlogistics.com";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/services", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/customer", label: "Shippers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_2px_24px_rgba(0,0,0,0.08)] border-b border-gray-100"
          : "bg-white/95 backdrop-blur-xl border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/branding/logo-vertical.png"
              alt="Shankh Logistics"
              width={130}
              height={52}
              className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm font-semibold text-gray-600 hover:text-[#20a396] transition-all duration-200 group"
              >
                {l.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#20a396] rounded-full transition-all duration-300 group-hover:w-4/5" />
              </Link>
            ))}

            <div className="w-px h-5 bg-gray-200 mx-3" />

            {/* Single CTA */}
            <a
              href={`${APP_URL}/vendor/register`}
              className="btn-primary text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Partner With Us</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            className="lg:hidden p-2 text-gray-600 hover:text-[#20a396] hover:bg-gray-100 rounded-lg transition"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-8 space-y-2 shadow-xl">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 text-base font-semibold text-gray-700 hover:text-[#20a396] border-b border-gray-100 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-4">
            <a
              href={`${APP_URL}/vendor/register`}
              className="btn-primary w-full justify-center py-4 text-base"
            >
              Partner With Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
