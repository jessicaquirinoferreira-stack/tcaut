import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  MessageSquare, 
  Instagram, 
  Sparkles, 
  ChevronRight, 
  GraduationCap, 
  CheckCircle2, 
  ExternalLink,
  Minimize2,
  RefreshCw,
  Zap,
  Phone
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { TECEAUT_LOGO_URL } from '../data/assets';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  suggestedActions?: {
    label: string;
    type: 'whatsapp' | 'instagram' | 'enroll' | 'query';
    payload?: string;
  }[];
}

interface AIAssistantWidgetProps {
  onOpenEnrollment: (courseTitle?: string) => void;
}

const WHATSAPP_NUMBER = '5571987654321';
const INSTAGRAM_URL = 'https://instagram.com/teceaut_cursos';

export const AIAssistantWidget: React.FC<AIAssistantWidgetProps> = ({ onOpenEnrollment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [hasPrompted, setHasPrompted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const initialMessage: Message = {
    id: 'msg-welcome',
    sender: 'ai',
    text: 'Olá! Sou a **Lia**, sua consultora de IA da **TECEAUT Cursos** ⚡\n\nEstou aqui para tirar suas dúvidas sobre nossos cursos práticos de Elétrica e Automação Industrial. Como posso te ajudar hoje?',
    timestamp: 'Agora',
    suggestedActions: [
      { label: '🟢 Falar no WhatsApp Oficial', type: 'whatsapp', payload: 'Olá! Gostaria de saber mais sobre as turmas abertas da Teceaut.' },
      { label: '📸 Conhecer nosso Instagram', type: 'instagram' },
      { label: '⚡ Ver Cursos & Vagas', type: 'query', payload: 'Quais são os cursos disponíveis e turmas?' },
      { label: '📜 Como funciona o Certificado?', type: 'query', payload: 'O certificado é reconhecido pelo MEC e empresas?' }
    ]
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);

  useEffect(() => {
    // Show polite notification popup after 5 seconds
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      setHasPrompted(false);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  const handleOpenWhatsApp = (customText?: string) => {
    const text = customText || 'Olá! Estava no site da Teceaut e gostaria de mais informações sobre os cursos e matrículas.';
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleOpenInstagram = () => {
    window.open(INSTAGRAM_URL, '_blank');
  };

  const generateAIResponse = (userQuery: string): { text: string; actions: Message['suggestedActions'] } => {
    const query = userQuery.toLowerCase();

    // Specific course queries
    const matchedCourse = COURSES_DATA.find(c => 
      query.includes(c.title.toLowerCase()) || 
      query.includes(c.id.toLowerCase()) ||
      (c.id === 'eletricista' && query.includes('eletricista')) ||
      (c.id === 'comandos' && (query.includes('comando') || query.includes('painel'))) ||
      (c.id === 'clp' && (query.includes('clp') || query.includes('plc') || query.includes('programação'))) ||
      (c.id === 'inversores' && (query.includes('inversor') || query.includes('motor') || query.includes('soft-starter'))) ||
      (c.id === 'automacao' && query.includes('automação'))
    );

    if (matchedCourse) {
      return {
        text: `Excelente escolha! O curso de **${matchedCourse.title}** tem carga horária de **${matchedCourse.durationHours} horas** com aulas 100% práticas em bancadas individuais.\n\n` +
              `📌 **Resumo**: ${matchedCourse.shortDescription}\n` +
              `🎯 **Metodologia**: 1 aluno por bancada com equipamentos industriais reais e certificado válido nacionalmente.\n\n` +
              `Para consultar os valores promocionais, horários de turmas (noite/sábado) ou garantir sua vaga com desconto, fale agora no nosso WhatsApp ou confira os vídeos das aulas no Instagram!`,
        actions: [
          { label: `🟢 Garantir Vaga em ${matchedCourse.title}`, type: 'whatsapp', payload: `Olá! Tenho interesse no curso de ${matchedCourse.title}. Podem me passar valores e datas das próximas turmas?` },
          { label: '📸 Ver aulas práticas no Instagram', type: 'instagram' },
          { label: '🎓 Fazer Pré-Matrícula no Site', type: 'enroll', payload: matchedCourse.title }
        ]
      };
    }

    if (query.includes('certificado') || query.includes('mec') || query.includes('reconhecido') || query.includes('diploma') || query.includes('mte') || query.includes('validade')) {
      return {
        text: `Sim! Nossos certificados são **reconhecidos em todo o território nacional** e atendem às normas do MEC (Lei nº 9.394/96) e do Ministério do Trabalho (MTE).\n\n` +
              `✅ Válido para atuar na indústria, empresas e concursos públicos.\n` +
              `✅ Inclui registro de autenticidade, carga horária e conteúdo programático.\n\n` +
              `Você pode conferir fotos das entregas de certificados de formandos no nosso **Instagram** ou falar direto com nossa coordenação pelo **WhatsApp**!`,
        actions: [
          { label: '🟢 Falar com a Coordenação no WhatsApp', type: 'whatsapp', payload: 'Olá! Gostaria de tirar uma dúvida sobre a emissão e validade dos certificados da Teceaut.' },
          { label: '📸 Ver Formandos no Instagram', type: 'instagram' },
          { label: '⚡ Ver Todos os Cursos', type: 'query', payload: 'Quais são todos os cursos disponíveis?' }
        ]
      };
    }

    if (query.includes('preço') || query.includes('valor') || query.includes('quanto custa') || query.includes('mensalidade') || query.includes('pagamento') || query.includes('parcel')) {
      return {
        text: `Temos **condições especiais e parcelamento facilitado no cartão** ou pagamento à vista com desconto especial de matrícula!\n\n` +
              `Como os valores variam conforme o curso (Eletricista, Comandos, CLP, Inversores) e os combos promocionais, nossos consultores técnicos passam a tabela completa na hora pelo **WhatsApp**.\n\n` +
              `Também postamos cupons e promoções relâmpago no nosso **Instagram**!`,
        actions: [
          { label: '🟢 Receber Tabela de Preços no WhatsApp', type: 'whatsapp', payload: 'Olá! Gostaria de receber os valores, formas de pagamento e promoções atuais dos cursos.' },
          { label: '📸 Ver Promoções no Instagram', type: 'instagram' },
          { label: '🎓 Quero me Matricular', type: 'enroll' }
        ]
      };
    }

    if (query.includes('onde') || query.includes('endereço') || query.includes('local') || query.includes('salvador') || query.includes('bahia') || query.includes('fica')) {
      return {
        text: `Nosso Centro de Treinamento fica localizado em **Salvador - BA** (Rua das Indústrias, 123 - Imbuí), com fácil acesso por metrô e ônibus, estacionamento e laboratórios climatizados.\n\n` +
              `Venha fazer uma visita para conhecer as bancadas práticas de perto! Entre em contato no WhatsApp para agendar ou veja a localização e vídeos no Instagram.`,
        actions: [
          { label: '🟢 Agendar Visita pelo WhatsApp', type: 'whatsapp', payload: 'Olá! Gostaria de agendar uma visita para conhecer os laboratórios da Teceaut Cursos.' },
          { label: '📸 Ver Fotos do Espaço no Instagram', type: 'instagram' }
        ]
      };
    }

    if (query.includes('horário') || query.includes('dias') || query.includes('noite') || query.includes('sábado') || query.includes('quando')) {
      return {
        text: `Temos turmas flexíveis planejadas para quem já trabalha ou estuda:\n\n` +
              `🌙 **Noturno**: Segundas e Quartas ou Terças e Quintas (18:30 às 21:30)\n` +
              `☀️ **Sábados**: Turmas intensivas (08:00 às 13:00 ou 08:00 às 17:00)\n\n` +
              `As vagas por turma são limitadas a 10 alunos para garantir 1 bancada por pessoa. Fale conosco no WhatsApp para conferir a data de início da próxima turma!`,
        actions: [
          { label: '🟢 Consultar Próxima Turma no WhatsApp', type: 'whatsapp', payload: 'Olá! Gostaria de saber as datas das próximas turmas disponíveis (noturno ou sábado).' },
          { label: '📸 Ver Rotina das Turmas no Instagram', type: 'instagram' }
        ]
      };
    }

    // Default friendly response directing to social channels
    return {
      text: `Na **TECEAUT Cursos**, preparamos você para o mercado de trabalho com cursos práticos em bancadas reais de Elétrica e Automação Industrial.\n\n` +
            `Oferecemos formações em:\n` +
            `• **Eletricista Predial & Residencial**\n` +
            `• **Comandos Elétricos Industriais**\n` +
            `• **CLP & Programação Industrial**\n` +
            `• **Inversores de Frequência & Soft-Starter**\n` +
            `• **Automação Industrial & Mecatrônica**\n\n` +
            `Para atendimento imediato com nossos especialistas, clique abaixo para falar no **WhatsApp** ou siga nosso **Instagram** para ver o dia a dia das aulas práticas!`,
      actions: [
        { label: '🟢 Conversar no WhatsApp com Consultor', type: 'whatsapp', payload: 'Olá! Tenho interesse nos cursos da Teceaut e gostaria de atendimento.' },
        { label: '📸 Seguir @teceaut_cursos no Instagram', type: 'instagram' },
        { label: '🎓 Abrir Formulário de Matrícula', type: 'enroll' }
      ]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const { text, actions } = generateAIResponse(query);
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedActions: actions
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleActionClick = (action: NonNullable<Message['suggestedActions']>[0]) => {
    if (action.type === 'whatsapp') {
      handleOpenWhatsApp(action.payload);
    } else if (action.type === 'instagram') {
      handleOpenInstagram();
    } else if (action.type === 'enroll') {
      onOpenEnrollment(action.payload);
      setIsOpen(false);
    } else if (action.type === 'query' && action.payload) {
      handleSendMessage(action.payload);
    }
  };

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* 1. SALES NUDGE PROMPT BUBBLE (WHEN CLOSED) */}
      {!isOpen && hasPrompted && (
        <div 
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto mb-3 bg-[#06152e] text-white p-3.5 rounded-2xl shadow-2xl border border-[#F5C518]/50 max-w-[280px] sm:max-w-[320px] cursor-pointer hover:border-[#F5C518] transition-all transform hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          <div className="flex items-start gap-3">
            <div className="relative shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F5C518] to-amber-300 p-0.5 shadow-md flex items-center justify-center">
                <Bot className="w-5 h-5 text-[#06152e]" />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#06152e] rounded-full" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#F5C518] tracking-wider uppercase">
                  Lia • TECEAUT IA
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setHasPrompted(false);
                  }}
                  className="text-slate-400 hover:text-white p-0.5"
                  aria-label="Fechar"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-[11px] text-slate-200 mt-1 leading-snug">
                👋 Dúvidas sobre cursos ou matrículas? <strong>Converse comigo ou acesse nosso WhatsApp e Instagram!</strong>
              </p>
              
              <div className="flex items-center gap-2 mt-2 pt-1.5 border-t border-white/10 text-[10px] font-bold">
                <span className="text-[#25D366] flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" /> WhatsApp
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-pink-400 flex items-center gap-1">
                  <Instagram className="w-3 h-3" /> Instagram
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. EXPANDED AI ASSISTANT CHAT WINDOW */}
      {isOpen && (
        <div 
          className={`pointer-events-auto mb-3 w-[calc(100vw-32px)] sm:w-[390px] md:w-[420px] bg-[#07152d] border border-[#F5C518]/40 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
            isMinimized ? 'h-16' : 'h-[540px] sm:h-[580px] max-h-[82vh]'
          }`}
        >
          {/* Header Bar */}
          <div className="bg-[#051226] border-b border-white/10 p-3.5 flex items-center justify-between shrink-0 select-none">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F5C518] to-amber-300 p-0.5 shadow flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#06152e]" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#051226] rounded-full animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-extrabold text-sm text-white leading-none">Lia • TECEAUT IA</h4>
                  <span className="px-1.5 py-0.2 rounded bg-[#F5C518]/20 text-[#F5C518] text-[9px] font-black uppercase">
                    Online
                  </span>
                </div>
                <p className="text-[10px] text-slate-300 mt-0.5 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-[#F5C518]" />
                  Consultoria de Cursos & Matrículas
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                title={isMinimized ? 'Expandir Chat' : 'Minimizar'}
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                title="Fechar Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Quick Direct Social Actions Banner (Always Available) */}
              <div className="bg-[#0b1d3a] px-3.5 py-2 border-b border-white/10 flex items-center justify-between gap-2 shrink-0">
                <button
                  onClick={() => handleOpenWhatsApp()}
                  className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[11px] py-1.5 px-2.5 rounded-lg flex items-center justify-center gap-1.5 shadow transition-all transform active:scale-95 cursor-pointer"
                  title="Falar no WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp Oficial</span>
                </button>

                <button
                  onClick={handleOpenInstagram}
                  className="flex-1 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white font-bold text-[11px] py-1.5 px-2.5 rounded-lg flex items-center justify-center gap-1.5 shadow transition-all transform active:scale-95 cursor-pointer"
                  title="Acessar Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </button>
              </div>

              {/* Chat Message Scroll Area */}
              <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5 text-xs text-slate-100 bg-[#040e1f]/60">
                {messages.map((msg) => {
                  const isAi = msg.sender === 'ai';
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isAi ? 'items-start' : 'items-end'}`}
                    >
                      <div
                        className={`max-w-[88%] rounded-2xl p-3 shadow-md ${
                          isAi
                            ? 'bg-[#0a2147] border border-white/10 text-slate-100 rounded-tl-sm'
                            : 'bg-[#F5C518] text-[#06152e] font-medium rounded-tr-sm'
                        }`}
                      >
                        <div className="whitespace-pre-line leading-relaxed text-[12px]">
                          {msg.text.split('**').map((part, idx) => 
                            idx % 2 === 1 ? <strong key={idx} className={isAi ? "text-[#F5C518]" : "font-black"}>{part}</strong> : part
                          )}
                        </div>

                        {/* Suggested Direct Clickable Actions */}
                        {isAi && msg.suggestedActions && msg.suggestedActions.length > 0 && (
                          <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-col gap-1.5">
                            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                              Ações Rápidas:
                            </span>
                            {msg.suggestedActions.map((action, idx) => {
                              const isWa = action.type === 'whatsapp';
                              const isIg = action.type === 'instagram';
                              const isEnroll = action.type === 'enroll';
                              
                              return (
                                <button
                                  key={idx}
                                  onClick={() => handleActionClick(action)}
                                  className={`w-full text-left text-[11px] font-bold px-2.5 py-1.5 rounded-lg flex items-center justify-between gap-1.5 transition-all cursor-pointer ${
                                    isWa 
                                      ? 'bg-[#25D366]/20 border border-[#25D366]/60 text-[#25D366] hover:bg-[#25D366] hover:text-white'
                                      : isIg
                                      ? 'bg-pink-500/20 border border-pink-500/60 text-pink-300 hover:bg-pink-600 hover:text-white'
                                      : isEnroll
                                      ? 'bg-[#F5C518]/20 border border-[#F5C518]/60 text-[#F5C518] hover:bg-[#F5C518] hover:text-[#06152e]'
                                      : 'bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10'
                                  }`}
                                >
                                  <span className="flex items-center gap-1.5 truncate">
                                    {isWa && <MessageSquare className="w-3.5 h-3.5 shrink-0" />}
                                    {isIg && <Instagram className="w-3.5 h-3.5 shrink-0" />}
                                    {isEnroll && <GraduationCap className="w-3.5 h-3.5 shrink-0" />}
                                    <span className="truncate">{action.label}</span>
                                  </span>
                                  <ExternalLink className="w-3 h-3 shrink-0 opacity-75" />
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                      
                      <span className="text-[9px] text-slate-400 mt-1 px-1">
                        {msg.timestamp}
                      </span>
                    </div>
                  );
                })}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2 text-slate-400 bg-[#0a2147] border border-white/10 rounded-2xl rounded-tl-sm px-3 py-2 w-fit">
                    <Bot className="w-3.5 h-3.5 text-[#F5C518] animate-bounce" />
                    <span className="text-[11px] text-slate-300">Lia está digitando...</span>
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518] animate-ping" />
                    </span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input Bar */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="p-3 bg-[#051226] border-t border-white/10 flex items-center gap-2 shrink-0"
              >
                <input
                  type="text"
                  placeholder="Pergunte sobre cursos, turmas, valores..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="flex-1 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-400 focus:outline-none focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518]"
                />
                
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="p-2 bg-[#F5C518] hover:bg-[#FFD700] disabled:opacity-50 text-[#06152e] rounded-xl transition-all font-bold cursor-pointer shrink-0 disabled:cursor-not-allowed"
                  title="Enviar mensagem"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      )}

      {/* 3. FLOATING TRIGGER HUB (SEAMLESS DUAL BUTTONS) */}
      <div className="pointer-events-auto flex items-center gap-2.5">
        
        {/* Direct WhatsApp Quick Pill */}
        <button
          onClick={() => handleOpenWhatsApp()}
          className="hidden sm:flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2.5 rounded-full font-black text-xs shadow-xl shadow-emerald-900/40 hover:scale-105 active:scale-95 transition-all cursor-pointer select-none"
          title="Falar no WhatsApp Oficial"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </button>

        {/* Direct Instagram Quick Pill */}
        <button
          onClick={handleOpenInstagram}
          className="hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white px-3.5 py-2.5 rounded-full font-black text-xs shadow-xl shadow-pink-900/40 hover:scale-105 active:scale-95 transition-all cursor-pointer select-none"
          title="Acessar Instagram @teceaut_cursos"
        >
          <Instagram className="w-4 h-4" />
          <span>Instagram</span>
        </button>

        {/* Main AI Assistant Floating Trigger Button */}
        <button
          id="ai-assistant-floating-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="relative group bg-[#06152e] hover:bg-[#0a2147] border-2 border-[#F5C518] text-[#F5C518] p-3.5 sm:p-4 rounded-full shadow-2xl shadow-[#F5C518]/30 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Abrir Assistente Virtual TECEAUT"
          title="Assistente IA TECEAUT (Dúvidas, WhatsApp & Instagram)"
        >
          {unreadCount > 0 && !isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5C518] opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#F5C518] text-[9px] text-[#06152e] font-black items-center justify-center">
                1
              </span>
            </span>
          )}
          
          <div className="relative">
            <Bot className="w-6 h-6 sm:w-7 sm:h-7 text-[#F5C518] group-hover:rotate-12 transition-transform" />
            <Sparkles className="w-3 h-3 text-amber-300 absolute -top-1 -right-1 animate-spin" />
          </div>
        </button>

      </div>

    </div>
  );
};
