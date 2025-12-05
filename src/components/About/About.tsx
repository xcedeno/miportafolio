import React, { useState } from 'react';
import styled from 'styled-components';
import { experienceData } from '../../data/ExperienceData';
import { educationData } from '../../data/EducationData';

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

interface AboutProps {
    className?: string;
}

const About: React.FC<AboutProps> = () => {
    // We can render items directly. No need for complex expand/collapse if the list is reasonable.
    // But if the user wants expand, we can add it. For a "Striking" portfolio, seeing the timeline is usually better.

    return (
        <Section id="about">
            <Title>About Me</Title>
            <Description>
                Systems Analyst with over 10 years of experience in technical support, network configuration,
                and infrastructure maintenance. Specialized in hardware/software troubleshooting, wired/wireless
                network implementation, and server management. Passionate about technological innovation and
                continuous learning.
            </Description>

            <Subtitle>Experience</Subtitle>
            <Timeline>
                {experienceData.map((exp, index) => (
                    <Item key={index}>
                        <ItemHeader>
                            <ItemTitle>{exp.position}</ItemTitle>
                            <ItemSubtitle>{exp.company}</ItemSubtitle>
                        </ItemHeader>
                        <Duration>{exp.duration}</Duration>
                        <ItemContent>
                            {Array.isArray(exp.description) ? (
                                <ul>
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc.replace(/^\s*\*/, '')}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{exp.description}</p>
                            )}
                        </ItemContent>
                    </Item>
                ))}
            </Timeline>

            <Subtitle>Education</Subtitle>
            <Timeline>
                {educationData.map((edu, index) => (
                    <Item key={index}>
                        <ItemHeader>
                            <ItemTitle>{edu.degree}</ItemTitle>
                            <ItemSubtitle>{edu.institution}</ItemSubtitle>
                        </ItemHeader>
                        <Duration>{edu.duration}</Duration>
                        <ItemContent>
                            <p>{edu.description}</p>
                        </ItemContent>
                    </Item>
                ))}
            </Timeline>
        </Section>
    );
};

export default About;