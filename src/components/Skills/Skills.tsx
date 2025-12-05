import React, { useState } from 'react';
import styled from 'styled-components';
import { skillsData } from '../../data/SkillsData';

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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const SkillIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* Glow/Neon effect for the icon */
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
`;

const SkillCard = styled.div<{ $isActive: boolean }>`
  background: var(--bg-card);
  border: 2px solid ${props => props.$isActive ? 'var(--primary-color)' : 'transparent'};
  border-radius: var(--radius-md);
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  /* Neon Glow on hover/active */
  box-shadow: ${props => props.$isActive ? '0 0 20px rgba(108, 99, 255, 0.3)' : 'none'};

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
  }
`;

const Percentage = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const SkillName = styled.h3`
  font-size: 1rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255,255,255,0.1);
  border-radius: 3px;
  margin-top: 1.5rem;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ $percent: number }>`
  height: 100%;
  width: ${props => props.$percent}%;
  background: var(--primary-color);
  border-radius: 3px;
  transition: width 1s ease-in-out;
`;

const Details = styled.div<{ $isOpen: boolean }>`
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.4s ease;
  margin-top: ${props => props.$isOpen ? '1rem' : '0'};
  text-align: left;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 1rem;
`;

const ListItem = styled.li`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;

  &::before {
    content: '•';
    color: var(--primary-color);
    position: absolute;
    left: 0;
  }
`;

interface SkillsProps {
  className?: string;
}

import { useLanguage } from '../../context/LanguageContext';

const Skills: React.FC<SkillsProps> = ({ className }) => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const { t, language } = useLanguage();

  const toggleSkill = (index: number) => {
    setActiveSkill(activeSkill === index ? null : index);
  };

  // Helper to generate a "score" based on list length or index for visual variety
  const getPercentage = (length: number, index: number) => {
    // Arbitrary calculation for demo purposes to match the cool "Percentage" design
    const base = 50;
    const bonus = length * 5;
    return Math.min(95, Math.max(40, base + bonus));
  };

  return (
    <Section id="skills" className={className}>
      <Title>{t('skills.title')}</Title>
      <Grid>
        {skillsData.map((skill, index) => {
          // Determine the correct list based on language
          const list = skill.skillsList[language];
          const percent = getPercentage(list.length, index);

          return (
            <SkillCard
              key={index}
              $isActive={activeSkill === index}
              onClick={() => toggleSkill(index)}
            >
              <SkillIconWrapper>
                <SkillIcon src={skill.icon} alt={skill.name} />
              </SkillIconWrapper>
              <Percentage>{percent}%</Percentage>
              <SkillName>{skill.name}</SkillName>
              <ProgressBar>
                <ProgressFill $percent={percent} />
              </ProgressBar>

              <Details $isOpen={activeSkill === index}>
                <List>
                  {list.map((item, i) => (
                    <ListItem key={i}>{item}</ListItem>
                  ))}
                </List>
              </Details>
            </SkillCard>
          );
        })}
      </Grid>
    </Section>
  );
};

export default Skills;