import React, { useState } from 'react';
import './Skills.css';
import { skillsData } from '../../data/SkillsData';

interface SkillsProps {
className?: string;
}

const Skills: React.FC<SkillsProps> = ({ className }) => {
const [expandedSkill, setExpandedSkill] = useState<number | null>(null);

// Función para manejar el clic en una tarjeta
const handleSkillClick = (index: number) => {
if (expandedSkill === index) {
    setExpandedSkill(null); // Si ya está expandido, lo contrae
} else {
    setExpandedSkill(index); // Expande la tarjeta seleccionada
}
};

return (
<section id="skills" className={className}>
    <h2>Habilidades</h2>
    <div className="skills-container">
    {skillsData.map((skill, index) => (
        <div
        key={index}
        className={`skill-card ${expandedSkill === index ? 'expanded' : ''}`}
        onClick={() => handleSkillClick(index)}
        >
        <div
            className="skill-icon"
            style={{ backgroundImage: `url(${skill.icon})` }}
        >
            
        </div>
        <span>{skill.name}</span>
        {expandedSkill === index && (
            <div className="skills-list">
            <ul>
                {skill.skillsList.map((item, i) => (
                <li key={i}>{item}</li>
                ))}
            </ul>
            </div>
        )}
        </div>
    ))}
    </div>
</section>
);
};

export default Skills;