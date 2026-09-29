import React from "react";

const PARTNERS = [
  {
    name: "LogoIpsum",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "LogoIpsum",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "LogoIpsum",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="3" width="8" height="8" rx="2" />
        <rect x="13" y="3" width="8" height="8" rx="2" />
        <rect x="3" y="13" width="8" height="8" rx="2" />
        <rect x="13" y="13" width="8" height="8" rx="2" />
      </svg>
    ),
  },
  {
    name: "LogoIpsum",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l8 8-8 8-8-8 8-8z" />
      </svg>
    ),
  },
  {
    name: "LogoIpsum",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    ),
  },
];

export const LogoCloud: React.FC = () => {
  return (
    <section className="border-b border-zinc-100 bg-white py-9">
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
