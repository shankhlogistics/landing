"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

// Replace these with actual client logos if available.
// For now, using high-quality placeholders.
const CLIENTS = [
  { name: "Acme Corp", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png" },
  { name: "Global Freight", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/ITV_logo_2013.svg" },
  { name: "Tech Solutions", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "BuildCo", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "AgriSupply", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "RetailKing", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
];

export function ClientMarquee() {
  return (
    <div className="w-full py-12 bg-white/50 backdrop-blur-md border-y border-gray-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <p className="text-center text-sm font-semibold tracking-widest text-gray-400 uppercase">
          Trusted by Industry Leaders
        </p>
      </div>
      <Marquee gradient={true} gradientColor="rgba(248, 250, 251, 1)" speed={40} autoFill>
        <div className="flex items-center gap-16 px-8">
          {CLIENTS.map((client, idx) => (
            <div key={idx} className="relative h-12 w-32 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
