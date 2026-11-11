export interface DualLanguageText {
  es: string;
  en: string;
}

export interface Project {
  id: string;
  title: DualLanguageText | string;
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
    id: 'enterprise-backend',
    title: { 
      es: 'Enterprise Event-Driven Backend (Spring Boot & Kafka)', 
      en: 'Enterprise Event-Driven Backend (Spring Boot & Kafka)' 
    },
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    problem: { 
      es: 'Los sistemas de facturación y cobros de alta transaccionalidad sufren bloqueos y lentitud cuando operan de forma monolítica y síncrona ante picos de demanda.',
      en: 'High-transaction billing and payment systems suffer bottlenecks and timeouts when operating synchronously as a monolith during peak traffic.'
    },
    solution: {
      es: 'Diseñé e implementé una arquitectura de microservicios orientada a eventos con Spring Boot 4 (Java 21 LTS), Apache Kafka (KRaft), Spring Data JPA/PostgreSQL, observabilidad completa (Actuator/Prometheus) y despliegue con Docker y Terraform.',
      en: 'Architected and built an event-driven microservice with Spring Boot 4 (Java 21 LTS), Apache Kafka (KRaft), Spring Data JPA/PostgreSQL, full observability (Actuator/Prometheus), and Docker/Terraform deployment.'
    },
    result: {
      es: 'Procesamiento de pagos y emisión de eventos totalmente desacoplado y asíncrono con 100% de éxito en pruebas automatizadas unitarias e integración (JUnit 5 + Mockito).',
      en: 'Fully decoupled asynchronous payment processing and event dispatching with 100% automated test pass rate (JUnit 5 + Mockito).'
    },
    technologies: ['Java 21', 'Spring Boot 4', 'Apache Kafka', 'PostgreSQL', 'Docker', 'Kubernetes', 'Prometheus'],
    demoUrl: 'http://localhost:8080',
    codeUrl: 'https://github.com/xcedeno/enterprise-backend',
    featured: true,
  },
  {
    id: 'simple-tv-app',
    title: { 
      es: 'Simple TV & Hospitality Suite', 
      en: 'Simple TV & Hospitality Operations Suite' 
    },
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    problem: {
      es: 'La gestión operativa hotelera (planimetría de habitaciones, cargos por consumo, automatización de mensajería y control de huéspedes) requería múltiples plataformas desconectadas y procesos manuales.',
      en: 'Hotel operations (room planimetry, guest billing, messaging workflows, and guest tracking) relied on multiple disconnected platforms and manual error-prone routines.'
    },
    solution: {
      es: 'Desarrollé una suite integral con React, Vite, Supabase (PostgreSQL), automatizaciones con n8n/WhatsApp, bots de Telegram e integración directa con microservicio de pagos enterprise.',
      en: 'Developed an all-in-one suite with React, Vite, Supabase (PostgreSQL), n8n/WhatsApp workflow automations, Telegram bots, and direct integration with an enterprise payments microservice.'
    },
    result: {
      es: 'Control visual en tiempo real de habitaciones y cargos, suite de pruebas automatizadas con Vitest (8/8 tests aprobados) y agilización del 70% en atención al huésped.',
      en: 'Real-time visual room and charges control, automated Vitest testing suite (8/8 tests passing), and 70% faster guest response time.'
    },
    technologies: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Vitest', 'n8n'],
    demoUrl: '#',
    codeUrl: 'https://github.com/xcedeno',
    featured: true,
  },
  {
    id: 'xc-condominios',
    title: { 
      es: 'XC-Condominios Management Portal', 
      en: 'XC-Condominios Residential Management Portal' 
    },
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
    problem: {
      es: 'La administración de condominios residenciales dependía de llamadas y hojas de cálculo para el registro de alícuotas, comprobantes bancarios y reportes de solvencia.',
      en: 'Residential condo management relied on phone calls and spreadsheets for tracking maintenance fees, bank transfer receipts, and debt statements.'
    },
    solution: {
      es: 'Construí un monorepo integral con portal administrativo en React, backend API server en Node.js, validación de comprobantes, balances automáticos y trazabilidad de alícuotas.',
      en: 'Engineered a monorepo featuring a React administration portal, Node.js API server, voucher verification, automated balance calculations, and resident payment ledgers.'
    },
    result: {
      es: 'Transparencia contable en tiempo real para residentes y reducción del 80% del tiempo operativo en conciliación de cobros mensuales.',
      en: 'Real-time financial transparency for residents and an 80% reduction in time spent on monthly payment reconciliation.'
    },
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    demoUrl: '#',
    codeUrl: 'https://github.com/xcedeno',
    featured: true,
  },
  {
    id: 'pesca-inteligente',
    title: { 
      es: 'Pesca Inteligente & Monitoreo Marino', 
      en: 'Smart Fishing & Oceanographic Platform' 
    },
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
    problem: {
      es: 'Operadores marítimos y pescadores carecían de información oceanográfica accesible en alta mar (temperatura superficial, clorofila y corrientes) para optimizar rutas de faena.',
      en: 'Marine operators and fishermen lacked accessible oceanographic data at sea (sea surface temperature, chlorophyll, currents) to plan efficient routes.'
    },
    solution: {
      es: 'Desarrollé una plataforma con FastAPI, PostGIS, procesamiento de datos satelitales Copernicus con Xarray/NetCDF4 y mapas interactivos con soporte offline-first.',
      en: 'Built an oceanographic intelligence platform using FastAPI, PostGIS, Copernicus satellite data processing via Xarray/NetCDF4, and offline-first maps.'
    },
    result: {
      es: 'Identificación certera de zonas de convergencia marina, optimización de combustible y navegación marítima más segura y productiva.',
      en: 'Accurate identification of marine convergence zones, fuel consumption optimization, and safer, higher-yield navigation.'
    },
    technologies: ['Python', 'FastAPI', 'PostGIS', 'Copernicus Marine', 'Leaflet', 'Docker'],
    demoUrl: '#',
    codeUrl: 'https://github.com/xcedeno',
    featured: false,
  },
  {
    id: 'calculadora',
    title: { 
      es: 'Calculadora Multi-Divisas & Recibos', 
      en: 'Multi-Currency Calculator & Receipt Generator' 
    },
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    problem: {
      es: 'Comercios y usuarios enfrentan lentitud e inconsistencias calculando conversiones en tiempo real entre múltiples monedas (tasas BCV y paralelas) y emitiendo comprobantes de compra.',
      en: 'Retail businesses and consumers face friction calculating real-time conversions across multiple currencies (official BCV vs parallel rates) and generating receipts.'
    },
    solution: {
      es: 'Creé una aplicación web y móvil híbrida con React y Capacitor, cálculo instantáneo de impuestos, soporte offline y generación directa de comprobantes en PDF e imagen.',
      en: 'Built a cross-platform mobile and web app with React and Capacitor, featuring instant tax calculations, robust offline caching, and direct PDF/image receipt generation.'
    },
    result: {
      es: 'Agilidad inmediata en punto de venta, cero dependencia de conectividad constante y total transparencia en transacciones comerciales.',
      en: 'Immediate point-of-sale efficiency, zero dependency on permanent connectivity, and transparent retail transaction records.'
    },
    technologies: ['React', 'Capacitor', 'TypeScript', 'Tailwind CSS', 'PWA'],
    demoUrl: '#',
    codeUrl: 'https://github.com/xcedeno',
    featured: false,
  },
];
