import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';

const MainContainer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
  color: var(--text-primary);
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding-top: 80px; /* Space for fixed navbar */
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
`;

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <MainContainer>
            <Navbar />
            <ContentWrapper>
                {children}
            </ContentWrapper>
            <Footer />
        </MainContainer>
    );
};

export default Layout;
