import React, { useState } from 'react';
import './About.css';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import EducationCard from '../EducationCard/EducationCard';
import { experienceData } from '../../data/ExperienceData'; // Ruta actualizada
import { educationData } from '../../data/EducationData'; // Ruta actualizada

interface AboutProps {
    className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [isExpandedEducation, setIsExpandedEducation] = useState<boolean>(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleExpandedEducation = () => {
        setIsExpandedEducation(!isExpandedEducation);
    };

    return (
        <section id="about" className={className}>
            <h2>Acerca de Mí</h2>
            <p>
                Soy un profesional en soporte técnico con amplia experiencia en el área informática. Mi
                especialidad es ofrecer soluciones efectivas para problemas de software y hardware de equipos
                informáticos. Además, cuento con experiencia en el mantenimiento y configuración de
                ordenadores, redes alámbricas e inalámbricas. Me mantengo actualizado sobre las últimas
                tendencias tecnológicas y tengo un enfoque constante en el aprendizaje continuo.
            </p>
            <div className="experience-section">
                <button onClick={toggleExpanded} className="experience-toggle-button">
                    Experiencia Laboral {isExpanded ? '▲' : '▼'}
                </button>
                <div className={`experience-cards ${isExpanded ? 'expanded' : ''}`}>
                    {experienceData.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            company={exp.company}
                            image={exp.image}
                            position={exp.position}
                            duration={exp.duration}
                            description={exp.description}
                        />
                    ))}
                </div>
            </div>
            <div className="education-section">
                <button onClick={toggleExpandedEducation} className="education-toggle-button">
                    Formación Profesional {isExpandedEducation ? '▲' : '▼'}
                </button>
                <div className={`education-cards ${isExpandedEducation ? 'expanded' : ''}`}>
                    {educationData.map((edu, index) => (
                        <EducationCard
                            key={index}
                            institution={edu.institution}
                            image={edu.image}
                            degree={edu.degree}
                            duration={edu.duration}
                            description={edu.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;