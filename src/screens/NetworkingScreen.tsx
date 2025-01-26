import React from 'react';
import './NetworkingScreen.css';

const NetworkingScreen: React.FC = () => {
return (
<div className="networking-screen">
    <h1>Redes</h1>
    <p>
    Bienvenido a la sección de redes. Aquí encontrarás guías, tutoriales y proyectos relacionados
    con configuraciones de redes y seguridad informática.
    </p>
    <div className="content">
    <h2>Proyectos Destacados</h2>
    <ul>
        <li>Configuración de una red LAN en un entorno empresarial.</li>
        <li>Seguridad en redes: Firewalls y VPNs.</li>
        <li>Introducción a redes inalámbricas (Wi-Fi).</li>
    </ul>
    </div>
</div>
);
};

export default NetworkingScreen;