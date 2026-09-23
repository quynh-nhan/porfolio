import React, { useState } from 'react';
import { Code2, ExternalLink, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon } from '../common/Icons';

export const CodeWorkspace: React.FC = () => {
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'userApp' | 'staffApp'>('userApp');

  const userCodeSnippet = `// PetVilla User App — DATN_FE
import React from 'react';
import { useBookingStore } from '@/store/useBookingStore';
import { VisionCamera } from '@/modules/VisionCamera';

export const PetVillaBookingScreen = () => {
  const { selectedSlot, confirmBooking } = useBookingStore();

  const handleConfirm = async () => {
    await confirmBooking({
      serviceId: 'boarding-deluxe',
      timestamp: Date.now(),
    });
  };

  return (
    <View style={styles.container}>
      <Header title="PetVilla Boarding" />
      <SlotPicker onSelect={handleConfirm} />
    </View>
  );
};`;

  const staffCodeSnippet = `// PetVilla Staff App — Pet-Villa-FE-Staff
import { VisionCameraScanner } from 'react-native-vision-camera';
import { ZegoAudioRoom } from 'zego-express-engine-react-native';

export const StaffCheckInScreen = () => {
  const handlePetRecognition = async (frame: CameraFrame) => {
    const petMatch = fontModel.detect(frame);
    if (petMatch.confidence > 0.95) {
      autoCheckInPet(petMatch.petId);
    }
  };

  return (
    <StaffContainer>
      <VisionCameraScanner onFrame={handlePetRecognition} />
    </StaffContainer>
  );
};`;

  const handleCopyCode = (snippet: string, tabName: string) => {
    navigator.clipboard.writeText(snippet);
    setCopiedTab(tabName);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#07080b]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ff6b00]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-3 max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#ff6b00]">
            <Code2 className="w-3.5 h-3.5" />
            <span>OPEN SOURCE & CODE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Built with Code. <br className="hidden sm:inline" />
            <span className="orange-gradient-text">Improved Through Debugging.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Explore authentic codebase repositories for PetVilla User & Staff mobile applications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl glass-panel-orange p-4 sm:p-8 border border-[#ff6b00]/30 shadow-2xl">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4 px-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              </div>

              <div className="flex items-center gap-1 ml-4 bg-zinc-950 p-1 rounded-xl border border-zinc-800">
                <button
                  onClick={() => setActiveTab('userApp')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    activeTab === 'userApp'
                      ? 'bg-[#ff6b00] text-white shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  UserApp.tsx
                </button>
                <button
                  onClick={() => setActiveTab('staffApp')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    activeTab === 'staffApp'
                      ? 'bg-[#ff6b00] text-white shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  StaffApp.tsx
                </button>
              </div>
            </div>

            <button
              onClick={() => handleCopyCode(activeTab === 'userApp' ? userCodeSnippet : staffCodeSnippet, activeTab)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              {copiedTab === activeTab ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#ff6b00]" />
                  <span>Copy Snippet</span>
                </>
              )}
            </button>
          </div>

          <div className="my-6 p-4 sm:p-6 rounded-2xl bg-black/90 border border-zinc-800 text-left font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto shadow-inner leading-relaxed">
            <pre>
              <code>{activeTab === 'userApp' ? userCodeSnippet : staffCodeSnippet}</code>
            </pre>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-zinc-800/80">
            <a
              href={PERSONAL_INFO.githubUserLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff8800] text-white text-xs font-bold shadow-lg shadow-[#ff6b00]/25 hover:opacity-90 transition-all transform hover:-translate-y-0.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View User App Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={PERSONAL_INFO.githubStaffLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white text-xs font-bold hover:bg-zinc-800 transition-all transform hover:-translate-y-0.5"
            >
              <GithubIcon className="w-4 h-4 text-[#ff6b00]" />
              <span>View Staff App Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
