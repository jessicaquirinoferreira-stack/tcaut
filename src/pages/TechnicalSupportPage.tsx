import React, { useState } from 'react';
import { 
  FileText, 
  ChevronRight, 
  Calculator, 
  CheckCircle2, 
  Download, 
  Zap, 
  ArrowRight,
  BookOpen,
  HelpCircle,
  Phone,
  Flame
} from 'lucide-react';
import { PageTab } from '../types';
import { TECHNICAL_ARTICLES } from '../data/technicalData';

interface TechnicalSupportPageProps {
  setCurrentTab: (tab: PageTab) => void;
  onOpenEnrollment: (courseName?: string) => void;
}

export const TechnicalSupportPage: React.FC<TechnicalSupportPageProps> = ({
  setCurrentTab,
  onOpenEnrollment,
}) => {
  const [activeArticleId, setActiveArticleId] = useState(TECHNICAL_ARTICLES[0].id);

  // Electrical Calculator State
  const [calcType, setCalcType] = useState<'condutores' | 'motor'>('condutores');
  
  // Conductor inputs
  const [powerWatts, setPowerWatts] = useState<number>(5500); // e.g., chuveiro
  const [voltage, setVoltage] = useState<number>(220);
  const [distanceMeters, setDistanceMeters] = useState<number>(15);
  const [powerFactor, setPowerFactor] = useState<number>(0.95);

  // Motor inputs
  const [motorCV, setMotorCV] = useState<number>(5); // 5 CV
  const [motorVoltage, setMotorVoltage] = useState<number>(220); // 220V trifásico
  const [motorRendimento, setMotorRendimento] = useState<number>(0.86);
  const [motorFP, setMotorFP] = useState<number>(0.84);

  // Conductor calculation
  const currentAmps = powerWatts / (voltage * powerFactor);
  // Estimate section (simplified rule of thumb based on NBR 5410 table 36)
  const calculateCableSection = (amps: number) => {
    if (amps <= 15) return { section: '1,5 mm²', breaker: '16A', maxCurrent: '17,5A' };
    if (amps <= 21) return { section: '2,5 mm²', breaker: '20A', maxCurrent: '24A' };
    if (amps <= 28) return { section: '4,0 mm²', breaker: '25A / 32A', maxCurrent: '32A' };
    if (amps <= 36) return { section: '6,0 mm²', breaker: '32A / 40A', maxCurrent: '41A' };
    if (amps <= 50) return { section: '10,0 mm²', breaker: '50A', maxCurrent: '57A' };
    if (amps <= 68) return { section: '16,0 mm²', breaker: '63A / 70A', maxCurrent: '76A' };
    if (amps <= 89) return { section: '25,0 mm²', breaker: '80A / 100A', maxCurrent: '101A' };
    return { section: '35,0 mm² ou superior', breaker: '125A', maxCurrent: '125A+' };
  };

  const cableResult = calculateCableSection(currentAmps);
  // Approximate voltage drop %
  const voltageDropPercent = ((2 * 0.0178 * distanceMeters * currentAmps) / (voltage * (parseFloat(cableResult.section) || 2.5))) * 100;

  // Motor calculation
  // 1 CV = 735.5 W
  const motorWatts = motorCV * 735.5;
  // In = P / (sqrt(3) * V * rendimento * cos_phi)
  const motorCurrent = motorWatts / (Math.sqrt(3) * motorVoltage * motorRendimento * motorFP);
  // Estimated starting current peak (Ip/In ~ 6.5x)
  const motorStartingPeak = motorCurrent * 6.5;

  const currentArticle = TECHNICAL_ARTICLES.find((a) => a.id === activeArticleId) || TECHNICAL_ARTICLES[0];

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
            <span className="text-[#F5C518] font-bold">Apoio Técnico</span>
          </nav>

          <div className="max-w-3xl">
            <span className="px-3.5 py-1 rounded bg-[#F5C518]/20 text-[#F5C518] font-bold text-xs uppercase tracking-wider border border-[#F5C518]/30">
              Conteúdos & Ferramentas Gratuitas
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 uppercase tracking-tight">
              APOIO TÉCNICO <span className="text-[#F5C518]">& GUIAS PRÁTICOS</span>
            </h1>
            <div className="w-16 h-1 bg-[#F5C518] mt-3 rounded" />
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Materiais didáticos, esquemas elétricos e calculadoras de campo desenvolvidas pelos instrutores da Teceaut para auxiliar alunos e técnicos no dia a dia.
            </p>
          </div>

        </div>
      </section>

      {/* Interactive Tool Section: Calculadora Técnica */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-[#07152d] via-[#0A1F44] to-[#0d2657] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-blue-800">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-blue-900/80">
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Calculator className="w-4 h-4" />
                  <span>Ferramenta Interativa de Campo</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Calculadora Técnica de Dimensionamento
                </h2>
                <p className="text-blue-200 text-xs sm:text-sm mt-1">
                  Faça cálculos rápidos para seus projetos elétricos e motores industriais.
                </p>
              </div>

              {/* Mode Toggle */}
              <div className="flex items-center bg-slate-900/80 p-1.5 rounded-xl border border-blue-800">
                <button
                  onClick={() => setCalcType('condutores')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
                    calcType === 'condutores'
                      ? 'bg-amber-400 text-slate-950 shadow'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Condutores & Disjuntores
                </button>
                <button
                  onClick={() => setCalcType('motor')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
                    calcType === 'motor'
                      ? 'bg-amber-400 text-slate-950 shadow'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Motores Trifásicos
                </button>
              </div>
            </div>

            {/* Calculator Body */}
            {calcType === 'condutores' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Inputs */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase mb-1">
                      Potência Total (Watts)
                    </label>
                    <input
                      type="number"
                      value={powerWatts}
                      onChange={(e) => setPowerWatts(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-blue-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                    <span className="text-[10px] text-slate-400">Ex: 5500W (Chuveiro), 2200W (Ar-cond.)</span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase mb-1">
                      Tensão (Volts)
                    </label>
                    <select
                      value={voltage}
                      onChange={(e) => setVoltage(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-blue-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <option value={127}>127 V (Monofásico)</option>
                      <option value={220}>220 V (Bifásico/Monofásico)</option>
                      <option value={380}>380 V (Trifásico)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase mb-1">
                      Distância do Quadro (metros)
                    </label>
                    <input
                      type="number"
                      value={distanceMeters}
                      onChange={(e) => setDistanceMeters(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-blue-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase mb-1">
                      Fator de Potência (cos φ)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.5"
                      max="1.0"
                      value={powerFactor}
                      onChange={(e) => setPowerFactor(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-blue-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                </div>

                {/* Results Card */}
                <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 border border-amber-400/40">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                    Resultado Estimado (NBR 5410)
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                      <span className="text-[11px] text-slate-400 block">Corrente de Projeto (Ib)</span>
                      <span className="text-xl font-black text-amber-300">{currentAmps.toFixed(1)} A</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                      <span className="text-[11px] text-slate-400 block">Cabo Recomendado</span>
                      <span className="text-xl font-black text-emerald-400">{cableResult.section}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                      <span className="text-[11px] text-slate-400 block">Disjuntor Termomagnético</span>
                      <span className="text-xl font-black text-white">{cableResult.breaker}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                      <span className="text-[11px] text-slate-400 block">Queda de Tensão Estimada</span>
                      <span className="text-xl font-black text-white">{voltageDropPercent.toFixed(2)}%</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-snug">
                    * Cálculo orientativo. No curso de <strong>Eletricista Predial</strong> e <strong>Comandos Elétricos</strong> da Teceaut, você aprende todos os métodos de instalação (B1, B2, C) e fatores de agrupamento.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Motor Inputs */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase mb-1">
                      Potência do Motor (CV / HP)
                    </label>
                    <input
                      type="number"
                      value={motorCV}
                      onChange={(e) => setMotorCV(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-blue-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase mb-1">
                      Tensão Trifásica
                    </label>
                    <select
                      value={motorVoltage}
                      onChange={(e) => setMotorVoltage(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-blue-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <option value={220}>220 V (Trifásico)</option>
                      <option value={380}>380 V (Trifásico)</option>
                      <option value={440}>440 V (Trifásico)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase mb-1">
                      Rendimento do Motor (η)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={motorRendimento}
                      onChange={(e) => setMotorRendimento(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-blue-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase mb-1">
                      Fator de Potência (cos φ)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={motorFP}
                      onChange={(e) => setMotorFP(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-blue-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                </div>

                {/* Motor Results */}
                <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 border border-amber-400/40">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                    Parâmetros de Partida & Proteção
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                      <span className="text-[11px] text-slate-400 block">Corrente Nominal (In)</span>
                      <span className="text-xl font-black text-amber-300">{motorCurrent.toFixed(1)} A</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                      <span className="text-[11px] text-slate-400 block">Pico de Partida Direta (Ip)</span>
                      <span className="text-xl font-black text-rose-400">{motorStartingPeak.toFixed(1)} A</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                      <span className="text-[11px] text-slate-400 block">Faixa Relé Térmico</span>
                      <span className="text-xl font-black text-emerald-400">{(motorCurrent * 0.9).toFixed(1)} - {(motorCurrent * 1.15).toFixed(1)} A</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                      <span className="text-[11px] text-slate-400 block">Partida Recomendada</span>
                      <span className="text-sm font-black text-white mt-1 block">
                        {motorCV > 5 ? 'Estrela-Triângulo ou Inversor' : 'Partida Direta ou Inversor'}
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-snug">
                    * Aprenda a parametrizar essas variáveis no curso de <strong>Inversores de Frequência</strong> e <strong>Comandos Elétricos</strong>.
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Technical Articles & Guides */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-bold text-[#0A1F44] uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">
            Artigos e Manuais Técnicos
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0A1F44] mt-2">
            Manuais de Apoio para Técnicos & Eletricistas
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Article Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {TECHNICAL_ARTICLES.map((art) => {
              const isSelected = activeArticleId === art.id;
              return (
                <div
                  key={art.id}
                  onClick={() => setActiveArticleId(art.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-amber-400 ring-2 ring-amber-400/30 shadow-md'
                      : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      {art.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {art.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {art.summary}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Active Article Detailed Reading View */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-amber-600 uppercase">
                  {currentArticle.category} • {currentArticle.readTime}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0A1F44] mt-1">
                  {currentArticle.title}
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                {currentArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Practical Tips Box */}
              <div className="bg-amber-50/80 rounded-2xl p-5 border border-amber-200/80">
                <h4 className="font-bold text-xs text-amber-950 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-600 fill-amber-600" />
                  Dicas Práticas de Laboratório Teceaut:
                </h4>
                <ul className="space-y-2 text-xs text-slate-800">
                  {currentArticle.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Bottom Article Actions */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Gostou deste conteúdo? Aprenda tudo isso na prática:
              </span>
              <button
                onClick={() => onOpenEnrollment()}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center gap-1.5 shadow cursor-pointer transition-transform hover:scale-105"
              >
                <Zap className="w-3.5 h-3.5 fill-slate-950" />
                <span>Quero Me Especializar</span>
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* FAQ Section */}
      <section className="bg-[#0A1F44] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase">
              Dúvidas Frequentes sobre os Cursos
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              Respostas diretas para as perguntas mais comuns dos nossos futuros alunos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800">
              <h4 className="font-bold text-base text-amber-400 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 shrink-0" />
                Preciso ter experiência prévia para começar?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Não! O curso de <strong>Eletricista Predial-Residencial</strong> começa do absoluto zero. Para os cursos de CLP e Inversores, é recomendável ter noções de eletricidade básica ou comandos elétricos.
              </p>
            </div>

            <div className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800">
              <h4 className="font-bold text-base text-amber-400 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 shrink-0" />
                O certificado é aceito em indústrias?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Sim! Nossos certificados possuem validade nacional em conformidade com a LDB e são amplamente reconhecidos pelas empresas do Polo Petroquímico, indústrias e empresas de engenharia.
              </p>
            </div>

            <div className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800">
              <h4 className="font-bold text-base text-amber-400 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 shrink-0" />
                Como funcionam as turmas de Sábado?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                As turmas de sábado são no modelo <strong>intensivo prático</strong> (geralmente das 08h às 14h ou 16h), perfeitas para quem trabalha durante a semana e quer se qualificar sem interferir na rotina.
              </p>
            </div>

            <div className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800">
              <h4 className="font-bold text-base text-amber-400 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 shrink-0" />
                Quais as formas de pagamento disponíveis?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Aceitamos cartão de crédito em até 12x, Pix com desconto à vista e condições facilitadas no boleto. Fale no WhatsApp para consultar os valores promocionais.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
