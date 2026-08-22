import React, { useEffect, useState, useRef } from 'react';
import { ChevronRight, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { TECEAUT_LOGO_URL } from '../data/assets';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Web Audio Synthesizer for high-tech automation power-up
  const playTechSound = (type: 'hum' | 'relay' | 'success') => {
    if (isMuted) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      if (type === 'hum') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(60, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(240, ctx.currentTime + 1.8);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 1.8);
      } else if (type === 'relay') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(2400, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.12);
      } else if (type === 'success') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.setValueAtTime(739.99, ctx.currentTime + 0.12); // F#5
        osc.frequency.setValueAtTime(880.00, ctx.currentTime + 0.24); // A5
        osc.frequency.setValueAtTime(1174.66, ctx.currentTime + 0.36); // D6
        gain.gain.setValueAtTime(0.09, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.8);
      }
    } catch {
      // Audio autoplay handled gracefully
    }
  };

  useEffect(() => {
    playTechSound('hum');

    const duration = 6000; // 6 seconds exact
    const intervalTime = 40;
    const steps = duration / intervalTime;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const currentPct = Math.min(100, Math.round((stepCount / steps) * 100));
      setProgress(currentPct);

      if (currentPct === 20 || currentPct === 45 || currentPct === 70) {
        playTechSound('relay');
      } else if (currentPct >= 98) {
        playTechSound('success');
      }

      if (stepCount >= steps) {
        clearInterval(timer);
        setIsFadingOut(true);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        try {
          audioContextRef.current.close().catch(() => {});
        } catch {}
      }
    };
  }, []);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 200);
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#020817] text-white flex flex-col justify-between p-4 sm:p-8 select-none overflow-hidden transition-all duration-700 font-sans ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-105 filter blur-sm' : 'opacity-100'
      }`}
    >
      {/* 1. TOP BAR */}
      <div className="flex items-center justify-between z-30">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F5C518] animate-ping" />
          <span className="text-xs sm:text-sm font-black text-[#F5C518] tracking-widest uppercase">
            TECEAUT CURSOS • AUTOMAÇÃO & ELÉTRICA
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2.5 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-[#F5C518] hover:border-[#F5C518] transition-all cursor-pointer"
            title={isMuted ? 'Ativar Efeitos Sonoros' : 'Mutar Efeitos'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#F5C518]" />}
          </button>

          <button
            onClick={handleSkip}
            className="px-4 py-2 rounded-lg bg-[#F5C518] hover:bg-[#FFD700] text-[#051226] font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_20px_rgba(245,197,24,0.4)] transition-all cursor-pointer transform hover:scale-105 active:scale-95"
          >
            <span>ENTRAR NO SITE</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. DYNAMIC PURE VISUAL FX BACKGROUND (HIGH-TECH INDUSTRIAL & CYBERNETIC AUTOMATION) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Deep Ambient Light Flares */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] lg:w-[1100px] h-[700px] sm:h-[900px] lg:h-[1100px] bg-[radial-gradient(circle_at_center,rgba(245,197,24,0.18)_0%,rgba(0,240,255,0.12)_30%,rgba(5,18,38,0.8)_70%,transparent_100%)] blur-2xl pointer-events-none" />

        {/* Animated Laser Scanning Beam */}
        <div className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-[#00F0FF]/15 to-transparent pointer-events-none animate-[scan_3s_ease-in-out_infinite]" />

        {/* High-Tech Circuit Board Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(rgba(245, 197, 24, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Animated SVG Optical Circuits with Glowing Energy Nodes */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="goldCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="50%" stopColor="#F5C518" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
            
            <filter id="superGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Symmetrical Left Circuits */}
          <path
            d="M 0 300 L 180 300 L 260 200 L 400 200"
            stroke="url(#goldCyanGrad)"
            strokeWidth="2.5"
            fill="none"
            filter="url(#superGlow)"
            strokeDasharray="12 6"
            className="animate-pulse opacity-70"
          />
          <path
            d="M 0 450 L 150 450 L 280 580 L 420 580"
            stroke="url(#goldCyanGrad)"
            strokeWidth="2"
            fill="none"
            filter="url(#superGlow)"
            strokeDasharray="16 8"
            className="animate-pulse opacity-60"
          />

          {/* Symmetrical Right Circuits */}
          <path
            d="M 100% 300 L calc(100% - 180px) 300 L calc(100% - 260px) 200 L calc(100% - 400px) 200"
            stroke="url(#goldCyanGrad)"
            strokeWidth="2.5"
            fill="none"
            filter="url(#superGlow)"
            strokeDasharray="12 6"
            className="animate-pulse opacity-70"
          />
          <path
            d="M 100% 450 L calc(100% - 150px) 450 L calc(100% - 280px) 580 L calc(100% - 420px) 580"
            stroke="url(#goldCyanGrad)"
            strokeWidth="2"
            fill="none"
            filter="url(#superGlow)"
            strokeDasharray="16 8"
            className="animate-pulse opacity-60"
          />

          {/* Glowing Energy Nodes */}
          <circle cx="260" cy="200" r="6" fill="#F5C518" filter="url(#superGlow)" />
          <circle cx="400" cy="200" r="7" fill="#00F0FF" filter="url(#superGlow)" />
          <circle cx="280" cy="580" r="6" fill="#F5C518" filter="url(#superGlow)" />
          <circle cx="420" cy="580" r="7" fill="#00FF66" filter="url(#superGlow)" />
        </svg>

        {/* Triple Concentric Rotating Optical Rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[540px] md:w-[680px] lg:w-[800px] h-[380px] sm:h-[540px] md:h-[680px] lg:h-[800px] pointer-events-none">
          {/* Outer Gold Rotating Gear Ring */}
          <div className="w-full h-full rounded-full border-2 border-dashed border-[#F5C518]/50 animate-[spin_25s_linear_infinite]" />
          {/* Middle Cyan Segmented Ring */}
          <div className="absolute inset-8 sm:inset-12 rounded-full border border-dotted border-[#00F0FF]/60 animate-[spin_18s_linear_infinite_reverse]" />
          {/* Inner High-Speed Hexagon Orbit */}
          <div className="absolute inset-16 sm:inset-24 rounded-full border-2 border-[#F5C518]/40 border-t-[#00F0FF] border-b-[#FFD700] animate-[spin_10s_linear_infinite]" />
        </div>

        {/* Symmetrical Left Holographic Equalizer / Waveform */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex items-end gap-1.5 h-48 opacity-60">
          {[40, 75, 55, 90, 60, 100, 45, 80, 65, 95, 50, 85].map((h, i) => (
            <div
              key={`eq-l-${i}`}
              className="w-1.5 rounded-t bg-gradient-to-t from-[#00F0FF] via-[#F5C518] to-[#FFD700] transition-all duration-300 animate-pulse"
              style={{ 
                height: `${(h * (progress / 100 + 0.3)) % 100}%`,
                animationDelay: `${i * 0.1}s` 
              }}
            />
          ))}
        </div>

        {/* Symmetrical Right Holographic Equalizer / Waveform */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex items-end gap-1.5 h-48 opacity-60">
          {[85, 50, 95, 65, 80, 45, 100, 60, 90, 55, 75, 40].map((h, i) => (
            <div
              key={`eq-r-${i}`}
              className="w-1.5 rounded-t bg-gradient-to-t from-[#00F0FF] via-[#F5C518] to-[#FFD700] transition-all duration-300 animate-pulse"
              style={{ 
                height: `${(h * (progress / 100 + 0.3)) % 100}%`,
                animationDelay: `${i * 0.1}s` 
              }}
            />
          ))}
        </div>

      </div>

      {/* 3. CENTERPIECE: ULTRA LARGE UNCONFINED LOGO WITH PROFESSIONAL LIGHTING EFFECTS */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center my-auto px-4 w-full max-w-5xl mx-auto">
        
        {/* Massive Radiant Glow Aura behind Logo */}
        <div className="relative group flex flex-col items-center justify-center w-full">
          
          {/* Multi-layered Pulsing Light Beams */}
          <div className="absolute -inset-10 sm:-inset-20 rounded-full bg-gradient-to-r from-[#00F0FF]/25 via-[#F5C518]/40 to-[#FFD700]/25 blur-3xl animate-pulse pointer-events-none" />
          <div className="absolute inset-0 bg-[#F5C518]/15 blur-2xl pointer-events-none" />

          {/* Fully Unboxed, Large Logo with Transparent Background Preserved */}
          <div className="relative w-full max-w-[340px] sm:max-w-[540px] md:max-w-[680px] lg:max-w-[840px] flex items-center justify-center transform transition-transform duration-500 hover:scale-105">
            <img
              src={TECEAUT_LOGO_URL}
              alt="TECEAUT Cursos - Logotipo Oficial"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[240px] sm:max-h-[340px] md:max-h-[420px] lg:max-h-[480px] object-contain drop-shadow-[0_0_40px_rgba(245,197,24,0.65)] filter brightness-105 contrast-105 bg-transparent"
            />
          </div>

        </div>

      </div>

      {/* 4. BOTTOM HIGH-TECH POWER-UP TIME BAR (6.0 SECONDS EXACT) */}
      <div className="relative z-30 max-w-2xl w-full mx-auto space-y-2.5 pb-2">
        
        <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
          <span className="text-[#F5C518] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#F5C518] animate-spin" />
            INICIALIZANDO SISTEMA INDUSTRIAL...
          </span>
          <span className="font-mono text-sm sm:text-base font-black text-white">
            {progress}% <span className="text-xs text-[#00F0FF] font-normal">({(progress * 0.06).toFixed(1)}s / 6.0s)</span>
          </span>
        </div>

        {/* High Precision Glowing Track */}
        <div className="relative w-full h-3.5 sm:h-4 bg-slate-950 rounded-full border border-slate-700 overflow-hidden p-0.5 shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#00F0FF] via-[#F5C518] to-[#FFD700] shadow-[0_0_20px_rgba(245,197,24,0.9)] transition-all duration-75 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/30 animate-[pulse_0.8s_infinite]" />
          </div>
        </div>

      </div>

    </div>
  );
};
