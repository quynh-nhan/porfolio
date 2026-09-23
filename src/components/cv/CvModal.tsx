import React, { useState } from 'react';
import { FileText, Download, X, Award, CheckCircle2, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleDownloadPdf = () => {
    const cvWindow = window.open('', '_blank');
    if (cvWindow) {
      cvWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>CV - Trương Nguyễn Quỳnh Nhân</title>
          <style>
            body { font-family: sans-serif; padding: 40px; color: #111; line-height: 1.6; max-width: 800px; margin: 0 auto; }
            h1 { color: #ff6b00; margin-bottom: 4px; }
            h2 { color: #333; font-size: 1.2rem; border-bottom: 2px solid #ff6b00; padding-bottom: 4px; margin-top: 24px; }
            .badge { background: #fff0e6; color: #d95300; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 0.85rem; }
            .contact { color: #555; font-size: 0.95rem; margin-bottom: 20px; }
            ul { padding-left: 20px; }
            li { margin-bottom: 6px; }
          </style>
        </head>
        <body>
          <h1>TRƯƠNG NGUYỄN QUỲNH NHÂN</h1>
          <p><strong>React Native Developer</strong> | Fresher / Junior</p>
          <p class="contact">
            Email: ${PERSONAL_INFO.email} | Location: Ho Chi Minh City, Vietnam<br/>
            LinkedIn: ${PERSONAL_INFO.linkedinLink}<br/>
            GitHub User App: ${PERSONAL_INFO.githubUserLink}<br/>
            GitHub Staff App: ${PERSONAL_INFO.githubStaffLink}
          </p>
          
          <h2>PROFILE SUMMARY</h2>
          <p>${PERSONAL_INFO.bio} ${PERSONAL_INFO.aboutText}</p>

          <h2>EDUCATION & HIGHLIGHTS</h2>
          <p><strong>FPT Polytechnic</strong> — Mobile Application Development (2024 - 2026)</p>
          <ul>
            <li>GPA: <span class="badge">3.75 / 4.0</span></li>
            <li>Achievement: <span class="badge">Outstanding Student — 5 Consecutive Semesters</span></li>
          </ul>

          <h2>WORK EXPERIENCE</h2>
          <p><strong>Fclick Solution</strong> — React Native Developer Intern (04/2026 – 08/2026)</p>
          <ul>
            <li>Developed customer & service provider mobile features for GVN application using React Native & TypeScript.</li>
            <li>Implemented order change requests, monthly service packages, proof-of-work photo upload with GPS/timestamp watermark.</li>
            <li>Configured production APK builds and conducted rigorous environment testing.</li>
          </ul>

          <h2>KEY PROJECTS</h2>
          <p><strong>PetVilla Platform</strong> — Frontend Sub Lead (<span class="badge">Golden Ticket Award</span>)</p>
          <ul>
            <li>Architected React Native & Expo mobile frontend for pet boarding and care ecosystem.</li>
            <li>Integrated Vision Camera for AI pet recognition, ZegoCloud audio call RTC, FCM push notifications, and payment gateways.</li>
          </ul>

          <h2>TECHNICAL SKILLS</h2>
          <p>React Native, Expo, TypeScript, JavaScript, Zustand, REST API, Firebase, FCM, Vision Camera, Zego Cloud, Node.js, MongoDB, MySQL, Git, Figma</p>

          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
        </html>
      `);
      cvWindow.document.close();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel-orange bg-[#0d0f14] p-6 sm:p-8 shadow-2xl border border-[#ff6b00]/30 text-gray-100">
        <div className="flex items-start justify-between border-b border-zinc-800 pb-5">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[#ff6b00]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">{PERSONAL_INFO.name}</h2>
              <p className="text-sm font-medium text-[#ff6b00]">{PERSONAL_INFO.role} — Curriculum Vitae</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3">
            <Award className="w-8 h-8 text-[#ff6b00] flex-shrink-0" />
            <div>
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Education</span>
              <p className="text-sm font-bold text-white">GPA 3.75 / 4.0</p>
              <p className="text-xs text-amber-400 font-medium">Outstanding Student — 5 Semesters</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 flex-shrink-0" />
            <div>
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Graduation Award</span>
              <p className="text-sm font-bold text-white">PetVilla Sub Lead</p>
              <p className="text-xs text-emerald-400 font-medium">Golden Ticket Award</p>
            </div>
          </div>
        </div>

        <div className="space-y-5 text-sm text-zinc-300 bg-zinc-950/60 p-5 rounded-xl border border-zinc-800/80">
          <div>
            <h3 className="text-xs font-bold text-[#ff6b00] uppercase tracking-wider mb-1">Career Objective</h3>
            <p className="leading-relaxed">{PERSONAL_INFO.bio} {PERSONAL_INFO.aboutText}</p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-[#ff6b00] uppercase tracking-wider mb-2">Core Tech Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {['React Native', 'Expo', 'TypeScript', 'Zustand', 'REST API', 'FCM', 'Vision Camera', 'Zego Cloud', 'Git'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-xs rounded-md bg-zinc-800 text-zinc-200 border border-zinc-700 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-[#ff6b00] uppercase tracking-wider mb-1">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400">
              <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#ff6b00]" /> {PERSONAL_INFO.email}</span>
              <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#ff6b00]" /> Ho Chi Minh City, Vietnam</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-zinc-800">
          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-zinc-300 hover:text-white rounded-lg bg-zinc-900 border border-zinc-700 hover:border-zinc-500 transition-colors"
          >
            {copiedEmail ? 'Email Copied!' : 'Copy Email Address'}
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownloadPdf}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff8800] hover:opacity-90 shadow-lg shadow-[#ff6b00]/25 transition-all transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              Download Printable CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
