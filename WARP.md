# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common Development Commands

### Development Server
```bash
npm run dev
```
Starts the Next.js development server on `http://localhost:3000` with hot reloading.

### Building and Production
```bash
# Build for production
npm run build

# Start production server (after build)
npm start
```

### Code Quality
```bash
# Run ESLint
npm run lint

# TypeScript type checking
npm run type-check
```

### Package Management
```bash
# Install dependencies
npm install

# Install new dependency
npm install <package-name>

# Install dev dependency  
npm install -D <package-name>
```

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Theme**: next-themes for dark/light mode switching
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives

### Project Structure
- **`src/app/`**: Next.js App Router structure
  - `layout.tsx`: Root layout with ThemeProvider and Inter font
  - `page.tsx`: Single-page portfolio with all sections
  - `globals.css`: Global styles and CSS custom properties
- **`src/components/`**: Reusable React components (all sections)
- **Path Aliases**: Configured via tsconfig.json (`@/*`, `@/components/*`, etc.)

### Architecture Patterns

#### Single Page Application
The portfolio is built as a SPA with smooth scrolling navigation between sections. All content is rendered on the main page (`page.tsx`) with section components imported and composed together.

#### Theme System
- Uses `next-themes` with system preference detection
- CSS custom properties defined in `globals.css` for light/dark modes  
- Tailwind configured with `darkMode: 'class'`
- Custom color palette with primary blue theme extending to purple gradients

#### Component Architecture
- **Client Components**: Interactive components use `'use client'` directive
- **Server Components**: Static components render on server by default
- **Composition**: Main page composes all sections: Header → Hero → About → Skills → Projects → Contact → Footer
- **Navigation**: Hash-based navigation with smooth scrolling behavior

#### Styling System
- **Design Tokens**: Custom CSS properties for consistent theming
- **Utility Classes**: Tailwind utilities with custom component classes
- **Responsive Design**: Mobile-first approach with Tailwind responsive prefixes
- **Animations**: Custom keyframes and Framer Motion for interactions

### Key Development Patterns

#### TypeScript Configuration  
- Strict mode enabled with path mapping
- Target ES5 with modern library support
- JSX preserve mode for Next.js processing

#### Styling Conventions
- `.section-container`: Consistent max-width and padding
- `.gradient-text`: Brand gradient text treatment  
- `.btn-primary/.btn-secondary`: Consistent button styles
- `.card-hover`: Standard hover animations

#### Component Structure
- Components use hooks for theme state and mounted state
- Smooth scrolling implemented via `scrollIntoView` API
- Responsive navigation with mobile menu toggle
- Framer Motion variants for staggered animations

### External Dependencies
- **Next.js**: Core framework with Image optimization domains configured
- **Framer Motion**: Complex animations and transitions
- **Lucide React**: Consistent icon system
- **Tailwind Merge/clsx**: Dynamic className handling
- **Radix UI**: Accessible primitive components

### Development Workflow
1. Components are primarily client-side due to interactivity requirements
2. Global styles define the design system foundation
3. Each section component is self-contained and composable
4. Theme switching handles system preferences and manual toggles
5. Smooth scrolling navigation provides SPA-like experience