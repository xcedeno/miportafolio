import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavContainer = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: ${({ $scrolled }) =>
        $scrolled ? 'rgba(15, 15, 22, 0.95)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) =>
        $scrolled ? 'blur(10px)' : 'none'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid ${({ $scrolled }) =>
        $scrolled ? 'rgba(255, 255, 255, 0.05)' : 'transparent'};
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  span {
    color: var(--primary-color);
  }
`;

const NavMenu = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: var(--bg-secondary);
    padding: 2rem 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-150%)')};
    opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
    z-index: 999;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

const NavItem = styled.li`
  font-weight: 500;
  font-size: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;

  &:hover,
  &.active {
    color: var(--primary-color);
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary-color);
    box-shadow: 0 0 10px var(--primary-color);
  }
`;

const CTAButton = styled.button`
  background: transparent;
  border: 1px solid var(--text-primary);
  color: var(--text-primary);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: var(--primary-color);
    border-color: var(--primary-color);
    box-shadow: 0 0 15px rgba(108, 99, 255, 0.4);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  color: var(--text-primary);
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <NavContainer $scrolled={scrolled}>
            <Logo onClick={() => navigate('/')}>
                Xavier<span>Cedeño</span>
            </Logo>

            <MobileIcon onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu $isOpen={isOpen}>
                <NavItem>
                    <StyledNavLink to="/" onClick={() => setIsOpen(false)}>Home</StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to="/about" onClick={() => setIsOpen(false)}>About</StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to="/projects" onClick={() => setIsOpen(false)}>Portfolio</StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</StyledNavLink>
                </NavItem>
                <NavItem>
                    <CTAButton onClick={() => window.open('/assets/cv.pdf', '_blank')}>
                        Download CV
                    </CTAButton>
                </NavItem>
            </NavMenu>
        </NavContainer>
    );
};

export default Navbar;