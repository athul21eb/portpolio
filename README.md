# 🍎 macOS Portfolio

A modern, interactive macOS-inspired portfolio that brings the elegance of Apple's operating system to the web. Built with cutting-edge technologies including React 19, Vite, TailwindCSS v4, and GSAP for silky-smooth animations.

![macOS Portfolio Banner](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

### 🎨 **Authentic macOS Experience**
- Pixel-perfect recreation of macOS UI elements
- Dock-style navigation with bounce effects
- Draggable, resizable floating windows
- Window management (minimize, maximize, close)
- Native-looking context menus and tooltips

### ⚡ **Lightning-Fast Performance**
- Vite-powered development with HMR (Hot Module Replacement)
- Optimized production builds with code splitting
- Tree-shaking for minimal bundle size

### 🌀 **Smooth Animations**
- GSAP-powered animations for professional motion design
- Micro-interactions throughout the interface
- Smooth transitions between states
- Hardware-accelerated animations

### 📄 **PDF Integration**
- Built-in PDF viewer using react-pdf
- View resumes, certificates, and documents seamlessly
- Zoom, pan, and navigation controls

### 🛠️ **Developer Experience**
- TypeScript for type safety and better DX
- Zustand for clean state management
- ESLint configured for code quality
- Component-based architecture

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/athul21eb/portfolio.git
cd portpolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your portfolio in action.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📁 Project Structure

```
macos-portfolio/
├── 📂 src/
│   ├── 📂 components/       # Reusable UI components
│   ├── 📂 assets/           # Images, fonts, static files
│   ├── 📂 pages/            # Page-level components
│   ├── 📂 store/            # Zustand state management
│   ├── 📂 styles/           # Global styles and Tailwind config
│   ├── 📂 utils/            # Helper functions
│   └── 📄 main.tsx          # Application entry point
├── 📂 public/               # Static assets
├── 📄 package.json          # Dependencies and scripts
├── 📄 tsconfig.json         # TypeScript configuration
├── 📄 vite.config.ts        # Vite configuration
├── 📄 tailwind.config.js    # Tailwind CSS configuration
└── 📄 README.md             # Project documentation
```

## 🧰 Tech Stack

### Core

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.x | UI framework |
| **TypeScript** | 5.x | Type safety |
| **Vite** | 7.x | Build tool |
| **TailwindCSS** | 4.x | Styling |

### State & Animation

- **Zustand** - Lightweight state management
- **GSAP** - Professional-grade animations
- **@gsap/react** - React bindings for GSAP
- **Immer** - Immutable state updates

### Utilities

- **Day.js** - Date/time manipulation
- **Lucide React** - Beautiful icon library
- **React Tooltip** - Accessible tooltips
- **React PDF** - PDF rendering
- **PDF.js** - PDF parsing engine

### Development

- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific rules
- **@vitejs/plugin-react** - React support for Vite

## 🎨 Customization

### Personalizing Your Portfolio

1. **Update Content**: Modify components in `src/components/` and `src/pages/`
2. **Change Theme**: Edit Tailwind configuration in `tailwind.config.js`
3. **Add Projects**: Create new project components and add to your portfolio
4. **Customize Dock**: Update dock items in your state management store

### Adding New Windows

```tsx
// Example: Adding a new window component
import { useWindowStore } from './store/windowStore';

const MyNewWindow = () => {
  const { openWindow } = useWindowStore();

  return (
    <div onClick={() => openWindow('mywindow', 'My Window', <Content />)}>
      Open Window
    </div>
  );
};
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Athul**

- 🌐 Portfolio: [[Your Portfolio URL](https://portfolio-brown-nine-78.vercel.app/)]
- 💼 GitHub: [@athul21eb](https://github.com/athul21eb)
- 📧 Email: [athul.eb21@gmail.com]

## 🙏 Acknowledgments

- Inspired by the beautiful design of macOS
- Built with amazing open-source technologies
- Thanks to the React and Vite communities

---

<div align="center">

**[⭐ Star this repo](https://github.com/athul21eb/portfolio)** if you find it helpful!

Made with ❤️ and lots of ☕

</div>
