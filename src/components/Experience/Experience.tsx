import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '../../data/experience';
import { useLanguage } from '../../context/LanguageContext';
import './Experience.css';

const Experience: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <section className="experience section" id="experiencia">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">{t('experience.title')}</h2>
        <p className="section-subtitle">
          {t('experience.subtitle')}
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className="timeline__item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="timeline__dot"></div>
              
              <div className="timeline__content">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__title">{exp.title[language as keyof typeof exp.title]}</h3>
                    <div className="timeline__company">
                      <Briefcase size={16} />
                      {exp.company}
                    </div>
                  </div>
                  
                  <div className="timeline__meta">
                    <span className="timeline__date">
                      <Calendar size={14} />
                      {exp.period[language as keyof typeof exp.period]}
                    </span>
                    <span className="timeline__type">{exp.type[language as keyof typeof exp.type]}</span>
                  </div>
                </div>

                <div className="timeline__body">
                  <ul className="timeline__list">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="timeline__list-item">
                        {achievement[language as keyof typeof achievement]}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="timeline__tech">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="timeline__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
