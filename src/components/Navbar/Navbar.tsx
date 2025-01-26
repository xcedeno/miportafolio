import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import './Navbar.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Navbar: React.FC = () => {
const navigate = useNavigate(); // Hook para la navegación

// Función para manejar la navegación
const handleNavigation = (path: string) => {
navigate(path); // Navegar a la ruta especificada
};

return (
<nav className="navbar">
    <div className="navbar-left">
    <img src="/src/assets/xavier.jpg" alt="Profile" className="profile-photo" />
    <h1>Xavier Cedeno</h1>
    </div>

    <div className="navbar-center">
    <ul className="nav-links">
        <li>
        <a href="/" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>Inicio</a>
        </li>
        <li>
        <a href="/about" onClick={(e) => { e.preventDefault(); handleNavigation('/about'); }}>Acerca de mí</a>
        </li>
        <li>
        <a href="/projects" onClick={(e) => { e.preventDefault(); handleNavigation('/projects'); }}>Proyectos</a>
        </li>
        <li>
        <a href="/contact" onClick={(e) => { e.preventDefault(); handleNavigation('/contact'); }}>Contacto</a>
        </li>
        <li>
        <a href="/blog" onClick={(e) => { e.preventDefault(); handleNavigation('/blog'); }}>Blog</a>
        </li>
        <li>
        <a href="/resume" onClick={(e) => { e.preventDefault(); handleNavigation('/resume'); }}>Currículum</a>
        </li>
    </ul>
    </div>

    <div className="navbar-right">
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <FaLinkedin />
    </a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
        <FaGithub />
    </a>
    <a href="mailto:example@example.com" title="Email">
        <FaEnvelope />
    </a>
    </div>
</nav>
);
};

export default Navbar;