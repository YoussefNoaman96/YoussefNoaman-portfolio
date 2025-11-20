# AI Agent Instructions for Portfolio Project

## Project Overview
This is a React-based portfolio project created with Create React App. The project follows standard React practices and conventions.

## Architecture & Structure
- Entry point: `src/index.js` bootstraps the React application
- Main component: `src/App.js` serves as the root component
- Static assets: `public/` directory contains static files
- Styles: Component-specific CSS files are co-located with components (e.g., `App.css` with `App.js`)

## Development Workflow
### Setup
```bash
npm install  # Install dependencies
```

### Development Commands
- `npm start` - Runs development server at http://localhost:3000
- `npm test` - Runs test suite in watch mode
- `npm run build` - Creates production build in `build/`

## Testing
- Test files are co-located with components with `.test.js` suffix
- Uses Jest and React Testing Library
- Example: `App.test.js` for testing `App.js`

## Dependencies
- React 19.2.0
- Testing Library (DOM, Jest-DOM, React, User Event)
- React Scripts 5.0.1

## Conventions
1. File Structure:
   - Components are in `src/` directory
   - Each component should have its own CSS file
   - Test files are adjacent to components

2. React Patterns:
   - Functional components with hooks
   - CSS modules for styling
   - Standard Create React App folder structure

## Known Quirks & Gotchas
- Project uses React 19.2.0 - ensure compatibility when adding new packages
- Browser support defined in `browserslist` in `package.json`
- ESLint configuration extends from `react-app` and `react-app/jest`

## Important Files
- `package.json`: Project configuration and dependencies
- `src/App.js`: Main application component
- `public/index.html`: HTML template