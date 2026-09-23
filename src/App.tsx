import { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { ProjectShowcase } from './components/projects/ProjectShowcase';
import { ExperienceTimeline } from './components/experience/ExperienceTimeline';
import { TechStackSection } from './components/techstack/TechStackSection';
import { AboutSection } from './components/about/AboutSection';
import { CodeWorkspace } from './components/github/CodeWorkspace';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import { CvModal } from './components/cv/CvModal';

export function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07080b] text-zinc-100 relative selection:bg-[#ff6b00] selection:text-white overflow-x-hidden">
      <Navbar onOpenCv={() => setIsCvOpen(true)} />

      <main>
        <HeroSection onOpenCv={() => setIsCvOpen(true)} />
        <ProjectShowcase />
        <ExperienceTimeline />
        <TechStackSection />
        <AboutSection />
        <CodeWorkspace />
        <ContactSection onOpenCv={() => setIsCvOpen(true)} />
      </main>

      <Footer />
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </div>
  );
}

export default App;
