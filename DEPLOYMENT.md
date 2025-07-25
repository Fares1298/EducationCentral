# Deployment Guide

This project supports **dual-mode deployment**: both full-stack (with backend API) and static-only deployment.

## Current Project Structure
```
├── client/                 # Frontend files
│   ├── index.html         # HTML entry point
│   └── src/               # React source code with static data fallback
├── server/                # Backend API (optional for static deployment)
├── shared/                # Shared types/schemas
├── package.json           # Dependencies and scripts
└── vite.config.ts         # Build configuration
```

## Key Features for Static Deployment
- **Automatic Fallback**: Courses load from API when available, otherwise use embedded static data
- **All 17 courses**: Fully functional course catalog without backend
- **Contact Form**: Works with mailto fallback for static deployment
- **Search and Filters**: Client-side search functionality works offline

## Deployment Options

### Option 1: Vercel (Static - Recommended)
**Perfect for static deployment with built-in course data**

1. Upload entire project to Vercel
2. Vercel automatically detects the build configuration
3. Build command: `npm run build` 
4. Output directory: `dist/public`
5. All 17 courses display from embedded static data

### Option 2: Netlify
1. Upload project to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist/public`
4. Uses embedded course data for static deployment

### Option 3: Traditional Hosting
1. Run `npm run build` locally
2. Upload entire `dist/public` folder to your web server  
3. Configure server to serve `index.html` for all routes (SPA routing)
4. Courses work from embedded static data

## Build Process
- Frontend builds to: `dist/public/`
- Static assets (CSS, JS, images) are placed in `dist/public/assets/`
- HTML file references built assets correctly
- Vercel serves assets from the `/assets/` directory

## Important Notes
- The current structure is optimized for full-stack deployment
- The `client/` folder is intentional and required for the build process
- Don't move files out of `client/` - this will break the build configuration
- All deployment platforms can handle this structure with the provided config files

## Environment Variables (for production)
If you need environment variables, add them to your deployment platform:
- `NODE_ENV=production`
- Any API keys or external service credentials

This structure ensures your college website deploys correctly while maintaining security and performance best practices.