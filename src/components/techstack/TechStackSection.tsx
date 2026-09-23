import React, { useState } from 'react';
import { Cpu } from 'lucide-react';
import { TECH_STACK } from '../../data/portfolioData';
import type { TechItem } from '../../types';

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);

  const categories = ['All', 'Mobile', 'Frontend', 'Backend & DB', 'Tools & Services', 'Native & SDKs'];

  const filteredTech = selectedCategory === 'All'
    ? TECH_STACK
    : TECH_STACK.filter((t) => t.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-[#07080b]">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-3 max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#ff6b00]">
            <Cpu className="w-3.5 h-3.5" />
            <span>3D TECH CLOUD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Technology <span className="orange-gradient-text">Ecosystem</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Interactive 3D technology cloud representing tools & frameworks I build mobile products with.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-[#ff6b00] text-white shadow-lg shadow-[#ff6b00]/30 scale-105'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative min-h-[380px] p-8 sm:p-12 rounded-3xl glass-panel border border-zinc-800 flex flex-wrap items-center justify-center gap-4 sm:gap-6 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ff6b00_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          {filteredTech.map((tech, index) => {
            const floatDelay = `${(index % 5) * 0.4}s`;
            const isCore = tech.level === 'Core';

            return (
              <div
                key={tech.name}
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
                style={{ animationDelay: floatDelay }}
                className={`group relative px-4 sm:px-5 py-3 rounded-2xl cursor-pointer transition-all duration-300 animate-float-slow transform hover:scale-110 hover:-translate-y-2 hover:z-30 select-none ${
                  isCore
                    ? 'bg-gradient-to-r from-zinc-950 via-[#1a120c] to-zinc-950 border border-[#ff6b00]/50 shadow-lg shadow-[#ff6b00]/15'
                    : 'bg-zinc-950/80 border border-zinc-800/90 hover:border-zinc-700 shadow-md'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full shadow-sm transition-transform group-hover:scale-125"
                    style={{ backgroundColor: tech.color }}
                  />
                  <span className="text-xs sm:text-sm font-bold text-white font-mono tracking-tight group-hover:text-[#ff6b00] transition-colors">
                    {tech.name}
                  </span>
                  {isCore && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#ff6b00]/20 text-[#ff6b00] border border-[#ff6b00]/30 font-mono">
                      Core
                    </span>
                  )}
                </div>

                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10"
                  style={{
                    boxShadow: `0 0 20px ${tech.color}40`,
                  }}
                />

                {hoveredTech?.name === tech.name && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-left shadow-2xl z-40 whitespace-nowrap animate-fadeIn">
                    <p className="text-xs font-bold text-white">{tech.name}</p>
                    <p className="text-[10px] text-zinc-400 font-mono">Category: {tech.category}</p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
