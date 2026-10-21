import { SkillCard } from '../models/skill-card.model';

/**
 * Contenido de la sección "Mis Habilidades".
 * El orden de los fragmentos (`segments`) reproduce exactamente el texto
 * renderizado en el marcado original, incluidos los espacios.
 */
export const SKILLS_CARDS: readonly SkillCard[] = [
  {
    icon: 'code-slash',
    iconTone: 'text-primary',
    title: 'Desarrollo Front-End',
    body: [
      { text: 'Experiencia en ' },
      { text: 'Angular, WordPress, TypeScript y JavaScript (ES6+)', strong: true },
      { text: '. Creación de interfaces modernas, dinámicas y optimizadas con ' },
      { text: 'SCSS, Material Design, bootstrap', strong: true },
      { text: '.' },
    ],
  },
  {
    icon: 'server',
    iconTone: 'text-danger',
    title: 'Administración de Servidores',
    body: [
      { text: 'Experiencia en ' },
      { text: 'Linux (AlmaLinux, Ubuntu)', strong: true },
      { text: '. Configuración y seguridad de servidores con ' },
      { text: 'Apache, SSL y VPNs', strong: true },
      { text: '.' },
    ],
  },
  {
    icon: 'speedometer',
    iconTone: 'text-secondary',
    title: 'Optimización y Escalabilidad',
    body: [
      { text: 'Implementación de ' },
      { text: 'Lazy Loading, Change Detection y Virtual Scroll', strong: true },
      { text: ' para mejorar el rendimiento. Desarrollo de aplicaciones modulares y escalables.' },
    ],
  },
  {
    icon: 'bug',
    iconTone: 'text-warning',
    title: 'Pruebas Automatizadas',
    body: [
      { text: 'Desarrollo de tests con ' },
      { text: 'Playwright', strong: true },
      { text: '. Garantizando estabilidad y confiabilidad en el código.' },
    ],
  },
  {
    icon: 'lightbulb',
    iconTone: 'text-light',
    title: 'Autogestión y Aprendizaje Continuo',
    body: [
      {
        text: 'Comprometido con la mejora constante, explorando nuevas tecnologías y metodologías para optimizar el desarrollo de software y la administración de sistemas.',
      },
    ],
  },
  {
    icon: 'git',
    iconTone: 'text-secondary',
    title: 'Control de Versiones y DevOps',
    body: [
      { text: 'Manejo de ' },
      { text: 'Git & GitHub', strong: true },
      { text: '. Experiencia en ' },
      { text: 'Docker', strong: true },
      { text: ' y automatización de despliegues.' },
    ],
  },
];
