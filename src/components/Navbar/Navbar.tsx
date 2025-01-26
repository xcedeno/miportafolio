import './Navbar.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

interface NavbarProps {
onNavigate: (component: string) => void; // Función para cambiar el componente activo
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {




return (
<nav className="navbar">
    <div className="navbar-left">
    <img src="/src/assets/xavier.jpg" alt="Profile" className="profile-photo" />
    <h1>Xavier Cedeno</h1>
    </div>
    
    <div className="navbar-center">
    <ul className="nav-links">
        <li>
        <a href="#about" onClick={() => onNavigate('about')}>Acerca de mi</a>
        </li>
        <li>
        <a href="#projects" onClick={() => onNavigate('projects')}>Projects</a>
        </li>
        <li>
        <a href="#contact" onClick={() => onNavigate('contact')}>Contact</a>
        </li>
        <li>
        
        <a href="#blog">Blog</a>
        </li>
            <li>
                <a href="#resume">Resume</a>
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