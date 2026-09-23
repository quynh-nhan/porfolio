import React, { useState } from 'react';
import { GraduationCap, Briefcase, Trophy, Rocket, Sparkles } from 'lucide-react';
import { TIMELINE } from '../../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-amber-400" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-blue-400" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-[#ff6b00]" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-[#ff6b00]" />;
    }
  };

  const activeItem = TIMELINE[activeIndex];

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-[#07080b]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#ff6b00]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-3 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#ff6b00]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>3D CAREER PATH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Developer <span className="orange-gradient-text">Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            A horizontal 3D progression from academic foundations to industry internship and graduation leadership.
          </p>
        </div>

        <div className="relative my-8 py-8">
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-amber-500/40 via-[#ff6b00] to-emerald-500/40 -translate-y-1/2 rounded-full z-0 shadow-lg shadow-[#ff6b00]/20" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {TIMELINE.map((item, index) => {
              const isSelected = activeIndex === index;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer group relative p-6 rounded-2xl transition-all duration-300 transform ${
                    isSelected
                      ? 'bg-zinc-900/90 border-2 border-[#ff6b00] shadow-2xl shadow-[#ff6b00]/25 -translate-y-3'
                      : 'bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 hover:-translate-y-1'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${
                      isSelected ? 'bg-[#ff6b00] text-white' : 'bg-zinc-800 text-zinc-300'
                    }`}>
                      {item.year}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">{item.period}</span>
                  </div>

                  <div className={`w-12 h-12 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-tr from-[#ff6b00] to-[#ff9933] shadow-lg shadow-[#ff6b00]/40 scale-110'
                      : 'bg-zinc-900 border border-zinc-700 group-hover:scale-105'
                  }`}>
                    {getIcon(item.icon)}
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                  <p className="text-xs text-orange-300 font-medium mt-0.5">{item.subtitle}</p>

                  {item.badge && (
                    <div className="mt-3">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        item.type === 'project'
                          ? 'bg-[#ff6b00]/20 text-[#ff6b00] border border-[#ff6b00]/40'
                          : item.type === 'education'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : item.type === 'work'
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                          : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      }`}>
                        {item.badge}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-8 p-6 sm:p-8 rounded-2xl glass-panel-orange text-left border border-[#ff6b00]/30 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#ff6b00]/20 border border-[#ff6b00]/40 text-[#ff6b00] hidden sm:block">
              {getIcon(activeItem.icon)}
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-xl font-bold text-white">{activeItem.title} — <span className="text-[#ff6b00]">{activeItem.subtitle}</span></h4>
                <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                  {activeItem.period}
                </span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed pt-1">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
