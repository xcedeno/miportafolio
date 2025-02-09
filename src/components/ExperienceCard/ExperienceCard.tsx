import React  from 'react';
import './ExperienceCard.css';

interface ExperienceCardProps {
    company: string;
    image: string;
    position: string;
    duration: string;
    description: string[];
    isExpanded: boolean;
    onClick: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, image, position, duration, description, isExpanded, onClick }) => {


    return (
        <div className={`experience-card ${isExpanded ? 'expanded' : ''}`} onClick={onClick}>
            <div
                className="experience-card-background"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="experience-card-content">
                <h3>{company}</h3>
                <p>{position}</p>
                <p>{duration}</p>
                {isExpanded && (
                    <div className="experience-card-description">
                        {description.map((line, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: line }}></p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExperienceCard;