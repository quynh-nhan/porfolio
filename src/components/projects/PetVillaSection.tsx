import React from 'react';
import { Award, PhoneCall, Bot, Camera, Calendar, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { InteractivePhone3D } from '../canvas3d/InteractivePhone3D';
import { GithubIcon } from '../common/Icons';

export const PetVillaSection: React.FC = () => {
  const project = PROJECTS.find((p) => p.id === 'petvilla') || PROJECTS[0];
  const screens = project.screens || [];
  const currentScreen = screens[0];

  return (
    <div className="relative py-12 lg:py-20 rounded-3xl glass-panel-orange p-6 sm:p-10 lg:p-12 overflow-hidden my-12 border border-[#ff6b00]/30 shadow-2xl">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ff6b00]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-zinc-800/80">
        <div className="flex items-center gap-3">
          <span className="text-4xl font-black text-[#ff6b00] font-mono opacity-80">01</span>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ff6b00]/20 text-[#ff6b00] border border-[#ff6b00]/30 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                {project.award}
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">{project.title}</h3>
          </div>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Role in Project</span>
          <span className="text-sm font-bold text-orange-300">{project.role}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <InteractivePhone3D
            theme="orange"
            screenData={currentScreen}
            floatingTags={project.floatingTags}
            interactive={true}
          />
        </div>

        <div className="lg:col-span-6 space-y-6 text-left">
          <div>
            <h4 className="text-xl font-bold text-orange-400 mb-2">{project.subtitle}</h4>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono">Architectural Modules</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-2.5">
                <Camera className="w-4 h-4 text-[#ff6b00]" />
                <div>
                  <span className="font-bold text-white block">Vision Camera AI</span>
                  <span className="text-[10px] text-zinc-400">Staff Pet Recognition</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <div>
                  <span className="font-bold text-white block">ZegoCloud Audio RTC</span>
                  <span className="text-[10px] text-zinc-400">1-on-1 Care Calls</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-2.5">
                <Bot className="w-4 h-4 text-purple-400" />
                <div>
                  <span className="font-bold text-white block">AI Care Assistant</span>
                  <span className="text-[10px] text-zinc-400">Pet Health Triage</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="font-bold text-white block">Smart Booking & FCM</span>
                  <span className="text-[10px] text-zinc-400">Real-time Push Alerts</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono mb-2">Tech Stack</h5>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs rounded-xl bg-zinc-900 text-orange-200 border border-[#ff6b00]/30 font-mono font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {project.githubUserLink && (
              <a
                href={project.githubUserLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff8800] text-white text-xs font-bold shadow-lg shadow-[#ff6b00]/25 hover:opacity-90 transition-all transform hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View User App GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubStaffLink && (
              <a
                href={project.githubStaffLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white text-xs font-bold hover:bg-zinc-800 transition-all transform hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4 text-[#ff6b00]" />
                <span>View Staff App GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
