import React from 'react';
import { Layers } from 'lucide-react';
import { PetVillaSection } from './PetVillaSection';
import { GvnSection } from './GvnSection';
import { PersonalAppSection } from './PersonalAppSection';

export const ProjectShowcase: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-[#07080b]">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#ff6b00]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-3 max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#ff6b00]">
            <Layers className="w-3.5 h-3.5" />
            <span>3D OBJECT PRODUCT SHOWCASE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Selected <span className="orange-gradient-text">Projects</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400">
            Each project is presented as a distinct 3D environment with interactive features & screen carousel.
          </p>
        </div>

        <PetVillaSection />
        <GvnSection />
        <PersonalAppSection />
      </div>
    </section>
  );
};
