import React from 'react';
import { Mail, Download, Sparkles, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

interface ContactSectionProps {
  onOpenCv: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCv }) => {
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#07080b]">
      {/* Background 3D Floating Smartphone & Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#ff6b00]/20 via-orange-600/10 to-transparent blur-3xl pointer-events-none" />

      {/* Floating background phone graphic */}
      <div className="absolute right-10 top-20 opacity-15 pointer-events-none animate-float-slow hidden lg:block">
        <div className="w-44 h-80 rounded-3xl border-2 border-[#ff6b00] p-3">
          <div className="w-12 h-3 mx-auto bg-[#ff6b00] rounded-full mb-2" />
          <div className="w-full h-full bg-orange-500/10 rounded-2xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header Title */}
        <div className="space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#ff6b00] shadow-inner">
            <Sparkles className="w-4 h-4 text-[#ff6b00]" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Let's Build <span className="orange-gradient-text">Something Together.</span>
          </h2>

          <p className="text-base sm:text-xl text-zinc-300 font-medium">
            {PERSONAL_INFO.statusTag}
          </p>
        </div>

        {/* Action Buttons Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          
          {/* LinkedIn Button */}
          <a
            href={PERSONAL_INFO.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 hover:border-blue-500/50 hover:bg-zinc-900 transition-all duration-300 transform hover:-translate-y-1 group flex flex-col items-center justify-center gap-3 text-center shadow-xl"
          >
            <div className="p-4 rounded-xl bg-blue-600/20 text-blue-400 group-hover:scale-110 transition-transform">
              <LinkedinIcon className="w-7 h-7" />
            </div>
            <div>
              <span className="text-sm font-bold text-white block">LinkedIn</span>
              <span className="text-[11px] text-zinc-400 font-mono">Connect Profile</span>
            </div>
          </a>

          {/* GitHub Button */}
          <a
            href={PERSONAL_INFO.githubUserLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 hover:border-orange-500/50 hover:bg-zinc-900 transition-all duration-300 transform hover:-translate-y-1 group flex flex-col items-center justify-center gap-3 text-center shadow-xl"
          >
            <div className="p-4 rounded-xl bg-orange-600/20 text-[#ff6b00] group-hover:scale-110 transition-transform">
              <GithubIcon className="w-7 h-7" />
            </div>
            <div>
              <span className="text-sm font-bold text-white block">GitHub</span>
              <span className="text-[11px] text-zinc-400 font-mono">Repositories</span>
            </div>
          </a>

          {/* Direct Email Link Button */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-6 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all duration-300 transform hover:-translate-y-1 group flex flex-col items-center justify-center gap-3 text-center shadow-xl"
          >
            <div className="p-4 rounded-xl bg-emerald-600/20 text-emerald-400 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <span className="text-sm font-bold text-white block">Email Direct</span>
              <span className="text-[11px] text-zinc-400 font-mono truncate max-w-[170px]">{PERSONAL_INFO.email}</span>
            </div>
          </a>

          {/* Download CV Button */}
          <button
            onClick={onOpenCv}
            className="p-6 rounded-2xl bg-gradient-to-r from-[#ff6b00] to-[#ff8800] text-white hover:opacity-95 transition-all duration-300 transform hover:-translate-y-1 group flex flex-col items-center justify-center gap-3 text-center shadow-xl shadow-[#ff6b00]/30"
          >
            <div className="p-4 rounded-xl bg-white/20 text-white group-hover:scale-110 transition-transform">
              <Download className="w-7 h-7" />
            </div>
            <div>
              <span className="text-sm font-bold block">Download CV</span>
              <span className="text-[11px] text-orange-100 font-mono">Curriculum Vitae</span>
            </div>
          </button>

        </div>

        {/* Email Address Banner with One-Click Copy */}
        <div className="max-w-xl mx-auto p-5 rounded-2xl glass-panel-orange border border-[#ff6b00]/30 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-[#ff6b00]/20 text-[#ff6b00] border border-[#ff6b00]/30">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-zinc-400 font-mono block uppercase tracking-wider">Primary Developer Email</span>
              <span className="text-sm font-bold text-white font-mono">{PERSONAL_INFO.email}</span>
            </div>
          </div>

          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-mono font-bold bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white hover:border-[#ff6b00] transition-colors flex items-center justify-center gap-1.5"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#ff6b00]" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
};
