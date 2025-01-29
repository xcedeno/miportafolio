import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import './MainScreen.css';


const MainScreen: React.FC = () => {
const location = useLocation();
const [transitionClass, setTransitionClass] = useState<string>('active');

// Determinar el componente activo basado en la ruta
const getActiveComponent = () => {
switch (location.pathname) {
    case '/about':
    return 'about';
    case '/projects':
    return 'projects';
    case '/skills':
    return 'skills';
    default:
    return 'about'; // Ruta por defecto
}
};

const activeComponent = getActiveComponent();

useEffect(() => {
setTransitionClass('active'); // Cuando el componente se monta, lo mostramos
}, [activeComponent]);

return (
<section id="content">
    {activeComponent === 'about' && <About className={transitionClass} />}
    {activeComponent === 'projects' && <Projects className={transitionClass} />}
    {activeComponent === 'skills' && <Skills className={transitionClass} />}
</section>
);
};

export default MainScreen;