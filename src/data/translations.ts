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
      titleP1: 'Desarrollo aplicaciones web',
      titleAccent: 'que escalan',
      subtitle: 'Especialista en React, TypeScript y arquitecturas cloud. Transformo requerimientos complejos en productos digitales performantes y fáciles de mantener.',
      viewProjects: 'Ver proyectos',
      contact: 'Contactar',
      mainStack: 'Stack principal:',
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Casos de estudio donde resolví problemas de negocio complejos mediante ingeniería de software.',
      featured: 'Destacado',
      viewDemo: 'Ver Demo',
      viewCode: 'Ver Código',
      problem: 'Problema',
      solution: 'Solución',
      result: 'Resultado',
    },
    experience: {
      title: 'Experiencia Profesional',
      subtitle: 'Trayectoria desarrollando soluciones tecnológicas y liderando equipos técnicos orientados a resultados.',
    },
    about: {
      title: 'Sobre mí',
      subtitle: 'De soporte técnico a ingeniería de software: una carrera centrada en resolver problemas reales.',
      p1Part1: 'Empecé mi carrera conectando cables y configurando servidores MikroTik en Pc Service Center. Esa etapa me enseñó algo invaluable:',
      p1Highlight: 'la tecnología solo es útil si resuelve un problema humano.',
      p2Part1: 'Hoy, como desarrollador Full Stack, aplico esa misma filosofía. No solo escribo código en React o Node.js; diseño arquitecturas cloud, optimizo bases de datos y construyo interfaces de usuario pensando en la',
      p2Highlight: 'escalabilidad y el retorno de inversión (ROI)',
      p2Part2: 'del negocio. Mi trasfondo en infraestructura me permite abordar el ciclo de desarrollo completo, desde el frontend hasta el despliegue en AWS.',
      downloadCv: 'Descargar CV Completo',
    },
    contact: {
      title: '¿Tienes un proyecto en mente?',
      subtitle: 'Estoy disponible para oportunidades freelance y posiciones de tiempo completo. Escríbeme y charlemos sobre cómo puedo ayudarte.',
      formDemoAlert: 'Esta es una demostración de la interfaz. Para contactar, por favor usa los enlaces directos (Email/LinkedIn).',
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Juan Pérez',
      emailLabel: 'Email',
      emailPlaceholder: 'juan@ejemplo.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Hola, me gustaría hablar contigo sobre...',
      submit: 'Enviar mensaje',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      madeWith: 'Hecho con React +',
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
      titleP1: 'I build web applications',
      titleAccent: 'that scale',
      subtitle: 'Specialized in React, TypeScript, and cloud architectures. I transform complex requirements into performant and maintainable digital products.',
      viewProjects: 'View projects',
      contact: 'Contact me',
      mainStack: 'Main stack:',
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Case studies where I solved complex business problems through software engineering.',
      featured: 'Featured',
      viewDemo: 'View Demo',
      viewCode: 'View Code',
      problem: 'Problem',
      solution: 'Solution',
      result: 'Result',
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'Track record of developing technological solutions and leading technical teams driven by results.',
    },
    about: {
      title: 'About me',
      subtitle: 'From technical support to software engineering: a career focused on solving real problems.',
      p1Part1: 'I started my career connecting cables and configuring MikroTik servers at Pc Service Center. That stage taught me something invaluable:',
      p1Highlight: 'technology is only useful if it solves a human problem.',
      p2Part1: 'Today, as a Full Stack developer, I apply that same philosophy. I don\'t just write code in React or Node.js; I design cloud architectures, optimize databases, and build user interfaces thinking about the',
      p2Highlight: 'scalability and return on investment (ROI)',
      p2Part2: 'of the business. My background in infrastructure allows me to tackle the complete development cycle, from frontend to deployment on AWS.',
      downloadCv: 'Download Full CV',
    },
    contact: {
      title: 'Have a project in mind?',
      subtitle: 'I am available for freelance opportunities and full-time positions. Drop me a line and let\'s talk about how I can help you.',
      formDemoAlert: 'This is an interface demonstration. To get in touch, please use the direct links (Email/LinkedIn).',
      nameLabel: 'Full Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email',
      emailPlaceholder: 'john@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Hi, I would like to talk to you about...',
      submit: 'Send message',
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Made with React +',
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
