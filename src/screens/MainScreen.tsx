import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contacts from '../components/Contacts/Contacts';
import './MainScreen.css';

const MainScreen: React.FC = () => {
const [activeComponent, setActiveComponent] = useState<string>('about');
const [transitionClass, setTransitionClass] = useState<string>('active');

const handleNavigation = (component: string) => {
if (component === activeComponent) return; // Evitar transición si el componente no cambia
setTransitionClass('exit'); // Animación de salida
setTimeout(() => {
    setActiveComponent(component); // Cambiamos el componente
    setTransitionClass('enter'); // Animación de entrada
}, 500); // Duración de la animación de salida
};

useEffect(() => {
setTransitionClass('active'); // Cuando el componente se monta, lo mostramos
}, [activeComponent]);

return (
<div>
    <Navbar onNavigate={handleNavigation} />
    <div className="content">
    {activeComponent === 'about' && <About className={transitionClass} />}
    {activeComponent === 'projects' && <Projects className={transitionClass} />}
    {activeComponent === 'contact' && <Contacts className={transitionClass} />}
    </div>
</div>
);
};

export default MainScreen;