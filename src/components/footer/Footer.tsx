import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-zinc-800/80 bg-[#050608] text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand Copyright */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#ff6b00] flex items-center justify-center font-black text-white text-xs">
            QN
          </div>
          <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>
        </div>

        {/* Tech Credits */}
        <div className="flex items-center gap-1 text-zinc-500 font-mono text-[11px]">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-[#ff6b00] fill-[#ff6b00]" />
          <span>React • TypeScript • Three.js 3D</span>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors flex items-center gap-1.5 font-mono text-[11px]"
          title="Back to Top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#ff6b00]" />
        </button>

      </div>
    </footer>
  );
};
