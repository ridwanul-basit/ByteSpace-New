import React from "react";
import Image from "next/image";

const PARTNERS = [
  {
    name: "LogoIpsum",
    icon: (
      <Image
        src="/Vector.png"
        alt="LogoIpsum"
        width={24}
        height={24}
        className="h-5 w-auto object-contain"
      />
    ),
  },
  {
    name: "LogoIpsum",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "LogoIpsum",
    icon: (
      <Image
        src="/Vector (1).png"
        alt="LogoIpsum"
        width={24}
        height={24}
        className="h-5 w-auto object-contain"
      />
    ),
  },
  {
    name: "LogoIpsum",
    icon: (
      <Image
        src="/Vector (2).png"
        alt="LogoIpsum"
        width={24}
        height={24}
        className="h-5 w-auto object-contain"
      />
    ),
  },
  {
    name: "LogoIpsum",
    icon: (
      <Image
        src="/Vector (3).png"
        alt="LogoIpsum"
        width={24}
        height={24}
        className="h-5 w-auto object-contain"
      />
    ),
  },
];

export const LogoCloud: React.FC = () => {
  return (
    <section className="border-b border-zinc-100 bg-[#F5F5F6] py-9">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:justify-between opacity-65 hover:opacity-100 transition-opacity">
          {PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 text-zinc-600 transition-colors hover:text-zinc-900"
            >
              <div className="text-zinc-400">{partner.icon}</div>
              <span className="text-lg font-bold tracking-tight text-zinc-700">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
