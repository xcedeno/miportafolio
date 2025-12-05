import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ProgrammingScreen from './screens/ProgrammingScreen';
import NetworkingScreen from './screens/NetworkingScreen';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/programming" element={<ProgrammingScreen />} />
          <Route path="/networking" element={<NetworkingScreen />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;