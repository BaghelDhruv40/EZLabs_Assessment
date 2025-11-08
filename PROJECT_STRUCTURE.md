# Project Structure Documentation

## Overview

This document outlines the standardized project structure and coding standards implemented in the EZ Assessment project.

## Directory Structure

```
├── .vscode/                 # VS Code workspace settings
│   ├── settings.json        # Editor settings (format on save, etc.)
│   └── extensions.json      # Recommended extensions
├── public/                  # Static assets served directly
│   └── assets/             # Images, fonts, and other static files
├── src/                     # Source code
│   ├── components/         # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── index.js        # Component barrel exports
│   ├── styles/             # Global styles
│   │   └── index.css       # Tailwind imports and global styles
│   ├── utils/              # Utility functions and constants
│   │   └── constants.js    # Application constants
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Application entry point
├── .editorconfig           # Editor configuration for consistency
├── .eslintrc.js            # ESLint configuration (fixed)
├── .gitignore              # Git ignore patterns (enhanced)
├── .prettierrc.json        # Prettier configuration
├── .prettierignore         # Prettier ignore patterns
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## Coding Standards

### File Naming

- **Components**: PascalCase (e.g., `Contact.jsx`, `Navbar.jsx`)
- **Utilities**: camelCase (e.g., `constants.js`)
- **Config files**: kebab-case or lowercase (e.g., `eslint.config.js`, `.prettierrc.json`)

### Code Style

- **Indentation**: Tabs (2-space width)
- **Quotes**: Double quotes for JSX, single quotes for JavaScript (configurable)
- **Semicolons**: Required
- **Line endings**: LF (Unix-style)
- **Trailing commas**: ES5 style
- **Print width**: 80 characters

### Import Organization

1. React imports
2. Third-party library imports
3. Internal component imports
4. Utility/constant imports
5. Style imports

Example:
```javascript
import React from "react";
import { Contact } from "./components";
import { APP_NAME } from "./utils/constants";
import "./styles/index.css";
```

### Component Structure

```javascript
// Component imports
import React from "react";

// Component definition
export default function ComponentName() {
	// Component logic
	return (
		// JSX
	);
}
```

## Configuration Files

### ESLint (`eslint.config.js`)

- Fixed incorrect import path
- Configured with React hooks and refresh plugins
- Added rules for unused variables and console warnings
- Properly configured for ESLint 9 flat config format

### Prettier (`.prettierrc.json`)

- Configured with tabs, 2-space width
- Double quotes for JSX
- ES5 trailing commas
- 80 character print width

### EditorConfig (`.editorconfig`)

- Ensures consistent coding styles across different editors
- Configures line endings, indentation, and charset

### VS Code Settings (`.vscode/settings.json`)

- Format on save enabled
- ESLint auto-fix on save
- Prettier as default formatter
- Consistent line endings and whitespace handling

## NPM Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Check for linting errors
- `npm run lint:fix` - Auto-fix linting errors
- `npm run format` - Format all code with Prettier
- `npm run format:check` - Check code formatting

## Best Practices

1. **Component Organization**: Use barrel exports (`index.js`) for cleaner imports
2. **Style Management**: Centralize global styles in `src/styles/index.css`
3. **Constants**: Store application constants in `src/utils/constants.js`
4. **Code Quality**: Run `lint` and `format:check` before committing
5. **Consistency**: Follow the established naming conventions and file structure

## Improvements Made

1. ✅ Fixed ESLint configuration (corrected import paths for ESLint 9)
2. ✅ Added Prettier configuration for consistent formatting
3. ✅ Added EditorConfig for cross-editor consistency
4. ✅ Improved project folder structure (added `styles/`, `utils/` folders)
5. ✅ Added component index files for cleaner imports
6. ✅ Standardized code formatting across all files
7. ✅ Enhanced `.gitignore` with additional patterns
8. ✅ Updated README with comprehensive documentation
9. ✅ Added format scripts to `package.json`
10. ✅ Created VS Code workspace settings
11. ✅ Added Prettier to devDependencies
12. ✅ Removed redundant `App.css` (moved to `styles/index.css`)

