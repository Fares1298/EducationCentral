# Deployment Guide

This project is structured for easy deployment on various platforms while maintaining proper client/server separation.

## Current Project Structure
```
├── client/                 # Frontend files
│   ├── index.html         # HTML entry point
│   └── src/               # React source code
├── server/                # Backend API
├── shared/                # Shared types/schemas
├── package.json           # Dependencies and scripts
└── vite.config.ts         # Build configuration
```

## Deployment Options

### Option 1: Vercel (Frontend Only - Recommended for Static Site)
**Important**: This deployment serves only the frontend as a static site. The contact form and course data will work with the pre-loaded data.

1. The included `vercel.json` configures the build properly
2. Upload the entire project to Vercel
3. Vercel will build and serve the static frontend
4. All course information and basic functionality will work

### Option 2: Netlify
1. The included `netlify.toml` configures the deployment
2. Upload the entire project to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist/public`

### Option 3: Traditional Hosting
1. Run `npm run build` to create production files
2. Upload the `dist/public` folder contents to your web server
3. Configure your server to serve `index.html` for all routes (SPA routing)

## Build Process
- Frontend builds to: `dist/public/`
- Backend builds to: `dist/index.js`
- Static assets are properly handled by Vite

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