import React, { useState } from 'react';
import { Search, ChevronRight, Zap, Phone, Sparkles } from 'lucide-react';
import { PageTab, GalleryItem } from '../types';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/galleryData';

interface GalleryPageProps {
  setCurrentTab: (tab: PageTab) => void;
  onOpenEnrollment: (courseName?: string) => void;
  onSelectGalleryItem: (item: GalleryItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  setCurrentTab,
  onOpenEnrollment,
  onSelectGalleryItem,
}) => {
  const [activeCategory, setActiveCategory] = useState('todas');

  const filteredItems = activeCategory === 'todas'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const whatsappUrl = 'https://wa.me/5571991003225?text=Olá!%20Vi%20as%20fotos%20do%20laboratório%20da%20Teceaut%20e%20gostaria%20de%20agendar%20uma%20visita%20ou%20fazer%20minha%20matrícula.';

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 min-h-screen">
      
      {/* 1. Header Banner / Breadcrumb Area */}
      <section className="bg-[#051226] text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-6 font-medium">
            <button 
              onClick={() => setCurrentTab('inicio')}
              className="hover:text-[#F5C518] transition-colors cursor-pointer"
            >
              Início
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#F5C518] font-bold">Galeria</span>
          </nav>

          {/* Title & Right Text in Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6">
              <span className="px-3.5 py-1 rounded bg-[#F5C518]/20 text-[#F5C518] font-bold text-xs uppercase tracking-wider border border-[#F5C518]/30">
                Instalações & Aulas Práticas
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 uppercase tracking-tight">
                GALERIA <span className="text-[#F5C518]">TECEAUT CURSOS</span>
              </h1>
              <div className="w-16 h-1 bg-[#F5C518] mt-3 rounded" />
            </div>

            <div className="lg:col-span-6">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-[#06152e] p-5 rounded-lg border border-slate-700">
                Confira momentos das nossas aulas práticas, laboratório, projetos dos alunos e instalações da Teceaut Cursos. Formação prática para o mercado industrial!
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Filter Tags (Rounded Pill Buttons) */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-[68px] sm:top-[74px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer shadow-sm ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-400/50 shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-950 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Grid of 12 Photos (3 rows × 4 columns) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectGalleryItem(item)}
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md group cursor-pointer bg-slate-900 border border-slate-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Main Photo */}
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-1 rounded-md bg-[#0A1F44]/90 text-white font-bold text-[10px] uppercase backdrop-blur-sm shadow border border-blue-900/50">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Centered Zoom Magnifier Icon on Hover */}
              <div className="absolute inset-0 bg-[#0A1F44]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                  <Search className="w-6 h-6" />
                </div>
              </div>

              {/* Bottom Overlay with Title */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 text-white z-10">
                <h3 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                </h3>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state safeguard */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-sm">Nenhuma foto encontrada nesta categoria no momento.</p>
            <button
              onClick={() => setActiveCategory('todas')}
              className="mt-3 text-xs font-bold text-[#0A1F44] hover:underline"
            >
              Ver todas as fotos
            </button>
          </div>
        )}

      </section>

      {/* 4. Bottom Action Banner: Agende uma Visita ao Laboratório */}
      <section className="bg-gradient-to-r from-[#07152d] via-[#0A1F44] to-[#07152d] text-white py-12 border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div>
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">
              Conheça Nossa Estrutura Pessoalmente
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Quer visitar nosso laboratório no Imbuí?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              Agende um horário e venha conhecer nossas bancadas de teste, ferramentas e bater um papo com os professores.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-xs flex items-center gap-2 shadow-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Agendar Visita no WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenEnrollment()}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow cursor-pointer transition-all hover:scale-105"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Garantir Minha Vaga</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
