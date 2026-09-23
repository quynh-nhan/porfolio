import React from 'react';
import { HardHat, Camera, CheckSquare, Palette, UserCheck, AlertTriangle } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';

export const PersonalAppSection: React.FC = () => {
  const project = PROJECTS.find((p) => p.id === 'personal-app') || PROJECTS[2];

  return (
    <div className="relative py-12 lg:py-20 rounded-3xl glass-panel p-6 sm:p-10 lg:p-12 overflow-hidden my-12 border border-amber-500/40 shadow-2xl bg-gradient-to-b from-amber-950/20 via-zinc-950 to-black">
      {/* Caution Strip Top & Bottom */}
      <div className="absolute top-0 inset-x-0 h-2 bg-[repeating-linear-gradient(45deg,#f59e0b,#f59e0b_15px,#000_15px,#000_30px)] opacity-80" />
      <div className="absolute bottom-0 inset-x-0 h-2 bg-[repeating-linear-gradient(45deg,#f59e0b,#f59e0b_15px,#000_15px,#000_30px)] opacity-80" />

      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-zinc-800/80">
        <div className="flex items-center gap-3">
          <span className="text-4xl font-black text-amber-500 font-mono opacity-80">03</span>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1.5 animate-pulse">
                <HardHat className="w-3.5 h-3.5 text-amber-400" />
                {project.badge}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800">
                Personal Project
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">{project.title}</h3>
          </div>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Development Status</span>
          <span className="text-sm font-bold text-amber-400 flex items-center justify-end gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            {project.constructionStatus}
          </span>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
        
        {/* Left Side: 3D Construction Interactive Scene */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[380px] h-[460px] rounded-3xl bg-zinc-950/90 border-2 border-amber-500/40 p-6 flex flex-col justify-between overflow-hidden shadow-2xl select-none group">
            <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-amber-500/20 blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between z-10 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40">
                  <HardHat className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-amber-300">MY-APP ARCHITECTURE</span>
                  <span className="text-[10px] text-zinc-400 block font-mono">React Native Task Engine</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse">
                BUILDING SCREENS
              </span>
            </div>

            <div className="relative my-auto flex items-center justify-center py-4 z-10">
              <div className="absolute -inset-4 border-2 border-dashed border-amber-500/30 rounded-3xl pointer-events-none flex items-center justify-center">
                <span className="absolute -top-3 px-2 py-0.5 bg-zinc-900 border border-amber-500/40 text-[9px] font-mono text-amber-400">
                  MY-APP BLUEPRINT
                </span>
              </div>

              {/* Central Phone Blueprint Frame */}
              <div className="relative w-48 h-80 rounded-[32px] bg-gradient-to-b from-zinc-900 to-black border-2 border-amber-500/60 p-3 shadow-2xl flex flex-col justify-between transform transition-transform group-hover:scale-105 duration-300">
                <div className="w-16 h-3 mx-auto bg-amber-500/30 rounded-full border border-amber-500/50 mb-2" />

                <div className="space-y-2 text-[10px]">
                  <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-500/40 animate-pulse">
                    <div className="flex items-center justify-between text-amber-300 font-mono">
                      <span>TaskCheckInCamera</span>
                      <span>100%</span>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-blue-500/20 border border-blue-500/40">
                    <div className="flex items-center justify-between text-blue-300 font-mono">
                      <span>TaskDetailScreen</span>
                      <span>90%</span>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-rose-500/20 border border-rose-500/40 border-dashed animate-pulse">
                    <div className="flex items-center justify-between text-rose-300 font-mono">
                      <span>CoupleDrawingScreen</span>
                      <span>Building...</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-full w-[78%] rounded-full animate-pulse" />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-400 text-center block mt-1">Assembly Progress: 78%</span>
                </div>
              </div>

              {/* 3D Workers */}
              <div className="absolute -top-2 -right-4 p-2.5 rounded-2xl bg-amber-950/90 border border-amber-500/50 shadow-xl flex items-center gap-2 animate-float-slow">
                <span className="text-xl">👷‍♂️</span>
                <div>
                  <span className="text-[9px] font-bold text-amber-300 block leading-tight">Camera Installer</span>
                  <span className="text-[8px] text-zinc-400 font-mono">CheckInCameraScreen</span>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-4 p-2.5 rounded-2xl bg-zinc-900/90 border border-amber-500/50 shadow-xl flex items-center gap-2 animate-float-slow" style={{ animationDelay: '1.2s' }}>
                <span className="text-xl">🎨</span>
                <div>
                  <span className="text-[9px] font-bold text-amber-300 block leading-tight">Canvas Engineer</span>
                  <span className="text-[8px] text-zinc-400 font-mono">CoupleDrawingScreen</span>
                </div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -left-6 p-2.5 rounded-2xl bg-zinc-900/90 border border-amber-500/50 shadow-xl flex items-center gap-2 animate-float-slow" style={{ animationDelay: '0.6s' }}>
                <span className="text-xl">💻</span>
                <div>
                  <span className="text-[9px] font-bold text-amber-300 block leading-tight">Dev Worker</span>
                  <span className="text-[8px] text-zinc-400 font-mono">tasksService.ts</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-amber-400/90 font-mono border-t border-white/10 pt-3 z-10">
              <span className="flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                Work In Progress
              </span>
              <span>Coming together, one feature at a time</span>
            </div>
          </div>
        </div>

        {/* Right Side: Real Modules from my-app */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
              Constructing Personal Application
            </span>
            <h4 className="text-2xl font-bold text-white mb-3">
              "Coming together, one feature at a time."
            </h4>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono">Actively Building Screens</h5>
            <div className="space-y-2">
              
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">TaskCheckInCameraScreen</span>
                    <span className="text-[10px] text-zinc-400">GPS & Timestamp proof-of-work photo check-in</span>
                  </div>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300">COMPLETED</span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <CheckSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">TaskDetailScreen & tasksService</span>
                    <span className="text-[10px] text-zinc-400">Task lifecycle, assignment status & updates</span>
                  </div>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300">COMPLETED</span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-rose-500/20 text-rose-400">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">CoupleDrawingScreen</span>
                    <span className="text-[10px] text-zinc-400">Interactive canvas drawing module</span>
                  </div>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 animate-pulse">IN PROGRESS</span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">ProfileScreen & authService</span>
                    <span className="text-[10px] text-zinc-400">Authentication state & user profile settings</span>
                  </div>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300">COMPLETED</span>
              </div>

            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono mb-2">Target Stack</h5>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs rounded-xl bg-zinc-900 text-amber-200 border border-amber-500/30 font-mono font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
