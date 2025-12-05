import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const Card = styled.div`
  background: var(--bg-card);
  border-radius: var(--radius-md);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  min-height: 280px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border-color: var(--primary-color);
  }
`;

const Content = styled.div`
  margin-bottom: 2rem;
  text-align: left; /* Ensure text alignment is clean */
`;

const Title = styled.h3`
  font-size: 1.4rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.4;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6; /* Improved line height to reduce 'cluttered' feel */

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  gap: 0.8rem; /* Increased gap */
  flex-wrap: wrap;
`;

const TechIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const GithubLink = styled.a`
  color: var(--text-primary);
  font-size: 1.5rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: var(--primary-color);
  }
`;

interface NetworkingGuideCardProps {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
}

const NetworkingGuideCard: React.FC<NetworkingGuideCardProps> = ({ title, description, technologies, githubLink }) => {
    return (
        <Card>
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Content>
            <Footer>
                <TechStack>
                    {technologies.map((tech, index) => (
                        <TechIcon
                            key={index}
                            src={`/assets/skill/${tech}.png`}
                            alt={tech}
                            title={tech}
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                    ))}
                </TechStack>
                <GithubLink href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                    <FaGithub />
                </GithubLink>
            </Footer>
        </Card>
    );
};

export default NetworkingGuideCard;