import React from 'react';
import { ArrowDownRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { InteractivePhone3D } from '../canvas3d/InteractivePhone3D';

interface HeroSectionProps {
  onOpenCv: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCv }) => {
  const heroFloatingTags = ['React Native', 'Expo', 'TypeScript', 'API', 'Firebase', 'Git'];

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#07080b]">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#ff6b00]/15 via-orange-600/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 backdrop-blur-md shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
              <span className="text-[#ff6b00] font-bold">AVAILABLE FOR HIRE</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400">Vietnamese Developer</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
                TRƯƠNG NGUYỄN <br className="hidden sm:inline" />
                <span className="orange-gradient-text">QUỲNH NHÂN</span>
              </h1>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-10 bg-[#ff6b00]" />
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-300 tracking-wide font-mono">
                  {PERSONAL_INFO.role}
                </h2>
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800/80">
                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider block">Graduation Award</span>
                <span className="text-xs font-bold text-amber-400">Golden Ticket Award</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800/80">
                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider block">Academic GPA</span>
                <span className="text-xs font-bold text-white">3.75 / 4.0</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800/80 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider block">Specialty</span>
                <span className="text-xs font-bold text-[#ff6b00]">React Native / Expo</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group flex items-center justify-center gap-3 px-7 py-4 text-sm font-bold text-white rounded-2xl bg-gradient-to-r from-[#ff6b00] via-[#ff7700] to-[#ff9900] hover:opacity-95 shadow-xl shadow-[#ff6b00]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>

              <button
                onClick={onOpenCv}
                className="flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold text-zinc-200 hover:text-white rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80 transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-[#ff6b00]" />
                <span>Download CV</span>
              </button>
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-center items-center relative">
            <InteractivePhone3D
              theme="hero"
              floatingTags={heroFloatingTags}
              interactive={true}
              customTitle="Mobile Developer Workspace"
              customSubtitle="React Native • Expo • TS"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
