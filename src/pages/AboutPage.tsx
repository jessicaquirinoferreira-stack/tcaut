import React from 'react';
import { 
  Zap, 
  ChevronRight, 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  Users, 
  Wrench, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  Sparkles
} from 'lucide-react';
import { PageTab } from '../types';
import { IMAGES, TECEAUT_LOGO_URL } from '../data/assets';

interface AboutPageProps {
  setCurrentTab: (tab: PageTab) => void;
  onOpenEnrollment: (courseName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  setCurrentTab,
  onOpenEnrollment,
}) => {
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
            <span className="text-[#F5C518] font-bold">Sobre a Teceaut</span>
          </nav>

          <div className="max-w-3xl">
            <span className="px-3.5 py-1 rounded bg-[#F5C518]/20 text-[#F5C518] font-bold text-xs uppercase tracking-wider border border-[#F5C518]/30">
              Excelência e Tradição Técnica em Salvador
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 uppercase tracking-tight">
              SOBRE A <span className="text-[#F5C518]">TECEAUT CURSOS</span>
            </h1>
            <div className="w-16 h-1 bg-[#F5C518] mt-3 rounded" />
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Referência em formação técnica profissionalizante nas áreas de Elétrica Predial, Comandos Elétricos e Automação Industrial na Bahia.
            </p>
          </div>

        </div>
      </section>

      {/* Main Story & Introduction */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-[#051226] p-2 border-2 border-[#F5C518]/50 shadow-md flex items-center justify-center shrink-0">
                <img
                  src={TECEAUT_LOGO_URL}
                  alt="Logo TECEAUT"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-contain drop-shadow-[0_2px_10px_rgba(245,197,24,0.4)]"
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#051226] font-extrabold text-xs uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#051226]" />
                Nossa História & Propósito
              </div>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#051226] tracking-tight leading-tight">
              Formando os Melhores Técnicos para a Indústria Baiana
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              A <strong>TECEAUT CURSOS – Formação Profissional</strong> nasceu com o propósito claro de suprir o grande gargalo de mão de obra técnica qualificada no estado da Bahia.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Enquanto escolas tradicionais focam em teorias extensas e obsoletas, a Teceaut revolucionou o modelo de ensino profissional com uma metodologia <strong>100% orientada à prática de laboratório</strong>. Nossos alunos manipulam contatores reais, parametrizam inversores de frequência e programam CLPs desde a primeira semana.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-amber-500 mb-0.5">+5.000</div>
                <div className="text-xs font-bold text-slate-700">Técnicos Capacitados</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-amber-500 mb-0.5">100%</div>
                <div className="text-xs font-bold text-slate-700">Foco em Prática Real</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={IMAGES.turmaFormada}
                alt="Turma Formada Teceaut Cursos"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/90 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-bold text-amber-300 uppercase block">Turmas de Sucesso</span>
                  <p className="text-sm font-semibold">Alunos formados prontos para atuar em indústrias, polos e empresas de manutenção.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="bg-[#0A1F44] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Nossos Pilares Institucionais
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Missão */}
            <div className="bg-slate-900/70 p-8 rounded-2xl border border-slate-700/60 hover:border-amber-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Missão</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Capacitar cidadãos e profissionais técnicos com conhecimentos práticos de alta precisão, gerando transformação de carreira, alta empregabilidade e valor direto para o setor industrial.
                </p>
              </div>
            </div>

            {/* Visão */}
            <div className="bg-slate-900/70 p-8 rounded-2xl border border-slate-700/60 hover:border-amber-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Visão</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Ser o centro de treinamento profissional de referência absoluta no Norte/Nordeste em Elétrica, Automação e Acionamentos Eletrônicos, reconhecido pela excelência prática de seus egressos.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="bg-slate-900/70 p-8 rounded-2xl border border-slate-700/60 hover:border-amber-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Valores</h3>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Prática e Verdade no Ensino</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Segurança Elétrica Rigorosa (NR-10)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Inovação Contínua e Tecnologia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Compromisso com o Sucesso do Aluno</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Certificados e Validade */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wide">
              Documento Profissional Oficial
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0A1F44]">
              Certificado Reconhecido Nacionalmente
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Ao concluir qualquer curso na Teceaut Cursos, o aluno recebe um certificado profissional oficial com número de registro, carga horária e conteúdo programático detalhado no verso, emitido conforme a Lei de Diretrizes e Bases da Educação Nacional (LDB - Lei nº 9.394/96).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Aceito em empresas e processos seletivos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Válido para horas complementares universitárias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Conformidade com NR-10 e NR-12</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Entrega rápida após a conclusão do curso</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 text-center lg:text-right">
            <button
              onClick={() => onOpenEnrollment()}
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-4 rounded-xl text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Quero Meu Certificado</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
