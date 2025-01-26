import React from 'react';
import './Projects.css';

interface ProjectsProps {
className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
return (
<section id="projects" className={className}>
    <h2>Projects</h2>
    <p>This is the projects section.</p>
</section>
);
};

export default Projects;