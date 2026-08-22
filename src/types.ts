export type PageTab = 'inicio' | 'cursos' | 'sobre' | 'galeria' | 'apoio' | 'contato';

export interface Course {
  id: string;
  title: string;
  category: 'eletrica' | 'automacao' | 'acionamentos';
  durationHours: number;
  shortDescription: string;
  fullDescription: string;
  badge?: string;
  image: string;
  prerequisites: string;
  targetAudience: string;
  syllabus: {
    moduleNumber: number;
    title: string;
    topics: string[];
  }[];
  marketOverview: string;
  estimatedSalary: string;
  features: string[];
  nextBatch: string;
  schedule: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'todas' | 'aulas' | 'laboratorio' | 'paineis' | 'automacao' | 'projetos' | 'certificacoes';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  content: string;
  rating: number;
  courseCompleted: string;
}

export interface TechnicalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  tips: string[];
  pdfAvailable?: boolean;
}
