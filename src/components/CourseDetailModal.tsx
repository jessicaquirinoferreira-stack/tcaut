import React from 'react';
import { 
  X, 
  Zap, 
  Clock, 
  Calendar, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  BookOpen,
  DollarSign
} from 'lucide-react';
import { Course } from '../types';
import { CONTACT_INFO } from '../data/contacts';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (courseTitle: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnroll,
}) => {
  if (!course) return null;

  const whatsappMessage = `Olá! Gostaria de me matricular no curso de ${course.title} da Teceaut Cursos.`;
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#0A1F44] text-white p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white p-2 rounded-lg hover:bg-blue-900/50 cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            {course.badge && (
              <span className="px-3 py-0.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase">
                {course.badge}
              </span>
            )}
            <span className="px-3 py-0.5 rounded-full bg-blue-900 text-blue-200 text-xs font-semibold">
              Carga Horária: {course.durationHours} Horas
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            {course.title}
          </h2>
          <p className="text-blue-200 text-sm mt-2 max-w-xl">
            {course.shortDescription}
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 text-sm">
          
          {/* Main Visual & Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="relative h-48 sm:h-56 rounded-lg overflow-hidden shadow">
              <img
                src={course.image}
                alt={course.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                  <Award className="w-4 h-4 text-amber-400" /> Aulas 100% Práticas em Laboratório
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase">Próxima Turma</div>
                <div className="font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                  <Calendar className="w-4 h-4 text-amber-500" />
                  <span>{course.nextBatch}</span>
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-500 font-bold uppercase">Horários Disponíveis</div>
                <div className="font-medium text-slate-700 flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>{course.schedule}</span>
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-500 font-bold uppercase">Média Salarial no Mercado</div>
                <div className="font-black text-emerald-700 flex items-center gap-1.5 mt-0.5">
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                  <span>{course.estimatedSalary}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-base font-bold text-[#0A1F44] mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-500" />
              Sobre o Curso
            </h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              {course.fullDescription}
            </p>
          </div>

          {/* Practical Highlights / What you'll learn */}
          <div>
            <h4 className="text-base font-bold text-[#0A1F44] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Diferenciais e Habilidades Desenvolvidas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus / Ementa Completa */}
          <div>
            <h4 className="text-base font-bold text-[#0A1F44] mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              Grade Curricular Completa (Módulos)
            </h4>
            <div className="space-y-3">
              {course.syllabus.map((mod) => (
                <div key={mod.moduleNumber} className="border border-slate-200 rounded-xl p-3.5 bg-white shadow-sm">
                  <div className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shrink-0">
                      {mod.moduleNumber}
                    </span>
                    <span>{mod.title}</span>
                  </div>
                  <ul className="space-y-1.5 pl-8 text-xs text-slate-600 list-disc">
                    {mod.topics.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Audience and Prerequisites */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-blue-50/60 p-4 rounded-xl border border-blue-100 text-xs">
            <div>
              <span className="font-bold text-[#0A1F44] block mb-1">Pré-Requisitos:</span>
              <p className="text-slate-600">{course.prerequisites}</p>
            </div>
            <div>
              <span className="font-bold text-[#0A1F44] block mb-1">Público-Alvo:</span>
              <p className="text-slate-600">{course.targetAudience}</p>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            <strong className="text-emerald-700 font-bold block">⚡ Condição Especial de Matrícula</strong>
            <span>Vagas limitadas para garantir bancada individual.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Falar no WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onEnroll(course.title);
              }}
              className="flex-1 sm:flex-none bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all hover:scale-105"
            >
              <span>Matricular Agora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
