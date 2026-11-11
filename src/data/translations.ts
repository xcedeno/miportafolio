export type Language = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      experience: 'Experiencia',
      about: 'Sobre mí',
      contact: 'Contacto',
      downloadCv: 'Descargar CV',
    },
    hero: {
      available: 'Disponible para nuevos proyectos',
      titleP1: 'Desarrollo soluciones de software',
      titleAccent: 'escalables & resilientes',
      subtitle: 'Desarrollador Full Stack & AI-First. Especialista en React, TypeScript, Java (Spring Boot 4) y arquitecturas orientadas a eventos con Apache Kafka. Transformo requerimientos complejos en aplicaciones robustas y de alto rendimiento.',
      viewProjects: 'Ver proyectos',
      contact: 'Contactar',
      mainStack: 'Stack principal:',
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Soluciones reales de software donde aplico microservicios, eventos asíncronos y arquitecturas modernas.',
      featured: 'Destacado',
      viewDemo: 'Ver Demo',
      viewCode: 'Ver Código',
      problem: 'Problema',
      solution: 'Solución',
      result: 'Resultado',
    },
    experience: {
      title: 'Experiencia Profesional',
      subtitle: 'Trayectoria técnica en soporte, infraestructura, redes y desarrollo de software orientado a producción.',
    },
    about: {
      title: 'Sobre mí',
      subtitle: 'De soporte técnico e infraestructura a desarrollo de software: resolviendo problemas reales con ingeniería y IA.',
      p1Part1: 'Comencé mi carrera en el terreno de la infraestructura: conectando redes, diagnosticando fallas de hardware y administrando servidores y routers MikroTik en soporte técnico. Esa base operativa me enseñó una regla irrompible:',
      p1Highlight: 'la tecnología solo tiene valor si resuelve un problema humano y opera con estabilidad.',
      p2Part1: 'Hoy combino esa disciplina operativa con desarrollo Full Stack y un flujo acelerado de Ingeniería AI-First. Diseño microservicios en Java (Spring Boot 4) con Apache Kafka, interfaces modernas en React/TypeScript y bases de datos relacionales en PostgreSQL, priorizando siempre la',
      p2Highlight: 'resiliencia, la observabilidad y el impacto de negocio.',
      p2Part2: 'Mi formación autodidacta potenciada por herramientas avanzadas de IA me permite conceptualizar, probar con suites automatizadas y desplegar arquitecturas completas con agilidad y rigor.',
      downloadCv: 'Descargar CV Completo',
    },
    contact: {
      title: '¿Tienes un proyecto o posición en mente?',
      subtitle: 'Disponible para posiciones Full Stack, backend y proyectos de impacto. Escríbeme y conectemos directamente.',
      formDemoAlert: 'Para contactarme de forma directa y rápida, por favor usa mi correo o mi perfil de LinkedIn.',
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Email',
      emailPlaceholder: 'correo@ejemplo.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Hola Xavier, me gustaría conversar sobre...',
      submit: 'Enviar mensaje',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      madeWith: 'Construido con React & Antigravity +',
    }
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      about: 'About',
      contact: 'Contact',
      downloadCv: 'Download CV',
    },
    hero: {
      available: 'Available for new projects',
      titleP1: 'I engineer software solutions',
      titleAccent: 'that scale & endure',
      subtitle: 'Full Stack & AI-First Developer. Specializing in React, TypeScript, Java (Spring Boot 4), and event-driven architectures with Apache Kafka. Transforming complex requirements into resilient, high-performance systems.',
      viewProjects: 'View projects',
      contact: 'Contact me',
      mainStack: 'Main stack:',
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Real-world software solutions applying microservices, asynchronous event streaming, and modern web architectures.',
      featured: 'Featured',
      viewDemo: 'View Demo',
      viewCode: 'View Code',
      problem: 'Problem',
      solution: 'Solution',
      result: 'Result',
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'Technical background in IT support, networking infrastructure, and production software development.',
    },
    about: {
      title: 'About me',
      subtitle: 'From IT infrastructure to software engineering: solving real-world challenges through code and AI.',
      p1Part1: 'I started my journey in hands-on IT infrastructure: deploying networks, troubleshooting server hardware, and managing MikroTik routers. That operational foundation instilled an enduring principle:',
      p1Highlight: 'technology only matters when it reliably solves a real human problem.',
      p2Part1: 'Today I unite that operational discipline with Full Stack development and an accelerated AI-First workflow. I build Java (Spring Boot 4) microservices with Apache Kafka, interactive React/TypeScript UIs, and robust PostgreSQL data schemas, always focusing on',
      p2Highlight: 'resilience, observability, and tangible business value.',
      p2Part2: 'My self-directed learning, powered by cutting-edge AI coding environments, enables me to architect, thoroughly test with automated suites, and deploy production-ready systems with speed and precision.',
      downloadCv: 'Download Full CV',
    },
    contact: {
      title: 'Have an opportunity or project in mind?',
      subtitle: 'Available for Full Stack and backend roles or impactful projects. Reach out and let\'s connect directly.',
      formDemoAlert: 'For direct and immediate contact, please reach out via email or LinkedIn.',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Hi Xavier, let\'s talk about...',
      submit: 'Send message',
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Built with React & Antigravity +',
    }
  }
};

// Define types based on paths
export type TranslationKey = 
  | 'nav.home' | 'nav.projects' | 'nav.experience' | 'nav.about' | 'nav.contact' | 'nav.downloadCv'
  | 'hero.available' | 'hero.titleP1' | 'hero.titleAccent' | 'hero.subtitle' | 'hero.viewProjects' | 'hero.contact' | 'hero.mainStack'
  | 'projects.title' | 'projects.subtitle' | 'projects.featured' | 'projects.viewDemo' | 'projects.viewCode' | 'projects.problem' | 'projects.solution' | 'projects.result'
  | 'experience.title' | 'experience.subtitle'
  | 'about.title' | 'about.subtitle' | 'about.p1Part1' | 'about.p1Highlight' | 'about.p2Part1' | 'about.p2Highlight' | 'about.p2Part2' | 'about.downloadCv'
  | 'contact.title' | 'contact.subtitle' | 'contact.formDemoAlert' | 'contact.nameLabel' | 'contact.namePlaceholder' | 'contact.emailLabel' | 'contact.emailPlaceholder' | 'contact.messageLabel' | 'contact.messagePlaceholder' | 'contact.submit'
  | 'footer.rights' | 'footer.madeWith';
