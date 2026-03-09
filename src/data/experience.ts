import { DualLanguageText } from './projects';

export interface ExperienceItem {
  id: string;
  title: DualLanguageText;
  company: string;
  period: DualLanguageText;
  type: DualLanguageText;
  achievements: DualLanguageText[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'hotel-ikin',
    title: { es: 'Analista de Sistemas', en: 'Systems Analyst' },
    company: 'Hotel Ikin',
    period: { es: 'Enero 2020 — Diciembre 2022', en: 'January 2020 — December 2022' },
    type: { es: 'Presencial', en: 'On-site' },
    achievements: [
      {
        es: 'Implementé un sistema de gestión de inventario que redujo las discrepancias de stock en un 95% y automatizó los reportes diarios.',
        en: 'Implemented an inventory management system that reduced stock discrepancies by 95% and automated daily reporting.'
      },
      {
        es: 'Migré la infraestructura de servidores a una arquitectura virtualizada, reduciendo costos operativos en un 30%.',
        en: 'Migrated server infrastructure to a virtualized architecture, reducing operating costs by 30%.'
      },
      {
        es: 'Desarrollé dashboards en tiempo real que mejoraron la toma de decisiones del equipo directivo, reduciendo el tiempo de respuesta operativa en un 40%.',
        en: 'Developed real-time dashboards that improved management decision-making, reducing operational response time by 40%.'
      }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Linux', 'Docker'],
  },
  {
    id: 'pc-service',
    title: { es: 'Analista de Soporte Técnico', en: 'Technical Support Analyst' },
    company: 'Pc Service Center',
    period: { es: 'Marzo 2018 — Diciembre 2019', en: 'March 2018 — December 2019' },
    type: { es: 'Presencial', en: 'On-site' },
    achievements: [
      {
        es: 'Resolví más de 500 incidencias de hardware y software con un índice de satisfacción del cliente del 98%.',
        en: 'Resolved over 500 hardware and software incidents with a 98% customer satisfaction rate.'
      },
      {
        es: 'Diseñé e implementé redes LAN/WAN para 12 empresas, reduciendo tiempos de inactividad en un 60%.',
        en: 'Designed and implemented LAN/WAN networks for 12 companies, reducing downtime by 60%.'
      },
      {
        es: 'Creé un sistema de tickets interno que mejoró el seguimiento de casos y redujo el tiempo promedio de resolución en un 45%.',
        en: 'Created an internal ticketing system that improved case tracking and reduced average resolution time by 45%.'
      }
    ],
    technologies: ['Networking', 'Windows Server', 'MikroTik', 'VPN', 'Firewall'],
  },
  {
    id: 'procesadora-karibe',
    title: { es: 'Sub-Gerente de Producción', en: 'Assistant Production Manager' },
    company: 'Procesadora Karibe C.A',
    period: { es: 'Marzo 2018 — Diciembre 2019', en: 'March 2018 — December 2019' },
    type: { es: 'Presencial', en: 'On-site' },
    achievements: [
      {
        es: 'Lideré un equipo de 15 personas, optimizando procesos de producción que incrementaron la eficiencia en un 25%.',
        en: 'Led a 15-person team, optimizing production processes that increased efficiency by 25%.'
      },
      {
        es: 'Diseñé el branding y etiquetado de 8 productos, contribuyendo a un aumento del 20% en ventas.',
        en: 'Designed branding and labeling for 8 products, contributing to a 20% increase in sales.'
      },
      {
        es: 'Implementé controles de calidad digital que redujeron los defectos de producción en un 35%.',
        en: 'Implemented digital quality controls that reduced production defects by 35%.'
      }
    ],
    technologies: ['Gestión de Proyectos', 'Control de Calidad', 'Diseño', 'Logística'],
  },
];
