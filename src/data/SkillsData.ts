export interface Skill {
icon: string; // Ruta o clase del icono (ej: FontAwesome, Material Icons, etc.)
name: string; // Nombre de la habilidad
skillsList: string[]; // Lista de habilidades relacionadas
}

export const skillsData: Skill[] = [
{
    icon: '/assets/skill/mikrotik.png', // Ruta del icono de Mikrotik
    name: 'Mikrotik',
    skillsList: ['Configuración Básica de Equipos MikroTik, ',
                'Gestión de Redes IP (DHCP, Subnetting, NAT)',
                'Seguridad y Firewall(reglas de firewall para filtrar tráfico)',
                'Configuración de Redes Inalámbricas(Acces Points, Capsman,Nv2,optimizacion de red)',
                'QoS (Calidad de Servicio, Manejo de Queues,bandwidth limits, Optimizacion de Trafico)',
                'Monitoreo y Herramientas de Diagnóstico (Ping, Traceroute, Torch, Sniffer)',
                'VLANs y Enlaces Trunks(Configuracion Basica de Vlans,troncales)',
                'Hotspot y Autenticación de Usuarios (COnfuguración Basica de Hotspots, Autenticación de Usuarios,Limite de Ancho de banda y Sesion)',
                'Scripting y Automatización (Creación de Scripts, Configuración de Scripts, Ejecución de Scripts,Eportacion de Scripts)',
            ],
},
{
    icon: '/assets/skill/react.png', 
    name: 'React',
    skillsList: ['Desarrollo de Componentes(creación y reutilización de componentes funcionales y de clase) ',
                'Estado y Ciclo de Vida(States,Hooks)',
                'Integración de API(Conocimientos Basicos de Apis Restful)', 
                'Ruteo con React Router(uso de React Router DOM para Apps Simple Page y Dinamicas)',
                'Estilos y Diseño(Capacidad para aplicar estilos CSS a través de frameworks como Bootstrap o utilizando soluciones como styled-components)',
                'Manejo de Formularios(Validación de Formularios, Envio de Datos)',
                'Control de Versiones(Familiaridad con Git para el control de versiones.)'
            ],
    
},
{
    icon: '/assets/skill/tplink.png', // Ruta del icono de React
    name: 'TP-Link',
    skillsList: ['Configuración de Routers y Switches (Instalación y optimización de dispositivos TP-Link para redes eficientes.)',
                'Sistemas de Malla Deco (Implementación de Deco para mejorar la cobertura y señal inalámbrica.)', 
                'Cámaras Vigi (Gestión de cámaras de seguridad TP-Link Vigi para supervisión efectiva.)',
                'Administración Omada (Uso de TP-Link Omada para gestión centralizada de redes y dispositivos.)',
                'QoS y Rendimiento(Ajuste de calidad de servicio para priorizar tráfico crítico.)',
                'Monitoreo y Diagnóstico (Uso de herramientas para monitorear redes y resolver problemas.)',
                'Resolución de Problemas (Diagnóstico y solución de problemas de conectividad en redes TP-Link.)'
            ],
},
{
    icon: '/assets/skill/js.png', // Ruta del icono de Node.js
    name: 'JavaScript',
    skillsList: ['Fundamentos de JavaScript', 
        'Manipulación del DOM (Experiencia en seleccionar y modificar elementos del DOM para crear interactividad en páginas web.)', 
        'Eventos y Manejo de Eventos (Habilidad para manejar eventos del usuario y aplicar funciones interactivas.)',
        'Frameworks y Librerías ( Familiaridad con bibliotecas como jQuery y conceptos básicos de frameworks como React o Vue.js.)',
        'Desarrollo de Formularios (Creación de formularios con HTML y CSS, validación de formularios, envío de datos y manejo de errores.)',
        'Resolución de Problemas(Habilidades para depurar y solucionar errores comunes en JavaScript.)'
    ],
    },
{
    icon: '/assets/skill/css.png', // Ruta del icono de Node.js
    name: 'Css 3',
    skillsList: ['Fundamentos de CSS',
            'Diseño Responsivo (Experiencia en el uso de media queries para crear diseños adaptables a diferentes dispositivos.)',
            'Flexbox y Grid (Habilidad para utilizar Flexbox y CSS Grid para crear diseños modernos y estructurados.)',
            'Estilos y Temas (Capacidad para implementar estilos consistentes y temáticas utilizando variables CSS.)',
            'Animaciones y Transiciones (creación de animaciones y transiciones suaves para mejorar la interactividad.)',
            'Frameworks CSS (Conocimiento básico de frameworks como Bootstrap o Tailwind CSS para acelerar el desarrollo.)',
            'Depuración y Compatibilidad (Habilidades para depurar problemas de estilos y asegurar compatibilidad entre navegadores.)'
        ],
        },
{
    icon: '/assets/skill/html-5.png', // Ruta del icono de Node.js
    name: 'Html 5',
    skillsList: ['Fundamentos de HTML5',
            'Formularios y Validación',
            'Multimedia Integrada (Experiencia en la incorporación de audio y video usando las etiquetas <audio> y <video>.)', 
            'SEO Básico (Entendimiento de mejores prácticas para optimizar HTML para motores de búsqueda.)'],
},
{
    icon: '/assets/skill/python.png', // Ruta del icono de Node.js
    name: 'python',
    skillsList: ['Fundamentos de Python (Conocimiento sólido de sintaxis, tipos de datos y estructuras de control (condicionales y bucles).)',
            'Funciones y Módulos (Capacidad para crear y utilizar funciones, así como importar módulos y bibliotecas estándar.)',
            'Manipulación de Datos (Familiaridad con estructuras de datos como listas, diccionarios y tuplas, y su manipulación.)',
],},
{
    icon: '/assets/skill/circuit-board.png', // Ruta del icono de Node.js
    name: 'Electronica',
    skillsList: ['Componentes Electrónicos (Conocimiento de componentes básicos como resistencias, capacit',
            'Circuitos Eléctricos (Capacidad para entender y construir esquemas de circuitos simples, incluyendo conexiones en serie y paralelo.)',
            'Leyes Básicas de Electricidad (Familiaridad con la Ley de Ohm y conceptos de voltaje, corriente y resistencia.)', 
            'Instrumentación y Control (Capacidad para entender y controlar instrumentos de medición y control, como amplificadores y medidores.)',
            'Seguridad Eléctrica (Conocimiento de prácticas seguras en el manejo de electricidad y prevención de accidentes.)',
        ],
},
{
    icon: '/assets/skill/service.png', // Ruta del icono de Node.js
    name: 'Soporte Tecnico',
    skillsList: ['Resolución de Problemas (Habilidad para diagnosticar y solucionar problemas técnicos de hardware y software de manera eficiente.)', 
            'Asistencia al Usuario (Experiencia en brindar soporte directo a usuarios, explicando soluciones de manera clara y concisa.)',
            'Configuración de Equipos (Capacidad para instalar y configurar dispositivos y aplicaciones, asegurando funcionalidades óptimas.)', 
            'Mantenimiento de Sistemas (Conocimiento en el mantenimiento preventivo y correctivo de sistemas informáticos y redes.)',
            'Documentación de Procesos (Habilidad para documentar procedimientos y guías de usuario para mejorar la eficiencia del equipo.)',
            'Soporte Remoto (Experiencia en la resolución de problemas remotamente a través de chat o correo electrónico.)',
            'Conocimientos de Redes (Entendimiento básico de configuración y mantenimiento de redes LAN/WAN, así como gestión de VLANs.)',
            'Trabajo en Equipo (Capacidad para colaborar con otros miembros del equipo técnico, participando en proyectos y mejora continua.)',
    ],
    },
{
    icon: '/assets/skill/powerbi.png', // Ruta del icono de Node.js
    name: 'Power Bi',
    skillsList: ['Interfaz de Power BI (Conocimiento básico de la interfaz de usuario de Power BI y sus principales funcionalidades.)',
            'Conexión de Datos (Habilidad para conectar Power BI a diversas fuentes de datos, como archivos Excel, bases de datos SQL y servicios en la nube.)',
            'Visualización de Datos (Capacidad para crear visualizaciones de datos y gráficos para presentar información en un formato visual.)',
            'Modelado de Datos (Familiaridad con conceptos básicos de modelado de datos, incluyendo la creación de relaciones y uso de tablas.)', 
            'Uso de DAX Básico (Introducción a funciones DAX (Data Analysis Expressions) para realizar cálculos sencillos en modelos de datos.)',
            'Paneles de Control (Dashboards) (Habilidad para crear paneles de control y visualizaciones interactivas para presentar información en un formato visual.)',
            'Interpretación de Datos (Habilidad para entender y interpretar datos para tomar decisiones informadas.)',
        ],
    },
{
    icon: '/assets/skill/starlink.png', // Ruta del icono de Node.js
    name: 'Starlink',
    skillsList: ['Componentes del Sistema (Familiaridad con los componentes del kit de instalación de Starlink, incluyendo la antena (dish), el router y los cables.)', 
            'Montaje de Antena ( Habilidad para instalar la antena en un lugar adecuado, asegurando una vista despejada del cielo y cumpliendo con las recomendaciones de posicionamiento.)',
            'Conexiones y Cableado (Conocimiento sobre cómo realizar conexiones adecuadas entre la antena, el router y la fuente de alimentación.)', 
            'Configuración Inicial',
            'Diagnóstico de Problemas Comunes (Habilidad para identificar y resolver problemas básicos de instalación o conexión, como falta de señal o problemas de red.)',
            'Documentación y Soporte (Capacidad para seguir manuales de instalación y guías de usuario, así como proporcionar soporte básico a los usuarios finales.)'
        ],
    
},

];