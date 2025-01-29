import React, { useState } from 'react';
import './ExperienceCard.css';

interface ExperienceCardProps {
company: string;
image: string;
position: string;
duration: string;
description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
company,
image,
position,
duration,
description,
}) => {
const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

const toggleModal = () => {
setIsModalOpen(!isModalOpen);
};

// Clase dinámica para el fondo
const backgroundStyle = {
backgroundImage: `url(${image})`,
};

return (
<>
    <div className="experience-card" onClick={toggleModal}>
    <div
        className="experience-card-background"
        style={backgroundStyle} // Usamos la clase dinámica
    ></div>
    <div className="experience-card-content">
        <h3>{company}</h3>
        <p>{position}</p>
    </div>
    </div>

    {isModalOpen && (
    <div className="experience-modal-overlay" onClick={toggleModal}>
        <div className="experience-modal" onClick={(e) => e.stopPropagation()}>
        <h2>{company}</h2>
        <h3>{position}</h3>
        <p><strong>Duración:</strong> {duration}</p>
        <p><strong>Descripción:</strong> {description}</p>
        <button onClick={toggleModal}>Cerrar</button>
        </div>
    </div>
    )}
</>
);
};

export default ExperienceCard;