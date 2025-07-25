# Deployment Checklist for desardacollege.com

## Issue: Courses not loading on live website
The courses page shows headers but no course cards on the live deployment.

## Root Cause
The live deployment is serving as a static site without the backend API, but the fallback mechanism isn't working properly.

## Files to Check for Successful Deployment

### 1. Built Assets (After running `npm run build`)
**Location**: `dist/public/`
- `index.html` - Main HTML file with script references
- `assets/index-[hash].js` - Main JavaScript bundle (should contain static course data)
- `assets/index-[hash].css` - Styles

### 2. Deployment Configuration Files
**Check these files in your deployment platform:**

#### For Vercel:
- `vercel.json` - Build configuration
- Ensure build command: `npm run build`
- Ensure output directory: `dist/public`

#### For Netlify:
- `netlify.toml` - Build configuration  
- `_redirects` - Routing configuration

### 3. Key Source Files with Fallback Logic
**Location**: `client/src/`
- `data/courses.ts` - Static course data (17 courses)
- `pages/Courses.tsx` - Course listing with API fallback
- `pages/CourseDetail.tsx` - Individual course pages with fallback

## Debugging Steps

### Step 1: Check Console Logs
On https://www.desardacollege.com/courses, open browser console (F12) and look for:
```
Static courses data available: 17
Using static fallback data: 17 courses
```

### Step 2: Verify JavaScript Bundle
Check if the main JavaScript file is loading:
- Look for `<script type="module" src="/assets/index-[hash].js">` in page source
- Verify the script file loads without 404 errors

### Step 3: Check Build Output
The last build should show:
```
✓ 1761 modules transformed.
../dist/public/assets/index-[hash].js    1,108.xx kB
```

## Current Status
- ✅ Static course data implemented (17 courses)
- ✅ Fallback mechanism in place
- ✅ Build process working correctly
- ❓ Deployment platform configuration needs verification

## Next Steps
1. Check browser console on live site for error messages
2. Verify the JavaScript bundle is loading properly
3. Confirm deployment platform is using correct build settings
4. If issues persist, check network tab for failed requests

## Expected Result
After fixing deployment configuration, all 17 courses should display correctly on the live website, matching the preview functionality.