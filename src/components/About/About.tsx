import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './About.css';

const About: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="about section" id="sobre-mi">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">{t('about.title')}</h2>
        <p className="section-subtitle">
          {t('about.subtitle')}
        </p>

        <div className="about__container">
          <motion.div 
            className="about__image-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="about__decor"></div>
            <div className="about__image-container">
              <img 
                src="/assets/images/about-photo.jpg" 
                alt="Xavier Cedeño trabajando" 
                className="about__image"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";
                }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="about__content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="about__text">
              {t('about.p1Part1')} <span className="about__highlight">{t('about.p1Highlight')}</span>
            </p>
            
            <p className="about__text">
              {t('about.p2Part1')} <span className="about__highlight">{t('about.p2Highlight')}</span> {t('about.p2Part2')}
            </p>

            <a href="/assets/cv.pdf" target="_blank" rel="noopener noreferrer" className="about__cta">
              <Download size={18} />
              {t('about.downloadCv')}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;