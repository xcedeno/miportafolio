import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--primary-color);
    margin: 0.5rem auto 0;
    border-radius: 2px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: var(--bg-card);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border-color: var(--primary-color);
  }
`;

const IconWrapper = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  padding: 1.5rem;
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  filter: drop-shadow(0 0 10px rgba(108, 99, 255, 0.5));
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const CardDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const CardLink = styled.span`
  color: var(--primary-color);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  
  &::after {
    content: '→';
    font-size: 1.2rem;
    transition: transform 0.2s ease;
  }

  ${Card}:hover &::after {
    transform: translateX(5px);
  }
`;

interface ProjectsProps {
  className?: string; // Kept for compatibility if passed
}

const Projects: React.FC<ProjectsProps> = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: 'Programación',
      description: 'Explora proyectos y guías relacionados con desarrollo de software.',
      link: '/programming',
      image: 'https://cdn-icons-png.flaticon.com/512/1005/1005141.png'
    },
    {
      title: 'Redes',
      description: 'Aprende sobre configuraciones de redes y seguridad informática.',
      link: '/networking',
      image: 'https://cdn-icons-png.flaticon.com/128/2177/2177461.png',
    },
    {
      title: 'Diseño Gráfico',
      description: 'Descubre recursos y proyectos de diseño gráfico y UX/UI.',
      link: '/graphic-design',
      image: 'https://cdn-icons-png.flaticon.com/128/2779/2779775.png',
    },
    {
      title: 'Base de Datos',
      description: 'Guías y proyectos sobre administración y diseño de bases de datos.',
      link: '/databases',
      image: 'https://cdn-icons-png.flaticon.com/128/18771/18771123.png',
    },
  ];

  return (
    <Section>
      <Title>My Portfolio</Title>
      <Grid>
        {categories.map((category, index) => (
          <Card key={index} onClick={() => navigate(category.link)}>
            <IconWrapper>
              <Icon src={category.image} alt={category.title} />
            </IconWrapper>
            <CardContent>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
              <CardLink>View Projects</CardLink>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;