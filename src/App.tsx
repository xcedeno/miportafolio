import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainScreen from './screens/MainScreen';
import ProgrammingScreen from './screens/ProgrammingScreen';
import NetworkingScreen from './screens/NetworkingScreen';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar /> {/* Navbar común para todas las pantallas */}
        <Routes>
          <Route path="/" element={<MainScreen />} /> {/* Ruta principal */}
          <Route path="/about" element={<About />} /> {/* Nueva pantalla */}
          <Route path="/projects" element={<Projects />} /> {/* Nueva pantalla */}
          <Route path="/programming" element={<ProgrammingScreen />} /> {/* Nueva pantalla */}
          <Route path="/networking" element={<NetworkingScreen />} /> {/* Nueva pantalla */}
        </Routes>
        <Footer /> {/* Footer común para todas las pantallas */}
      </div>
    </Router>
  );
};

export default App;