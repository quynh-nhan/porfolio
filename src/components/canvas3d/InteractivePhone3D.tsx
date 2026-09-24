import React, { useState, useRef, useEffect } from 'react';
import type { ProjectScreen } from '../../types';
import { PetVillaScreenRenderer } from './PetVillaScreenRenderer';

interface InteractivePhone3DProps {
  theme?: 'orange' | 'blue' | 'hero' | 'construction';
  screenData?: ProjectScreen;
  floatingTags?: string[];
  interactive?: boolean;
  activeScreenIndex?: number;
  onScreenChange?: (index: number) => void;
  screensList?: ProjectScreen[];
  customTitle?: string;
  customSubtitle?: string;
}

export const InteractivePhone3D: React.FC<InteractivePhone3DProps> = ({
  theme = 'orange',
  screenData,
  floatingTags = [],
  interactive = true,
  activeScreenIndex = 0,
  onScreenChange,
  screensList = [],
  customTitle,
  customSubtitle,
}) => {
  const [rotateX, setRotateX] = useState(-5);
  const [rotateY, setRotateY] = useState(12);
  const [isDragging, setIsDragging] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);
  
  const dragStart = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-rotation effect when enabled
  useEffect(() => {
    if (!autoRotate || isDragging) return;
    const interval = setInterval(() => {
      setRotateY((prev) => (prev + 0.8) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, [autoRotate, isDragging]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactive) return;
    setIsDragging(true);
    setAutoRotate(false);
    dragStart.current = { x: e.clientX, y: e.clientY };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Fallback if pointer capture isn't supported
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !interactive) return;
    const deltaX = e.clientX - dragStart.current.x;
    const deltaY = e.clientY - dragStart.current.y;
    
    setRotateY((prev) => (prev + deltaX * 0.6) % 360);
    setRotateX((prev) => Math.max(-55, Math.min(55, prev - deltaY * 0.5)));
    
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Fallback
    }
  };

  const handleReset = () => {
    setRotateX(-5);
    setRotateY(12);
    setAutoRotate(false);
  };

  const toggleAutoRotate = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAutoRotate((prev) => !prev);
  };

  const getThemeStyles = () => {
    switch (theme) {
      case 'blue':
        return {
          phoneBorder: 'border-blue-500/40 shadow-blue-500/20',
          glowBg: 'bg-blue-600/20',
          accentText: 'text-blue-400',
          tagBg: 'bg-blue-950/80 border-blue-500/40 text-blue-300',
        };
      case 'hero':
        return {
          phoneBorder: 'border-orange-500/50 shadow-orange-500/30',
          glowBg: 'bg-orange-600/25',
          accentText: 'text-orange-400',
          tagBg: 'bg-zinc-900/90 border-orange-500/40 text-orange-300',
        };
      case 'construction':
        return {
          phoneBorder: 'border-amber-500/50 shadow-amber-500/30',
          glowBg: 'bg-amber-600/25',
          accentText: 'text-amber-400',
          tagBg: 'bg-amber-950/80 border-amber-500/40 text-amber-300',
        };
      default:
        return {
          phoneBorder: 'border-[#ff6b00]/50 shadow-[#ff6b00]/30',
          glowBg: 'bg-[#ff6b00]/20',
          accentText: 'text-[#ff6b00]',
          tagBg: 'bg-[#18110b]/90 border-[#ff6b00]/40 text-orange-300',
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onDoubleClick={handleReset}
      style={{ touchAction: 'none' }}
      className={`relative w-full max-w-[340px] sm:max-w-[380px] h-[580px] sm:h-[640px] mx-auto flex items-center justify-center select-none perspective-1000 ${
        interactive ? 'cursor-grab active:cursor-grabbing' : ''
      }`}
    >
      <div className={`absolute w-72 h-96 rounded-full ${styles.glowBg} blur-3xl -z-10 animate-pulse-glow pointer-events-none`} />

      {floatingTags.map((tag, index) => {
        const offsets = [
          { top: '8%', left: '-15%', delay: '0s' },
          { top: '25%', right: '-18%', delay: '1s' },
          { top: '48%', left: '-20%', delay: '2s' },
          { top: '68%', right: '-15%', delay: '1.5s' },
          { top: '85%', left: '-10%', delay: '0.5s' },
          { top: '92%', right: '-8%', delay: '2.5s' },
        ];
        const pos = offsets[index % offsets.length];

        return (
          <div
            key={tag}
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
              animationDelay: pos.delay,
              transform: `translateZ(${30 + index * 10}px)`,
            }}
            className={`absolute z-30 px-3 py-1.5 rounded-xl text-xs font-mono font-bold tracking-wide backdrop-blur-xl border shadow-xl animate-float-slow transition-transform hover:scale-110 pointer-events-none hidden sm:block ${styles.tagBg}`}
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              {tag}
            </span>
          </div>
        );
      })}

      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: isDragging || autoRotate ? 'none' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        className={`relative w-[280px] sm:w-[310px] h-[540px] sm:h-[600px] rounded-[48px] bg-gradient-to-b from-zinc-800 via-zinc-900 to-black p-3.5 border-4 shadow-2xl ${styles.phoneBorder}`}
      >
        <div className="absolute -left-2.5 top-28 w-1 h-10 rounded-l-md bg-zinc-700 pointer-events-none" />
        <div className="absolute -left-2.5 top-42 w-1 h-14 rounded-l-md bg-zinc-700 pointer-events-none" />
        <div className="absolute -right-2.5 top-36 w-1 h-16 rounded-r-md bg-zinc-700 pointer-events-none" />

        {/* Dynamic Island Notch */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-between px-3 border border-zinc-800/80 pointer-events-none">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-blue-500/80"></div>
          </div>
          <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
        </div>

        {/* Inner Phone Display */}
        <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-inner">
          {screenData ? (
            <PetVillaScreenRenderer screen={screenData} />
          ) : (
            <div className={`w-full h-full flex flex-col justify-between p-6 bg-gradient-to-b ${
              theme === 'blue' ? 'from-blue-950/60 via-zinc-900 to-black' : 'from-zinc-900 via-zinc-950 to-black'
            } text-white`}>
              
              <div className="pt-8 text-center space-y-2">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${styles.tagBg}`}>
                  {theme === 'blue' ? 'GVN Mobile App' : theme === 'construction' ? 'Personal Mobile App' : 'Mobile Ecosystem'}
                </span>
                <h3 className="text-xl font-black text-white tracking-tight">{customTitle || 'Live Published App'}</h3>
                <p className="text-xs text-zinc-400">{customSubtitle || 'React Native & TypeScript'}</p>
              </div>

              <div className="my-auto space-y-3">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white">
                      {theme === 'construction' ? 'APP' : 'GVN'}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">
                        {theme === 'construction' ? 'My App Architecture' : 'Fclick Solution'}
                      </h4>
                      <p className="text-xs text-zinc-400">
                        {theme === 'construction' ? 'React Native Engine' : 'Published Feature Builds'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  {(theme === 'construction' 
                    ? ['TaskCheckInCamera', 'TaskDetailScreen', 'CoupleDrawingScreen', 'tasksService.ts']
                    : ['Order Change Request', 'GPS Timestamp Watermark', 'Monthly Packages', 'Production Testing']
                  ).map((item) => (
                    <div key={item} className="flex items-center gap-2 p-2 rounded-xl bg-black/40 border border-white/5 text-zinc-300">
                      <span className={`w-1.5 h-1.5 rounded-full ${theme === 'construction' ? 'bg-amber-400' : 'bg-blue-400'}`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center pb-2">
                <span className="text-[10px] text-zinc-500 font-mono">React Native • Expo • REST API</span>
              </div>
            </div>
          )}
        </div>

        <div className="absolute inset-0 rounded-[44px] bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-30" />
      </div>

      {screensList.length > 0 && onScreenChange && (
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-40 bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-800">
          {screensList.map((s, idx) => (
            <button
              key={s.id}
              onClick={(e) => {
                e.stopPropagation();
                onScreenChange(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeScreenIndex === idx ? 'bg-[#ff6b00] w-6' : 'bg-zinc-700 hover:bg-zinc-500'
              }`}
              title={s.title}
            />
          ))}
        </div>
      )}

    </div>
  );
};

