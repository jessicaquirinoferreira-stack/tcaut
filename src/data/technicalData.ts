import { TechnicalArticle } from '../types';

export const TECHNICAL_ARTICLES: TechnicalArticle[] = [
  {
    id: 'dimensionamento-condutores',
    title: 'Guia Prático: Dimensionamento de Condutores pela NBR 5410',
    category: 'Eletricidade Predial',
    readTime: '6 min de leitura',
    summary: 'Aprenda os critérios fundamentais de capacidade de condução de corrente, fatores de agrupamento, temperatura e limite de queda de tensão.',
    pdfAvailable: true,
    tips: [
      'Sempre aplique o fator de correção de temperatura ambiente para o clima de Salvador/BA (30°C padrão).',
      'Circuitos de iluminação exigem seção mínima de 1,5 mm² e circuitos de tomadas TUG exigem no mínimo 2,5 mm².',
      'A queda de tensão máxima acumulada da entrada até o ponto terminal não deve exceder 4% em instalações residenciais.'
    ],
    content: [
      'O dimensionamento correto de condutores é a base da segurança elétrica. Um cabo subdimensionado gera sobreaquecimento (efeito Joule), desperdício de energia e risco iminente de incêndio.',
      'Na Teceaut Cursos, você aprende a calcular a corrente de projeto (Ib), aplicar os fatores de correção de agrupamento (Fca) e temperatura (Fct), determinando a corrente corrigida (Iz).',
      'Além disso, verificamos a proteção contra correntes de curto-circuito e o tempo máximo de desligamento do disjuntor termomagnético.'
    ]
  },
  {
    id: 'partida-estrela-triangulo',
    title: 'Esquema e Funcionamento da Partida Estrela-Triângulo',
    category: 'Comandos Elétricos',
    readTime: '8 min de leitura',
    summary: 'Entenda como reduzir a corrente de partida de motores trifásicos em até 67% e evitar quedas bruscas de tensão na rede elétrica.',
    pdfAvailable: true,
    tips: [
      'O motor elétrico deve possuir no mínimo 6 pontas de conexão acessíveis na caixa de bornes.',
      'A tensão de linha da rede deve coincidir com a tensão de fechamento em triângulo do motor (ex: motor 220/380V ligado em rede 220V).',
      'O tempo de comutação do temporizador deve ser ajustado para quando o motor atingir cerca de 80% a 90% da sua rotação nominal.'
    ],
    content: [
      'A partida direta de motores trifásicos de grande porte pode gerar correntes de pico de 6 a 8 vezes a corrente nominal (In). Isso pode desarmar disjuntores da subestação e danificar equipamentos eletrônicos vizinhos.',
      'Com a partida Estrela-Triângulo montada com contatores K1, K2, K3 e temporizador eletrônico d1, iniciamos em estrela (tensão de fase reduzida por raiz de 3) e comutamos para triângulo em regime pleno.',
      'Nossos alunos montam este circuito na prática utilizando ferramentas industriais, testando intertravamentos mecânicos e elétricos.'
    ]
  },
  {
    id: 'programacao-ladder-clp',
    title: 'Top 5 Melhores Práticas para Programação em Ladder no CLP',
    category: 'Automação & CLP',
    readTime: '5 min de leitura',
    summary: 'Estruture seu código de automação de forma modular, clara e segura para manutenção industrial rápida.',
    pdfAvailable: true,
    tips: [
      'Sempre utilize contatos normalmente fechados físicos para botões de emergência e intertravamentos de segurança.',
      'Padronize as tags e comentários em todas as rungs (linhas de código) para facilitar o troubleshooting por outros técnicos.',
      'Evite duplicar bobinas de saída no mesmo programa para não causar conflitos no ciclo de varredura (Scan).'
    ],
    content: [
      'A linguagem Ladder (Diagrama de Contatos) é o padrão da norma internacional IEC 61131-3 e continua sendo a mais requisitada na indústria automotiva e de processos.',
      'Um bom programador de CLP não apenas faz a máquina funcionar, mas desenvolve rotinas à prova de falhas com diagnóstico de sensores e sinalização de alarmes na IHM.',
      'Na Teceaut, ensinamos desde a lógica combinacional e sequencial até blocos de funções reutilizáveis e escalonamento de sinais analógicos.'
    ]
  },
  {
    id: 'parametrizacao-inversores',
    title: 'Passo a Passo: Como Parametrizar Inversores de Frequência WEG',
    category: 'Acionamentos',
    readTime: '7 min de leitura',
    summary: 'Guia essencial para configurar dados da placa do motor, rampas de aceleração e referências de velocidade via entrada analógica.',
    pdfAvailable: true,
    tips: [
      'Antes de ligar, certifique-se da compatibilidade de tensão de alimentação do inversor com a rede local.',
      'Insira com precisão os dados de placa do motor (P0295 a P0399 no padrão WEG): Corrente, Potência, Rotação e Tensão nominal.',
      'Ajuste o parâmetro de modo de controle: V/F linear para bombas e ventiladores, ou Vetorial para cargas de torque constante como guinchos e esteiras.'
    ],
    content: [
      'Os inversores de frequência revolucionaram o controle de máquinas industriais, proporcionando economia de energia de até 50% em aplicações de bombeamento e ventilação.',
      'Nos laboratórios da Teceaut, os alunos praticam diretamente em inversores WEG CFW08, CFW500 e CFW11 montados em bancadas reais conectadas a motores de teste.',
      'Aprenda a configurar entradas digitais para comandos remotos (Avanço/Retorno, Velocidade 1/2/3) e saídas a relé para indicação de falha.'
    ]
  }
];
