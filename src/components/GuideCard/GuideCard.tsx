import React from 'react';
import './GuideCard.css';

interface GuideCardProps {
title: string;
description: string;
link: string;
}

const GuideCard: React.FC<GuideCardProps> = ({ title, description, link }) => {
return (
<div className="guide-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} className="guide-card-link">
    Ver más
    </a>
</div>
);
};

export default GuideCard;