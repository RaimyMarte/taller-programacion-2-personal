# SpeedCubing Wiki 🧩

Una aplicación web moderna y estática dedicada al mundo del SpeedCubing, la evolución de los mecanismos magnéticos, y las competiciones oficiales de la WCA.

Desarrollada como proyecto de plataforma de conocimiento centralizada utilizando tecnologías web modernas.

## ✨ Características

- 📚 **Glosario Interactivo**: Definiciones de términos técnicos (CFOP, WCA, Look-ahead, etc.).
- 📊 **Tablas Comparativas**: Análisis estructurado de los mejores cubos magnéticos del mercado.
- 🗺️ **Mapas Visuales**: Flujos algorítmicos para aprender métodos avanzados.
- 🏆 **Estudios de Caso**: Análisis de récords mundiales y eficiencia de movimientos.

## 🛠️ Tecnologías Utilizadas

- **[React](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)** - Para tipado estricto y modelos de dominio orientados a datos.
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Diseño estético moderno con modo oscuro y *glassmorphism*.
- **[Vite](https://vitejs.dev/)** - Empaquetador extremadamente rápido.
- **[React Router DOM](https://reactrouter.com/)** - Navegación tipo SPA usando `HashRouter` para compatibilidad total con servidores estáticos.

## 🚀 Despliegue en GitHub Pages

Este proyecto está preconfigurado para compilarse y publicarse automáticamente en GitHub Pages usando el paquete `gh-pages`. Para subir la versión actual de tu código a producción, simplemente ejecuta:

```bash
npm run deploy
```

Este comando generará la carpeta `dist` y la empujará automáticamente a la rama `gh-pages` de tu repositorio.

## 💻 Desarrollo Local

Si deseas correr el proyecto en tu máquina local:

```bash
# 1. Instalar todas las dependencias
npm install

# 2. Iniciar el servidor de desarrollo local
npm run dev

# 3. Compilar para producción (opcional)
npm run build
```
