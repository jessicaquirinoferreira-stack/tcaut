import React, { useState } from 'react';
import { 
  X, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  ArrowRight, 
  Award, 
  Phone,
  Clock
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { CONTACT_INFO } from '../data/contacts';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseName?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  defaultCourseName,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(defaultCourseName || COURSES_DATA[0].title);
  const [shift, setShift] = useState<'noite' | 'sabado'>('noite');
  const [experience, setExperience] = useState<'iniciante' | 'experiente'>('iniciante');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const shiftText = shift === 'noite' ? 'Turma Noturna (Semana)' : 'Turma de Sábado (Intensivo)';
    const expText = experience === 'iniciante' ? 'Iniciante (Começando do zero)' : 'Já tenho alguma experiência';

    const message = `⚡ *SOLICITAÇÃO DE MATRÍCULA - TECEAUT CURSOS*
----------------------------------------
*Nome:* ${name}
*Telefone/WhatsApp:* ${phone}
*Curso Escolhido:* ${course}
*Turno Preferido:* ${shiftText}
*Nível:* ${expText}
*Cupom Ativado:* 30% OFF - Matrícula Antecipada

Gostaria de confirmar minha pré-reserva e receber as opções de pagamento!`;

    const encoded = encodeURIComponent(message);
    setTimeout(() => {
      window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encoded}`, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl border border-amber-400/30 max-w-xl w-full overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Top Highlight Banner */}
        <div className="bg-[#0A1F44] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white p-2 rounded-lg hover:bg-blue-900/50 cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 fill-slate-950" />
              Matrículas Abertas • 30% OFF
            </span>
          </div>

          <h3 className="text-2xl font-black text-white">
            Garanta Sua Vaga na <span className="text-amber-400">TECEAUT</span>
          </h3>
          <p className="text-blue-200 text-sm mt-1">
            Preencha os dados abaixo para reservar sua vaga com desconto especial e falar diretamente com nossa coordenação pedagógica.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">
                Pré-Matrícula Enviada com Sucesso!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Estamos te redirecionando para o WhatsApp oficial da Teceaut Cursos <strong>{CONTACT_INFO.phoneFormatted}</strong> para formalizar sua matrícula com a taxa promocional.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="bg-[#0A1F44] text-white px-6 py-2.5 rounded-lg font-bold text-sm cursor-pointer hover:bg-blue-900"
                >
                  Fechar Janela
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome e sobrenome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-slate-50 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(71) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-slate-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Curso de Interesse *
                  </label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-slate-50 focus:bg-white font-medium text-slate-800"
                  >
                    {COURSES_DATA.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title} ({c.durationHours}h)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Shift preference */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Turno de Preferência
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setShift('noite')}
                    className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                      shift === 'noite' 
                        ? 'border-amber-500 bg-amber-50/70 text-slate-900 ring-2 ring-amber-400' 
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-xs">Noturno (Semana)</span>
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                    </div>
                    <span className="text-[11px] text-slate-500 block">19h às 22h</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShift('sabado')}
                    className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                      shift === 'sabado' 
                        ? 'border-amber-500 bg-amber-50/70 text-slate-900 ring-2 ring-amber-400' 
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-xs">Sábados (Intensivo)</span>
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    </div>
                    <span className="text-[11px] text-slate-500 block">08h às 14h / 16h</span>
                  </button>
                </div>
              </div>

              {/* Experience level */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Experiência Prévia
                </label>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <label className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100">
                    <input
                      type="radio"
                      name="exp"
                      checked={experience === 'iniciante'}
                      onChange={() => setExperience('iniciante')}
                      className="accent-amber-500"
                    />
                    <span>Sou Iniciante (Começar do Zero)</span>
                  </label>
                  <label className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100">
                    <input
                      type="radio"
                      name="exp"
                      checked={experience === 'experiente'}
                      onChange={() => setExperience('experiente')}
                      className="accent-amber-500"
                    />
                    <span>Já trabalho na área</span>
                  </label>
                </div>
              </div>

              {/* Guarantees */}
              <div className="bg-blue-50/80 rounded-xl p-3 border border-blue-100 flex flex-col gap-1.5 text-xs text-blue-950">
                <div className="flex items-center gap-2 font-bold">
                  <Award className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Certificado Válido Nacionalmente + Aulas 100% Práticas</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-[11px]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sem taxa de matrícula oculta • Parcelamento flexível no cartão ou boleto</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-amber-400/30 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
              >
                <span>CONFIRMAR PRÉ-MATRÍCULA VIA WHATSAPP</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Ou ligue diretamente para nossa central: <strong className="text-slate-700">{CONTACT_INFO.phoneFormatted}</strong>
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
