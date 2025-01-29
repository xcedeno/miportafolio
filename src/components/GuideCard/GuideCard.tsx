import React from 'react';
import './GuideCard.css';

interface GuideCardProps {
title: string;
description: string;
link: string;
image: string; 
}

const GuideCard: React.FC<GuideCardProps> = ({ title, description, link, image }) => {
return (
<div className="guide-card">
<img src={image} alt={title} className="guide-card-image" />
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} className="guide-card-link">
    Ver más
    </a>
</div>
);
};

export default GuideCard;