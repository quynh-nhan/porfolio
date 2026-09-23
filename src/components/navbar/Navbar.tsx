import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'projects', 'experience', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#07080b]/85 backdrop-blur-xl border-b border-zinc-800/60 shadow-lg shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ff6b00] to-[#ff9933] flex items-center justify-center font-black text-white text-lg shadow-md shadow-[#ff6b00]/30 transition-transform group-hover:scale-105">
              QN.
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white group-hover:text-[#ff6b00] transition-colors text-sm sm:text-base">
                QUỲNH NHÂN
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                React Native Dev
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-zinc-800/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#ff6b00] text-white shadow-md shadow-[#ff6b00]/30'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenCv}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff8800] hover:opacity-90 shadow-md shadow-[#ff6b00]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-3.5 h-3.5" />
              Download CV
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCv}
              className="p-2 text-xs font-semibold text-white rounded-lg bg-[#ff6b00] shadow-sm shadow-[#ff6b00]/30"
              title="Download CV"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#ff6b00]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#090b0e]/95 backdrop-blur-2xl border-b border-zinc-800/80 p-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 text-sm font-semibold rounded-xl flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#ff6b00]/15 text-[#ff6b00] border border-[#ff6b00]/30'
                      : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#ff6b00]" />}
                </a>
              );
            })}

            <div className="pt-4 border-t border-zinc-800/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCv();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff8800] text-white text-sm font-semibold shadow-lg shadow-[#ff6b00]/25"
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
