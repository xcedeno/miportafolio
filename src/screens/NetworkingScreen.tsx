import React from 'react';
import './NetworkingScreen.css';
import NetworkingGuideCard from '../components/GuideCard/NetworkingGuideCard';

const NetworkingScreen: React.FC = () => {
// Datos de proyectos destacados relacionados con redes
const networkingProjects = [
{
    title: 'Configuración de una Red LAN',
    description: 'Guía para configurar una red LAN en un entorno empresarial.',
    technologies: ['cisco', 'networking'],
    githubLink: 'https://github.com/tu-usuario/configuracion-lan',
},
{
    title: 'Seguridad en Redes: Firewalls y VPNs',
    description: 'Implementación de firewalls y VPNs para asegurar una red.',
    technologies: ['firewall', 'vpn'],
    githubLink: 'https://github.com/tu-usuario/seguridad-redes',
},
{
    title: 'Configuración de un Servidor DHCP',
    description: 'Pasos para configurar un servidor DHCP en una red.',
    technologies: ['dhcp', 'linux'],
    githubLink: 'https://github.com/tu-usuario/servidor-dhcp',
},
{
    title: 'Monitoreo de Red con Nagios',
    description: 'Configuración de Nagios para monitorear el estado de una red.',
    technologies: ['nagios', 'monitoring'],
    githubLink: 'https://github.com/tu-usuario/monitoreo-nagios',
},
];

return (
<div className="networking-screen">
    <h1>Redes y Configuración</h1>
    <p>
    Bienvenido a la sección de redes. Aquí encontrarás guías, tutoriales y proyectos
    relacionados con la configuración y administración de redes.
    </p>
    <div className="networking-content">
    <h2>Proyectos Destacados</h2>
    <div className="projects-grid">
        {networkingProjects.map((project, index) => (
        <NetworkingGuideCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
        />
        ))}
    </div>
    </div>
</div>
);
};

export default NetworkingScreen;