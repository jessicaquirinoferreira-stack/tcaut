import React, { useState } from 'react';
import { 
  Zap, 
  Clock, 
  Calendar, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  ChevronRight,
  Calculator,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { PageTab, Course } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { CONTACT_INFO } from '../data/contacts';

interface CoursesPageProps {
  setCurrentTab: (tab: PageTab) => void;
  onOpenEnrollment: (courseName?: string) => void;
  onSelectCourse: (course: Course) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  setCurrentTab,
  onOpenEnrollment,
  onSelectCourse,
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'eletrica' | 'automacao' | 'acionamentos'>('all');

  const filteredCourses = filterCategory === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter((c) => c.category === filterCategory);

  const categories = [
    { id: 'all', label: 'TODOS OS CURSOS' },
    { id: 'eletrica', label: 'ELÉTRICA & COMANDOS' },
    { id: 'automacao', label: 'AUTOMAÇÃO & CLP' },
    { id: 'acionamentos', label: 'ACIONAMENTOS & INVERSORES' },
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#051226] text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-6 font-medium">
            <button 
              onClick={() => setCurrentTab('inicio')}
              className="hover:text-[#F5C518] transition-colors cursor-pointer"
            >
              Início
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#F5C518] font-bold">Nossos Cursos</span>
          </nav>

          <div className="max-w-3xl">
            <span className="px-3.5 py-1 rounded bg-[#F5C518]/20 text-[#F5C518] font-bold text-xs uppercase tracking-wider border border-[#F5C518]/30">
              Formações Presenciais em Salvador
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 uppercase tracking-tight">
              CURSOS <span className="text-[#F5C518]">PROFISSIONALIZANTES</span>
            </h1>
            <div className="w-16 h-1 bg-[#F5C518] mt-3 rounded" />
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Cursos práticos com bancadas individuais, ministrados por engenheiros e técnicos com vasta experiência de campo. Escolha sua formação e prepare-se para o mercado industrial.
            </p>
          </div>

        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-[68px] sm:top-[74px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {categories.map((cat) => {
              const isActive = filterCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilterCategory(cat.id as any)}
                  className={`px-5 py-2.5 rounded text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#F5C518] text-[#051226] shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredCourses.map((course, idx) => (
          <div
            key={course.id}
            id={`course-block-${course.id}`}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Image Column */}
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-slate-900 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {course.badge && (
                  <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase shadow-md">
                    {course.badge}
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-[#0A1F44]/90 text-white font-bold text-xs backdrop-blur-sm shadow border border-blue-900/50">
                  {course.durationHours} Horas Práticas
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[11px] text-amber-300 font-bold uppercase">Estimativa de Ganhos</div>
                <div className="text-base font-black text-white flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>{course.estimatedSalary}</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                    {course.category === 'eletrica' ? 'Elétrica Predial & Industrial' : course.category === 'automacao' ? 'Automação & Indústria 4.0' : 'Acionamentos & Máquinas'}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    {course.schedule}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#0A1F44] leading-tight mb-3">
                  {course.title}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {course.fullDescription}
                </p>

                {/* Key Skills / Highlights */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    O Que Você Vai Aprender na Prática:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {course.features.slice(0, 4).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modules Summary */}
                <div className="mb-6 bg-blue-50/50 p-3.5 rounded-xl border border-blue-100 text-xs text-slate-700">
                  <span className="font-bold text-[#0A1F44] block mb-1">Estrutura Curricular ({course.syllabus.length} Módulos):</span>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {course.syllabus.map((m) => (
                      <span key={m.moduleNumber} className="bg-white px-2.5 py-1 rounded-md border border-slate-200 text-[11px] font-medium text-slate-800">
                        Mód. {m.moduleNumber}: {m.title.split(' ')[0]} {m.title.split(' ')[1] || ''}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-500 text-center sm:text-left">
                  <span className="block font-bold text-slate-800">Próxima Turma:</span>
                  <span className="text-emerald-700 font-semibold">{course.nextBatch}</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="flex-1 sm:flex-none bg-slate-100 hover:bg-slate-200 text-[#0A1F44] font-bold px-4 py-3 rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-amber-500" />
                    <span>Ver Ementa Completa</span>
                  </button>

                  <button
                    onClick={() => onOpenEnrollment(course.title)}
                    className="flex-1 sm:flex-none bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all hover:scale-105"
                  >
                    <Zap className="w-4 h-4 fill-slate-950" />
                    <span>Matricular-se</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* Trust Guarantee Box */}
      <section className="bg-[#0A1F44] text-white py-12 border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/80 p-6 sm:p-8 rounded-2xl border border-amber-400/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5" />
                <span>Garantia de Qualidade Teceaut</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Dúvidas sobre qual curso combina com seu objetivo?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Nossos consultores técnicos analisam seu perfil e indicam a melhor trilha de formação profissional para o seu momento de carreira.
              </p>
            </div>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de uma orientação técnica para escolher o melhor curso para mim.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl text-xs flex items-center gap-2 shadow-lg shrink-0 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Falar com Orientador Técnico (WhatsApp)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
