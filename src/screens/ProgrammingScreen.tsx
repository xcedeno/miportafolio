import React from 'react';
import './ProgrammingScreen.css';
import ProgrammingGuideCard from '../components/GuideCard/ProgrammingGuideCard';


const ProgrammingScreen: React.FC = () => {
// Datos de proyectos destacados
const projects = [
{
    title: 'Aplicación Web con React y TypeScript',
    description: 'Desarrollo de una aplicación web moderna con React y TypeScript.',
    technologies: ['react', 'typescript'],
    githubLink: 'https://github.com/tu-usuario/react-typescript-app',
},
{
    title: 'API REST con Node.js y Express',
    description: 'Creación de una API RESTful utilizando Node.js y Express.',
    technologies: ['nodejs', 'express'],
    githubLink: 'https://github.com/tu-usuario/node-express-api',
},
{
    title: 'Introducción a Python para Ciencia de Datos',
    description: 'Proyectos y tutoriales para aprender ciencia de datos con Python.',
    technologies: ['python'],
    githubLink: 'https://github.com/tu-usuario/python-data-science',
},
];

return (
    <div>
<div className="programming-screen">
    <h1>Programación</h1>
    <p>
    Bienvenido a la sección de programación. Aquí encontrarás guías, tutoriales y proyectos
    relacionados con el desarrollo de software.
    </p>
    <h2>Proyectos Destacados</h2>
    <div className="programming-content">
    
    <div className="projects-grid">
        {projects.map((project, index) => (
        <ProgrammingGuideCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
        />
        ))}
    </div>
    </div>
</div>
</div>
);
};

export default ProgrammingScreen;