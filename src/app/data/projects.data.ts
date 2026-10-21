import { SkillCard } from '../models/skill-card.model';

/**
 * Contenido de la sección "Mis Proyectos".
 * El orden de los fragmentos (`segments`) reproduce exactamente el texto
 * renderizado en el marcado original, incluidos los espacios.
 */
export const PROJECTS_CARDS: readonly SkillCard[] = [
  {
    icon: 'credit-card',
    iconTone: 'text-primary',
    title: 'Plataforma de Pagos',
    link: { href: 'https://github.com/LUALROAL/Plataforma-Pagos' },
    body: [
      { text: 'Desarrollo de un sistema de pagos con ' },
      { text: 'Angular', strong: true },
      { text: ', integración de tarjetas y ACH, manejo de ' },
      { text: 'Lazy Loading', strong: true },
      { text: ' y optimización de ' },
      { text: 'iFrames', strong: true },
      { text: '.' },
    ],
  },
  {
    icon: 'receipt-cutoff',
    iconTone: 'text-success',
    title: 'Sistema de ventas',
    link: { href: 'https://github.com/LUALROAL/Vivero-ventas' },
    body: [
      { text: 'Aplicación web para gestionar inventario, pedidos y clientes con ' },
      { text: 'Angular', strong: true },
      { text: ' y optimización con ' },
      { text: 'Virtual Scroll', strong: true },
      { text: '.' },
    ],
  },
  {
    icon: 'card-checklist',
    iconTone: 'text-warning',
    title: 'Página de Matrimonio',
    link: { href: 'https://lualroal.github.io/Matrimonio/' },
    body: [
      { text: 'Diseño de página ' },
      { text: 'responsiva', strong: true },
      { text: ' para evento de matrimonio utilizando ' },
      { text: 'HTML, CSS y JavaScript', strong: true },
      { text: ', con ' },
      { text: 'formulario conectado a Google Sheets', strong: true },
      { text: ' mediante ' },
      { text: 'Apps Script', strong: true },
      { text: '.' },
    ],
  },
  {
    icon: 'shield-lock',
    iconTone: 'text-danger',
    title: 'Servidor Linux Seguro',
    body: [
      { text: 'Configuración de un servidor ' },
      { text: 'Linux (AlmaLinux, Ubuntu)', strong: true },
      { text: ' con ' },
      { text: 'VPN, SSL', strong: true },
      { text: ' y medidas de seguridad avanzadas.' },
    ],
  },
  {
    icon: 'graph-up',
    iconTone: 'text-info',
    title: 'Dashboard Interactivo',
    body: [
      { text: 'Visualización de datos en tiempo real con ' },
      { text: 'Angular', strong: true },
      { text: ', integración con APIs y optimización de carga.' },
    ],
  },
  {
    icon: 'git',
    iconTone: 'text-secondary',
    title: 'DevOps y Automatización',
    body: [
      { text: 'Implementación de despliegues automáticos con ' },
      { text: 'Docker', strong: true },
      { text: ' y ' },
      { text: 'GitHub Actions', strong: true },
      { text: ', optimizando CI/CD.' },
    ],
  },
];
