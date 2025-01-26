import React, { useState } from 'react';
import './EducationCard.css';

interface EducationCardProps {
institution: string;
image: string; // Ruta del logo de la institución
degree: string;
duration: string;
description: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
institution,
image,
degree,
duration,
description,
}) => {
const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

const toggleModal = () => {
setIsModalOpen(!isModalOpen);
};

return (
<>
    <div className="education-card" onClick={toggleModal}>
    <div
        className="education-card-background"
        style={{ backgroundImage: `url(${image})` }}
    ></div>
    <div className="education-card-content">
        <h3>{institution}</h3>
        <p>{degree}</p>
    </div>
    </div>

    {isModalOpen && (
    <div className="education-modal-overlay" onClick={toggleModal}>
        <div className="education-modal" onClick={(e) => e.stopPropagation()}>
        <h2>{institution}</h2>
        <h3>{degree}</h3>
        <p><strong>Año de Graduacion:</strong> {duration}</p>
        <p><strong>Descripción:</strong> {description}</p>
        <button onClick={toggleModal}>Cerrar</button>
        </div>
    </div>
    )}
</>
);
};

export default EducationCard;