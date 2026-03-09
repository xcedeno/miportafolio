import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.css';

const navItems = [
  { key: 'nav.home' as const, href: '#inicio' },
  { key: 'nav.projects' as const, href: '#proyectos' },
  { key: 'nav.experience' as const, href: '#experiencia' },
  { key: 'nav.about' as const, href: '#sobre-mi' },
  { key: 'nav.contact' as const, href: '#contacto' },
];

const Navbar: React.FC = () => {
  const { t, toggleLanguage, language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="navbar__logo" onClick={() => scrollTo('#inicio')}>
          X<span>C</span>
        </div>

        <ul className="navbar__links">
          {navItems.map(item => (
            <li key={item.href}>
              <button
                className="navbar__link"
                onClick={() => scrollTo(item.href)}
              >
                {t(item.key)}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button
            className="navbar__theme-toggle"
            onClick={toggleLanguage}
            aria-label="Cambiar idioma"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe size={18} />
          </button>
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a
            className="navbar__cta"
            href="/assets/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
            {t('nav.downloadCv')}
          </a>
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`navbar__mobile-menu${menuOpen ? ' open' : ''}`}>
        {navItems.map(item => (
          <button
            key={item.href}
            className="navbar__mobile-link"
            onClick={() => scrollTo(item.href)}
          >
            {t(item.key)}
          </button>
        ))}
        <a
          className="navbar__mobile-cta"
          href="/assets/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('nav.downloadCv')}
        </a>
      </div>
    </>
  );
};

export default Navbar;