import React, { useState } from 'react';
import { experienceData } from '../../data/ExperienceData';
import { educationData } from '../../data/EducationData';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import EducationCard from '../EducationCard/EducationCard';
import './About.css';
interface AboutProps {
    className?: string;
  }


const About: React.FC<AboutProps> = ({ className }) => {
    const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);
    const [expandedEducationIndex, setExpandedEducationIndex] = useState<number | null>(null);

    const toggleExpanded = (index: number) => {
        setExpandedCardIndex(expandedCardIndex === index ? null : index);
    };

    const toggleExpandedEducation = (index: number) => {
        setExpandedEducationIndex(expandedEducationIndex === index ? null : index);
    };

    return (
        <section id="about" className={className}>
            <h2>Acerca de Mí</h2>
            <p>
                Analista de sistemas con más de 10 años de experiencia en soporte técnico, 
                configuración de redes y mantenimiento de infraestructura tecnológica. 
                Especializado en la resolución de problemas de hardware y software, 
                implementación de redes alámbricas e inalámbricas, y gestión de servidores. 
                Apasionado por la innovación tecnológica y el aprendizaje continuo. 
                Busco oportunidades para contribuir en proyectos desafiantes y seguir creciendo profesionalmente.
            </p>
            <div className="experience-section">
                <button className="experience-toggle-button" onClick={() => toggleExpanded(-1)}>
                    Experiencia {expandedCardIndex !== null ? '▲' : '▼'}
                </button>
                <div className={`experience-cards ${expandedCardIndex !== null ? 'expanded' : ''}`}>
                    {experienceData.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            company={exp.company}
                            image={exp.image}
                            position={exp.position}
                            duration={exp.duration}
                            description={exp.description}
                            isExpanded={expandedCardIndex === index}
                            onClick={() => toggleExpanded(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="education-section">
                <button className="education-toggle-button" onClick={() => toggleExpandedEducation(-1)}>
                    Formación Profesional {expandedEducationIndex !== null ? '▲' : '▼'}
                </button>
                <div className={`education-cards ${expandedEducationIndex !== null ? 'expanded' : ''}`}>
                    {educationData.map((edu, index) => (
                        <EducationCard
                            key={index}
                            institution={edu.institution}
                            image={edu.image}
                            degree={edu.degree}
                            duration={edu.duration}
                            description={edu.description}
                            isExpanded={expandedEducationIndex === index}
                            onClick={() => toggleExpandedEducation(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;