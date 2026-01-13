import React, { useState } from 'react';
import styled from 'styled-components';
import { experienceData } from '../../data/ExperienceData';
import { educationData } from '../../data/EducationData';
import { useLanguage } from '../../context/LanguageContext';
import ParallaxImage from '../ParallaxImage/ParallaxImage';

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  
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

const Description = styled.p`
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Subtitle = styled.h3`
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 30px;
    background: var(--accent-color);
    border-radius: 4px;
  }
`;

const Timeline = styled.div`
  position: relative;
  margin-bottom: 4rem;
  border-left: 2px solid rgba(255, 255, 255, 0.1);
  margin-left: 1rem;
  padding-left: 2rem;
`;

const Item = styled.div`
  position: relative;
  margin-bottom: 3rem;

  &::before {
    content: '';
    position: absolute;
    left: -2.6rem;
    top: 5px;
    width: 16px;
    height: 16px;
    background: var(--bg-primary);
    border: 3px solid var(--primary-color);
    border-radius: 50%;
    z-index: 1;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

const ItemTitle = styled.h4`
  font-size: 1.4rem;
  color: var(--text-primary);
`;

const ItemSubtitle = styled.h5`
  font-size: 1.1rem;
  color: var(--text-muted);
  font-weight: 400;
`;

const Duration = styled.span`
  font-size: 0.9rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  display: inline-block;
  font-weight: 600;
`;

const ItemContent = styled.div`
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  
  ul {
    list-style: disc;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const ItemHeaderRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

// --- Modal Styled Components ---
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background-color: var(--bg-primary);
  border: 1px solid var(--primary-color);
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.8rem;
  cursor: pointer;
  transition: color 0.3s ease;
  line-height: 1;

  &:hover {
    color: var(--primary-color);
  }
`;

const ModalTitle = styled.h3`
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  text-align: center;
`;

const ModalSubtitle = styled.h4`
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  font-weight: normal;
  text-align: center;
`;

const ModalDuration = styled.div`
  color: var(--accent-color);
  font-weight: bold;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  text-align: center;
`;

const ModalDescription = styled.div`
  color: #ffffff; /* Forced white for visibility */
  line-height: 1.6;
  font-size: 1rem;

  ul {
    list-style: disc;
    margin-left: 2rem; 
  }
  
  li {
    margin-bottom: 0.8rem;
  }
`;

const LogoWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  border-radius: 50%;
  border: 2px solid var(--primary-color);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
  flex-shrink: 0; 
  /* Added flex-shrink to prevent squishing if flex container */

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 0 12px var(--primary-color);
  }
`;

const InteractiveLogo = styled(ParallaxImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block; /* Removes bottom space */
`;

const ModalLogo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--primary-color);
  display: block;
  margin: 0 auto 1rem;
`;

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = () => {
  const { t, language } = useLanguage();
  const [selectedExperience, setSelectedExperience] = useState<typeof experienceData[0] | null>(null);

  const openModal = (exp: typeof experienceData[0]) => {
    setSelectedExperience(exp);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <Section id="about">
      <Title>{t('about.title')}</Title>
      <Description>
        {t('about.description')}
      </Description>

      <Subtitle>{t('about.exp')}</Subtitle>
      <Timeline>
        {experienceData.map((exp, index) => (
          <Item key={index}>
            <ItemHeaderRow>
              {exp.image && (
                <LogoWrapper onClick={() => openModal(exp)} title="Click for details">
                  <InteractiveLogo src={exp.image} alt={exp.company} />
                </LogoWrapper>
              )}
              <ItemHeader>
                <ItemTitle>{exp.position[language]}</ItemTitle>
                <ItemSubtitle>{exp.company}</ItemSubtitle>
              </ItemHeader>
            </ItemHeaderRow>
          </Item>
        ))}
      </Timeline>

      {selectedExperience && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>

            {selectedExperience.image && (
              <ModalLogo
                src={selectedExperience.image}
                alt={selectedExperience.company}
              />
            )}

            <ModalTitle>{selectedExperience.position[language]}</ModalTitle>
            <ModalSubtitle>{selectedExperience.company}</ModalSubtitle>
            <ModalDuration>
              {selectedExperience.duration[language]}
            </ModalDuration>

            <ModalDescription>
              {(() => {
                if (!selectedExperience || !selectedExperience.description) {
                  return <p style={{ color: 'red' }}>Error: No description object found.</p>;
                }
                const descData = selectedExperience.description[language];
                if (!descData) {
                  return (
                    <div style={{ color: 'orange' }}>
                      <p>No description for language: {language}</p>
                      <p>Available keys: {Object.keys(selectedExperience.description).join(', ')}</p>
                    </div>
                  );
                }
                const descArray = Array.isArray(descData) ? descData : [descData];

                if (descArray.length === 0) {
                  return <p>Description is empty.</p>;
                }

                return (
                  <ul>
                    {descArray.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                );
              })()}
            </ModalDescription>
          </ModalContent>
        </ModalOverlay>
      )}

      <Subtitle>{t('about.edu')}</Subtitle>
      <Timeline>
        {educationData.map((edu, index) => (
          <Item key={index}>
            <ItemHeader>
              <ItemTitle>{edu.degree[language]}</ItemTitle>
              <ItemSubtitle>{edu.institution}</ItemSubtitle>
            </ItemHeader>
            <Duration>{edu.duration}</Duration>
            <ItemContent>
              <p>{edu.description[language]}</p>
            </ItemContent>
          </Item>
        ))}
      </Timeline>
    </Section>
  );
};

export default About;