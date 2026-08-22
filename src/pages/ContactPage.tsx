import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Instagram, 
  Facebook, 
  Youtube, 
  Linkedin, 
  CheckCircle2, 
  ChevronRight, 
  Zap, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { PageTab } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { CONTACT_INFO } from '../data/contacts';

interface ContactPageProps {
  setCurrentTab: (tab: PageTab) => void;
  onOpenEnrollment: (courseName?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  setCurrentTab,
  onOpenEnrollment,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState(COURSES_DATA[0].title);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const fullMessage = `⚡ *MENSAGEM VIA SITE - TECEAUT CURSOS*
----------------------------------------
*Nome:* ${name}
*Telefone/WhatsApp:* ${phone}
*E-mail:* ${email || 'Não informado'}
*Interesse:* ${interest}
*Mensagem:* ${message || 'Gostaria de informações e valores.'}`;

    const encoded = encodeURIComponent(fullMessage);
    setTimeout(() => {
      window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encoded}`, '_blank');
    }, 600);
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Olá!%20Gostaria%20de%20tirar%20dúvidas%20sobre%20os%20cursos%20da%20Teceaut.`;
  const mapsRouteUrl = CONTACT_INFO.mapsUrl;

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
            <span className="text-[#F5C518] font-bold">Contato</span>
          </nav>

          <div className="max-w-3xl">
            <span className="px-3.5 py-1 rounded bg-[#F5C518]/20 text-[#F5C518] font-bold text-xs uppercase tracking-wider border border-[#F5C518]/30">
              Canais de Atendimento Oficial
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 uppercase tracking-tight">
              FALE COM A <span className="text-[#F5C518]">TECEAUT CURSOS</span>
            </h1>
            <div className="w-16 h-1 bg-[#F5C518] mt-3 rounded" />
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Estamos localizados no Cabula, em Salvador - BA ({CONTACT_INFO.address.full}). Tire suas dúvidas sobre turmas, valores, agende uma visita ao laboratório ou faça sua pré-matrícula.
            </p>
          </div>

        </div>
      </section>

      {/* Main Contact Grid: Contact Cards & Form */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Card */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    Atendimento Rápido via WhatsApp
                  </span>
                  <div className="text-2xl font-black text-slate-900 mt-1">
                    {CONTACT_INFO.phoneFormatted}
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Atendimento pedagógico para matrículas, grade curricular e valores promocionais.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 mt-3 underline"
                  >
                    <span>Iniciar Conversa Agora</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    E-mail Oficial
                  </span>
                  <div className="text-lg font-bold text-slate-900 mt-0.5 break-all">
                    {CONTACT_INFO.email}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Envie propostas para treinamento in-company corporativo ou documentos de matrícula.
                  </p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0A1F44] text-white flex items-center justify-center shrink-0 shadow">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Endereço da Unidade
                  </span>
                  <div className="text-base font-bold text-slate-900 mt-0.5">
                    {CONTACT_INFO.address.street}
                  </div>
                  <div className="text-xs text-slate-600">
                    {CONTACT_INFO.address.neighborhood}, {CONTACT_INFO.address.city} - {CONTACT_INFO.address.state} • CEP {CONTACT_INFO.address.cep}
                  </div>
                  <a
                    href={mapsRouteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:underline mt-2"
                  >
                    <span>Abrir no Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0A1F44] flex items-center justify-center shrink-0 shadow">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Horário de Atendimento
                  </span>
                  <div className="text-xs text-slate-700 mt-1 space-y-1">
                    <div><strong>Segunda a Sexta:</strong> 08:00 às 21:00</div>
                    <div><strong>Sábados:</strong> 08:00 às 17:00</div>
                    <div className="text-slate-400">Domingos e Feriados: Fechado</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connection */}
            <div className="bg-[#0A1F44] text-white p-6 rounded-2xl border border-blue-900 flex items-center justify-between">
              <div>
                <span className="text-xs text-amber-400 font-bold uppercase">Siga Nosso Perfil</span>
                <h4 className="text-lg font-black mt-0.5">@teceaut_cursos</h4>
              </div>
              <a
                href="https://instagram.com/teceaut_cursos"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 p-3 rounded-xl font-bold transition-all shadow"
                aria-label="Instagram @teceaut_cursos"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
            
            <div className="mb-6">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                Envie Sua Mensagem
              </span>
              <h3 className="text-2xl font-black text-[#0A1F44] mt-1">
                Como podemos ajudar você hoje?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Preencha o formulário e receba resposta imediata da nossa equipe de atendimento.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Mensagem Enviada!</h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Obrigado pelo contato. Você foi encaminhado para o WhatsApp oficial da Teceaut Cursos <strong>{CONTACT_INFO.phoneFormatted}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#0A1F44] text-white text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-blue-900"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(71) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      E-mail (opcional)
                    </label>
                    <input
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Curso de Interesse
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white text-slate-800 font-medium"
                  >
                    {COURSES_DATA.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                    <option value="Dúvidas Gerais / Outros">Outro Assunto / Visita ao Laboratório</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Mensagem ou Dúvida
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Conte como podemos te ajudar ou informe seu melhor horário para contato..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-black py-4 px-6 rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-amber-400/30 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>ENVIAR MENSAGEM VIA WHATSAPP</span>
                </button>

                <p className="text-[11px] text-center text-slate-400 pt-2">
                  Seus dados estão protegidos. Não enviamos spam.
                </p>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* Interactive Map / Location Section */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#0A1F44] rounded-3xl p-6 sm:p-10 text-white shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Fácil Acesso no Cabula
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  Localização da Teceaut Cursos
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  {CONTACT_INFO.address.full} • Próximo às principais vias, transporte público e comércio.
                </p>
              </div>

              <a
                href={mapsRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow shrink-0 transition-transform hover:scale-105"
              >
                <MapPin className="w-4 h-4" />
                <span>Traçar Rota no GPS</span>
              </a>
            </div>

            {/* Visual Interactive Map Representation */}
            <div className="w-full h-80 rounded-2xl overflow-hidden bg-slate-800 relative border border-blue-900 flex items-center justify-center">
              <iframe
                title="Mapa Teceaut Cursos"
                src={CONTACT_INFO.mapsEmbedUrl}
                className="w-full h-full border-0 grayscale contrast-125 opacity-90"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#0A1F44]/95 text-white p-3 rounded-xl shadow-lg border border-amber-400/40 backdrop-blur-md max-w-xs">
                <div className="flex items-center gap-2 font-bold text-xs text-amber-400">
                  <Zap className="w-3.5 h-3.5 fill-amber-400" />
                  <span>TECEAUT CURSOS</span>
                </div>
                <p className="text-[11px] text-slate-200 mt-1">
                  {CONTACT_INFO.address.full}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
