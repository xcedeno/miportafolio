import React from 'react';
import styled from 'styled-components';
import NetworkingGuideCard from '../components/GuideCard/NetworkingGuideCard';

const ScreenContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #fff, var(--primary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
  border-left: 4px solid var(--primary-color);
  padding-left: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const NetworkingScreen: React.FC = () => {
    const networkingProjects = [
        {
            title: 'Configuración de una Red LAN',
            description: 'Guía detallada para diseñar y configurar una red LAN eficiente en un entorno empresarial.',
            technologies: ['mikrotik', 'tplink'], // Adjusted for probable generic filenames
            githubLink: 'https://github.com/tu-usuario/configuracion-lan',
        },
        {
            title: 'Seguridad en Redes: Firewalls y VPNs',
            description: 'Implementación de reglas de firewall avanzadas y túneles VPN para asegurar comunicaciones.',
            technologies: ['mikrotik', 'service'],
            githubLink: 'https://github.com/tu-usuario/seguridad-redes',
        },
        {
            title: 'Configuración de un Servidor DHCP',
            description: 'Tutorial paso a paso para desplegar un servidor DHCP robusto y administración de leases.',
            technologies: ['linux', 'service'],
            githubLink: 'https://github.com/tu-usuario/servidor-dhcp',
        },
        {
            title: 'Monitoreo de Red con Nagios',
            description: 'Configuración de Nagios para el monitoreo proactivo de dispositivos y servicios de red.',
            technologies: ['service', 'linux'], // Using 'service' as generic icon placeholders if exact ones missing
            githubLink: 'https://github.com/tu-usuario/monitoreo-nagios',
        },
    ];

    return (
        <ScreenContainer>
            <Header>
                <MainTitle>Redes y Configuración</MainTitle>
                <Description>
                    Bienvenido a la sección de redes. Aquí encontrarás guías, tutoriales y proyectos
                    relacionados con la configuración y administración de redes.
                </Description>
            </Header>

            <SectionTitle>Proyectos Destacados</SectionTitle>

            <Grid>
                {networkingProjects.map((project, index) => (
                    <NetworkingGuideCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        githubLink={project.githubLink}
                    />
                ))}
            </Grid>
        </ScreenContainer>
    );
};

export default NetworkingScreen;
