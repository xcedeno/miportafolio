import React from 'react';
import styled from 'styled-components';
import NetworkingGuideCard from '../components/GuideCard/NetworkingGuideCard';
import { useLanguage } from '../context/LanguageContext';

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
  const { language } = useLanguage();

  const networkingProjects = [
    {
      title: language === 'es' ? 'Configuración de una Red LAN' : 'LAN Network Configuration',
      description: language === 'es'
        ? 'Guía COMPLETA para configurar una red LAN en un entorno empresarial, incluyendo VLANs y enrutamiento.'
        : 'COMPLETE guide to configuring a LAN network in a business environment, including VLANs and routing.',
      technologies: ['cisco', 'networking'],
      githubLink: 'https://github.com/tu-usuario/configuracion-lan',
    },
    {
      title: language === 'es' ? 'Seguridad en Redes con Firewalls' : 'Network Security with Firewalls',
      description: language === 'es'
        ? 'Implementación de políticas de seguridad utilizando firewalls y VPNs para proteger la infraestructura.'
        : 'Implementation of security policies using firewalls and VPNs to protect infrastructure.',
      technologies: ['lock', 'security'],
      githubLink: 'https://github.com/tu-usuario/seguridad-redes',
    },
  ];

  return (
    <ScreenContainer>
      <Header>
        <MainTitle>{language === 'es' ? 'Redes y Telecomunicaciones' : 'Networking & Telecommunications'}</MainTitle>
        <Description>
          {language === 'es'
            ? 'Explora mis proyectos y laboratorios en el área de redes. Desde configuraciones básicas hasta arquitecturas complejas y seguridad.'
            : 'Explore my projects and labs in the networking area. From basic configurations to complex architectures and security.'}
        </Description>
      </Header>

      <SectionTitle>{language === 'es' ? 'Proyectos y Laboratorios' : 'Projects and Labs'}</SectionTitle>

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
