import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const Section = styled.section`
  min-height: calc(100vh - 80px); /* Full height minus navbar */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  position: relative;
  overflow: hidden;

  /* Background Glow Effect */
  &::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(108, 99, 255, 0.15) 0%, rgba(0,0,0,0) 70%);
    top: -100px;
    right: -100px;
    z-index: 0;
  }

  @media (max-width: 968px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    padding-top: 2rem;
    gap: 2rem;
  }
`;

const Content = styled.div`
  z-index: 1;
  max-width: 600px;
`;

const Greeting = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--text-secondary);
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #fff, #a5a5a5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Role = styled.h2`
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const Description = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 500px;
  
  @media (max-width: 968px) {
    margin: 0 auto 2.5rem auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.a`
  padding: 0.8rem 2rem;
  background: var(--primary-color);
  color: #fff;
  border-radius: 30px;
  font-weight: 600;
  box-shadow: 0 10px 20px rgba(108, 99, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 25px rgba(108, 99, 255, 0.4);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-card);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-3px);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  z-index: 1;
  animation: ${float} 6s ease-in-out infinite;

  /* Abstract Shape behind image */
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid var(--primary-color);
    border-radius: 50% 50% 0 50%;
    top: 20px;
    right: -20px;
    z-index: -1;
    opacity: 0.5;
  }
`;

const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50% 50% 0 50%; /* Modern shape */
  border: 5px solid var(--bg-secondary);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const Hero: React.FC = () => {
    return (
        <Section>
            <Content>
                <Greeting>HELLO I'M</Greeting>
                <Name>Xavier Cedeño</Name>
                <Role>Web Developer & Systems Analyst</Role>
                <Description>
                    I build high-quality web applications with a focus on modern design,
                    clean code, and exceptional user experiences.
                </Description>

                <ButtonGroup>
                    <PrimaryButton href="/assets/cv.pdf" target="_blank">
                        Download CV
                    </PrimaryButton>
                    <SocialLinks>
                        <SocialIcon href="#"><FaFacebookF /></SocialIcon>
                        <SocialIcon href="#"><FaTwitter /></SocialIcon>
                        <SocialIcon href="https://www.linkedin.com/in/xavier-cedeno"><FaLinkedinIn /></SocialIcon>
                    </SocialLinks>
                </ButtonGroup>
            </Content>

            <ImageWrapper>
                {/* Using a placeholder or the existing image path found in Navbar.css earlier */}
                <ProfileImage src="/assets/images/xavier.jpg" alt="Xavier Cedeño" />
            </ImageWrapper>
        </Section>
    );
};

export default Hero;
