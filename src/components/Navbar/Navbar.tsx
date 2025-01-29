import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar: React.FC = () => {
const navigate = useNavigate();
const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú

const handleNavigation = (path: string) => {
navigate(path);
setIsMenuOpen(false); // Cierra el menú después de navegar
};

return (
<nav className="navbar">
    <div className="navbar-left">
        <img src="/assets/images/xavier.jpg" alt="Profile" className="profile-photo" />
        <div className="text-container">
            <h1>Xavier Cedeno</h1>
            <p>Desarrollador Web / Analista de Sistemas</p>
        </div>
    </div>

    {/* Botón de menú hamburguesa (solo visible en móviles) */}
    <div className="navbar-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
    <FaBars />
    </div>

    {/* Menú de navegación (oculto en móviles cuando está cerrado) */}
    <div className={`navbar-center ${isMenuOpen ? 'active' : ''}`}>
    <ul className="nav-links">
        <li>
        <a href="/" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>Inicio</a>
        </li>
        <li>
        <a href="/projects" onClick={(e) => { e.preventDefault(); handleNavigation('/projects'); }}>Proyectos</a>
        </li>
        <li>
        <a href="/contact" onClick={(e) => { e.preventDefault(); handleNavigation('/skills'); }}>Skills</a>
        </li>
        <li>
        <a href="/blog" onClick={(e) => { e.preventDefault(); handleNavigation('/blog'); }}>Blog</a>
        </li>
        <li>
        <a href="/resume" onClick={(e) => { e.preventDefault(); handleNavigation('/resume'); }}>Currículum</a>
        </li>
    </ul>
    </div>


</nav>
);
};

export default Navbar;