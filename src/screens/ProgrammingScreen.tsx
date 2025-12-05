import React from 'react';
import styled from 'styled-components';
import ProgrammingGuideCard from '../components/GuideCard/ProgrammingGuideCard';
import { useLanguage } from '../context/LanguageContext';

const ScreenContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #fff, var(--primary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
  border-left: 4px solid var(--primary-color);
  padding-left: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProgrammingScreen: React.FC = () => {
  const { language } = useLanguage();

  const projects = [
    {
      title: language === 'es' ? 'Aplicación Web con React y TypeScript' : 'Web App with React and TypeScript',
      description: language === 'es'
        ? 'Desarrollo de una aplicación web moderna con React y TypeScript, enfocada en la escalabilidad y mantenibilidad.'
        : 'Development of a modern web application with React and TypeScript, focused on scalability and maintainability.',
      technologies: ['react', 'typescript'],
      githubLink: 'https://github.com/tu-usuario/react-typescript-app',
    },
    {
      title: language === 'es' ? 'API REST con Node.js y Express' : 'REST API with Node.js and Express',
      description: language === 'es'
        ? 'Creación de una API RESTful robusta utilizando Node.js y Express para manejar peticiones de alto tráfico.'
        : 'Creation of a robust RESTful API using Node.js and Express to handle high-traffic requests.',
      technologies: ['js', 'nodejs'],
      githubLink: 'https://github.com/tu-usuario/node-express-api',
    },
    {
      title: language === 'es' ? 'Introducción a Python para Ciencia de Datos' : 'Intro to Python for Data Science',
      description: language === 'es'
        ? 'Colección de scripts y notebooks para el análisis de datos y modelado predictivo básico.'
        : 'Collection of scripts and notebooks for data analysis and basic predictive modeling.',
      technologies: ['python'],
      githubLink: 'https://github.com/tu-usuario/python-data-science',
    },
  ];

  return (
    <ScreenContainer>
      <Header>
        <MainTitle>{language === 'es' ? 'Programación' : 'Programming'}</MainTitle>
        <Description>
          {language === 'es'
            ? 'Bienvenido a la sección de programación. Aquí encontrarás guías, tutoriales y proyectos relacionados con el desarrollo de software.'
            : 'Welcome to the programming section. Here you will find guides, tutorials, and projects related to software development.'}
        </Description>
      </Header>

      <SectionTitle>{language === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}</SectionTitle>

      <Grid>
        {projects.map((project, index) => (
          <ProgrammingGuideCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
          />
        ))}
      </Grid>
    </ScreenContainer>
  );
};

export default ProgrammingScreen;