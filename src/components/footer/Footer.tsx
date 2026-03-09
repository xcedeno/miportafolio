import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          Xavier<span>Cedeño</span>
        </div>
        
        <div className="footer__socials">
          <a href="https://linkedin.com/in/xavier-cede%C3%B1o-02a750243" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/xcedeno" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://x.com/xavitoxy" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Twitter">
            <Twitter size={18} />
          </a>
        </div>
        
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Xavier Cedeño. {t('footer.rights')}
        </p>
        
        <p className="footer__made-with">
          {t('footer.madeWith')} <span className="footer__heart">❤️</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;