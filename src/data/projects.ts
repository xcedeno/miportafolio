export interface DualLanguageText {
  es: string;
  en: string;
}

export interface Project {
  id: string;
  title: DualLanguageText | string; // Assuming title might be the same
  image: string;
  problem: DualLanguageText;
  solution: DualLanguageText;
  result: DualLanguageText;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-dashboard',
    title: { es: 'E-Commerce Dashboard', en: 'E-Commerce Dashboard' },
    image: '/assets/images/project-ecommerce.jpg',
    problem: { 
      es: 'Un e-commerce con 50k+ productos sufría tiempos de carga de 8 segundos en su panel administrativo, causando abandono de tareas por parte del equipo.',
      en: 'An e-commerce with 50k+ products suffered from 8-second load times on its administrative panel, causing the team to abandon tasks.'
    },
    solution: {
      es: 'Rediseñé el dashboard con React + virtualización de listas, implementé caching con React Query y optimicé las consultas SQL con índices compuestos.',
      en: 'I redesigned the dashboard using React + list virtualization, implemented caching with React Query, and optimized SQL queries with composite indices.'
    },
    result: {
      es: 'Reduje el tiempo de carga en un 60%, de 8s a 3.2s, mejorando la productividad del equipo en un 35%.',
      en: 'Reduced loading time by 60%, from 8s to 3.2s, improving team productivity by 35%.'
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    demoUrl: '#',
    codeUrl: 'https://github.com/xcedeno',
    featured: true,
  },
  {
    id: 'gestion-app',
    title: { es: 'App de Gestión Hotelera', en: 'Hotel Management App' },
    image: '/assets/images/project-gestion.jpg',
    problem: {
      es: 'Un hotel de 120 habitaciones gestionaba inventarios, check-ins y reportes con hojas de cálculo, con errores frecuentes y procesos de 2+ horas diarias.',
      en: 'A 120-room hotel managed inventory, check-ins, and reports with spreadsheets, leading to frequent errors and daily processes taking 2+ hours.'
    },
    solution: {
      es: 'Desarrollé un sistema full stack con React, Node.js y PostgreSQL. Implementé dashboards en tiempo real, control de inventario automatizado y generación de reportes PDF.',
      en: 'Developed a full-stack system with React, Node.js, and PostgreSQL. Implemented real-time dashboards, automated inventory control, and PDF report generation.'
    },
    result: {
      es: 'Automatización que ahorra 10 horas semanales al equipo operativo y eliminó el 95% de errores de inventario.',
      en: 'Automation that saves the operations team 10 hours a week and eliminated 95% of inventory errors.'
    },
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
    demoUrl: '#',
    codeUrl: 'https://github.com/xcedeno',
    featured: false,
  },
  {
    id: 'api-rest',
    title: { es: 'API REST de Alta Disponibilidad', en: 'High Availability REST API' },
    image: '/assets/images/project-api.jpg',
    problem: {
      es: 'El backend monolítico de un sistema de notificaciones no soportaba el crecimiento de usuarios, cayendo bajo carga en horarios pico.',
      en: 'The monolithic backend of a notification system could not support user growth, crashing under load during peak hours.'
    },
    solution: {
      es: 'Diseñé una API REST con arquitectura de microservicios en Node.js, implementé rate limiting, colas de mensajes con Redis y despliegue con contenedores Docker.',
      en: 'Designed a REST API with a microservices architecture in Node.js, implemented rate limiting, message queues with Redis, and containerized deployment with Docker.'
    },
    result: {
      es: 'Maneja 10k requests/minuto con 99.9% de uptime y escalamiento horizontal automático.',
      en: 'Handles 10k requests/minute with 99.9% uptime and automatic horizontal scaling.'
    },
    technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'AWS'],
    demoUrl: '#',
    codeUrl: 'https://github.com/xcedeno',
    featured: false,
  },
];
