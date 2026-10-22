import { SkillCard } from '../models/skill-card.model';

/**
 * Contenido de la sección "Mis Proyectos", ordenado por relevancia y
 * disponibilidad: proyectos reales, productos en desarrollo, experimentos,
 * repositorios públicos y trabajos técnicos.
 */
export const PROJECTS_CARDS: readonly SkillCard[] = [
  {
    icon: 'flower1',
    iconTone: 'text-success',
    title: 'Vivero Verde Vida',
    status: 'Proyecto real',
    link: {
      href: 'https://github.com/LUALROAL/Vivero-ventas',
      label: 'Ver repositorio',
    },
    body: [
      {
        text: 'Sistema de gestión comercial para un vivero: inventario de productos, registro de ventas, facturación y administración de la información del negocio. Desarrollado con ',
      },
      { text: 'Angular y TypeScript', strong: true },
      { text: ', con listados optimizados mediante ' },
      { text: 'Virtual Scroll', strong: true },
      { text: '.' },
    ],
  },
  {
    icon: 'robot',
    iconTone: 'text-info',
    title: 'PlusIA',
    status: 'Publicado',
    link: {
      href: 'https://plusia.co/',
      label: 'Ver sitio',
    },
    body: [
      {
        text: 'Sitio corporativo de PlusIA, empresa de soluciones de inteligencia artificial. Incluye páginas de servicios, equipo, blog con contenido dinámico vía ',
      },
      { text: 'API', strong: true },
      { text: ' y formulario de contacto. Desarrollado con ' },
      { text: 'Angular', strong: true },
      { text: '.' },
    ],
  },
  {
    icon: 'calendar-check',
    iconTone: 'text-warning',
    title: 'MiTurno',
    status: 'En desarrollo · Pruebas',
    link: {
      href: 'https://miturno.magnusai.co/home',
      label: 'Ver aplicación',
    },
    body: [
      {
        text: 'Aplicación web progresiva (PWA) para gestionar citas y servicios de barberías y peluquerías: negocios, empleados, disponibilidad, reservas, turnos y servicios a domicilio. Construida con ',
      },
      { text: 'Angular, Ionic, .NET, PostgreSQL y Docker', strong: true },
      {
        text: '. Actualmente se encuentra publicada en fase de pruebas y ajustes de responsive.',
      },
    ],
  },
  {
    icon: 'broadcast',
    iconTone: 'text-danger',
    title: 'Mapache 3AM',
    status: 'Experimental',
    body: [
      {
        text: 'Experiencias interactivas para transmisiones en vivo: integración de eventos de ',
      },
      { text: 'TikTok Live', strong: true },
      { text: ', comunicación en tiempo real con ' },
      { text: 'sockets', strong: true },
      {
        text: ', reacciones a regalos de espectadores, animaciones y reglas de juego.',
      },
    ],
  },
  {
    icon: 'credit-card',
    iconTone: 'text-primary',
    title: 'Plataforma de Pagos',
    status: 'Repositorio público',
    link: {
      href: 'https://github.com/LUALROAL/Plataforma-Pagos',
      label: 'Ver repositorio',
    },
    body: [
      { text: 'Sistema de pagos desarrollado con ' },
      { text: 'Angular', strong: true },
      { text: ': integración de tarjetas y ACH, manejo de ' },
      { text: 'Lazy Loading', strong: true },
      { text: ' y optimización de ' },
      { text: 'iFrames', strong: true },
      { text: '.' },
    ],
  },
  {
    icon: 'heart',
    iconTone: 'text-warning',
    title: 'Página de Matrimonio',
    status: 'Demo publicada',
    link: {
      href: 'https://lualroal.github.io/Matrimonio/',
      label: 'Ver demo',
    },
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
    status: 'Proyecto técnico',
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
    status: 'Proyecto personal',
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
    status: 'Proyecto técnico',
    body: [
      { text: 'Implementación de despliegues automáticos con ' },
      { text: 'Docker', strong: true },
      { text: ' y ' },
      { text: 'GitHub Actions', strong: true },
      { text: ', optimizando CI/CD.' },
    ],
  },
];
