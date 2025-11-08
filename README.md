# EZ Assessment

A modern React application built with Vite, featuring a clean and responsive UI with Tailwind CSS.

## 🚀 Features

- ⚡️ Fast development with Vite
- ⚛️ React 19 with modern hooks
- 🎨 Tailwind CSS for styling
- 🔧 ESLint for code quality
- 💅 Prettier for code formatting
- 📦 Organized project structure

## 📁 Project Structure

```
├── public/
│   └── assets/          # Static assets (images, fonts, etc.)
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── index.js    # Component exports
│   ├── styles/         # Global styles
│   │   └── index.css   # Tailwind imports and global styles
│   ├── utils/          # Utility functions and constants
│   │   └── constants.js
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── .editorconfig       # Editor configuration
├── .eslintrc.js        # ESLint configuration
├── .gitignore          # Git ignore patterns
├── .prettierrc.json    # Prettier configuration
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📝 Code Quality

### Linting

Check for linting errors:

```bash
npm run lint
```

Auto-fix linting errors:

```bash
npm run lint:fix
```

### Formatting

Format all code:

```bash
npm run format
```

Check formatting:

```bash
npm run format:check
```

## 🎨 Styling

This project uses Tailwind CSS for styling. Global styles and Tailwind directives are located in `src/styles/index.css`.

## 📦 Dependencies

### Production

- `react` - React library
- `react-dom` - React DOM renderer

### Development

- `@vitejs/plugin-react` - Vite plugin for React
- `eslint` - JavaScript linter
- `prettier` - Code formatter
- `tailwindcss` - Utility-first CSS framework
- `vite` - Build tool and dev server

## 🔧 Configuration

- **ESLint**: Configured with React hooks and refresh plugins
- **Prettier**: Configured with tabs, 2-space indentation, and ES5 trailing commas
- **EditorConfig**: Ensures consistent coding styles across editors
- **Tailwind**: Configured with custom font families (Halant, Instrument Sans)

## 📄 License

This project is private.
