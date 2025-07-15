# Modern Landing Page - Tech Stack Demo

A comprehensive Next.js project showcasing the integration of modern web development technologies including **Lottie animations**, **SASS**, **React Icons**, **PostCSS**, and **Tailwind CSS**.

## 🚀 Technologies Used

- **Next.js 15+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **SASS/SCSS** - CSS preprocessor with variables and mixins
- **React Icons** - Comprehensive icon library
- **Lottie React** - Lightweight animations
- **PostCSS** - CSS transformation and optimization

## 🎨 Features Demonstrated

### 1. **Tailwind CSS Integration**
- Responsive grid layouts
- Utility classes for rapid styling
- Dark mode support preparation
- Custom color schemes

### 2. **SASS/SCSS Features**
- Custom variables for consistent theming
- Mixins for reusable button and card styles
- Nested selectors for organized CSS
- Gradient text effects

### 3. **React Icons**
- Multiple icon libraries (FontAwesome, Material Design)
- Type-safe icon components
- Interactive social media links
- Feature cards with icon variants

### 4. **Lottie Animations**
- JSON-based animations
- Interactive play/pause controls
- Smooth loading indicators
- Hover effects and transforms

### 5. **PostCSS Processing**
- Automatic vendor prefixing
- CSS optimization
- Tailwind CSS compilation
- Modern CSS features

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles + Tailwind imports
│   └── styles/
│       └── custom.scss   # SASS variables, mixins, and styles
├── components/
│   ├── FeatureCard.tsx   # Card component with React Icons
│   ├── CustomButton.tsx  # Button component with SASS styles
│   └── LottieAnimation.tsx # Lottie animation wrapper
public/
└── animations/
    └── loading.json      # Lottie animation data
```

## 🛠 Installation & Setup

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Dependencies

### Core Dependencies
```json
{
  "lottie-react": "^2.4.1",
  "next": "15.4.1",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "react-icons": "^5.5.0",
  "sass": "^1.89.2"
}
```

### Development Dependencies
```json
{
  "@tailwindcss/postcss": "^4",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```

## 🎯 Key Components

### FeatureCard Component
- Showcases React Icons integration
- Uses SASS mixins for styling
- Combines with Tailwind utility classes

### CustomButton Component
- Demonstrates SASS variables and mixins
- Icon + text combinations
- Multiple style variants (primary, secondary, accent)

### LottieAnimation Component
- Wrapper for lottie-react
- Interactive animation controls
- Responsive sizing with CSS transforms

## 🎨 SASS Features Used

- **Variables**: Color schemes, spacing, and design tokens
- **Mixins**: Reusable button styles, card layouts, gradient text
- **Nesting**: Organized component-specific styles
- **Functions**: Dynamic styling with lighten/darken

## 📱 Responsive Design

- Mobile-first approach with Tailwind CSS
- Flexible grid layouts (1/2/3 columns)
- Responsive typography with clamp()
- Touch-friendly interactive elements

## 🚀 Performance Optimizations

- Next.js automatic code splitting
- PostCSS optimization and purging
- Optimized Lottie animations
- Efficient icon loading with React Icons

## 🎮 Interactive Features

- **Animation Controls**: Play/pause Lottie animations
- **Hover Effects**: Card transforms and button animations
- **Responsive Navigation**: Social media links
- **Modern UX**: Smooth transitions and micro-interactions

## 📈 Build & Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🤝 Contributing

This project serves as a demonstration of modern web development practices. Feel free to explore the code and adapt it for your own projects!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
