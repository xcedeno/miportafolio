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
    image: 'https://cdn-icons-png.flaticon.com/512/1005/1005141.png'
},
{
    title: 'Redes',
    description: 'Aprende sobre configuraciones de redes y seguridad informática.',
    link: '/networking',
    image: 'https://cdn-icons-png.flaticon.com/512/2282/2282188.png',
},
{
    title: 'Diseño Gráfico',
    description: 'Descubre recursos y proyectos de diseño gráfico y UX/UI.',
    link: '/graphic-design',
    image: 'https://cdn-icons-png.flaticon.com/512/3242/3242257.png',
},
{
    title: 'Base de Datos',
    description: 'Guías y proyectos sobre administración y diseño de bases de datos.',
    link: '/databases',
    image: 'https://cdn-icons-png.flaticon.com/512/4492/4492311.png',
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
        image={category.image}
        />
    ))}
    </div>
</section>
);
};

export default Projects;