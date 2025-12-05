export interface Skill {
    icon: string;
    name: string;
    skillsList: { es: string[]; en: string[] };
}

export const skillsData: Skill[] = [
    {
        icon: '/assets/skill/mikrotik.png',
        name: 'Mikrotik',
        skillsList: {
            es: ['Configuración Básica de Equipos MikroTik', 'Gestión de Redes IP (DHCP, Subnetting, NAT)', 'Seguridad y Firewall', 'Configuración de Redes Inalámbricas', 'QoS (Calidad de Servicio)', 'Monitoreo y Herramientas de Diagnóstico', 'VLANs y Enlaces Trunks', 'Hotspot y Autenticación de Usuarios', 'Scripting y Automatización'],
            en: ['Basic MikroTik Configuration', 'IP Network Management (DHCP, Subnetting, NAT)', 'Security and Firewall', 'Wireless Network Configuration', 'QoS (Quality of Service)', 'Monitoring and Diagnostics', 'VLANs and Trunk Links', 'Hotspot and User Authentication', 'Scripting and Automation']
        }
    },
    {
        icon: '/assets/skill/react.png',
        name: 'React',
        skillsList: {
            es: ['Desarrollo de Componentes', 'Estado y Ciclo de Vida (Hooks)', 'Integración de API RESTful', 'Ruteo con React Router', 'Estilos y Diseño (styled-components)', 'Manejo de Formularios', 'Control de Versiones (Git)'],
            en: ['Component Development', 'State and Lifecycle (Hooks)', 'RESTful API Integration', 'Routing with React Router', 'Styles and Design (styled-components)', 'Form Handling', 'Version Control (Git)']
        }
    },
    {
        icon: '/assets/skill/tplink.png',
        name: 'TP-Link',
        skillsList: {
            es: ['Configuración de Routers y Switches', 'Sistemas de Malla Deco', 'Cámaras Vigi', 'Administración Omada', 'QoS y Rendimiento', 'Monitoreo y Diagnóstico', 'Resolución de Problemas'],
            en: ['Router and Switch Configuration', 'Deco Mesh Systems', 'Vigi Cameras', 'Omada Administration', 'QoS and Performance', 'Monitoring and Diagnostics', 'Troubleshooting']
        }
    },
    {
        icon: '/assets/skill/js.png',
        name: 'JavaScript',
        skillsList: {
            es: ['Fundamentos de JavaScript', 'Manipulación del DOM', 'Eventos y Manejo de Eventos', 'Frameworks y Librerías', 'Desarrollo de Formularios', 'Resolución de Problemas'],
            en: ['JavaScript Fundamentals', 'DOM Manipulation', 'Events and Event Handling', 'Frameworks and Libraries', 'Form Development', 'Troubleshooting']
        }
    },
    {
        icon: '/assets/skill/css.png',
        name: 'Css 3',
        skillsList: {
            es: ['Fundamentos de CSS', 'Diseño Responsivo', 'Flexbox y Grid', 'Estilos y Temas', 'Animaciones y Transiciones', 'Frameworks CSS', 'Depuración y Compatibilidad'],
            en: ['CSS Fundamentals', 'Responsive Design', 'Flexbox and Grid', 'Styles and Themes', 'Animations and Transitions', 'CSS Frameworks', 'Debugging and Compatibility']
        }
    },
    {
        icon: '/assets/skill/html-5.png',
        name: 'Html 5',
        skillsList: {
            es: ['Fundamentos de HTML5', 'Formularios y Validación', 'Multimedia Integrada', 'SEO Básico'],
            en: ['HTML5 Fundamentals', 'Forms and Validation', 'Integrated Multimedia', 'Basic SEO']
        }
    },
    {
        icon: '/assets/skill/python.png',
        name: 'python',
        skillsList: {
            es: ['Fundamentos de Python', 'Funciones y Módulos', 'Manipulación de Datos'],
            en: ['Python Fundamentals', 'Functions and Modules', 'Data Manipulation']
        }
    },
    {
        icon: '/assets/skill/circuit-board.png',
        name: 'Electronica',
        skillsList: {
            es: ['Componentes Electrónicos', 'Circuitos Eléctricos', 'Leyes Básicas de Electricidad', 'Instrumentación y Control', 'Seguridad Eléctrica'],
            en: ['Electronic Components', 'Electrical Circuits', 'Basic Electricity Laws', 'Instrumentation and Control', 'Electrical Safety']
        }
    },
    {
        icon: '/assets/skill/service.png',
        name: 'Soporte Tecnico',
        skillsList: {
            es: ['Resolución de Problemas', 'Asistencia al Usuario', 'Configuración de Equipos', 'Mantenimiento de Sistemas', 'Documentación de Procesos', 'Soporte Remoto', 'Conocimientos de Redes', 'Trabajo en Equipo'],
            en: ['Troubleshooting', 'User Assistance', 'Equipment Configuration', 'System Maintenance', 'Process Documentation', 'Remote Support', 'Network Knowledge', 'Teamwork']
        }
    },
    {
        icon: '/assets/skill/powerbi.png',
        name: 'Power Bi',
        skillsList: {
            es: ['Interfaz de Power BI', 'Conexión de Datos', 'Visualización de Datos', 'Modelado de Datos', 'Uso de DAX Básico', 'Paneles de Control', 'Interpretación de Datos'],
            en: ['Power BI Interface', 'Data Connection', 'Data Visualization', 'Data Modeling', 'Basic DAX Usage', 'Dashboards', 'Data Interpretation']
        }
    },
    {
        icon: '/assets/skill/starlink.png',
        name: 'Starlink',
        skillsList: {
            es: ['Componentes del Sistema', 'Montaje de Antena', 'Conexiones y Cableado', 'Configuración Inicial', 'Diagnóstico de Problemas', 'Documentación y Soporte'],
            en: ['System Components', 'Antenna Mounting', 'Connections and Wiring', 'Initial Configuration', 'Problem Diagnosis', 'Documentation and Support']
        }
    },
];