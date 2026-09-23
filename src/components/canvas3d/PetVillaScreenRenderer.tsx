import React from 'react';
import type { ProjectScreen } from '../../types';

interface PetVillaScreenRendererProps {
  screen: ProjectScreen & { imgUrl?: string };
}

export const PetVillaScreenRenderer: React.FC<PetVillaScreenRendererProps> = ({ screen }) => {
  return (
    <div className="w-full h-full bg-[#07080b] text-white flex flex-col justify-between select-none relative overflow-hidden font-sans">
      
      {/* Render full screenshot image with 100% visibility (no tab cropping) */}
      {screen.imgUrl ? (
        <div className="relative w-full h-full flex items-center justify-center bg-[#07080b]">
          <img
            src={screen.imgUrl}
            alt={screen.title}
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-b from-orange-950 via-zinc-900 to-black">
          <div className="pt-8 text-center space-y-2">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#ff6b00]/20 text-orange-300 border border-[#ff6b00]/40">
              PetVilla Client App
            </span>
            <h4 className="font-bold text-sm text-white tracking-tight">{screen.title}</h4>
            <p className="text-xs text-orange-200/80">{screen.subtitle}</p>
          </div>

          <div className="my-auto p-3 rounded-xl bg-black/50 border border-white/10 text-[11px] text-zinc-300">
            {screen.description}
          </div>

          <div className="text-center pb-2 text-[10px] text-zinc-500 font-mono">
            React Native • Expo
          </div>
        </div>
      )}

    </div>
  );
};
