import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send, CheckCircle2, Zap } from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';

interface WhatsAppFloatingButtonProps {
  onSelectCourse?: (courseTitle: string) => void;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(COURSES_DATA[0].title);
  const [studentName, setStudentName] = useState('');

  useEffect(() => {
    // Show polite auto-popup after 6 seconds for conversion
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = studentName.trim() || 'futuro aluno';
    const text = `Olá, Equipe Teceaut Cursos! Meu nome é ${cleanName}. Gostaria de garantir minha vaga e saber mais sobre o curso de ${selectedCourse} com as condições especiais.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5571991003225?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Sales Nudge Bubble (when closed) */}
      {!isOpen && hasPrompted && (
        <div className="mb-3 bg-white text-slate-900 px-4 py-2.5 rounded-2xl shadow-2xl border border-amber-400/40 text-xs font-semibold flex items-center gap-3 animate-bounce max-w-[260px]">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 animate-ping" />
          <p className="leading-snug">
            👋 Dúvidas sobre turmas? <strong>Fale conosco agora no WhatsApp!</strong>
          </p>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setHasPrompted(false);
            }} 
            className="text-slate-400 hover:text-slate-700 cursor-pointer p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Expanded Quick Chat Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-[#0A1F44] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-lg shadow">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#0A1F44] rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-none">Atendimento Teceaut Cursos</h4>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online agora em Salvador - BA
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-blue-900/50 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 border-b border-slate-200 text-xs text-slate-700">
            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm leading-relaxed mb-3">
              Olá! 👋 Seja bem-vindo à <strong>Teceaut Cursos</strong>. Como podemos te ajudar a dar o próximo passo na sua carreira hoje?
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-800 uppercase mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  placeholder="Ex: João da Silva"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-800 uppercase mb-1">
                  Curso de Interesse
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 text-slate-800"
                >
                  {COURSES_DATA.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                  <option value="Dúvidas Gerais sobre Matrícula">Outro / Tirar Dúvidas Gerais</option>
                </select>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Resposta imediata por consultor técnico</span>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>INICIAR CONVERSA NO WHATSAPP</span>
              </button>
            </form>
          </div>

          <div className="p-2.5 bg-slate-100 text-[10px] text-center text-slate-500 flex items-center justify-center gap-1">
            <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span>(71) 9.9100-3225 • Atendimento Oficial Teceaut</span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        id="whatsapp-floating-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white p-4 rounded-full shadow-2xl shadow-emerald-600/40 flex items-center justify-center transition-all duration-300 cursor-pointer"
        aria-label="Atendimento WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-400 text-[9px] text-slate-950 font-black items-center justify-center">
            1
          </span>
        </span>
        <MessageSquare className="w-7 h-7 fill-white" />
      </button>
    </div>
  );
};
