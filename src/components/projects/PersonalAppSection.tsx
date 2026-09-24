import React from 'react';
import { HardHat, Camera, CheckSquare, Palette, UserCheck } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { InteractivePhone3D } from '../canvas3d/InteractivePhone3D';

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
        
        {/* Left Side: 3D Construction Interactive Phone */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <InteractivePhone3D
            theme="construction"
            floatingTags={project.floatingTags || ['TaskCheckInCamera', 'CoupleDrawing', 'tasksService', 'ProfileScreen']}
            interactive={true}
            customTitle="Personal Task & Drawing App"
            customSubtitle="Under Active Construction"
          />
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
