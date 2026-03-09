import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Activity, TrendingUp, CheckCircle } from 'lucide-react';
import { projects } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';
import './Projects.css';

const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <section className="projects section" id="proyectos">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">{t('projects.title')}</h2>
        <p className="section-subtitle">
          {t('projects.subtitle')}
        </p>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <motion.article 
              key={project.id} 
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="project-card__image-container">
                {project.featured && (
                  <span className="project-card__featured-badge">{t('projects.featured')}</span>
                )}
                <img 
                  src={project.image} 
                  alt={typeof project.title === 'string' ? project.title : project.title[language as keyof typeof project.title]} 
                  className="project-card__image"
                  onError={(e) => {
                    // Fallback images based on index
                    const fallbacks = [
                      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
                    ];
                    e.currentTarget.src = fallbacks[index % fallbacks.length];
                  }}
                />
                <div className="project-card__overlay">
                  {project.demoUrl && project.demoUrl !== '#' && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-card__link" title={t('projects.viewDemo')}>
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.codeUrl && (
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="project-card__link" title={t('projects.viewCode')}>
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-card__content">
                <h3 className="project-card__title">{typeof project.title === 'string' ? project.title : project.title[language as keyof typeof project.title]}</h3>
                
                <div className="project-card__details">
                  <div className="project-card__detail-item">
                    <h4><Activity size={16} className="project__icon-problem" /> {t('projects.problem')}</h4>
                    <p>{project.problem[language as keyof typeof project.problem]}</p>
                  </div>
                  
                  <div className="project-card__detail-item">
                    <h4><CheckCircle size={16} className="project__icon-solution" /> {t('projects.solution')}</h4>
                    <p>{project.solution[language as keyof typeof project.solution]}</p>
                  </div>
                  
                  <div className="project-card__result project-card__detail-item">
                    <h4><TrendingUp size={16} className="project__icon-result" /> {t('projects.result')}</h4>
                    <p>{project.result[language as keyof typeof project.result]}</p>
                  </div>
                </div>

                <div className="project-card__tech">
                  {project.technologies.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;