import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './ProgrammingGuideCard.css';

interface ProgrammingGuideCardProps {
title: string;
description: string;
technologies: string[]; // Lista de tecnologías (iconos)
githubLink: string; // Enlace al repositorio de GitHub
}

const ProgrammingGuideCard: React.FC<ProgrammingGuideCardProps> = ({ title, description, technologies, githubLink }) => {
return (
    <div>
<div className="programming-guide-card">
    <div className="programming-guide-card-content">
    <h3>{title}</h3>
    <p>{description}</p>
    </div>
    <div className="programming-guide-card-icons">
    {technologies.map((tech, index) => (
        <img key={index} src={`/src/assets/${tech}.png`} alt={tech} className="tech-icon" />
    ))}
    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-icon" title="GitHub Repository">
        <FaGithub />
    </a>
    </div>
</div>
</div>
);
};

export default ProgrammingGuideCard;