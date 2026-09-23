import React from 'react';
import { CheckCircle2, ShoppingBag, ExternalLink, ShieldCheck } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { InteractivePhone3D } from '../canvas3d/InteractivePhone3D';

export const GvnSection: React.FC = () => {
  const project = PROJECTS.find((p) => p.id === 'gvn') || PROJECTS[1];

  return (
    <div className="relative py-12 lg:py-20 rounded-3xl glass-panel-blue p-6 sm:p-10 lg:p-12 overflow-hidden my-12 border border-blue-500/30 shadow-2xl">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-zinc-800/80">
        <div className="flex items-center gap-3">
          <span className="text-4xl font-black text-blue-500 font-mono opacity-80">02</span>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                {project.badge}
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">{project.title}</h3>
          </div>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Company Internship</span>
          <span className="text-sm font-bold text-blue-300">{project.role}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
        <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
          <div>
            <h4 className="text-xl font-bold text-blue-400 mb-2">{project.subtitle}</h4>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono">Internship Engineering Contributions</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.contributions?.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/90 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono mb-2">Technologies Used</h5>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs rounded-xl bg-zinc-900 text-blue-200 border border-blue-500/30 font-mono font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={project.storeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold shadow-lg shadow-blue-600/30 hover:opacity-90 transition-all transform hover:-translate-y-0.5"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>View on App Store / Google Play</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <span className="text-[11px] text-zinc-400 font-mono italic text-center sm:text-left">
              Published Mobile Solution • Fclick Solution
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <InteractivePhone3D
            theme="blue"
            floatingTags={project.floatingTags}
            interactive={true}
            customTitle="GVN Published App"
            customSubtitle="Fclick Solution Intern Project"
          />
        </div>
      </div>
    </div>
  );
};
