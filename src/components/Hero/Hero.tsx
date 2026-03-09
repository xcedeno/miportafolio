import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  const techStack = ['React', 'TypeScript', 'Node.js', 'Next.js', 'AWS', 'PostgreSQL'];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero__container">
        <motion.div 
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="hero__badge" variants={itemVariants}>
            <span className="hero__badge-dot"></span>
            {t('hero.available')}
          </motion.div>

          <motion.h1 className="hero__title" variants={itemVariants}>
            {t('hero.titleP1')} <span className="hero__title-accent">{t('hero.titleAccent')}</span>
          </motion.h1>

          <motion.p className="hero__subtitle" variants={itemVariants}>
            {t('hero.subtitle')}
          </motion.p>

          <motion.div className="hero__buttons" variants={itemVariants}>
            <button className="hero__btn-primary" onClick={() => scrollTo('#proyectos')}>
              {t('hero.viewProjects')} <ArrowRight size={18} />
            </button>
            <button className="hero__btn-secondary" onClick={() => scrollTo('#contacto')}>
              {t('hero.contact')} <Mail size={18} />
            </button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '0.75rem', fontWeight: 500 }}>
              {t('hero.mainStack')}
            </p>
            <div className="hero__tech-stack">
              {techStack.map(tech => (
                <span key={tech} className="hero__tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero__image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="hero__image-decor"></div>
          <div className="hero__image-container">
            {/* Replace with actual image later */}
            <img 
              src="/assets/images/xavier.jpg" 
              alt="Xavier Cedeño" 
              className="hero__image"
              onError={(e) => {
                // Fallback if image doesn't exist yet
                e.currentTarget.src = "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1000&auto=format&fit=crop";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
