import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<string, { es: string; en: string }> = {
  // Navbar
  'nav.home': { es: 'Inicio', en: 'Home' },
  'nav.about': { es: 'Sobre Mí', en: 'About' },
  'nav.portfolio': { es: 'Portafolio', en: 'Portfolio' },
  'nav.skills': { es: 'Habilidades', en: 'Skills' },
  'nav.download_cv': { es: 'Descargar CV', en: 'Download CV' },
  
  // Hero
  'hero.greeting': { es: 'HOLA SOY', en: 'HELLO I\'M' },
  'hero.role': { es: 'Desarrollador Web y Analista de Sistemas', en: 'Web Developer & Systems Analyst' },
  'hero.description': { 
    es: 'Construyo aplicaciones web de alta calidad con un enfoque en diseño moderno, código limpio y experiencias de usuario excepcionales.', 
    en: 'I build high-quality web applications with a focus on modern design, clean code, and exceptional user experiences.' 
  },
  
  // Footer
  'footer.rights': { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },

  // Projects Generic
  'projects.title': { es: 'Mi Portafolio', en: 'My Portfolio' },
  'projects.view': { es: 'Ver Proyectos', en: 'View Projects' },

  // Skills Generic
  'skills.title': { es: 'Mis Habilidades', en: 'My Skills' },

  // About Generic
  'about.title': { es: 'Sobre Mí', en: 'About Me' },
  'about.exp': { es: 'Experiencia', en: 'Experience' },
  'about.edu': { es: 'Educación', en: 'Education' },
  'about.description': {
    es: 'Analista de Sistemas con más de 10 años de experiencia en soporte técnico, configuración de redes y mantenimiento de infraestructura. Apasionado por la innovación tecnológica y el aprendizaje continuo.',
    en: 'Systems Analyst with over 10 years of experience in technical support, network configuration, and infrastructure maintenance. Passionate about technological innovation and continuous learning.'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es'); // Default to Spanish as requested "traduce todo lo que este en español a ingles" implication is start with ES or allow switch.

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
