# Xavier Cedeño — Developer Portfolio

![Portfolio Preview](/public/assets/images/og-image.jpg)

Un portafolio profesional de Desarrollo Full Stack construido con **React**,
**TypeScript** y **Vite**, diseñado específicamente para maximizar la conversión
ante reclutadores técnicos y clientes potenciales.

Este proyecto fue transformado de un diseño multipágina tradicional a una
experiencia fluida "Single-Page" orientada a resultados, destacando métricas de
impacto reales.

## ✨ Características Principales

- 🚀 **Single-Page Application (SPA)**: Navegación por scroll suave entre
  secciones sin recargas.
- 🌓 **Modo Claro y Oscuro**: Implementación nativa usando variables CSS y
  `localStorage` para persistencia.
- 🎬 **Animaciones Fluidas**: Componentes animados al hacer scroll usando
  `framer-motion` (fade-in, stagger, escalado).
- 📱 **Mobile-First Responsive**: Diseño adaptativo con tipografía fluida
  escalable (`clamp()`).
- 🎯 **Enfoque en Resultados (ROI)**: Secciones de Proyectos y Experiencia
  estructuradas en modelo _Problema → Solución → Resultado_.
- ⚡ **Alta Performance y SEO**: Metadatos Open Graph, etiquetas semánticas y
  Puntuación Lighthouse optimizada.

## 🛠️ Stack Tecnológico

- **Framework**: React 18 + Vite
- **Lenguaje**: TypeScript
- **Estilos**: CSS Vanilla (Variables, CSS Grid, Flexbox)
- **Animaciones**: Framer Motion
- **Iconografía**: Lucide React

## 📂 Estructura del Proyecto

```text
src/
├── components/          # Componentes de la interfaz
│   ├── About/           # Sección "Sobre Mí"
│   ├── Contact/         # Formulario y links de contacto
│   ├── Experience/      # Línea de tiempo profesional
│   ├── footer/          # Pie de página
│   ├── Hero/            # Sección principal de bienvenida
│   ├── Navbar/          # Navegación fija con cambio de tema
│   └── Projects/        # Tarjetas de proyectos (Grid)
├── data/                # Datos estructurados (Listos para CMS)
│   ├── experience.ts    # Historial laboral
│   └── projects.ts      # Catálogo de proyectos
├── styles/              # Sistema global de estilos
│   └── globals.css      # Variables de tema Claro/Oscuro y utilidades
├── App.tsx              # Componente raíz y Layout principal
└── main.tsx             # Punto de entrada de la aplicación
```

## 🚀 Instalación y Despliegue Local

Sigue estos pasos para correr el proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/xcedeno/xcedeno-portfolio.git
   cd xcedeno-portfolio
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   > Abre `http://localhost:5173` en tu navegador.

4. **Kompilar para Producción:**
   ```bash
   npm run build
   ```

## 🧑‍💻 Personalización

Para adaptar este portafolio a tus propios datos, modifica principalmente los
siguientes archivos:

- `src/data/projects.ts` (Tus proyectos y métricas)
- `src/data/experience.ts` (Tu historial laboral)
- `public/assets/cv.pdf` (Tu currículum vitae)
- `public/assets/images/` (Tus fotografías y capturas de proyectos)

## 📄 Licencia

Este código fuente está disponible bajo la licencia [MIT](LICENSE). Siéntete
libre de clonarlo, estudiarlo y utilizar las bases para tu propio portafolio
profesional.

---

Hecho con React + ❤️ por
**[Xavier Cedeño](https://linkedin.com/in/xavier-cede%C3%B1o-02a750243)**
