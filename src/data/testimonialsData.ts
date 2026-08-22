import { Testimonial } from '../types';

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Carlos Santos',
    role: 'Eletricista Industrial',
    company: 'Polo Petroquímico de Camaçari',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    content: 'O curso de Comandos Elétricos e Inversores na Teceaut mudou minha trajetória. As aulas são 100% práticas, você coloca a mão na massa desde o primeiro dia. Em menos de 2 meses após concluir, consegui minha vaga no Polo.',
    rating: 5,
    courseCompleted: 'Comandos Elétricos & Inversores'
  },
  {
    id: 'test-2',
    name: 'Marcos Oliveira',
    role: 'Técnico em Automação',
    company: 'Indústria Alimentícia BA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content: 'Fiz a formação em CLP e Automação Industrial. O laboratório tem equipamentos modernos idênticos aos que encontro na fábrica hoje. A didática dos professores é fora de série porque eles realmente trabalham no setor.',
    rating: 5,
    courseCompleted: 'CLP & Automação Industrial'
  },
  {
    id: 'test-3',
    name: 'Ana Paula Souza',
    role: 'Técnica em Eletrotécnica',
    company: 'Prestadora de Serviços Elétricos',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    content: 'Comecei pelo curso de Eletricista Predial e depois fiz Comandos Elétricos. A segurança que os instrutores transmitem e o suporte pós-curso me deram total confiança para assumir grandes obras e projetos.',
    rating: 5,
    courseCompleted: 'Eletricista Predial & Comandos'
  }
];
