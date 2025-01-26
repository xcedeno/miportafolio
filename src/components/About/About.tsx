import React from 'react';
import './About.css';

interface AboutProps {
className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
return (
<section id="about" className={className}>
    <h2>Acerca de Mi</h2>
    <p>Soy un profesional en soporte técnico con amplia experiencia en el área informática. Mi especialidad es ofrecer soluciones efectivas para problemas de software y hardware de equipos informáticos. Además, cuento con experiencia en el mantenimiento y configuración de ordenadores, redes alámbricas e inalámbricas. Me mantengo actualizado sobre las últimas tendencias tecnológicas y tengo un enfoque constante en el aprendizaje continuo..</p>
</section>
);
};

export default About;