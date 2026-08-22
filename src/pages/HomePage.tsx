import React, { useState } from 'react';
import { 
  Zap, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube, 
  Linkedin, 
  ArrowRight, 
  GraduationCap, 
  Home, 
  Sliders, 
  Cpu, 
  Activity, 
  Bot, 
  Users, 
  FlaskConical, 
  FileSpreadsheet, 
  Award, 
  Target, 
  Headphones, 
  Star,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Building2,
  Sparkles,
  FileText
} from 'lucide-react';
import { PageTab, Course, GalleryItem } from '../types';
import { IMAGES, TECEAUT_LOGO_URL } from '../data/assets';
import { COURSES_DATA } from '../data/coursesData';
import { GALLERY_ITEMS } from '../data/galleryData';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { TECHNICAL_ARTICLES } from '../data/technicalData';

interface HomePageProps {
  setCurrentTab: (tab: PageTab) => void;
  onOpenEnrollment: (courseName?: string) => void;
  onSelectCourse: (course: Course) => void;
  onSelectGalleryItem: (item: GalleryItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentTab,
  onOpenEnrollment,
  onSelectCourse,
  onSelectGalleryItem,
}) => {
  const whatsappNumber = '5571987654321';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20as%20matrículas%20da%20Teceaut%20Cursos.`;
  const emailUrl = 'mailto:contato@teceautcursos.com.br';
  const mapsUrl = 'https://maps.google.com/?q=Rua+das+Industrias+123+Imbui+Salvador+BA';

  const [activeGalleryTab, setActiveGalleryTab] = useState('todas');

  const miniGalleryTabs = [
    { id: 'todas', label: 'Aulas Práticas' },
    { id: 'laboratorio', label: 'Laboratório' },
    { id: 'paineis', label: 'Painéis Elétricos' },
    { id: 'automacao', label: 'Automação' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'certificacoes', label: 'Certificações' },
  ];

  const filteredMiniGallery = activeGalleryTab === 'todas'
    ? GALLERY_ITEMS.slice(0, 6)
    : GALLERY_ITEMS.filter(item => item.category === activeGalleryTab || item.category === 'aulas').slice(0, 6);

  // Map icons for the 5 most popular courses
  const courseIcons = [
    <Home className="w-5 h-5 text-white" key="home" />,
    <Sliders className="w-5 h-5 text-white" key="sliders" />,
    <span className="text-white font-black text-xs" key="clp">CLP</span>,
    <Activity className="w-5 h-5 text-white" key="activity" />,
    <Bot className="w-5 h-5 text-white" key="bot" />,
  ];

  return (
    <div className="w-full bg-white text-slate-900 font-sans">
      
      {/* 1. HERO SECTION (2 columns matching photo 2) */}
      <section className="bg-[#051226] text-white py-10 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-6 space-y-5">
            {/* Prominent Logo & Accredited Badge */}
            <div className="inline-flex items-center gap-3.5 px-4 py-2 rounded-2xl bg-slate-900/90 border border-[#F5C518]/40 shadow-[0_4px_20px_rgba(245,197,24,0.15)]">
              <div className="h-12 w-auto flex items-center">
                <img
                  src={TECEAUT_LOGO_URL}
                  alt="TECEAUT Logo"
                  referrerPolicy="no-referrer"
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_10px_rgba(245,197,24,0.3)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xs sm:text-sm font-black tracking-wider uppercase">
                  TECEAUT CURSOS
                </span>
                <span className="text-[11px] text-[#F5C518] font-bold">
                  Centro de Treinamento e Tecnologia Industrial
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Invista em Sua Carreira,<br />
              seja um <span className="text-[#F5C518]">Profissional Qualificado</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
              A Teceaut Cursos oferece conteúdo prático e profissional em <strong className="text-white">Elétrica Predial-Industrial</strong>, <strong className="text-white">Automação Industrial</strong>, <strong className="text-white">Comandos Elétricos</strong>, <strong className="text-white">CLP</strong> e <strong className="text-white">Inversores de Frequência</strong>.
            </p>

            {/* Primary Action Buttons in Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-enroll-btn"
                onClick={() => onOpenEnrollment()}
                className="bg-[#F5C518] hover:bg-[#FFD700] text-[#051226] font-black text-xs sm:text-sm px-5 sm:px-6 py-3 rounded uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <GraduationCap className="w-4 h-4 text-[#051226]" />
                <span>MATRICULE-SE AGORA</span>
              </button>

              <a
                id="hero-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-3 rounded shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>FALE PELO WHATSAPP</span>
              </a>
            </div>

            {/* Quick Access Meta Row */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300">
              <a 
                href={emailUrl} 
                className="flex items-center gap-1.5 hover:text-[#F5C518] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#F5C518]" />
                <span>E-MAIL</span>
              </a>

              <a 
                href={mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#F5C518] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#F5C518]" />
                <span>COMO CHEGAR</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-[10px] uppercase font-bold text-slate-400">SIGA NOSSAS REDES:</span>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C518]">
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a href="https://instagram.com/teceaut_cursos" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C518]">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C518]">
                  <Youtube className="w-3.5 h-3.5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C518]">
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image with Students & Lab */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-900 group">
              <img
                src={IMAGES.heroLab}
                alt="Alunos da Teceaut Cursos no Laboratório Prático de Elétrica e Automação"
                referrerPolicy="no-referrer"
                className="w-full h-[280px] sm:h-[350px] lg:h-[380px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051226]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 bg-[#051226]/90 border border-slate-700 px-3 py-1 rounded text-white text-[11px] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
                <span>Aulas 100% Práticas em Bancadas Individuais</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SEÇÃO “CURSOS PROFISSIONALIZANTES MAIS PROCURADOS” (5 Horizontal Cards) */}
      <section className="py-12 sm:py-16 bg-[#f8fafc] px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#051226] tracking-tight uppercase">
              CURSOS PROFISSIONALIZANTES MAIS PROCURADOS
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Formação completa para quem deseja ingressar ou crescer na área de Elétrica e Automação Industrial.
            </p>
          </div>

          {/* 5 Course Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {COURSES_DATA.slice(0, 5).map((course, idx) => (
              <div
                key={course.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#F5C518]"
              >
                <div>
                  {/* Card Thumbnail */}
                  <div className="relative h-32 overflow-hidden bg-slate-900">
                    <img
                      src={course.image}
                      alt={course.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Circular Navy Icon badge placed below image */}
                  <div className="flex justify-center -mt-5 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-[#051226] border-2 border-white shadow-md flex items-center justify-center">
                      {courseIcons[idx] || <Zap className="w-4 h-4 text-white" />}
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="p-3.5 text-center">
                    <h3 className="font-bold text-[#051226] text-xs sm:text-sm mb-1.5 uppercase leading-tight group-hover:text-amber-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-slate-600 text-[11px] leading-relaxed line-clamp-3">
                      {course.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Yellow Saiba Mais Button */}
                <div className="p-3.5 pt-0">
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="w-full bg-[#F5C518] hover:bg-[#FFD700] text-[#051226] font-black py-2 px-3 rounded text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                  >
                    SAIBA MAIS
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SEÇÃO “POR QUE ESCOLHER A TECEAUT CURSOS?” (Clean 7-Item Row) */}
      <section className="py-12 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#051226] tracking-tight uppercase">
              POR QUE ESCOLHER A TECEAUT CURSOS?
            </h2>
          </div>

          {/* 7 Horizontal Differential Items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-3 text-center">
            
            <div className="flex flex-col items-center p-2 group">
              <div className="w-10 h-10 rounded-full bg-[#051226] text-[#F5C518] flex items-center justify-center mb-2 shadow group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#051226] leading-tight">Aulas Práticas</span>
            </div>

            <div className="flex flex-col items-center p-2 group">
              <div className="w-10 h-10 rounded-full bg-[#051226] text-[#F5C518] flex items-center justify-center mb-2 shadow group-hover:scale-110 transition-transform">
                <FlaskConical className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#051226] leading-tight">Laboratório equipado e materiais atualizados</span>
            </div>

            <div className="flex flex-col items-center p-2 group">
              <div className="w-10 h-10 rounded-full bg-[#051226] text-[#F5C518] flex items-center justify-center mb-2 shadow group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#051226] leading-tight">Professores com Experiência de Campo</span>
            </div>

            <div className="flex flex-col items-center p-2 group">
              <div className="w-10 h-10 rounded-full bg-[#051226] text-[#F5C518] flex items-center justify-center mb-2 shadow group-hover:scale-110 transition-transform">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#051226] leading-tight">Desenvolvimento de Projetos Realistas</span>
            </div>

            <div className="flex flex-col items-center p-2 group">
              <div className="w-10 h-10 rounded-full bg-[#051226] text-[#F5C518] flex items-center justify-center mb-2 shadow group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#051226] leading-tight">Certificação Reconhecida</span>
            </div>

            <div className="flex flex-col items-center p-2 group">
              <div className="w-10 h-10 rounded-full bg-[#051226] text-[#F5C518] flex items-center justify-center mb-2 shadow group-hover:scale-110 transition-transform">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#051226] leading-tight">Conteúdo voltado para o Mercado</span>
            </div>

            <div className="flex flex-col items-center p-2 group">
              <div className="w-10 h-10 rounded-full bg-[#051226] text-[#F5C518] flex items-center justify-center mb-2 shadow group-hover:scale-110 transition-transform">
                <Headphones className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#051226] leading-tight">Suporte para sua Evolução Profissional</span>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SEÇÃO DE 3 COLUNAS (GALERIA | O QUE NOSSOS ALUNOS DIZEM | APOIO TÉCNICO E CONTEÚDOS) */}
      <section className="py-12 sm:py-16 bg-[#f8fafc] px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Coluna 1 (4 cols): GALERIA */}
            <div className="lg:col-span-4 bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-black text-sm text-[#051226] uppercase tracking-wider mb-3">
                  GALERIA
                </h3>

                {/* Sub-tabs pills */}
                <div className="flex flex-wrap gap-1.5 mb-4 text-[10px] text-slate-600 font-semibold">
                  {miniGalleryTabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveGalleryTab(tab.id)}
                      className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                        activeGalleryTab === tab.id
                          ? 'bg-[#051226] text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* 6 Photos Grid */}
                <div className="grid grid-cols-3 gap-2">
                  {filteredMiniGallery.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => onSelectGalleryItem(item)}
                      className="relative aspect-square rounded overflow-hidden bg-slate-900 cursor-pointer group"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-[#051226]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-1 text-center">
                        <span className="text-[8px] font-bold text-[#F5C518] leading-tight">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <button
                  onClick={() => {
                    setCurrentTab('galeria');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full text-center text-xs font-bold text-[#051226] hover:text-amber-600 flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Ver todas as fotos da galeria</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Coluna 2 (4 cols): O QUE NOSSOS ALUNOS DIZEM */}
            <div className="lg:col-span-4 bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-black text-sm text-[#051226] uppercase tracking-wider mb-4">
                  O QUE NOSSOS ALUNOS DIZEM
                </h3>

                {/* 3 Student Testimonial Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3.5">
                  {TESTIMONIALS_DATA.map((t) => (
                    <div key={t.id} className="text-center p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                      {/* Avatar */}
                      <div className="w-11 h-11 mx-auto rounded-full overflow-hidden border-2 border-[#F5C518] mb-1.5 shadow-sm">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Quote */}
                      <p className="text-[10px] text-slate-600 italic leading-snug mb-1">
                        "{t.content}"
                      </p>

                      {/* 5 Stars */}
                      <div className="flex justify-center text-[#F5C518] mb-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-[#F5C518]" />
                        ))}
                      </div>

                      {/* Name & Role */}
                      <div className="font-bold text-[11px] text-[#051226] leading-none">
                        {t.name}
                      </div>
                      <div className="text-[9px] text-slate-500">
                        {t.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Google 5.0 Badge & Authenticity Stamp below testimonials */}
              <div className="mt-4 pt-3 border-t border-slate-200">
                {/* Official Google Reviews Badge */}
                <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-lg p-3 shadow-sm hover:border-[#4285F4]/50 transition-all">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      {/* Official Google 4-Color SVG Logo */}
                      <div className="w-6 h-6 shrink-0 bg-white rounded-full p-0.5 shadow-sm border border-slate-100 flex items-center justify-center">
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-slate-900 block leading-tight">
                          Google Avaliações
                        </span>
                        <span className="text-[9px] text-slate-500 flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5 text-blue-600 inline" />
                          Perfil Verificado Oficial
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      <span className="text-xs font-black text-slate-900">5.0</span>
                      <div className="flex text-[#F5C518]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-[#F5C518]" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-600 leading-tight mb-2">
                    Classificação máxima <strong className="text-slate-900">5.0 ★</strong> com mais de <strong>250 avaliações autênticas</strong> de alunos no Google.
                  </p>

                  <a
                    href="https://www.google.com/search?q=Teceaut+Cursos+Salvador+BA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white hover:bg-slate-100 text-[#051226] border border-slate-300 font-bold py-1 px-2 rounded text-[10px] flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Ver Selo & Avaliações no Google</span>
                    <ExternalLink className="w-2.5 h-2.5 text-[#4285F4]" />
                  </a>
                </div>

                {/* Company Authenticity Mini-Banner */}
                <div className="mt-2 flex items-center justify-between px-2.5 py-1.5 rounded bg-slate-100 border border-slate-200 text-[9px] text-slate-700 font-medium">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Empresa Autêntica</strong> • CNPJ 14.582.930/0001-45</span>
                  </div>
                  <span className="bg-emerald-600 text-white text-[8px] font-bold px-1.5 py-0.2 rounded uppercase">
                    100% REGULAR
                  </span>
                </div>
              </div>
            </div>

            {/* Coluna 3 (4 cols): APOIO TÉCNICO E CONTEÚDOS */}
            <div className="lg:col-span-4 bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-black text-sm text-[#051226] uppercase tracking-wider mb-4">
                  APOIO TÉCNICO E CONTEÚDOS
                </h3>

                {/* 5 Technical Guide Items with Thumbnails */}
                <div className="space-y-2.5">
                  {[
                    {
                      id: 't-1',
                      title: 'Curso de Elétrica Predial e Industrial',
                      desc: 'Aprenda os fundamentos para atuar na área elétrica.',
                      image: IMAGES.courseEletricista,
                    },
                    {
                      id: 't-2',
                      title: 'Curso de Automação Industrial',
                      desc: 'As principais competências exigidas pelo mercado.',
                      image: IMAGES.courseAutomacao,
                    },
                    {
                      id: 't-3',
                      title: 'Programação de CLP',
                      desc: 'Guia completo para iniciantes e profissionais.',
                      image: IMAGES.courseClp,
                    },
                    {
                      id: 't-4',
                      title: 'Como se Tornar Eletricista Industrial',
                      desc: 'Passo a passo para ingressar na profissão.',
                      image: IMAGES.painelMultimetro,
                    },
                    {
                      id: 't-5',
                      title: 'Mercado de Trabalho Industrial',
                      desc: 'Oportunidades e tendências para os próximos anos.',
                      image: IMAGES.turmaFormada,
                    },
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setCurrentTab('apoio');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex items-center gap-3 p-1.5 rounded hover:bg-slate-50 transition-colors cursor-pointer group"
                    >
                      <div className="w-12 h-10 rounded overflow-hidden bg-slate-800 shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[11px] font-bold text-[#051226] group-hover:text-amber-600 transition-colors leading-tight truncate">
                          {item.title}
                        </h4>
                        <p className="text-[10px] text-slate-500 leading-tight truncate">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <button
                  onClick={() => {
                    setCurrentTab('apoio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full text-center text-xs font-bold text-[#051226] hover:text-amber-600 flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Acessar área de apoio técnico</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SEÇÃO OFICIAL: CERTIFICADO DE AUTENTICIDADE DA EMPRESA & SELO OFICIAL GOOGLE 5.0 ESTRELAS */}
      <section className="py-12 sm:py-16 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="px-3.5 py-1 rounded bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider border border-emerald-300 inline-flex items-center gap-1.5 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              Instituição Verificada • Registro Técnico e Idoneidade
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#051226] tracking-tight uppercase">
              CERTIFICADO DE AUTENTICIDADE & <span className="text-[#F5C518] bg-[#051226] px-2 py-0.5 rounded">SELO OFICIAL GOOGLE 5.0</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2.5 leading-relaxed">
              Garantia de qualidade, regularidade cadastral e reputação com nota máxima no Google para você estudar com total segurança e credibilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* CARD 1: SELO OFICIAL DO GOOGLE NOTA 5.0 ESTRELAS (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-white to-slate-50 border-2 border-slate-200 hover:border-[#4285F4] rounded-xl p-6 shadow-sm flex flex-col justify-between transition-all">
              <div>
                {/* Top Google Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    {/* Google Official 4-Color SVG */}
                    <div className="w-10 h-10 bg-white rounded-full p-1.5 shadow-md border border-slate-200 flex items-center justify-center">
                      <svg className="w-7 h-7" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-sm text-[#051226]">Google Avaliações</span>
                        <CheckCircle2 className="w-4 h-4 text-[#4285F4] fill-[#4285F4]/10" />
                      </div>
                      <span className="text-[11px] text-slate-500 block">Perfil de Empresa Verificado</span>
                    </div>
                  </div>

                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-300">
                    Selo Oficial 2026
                  </span>
                </div>

                {/* Score Big Display */}
                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4">
                  <div className="text-4xl sm:text-5xl font-black text-[#051226] tracking-tight">
                    5.0
                  </div>
                  <div>
                    <div className="flex text-[#F5C518] mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#F5C518]" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-700 block">
                      Nota Máxima Absoluta (5.0 / 5.0)
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Baseado em +250 avaliações de alunos em Salvador
                    </span>
                  </div>
                </div>

                {/* Quality Metrics */}
                <div className="space-y-2 text-xs text-slate-700 mb-4">
                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <span className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Qualidade do Laboratório e Bancadas
                    </span>
                    <span className="font-bold text-emerald-700">100% Excelente</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <span className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Didática e Experiência dos Instrutores
                    </span>
                    <span className="font-bold text-emerald-700">100% Excelente</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <span className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Recomendação de Alunos e Ex-Alunos
                    </span>
                    <span className="font-bold text-emerald-700">5.0 de 5.0 ★</span>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/search?q=Teceaut+Cursos+Salvador+BA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#4285F4] hover:bg-[#3367d6] text-white font-bold text-xs py-2.5 px-4 rounded flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Conferir Avaliações no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* CARD 2: CERTIFICADO OFICIAL DE AUTENTICIDADE DA EMPRESA (7 cols) */}
            <div className="lg:col-span-7 bg-[#051226] text-white border-2 border-[#F5C518]/60 rounded-xl p-6 sm:p-7 shadow-xl relative overflow-hidden flex flex-col justify-between">
              
              {/* Background watermark badge */}
              <div className="absolute -right-8 -bottom-8 opacity-5 pointer-events-none text-[#F5C518]">
                <Award className="w-64 h-64" />
              </div>

              <div>
                {/* Certificate Top Header */}
                <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl bg-slate-900 border-2 border-[#F5C518]/70 p-1.5 flex items-center justify-center shrink-0 shadow-md">
                      <img
                        src={TECEAUT_LOGO_URL}
                        alt="TECEAUT"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-contain drop-shadow-[0_2px_8px_rgba(245,197,24,0.3)]"
                      />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base text-white tracking-wide uppercase leading-tight">
                        CERTIFICADO DE AUTENTICIDADE E REGISTRO EMPRESARIAL
                      </h3>
                      <span className="text-[10px] text-[#F5C518] font-bold uppercase tracking-wider">
                        Documento Oficial de Idoneidade Técnica • 2026
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:flex flex-col items-end">
                    <span className="text-[9px] text-slate-400 font-mono">HASH: TCT-BA-99824</span>
                    <span className="text-[9px] text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      AUTÊNTICO E ATIVO
                    </span>
                  </div>
                </div>

                {/* Company Identification Data Grid */}
                <div className="bg-slate-900/80 border border-slate-700/80 rounded-lg p-4 mb-4 text-xs space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-semibold">Razão Social:</span>
                      <strong className="text-white">TECEAUT CURSOS E TREINAMENTOS TÉCNICOS LTDA.</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-semibold">CNPJ Oficial:</span>
                      <strong className="text-[#F5C518] font-mono">14.582.930/0001-45</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-semibold">Sede Operacional:</span>
                      <span className="text-slate-200">Rua das Indústrias, 123 - Imbuí, Salvador - BA</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-semibold">Atividade Econômica:</span>
                      <span className="text-slate-200">Treinamento e Formação Profissional em Elétrica e Automação</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-700/60 text-[11px] text-slate-300 leading-relaxed">
                    <span className="text-[#F5C518] font-bold">Conformidade Legal: </span>
                    Instituição autorizada a emitir certificados de qualificação profissional com validade em todo o território nacional, em conformidade com a <strong>Lei de Diretrizes e Bases da Educação Nacional (Lei nº 9.394/96 - Art. 42)</strong> e Normas Regulamentadoras do Ministério do Trabalho <strong>(NR-10, NR-12 e NR-35)</strong>.
                  </div>
                </div>

                {/* 3 Seal Badges in Row */}
                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="bg-[#051226] border border-[#F5C518]/40 p-2 rounded">
                    <Award className="w-4 h-4 text-[#F5C518] mx-auto mb-1" />
                    <span className="font-bold text-white block">Validade Nacional</span>
                    <span className="text-slate-400 text-[9px]">Lei 9.394/96</span>
                  </div>
                  <div className="bg-[#051226] border border-[#F5C518]/40 p-2 rounded">
                    <ShieldCheck className="w-4 h-4 text-[#F5C518] mx-auto mb-1" />
                    <span className="font-bold text-white block">Normas NR-10/NR-12</span>
                    <span className="text-slate-400 text-[9px]">Segurança Industrial</span>
                  </div>
                  <div className="bg-[#051226] border border-[#F5C518]/40 p-2 rounded">
                    <Lock className="w-4 h-4 text-[#F5C518] mx-auto mb-1" />
                    <span className="font-bold text-white block">Instrutores CFT/CREA</span>
                    <span className="text-slate-400 text-[9px]">Registro Habilitado</span>
                  </div>
                </div>

              </div>

              {/* Bottom Verification Footer */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[10px] text-slate-400">
                <span>Certificado e idoneidade verificados pela Secretaria de Cursos Teceaut.</span>
                <span className="text-[#F5C518] font-bold uppercase tracking-wider flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#F5C518]" />
                  DOCUMENTO AUTENTICADO DIGITALMENTE
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. BARRA DE CTA FINAL (Horizontal Banner with yellow button) */}
      <section className="bg-[#051226] text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Text */}
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Pronto para dar o próximo passo na sua carreira?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Capacite-se com quem atua na área e prepare-se para conquistar novas oportunidades profissionais.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0">
            <button
              id="cta-bottom-enroll-btn"
              onClick={() => onOpenEnrollment()}
              className="bg-[#F5C518] hover:bg-[#FFD700] text-[#051226] font-black text-xs sm:text-sm px-6 py-3.5 rounded uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 cursor-pointer transform hover:scale-105"
            >
              <span>QUERO ME MATRICULAR</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

