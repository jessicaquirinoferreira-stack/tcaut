import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube, 
  Linkedin, 
  ChevronRight
} from 'lucide-react';
import { PageTab } from '../types';
import { TECEAUT_LOGO_URL } from '../data/assets';

interface FooterProps {
  setCurrentTab: (tab: PageTab) => void;
  onOpenEnrollment: (courseName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  const handleNavClick = (tab: PageTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051024] text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8 border-t border-[#F5C518]/20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Main 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10 text-xs">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-3.5 pr-2">
            <div 
              onClick={() => handleNavClick('inicio')}
              className="flex items-center gap-3 cursor-pointer group select-none"
            >
              <div className="relative h-14 flex items-center">
                <img
                  src={TECEAUT_LOGO_URL}
                  alt="TECEAUT Cursos"
                  referrerPolicy="no-referrer"
                  className="h-14 w-auto object-contain drop-shadow-[0_2px_12px_rgba(245,197,24,0.4)] transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-xl font-black text-white tracking-wider leading-none">
                  TECEAUT
                </div>
                <div className="flex items-center gap-1.5 my-1">
                  <span className="h-[1.5px] w-3 bg-[#F5C518]" />
                  <span className="text-[#F5C518] text-xs font-black tracking-widest uppercase">CURSOS</span>
                  <span className="h-[1.5px] w-3 bg-[#F5C518]" />
                </div>
                <span className="text-[10px] text-slate-300 font-medium tracking-wide uppercase">
                  Formação Profissional
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-[11px] leading-relaxed">
              A Teceaut Cursos é referência em formação profissional nas áreas de Elétrica e Automação Industrial. Ensino prático, moderno e voltado para o mercado de trabalho.
            </p>
          </div>

          {/* Column 2: Links Rápidos */}
          <div>
            <h5 className="text-[#F5C518] font-bold text-xs mb-3.5 uppercase tracking-wider">
              LINKS RÁPIDOS
            </h5>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-slate-300 text-[11px]">
              <button 
                onClick={() => handleNavClick('inicio')}
                className="hover:text-[#F5C518] transition-colors flex items-center gap-1 text-left cursor-pointer"
              >
                <span className="text-[#F5C518]">›</span> Início
              </button>
              <button 
                onClick={() => handleNavClick('galeria')}
                className="hover:text-[#F5C518] transition-colors flex items-center gap-1 text-left cursor-pointer"
              >
                <span className="text-[#F5C518]">›</span> Galeria
              </button>
              <button 
                onClick={() => handleNavClick('cursos')}
                className="hover:text-[#F5C518] transition-colors flex items-center gap-1 text-left cursor-pointer"
              >
                <span className="text-[#F5C518]">›</span> Nossos Cursos
              </button>
              <button 
                onClick={() => handleNavClick('apoio')}
                className="hover:text-[#F5C518] transition-colors flex items-center gap-1 text-left cursor-pointer"
              >
                <span className="text-[#F5C518]">›</span> Apoio Técnico
              </button>
              <button 
                onClick={() => handleNavClick('sobre')}
                className="hover:text-[#F5C518] transition-colors flex items-center gap-1 text-left cursor-pointer"
              >
                <span className="text-[#F5C518]">›</span> Sobre a Teceaut
              </button>
              <button 
                onClick={() => handleNavClick('contato')}
                className="hover:text-[#F5C518] transition-colors flex items-center gap-1 text-left cursor-pointer"
              >
                <span className="text-[#F5C518]">›</span> Contato
              </button>
            </div>
          </div>

          {/* Column 3: Fale Conosco */}
          <div>
            <h5 className="text-[#F5C518] font-bold text-xs mb-3.5 uppercase tracking-wider">
              FALE CONOSCO
            </h5>
            <ul className="text-[11px] text-slate-300 space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F5C518] shrink-0" />
                <span>(71) 98765-4321</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
                  <Phone className="w-2 h-2" />
                </div>
                <span>(71) 98765-4321</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F5C518] shrink-0" />
                <span className="truncate">contato@teceautcursos.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F5C518] shrink-0 mt-0.5" />
                <span className="leading-tight">
                  Rua das Indústrias, 123<br />
                  Imbuí, Salvador - BA<br />
                  CEP: 41720-050
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Siga-nos */}
          <div>
            <h5 className="text-[#F5C518] font-bold text-xs mb-3.5 uppercase tracking-wider">
              SIGA-NOS
            </h5>
            <div className="flex items-center gap-2.5 mb-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-7 h-7 rounded-full border border-slate-500 hover:border-[#F5C518] hover:text-[#F5C518] text-slate-300 flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://instagram.com/teceaut_cursos" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-7 h-7 rounded-full border border-slate-500 hover:border-[#F5C518] hover:text-[#F5C518] text-slate-300 flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-7 h-7 rounded-full border border-slate-500 hover:border-[#F5C518] hover:text-[#F5C518] text-slate-300 flex items-center justify-center transition-colors"
                title="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-7 h-7 rounded-full border border-slate-500 hover:border-[#F5C518] hover:text-[#F5C518] text-slate-300 flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Acompanhe novidades, dicas técnicas e novas turmas nas nossas redes.
            </p>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-5 text-center text-[11px] text-slate-400">
          © 2024 Teceaut Cursos. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
};

