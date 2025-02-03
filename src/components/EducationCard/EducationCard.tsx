import React from 'react';
import './EducationCard.css';

interface EducationCardProps {
    institution: string;
    image: string;
    degree: string;
    duration: string;
    description: string;
    isExpanded: boolean;
    onClick: () => void;
}

const EducationCard: React.FC<EducationCardProps> = ({ institution, image, degree, duration, description, isExpanded, onClick }) => {
    return (
        <div className={`education-card ${isExpanded ? 'expanded' : ''}`} onClick={onClick}>
            <div
                className="education-card-background"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="education-card-content">
                <h3>{institution}</h3>
                <p>{degree}</p>
                <p>{duration}</p>
                {isExpanded && (
                    <div className="education-card-description">
                        <p>{description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EducationCard;