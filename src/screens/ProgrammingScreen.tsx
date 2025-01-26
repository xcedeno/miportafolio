import React from 'react';
import './ProgrammingScreen.css';

const ProgrammingScreen: React.FC = () => {
return (
<div className="programming-screen">
    <h1>Programación</h1>
    <p>
    Bienvenido a la sección de programación. Aquí encontrarás guías, tutoriales y proyectos
    relacionados con el desarrollo de software.
    </p>
    <div className="content">
    <h2>Proyectos Destacados</h2>
    <ul>
        <li>Desarrollo de una aplicación web con React y TypeScript.</li>
        <li>Creación de una API REST con Node.js y Express.</li>
        <li>Introducción a Python para ciencia de datos.</li>
    </ul>
    </div>
</div>
);
};

export default ProgrammingScreen;