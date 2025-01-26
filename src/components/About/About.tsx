import React, { useState } from 'react';
import './About.css';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import EducationCard from '../EducationCard/EducationCard';

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

// Datos de experiencia laboral
const experienceData = [
{
    company: 'Hotel Ikin',
    image: '/src/assets/hotel-ikin.jpg', // Ruta al logo de Hotel Ikin
    position: 'Analista de Sistemas',
    duration: 'Enero 2020 - Diciembre 2022',
    description:
    'Brindé soporte técnico a usuarios internos, resolviendo problemas de hardware y software, y manteniendo la infraestructura de red.',
},
{
    company: 'Procesadora Karibe C.A',
    image: '/src/assets/procesadora-karibe.jpg', // Ruta al logo de otra empresa
    position: 'Sub-Gerente de Produccion',
    duration: 'Marzo 2018 - Diciembre 2019',
    description:
    'Configuré y mantuve redes alámbricas e inalámbricas, asegurando la conectividad y seguridad de la red.',
},
{
    company: 'Pc Service Center',
    image: '/src/assets/pc-service-center.jpg', // Ruta al logo de otra empresa
    position: 'Analista de Soporte Técnico',
    duration: 'Marzo 2018 - Diciembre 2019',
    description:
    'Configuré y mantuve redes alámbricas e inalámbricas, asegurando la conectividad y seguridad de la red.',
},
{
    company: 'Sigo S.A',
    image: '/src/assets/sigosa.jpg', // Ruta al logo de otra empresa
    position: 'Asistente de ventas y servicios',
    duration: 'Marzo 2018 - Diciembre 2019',
    description:
    'Configuré y mantuve redes alámbricas e inalámbricas, asegurando la conectividad y seguridad de la red.',
},
{
    company: 'Fimasis Soluciones Import',
    image: '/src/assets/fimasis.jpg', // Ruta al logo de otra empresa
    position: 'Analista de Soporte Técnico',
    duration: 'Marzo 2018 - Diciembre 2019',
    description:
    'Configuré y mantuve redes alámbricas e inalámbricas, asegurando la conectividad y seguridad de la red.',
},
{
    company: 'A & R Technology, C.a',
    image: '/src/assets/ayr-technology.jpg', // Ruta al logo de otra empresa
    position: 'Analista de Soporte Técnico',
    duration: 'Marzo 2018 - Diciembre 2019',
    description:
    'Configuré y mantuve redes alámbricas e inalámbricas, asegurando la conectividad y seguridad de la red.',
},
];
// Datos de formación profesional
const educationData = [
{
    institution: 'Instituto Universitario de Tecnologia Del Mar',
    image: '/src/assets/iutemar.jpg', // Ruta al logo de la universidad
    degree: 'T.S.U en Tecnologia Naval Mencion Navegacion y Pesca',
    duration: '2025',
    description:
    'Estudié una licenciatura en informática con enfoque en desarrollo de software y administración de redes.',
},
{
    institution: 'Universidad Nacional Experimental de La Fuerza Armada',
    image: '/src/assets/unefa.jpg', // Ruta al logo del instituto
    degree: 'Ingeniero En Sistemas',
    duration: '2025',
    description:
    'Obtuve una certificación en redes y seguridad informática, especializándome en firewalls y VPNs.',
},
{
    institution: 'Escuela Tecnica Industrial Alejandro Hernandez',
    image: '/src/assets/eti.jpg', // Ruta al logo del instituto
    degree: 'Tecnico Medio en Electricidad',
    duration: '2003',
    description:
    'Obtuve una certificación en redes y seguridad informática, especializándome en firewalls y VPNs.',
},
];

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
    {/* Sección de Formación Profesional */}
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