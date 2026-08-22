import React from 'react';
import { X, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onEnroll: (courseName?: string) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  item,
  onClose,
  onPrev,
  onNext,
  onEnroll,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 animate-in zoom-in-95 duration-150">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-4 bg-slate-950/80 border-b border-slate-800 text-white">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase">
              {item.categoryLabel}
            </span>
            <h3 className="font-bold text-base text-white truncate max-w-xs sm:max-w-md">
              {item.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Image Stage */}
        <div className="relative bg-black flex items-center justify-center min-h-[300px] max-h-[70vh] overflow-hidden group">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full max-h-[70vh] object-contain select-none"
          />

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-amber-400 hover:text-slate-950 text-white p-3 rounded-full backdrop-blur-sm transition-colors cursor-pointer shadow-lg"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-amber-400 hover:text-slate-950 text-white p-3 rounded-full backdrop-blur-sm transition-colors cursor-pointer shadow-lg"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption & Action Bar */}
        <div className="p-5 bg-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
          <div className="space-y-1">
            <h4 className="text-white font-bold text-lg">{item.title}</h4>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
              {item.description}
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onEnroll(item.title);
            }}
            className="shrink-0 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow cursor-pointer transition-all hover:scale-105"
          >
            <Zap className="w-4 h-4 fill-slate-950" />
            <span>Quero Estudar Aqui</span>
          </button>
        </div>

      </div>
    </div>
  );
};
