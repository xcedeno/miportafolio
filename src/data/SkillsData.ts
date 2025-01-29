export interface Skill {
icon: string; // Ruta o clase del icono (ej: FontAwesome, Material Icons, etc.)
name: string; // Nombre de la habilidad
skillsList: string[]; // Lista de habilidades relacionadas
}

export const skillsData: Skill[] = [
{
    icon: '/assets/skill/mikrotik.png', // Ruta del icono de Mikrotik
    name: 'Mikrotik',
    skillsList: ['Configuración de routers', 'Firewall', 'VPN', 'QoS'],
},
{
    icon: '/assets/skill/tplink.png', // Ruta del icono de React
    name: 'TP-Link',
    skillsList: ['Componentes funcionales', 'Hooks', 'Context API', 'React Router'],
},
{
    icon: '/assets/skill/js.png', // Ruta del icono de Node.js
    name: 'JavaScript',
    skillsList: ['Express.js', 'APIs REST', 'Manejo de bases de datos', 'Autenticación JWT'],
},
{
    icon: '/assets/skill/css.png', // Ruta del icono de Node.js
    name: 'Css 3',
    skillsList: ['CSS', 'APIs REST', 'Manejo de bases de datos', 'Autenticación JWT'],
},
{
    icon: '/assets/skill/html-5.png', // Ruta del icono de Node.js
    name: 'Html 5',
    skillsList: ['HTML', 'APIs REST', 'Manejo de bases de datos', 'Autenticación JWT'],
},
{
    icon: '/assets/skill/python.png', // Ruta del icono de Node.js
    name: 'python',
    skillsList: ['HTML', 'APIs REST', 'Manejo de bases de datos', 'Autenticación JWT'],
},
{
    icon: '/assets/skill/circuit-board.png', // Ruta del icono de Node.js
    name: 'Electronica',
    skillsList: ['HTML', 'APIs REST', 'Manejo de bases de datos', 'Autenticación JWT'],
},
{
    icon: '/assets/skill/service.png', // Ruta del icono de Node.js
    name: 'Soporte Tecnico',
    skillsList: ['HTML', 'APIs REST', 'Manejo de bases de datos', 'Autenticación JWT'],
},
{
    icon: '/assets/skill/powerbi.png', // Ruta del icono de Node.js
    name: 'Power Bi',
    skillsList: ['HTML', 'APIs REST', 'Manejo de bases de datos', 'Autenticación JWT'],
},
{
    icon: '/assets/skill/starlink.png', // Ruta del icono de Node.js
    name: 'Starlink',
    skillsList: ['HTML', 'APIs REST', 'Manejo de bases de datos', 'Autenticación JWT'],
},
];