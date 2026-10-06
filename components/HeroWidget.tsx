"use client";

import { useState } from "react";
import { Search, MapPin, Truck, ArrowRight } from "lucide-react";
import { clsx } from "clsx";

type Tab = "track" | "quote";

export function HeroWidget() {
  const [activeTab, setActiveTab] = useState<Tab>("track");

  return (
    <div className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 overflow-hidden transform transition-all duration-300 hover:shadow-[0_8px_40px_rgb(32,163,150,0.2)]">
      {/* Tabs */}
      <div className="flex w-full border-b border-gray-100/50">
        <button
          onClick={() => setActiveTab("track")}
          className={clsx(
            "flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors",
            activeTab === "track"
              ? "text-teal-600 bg-teal-50/50 border-b-2 border-teal-500"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-50/50"
          )}
        >
          <Search className="w-4 h-4" />
          Track Shipment
        </button>
        <button
          onClick={() => setActiveTab("quote")}
          className={clsx(
            "flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors",
            activeTab === "quote"
              ? "text-teal-600 bg-teal-50/50 border-b-2 border-teal-500"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-50/50"
          )}
        >
          <Truck className="w-4 h-4" />
          Get a Quote
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === "track" ? (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Logistics Reference Number (LRN)
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. LRN-84729104"
                className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all font-mono text-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 aspect-square bg-teal-500 hover:bg-teal-600 text-white rounded-lg flex items-center justify-center transition-colors shadow-sm shadow-teal-500/20">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Live GPS tracking active
            </p>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Origin
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="City or Pincode"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Destination
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="City or Pincode"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-sm"
                />
              </div>
            </div>
            <button className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-bold text-sm transition-colors shadow-md shadow-gray-900/20 flex items-center justify-center gap-2">
              Calculate Estimate
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
