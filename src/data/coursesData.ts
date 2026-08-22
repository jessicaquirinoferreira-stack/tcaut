import { Course } from '../types';
import { IMAGES } from './assets';

export const COURSES_DATA: Course[] = [
  {
    id: 'eletricista-predial-residencial',
    title: 'Eletricista Predial-Residencial',
    category: 'eletrica',
    durationHours: 60,
    shortDescription: 'Aprenda instalações, dimensionamento de circuitos, proteção elétrica e leitura de projetos.',
    fullDescription: 'O curso de Eletricista Predial e Residencial da Teceaut capacita você do zero ao nível profissional avançado. Aprenda na prática a planejar, executar e manter instalações elétricas prediais de acordo com as normas da ABNT NBR 5410 e NR-10.',
    badge: 'Mais Procurado',
    image: IMAGES.courseEletricista,
    prerequisites: 'Ensino fundamental completo e idade mínima de 16 anos. Não exige conhecimento prévio.',
    targetAudience: 'Iniciantes que desejam ingressar no setor elétrico, autônomos, profissionais da construção civil e manutenção.',
    nextBatch: 'Próxima Segunda-feira (Turma Noite ou Sábados)',
    schedule: 'Segundas e Quartas (19h às 22h) ou Sábados (08h às 14h)',
    estimatedSalary: 'R$ 2.400 a R$ 4.800/mês (ou até R$ 8.000 como autônomo)',
    marketOverview: 'Setor com altíssima demanda contínua em Salvador e Região Metropolitana, tanto para obras civis quanto reformas residenciais e comerciais.',
    features: [
      'Bancadas individuais de montagem prática',
      'Leitura e interpretação de diagramas unifilares e multifilares',
      'Dimensionamento de cabos, disjuntores e DPS',
      'Instalação de DR, barramentos e quadros de distribuição QGBT',
      'Práticas com fotocélulas, sensores de presença e automação residencial básica',
      'Norma de Segurança NR-10 inclusa'
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Fundamentos da Eletricidade e Segurança (NR-10)',
        topics: [
          'Grandezas elétricas: Tensão, Corrente, Resistência e Potência (Lei de Ohm e Joule)',
          'Riscos elétricos, EPIs e EPCs obrigatórios',
          'Sistemas de aterramento (TN-S, TN-C, TT) e equipotencialização'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Dimensionamento e Normas NBR 5410',
        topics: [
          'Divisão e equilíbrio de circuitos terminais',
          'Cálculo de queda de tensão e capacidade de condução de corrente',
          'Seleção de dispositivos de proteção: Disjuntores termomagnéticos, IDR e DPS'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Execução Prática de Instalações',
        topics: [
          'Passagem de cabos, técnicas de tubulação e conduítes',
          'Instalação de interruptores simples, paralelos (Three-Way) e intermediários (Four-Way)',
          'Montagem completa de Quadro de Distribuição de Circuitos (QDC)'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Projetos, Testes e Orçamentos',
        topics: [
          'Leitura de plantas elétricas residenciais',
          'Uso de multímetro, alicate amperímetro e terrômetro',
          'Como elaborar orçamentos profissionais e precificar serviços elétricos'
        ]
      }
    ]
  },
  {
    id: 'comandos-eletricos',
    title: 'Comandos Elétricos',
    category: 'eletrica',
    durationHours: 60,
    shortDescription: 'Desenvolva habilidades para montagem e interpretação de comandos elétricos industriais.',
    fullDescription: 'Torne-se um especialista em painéis e comandos industriais. Aprenda a projetar, montar, diagnosticar falhas e manter sistemas de acionamento eletromecânico de motores trifásicos com contatores, relés térmicos, temporizadores e botoeiras.',
    badge: 'Alta Empregabilidade',
    image: IMAGES.courseComandos,
    prerequisites: 'Conhecimentos básicos de eletricidade predial ou curso de eletricista.',
    targetAudience: 'Eletricistas prediais que desejam migrar para a indústria, técnicos de manutenção, mecânicos e operadores industriais.',
    nextBatch: 'Matrículas Abertas - Turmas Limitadas',
    schedule: 'Terças e Quintas (19h às 22h) ou Sábados (08h às 14h)',
    estimatedSalary: 'R$ 3.200 a R$ 5.800/mês',
    marketOverview: 'Comandos elétricos são o coração de qualquer indústria, polo petroquímico, fábrica de alimentos e sistemas de bombas/refrigeração da Bahia.',
    features: [
      'Montagem real de painéis industriais em canaletas e trilhos DIN',
      'Partida Direta, Direta com Reversão, Estrela-Triângulo e Compensadora',
      'Diagnóstico avançado de falhas elétricas com multímetro e esquema',
      'Sistemas de intertravamento elétrico e mecânico de segurança',
      'Relés de falta de fase, temporizadores on-delay/off-delay e termostatos',
      'Norma de Segurança em Máquinas NR-12'
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Componentes de Acionamento e Proteção Industrial',
        topics: [
          'Motores de Indução Trifásicos (MIT): Princípio de funcionamento, fechamentos (220V/380V/440V)',
          'Contatores de potência e auxiliares (dimensionamento e categorias AC-1, AC-3, AC-4)',
          'Disjuntor-motor, relé bimetálico térmico e fusíveis ultrarrápidos'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Diagramas de Comando e Potência',
        topics: [
          'Simbologia industrial internacional (normas IEC e NEMA)',
          'Diagramas funcionais, unifilares e trifilares de comando',
          'Softwares de simulação de circuitos elétricos (CADe SIMU)'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Técnicas de Partida de Motores',
        topics: [
          'Montagem de Partida Direta simples e com reversão',
          'Montagem de Partida Estrela-Triângulo automática com temporizador',
          'Sistemas de frenagem e desaceleração eletrodinâmica'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Montagem de Painéis e Manutenção Corretiva',
        topics: [
          'Layout de painel, organização de chicotes e bornes de passagem',
          'Metodologia sistemática de identificação e solução de falhas (troubleshooting)',
          'Sistemas de sinalização visual e sonora de alarmes'
        ]
      }
    ]
  },
  {
    id: 'clp-controlador-logico-programavel',
    title: 'CLP – Controlador Lógico Programável',
    category: 'automacao',
    durationHours: 80,
    shortDescription: 'Aprenda programação de CLP aplicada à automação industrial moderna.',
    fullDescription: 'Domine a tecnologia que controla as fábricas modernas. Aprenda a arquitetura dos CLPs, lógica de programação Ladder e Blocos de Função (FBD), integração com IHM (Interface Homem-Máquina), redes industriais e controle de processos reais.',
    badge: 'Formação Avançada',
    image: IMAGES.courseClp,
    prerequisites: 'Conhecimento básico em comandos elétricos ou lógica digital.',
    targetAudience: 'Eletricistas industriais, técnicos em eletrotécnica, automação, eletrônica, mecatrônica e estudantes de engenharia.',
    nextBatch: 'Próxima Turma em Breve - Vagas Limitadas',
    schedule: 'Segundas e Quartas (19h às 22h) ou Sábados (08h às 16h)',
    estimatedSalary: 'R$ 4.500 a R$ 8.500/mês',
    marketOverview: 'Profissionais de CLP são os mais disputados em indústrias automatizadas, centros de distribuição logística e montadoras automotivas.',
    features: [
      'Prática direta com CLPs líderes de mercado (Siemens S7-1200 / Rockwell / Schneider)',
      'Programação em Linguagem Ladder (IEC 61131-3) e FBD',
      'Configuração de entradas e saídas digitais e analógicas (4-20mA, 0-10V)',
      'Criação de telas intuitivas para IHM touchscreen',
      'Redes de comunicação industrial (Ethernet/IP, Profinet, Modbus)',
      'Desenvolvimento de projetos industriais completos do zero'
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Arquitetura e Hardware de CLPs',
        topics: [
          'Estrutura interna: CPU, memória, barramentos e módulos de expansão',
          'Ciclo de varredura (Scan Time) e mapeamento de memória (I/Q/M/DB)',
          'Ligação elétrica de sensores PNP/NPN e atuadores aos módulos'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Programação Ladder Essencial e Avançada',
        topics: [
          'Contatos NA/NF, bobinas simples, set/reset e detectores de borda',
          'Temporizadores (TON, TOF, TP) e Contadores (CTU, CTD, CTUD)',
          'Instruções matemáticas, comparadores e blocos de movimentação (MOVE)'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Sinais Analógicos e Controle de Processos',
        topics: [
          'Conversão A/D e D/A: Escalonamento e normalização de sinais analógicos',
          'Leitura de transmissores de temperatura (PT100/Termopar) e pressão',
          'Conceito e aplicação prática de controle PID'
        ]
      },
      {
        moduleNumber: 4,
        title: 'IHM e Integração de Sistemas',
        topics: [
          'Desenvolvimento de telas gráficas operacionais em IHM',
          'Criação de botões, tags, alarmes de processo e receitas de produção',
          'Projeto final integrando CLP + IHM + Motores com Inversor'
        ]
      }
    ]
  },
  {
    id: 'inversor-de-frequencia',
    title: 'Inversor de Frequência e Soft-Starter',
    category: 'acionamentos',
    durationHours: 40,
    shortDescription: 'Domine parametrização, configuração e aplicações industriais.',
    fullDescription: 'Aprenda a controlar velocidade, torque, rampas de aceleração e desaceleração de motores trifásicos utilizando os inversores de frequência e soft-starters mais utilizados na indústria (WEG, Siemens, Danfoss e Schneider).',
    badge: 'Especialização Rápida',
    image: IMAGES.courseInversor,
    prerequisites: 'Conhecimentos em comandos elétricos ou eletrotécnica básica.',
    targetAudience: 'Eletricistas industriais, mantenedores, técnicos de instrumentação e profissionais de automação.',
    nextBatch: 'Inscrições Abertas - Aulas 100% Práticas',
    schedule: 'Terças e Quintas (19h às 22h) ou Sábado Intensivo',
    estimatedSalary: 'R$ 3.800 a R$ 6.500/mês',
    marketOverview: 'Com a busca por eficiência energética e controle de processos, 90% das novas instalações industriais utilizam inversores de frequência.',
    features: [
      'Parametrização completa em inversores WEG (CFW08, CFW500, CFW11) e Danfoss',
      'Configuração de rampas de aceleração, desaceleração e frenagem CC',
      'Controle Escalar (V/F) versus Controle Vetorial de alto torque',
      'Conexão com potenciômetros, entradas digitais multispeed e sinais 4-20mA',
      'Parametrização de Soft-Starters para partidas suaves sem pico de corrente',
      'Comunicação em rede e diagnóstico de códigos de falhas (F001, F002, etc.)'
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Teoria e Eletrônica de Potência Aplicada',
        topics: [
          'Ponte retificadora, link CC (barramento) e inversor IGBT com chaveamento PWM',
          'Vantagens do controle de frequência sobre acionamentos convencionais',
          'Efeito harmônico, filtros de linha e proteção contra sobretensão/subtensão'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Parametrização e Modos de Operação',
        topics: [
          'Grupos de parâmetros de motor (tensão, corrente nominal, fator de potência, rotação)',
          'Configuração de referências locais (IHM) e remotas (bornes de comando)',
          'Funções especiais: Multispeed (velocidades pré-programadas) e função JOG'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Aplicações Avançadas e Soft-Starters',
        topics: [
          'Configuração de controle PID interno do inversor para pressão constante de água',
          'Princípio e parametrização de Soft-Starter (controle por ângulo de disparo de tiristores)',
          'Dimensionamento de relé de bypass e contatores de isolamento'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Manutenção, Falhas e Integração',
        topics: [
          'Interpretação e resolução prática de mensagens de alarme e erro',
          'Testes de semicondutores com multímetro (diodos e transistores IGBT)',
          'Comunicação em rede industrial com CLP'
        ]
      }
    ]
  },
  {
    id: 'automacao-industrial',
    title: 'Automação Industrial',
    category: 'automacao',
    durationHours: 100,
    shortDescription: 'Conheça sensores, atuadores, instrumentação e sistemas automatizados.',
    fullDescription: 'Formação completa e multidisciplinar em mecatrônica e automação de processos. Integre comandos elétricos, eletropneumática, sensores industriais, robótica, instrumentação e sistemas supervisórios SCADA para atuar na vanguarda da Indústria 4.0.',
    badge: 'Formação Completa',
    image: IMAGES.courseAutomacao,
    prerequisites: 'Ensino Médio concluído ou cursando. Desejável noções de eletricidade.',
    targetAudience: 'Jovens e profissionais que buscam uma carreira de alto nível na indústria química, petroquímica, automotiva, papel e celulose, e manufatura.',
    nextBatch: 'Turma Especial com Desconto de Matrícula',
    schedule: 'Segundas, Quartas e Sextas (19h às 22h) ou Sábados (08h às 17h)',
    estimatedSalary: 'R$ 4.800 a R$ 9.200/mês',
    marketOverview: 'A Indústria 4.0 está transformando o Polo Industrial de Camaçari e fábricas em toda a Bahia, elevando a procura por profissionais multidisciplinares.',
    features: [
      'Bancadas eletropneumáticas com cilindros de dupla ação e válvulas solenóide',
      'Sensores industriais: Indutivos, capacitivos, ópticos, ultrassônicos e encoders',
      'Instrumentação industrial: Medição de nível, vazão, pressão e temperatura',
      'Introdução à robótica industrial e esteiras automatizadas',
      'Sistemas Supervisórios SCADA e monitoramento em tempo real',
      'Certificado profissional altamente valorizado por indústrias'
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Eletropneumática e Atuadores Industriais',
        topics: [
          'Geração, tratamento e distribuição de ar comprimido (FRL)',
          'Válvulas direcionais, estranguladoras e de escape rápido',
          'Circuitos eletropneumáticos sequenciais diretos e com fim de curso'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Sensores Industriais e Instrumentação',
        topics: [
          'Princípio de detecção de sensores indutivos, fotoelétricos reflexivos e de barreira',
          'Instalação e alinhamento de encoders incrementais e absolutos',
          'Instrumentos transmissores de processo padrão 4 a 20mA e protocolo HART'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Integração de Sistemas e Robótica',
        topics: [
          'Lógica de intertravamento de células de produção automáticas',
          'Segurança funcional em automação: Relés de segurança e cortinas de luz',
          'Conceitos de cinemática e programação básica de manipuladores robóticos'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Supervisório SCADA e Indústria 4.0',
        topics: [
          'Desenvolvimento de telas sinóticas em sistemas supervisórios',
          'Configuração de drivers de comunicação OPC e banco de dados de alarmes',
          'IoT Industrial, computação de borda e manutenção preditiva'
        ]
      }
    ]
  }
];
