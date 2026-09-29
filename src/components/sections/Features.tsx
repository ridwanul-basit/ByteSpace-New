import React from "react";
import { Layers, Palette, Zap } from "lucide-react";
import { SectionProps } from "@/types";

const features = [
  {
    icon: Layers,
    title: "Modular Architecture",
    description: "Every section has its own isolated component inside src/components/sections for high maintainability.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS Ready",
    description: "Styled with Tailwind CSS v4 and standard tokens for fast, pixel-perfect translation from Figma.",
  },
  {
    icon: Zap,
    title: "TypeScript & Icons",
    description: "Strict types and Lucide React icons preconfigured for seamless developer experience.",
  },
];

export const Features: React.FC<SectionProps> = ({ id = "features", className = "" }) => {
  return (
    <section id={id} className={`py-20 bg-zinc-50/50 dark:bg-zinc-900/30 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Section-Based Component Structure
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Easily replace or add any section once you provide the Figma screens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-zinc-200/80 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 transition-all hover:shadow-md"
              >
                <div className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
