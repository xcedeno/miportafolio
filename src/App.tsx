import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainScreen from './screens/MainScreen';
import ProgrammingScreen from './screens/ProgrammingScreen';
import NetworkingScreen from './screens/NetworkingScreen'; // Nueva pantalla
import About from './components/About/About';
import Projects from './components/Projects/Projects';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar común para todas las pantallas */}
      <Routes>
        <Route path="/" element={<MainScreen />} /> {/* Ruta principal */}
        <Route path="/about" element={<About />} /> {/* Nueva pantalla */}
        <Route path="/projects" element={<Projects />} /> {/* Nueva pantalla */}
        <Route path="/programming" element={<ProgrammingScreen />} /> {/* Nueva pantalla */}
        <Route path="/networking" element={<NetworkingScreen />} /> {/* Nueva pantalla */}
      </Routes>
    </Router>
  );
};

export default App;