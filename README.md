# EZ Assessment

A modern React application built with Vite, featuring a clean and responsive UI with Tailwind CSS.

## 🚀 Features

- ⚡️ Fast development with Vite  
- ⚛️ React 19 with modern hooks  
- 🎨 Tailwind CSS for styling  
- 🔧 ESLint for code quality  
- 💅 Prettier for code formatting  
- 📦 Organized project structure  
- 🌐 Contact Form integrated with live backend API  

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
│   │   └── index.js     # Component exports
│   ├── styles/          # Global styles
│   │   └── index.css    # Tailwind imports and global styles
│   ├── utils/           # Utility functions and constants
│   │   └── constants.js
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── postman/
│   ├── Contact Form Tests.postman_collection.json
│   └── EZLab Environment.postman_environment.json
├── .editorconfig        # Editor configuration
├── .eslintrc.js         # ESLint configuration
├── .gitignore           # Git ignore patterns
├── .prettierrc.json     # Prettier configuration
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
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

---

## 🌐 API Integration (Contact Form)

The contact form integrates with the provided backend endpoint:

**Endpoint:**  
`https://vernanbackend.ezlab.in/api/contact-us/`  
**Method:** `POST`  

**Request Body Example:**
```json
{
  "name": "Test user",
  "email": "testuser@gmail.com",
  "phone": "908765498",
  "message": "This is a message"
}
```

**Expected Response (200):**
```json
{
  "id": 49,
  "name": "Test user",
  "email": "testuser@gmail.com",
  "phone": "908765498",
  "message": "This is a message",
  "created_at": "2025-10-10T05:27:59.371578Z",
  "updated_at": "2025-10-10T05:27:59.371598Z"
}
```

### Form Behavior

- Empty field submissions are blocked (front-end validation)  
- Email format is validated before submission  
- On success, a “Form Submitted” message appears  
- Includes optional loading and reset states  

---

## 🧪 Postman Testing

To make API verification easy, this repository includes ready-to-import Postman files.

### Files
```
postman/
├── Contact Form Tests.postman_collection.json
└── EZLab Environment.postman_environment.json
```

### How to Use

1. **Import the Collection**
   - In Postman → *File → Import* → select `Contact Form Tests.postman_collection.json`.

2. **Import the Environment (optional)**
   - Import `EZLab Environment.postman_environment.json`.
   - Choose environment `EZLab` in the top-right corner.

3. **Run Tests**
   - ✅ **Valid Contact Form Submission** → expects HTTP `200 OK`
   - 🚫 **Empty Fields** → should fail (for validation test)
   - ⚠️ **Invalid Email Format** → blocked by front-end

### Example cURL
```bash
curl -X POST "https://vernanbackend.ezlab.in/api/contact-us/"   -H "Content-Type: application/json"   -d '{"name":"Test user","email":"testuser@gmail.com","phone":"908765498","message":"This is a message"}'
```

---

## ☁️ Deployment

The project can be deployed easily using **Vercel**, **Netlify**, or **GitHub Pages**.

Example deployment steps (for Vercel):

1. Push your code to a GitHub repository  
2. Visit [vercel.com](https://vercel.com)  
3. Import your GitHub repo  
4. Vercel automatically builds and deploys the app  

After deployment, your app will be live at a generated URL, e.g.  
`https://ez-assessment.vercel.app`

---

## 📝 Code Quality

### Linting
```bash
npm run lint
npm run lint:fix
```

### Formatting
```bash
npm run format
npm run format:check
```

---

## 🎨 Styling

This project uses Tailwind CSS for styling.  
Global styles and Tailwind directives are located in `src/styles/index.css`.

---

## 📦 Dependencies

### Production
- `react`
- `react-dom`

### Development
- `@vitejs/plugin-react`
- `eslint`
- `prettier`
- `tailwindcss`
- `vite`

---

## 🔧 Configuration

- **ESLint**: React hooks + refresh plugins  
- **Prettier**: Tabs, 2-space indentation, ES5 trailing commas  
- **EditorConfig**: Consistent coding style across editors  
- **Tailwind**: Custom font families (Halant, Instrument Sans)

---

## 📄 License

This project is private.
