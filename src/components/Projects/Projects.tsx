import React from 'react';
import './Projects.css';
import GuideCard from '../GuideCard/GuideCard';

interface ProjectsProps {
className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
// Datos dinámicos para las tarjetas
const categories = [
{
    title: 'Programación',
    description: 'Explora proyectos y guías relacionados con desarrollo de software.',
    link: '/programming',
},
{
    title: 'Redes',
    description: 'Aprende sobre configuraciones de redes y seguridad informática.',
    link: '/networking',
},
{
    title: 'Diseño Gráfico',
    description: 'Descubre recursos y proyectos de diseño gráfico y UX/UI.',
    link: '/graphic-design',
},
{
    title: 'Base de Datos',
    description: 'Guías y proyectos sobre administración y diseño de bases de datos.',
    link: '/databases',
},
];

return (
<section id="projects" className={className}>
    <h2>Projects</h2>
    <div className="projects-grid">
    {categories.map((category, index) => (
        <GuideCard
        key={index}
        title={category.title}
        description={category.description}
        link={category.link}
        />
    ))}
    </div>
</section>
);
};

export default Projects;