import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Contact.css';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="contact" id="contacto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="section-subtitle">
          {t('contact.subtitle')}
        </p>

        <div className="contact__container">
          <motion.div 
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="mailto:xcedeno281@gmail.com" className="contact__card">
              <div className="contact__card-icon">
                <Mail size={24} />
              </div>
              <div className="contact__card-content">
                <h3>Email</h3>
                <p>xcedeno281@gmail.com</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/xavier-cede%C3%B1o-02a750243" target="_blank" rel="noopener noreferrer" className="contact__card">
              <div className="contact__card-icon">
                <Linkedin size={24} />
              </div>
              <div className="contact__card-content">
                <h3>LinkedIn</h3>
                <p>Xavier Cedeño</p>
              </div>
            </a>

            <a href="https://github.com/xcedeno" target="_blank" rel="noopener noreferrer" className="contact__card">
              <div className="contact__card-icon">
                <Github size={24} />
              </div>
              <div className="contact__card-content">
                <h3>GitHub</h3>
                <p>@xcedeno</p>
              </div>
            </a>
          </motion.div>

          <motion.form 
            className="contact__form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert(t('contact.formDemoAlert'));
            }}
          >
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__label">{t('contact.nameLabel')}</label>
              <input type="text" id="name" className="contact__input" placeholder={t('contact.namePlaceholder')} required />
            </div>
            
            <div className="contact__form-group">
              <label htmlFor="email" className="contact__label">{t('contact.emailLabel')}</label>
              <input type="email" id="email" className="contact__input" placeholder={t('contact.emailPlaceholder')} required />
            </div>
            
            <div className="contact__form-group">
              <label htmlFor="message" className="contact__label">{t('contact.messageLabel')}</label>
              <textarea id="message" className="contact__textarea" placeholder={t('contact.messagePlaceholder')} required></textarea>
            </div>
            
            <button type="submit" className="contact__submit">
              {t('contact.submit')} <Send size={18} />
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
