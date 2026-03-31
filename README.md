# Gym Website

A modern, multi-page gym and fitness website built with React and Vite. The project is designed to present gym services, trainers, membership plans, and contact information in a clean, responsive interface.

## Features

- Responsive layout for mobile, tablet, and desktop
- Dedicated pages for Home, About, Services, Pricing, Gallery, and Contact
- Reusable UI components for sections like hero, trainer cards, testimonials, and plans
- BMI calculator section for basic fitness engagement
- Client-side routing with React Router

## Tech Stack

- React 19
- Vite 8
- React Router DOM 7
- Tailwind CSS 4
- React Icons
- ESLint

## Project Structure

```text
src/
	component/
		button/
	layout/
	pages/
	assets/
	App.jsx
	App.css
	main.jsx
```

## Routes

- /
- /about
- /services
- /pricing
- /gallery
- /contact

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Available Scripts

- npm run dev: Start Vite development server
- npm run build: Create production build
- npm run preview: Preview production build locally
- npm run lint: Run ESLint checks

## Notes

- The app uses Browser Router, so direct route refreshes require proper server fallback configuration in production.
- Static assets are stored in the `public` and `src/assets` directories.
