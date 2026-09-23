import React from 'react';
import { Award, BookOpen, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[#07080b]">
      <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-[#ff6b00]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#ff6b00]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT DEVELOPER</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {PERSONAL_INFO.aboutTitle}
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              {PERSONAL_INFO.aboutText}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[#ff6b00]/20 border border-[#ff6b00]/40 text-[#ff6b00]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-400 block uppercase tracking-wider">Academic Result</span>
                  <span className="text-lg font-bold text-white font-mono">{PERSONAL_INFO.gpaTitle}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-400 block uppercase tracking-wider">Honors Award</span>
                  <span className="text-sm font-bold text-amber-300">{PERSONAL_INFO.awardTitle}</span>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[360px] h-[340px] rounded-3xl glass-panel-orange p-6 flex flex-col justify-between border border-[#ff6b00]/30 shadow-2xl overflow-hidden group">
              <div className="flex items-center justify-between z-10 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white">3D DEVELOPER DESK</span>
                </div>
                <span className="text-[10px] font-mono text-orange-400 bg-[#ff6b00]/10 px-2 py-0.5 rounded border border-[#ff6b00]/30">
                  FPT POLYTECHNIC
                </span>
              </div>

              <div className="relative my-auto flex flex-col items-center justify-center space-y-4 z-10">
                <div className="w-64 h-36 rounded-2xl bg-zinc-950 border-2 border-zinc-700 p-3 shadow-2xl relative transform transition-transform group-hover:rotate-1 group-hover:scale-105 duration-300 flex flex-col justify-between">
                  <div className="w-2 h-2 mx-auto rounded-full bg-blue-500/80 mb-1" />
                  <div className="space-y-1.5 font-mono text-[9px] text-zinc-400 bg-black/80 p-2.5 rounded-xl border border-white/5">
                    <p className="text-[#ff6b00] font-bold"><span className="text-purple-400">const</span> dev = <span className="text-amber-300">useDeveloper</span>();</p>
                    <p className="text-zinc-300"><span className="text-blue-400">dev</span>.buildApp(<span className="text-emerald-400">'React Native'</span>);</p>
                    <p className="text-emerald-400">// GPA 3.75 - Outstanding Student</p>
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full" />
                </div>
                <div className="w-72 h-3 rounded-full bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 border border-zinc-600 shadow-md" />
              </div>

              <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono z-10 border-t border-white/10 pt-3">
                <span>☕ Coffee & Code</span>
                <span>📱 React Native Setup</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
