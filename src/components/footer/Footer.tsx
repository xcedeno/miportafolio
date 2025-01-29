import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2025 Xavier Cedeño. Todos los derechos reservados.</p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/xavier-cedeno" target="_blank" rel="noopener noreferrer" title='LinkedIn'>
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/xcedeno" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://twitter.com/xavier-cedeno" target="_blank" rel="noopener noreferrer" title="Twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;