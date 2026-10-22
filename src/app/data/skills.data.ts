import { SkillCard } from '../models/skill-card.model';

/**
 * Contenido de la sección "Mis Habilidades", ordenado por jerarquía:
 * especialidad frontend, desarrollo multiplataforma, entorno de trabajo,
 * backend/bases de datos y apoyo con IA.
 */
export const SKILLS_CARDS: readonly SkillCard[] = [
  {
    icon: 'code-slash',
    iconTone: 'text-primary',
    title: 'Desarrollo Frontend — Especialidad principal',
    featured: true,
    body: [
      { text: 'Experiencia en ' },
      {
        text: 'Angular, TypeScript, JavaScript, HTML5, CSS3, Sass/SCSS y Bootstrap',
        strong: true,
      },
      {
        text: '. Desarrollo de interfaces responsivas, componentes reutilizables, formularios e integración con APIs. Optimización con ',
      },
      { text: 'Lazy Loading, Change Detection y Virtual Scroll', strong: true },
      { text: ' y pruebas automatizadas con ' },
      { text: 'Playwright', strong: true },
      { text: '.' },
    ],
  },
  {
    icon: 'phone',
    iconTone: 'text-info',
    title: 'Desarrollo multiplataforma',
    body: [
      { text: 'Aplicaciones multiplataforma y ' },
      { text: 'PWA', strong: true },
      { text: ' con ' },
      { text: 'Ionic', strong: true },
      { text: ' sobre una base ' },
      { text: 'Angular', strong: true },
      {
        text: ', reutilizando componentes y compartiendo la lógica de la aplicación entre web y móvil.',
      },
    ],
  },
  {
    icon: 'tools',
    iconTone: 'text-secondary',
    title: 'Herramientas y entorno',
    body: [
      { text: 'Uso de ' },
      { text: 'Git', strong: true },
      { text: ' como sistema de control de versiones y ' },
      { text: 'GitHub', strong: true },
      { text: ' para alojar repositorios y colaborar en proyectos. ' },
      { text: 'Docker', strong: true },
      { text: ' y ' },
      { text: 'Linux', strong: true },
      { text: ' como parte del entorno de desarrollo y despliegue.' },
    ],
  },
  {
    icon: 'database',
    iconTone: 'text-warning',
    title: 'Backend y bases de datos',
    body: [
      { text: 'Conocimientos complementarios en ' },
      { text: 'C#/.NET, APIs REST y PostgreSQL', strong: true },
      {
        text: ', aplicados en proyectos personales y profesionales. Área secundaria frente a mi especialidad frontend.',
      },
    ],
  },
  {
    icon: 'robot',
    iconTone: 'text-light',
    title: 'Desarrollo asistido por IA',
    body: [
      { text: 'Utilizo ' },
      { text: 'OpenCode, Dixie Partners y Preagent', strong: true },
      {
        text: ' como apoyo para analizar código, planificar cambios, explorar soluciones y revisar implementaciones. El criterio técnico y la validación siguen siendo míos.',
      },
    ],
  },
];
