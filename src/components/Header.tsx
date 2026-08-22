import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube, 
  Linkedin, 
  Menu, 
  X, 
  ArrowRight,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { PageTab } from '../types';
import { TECEAUT_LOGO_URL } from '../data/assets';

interface HeaderProps {
  currentTab: PageTab;
  setCurrentTab: (tab: PageTab) => void;
  onOpenEnrollment: (courseName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentTab, 
  setCurrentTab, 
  onOpenEnrollment
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'inicio', label: 'Início' },
    { id: 'cursos', label: 'Nossos Cursos' },
    { id: 'sobre', label: 'Sobre a Teceaut' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'apoio', label: 'Apoio Técnico' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleNavClick = (tab: PageTab) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = '5571987654321';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20as%20matrículas%20da%20Teceaut%20Cursos.`;

  return (
    <header className="sticky top-0 z-50 shadow-2xl bg-[#06152e] border-b border-[#F5C518]/25 font-sans">
      
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        
        {/* Brand Logo with Official Image - Significantly Larger & Crisp */}
        <div 
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-3.5 cursor-pointer group select-none py-1"
          id="brand-logo"
        >
          {/* Large Logo with clean dark background blend - Transparent Background Preserved */}
          <div className="relative h-16 sm:h-20 lg:h-22 flex items-center">
            <img
              src={TECEAUT_LOGO_URL}
              alt="TECEAUT Cursos"
              referrerPolicy="no-referrer"
              className="h-16 sm:h-20 lg:h-22 w-auto object-contain drop-shadow-[0_4px_20px_rgba(245,197,24,0.4)] transition-transform duration-200 group-hover:scale-105 bg-transparent"
            />
          </div>
          
          <div className="flex flex-col">
            <div className="text-xl sm:text-2xl font-black text-white tracking-wider leading-none">
              TECEAUT
            </div>
            <div className="flex items-center gap-1.5 my-1">
              <span className="h-[2px] w-3 bg-[#F5C518]" />
              <span className="text-[#F5C518] text-xs sm:text-sm font-black tracking-widest uppercase">CURSOS</span>
              <span className="h-[2px] w-3 bg-[#F5C518]" />
            </div>
            <span className="text-[10px] sm:text-[11px] text-slate-300 font-semibold tracking-wider uppercase">
              Formação Profissional
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-bold uppercase tracking-wide">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors duration-150 cursor-pointer py-1 relative ${
                  isActive 
                    ? 'text-[#F5C518] font-black' 
                    : 'text-white/90 hover:text-[#F5C518]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F5C518] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Matricule-se Agora Button */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            id="header-cta-enroll-btn"
            onClick={() => onOpenEnrollment()}
            className="bg-[#F5C518] hover:bg-[#FFD700] text-[#06152e] font-black px-5 py-2.5 rounded text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
          >
            <GraduationCap className="w-4 h-4 text-[#06152e]" />
            <span>MATRICULE-SE AGORA</span>
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex lg:hidden items-center">
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#F5C518] rounded transition-colors cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Sub-bar: Phone, Email, Location & Social exactly like the photos */}
      <div className="bg-[#051024] border-t border-white/10 px-4 sm:px-6 lg:px-8 py-1.5 text-[11px] text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1.5">
          
          {/* Contacts: Phone, Email, Address */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#F5C518] transition-colors"
            >
              <div className="w-3.5 h-3.5 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <Phone className="w-2.5 h-2.5" />
              </div>
              <span className="font-semibold text-white">(71) 98765-4321</span>
            </a>

            <a 
              href="mailto:contato@teceautcursos.com.br"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#F5C518] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>contato@teceautcursos.com.br</span>
            </a>

            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#F5C518]" />
              <span>Rua das Indústrias, 123 - Imbuí, Salvador - BA</span>
            </div>
          </div>

          {/* Social Links with "Siga-nos:" */}
          <div className="flex items-center gap-2.5">
            <span className="text-slate-400 text-[10px] uppercase font-semibold">Siga-nos:</span>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-5 h-5 rounded-full border border-slate-500 hover:border-[#F5C518] hover:text-[#F5C518] text-slate-300 flex items-center justify-center text-[10px] transition-colors"
              title="Facebook"
            >
              <Facebook className="w-3 h-3" />
            </a>
            <a 
              href="https://instagram.com/teceaut_cursos" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-5 h-5 rounded-full border border-slate-500 hover:border-[#F5C518] hover:text-[#F5C518] text-slate-300 flex items-center justify-center text-[10px] transition-colors"
              title="Instagram"
            >
              <Instagram className="w-3 h-3" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-5 h-5 rounded-full border border-slate-500 hover:border-[#F5C518] hover:text-[#F5C518] text-slate-300 flex items-center justify-center text-[10px] transition-colors"
              title="YouTube"
            >
              <Youtube className="w-3 h-3" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-5 h-5 rounded-full border border-slate-500 hover:border-[#F5C518] hover:text-[#F5C518] text-slate-300 flex items-center justify-center text-[10px] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#06152e] border-b border-blue-950 px-4 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded text-sm font-bold transition-colors cursor-pointer flex items-center justify-between ${
                    isActive 
                      ? 'bg-[#F5C518] text-[#06152e]' 
                      : 'text-white hover:bg-white/5 hover:text-[#F5C518]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <ArrowRight className="w-4 h-4" />}
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnrollment();
                }}
                className="w-full bg-[#F5C518] hover:bg-[#FFD700] text-[#06152e] font-black py-3 px-4 rounded text-center uppercase tracking-wider text-xs shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                <span>MATRICULE-SE AGORA</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white font-bold py-2.5 px-4 rounded text-center text-xs shadow flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Falar no WhatsApp (71) 98765-4321</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

