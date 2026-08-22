import { GalleryItem } from '../types';
import { IMAGES } from './assets';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Aulas Práticas',
    category: 'aulas',
    categoryLabel: 'Aulas Práticas',
    image: IMAGES.heroLab,
    description: 'Alunos praticando montagem de circuitos e ligação de componentes elétricos em bancadas individuais.'
  },
  {
    id: 'gal-2',
    title: 'Laboratório',
    category: 'laboratorio',
    categoryLabel: 'Laboratório',
    image: IMAGES.courseAutomacao,
    description: 'Ambiente climatizado e equipado com bancadas modernas, instrumentos de medição e equipamentos industriais.'
  },
  {
    id: 'gal-3',
    title: 'Painéis Elétricos',
    category: 'paineis',
    categoryLabel: 'Painéis Elétricos',
    image: IMAGES.courseComandos,
    description: 'Montagem e estruturação de quadros de comando industrial com disjuntores, contatores e réguas de bornes.'
  },
  {
    id: 'gal-4',
    title: 'Automação Industrial',
    category: 'automacao',
    categoryLabel: 'Automação Industrial',
    image: IMAGES.courseClp,
    description: 'Alunos desenvolvendo sistemas automatizados integrando sensores, atuadores e controladores.'
  },
  {
    id: 'gal-5',
    title: 'Projetos dos Alunos',
    category: 'projetos',
    categoryLabel: 'Projetos dos Alunos',
    image: IMAGES.heroLab,
    description: 'Simulações reais de projetos industriais e testes de bancada desenvolvidos durante o curso.'
  },
  {
    id: 'gal-6',
    title: 'Comandos Elétricos',
    category: 'paineis',
    categoryLabel: 'Painéis Elétricos',
    image: IMAGES.painelMultimetro,
    description: 'Interpretação de diagramas elétricos e testes práticos com multímetro digital em circuitos de comando e potência.'
  },
  {
    id: 'gal-7',
    title: 'Programação de CLP',
    category: 'automacao',
    categoryLabel: 'Automação Industrial',
    image: IMAGES.courseClp,
    description: 'Programação em linguagem Ladder, configuração de blocos funcionais e comunicação industrial.'
  },
  {
    id: 'gal-8',
    title: 'Laboratório de Automação',
    category: 'laboratorio',
    categoryLabel: 'Laboratório',
    image: IMAGES.courseAutomacao,
    description: 'Célula de automação didática com esteiras transportadoras, sensores industriais e atuadores.'
  },
  {
    id: 'gal-9',
    title: 'Instalações Elétricas Prediais',
    category: 'aulas',
    categoryLabel: 'Aulas Práticas',
    image: IMAGES.courseEletricista,
    description: 'Execução de projetos elétricos residenciais e prediais seguindo rigorosamente a NBR 5410.'
  },
  {
    id: 'gal-10',
    title: 'Inversores de Frequência',
    category: 'aulas',
    categoryLabel: 'Aulas Práticas',
    image: IMAGES.courseInversor,
    description: 'Parametrização avançada, controle de velocidade e frenagem de motores elétricos trifásicos.'
  },
  {
    id: 'gal-11',
    title: 'Turmas Formadas',
    category: 'projetos',
    categoryLabel: 'Projetos dos Alunos',
    image: IMAGES.turmaFormada,
    description: 'Turma de profissionais qualificados prontos para atender as demandas do mercado industrial.'
  },
  {
    id: 'gal-12',
    title: 'Certificações',
    category: 'certificacoes',
    categoryLabel: 'Certificações',
    image: IMAGES.certificadoCurso,
    description: 'Certificado profissional oficial com validade em todo o território nacional.'
  }
];

export const GALLERY_CATEGORIES = [
  { id: 'todas', label: 'TODAS' },
  { id: 'aulas', label: 'AULAS PRÁTICAS' },
  { id: 'laboratorio', label: 'LABORATÓRIO' },
  { id: 'paineis', label: 'PAINÉIS ELÉTRICOS' },
  { id: 'automacao', label: 'AUTOMAÇÃO INDUSTRIAL' },
  { id: 'projetos', label: 'PROJETOS DOS ALUNOS' },
  { id: 'certificacoes', label: 'CERTIFICAÇÕES' },
];
