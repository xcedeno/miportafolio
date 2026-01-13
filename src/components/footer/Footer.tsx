import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--bg-secondary);
  padding: 2rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const IconLink = styled.a`
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialIcons>
          <IconLink href="https://www.linkedin.com/in/xavier-cede%C3%B1o-02a750243/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </IconLink>
          <IconLink href="https://github.com/xcedeno" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </IconLink>
          <IconLink href="https://twitter.com/xavier-cedeno" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </IconLink>
        </SocialIcons>
        <Copyright>&copy; {new Date().getFullYear()} Xavier Cedeño. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;