# 🚀 Portfolio Profesional - XCedeño 

![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

Bienvenido al repositorio de mi portafolio profesional. Este proyecto es una aplicación web moderna, responsiva y bilingüe diseñada para mostrar mi experiencia, habilidades y proyectos en el desarrollo de software y análisis de sistemas.

## 🌟 Características Principales

*   **🌐 Soporte Bilingüe (Español/Inglés):** Implementación completa de i18n mediante `LanguageContext`. Todo el contenido, desde la navegación hasta los detalles de los proyectos, es traducible al instante con un solo clic.
*   **🎨 UI/UX Moderna:** Diseño elegante y oscuro utilizando `styled-components` para un estilizado dinámico y mantenible.
*   **📱 Diseño Responsivo:** Adaptable a dispositivos móviles, tablets y escritorio.
*   **✨ Interacciones Dinámicas:**
    *   **Sección About:** Iconos de empresas interactivos que abren un **Modal detallado** con información de la experiencia laboral.
    *   **Efectos Hover:** Animaciones suaves en tarjetas de proyectos y botones.
*   **📂 Gestión de Proyectos:** Separación clara entre proyectos de **Programación** y **Networking** con tarjetas informativas ricas en detalles.

## 🛠️ Tecnologías Utilizadas

El proyecto está construido con un stack robusto y moderno:

| Tecnología | Propósito |
| :--- | :--- |
| **React 18** | Biblioteca principal para la interfaz de usuario. |
| **TypeScript** | Superset de JavaScript para un código tipado y seguro. |
| **Vite** | Entorno de desarrollo ultrarrápido y bundler. |
| **Styled Components** | Estilizado CSS-in-JS para componentes modulares. |
| **React Icons** | Colección de iconos vectoriales ligeros. |
| **React Router** | Enrutamiento dinámico SPA (Single Page Application). |

## 🚀 Instalación y Ejecución

Sigue estos pasos para correr el proyecto en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/xcedeno/miportafolio.git
    cd miportafolio
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  **Construir para producción:**
    ```bash
    npm run build
    ```

## 📂 Estructura del Proyecto

La arquitectura del proyecto está organizada para la escalabilidad:

```
src/
├── 📂 components/      # Componentes reutilizables (Navbar, Footer, etc.)
│   ├── 📂 About/       # Sección "Sobre Mí" con lógica de Modal
│   ├── 📂 Hero/        # Sección principal con animación de iconos
│   ├── 📂 Projects/    # Vista general de categorías de proyectos
│   └── ...
├── 📂 context/         # Contexto global (Manejo de Idioma)
├── 📂 data/            # Datos estáticos bilingües (Experience, Education, Skills)
├── 📂 screens/         # Pantallas completas (ProgrammingScreen, NetworkingScreen)
├── 📜 App.tsx          # Punto de entrada principal y rutas
└── 📜 index.css        # Estilos globales y variables CSS
```

## 🧩 Detalles de Implementación

### Sistema de Idiomas (`LanguageContext`)
El cambio de idioma se maneja a través de un contexto global que provee el estado `language` ('es' | 'en') y la función `t()` para traducir textos fijos. Los datos complejos (como descripciones de trabajo) se almacenan como objetos `{ es: "...", en: "..." }` y se renderizan dinámicamente según el idioma seleccionado.

### Sección de Experiencia (`About.tsx`)
Para mantener la interfaz limpia, la sección de experiencia muestra una línea de tiempo minimalista con los logos de las empresas. Al hacer clic en un logo, se activa un **Modal** que muestra:
*   Cargo y Empresa
*   Duración (con estilos destacados)
*   Descripción detallada de responsabilidades

---

Hecho con ❤️ por **XCedeño**
