import { EducationItem, ExperienceItem } from '../models/experience.model';

/**
 * Experiencia profesional y freelance.
 * No se incluyen nombres de empresas, clientes ni fechas exactas porque no
 * forman parte de la información confirmada del perfil.
 */
export const EXPERIENCE_ITEMS: readonly ExperienceItem[] = [
  {
    role: 'Desarrollador de Software',
    context: 'Experiencia profesional · Miami, Estados Unidos',
    period: 'Cerca de 3 años',
    responsibilities: [
      'Desarrollo frontend de aplicaciones web con Angular y TypeScript.',
      'Construcción de interfaces responsivas y componentes reutilizables.',
      'Integración de vistas y formularios con APIs y servicios backend.',
      'Uso de Git y GitHub para control de versiones y gestión de repositorios.',
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Bootstrap',
      'Git',
    ],
  },
  {
    role: 'Desarrollador de Software Freelance',
    context: 'Proyectos freelance y productos propios',
    period: 'Colaboraciones independientes',
    responsibilities: [
      'Desarrollo de soluciones a medida para negocios y clientes.',
      'Implementación de interfaces, formularios y flujos de gestión.',
      'Planificación de funcionalidades y mantenimiento de aplicaciones.',
    ],
    technologies: [
      'Angular',
      'Ionic',
      'Bootstrap',
      '.NET',
      'PostgreSQL',
      'Docker',
    ],
  },
];

/** Formación académica confirmada. */
export const EDUCATION_ITEMS: readonly EducationItem[] = [
  {
    icon: 'mortarboard-fill',
    title: 'Tecnólogo en Análisis y Desarrollo de Software',
    institution: 'SENA',
    note: 'Formación académica que complementa más de cinco años de experiencia práctica en desarrollo de software.',
  },
  {
    icon: 'award',
    title: 'Diplomado en Desarrollo de Software',
    institution: 'Universidad del Bosque · MinTIC',
    note: 'Programa patrocinado por el MinTIC, Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia.',
  },
];
